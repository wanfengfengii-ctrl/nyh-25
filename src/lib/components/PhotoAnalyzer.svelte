<script lang="ts">
  import { onMount, createEventDispatcher } from 'svelte';
  import { Sparkles, RotateCcw, Check, X, Info, MapPin, Clock, Camera } from 'lucide-svelte';
  import type { PhotoAnalysisResult, PhotoAnalysisPoint, PhotoExtractedMetadata } from '$lib/types';
  import {
    createEmptyPhotoAnalysis,
    calculatePhotoMetrics,
    autoAnalyzePhoto,
    extractPhotoMetadata,
    applyAnalysisToInput,
    getDistance,
    getAngleBetweenPoints,
  } from '$lib/services/photoAnalysisService';

  export let photoDataUrl: string;
  export let gnomonLength: number;
  export let analysis: PhotoAnalysisResult = createEmptyPhotoAnalysis();

  let isAnalyzing = false;
  let activeTool: 'gnomonTip' | 'gnomonBase' | 'shadowTip' | 'shadowBase' | 'horizon' | null = null;
  let showMetadata: PhotoExtractedMetadata = {};
  let hasMetadata = false;
  let canvasElement: HTMLCanvasElement | null = null;
  let imageElement: HTMLImageElement | null = null;
  let canvasScale = 1;
  let canvasOffsetX = 0;
  let canvasOffsetY = 0;

  const dispatch = createEventDispatcher<{
    analysisUpdate: PhotoAnalysisResult;
    applyToInput: { shadowLength: number; shadowDirection: number };
  }>();

  $: if (analysis) {
    dispatch('analysisUpdate', analysis);
  }

  onMount(async () => {
    if (photoDataUrl) {
      await loadImageAndDraw();
      try {
        const metadata = await extractMetadataFromDataUrl(photoDataUrl);
        hasMetadata = !!(metadata.dateTime || metadata.latitude || metadata.longitude);
        showMetadata = metadata;
      } catch {
      }
    }
  });

  async function extractMetadataFromDataUrl(dataUrl: string): Promise<PhotoExtractedMetadata> {
    try {
      const response = await fetch(dataUrl);
      const blob = await response.blob();
      const file = new File([blob], 'photo.jpg', { type: 'image/jpeg' });
      return await extractPhotoMetadata(file);
    } catch {
      return {};
    }
  }

  function loadImageAndDraw(): Promise<void> {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => {
        imageElement = img;
        requestAnimationFrame(() => {
          setupCanvas();
          draw();
          resolve();
        });
      };
      img.src = photoDataUrl;
    });
  }

  function setupCanvas() {
    if (!canvasElement || !imageElement) return;

    const container = canvasElement.parentElement;
    if (!container) return;

    const maxWidth = container.clientWidth;
    const maxHeight = 400;

    const imgRatio = imageElement.width / imageElement.height;
    let canvasWidth = Math.min(maxWidth, imageElement.width);
    let canvasHeight = canvasWidth / imgRatio;

    if (canvasHeight > maxHeight) {
      canvasHeight = maxHeight;
      canvasWidth = canvasHeight * imgRatio;
    }

    canvasElement.width = imageElement.width;
    canvasElement.height = imageElement.height;
    canvasElement.style.width = canvasWidth + 'px';
    canvasElement.style.height = canvasHeight + 'px';

    canvasScale = imageElement.width / canvasWidth;
  }

  function getCanvasCoords(e: MouseEvent): PhotoAnalysisPoint {
    if (!canvasElement) return { x: 0, y: 0 };
    const rect = canvasElement.getBoundingClientRect();
    const x = (e.clientX - rect.left) * canvasScale;
    const y = (e.clientY - rect.top) * canvasScale;
    return { x, y };
  }

  function handleCanvasClick(e: MouseEvent) {
    if (!activeTool) return;

    const point = getCanvasCoords(e);

    if (activeTool === 'horizon') {
      if (!analysis.horizonLine) {
        analysis = calculatePhotoMetrics({
          ...analysis,
          horizonLine: { start: point, end: point },
        });
      } else if (analysis.horizonLine.start.x === analysis.horizonLine.end.x &&
                 analysis.horizonLine.start.y === analysis.horizonLine.end.y) {
        analysis = calculatePhotoMetrics({
          ...analysis,
          horizonLine: { start: analysis.horizonLine.start, end: point },
        });
        activeTool = null;
      } else {
          analysis = calculatePhotoMetrics({
            ...analysis,
            horizonLine: { start: point, end: point },
          });
      }
    } else {
      analysis = calculatePhotoMetrics({
        ...analysis,
        [activeTool]: point,
        method: 'manual',
      });
      activeTool = null;
    }

    draw();
  }

  function draw() {
    if (!canvasElement || !imageElement) return;
    const ctx = canvasElement.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvasElement.width, canvasElement.height);
    ctx.drawImage(imageElement, 0, 0);

    if (analysis.horizonLine) {
      ctx.strokeStyle = 'rgba(59, 130, 246, 0.8)';
      ctx.lineWidth = 3;
      ctx.setLineDash([10, 5]);
      ctx.beginPath();
      ctx.moveTo(analysis.horizonLine.start.x, analysis.horizonLine.start.y);
      ctx.lineTo(analysis.horizonLine.end.x, analysis.horizonLine.end.y);
      ctx.stroke();
      ctx.setLineDash([]);

      drawPoint(ctx, analysis.horizonLine.start, '#3b82f6');
      drawPoint(ctx, analysis.horizonLine.end, '#3b82f6');
    }

    if (analysis.gnomonBase && analysis.gnomonTip) {
      ctx.strokeStyle = 'rgba(245, 158, 11, 0.9)';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(analysis.gnomonBase.x, analysis.gnomonBase.y);
      ctx.lineTo(analysis.gnomonTip.x, analysis.gnomonTip.y);
      ctx.stroke();

      drawPoint(ctx, analysis.gnomonBase, '#f59e0b');
      drawPoint(ctx, analysis.gnomonTip, '#f59e0b');
    } else {
      if (analysis.gnomonBase) drawPoint(ctx, analysis.gnomonBase, '#f59e0b');
      if (analysis.gnomonTip) drawPoint(ctx, analysis.gnomonTip, '#f59e0b');
    }

    if (analysis.shadowBase && analysis.shadowTip) {
      ctx.strokeStyle = 'rgba(16, 185, 129, 0.9)';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(analysis.shadowBase.x, analysis.shadowBase.y);
      ctx.lineTo(analysis.shadowTip.x, analysis.shadowTip.y);
      ctx.stroke();

      drawPoint(ctx, analysis.shadowBase, '#10b981');
      drawPoint(ctx, analysis.shadowTip, '#10b981');
    } else {
      if (analysis.shadowBase) drawPoint(ctx, analysis.shadowBase, '#10b981');
      if (analysis.shadowTip) drawPoint(ctx, analysis.shadowTip, '#10b981');
    }
  }

  function drawPoint(ctx: CanvasRenderingContext2D, point: PhotoAnalysisPoint, color: string) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(point.x, point.y, 8, 0, Math.PI * 2);
    ctx.fill();

    ctx.strokeStyle = 'white';
    ctx.lineWidth = 2;
    ctx.stroke();
  }

  async function handleAutoAnalyze() {
    isAnalyzing = true;
    try {
      const result = await autoAnalyzePhoto(photoDataUrl);
      analysis = result;
      draw();
    } finally {
      isAnalyzing = false;
    }
  }

  function resetAnalysis() {
    analysis = createEmptyPhotoAnalysis();
    activeTool = null;
    draw();
  }

  function setTool(tool: typeof activeTool) {
    activeTool = activeTool === tool ? null : tool;
  }

  function getToolBtnClass(tool: typeof activeTool): string {
    const base = 'flex-1 px-2 py-2 text-xs rounded-lg border transition-all ';
    if (activeTool === tool) {
      return base + 'bg-amber-500/30 border-amber-500/50 text-amber-300';
    }
    return base + 'bg-slate-700/30 border-slate-600/30 text-slate-300 hover:bg-slate-700/50';
  }

  function handleApplyToInput() {
    const result = applyAnalysisToInput(analysis, gnomonLength, 180);
    dispatch('applyToInput', result);
  }

  function canApply(): boolean {
    return !!(analysis.gnomonTip && analysis.gnomonBase &&
      analysis.shadowTip && analysis.shadowBase &&
      analysis.gnomonLengthPixels > 0 &&
      analysis.shadowLengthPixels > 0);
  }

  function formatDate(dateStr?: string): string {
    if (!dateStr) return '-';
    try {
      return new Date(dateStr).toLocaleString('zh-CN');
    } catch {
      return dateStr;
    }
  }
