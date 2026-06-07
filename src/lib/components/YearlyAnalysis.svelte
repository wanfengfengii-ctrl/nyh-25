<script lang="ts">
  import { sundialStore } from '$lib/stores/sundialStore';
  import { Calendar, Sun, Snowflake, Leaf, Flower2, Layers } from 'lucide-svelte';
  import { get } from 'svelte/store';
  import { KEY_DATE_COLORS } from '$lib/types';
  import type { KeyDateMode } from '$lib/types';

  const {
    config,
    yearlyAnalysis,
    keyDateTracks,
    setDate,
    setKeyDateMode
  } = sundialStore;

  type TabMode = 'single' | 'solstices' | 'equinoxes' | 'quarterly';

  function formatTime(hours: number): string {
    const h = Math.floor(hours);
    const m = Math.floor((hours - h) * 60);
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}`;
  }

  function formatDate(dateStr: string): string {
    const d = new Date(dateStr);
    return `${d.getMonth() + 1}月${d.getDate()}日`;
  }

  function goToDate(dateStr: string) {
    setDate(dateStr);
  }

  const modeTabs: { mode: TabMode; label: string }[] = [
    { mode: 'single', label: '单日' },
    { mode: 'solstices', label: '至日' },
    { mode: 'equinoxes', label: '分日' },
    { mode: 'quarterly', label: '四立' },
  ];

  function switchMode(mode: KeyDateMode) {
    setKeyDateMode(mode);
  }

  function getDateData(mode: string, key: string, index?: number) {
    const data = get(yearlyAnalysis);
    if (mode === 'solstices') {
      return data.solstices[key as 'summer' | 'winter'];
    } else if (mode === 'equinoxes') {
      return data.equinoxes[key as 'spring' | 'autumn'];
    } else if (mode === 'quarterly' && index !== undefined) {
      return data.quarterly[index];
    }
    return null;
  }

  const keyDateGroups = [
    {
      mode: 'solstices' as const,
      label: '至日',
      icon: Sun,
      colors: KEY_DATE_COLORS.solstices,
      dates: [
        { key: 'summer', label: '夏至' },
        { key: 'winter', label: '冬至' }
      ]
    },
    {
      mode: 'equinoxes' as const,
      label: '分日',
      icon: Leaf,
      colors: KEY_DATE_COLORS.equinoxes,
      dates: [
        { key: 'spring', label: '春分' },
        { key: 'autumn', label: '秋分' }
      ]
    },
    {
      mode: 'quarterly' as const,
      label: '四立',
      icon: Flower2,
      colors: KEY_DATE_COLORS.quarterly,
      dates: [
        { key: 'q1', label: '立春', index: 0 },
        { key: 'q2', label: '立夏', index: 1 },
        { key: 'q3', label: '立秋', index: 2 },
        { key: 'q4', label: '立冬', index: 3 }
      ]
    }
  ];
</script>

<div class="glass-card p-5">
  <div class="flex items-center justify-between mb-4">
    <h3 class="font-display text-base text-amber-500 font-semibold flex items-center gap-2">
      <Calendar class="w-4 h-4" />
      全年太阳轨迹分析
    </h3>
  </div>

  <div class="flex gap-1 mb-4 bg-slate-800/40 rounded-lg p-1">
    {#each modeTabs as tab}
      <button
        onclick={() => switchMode(tab.mode)}
        class="flex-1 py-1.5 text-xs font-medium rounded-md transition-all
               { $config.keyDateMode === tab.mode
                   ? 'bg-amber-500/20 text-amber-500'
                   : 'text-slate-400 hover:text-slate-300' }"
      >
        {tab.label}
      </button>
    {/each}
  </div>

  {#if $config.keyDateMode !== 'single'}
    <div class="flex items-center gap-1.5 mb-3 px-2 py-1.5 bg-violet-500/10 border border-violet-500/30 rounded-lg">
      <Layers class="w-3.5 h-3.5 text-violet-400" />
      <span class="text-xs text-violet-400">叠加模式：已在视图中显示多条轨迹</span>
    </div>
  {/if}

  <div class="space-y-4">
    <div class="bg-slate-800/40 rounded-lg p-3 border border-slate-700/50">
      <div class="text-xs text-slate-400 mb-2">当前日期</div>
      <div class="flex items-center justify-between">
        <div>
          <div class="font-mono text-sm text-slate-200">{$config.date}</div>
          <div class="text-xs text-slate-500 mt-0.5">
            日照: {$yearlyAnalysis.currentDay.dayLength.toFixed(1)}小时 · 
            最高: {$yearlyAnalysis.currentDay.maxAltitude.toFixed(1)}°
          </div>
        </div>
      </div>
    </div>

    {#each keyDateGroups as group}
      <div class="opacity-90">
        <div class="flex items-center gap-2 mb-2">
          <svelte:component this={group.icon} class="w-3.5 h-3.5 text-slate-400" />
          <span class="text-xs font-medium text-slate-400">{group.label}</span>
        </div>
        <div class="grid grid-cols-2 gap-2">
          {#each group.dates as dateItem, idx}
            {@const dateData = getDateData(group.mode, dateItem.key, (dateItem as any).index)}
            {#if dateData}
              <button
                onclick={() => goToDate(dateData.date)}
                class="p-2 bg-slate-800/40 hover:bg-slate-700/50 rounded-lg border 
                       hover:border-amber-500/30 transition-all text-left relative overflow-hidden
                       { $config.keyDateMode === group.mode ? 'border-slate-500/50' : 'border-slate-700/50' }"
              >
                {#if $config.keyDateMode === group.mode}
                  <div
                    class="absolute left-0 top-0 bottom-0 w-1 rounded-l-lg"
                    style="background-color: {group.colors[idx]};"
                  ></div>
                {/if}
                <div class="text-xs font-medium text-slate-200 pl-1">{dateItem.label}</div>
                <div class="text-xs text-slate-500 mt-0.5 pl-1">{formatDate(dateData.date)}</div>
                <div class="text-xs text-amber-500/80 mt-1 pl-1">
                  {dateData.dayLength.toFixed(1)}h · {dateData.maxAltitude.toFixed(0)}°
                </div>
              </button>
            {/if}
          {/each}
        </div>
      </div>
    {/each}

    <div class="pt-2 border-t border-slate-700/50">
      <div class="text-xs text-slate-500 flex items-center gap-1">
        <Snowflake class="w-3 h-3" />
        <span>冬至日照最短 · 夏至日照最长</span>
      </div>
    </div>
  </div>
</div>
