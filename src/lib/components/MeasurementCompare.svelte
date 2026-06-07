<script lang="ts">
  import { onMount, afterUpdate } from 'svelte';
  import { GitCompare, X, BarChart2, TrendingUp } from 'lucide-svelte';
  import { measurementStore } from '$lib/stores/measurementStore';

  const { records: allRecords } = measurementStore;
  import type { MeasurementRecord } from '$lib/types';
  import { DEVIATION_METRICS } from '$lib/types';
  import { createEventDispatcher } from 'svelte';

  export let recordIds: string[] = [];

  const dispatch = createEventDispatcher<{
    close: void;
  }>();

  let canvasRef: HTMLCanvasElement | null = null;
  let selectedMetric: string = 'orientationDeviation';
  let records: MeasurementRecord[] = [];

  $: records = getFilteredRecords();
  $: if (records.length > 0 && canvasRef) {
    drawComparisonChart();
  }

  function getFilteredRecords(): MeasurementRecord[] {
    return $allRecords.filter(r => recordIds.includes(r.id));
  }

  function getScoreColor(score: number): string {
    if (score >= 80) return 'text-emerald-400';
    if (score >= 60) return 'text-amber-400';
    return 'text-red-400';
  }

  function getScoreBg(score: number): string {
    if (score >= 80) return 'bg-emerald-500/20 border-emerald-500/30';
    if (score >= 60) return 'bg-amber-500/20 border-amber-500/30';
    return 'bg-red-500/20 border-red-500/30';
  }

  function drawComparisonChart() {
    if (!canvasRef || records.length === 0) return;

    const ctx = canvasRef.getContext('2d');
    if (!ctx) return;

    const rect = canvasRef.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    canvasRef.width = rect.width * dpr;
    canvasRef.height = 280 * dpr;
    ctx.scale(dpr, dpr);

    const width = rect.width;
    const height = 280;
    const padding = { top: 30, right: 20, bottom: 50, left: 60 };
    const chartWidth = width - padding.left - padding.right;
    const chartHeight = height - padding.top - padding.bottom;

    ctx.clearRect(0, 0, width, height);

    const colors = ['#f59e0b', '#3b82f6', '#10b981', '#8b5cf6', '#ec4899'];

    const isQualityScore = selectedMetric === 'qualityScore';
    const metricInfo = DEVIATION_METRICS.find(m => m.key === selectedMetric);

    let values: number[] = [];
    let unit = '';
    let chartLabel = '';

    if (isQualityScore) {
      values = records.map(r => r.result.qualityScore);
      unit = '分';
      chartLabel = '质量评分';
    } else if (metricInfo) {
      const key = metricInfo.key;
      values = records.map(r => {
        const dev = r.result.deviation as unknown as Record<string, number>;
        return Math.abs(dev[key]);
      });
      unit = metricInfo.unit;
      chartLabel = metricInfo.label;
    } else {
      return;
    }

    const maxValue = Math.max(...values, 1) * 1.2;

    const barGroupWidth = chartWidth / records.length;
    const barWidth = Math.min(barGroupWidth * 0.6, 60);

    records.forEach((record, i) => {
      const value = values[i];
      const barHeight = (value / maxValue) * chartHeight;
      const x = padding.left + i * barGroupWidth + (barGroupWidth - barWidth) / 2;
      const y = padding.top + chartHeight - barHeight;

      const gradient = ctx.createLinearGradient(x, y, x, y + barHeight);
      gradient.addColorStop(0, colors[i % colors.length]);
      gradient.addColorStop(1, colors[i % colors.length] + '66');

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.roundRect(x, y, barWidth, barHeight, 4);
      ctx.fill();

      ctx.fillStyle = '#e2e8f0';
      ctx.font = '11px monospace';
      ctx.textAlign = 'center';
      ctx.fillText(value.toFixed(1) + unit, x + barWidth / 2, y - 6);

      const label = record.name.length > 8
        ? record.name.slice(0, 8) + '...'
        : record.name;
      ctx.fillStyle = '#94a3b8';
      ctx.font = '10px sans-serif';
      ctx.fillText(label, x + barWidth / 2, padding.top + chartHeight + 16);
    });

    ctx.strokeStyle = '#334155';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(padding.left, padding.top);
    ctx.lineTo(padding.left, padding.top + chartHeight);
    ctx.lineTo(padding.left + chartWidth, padding.top + chartHeight);
    ctx.stroke();

    for (let i = 0; i <= 4; i++) {
      const y = padding.top + chartHeight - (i / 4) * chartHeight;
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
      const label = ((i / 4) * maxValue).toFixed(1);
      ctx.fillText(label, padding.left - 6, y + 3);
    }

    ctx.fillStyle = '#f59e0b';
    ctx.font = 'bold 12px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(chartLabel + ' 对比', width / 2, 18);
  }

  function handleClose() {
    dispatch('close');
  }

  $: if (records.length > 0) {
    setTimeout(drawComparisonChart, 50);
  }

  onMount(() => {
    setTimeout(drawComparisonChart, 100);
  });