</script>

<div class="glass-card p-5 space-y-4">
  <div class="flex items-center justify-between">
    <h3 class="font-display text-base text-amber-500 font-semibold flex items-center gap-2">
      <Camera class="w-4 h-4" />
      照片分析
    </h3>
    <div class="flex gap-2">
      <button
        onclick={handleAutoAnalyze}
        disabled={isAnalyzing}
        class="px-3 py-1.5 bg-gradient-to-r from-purple-500/20 to-blue-500/20 hover:from-purple-500/30 hover:to-blue-500/30
               border border-purple-500/30 rounded-lg text-xs text-purple-300
               flex items-center gap-1.5 disabled:opacity-50 transition-all"
      >
        <Sparkles class="w-3.5 h-3.5 {isAnalyzing ? 'animate-spin' : ''}" />
        {isAnalyzing ? '分析中...' : 'AI 识别'}
      </button>
      <button
        onclick={resetAnalysis}
        class="px-3 py-1.5 bg-slate-700/50 hover:bg-slate-600/50 border border-slate-600/50
               rounded-lg text-xs text-slate-300 flex items-center gap-1.5 transition-colors"
      >
        <RotateCcw class="w-3.5 h-3.5" />
        重置
      </button>
    </div>
  </div>

  {#if hasMetadata}
    <div class="bg-blue-500/10 border border-blue-500/20 rounded-lg p-3 space-y-2">
      <div class="text-xs text-blue-400 font-medium flex items-center gap-1.5">
        <Info class="w-3.5 h-3.5" />
        照片元数据
      </div>
      <div class="grid grid-cols-2 gap-2 text-xs">
        {#if showMetadata.dateTime}
          <div class="flex items-center gap-1.5 text-slate-400">
            <Clock class="w-3 h-3" />
            <span>{formatDate(showMetadata.dateTime)}</span>
          </div>
        {/if}
        {#if showMetadata.latitude && showMetadata.longitude}
          <div class="flex items-center gap-1.5 text-slate-400">
            <MapPin class="w-3 h-3" />
            <span>{showMetadata.latitude.toFixed(2)}°N, {showMetadata.longitude.toFixed(2)}°E</span>
          </div>
        {/if}
      </div>
    </div>
  {/if}

  <div class="relative bg-slate-900/50 rounded-lg overflow-hidden flex items-center justify-center"
       style="min-height: 300px;"
  >
    <canvas
      bind:this={canvasElement}
      onclick={handleCanvasClick}
      class="max-w-full cursor-crosshair"
      class:cursor-crosshair={activeTool !== null}
    />
    {#if activeTool}
      <div class="absolute top-3 left-3 px-2 py-1 bg-black/70 rounded text-xs text-white
                  backdrop-blur-sm">
        点击放置{activeTool === 'gnomonTip' ? '晷针顶端' :
               activeTool === 'gnomonBase' ? '晷针底座' :
               activeTool === 'shadowTip' ? '影子末端' :
               activeTool === 'shadowBase' ? '影子起点' :
               activeTool === 'horizon' ? '地平线（两点确定）' : ''}
      </div>
    {/if}
  </div>

  <div class="space-y-2">
    <div class="text-xs text-slate-400">标注工具</div>
    <div class="grid grid-cols-5 gap-2">
      <button class={getToolBtnClass('gnomonTip')} onclick={() => setTool('gnomonTip')}>
        晷针顶端
      </button>
      <button class={getToolBtnClass('gnomonBase')} onclick={() => setTool('gnomonBase')}>
        晷针底座
      </button>
      <button class={getToolBtnClass('shadowTip')} onclick={() => setTool('shadowTip')}>
        影子末端
      </button>
      <button class={getToolBtnClass('shadowBase')} onclick={() => setTool('shadowBase')}>
        影子起点
      </button>
      <button class={getToolBtnClass('horizon')} onclick={() => setTool('horizon')}>
        地平线
      </button>
    </div>
  </div>

  {#if analysis.confidence > 0 || analysis.method === 'manual'}
    <div class="border-t border-slate-700/50 pt-4 space-y-3">
      <div class="grid grid-cols-2 gap-3 text-xs">
        <div class="bg-slate-700/30 rounded-lg p-2">
          <div class="text-slate-400 mb-1">晷针长度（像素）</div>
          <div class="font-mono text-amber-300">{analysis.gnomonLengthPixels.toFixed(0)} px</div>
        </div>
        <div class="bg-slate-700/30 rounded-lg p-2">
          <div class="text-slate-400 mb-1">影子长度（像素）</div>
          <div class="font-mono text-emerald-300">{analysis.shadowLengthPixels.toFixed(0)} px</div>
        </div>
        <div class="bg-slate-700/30 rounded-lg p-2">
          <div class="text-slate-400 mb-1">影子角度</div>
          <div class="font-mono text-blue-300">{analysis.shadowAngle.toFixed(1)}°</div>
        </div>
        <div class="bg-slate-700/30 rounded-lg p-2">
          <div class="text-slate-400 mb-1">识别置信度</div>
          <div class="font-mono text-purple-300">{(analysis.confidence * 100).toFixed(0)}%</div>
        </div>
      </div>

      {#if canApply()}
        <button
          onclick={handleApplyToInput}
          class="w-full py-2 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500
                 rounded-lg text-sm font-medium text-white shadow-lg shadow-emerald-500/20
                 transition-all duration-200 flex items-center justify-center gap-2"
        >
          <Check class="w-4 h-4" />
          应用到校准输入
        </button>
      {:else}
        <div class="text-xs text-slate-500 text-center py-2">
          请标注晷针和影子的起点与终点
        </div>
      {/if}
    </div>
  {/if}

  <div class="flex flex-wrap gap-2 text-xs">
    <span class="inline-flex items-center gap-1">
      <span class="w-3 h-3 rounded-full bg-amber-500"></span>
      <span class="text-slate-400">晷针</span>
    </span>
    <span class="inline-flex items-center gap-1">
      <span class="w-3 h-3 rounded-full bg-emerald-500"></span>
      <span class="text-slate-400">影子</span>
    </span>
    <span class="inline-flex items-center gap-1">
      <span class="w-3 h-0.5 bg-blue-500"></span>
      <span class="text-slate-400">地平线</span>
    </span>
  </div>
</div>
