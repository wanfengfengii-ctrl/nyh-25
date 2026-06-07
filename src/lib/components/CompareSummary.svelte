<script lang="ts">
  import { sundialStore } from '$lib/stores/sundialStore';
  import { BarChart3, ArrowRight, Clock, Maximize2 } from 'lucide-svelte';
  import { COMPARE_COLORS } from '$lib/types';
  import type { SundialType } from '$lib/types';

  const {
    config,
    sunriseSunset,
    maxShadowLength,
    noonShadow,
    comparePresetsData
  } = sundialStore;

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

  function formatHours(hours: number): string {
    return hours.toFixed(1) + ' 小时';
  }

  function formatLength(length: number): string {
    return length.toFixed(2);
  }

  function formatAngle(angle: number): string {
    return angle.toFixed(1) + '°';
  }

  function getDiffClass(current: number, compare: number): string {
    const diff = compare - current;
    if (Math.abs(diff) < 0.001) return 'text-slate-400';
    return diff > 0 ? 'text-green-400' : 'text-red-400';
  }

  function getDiffValue(current: number, compare: number, unit: string = ''): string {
    const diff = compare - current;
    if (Math.abs(diff) < 0.001) return '—';
    const prefix = diff > 0 ? '+' : '';
    return prefix + diff.toFixed(2) + unit;
  }
</script>

<div class="glass-card p-5">
  <div class="flex items-center justify-between mb-4">
    <h3 class="font-display text-base text-amber-500 font-semibold flex items-center gap-2">
      <BarChart3 class="w-4 h-4" />
      方案差异摘要
    </h3>
  </div>

  {#if !$config.compareMode || $comparePresetsData.length === 0}
    <div class="text-center py-6 text-slate-500 text-sm">
      选择 1-4 个方案进行对比
      <div class="text-xs mt-1 text-slate-600">
        在下方预设列表中点击对比按钮
      </div>
    </div>
  {:else}
    <div class="space-y-4">
      <div class="bg-slate-800/40 rounded-lg p-3 border border-amber-500/30">
        <div class="flex items-center gap-2 mb-2">
          <span class="w-3 h-3 rounded-full bg-amber-500"></span>
          <span class="text-sm font-medium text-amber-500">当前方案</span>
          <span class="text-xs text-slate-500 ml-auto">{typeLabels[$config.type]}</span>
        </div>
        <div class="grid grid-cols-3 gap-2 text-center">
          <div>
            <div class="text-xs text-slate-500 mb-1">最长影长</div>
            <div class="font-mono text-sm text-slate-200">{formatLength($maxShadowLength)}</div>
          </div>
          <div>
            <div class="text-xs text-slate-500 mb-1">正午方向</div>
            <div class="font-mono text-sm text-slate-200">
              {$noonShadow ? formatAngle($noonShadow.angle) : '--'}
            </div>
          </div>
          <div>
            <div class="text-xs text-slate-500 mb-1">日照时长</div>
            <div class="font-mono text-sm text-slate-200">{formatHours($sunriseSunset.dayLength)}</div>
          </div>
        </div>
      </div>

      {#each $comparePresetsData as data}
        <div class="rounded-lg p-3 border"
             style="background-color: {data.color}08; border-color: {data.color}30">
          <div class="flex items-center gap-2 mb-2">
            <span class="w-3 h-3 rounded-full" style="background-color: {data.color}"></span>
            <span class="text-sm font-medium" style="color: {data.color}">{data.preset.name}</span>
            <span class="text-xs text-slate-500 ml-auto">{typeLabels[data.preset.type]}</span>
          </div>
          <div class="grid grid-cols-3 gap-2 text-center">
            <div>
              <div class="text-xs text-slate-500 mb-1">最长影长</div>
              <div class="font-mono text-sm text-slate-200">
                {formatLength(data.maxShadowLength)}
              </div>
              <div class="text-xs {getDiffClass($maxShadowLength, data.maxShadowLength)}">
                {getDiffValue($maxShadowLength, data.maxShadowLength)}
              </div>
            </div>
            <div>
              <div class="text-xs text-slate-500 mb-1">正午方向</div>
              <div class="font-mono text-sm text-slate-200">
                {formatAngle(data.noonShadowAngle)}
              </div>
              <div class="text-xs {getDiffClass($noonShadow?.angle ?? 0, data.noonShadowAngle)}">
                {getDiffValue($noonShadow?.angle ?? 0, data.noonShadowAngle, '°')}
              </div>
            </div>
            <div>
              <div class="text-xs text-slate-500 mb-1">日照时长</div>
              <div class="font-mono text-sm text-slate-200">
                {formatHours(data.sunriseSunset.dayLength)}
              </div>
              <div class="text-xs {getDiffClass($sunriseSunset.dayLength, data.sunriseSunset.dayLength)}">
                {getDiffValue($sunriseSunset.dayLength, data.sunriseSunset.dayLength, 'h')}
              </div>
            </div>
          </div>
        </div>
      {/each}

      <div class="pt-2 border-t border-slate-700/50">
        <div class="text-xs text-slate-500">
          <span class="text-green-400">绿色</span> 表示优于当前方案 · 
          <span class="text-red-400">红色</span> 表示劣于当前方案
        </div>
      </div>
    </div>
  {/if}
</div>