</script>

<div class="glass-card p-5 h-full flex flex-col overflow-hidden">
  <div class="flex items-center justify-between mb-4 flex-shrink-0">
    <h3 class="font-display text-base text-amber-500 font-semibold flex items-center gap-2">
      <GitCompare class="w-4 h-4" />
      测量对比
    </h3>
    <button
      onclick={handleClose}
      class="p-1 text-slate-400 hover:text-slate-200 transition-colors"
    >
      <X class="w-4 h-4" />
    </button>
  </div>

  {#if records.length < 2}
    <div class="flex-1 flex items-center justify-center text-slate-500 text-sm">
      请选择至少 2 条记录进行对比
    </div>
  {:else}
    <div class="flex gap-1 mb-4 flex-wrap flex-shrink-0">
      {#each DEVIATION_METRICS as metric}
        <button
          onclick={() => { selectedMetric = metric.key; }}
          class={selectedMetric === metric.key
            ? 'px-2 py-1 text-xs rounded bg-amber-500/30 text-amber-300 border border-amber-500/50'
            : 'px-2 py-1 text-xs rounded bg-slate-700/30 text-slate-400 hover:bg-slate-700/50 border border-transparent'
          }
        >
          {metric.label}
        </button>
      {/each}
      <button
        onclick={() => { selectedMetric = 'qualityScore'; }}
        class={selectedMetric === 'qualityScore'
          ? 'px-2 py-1 text-xs rounded bg-emerald-500/30 text-emerald-300 border border-emerald-500/50'
          : 'px-2 py-1 text-xs rounded bg-slate-700/30 text-slate-400 hover:bg-slate-700/50 border border-transparent'
        }
      >
        质量评分
      </button>
    </div>

    <div class="flex-shrink-0 mb-4">
      <canvas
        bind:this={canvasRef}
        class="w-full"
        style="height: 280px;"
      />
    </div>

    <div class="flex-1 min-h-0 overflow-y-auto space-y-2">
      {#each records as record, index}
        <div
          class="bg-slate-700/20 border border-slate-600/30 rounded-lg p-3"
        >
          <div class="flex items-center justify-between mb-2">
            <div class="flex items-center gap-2">
              <span
                class="w-3 h-3 rounded-full"
                style="background: {['#f59e0b', '#3b82f6', '#10b981', '#8b5cf6'][index % 4]};"
              ></span>
              <h4 class="font-medium text-sm text-slate-100 truncate max-w-[180px]">
                {record.name}
              </h4>
            </div>
            <span class={'px-2 py-0.5 rounded text-xs font-mono border ' + getScoreBg(record.result.qualityScore) + ' ' + getScoreColor(record.result.qualityScore)}>
              {record.result.qualityScore} 分
            </span>
          </div>

          <div class="grid grid-cols-2 gap-2 text-xs">
            {#each DEVIATION_METRICS as metric}
              <div class="bg-slate-800/50 rounded p-1.5">
                <div class="text-slate-500 mb-0.5">{metric.label}</div>
                <div class="font-mono text-slate-200">
                  {(record.result.deviation[metric.key as keyof typeof record.result.deviation] as number).toFixed(1)}
                  {metric.unit}
                </div>
              </div>
            {/each}
          </div>
        </div>
      {/each}
    </div>
  {/if}
</div>
