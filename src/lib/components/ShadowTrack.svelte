<script lang="ts">
  import { sundialStore } from '$lib/stores/sundialStore';
  import { Activity, Eye, EyeOff, Circle, TrendingUp, Sun, Sunrise, Sunset } from 'lucide-svelte';
  import type { ShadowPoint, AltitudePoint, ComparePresetData, KeyDateTrackData } from '$lib/types';
  import { get } from 'svelte/store';
  import { COMPARE_COLORS } from '$lib/types';

  const {
    config,
    shadowTrack,
    currentShadow,
    sunVisible,
    sunriseSunset,
    altitudeCurve,
    solarPosition,
    comparePresetsData,
    keyDateTracks,
    maxShadowLength,
    setShowTrack,
    setShowCurrentPoint,
    setAnalysisMode
  } = sundialStore;

  let activeTab: 'track' | 'altitude' = 'track';

  const svgSize = 280;
  const padding = 24;
  const viewSize = svgSize - padding * 2;
  const centerX = svgSize / 2;
  const centerY = svgSize / 2;

  function formatTime(hours: number): string {
    const h = Math.floor(hours);
    const m = Math.floor((hours - h) * 60);
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}`;
  }

  function getTrackScale(): number {
    const track = get(shadowTrack);
    const compData = get(comparePresetsData);
    const kdData = get(keyDateTracks);
    const allTracks: ShadowPoint[] = [...(track || [])];
    for (const d of compData) {
      allTracks.push(...d.shadowTrack);
    }
    for (const d of kdData) {
      allTracks.push(...d.shadowTrack);
    }
    if (!allTracks || allTracks.length === 0) return 0.05;
    const maxX = Math.max(...allTracks.map((p) => Math.abs(p.x)));
    const maxY = Math.max(...allTracks.map((p) => Math.abs(p.y)));
    const maxVal = Math.max(maxX, maxY) || 1;
    return (viewSize / 2 / maxVal) * 0.9;
  }

  function getTrackPath(track: ShadowPoint[] | null | undefined, scale: number): string {
    if (!track || track.length === 0) return '';
    return track.map((p: ShadowPoint, i: number) => {
      const x = centerX + p.x * scale;
      const y = centerY + p.y * scale;
      return (i === 0 ? 'M' : 'L') + x.toFixed(2) + ' ' + y.toFixed(2);
    }).join(' ');
  }

  function getCurrentPos(shadow: ShadowPoint | null | undefined, scale: number) {
    const visible = get(sunVisible);
    if (!visible || !shadow) {
      return { x: centerX, y: centerY };
    }
    return {
      x: centerX + shadow.x * scale,
      y: centerY + shadow.y * scale
    };
  }

  function toggleTrack() {
    setShowTrack(!get(config).showTrack);
  }

  function toggleCurrentPoint() {
    setShowCurrentPoint(!get(config).showCurrentPoint);
  }

  function getShadowLength(shadow: ShadowPoint | null | undefined): string {
    const visible = get(sunVisible);
    if (!visible || !shadow) return '--';
    return shadow.length.toFixed(2);
  }

  function getShadowAngle(shadow: ShadowPoint | null | undefined): string {
    const visible = get(sunVisible);
    if (!visible || !shadow) return '--';
    return shadow.angle.toFixed(1) + '°';
  }

  function getAltitudePath(curve: AltitudePoint[]): string {
    if (!curve || curve.length === 0) return '';
    const chartWidth = svgSize - padding * 2;
    const chartHeight = svgSize - padding * 2 - 20;
    const maxAlt = 90;
    
    return curve.map((p, i) => {
      const x = padding + (p.hour / 24) * chartWidth;
      const y = padding + chartHeight - (p.altitude / maxAlt) * chartHeight;
      return (i === 0 ? 'M' : 'L') + x.toFixed(2) + ' ' + y.toFixed(2);
    }).join(' ');
  }

  function getAltitudeAreaPath(curve: AltitudePoint[]): string {
    if (!curve || curve.length === 0) return '';
    const chartWidth = svgSize - padding * 2;
    const chartHeight = svgSize - padding * 2 - 20;
    const maxAlt = 90;
    const baseY = padding + chartHeight;
    
    let path = `M ${padding} ${baseY} `;
    for (let i = 0; i < curve.length; i++) {
      const p = curve[i];
      const x = padding + (p.hour / 24) * chartWidth;
      const y = padding + chartHeight - (p.altitude / maxAlt) * chartHeight;
      path += `L ${x.toFixed(2)} ${y.toFixed(2)} `;
    }
    const lastX = padding + (curve[curve.length - 1].hour / 24) * chartWidth;
    path += `L ${lastX.toFixed(2)} ${baseY} Z`;
    return path;
  }

  function getSunriseSunsetX(): { sunrise: number; sunset: number } {
    const ss = get(sunriseSunset);
    const chartWidth = svgSize - padding * 2;
    return {
      sunrise: padding + (ss.sunrise / 24) * chartWidth,
      sunset: padding + (ss.sunset / 24) * chartWidth
    };
  }

  const compassLabels = [
    { x: centerX, y: padding - 4, label: 'N', align: 'middle' },
    { x: centerX, y: svgSize - padding + 10, label: 'S', align: 'middle' },
    { x: padding - 8, y: centerY + 4, label: 'W', align: 'end' },
    { x: svgSize - padding + 8, y: centerY + 4, label: 'E', align: 'start' }
  ];

  const hourLabels = [0, 6, 12, 18, 24];
</script>

<div class="glass-card p-5">
  <div class="flex items-center justify-between mb-4">
    <h3 class="font-display text-base text-amber-500 font-semibold flex items-center gap-2">
      <Activity class="w-4 h-4" />
      影子轨迹
    </h3>
    <div class="flex gap-1">
      <button
        onclick={toggleTrack}
        class="px-2 py-1 text-xs rounded-md transition-colors flex items-center gap-1
               {$config.showTrack ? 'bg-amber-500/20 text-amber-500' : 'bg-slate-700/30 text-slate-400'}"
        title="显示/隐藏轨迹线"
      >
        <Eye class="w-3 h-3" />
        轨迹
      </button>
      <button
        onclick={toggleCurrentPoint}
        class="px-2 py-1 text-xs rounded-md transition-colors flex items-center gap-1
               {$config.showCurrentPoint ? 'bg-red-500/20 text-red-400' : 'bg-slate-700/30 text-slate-400'}"
        title="显示/隐藏当前位置"
      >
        <Circle class="w-3 h-3" />
        当前
      </button>
    </div>
  </div>

  <div class="flex gap-1 mb-3">
    <button
      onclick={() => { activeTab = 'track'; }}
      class="flex-1 px-3 py-1.5 text-xs rounded-md transition-colors flex items-center justify-center gap-1
             {activeTab === 'track' ? 'bg-amber-500/20 text-amber-500' : 'bg-slate-700/30 text-slate-400 hover:bg-slate-700/50'}"
    >
      <Activity class="w-3 h-3" />
      轨迹视图
    </button>
    <button
      onclick={() => { activeTab = 'altitude'; }}
      class="flex-1 px-3 py-1.5 text-xs rounded-md transition-colors flex items-center justify-center gap-1
             {activeTab === 'altitude' ? 'bg-amber-500/20 text-amber-500' : 'bg-slate-700/30 text-slate-400 hover:bg-slate-700/50'}"
    >
      <TrendingUp class="w-3 h-3" />
      高度曲线
    </button>
  </div>

  {#if activeTab === 'track'}
    <div class="flex justify-center">
      <svg width={svgSize} height={svgSize} class="bg-slate-900/50 rounded-lg border border-slate-700/50">
        <defs>
          <radialGradient id="trackGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.3" />
            <stop offset="100%" stop-color="#f59e0b" stop-opacity="0" />
          </radialGradient>
          {#each COMPARE_COLORS as color, i}
            <radialGradient id="compareGlow{i}" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stop-color={color} stop-opacity="0.3" />
              <stop offset="100%" stop-color={color} stop-opacity="0" />
            </radialGradient>
            <filter id="compareFilter{i}">
              <feGaussianBlur stdDeviation="2" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          {/each}
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <circle cx={centerX} cy={centerY} r={viewSize / 2 - 5}
                fill="none" stroke="#334155" stroke-width="1" stroke-dasharray="4,4" />
        <circle cx={centerX} cy={centerY} r={viewSize / 4}
                fill="none" stroke="#334155" stroke-width="1" stroke-dasharray="2,4" />

        <line x1={centerX} y1={padding} x2={centerX} y2={svgSize - padding}
              stroke="#334155" stroke-width="1" />
        <line x1={padding} y1={centerY} x2={svgSize - padding} y2={centerY}
              stroke="#334155" stroke-width="1" />

        {#each compassLabels as label}
          <text x={label.x} y={label.y}
                text-anchor={label.align}
                fill="#64748b" font-size="10" font-family="Inter, sans-serif">
            {label.label}
          </text>
        {/each}

        {#if $config.compareMode && $comparePresetsData.length > 0 && $config.showTrack}
          {#each $comparePresetsData as data, index}
            {#if data.shadowTrack && data.shadowTrack.length > 0}
              <path d={getTrackPath(data.shadowTrack, getTrackScale())}
                    fill="none"
                    stroke={data.color}
                    stroke-width="2"
                    stroke-dasharray="6,4"
                    filter="url(#compareFilter{index})"
                    opacity="0.7" />
            {/if}
          {/each}
        {/if}

        {#if $keyDateTracks.length > 0 && $config.showTrack}
          {#each $keyDateTracks as data, index}
            {#if data.shadowTrack && data.shadowTrack.length > 0}
              <path d={getTrackPath(data.shadowTrack, getTrackScale())}
                    fill="none"
                    stroke={data.color}
                    stroke-width="2.5"
                    stroke-dasharray="8,4"
                    opacity="0.8" />
            {/if}
          {/each}
        {/if}

        {#if $config.showTrack}
          <path d={getTrackPath($shadowTrack, getTrackScale())}
                fill="none"
                stroke="#f59e0b"
                stroke-width="2"
                filter="url(#glow)"
                opacity="0.8" />
        {/if}

        <circle cx={centerX} cy={centerY} r="4" fill="#94a3b8" />

        {#if $config.compareMode && $comparePresetsData.length > 0 && $config.showCurrentPoint}
          {#each $comparePresetsData as data, index}
            {#if data.shadow && data.sunVisible}
              <line x1={centerX} y1={centerY}
                    x2={getCurrentPos(data.shadow, getTrackScale()).x}
                    y2={getCurrentPos(data.shadow, getTrackScale()).y}
                    stroke={data.color} stroke-width="1.5" stroke-dasharray="4,3" opacity="0.7" />
              <circle cx={getCurrentPos(data.shadow, getTrackScale()).x}
                      cy={getCurrentPos(data.shadow, getTrackScale()).y}
                      r="15" fill="url(#compareGlow{index})" />
              <circle cx={getCurrentPos(data.shadow, getTrackScale()).x}
                      cy={getCurrentPos(data.shadow, getTrackScale()).y}
                      r="5" fill={data.color} filter="url(#compareFilter{index})" />
              <circle cx={getCurrentPos(data.shadow, getTrackScale()).x}
                      cy={getCurrentPos(data.shadow, getTrackScale()).y}
                      r="2" fill="#ffffff" />
            {/if}
          {/each}
        {/if}

        {#if $sunVisible && $currentShadow && $config.showCurrentPoint}
          <line x1={centerX} y1={centerY}
                x2={getCurrentPos($currentShadow, getTrackScale()).x}
                y2={getCurrentPos($currentShadow, getTrackScale()).y}
                stroke="#f87171" stroke-width="1.5" stroke-dasharray="4,3" opacity="0.7" />
          <circle cx={getCurrentPos($currentShadow, getTrackScale()).x}
                  cy={getCurrentPos($currentShadow, getTrackScale()).y}
                  r="15" fill="url(#trackGlow)" />
          <circle cx={getCurrentPos($currentShadow, getTrackScale()).x}
                  cy={getCurrentPos($currentShadow, getTrackScale()).y}
                  r="5" fill="#ef4444" filter="url(#glow)" />
          <circle cx={getCurrentPos($currentShadow, getTrackScale()).x}
                  cy={getCurrentPos($currentShadow, getTrackScale()).y}
                  r="2" fill="#ffffff" />
        {/if}
      </svg>
    </div>
  {:else}
    <div class="flex justify-center">
      <svg width={svgSize} height={svgSize} class="bg-slate-900/50 rounded-lg border border-slate-700/50">
        <defs>
          <linearGradient id="altitudeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.4" />
            <stop offset="100%" stop-color="#f59e0b" stop-opacity="0.05" />
          </linearGradient>
        </defs>

        {#each [0, 30, 60, 90] as alt}
          <line x1={padding} 
                y1={padding + (svgSize - padding * 2 - 20) * (1 - alt / 90)}
                x2={svgSize - padding}
                y2={padding + (svgSize - padding * 2 - 20) * (1 - alt / 90)}
                stroke="#334155" stroke-width="0.5" stroke-dasharray="2,4" />
          <text x={padding - 4} 
                y={padding + (svgSize - padding * 2 - 20) * (1 - alt / 90) + 4}
                text-anchor="end"
                fill="#64748b" font-size="9" font-family="Inter, sans-serif">
            {alt}°
          </text>
        {/each}

        {#each hourLabels as hour}
          <line x1={padding + (hour / 24) * (svgSize - padding * 2)} 
                y1={padding}
                x2={padding + (hour / 24) * (svgSize - padding * 2)}
                y2={svgSize - padding - 20}
                stroke="#334155" stroke-width="0.5" stroke-dasharray="2,4" />
          <text x={padding + (hour / 24) * (svgSize - padding * 2)} 
                y={svgSize - padding - 6}
                text-anchor="middle"
                fill="#64748b" font-size="9" font-family="Inter, sans-serif">
            {formatTime(hour)}
          </text>
        {/each}

        <rect x={getSunriseSunsetX().sunrise} 
              y={padding}
              width={getSunriseSunsetX().sunset - getSunriseSunsetX().sunrise}
              height={svgSize - padding * 2 - 20}
              fill="#f59e0b" opacity="0.05" />
        
        <line x1={getSunriseSunsetX().sunrise} y1={padding}
              x2={getSunriseSunsetX().sunrise} y2={svgSize - padding - 20}
              stroke="#f97316" stroke-width="1" stroke-dasharray="4,3" opacity="0.6" />
        <line x1={getSunriseSunsetX().sunset} y1={padding}
              x2={getSunriseSunsetX().sunset} y2={svgSize - padding - 20}
              stroke="#f97316" stroke-width="1" stroke-dasharray="4,3" opacity="0.6" />

        {#if $config.compareMode && $comparePresetsData.length > 0}
          {#each $comparePresetsData as data}
            <path d={getAltitudePath(data.altitudeCurve)}
                  fill="none"
                  stroke={data.color}
                  stroke-width="1.5"
                  stroke-dasharray="5,3"
                  opacity="0.7" />
          {/each}
        {/if}

        {#if $keyDateTracks.length > 0}
          {#each $keyDateTracks as data}
            <path d={getAltitudePath(data.altitudeCurve)}
                  fill="none"
                  stroke={data.color}
                  stroke-width="2"
                  stroke-dasharray="6,4"
                  opacity="0.85" />
          {/each}
        {/if}

        <path d={getAltitudeAreaPath($altitudeCurve)}
              fill="url(#altitudeGradient)" />
        <path d={getAltitudePath($altitudeCurve)}
              fill="none"
              stroke="#f59e0b"
              stroke-width="2" />

        {#if $sunVisible}
          <circle cx={padding + ($config.timeHours / 24) * (svgSize - padding * 2)}
                  cy={padding + (svgSize - padding * 2 - 20) * (1 - $solarPosition.altitude / 90)}
                  r="5" fill="#ef4444" stroke="#fff" stroke-width="1.5" />
        {/if}

        <text x={getSunriseSunsetX().sunrise} y={padding - 4}
              text-anchor="middle" fill="#f97316" font-size="9" font-family="Inter, sans-serif">
          日出
        </text>
        <text x={getSunriseSunsetX().sunset} y={padding - 4}
              text-anchor="middle" fill="#f97316" font-size="9" font-family="Inter, sans-serif">
          日落
        </text>
      </svg>
    </div>
  {/if}

  <div class="mt-4 grid grid-cols-2 gap-3 text-center">
    <div class="bg-slate-700/30 rounded-lg p-2">
      <div class="text-xs text-slate-400">影子长度</div>
      <div class="font-mono text-sm text-slate-200">{getShadowLength($currentShadow)}</div>
    </div>
    <div class="bg-slate-700/30 rounded-lg p-2">
      <div class="text-xs text-slate-400">影子角度</div>
      <div class="font-mono text-sm text-slate-200">{getShadowAngle($currentShadow)}</div>
    </div>
  </div>

  {#if $config.compareMode && $comparePresetsData.length > 0}
    <div class="mt-3 space-y-2">
      {#each $comparePresetsData as data}
        <div class="p-2 rounded-lg border"
             style="background-color: {data.color}10; border-color: {data.color}30">
          <div class="text-xs font-medium flex items-center gap-2" style="color: {data.color}">
            <span class="w-2 h-2 rounded-full" style="background-color: {data.color}"></span>
            {data.preset.name}
          </div>
          <div class="text-xs text-slate-400 flex gap-3 mt-1">
            <span>长度: {data.shadow ? data.shadow.length.toFixed(2) : '--'}</span>
            <span>角度: {data.shadow ? data.shadow.angle.toFixed(1) + '°' : '--'}</span>
          </div>
        </div>
      {/each}
    </div>
  {/if}

  {#if $keyDateTracks.length > 0}
    <div class="mt-3 space-y-1.5">
      <div class="text-xs text-slate-500 mb-1">关键日期轨迹</div>
      {#each $keyDateTracks as data}
        <div class="flex items-center justify-between p-1.5 rounded-md"
             style="background-color: {data.color}10; border-left: 3px solid {data.color}">
          <div class="text-xs font-medium" style="color: {data.color}">{data.label}</div>
          <div class="text-xs text-slate-400">
            {data.sunriseSunset.dayLength.toFixed(1)}h · {data.maxAltitude.toFixed(0)}°
          </div>
        </div>
      {/each}
    </div>
  {/if}

  <div class="mt-3 text-center text-xs text-slate-500">
    当前时间: <span class="font-mono text-slate-300">{formatTime($config.timeHours)}</span>
  </div>
</div>
