<script lang="ts">
  import {
    X, MapPin, Calendar, Tag, Edit2, Save } from 'lucide-svelte';
  import { measurementStore } from '$lib/stores/measurementStore';

  const { updateRecord, addTag, removeTag } = measurementStore;
  import type { MeasurementRecord } from '$lib/types';
  import { formatTimeFromHours } from '$lib/utils/date';
  import { createEventDispatcher } from 'svelte';

  export let record: MeasurementRecord;

  const dispatch = createEventDispatcher<{
    close: void;
    load: MeasurementRecord;
  }>();

  let isEditing = false;
  let editName = '';
  let editNotes = '';
  let newTag = '';

  $: if (record) {
    editName = record.name;
    editNotes = record.notes || '';
  }

  function getSundialTypeName(type: string): string {
    const names: Record<string, string> = {
      equatorial: '赤道式',
      horizontal: '水平式',
      vertical: '垂直式',
    };
    return names[type] || type;
  }

  function getConfidenceName(confidence: string): string {
    const names: Record<string, string> = {
      high: '高',
      medium: '中',
      low: '低',
    };
    return names[confidence] || confidence;
  }

  function getConfidenceColor(confidence: string): string {
    switch (confidence) {
      case 'high': return 'text-emerald-400';
      case 'medium': return 'text-amber-400';
      case 'low': return 'text-red-400';
      default: return 'text-slate-400';
    }
  }

  function getScoreColor(score: number): string {
    if (score >= 80) return 'text-emerald-400';
    if (score >= 60) return 'text-amber-400';
    return 'text-red-400';
  }

  function getPriorityName(priority: string): string {
    const names: Record<string, string> = {
      critical: '重要',
      important: '建议',
      minor: '轻微',
    };
    return names[priority] || priority;
  }

  function getPriorityColor(priority: string): string {
    switch (priority) {
      case 'critical': return 'border-l-red-500';
      case 'important': return 'border-l-amber-500';
      case 'minor': return 'border-l-emerald-500';
      default: return 'border-l-slate-500';
    }
  }

  function handleClose() {
    dispatch('close');
  }

  function handleLoad() {
    dispatch('load', record);
  }

  function startEdit() {
    isEditing = true;
  }

  function saveEdit() {
    updateRecord(record.id, {
      name: editName,
      notes: editNotes,
    });
    isEditing = false;
  }

  function addTagHandler() {
    if (newTag.trim() && !record.tags?.includes(newTag.trim())) {
      addTag(record.id, newTag.trim());
      newTag = '';
    }
  }

  function removeTagHandler(tag: string) {
    removeTag(record.id, tag);
  }
</script>

