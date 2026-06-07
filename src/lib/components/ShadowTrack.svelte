<script lang="ts">
  import { sundialStore } from '$lib/stores/sundialStore';
  import { Activity, Eye } from 'lucide-svelte';
  import type { ShadowPoint } from '$lib/types';
  import { get } from 'svelte/store';

  const { config, shadowTrack, currentShadow, sunVisible, setShowTrack } = sundialStore;

  const svgSize = 240;
  const padding = 20;
  const viewSize = svgSize - padding * 2;
  const centerX = svgSize / 2;
  const centerY = svgSize / 2;

  function formatTime(hours: number): string {
    const h = Math.floor(hours);
    const m = Math.floor((hours - h) * 60);
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}`;
  }

  function getScale(): number {
    const track = get(shadowTrack);
    if (!track || track.length === 0) return 0.05;
    const maxX = Math.max(...track.map((p: ShadowPoint) => Math.abs(p.x)));
    const maxY = Math.max(...track.map((p: ShadowPoint) => Math.abs(p.y)));
    const maxVal = Math.max(maxX, maxY) || 1;
    return (viewSize / 2 / maxVal) * 0.9;
  }

  function getTrackPath(): string {
    const track = get(shadowTrack);
    if (!track || track.length === 0) return '';
    const scale = getScale();
    return track.map((p: ShadowPoint, i: number) => {
      const x = centerX + p.x * scale;
      const y = centerY + p.y * scale;
      return (i === 0 ? 'M' : 'L') + x.toFixed(2) + ' ' + y.toFixed(2);
    }).join(' ');
  }

  function getCurrentPos() {
    const shadow = get(currentShadow);
    const visible = get(sunVisible);
    const scale = getScale();
    if (!visible || !shadow) {
      return { x: centerX, y: centerY };
    }
    return {
      x: centerX + shadow.x * scale,
      y: centerY + shadow.y * scale
    };
  }

  function getTrackBtnClass(): string {
    const show = get(config).showTrack;
    const base = 'px-3 py-1 text-xs rounded-md transition-colors flex items-center gap-1 ';
    if (show) {
      return base + 'bg-amber-500/20 text-amber-500';
    }
    return base + 'bg-slate-700/30 text-slate-400';
  }

  function getShadowLength(): string {
    const shadow = get(currentShadow);
    const visible = get(sunVisible);
    if (!visible || !shadow) return '--';
    return shadow.length.toFixed(2);
  }

  function getShadowAngle(): string {
    const shadow = get(currentShadow);
    const visible = get(sunVisible);
    if (!visible || !shadow) return '--';
    return shadow.angle.toFixed(1) + '°';
  }

  const compassLabels = [
    { x: centerX, y: padding - 4, label: 'N', align: 'middle' },
    { x: centerX, y: svgSize - padding + 10, label: 'S', align: 'middle' },
    { x: padding - 8, y: centerY + 4, label: 'W', align: 'end' },
    { x: svgSize - padding + 8, y: centerY + 4, label: 'E', align: 'start' }
  ];

  function toggleTrack() {
    setShowTrack(!get(config).showTrack);
  }
</script>

<div class="glass-card p-5">
  <div class="flex items-center justify-between mb-4">
    <h3 class="font-display text-base text-amber-500 font-semibold flex items-center gap-2">
      <Activity class="w-4 h-4" />
      影子轨迹
    </h3>
    <button
      onclick={toggleTrack}
      class={getTrackBtnClass()}
    >
      <Eye class="w-3 h-3" />
      {$config.showTrack ? '显示' : '隐藏'}
    </button>
  </div>

  <div class="flex justify-center">
    <svg width={svgSize} height={svgSize} class="bg-slate-900/50 rounded-lg border border-slate-700/50">
      <defs>
        <radialGradient id="trackGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.3" />
          <stop offset="100%" stop-color="#f59e0b" stop-opacity="0" />
        </radialGradient>
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

      {#if $config.showTrack}
        <path d={getTrackPath()}
              fill="none"
              stroke="#f59e0b"
              stroke-width="2"
              filter="url(#glow)"
              opacity="0.8" />
      {/if}

      <circle cx={centerX} cy={centerY} r="4" fill="#94a3b8" />

      {#if $sunVisible && $currentShadow && $config.showTrack}
        <line x1={centerX} y1={centerY} x2={getCurrentPos().x} y2={getCurrentPos().y}
              stroke="#f87171" stroke-width="1.5" stroke-dasharray="4,3" opacity="0.7" />
        
        <circle cx={getCurrentPos().x} cy={getCurrentPos().y} r="15" fill="url(#trackGlow)" />
        <circle cx={getCurrentPos().x} cy={getCurrentPos().y} r="5" fill="#ef4444" filter="url(#glow)" />
        <circle cx={getCurrentPos().x} cy={getCurrentPos().y} r="2" fill="#ffffff" />
      {/if}
    </svg>
  </div>

  <div class="mt-4 grid grid-cols-2 gap-3 text-center">
    <div class="bg-slate-700/30 rounded-lg p-2">
      <div class="text-xs text-slate-400">影子长度</div>
      <div class="font-mono text-sm text-slate-200">{getShadowLength()}</div>
    </div>
    <div class="bg-slate-700/30 rounded-lg p-2">
      <div class="text-xs text-slate-400">影子角度</div>
      <div class="font-mono text-sm text-slate-200">{getShadowAngle()}</div>
    </div>
  </div>

  <div class="mt-3 text-center text-xs text-slate-500">
    当前时间: <span class="font-mono text-slate-300">{formatTime($config.timeHours)}</span>
  </div>
</div>
