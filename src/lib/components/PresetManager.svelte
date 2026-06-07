<script lang="ts">
  import { sundialStore } from '$lib/stores/sundialStore';
  import { Save, Trash2, Copy, Play } from 'lucide-svelte';
  import { get } from 'svelte/store';
  import type { SundialType } from '$lib/types';

  const {
    config,
    presets,
    savePreset,
    loadPreset,
    deletePreset,
    setCompareMode,
    setComparePreset
  } = sundialStore;

  let newPresetName = $state('');
  let showSaveInput = $state(false);

  const typeLabels: Record<SundialType, string> = {
    equatorial: '赤道式',
    horizontal: '水平式',
    vertical: '垂直式'
  };

  function formatTime(hours: number): string {
    const h = Math.floor(hours);
    const m = Math.floor((hours - h) * 60);
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}`;
  }

  function formatDate(dateStr: string): string {
    return dateStr;
  }

  function handleSave() {
    const cfg = get(config);
    const name = newPresetName.trim() || `${typeLabels[cfg.type]} - ${formatDate(cfg.date)}`;
    const success = savePreset(name);
    if (success) {
      newPresetName = '';
      showSaveInput = false;
    }
  }

  function toggleCompare(presetId: string) {
    const cfg = get(config);
    if (cfg.comparePresetId === presetId) {
      setComparePreset(null);
      setCompareMode(false);
    } else {
      setComparePreset(presetId);
      setCompareMode(true);
    }
  }

  function handleDelete(id: string) {
    deletePreset(id);
  }

  function handleCompare(id: string) {
    toggleCompare(id);
  }

  function handleLoad(id: string) {
    loadPreset(id);
  }

  function getCompareBtnClass(presetId: string): string {
    const cfg = get(config);
    const base = 'p-1.5 rounded-md transition-colors ';
    if (cfg.comparePresetId === presetId) {
      return base + 'bg-blue-500/30 text-blue-400';
    }
    return base + 'hover:bg-slate-600/50 text-slate-400';
  }

  function getPresetItemClass(presetId: string): string {
    const cfg = get(config);
    const base = 'p-3 rounded-lg border transition-all ';
    if (cfg.comparePresetId === presetId) {
      return base + 'bg-blue-900/20 border-blue-500/30';
    }
    return base + 'bg-slate-700/30 border-slate-600/30';
  }
</script>

<div class="glass-card p-5 h-full flex flex-col">
  <div class="flex items-center justify-between mb-4">
    <h3 class="font-display text-base text-amber-500 font-semibold flex items-center gap-2">
      <Save class="w-4 h-4" />
      参数方案
    </h3>
    <button
      onclick={() => { showSaveInput = !showSaveInput; }}
      class="px-3 py-1 text-xs bg-amber-500/20 hover:bg-amber-500/30 text-amber-500
             rounded-md transition-colors flex items-center gap-1"
    >
      <Save class="w-3 h-3" />
      保存
    </button>
  </div>

  {#if showSaveInput}
    <div class="mb-4 p-3 bg-slate-700/30 rounded-lg border border-slate-600/30">
      <input
        type="text"
        bind:value={newPresetName}
        placeholder="方案名称（可选）"
        class="w-full px-3 py-2 bg-slate-800/50 border border-slate-600/50 rounded-md text-sm
               focus:outline-none focus:border-amber-500/50 mb-2"
        onkeydown={(e) => { if (e.key === 'Enter') handleSave(); }}
      />
      <div class="flex gap-2">
        <button
          onclick={handleSave}
          class="flex-1 py-1.5 bg-amber-500/30 hover:bg-amber-500/50 text-amber-500
                 rounded-md text-sm transition-colors"
        >
          确认保存
        </button>
        <button
          onclick={() => { showSaveInput = false; newPresetName = ''; }}
          class="flex-1 py-1.5 bg-slate-600/30 hover:bg-slate-600/50 text-slate-400
                 rounded-md text-sm transition-colors"
        >
          取消
        </button>
      </div>
    </div>
  {/if}

  <div class="flex-1 overflow-y-auto space-y-2 min-h-0">
    {#if $presets.length === 0}
      <div class="text-center py-8 text-slate-500 text-sm">
        暂无保存的方案
        <br />
        <span class="text-xs">点击"保存"按钮保存当前参数</span>
      </div>
    {:else}
      {#each $presets as preset (preset.id)}
        <div class={getPresetItemClass(preset.id)}>
          <div class="flex items-start justify-between">
            <button
              class="flex-1 min-w-0 text-left mr-2"
              onclick={() => handleLoad(preset.id)}
            >
              <div class="font-medium text-sm text-slate-100 truncate">{preset.name}</div>
              <div class="text-xs text-slate-400 mt-1 space-y-0.5">
                <div class="flex gap-3">
                  <span>{typeLabels[preset.type]}</span>
                  <span>纬度: {preset.latitude.toFixed(1)}°</span>
                </div>
                <div class="flex gap-3">
                  <span>{formatDate(preset.date)}</span>
                  <span>{formatTime(preset.timeHours)}</span>
                </div>
              </div>
            </button>
            <div class="flex items-center gap-1 flex-shrink-0">
              <button
                class={getCompareBtnClass(preset.id)}
                onclick={() => handleCompare(preset.id)}
                title="对比"
              >
                <Copy class="w-4 h-4" />
              </button>
              <button
                class="p-1.5 rounded-md hover:bg-red-900/30 text-slate-400 hover:text-red-400 transition-colors"
                onclick={() => handleDelete(preset.id)}
                title="删除"
              >
                <Trash2 class="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      {/each}
    {/if}
  </div>

  {#if $config.compareMode}
    <div class="mt-3 pt-3 border-t border-slate-700/50">
      <div class="text-xs text-blue-400 flex items-center gap-1">
        <Play class="w-3 h-3" />
        对比模式已启用
      </div>
    </div>
  {/if}
</div>