<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
     onclick={handleClose}>
  <div class="glass-card w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col m-4"
       onclick={(e) => e.stopPropagation()}>
    <div class="flex items-center justify-between p-4 border-b border-slate-700/50 flex-shrink-0">
      <div class="flex items-center gap-3">
        {#if isEditing}
          <input
            bind:value={editName}
            class="flex-1 px-2 py-1 bg-slate-700/50 border border-slate-600/50 rounded text-sm
                   focus:outline-none focus:border-amber-500/50 text-slate-100"
          />
        {:else}
          <h2 class="font-display text-lg text-amber-500 font-semibold">{record.name}</h2>
        {/if}
      </div>
      <div class="flex items-center gap-2">
        {#if isEditing}
          <button
            onclick={saveEdit}
            class="p-2 text-emerald-400 hover:text-emerald-300"
          >
            <Save class="w-4 h-4" />
          </button>
        {:else}
          <button
            onclick={startEdit}
            class="p-2 text-slate-400 hover:text-slate-200"
          >
            <Edit2 class="w-4 h-4" />
          </button>
        {/if}
        <button
          onclick={handleClose}
          class="p-2 text-slate-400 hover:text-slate-200"
        >
          <X class="w-5 h-5" />
        </button>
      </div>
    </div>

    <div class="flex-1 overflow-y-auto p-4 space-y-4">
      <div class="grid grid-cols-3 gap-3">
        <div class="bg-slate-700/20 rounded-lg p-3 text-center">
          <div class="text-xs text-slate-400 mb-1">质量评分</div>
          <div class="text-2xl font-bold font-mono {getScoreColor(record.result.qualityScore)}">
            {record.result.qualityScore}
          </div>
        </div>
        <div class="bg-slate-700/20 rounded-lg p-3 text-center">
          <div class="text-xs text-slate-400 mb-1">可信度</div>
          <div class="text-2xl font-bold {getConfidenceColor(record.result.confidence)}">
            {getConfidenceName(record.result.confidence)}
          </div>
        </div>
        <div class="bg-slate-700/20 rounded-lg p-3 text-center">
          <div class="text-xs text-slate-400 mb-1">校准步骤</div>
          <div class="text-2xl font-bold text-blue-400">
            {record.result.calibrationSteps.length}
          </div>
        </div>
      </div>

      <div class="bg-slate-700/20 rounded-lg p-3 space-y-2">
        <h3 class="text-sm font-medium text-slate-200 flex items-center gap-2">
          <Calendar class="w-4 h-4 text-amber-500" />
          测量信息
        </h3>
        <div class="grid grid-cols-2 gap-2 text-sm">
          <div>
            <span class="text-slate-500">测量时间：</span>
            <span class="text-slate-300">
              {new Date(record.input.measurementDateTime).toLocaleString('zh-CN')}
            </span>
          </div>
          <div>
            <span class="text-slate-500">日晷类型：</span>
            <span class="text-slate-300">{getSundialTypeName(record.input.sundialType)}</span>
          </div>
          <div>
            <span class="text-slate-500">位置：</span>
            <span class="text-slate-300">
              {record.input.locationName || `${record.input.latitude.toFixed(2)}°N, ${record.input.longitude.toFixed(2)}°E`}
            </span>
          </div>
          <div>
            <span class="text-slate-500">晷针长度：</span>
            <span class="text-slate-300">{record.input.gnomonLength.toFixed(2)} m</span>
          </div>
        </div>
      </div>

      <div class="bg-slate-700/20 rounded-lg p-3 space-y-2">
        <h3 class="text-sm font-medium text-slate-200">偏差分析</h3>
        <div class="grid grid-cols-2 gap-2">
          <div class="bg-slate-800/50 rounded p-2">
            <div class="text-xs text-slate-500">朝向偏差</div>
            <div class="font-mono text-sm text-amber-300">
              {record.result.deviation.orientationDeviation >= 0 ? '+' : ''}
              {record.result.deviation.orientationDeviation.toFixed(1)}°
            </div>
          </div>
          <div class="bg-slate-800/50 rounded p-2">
            <div class="text-xs text-slate-500">倾角偏差</div>
            <div class="font-mono text-sm text-blue-300">
              {record.result.deviation.tiltDeviation >= 0 ? '+' : ''}
              {record.result.deviation.tiltDeviation.toFixed(1)}°
            </div>
          </div>
          <div class="bg-slate-800/50 rounded p-2">
            <div class="text-xs text-slate-500">刻度误差</div>
            <div class="font-mono text-sm text-emerald-300">
              {record.result.deviation.scaleError >= 0 ? '+' : ''}
              {record.result.deviation.scaleError.toFixed(1)}%
            </div>
          </div>
          <div class="bg-slate-800/50 rounded p-2">
            <div class="text-xs text-slate-500">时间偏差</div>
            <div class="font-mono text-sm text-purple-300">
              {record.result.deviation.timeDeviation >= 0 ? '+' : ''}
              {record.result.deviation.timeDeviation.toFixed(1)} 分
            </div>
          </div>
        </div>
      </div>

      <div class="bg-slate-700/20 rounded-lg p-3 space-y-2">
        <h3 class="text-sm font-medium text-slate-200">校准步骤</h3>
        <div class="space-y-2">
          {#each record.result.calibrationSteps as step}
            <div class="bg-slate-800/50 rounded p-2 border-l-2 {getPriorityColor(step.priority)}">
              <div class="flex items-center justify-between">
                <span class="text-sm font-medium text-slate-200">
                  {step.id}. {step.title}</span>
                <span class="text-xs text-slate-400">{getPriorityName(step.priority)}</span>
              </div>
              <div class="text-xs text-slate-400 mt-1">{step.description}</div>
              {#if step.adjustment}
                <div class="text-xs text-amber-400 mt-1">调整：{step.adjustment}</div>
              {/if}
            </div>
          {/each}
        </div>
      </div>

      {#if record.photoAnalysis}
        <div class="bg-slate-700/20 rounded-lg p-3 space-y-2">
          <h3 class="text-sm font-medium text-slate-200">照片分析</h3>
          <div class="grid grid-cols-2 gap-2 text-sm">
            <div>
              <span class="text-slate-500">晷针长度：</span>
              <span class="text-slate-300 font-mono">{record.photoAnalysis.gnomonLengthPixels.toFixed(0)} px</span>
            </div>
            <div>
              <span class="text-slate-500">影子长度：</span>
              <span class="text-slate-300 font-mono">{record.photoAnalysis.shadowLengthPixels.toFixed(0)} px</span>
            </div>
          </div>
        </div>
      {/if}

      <div class="bg-slate-700/20 rounded-lg p-3 space-y-2">
        <h3 class="text-sm font-medium text-slate-200 flex items-center gap-2">
          <Tag class="w-4 h-4 text-amber-500" />
          标签
        </h3>
        <div class="flex flex-wrap gap-1.5">
          {#each record.tags || [] as string[] as tag}
            <span class="inline-flex items-center gap-1 px-2 py-0.5 bg-slate-600/50 rounded text-xs text-slate-300">
              {tag}
              <button onclick={() => removeTagHandler(tag)} class="text-slate-500 hover:text-slate-300">
                <X class="w-3 h-3" />
              </button>
            </span>
          {/each}
          <div class="flex items-center gap-1">
            <input
              bind:value={newTag}
              onkeydown={(e) => { if (e.key === 'Enter') addTagHandler(); }}
              placeholder="添加标签"
              class="w-20 px-2 py-0.5 bg-slate-800/50 border border-slate-600/50 rounded text-xs
                     focus:outline-none focus:border-amber-500/50 text-slate-300"
            />
            <button
              onclick={addTagHandler}
              class="px-2 py-0.5 bg-amber-500/20 hover:bg-amber-500/30 rounded text-xs text-amber-300"
            >
              添加
            </button>
          </div>
        </div>
      </div>

      {#if isEditing}
        <div class="bg-slate-700/20 rounded-lg p-3 space-y-2">
          <h3 class="text-sm font-medium text-slate-200">备注</h3>
          <textarea
            bind:value={editNotes}
            rows={3}
            placeholder="添加备注..."
            class="w-full px-2 py-1.5 bg-slate-800/50 border border-slate-600/50 rounded text-sm
                   focus:outline-none focus:border-amber-500/50 text-slate-200 resize-none"
          ></textarea>
        </div>
      {:else if record.notes}
        <div class="bg-slate-700/20 rounded-lg p-3 space-y-2">
          <h3 class="text-sm font-medium text-slate-200">备注</h3>
          <p class="text-sm text-slate-300">{record.notes}</p>
        </div>
      {/if}
    </div>

    <div class="p-4 border-t border-slate-700/50 flex justify-end gap-2 flex-shrink-0">
      <button
        onclick={handleClose}
        class="px-4 py-2 bg-slate-700/50 hover:bg-slate-600/50 border border-slate-600/50
               rounded-lg text-sm text-slate-300 transition-colors"
      >
        关闭
      </button>
      <button
        onclick={handleLoad}
        class="px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500
               rounded-lg text-sm font-medium text-white shadow-lg shadow-amber-500/20
               transition-all duration-200"
      >
        加载到当前
      </button>
    </div>
  </div>
</div>
