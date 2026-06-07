<script lang="ts">
  import { sundialStore } from '$lib/stores/sundialStore';
  import { Calendar, Clock, Globe, Sun, Sunrise, Sunset } from 'lucide-svelte';
  import type { SundialType } from '$lib/types';
  import { get } from 'svelte/store';

  const {
    config,
    solarPosition,
    sunVisible,
    sunriseSunset,
    setType,
    setLatitude,
    setDate,
    setTimeHours,
    resetToNow
  } = sundialStore;

  const sundialTypes: { value: SundialType; label: string; desc: string }[] = [
    { value: 'equatorial', label: '赤道式', desc: '盘面平行于赤道面' },
    { value: 'horizontal', label: '水平式', desc: '盘面水平放置' },
    { value: 'vertical', label: '垂直式', desc: '盘面垂直南向' }
  ];

  function formatTime(hours: number): string {
    const h = Math.floor(hours);
    const m = Math.floor((hours - h) * 60);
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}`;
  }

  function formatTimeFromHours(hours: number): string {
    if (hours < 0 || hours > 24) return '--:--';
    const h = Math.floor(hours);
    const m = Math.floor((hours - h) * 60);
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}`;
  }

  function getTypeBtnClass(typeValue: SundialType): string {
    const currentType = get(config).type;
    const base = 'w-full text-left px-3 py-2 rounded-lg transition-all duration-200 border ';
    if (currentType === typeValue) {
      return base + 'bg-amber-500/20 border-amber-500/50';
    }
    return base + 'bg-slate-700/30 border-slate-600/30 hover:bg-slate-700/50';
  }

  function getSunValClass(): string {
    const visible = get(sunVisible);
    return 'font-mono text-slate-200 ' + (visible ? '' : 'line-through');
  }

  function handleLatInput(e: Event) {
    const val = parseFloat((e.target as HTMLInputElement).value);
    if (!isNaN(val)) {
      setLatitude(val);
    }
  }
</script>

<div class="glass-card p-5 space-y-5 h-full overflow-y-auto">
  <div>
    <h3 class="font-display text-base text-amber-500 font-semibold mb-3 flex items-center gap-2">
      <Globe class="w-4 h-4" />
      日晷类型
    </h3>
    <div class="space-y-2">
      {#each sundialTypes as type}
        <button
          class={getTypeBtnClass(type.value)}
          onclick={() => setType(type.value)}
        >
          <div class="font-medium text-sm text-slate-100">{type.label}</div>
          <div class="text-xs text-slate-400">{type.desc}</div>
        </button>
      {/each}
    </div>
  </div>

  <div class="border-t border-slate-700/50 pt-5">
    <h3 class="font-display text-base text-amber-500 font-semibold mb-3 flex items-center gap-2">
      <Globe class="w-4 h-4" />
      纬度设置
    </h3>
    <div class="space-y-3">
      <div class="flex items-center gap-3">
        <input
          type="range"
          min="-90"
          max="90"
          step="0.1"
          value={$config.latitude}
          oninput={(e) => setLatitude(parseFloat((e.target as HTMLInputElement).value))}
          class="flex-1 accent-amber-500"
        />
        <input
          type="number"
          min="-90"
          max="90"
          step="0.1"
          value={$config.latitude.toFixed(1)}
          oninput={handleLatInput}
          class="w-20 px-2 py-1 bg-slate-700/50 border border-slate-600/50 rounded text-sm text-center
                 focus:outline-none focus:border-amber-500/50"
        />
      </div>
      <div class="flex justify-between text-xs text-slate-500">
        <span>-90° 南极</span>
        <span>0° 赤道</span>
        <span>90° 北极</span>
      </div>
    </div>
  </div>

  <div class="border-t border-slate-700/50 pt-5">
    <h3 class="font-display text-base text-amber-500 font-semibold mb-3 flex items-center gap-2">
      <Calendar class="w-4 h-4" />
      日期
    </h3>
    <input
      type="date"
      value={$config.date}
      oninput={(e) => setDate((e.target as HTMLInputElement).value)}
      class="w-full px-3 py-2 bg-slate-700/50 border border-slate-600/50 rounded-lg text-sm
             focus:outline-none focus:border-amber-500/50 text-slate-100"
    />
  </div>

  <div class="border-t border-slate-700/50 pt-5">
    <div class="flex items-center justify-between mb-3">
      <h3 class="font-display text-base text-amber-500 font-semibold flex items-center gap-2">
        <Clock class="w-4 h-4" />
        时间
      </h3>
      <span class="text-2xl font-mono text-slate-100">{formatTime($config.timeHours)}</span>
    </div>
    <input
      type="range"
      min="0"
      max="24"
      step="0.05"
      value={$config.timeHours}
      oninput={(e) => setTimeHours(parseFloat((e.target as HTMLInputElement).value))}
      class="w-full accent-amber-500"
    />
    <div class="flex justify-between text-xs text-slate-500 mt-1">
      <span>00:00</span>
      <span>06:00</span>
      <span>12:00</span>
      <span>18:00</span>
      <span>24:00</span>
    </div>
    <button
      onclick={resetToNow}
      class="w-full mt-3 px-3 py-2 bg-slate-700/50 hover:bg-slate-600/50 rounded-lg text-sm
             border border-slate-600/50 transition-colors"
    >
      重置为当前时间
    </button>
  </div>

  <div class="border-t border-slate-700/50 pt-5">
    <h3 class="font-display text-base text-amber-500 font-semibold mb-3 flex items-center gap-2">
      <Sun class="w-4 h-4" />
      太阳位置
    </h3>
    <div class="space-y-2 text-sm">
      <div class="flex justify-between items-center">
        <span class="text-slate-400">高度角</span>
        <span class={getSunValClass()}>
          {$solarPosition.altitude.toFixed(1)}°
        </span>
      </div>
      <div class="flex justify-between items-center">
        <span class="text-slate-400">方位角</span>
        <span class={getSunValClass()}>
          {$solarPosition.azimuth.toFixed(1)}°
        </span>
      </div>
      <div class="flex justify-between items-center">
        <span class="text-slate-400">赤纬角</span>
        <span class="font-mono text-slate-200">
          {$solarPosition.declination.toFixed(1)}°
        </span>
      </div>
      {#if !$sunVisible}
        <div class="mt-2 px-3 py-2 bg-red-900/30 border border-red-700/30 rounded-lg text-red-400 text-xs">
          太阳位于地平线以下，无法显示影子
        </div>
      {/if}
    </div>
  </div>

  <div class="border-t border-slate-700/50 pt-5">
    <h3 class="font-display text-base text-amber-500 font-semibold mb-3">日出日落</h3>
    <div class="grid grid-cols-2 gap-3">
      <div class="bg-slate-700/30 rounded-lg p-3 text-center">
        <Sunrise class="w-5 h-5 mx-auto text-orange-400 mb-1" />
        <div class="text-xs text-slate-400">日出</div>
        <div class="font-mono text-sm text-slate-200">
          {formatTimeFromHours($sunriseSunset.sunrise)}
        </div>
      </div>
      <div class="bg-slate-700/30 rounded-lg p-3 text-center">
        <Sunset class="w-5 h-5 mx-auto text-orange-500 mb-1" />
        <div class="text-xs text-slate-400">日落</div>
        <div class="font-mono text-sm text-slate-200">
          {formatTimeFromHours($sunriseSunset.sunset)}
        </div>
      </div>
    </div>
    <div class="mt-3 text-center text-xs text-slate-400">
      日照时长: {$sunriseSunset.dayLength.toFixed(1)} 小时
    </div>
  </div>
</div>
