<script lang="ts">
  import { onMount, afterUpdate } from 'svelte';
  import { BarChart3 } from 'lucide-svelte';
  import type { CalibrationResult } from '$lib/types';
  import { DEVIATION_METRICS } from '$lib/types';

  export let result: CalibrationResult | null = null;
  export let height: number = 200;

  let canvasRef: HTMLCanvasElement | null = null;

  $: if (result && canvasRef) {
    drawChart();
  }

  function drawChart() {
    if (!canvasRef || !result) return;

    const ctx = canvasRef.getContext('2d');
    if (!ctx) return;

    const rect = canvasRef.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    canvasRef.width = rect.width * dpr;
    canvasRef.height = height * dpr;
    ctx.scale(dpr, dpr);

    const width = rect.width;
    const chartHeight = height;

    ctx.clearRect(0, 0, width, chartHeight);

    const padding = { top: 20, right: 20, bottom: 40, left: 60 };
    const chartWidth = width - padding.left - padding.right;
    const chartInnerHeight = chartHeight - padding.top - padding.bottom;

    const metrics = DEVIATION_METRICS.map(m => {
      const key = m.key as keyof typeof result.deviation;
      return {
        ...m,
        value: Math.abs(result.deviation[key] as number),
        maxValue: key === 'timeDeviation' ? 20 : key === 'scaleError' ? 10 : 10,
      };
    });

    const barWidth = chartWidth / metrics.length * 0.6;
    const barGap = chartWidth / metrics.length * 0.4;

    metrics.forEach((metric, i) => {
      const x = padding.left + i * (barWidth + barGap) + barGap / 2;
      const normalizedValue = Math.min(metric.value / metric.maxValue, 1);
      const barHeight = normalizedValue * chartInnerHeight;
      const y = padding.top + chartInnerHeight - barHeight;

      const gradient = ctx.createLinearGradient(x, y, x, y + barHeight);
      gradient.addColorStop(0, metric.color);
      gradient.addColorStop(1, metric.color + '66');

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.roundRect(x, y, barWidth, barHeight, 4);
      ctx.fill();

      ctx.fillStyle = '#e2e8f0';
      ctx.font = '11px monospace';
      ctx.textAlign = 'center';
      const valueStr = metric.value.toFixed(1) + metric.unit;
      ctx.fillText(valueStr, x + barWidth / 2, y - 6);

      ctx.fillStyle = '#94a3b8';
      ctx.font = '11px sans-serif';
      ctx.fillText(metric.label, x + barWidth / 2, padding.top + chartInnerHeight + 16);
    });

    ctx.strokeStyle = '#334155';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(padding.left, padding.top);
    ctx.lineTo(padding.left, padding.top + chartInnerHeight);
    ctx.lineTo(padding.left + chartWidth, padding.top + chartInnerHeight);
    ctx.stroke();

    for (let i = 0; i <= 4; i++) {
      const y = padding.top + chartInnerHeight - (i / 4) * chartInnerHeight;
      ctx.strokeStyle = '#1e293b';
      ctx.setLineDash([4, 4]);
      ctx.beginPath();
      ctx.moveTo(padding.left, y);
      ctx.lineTo(padding.left + chartWidth, y);
      ctx.stroke();
      ctx.setLineDash([]);

      ctx.fillStyle = '#64748b';
      ctx.font = '10px monospace';
      ctx.textAlign = 'right';
      const label = ((i / 4) * 100).toFixed(0) + '%';
      ctx.fillText(label, padding.left - 6, y + 3);
    }
  }

  onMount(() => {
    if (result) {
      setTimeout(drawChart, 100);
    }
  });
</script>

<div class="glass-card p-4">
  <div class="flex items-center gap-2 mb-3">
    <BarChart3 class="w-4 h-4 text-amber-500" />
    <h3 class="font-display text-sm text-amber-500 font-semibold">偏差可视化</h3>
  </div>

  {#if result}
    <div class="relative">
      <canvas
        bind:this={canvasRef}
        class="w-full"
        style="height: {height}px;"
      />
    </div>
  {:else}
    <div class="flex items-center justify-center h-[{height}px] text-slate-500 text-sm">
      暂无数据
    </div>
  {/if}
</div>
