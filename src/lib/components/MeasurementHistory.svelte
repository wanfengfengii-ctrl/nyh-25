<script lang="ts">
  import { onMount } from 'svelte';
  import {
    History,
    Trash2,
    Archive,
    ArchiveRestore,
    Search,
    Tag,
    Check,
    X,
    ChevronRight,
    FileText,
    Plus,
    Upload,
    Download,
  } from 'lucide-svelte';
  import { measurementStore } from '$lib/stores/measurementStore';
  import type { MeasurementRecord } from '$lib/types';
  import { createEventDispatcher } from 'svelte';

  const {
    activeRecords,
    archivedRecords,
    selectedRecordIds,
    toggleSelectRecord,
    clearSelection,
    toggleArchive,
    deleteRecord,
    addTag,
    removeTag,
    exportRecordsJSON,
    importRecords,
    searchRecords,
  } = measurementStore;

  const dispatch = createEventDispatcher<{
    loadRecord: MeasurementRecord;
    compare: string[];
    viewRecord: MeasurementRecord;
  }>();

  let searchQuery = '';
  let showArchived = false;
  let isComparing = false;

  $: filteredRecords = getFilteredRecords();

  function getFilteredRecords(): MeasurementRecord[] {
    const records = showArchived
      ? $archivedRecords
      : $activeRecords;

    if (!searchQuery.trim()) {
      return records;
    }

    const q = searchQuery.toLowerCase();
    return records.filter(r =>
      r.name.toLowerCase().includes(q) ||
      r.notes?.toLowerCase().includes(q) ||
      r.tags?.some(t => t.toLowerCase().includes(q)) ||
      r.input.locationName?.toLowerCase().includes(q)
    );
  }

  function formatDate(timestamp: number): string {
    const date = new Date(timestamp);
    return date.toLocaleDateString('zh-CN', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  }

  function getScoreColor(score: number): string {
    if (score >= 80) return 'text-emerald-400';
    if (score >= 60) return 'text-amber-400';
    return 'text-red-400';
  }

  function getScoreBg(score: number): string {
    if (score >= 80) return 'bg-emerald-500/20';
    if (score >= 60) return 'bg-amber-500/20';
    return 'bg-red-500/20';
  }

  function getSundialTypeName(type: string): string {
    const names: Record<string, string> = {
      equatorial: '赤道式',
      horizontal: '水平式',
      vertical: '垂直式',
    };
    return names[type] || type;
  }

  function handleLoad(record: MeasurementRecord) {
    dispatch('loadRecord', record);
  }

  function handleView(record: MeasurementRecord) {
    dispatch('viewRecord', record);
  }

  function toggleSelect(id: string) {
    toggleSelectRecord(id);
  }

  function startCompare() {
    isComparing = !isComparing;
    if (!isComparing) {
      clearSelection();
    }
  }

  function doCompare() {
    const ids = $selectedRecordIds;
    if (ids.length >= 2) {
      dispatch('compare', ids);
    }
  }

  function handleDelete(id: string) {
    if (confirm('确定要删除这条记录吗？')) {
      deleteRecord(id);
    }
  }

  function handleArchive(id: string) {
    toggleArchive(id);
  }

  function handleExport() {
    const json = exportRecordsJSON();
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `测量记录_${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
  }

  function handleImport(e: Event) {
    const file = (e.target as HTMLInputElement).files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (ev) => {
      const content = ev.target?.result as string;
      const count = importRecords(content);
      alert(`成功导入 ${count} 条记录`);
    };
    reader.readAsText(file);
  }

  function isSelected(id: string): boolean {
    return $selectedRecordIds.includes(id);
  }
</script>

<div class="glass-card p-5 h-full flex flex-col overflow-hidden">
  <div class="flex items-center justify-between mb-4 flex-shrink-0">
    <h3 class="font-display text-base text-amber-500 font-semibold flex items-center gap-2">
      <History class="w-4 h-4" />
      测量历史
    </h3>
    <div class="flex gap-2">
      <button
        onclick={startCompare}
        class={isComparing
          ? 'px-2 py-1 bg-amber-500/30 border border-amber-500/50 rounded text-xs text-amber-300'
          : 'px-2 py-1 bg-slate-700/50 hover:bg-slate-600/50 border border-slate-600/50 rounded text-xs text-slate-300'
        }
      >
        {isComparing ? '取消对比' : '对比'}
      </button>
    </div>
  </div>

  <div class="flex gap-2 mb-3 flex-shrink-0">
    <div class="relative flex-1">
      <Search class="w-4 h-4 absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-500" />
      <input
        type="text"
        bind:value={searchQuery}
        placeholder="搜索记录..."
        class="w-full pl-8 pr-3 py-1.5 bg-slate-700/50 border border-slate-600/50 rounded-lg text-sm
               focus:outline-none focus:border-amber-500/50 text-slate-200"
      />
    </div>
  </div>

  <div class="flex gap-2 mb-3 flex-shrink-0">
    <button
      onclick={() => showArchived = false}
      class={!showArchived
        ? 'px-3 py-1 bg-slate-600/50 text-slate-200 rounded text-xs'
        : 'px-3 py-1 text-slate-400 hover:text-slate-200 rounded text-xs'
      }
    >
      活动 {$activeRecords.length}
    </button>
    <button
      onclick={() => showArchived = true}
      class={showArchived
        ? 'px-3 py-1 bg-slate-600/50 text-slate-200 rounded text-xs'
        : 'px-3 py-1 text-slate-400 hover:text-slate-200 rounded text-xs'
      }
    >
      归档 {$archivedRecords.length}
    </button>
    <div class="flex-1"></div>
    <button
      onclick={handleExport}
      class="p-1 text-slate-400 hover:text-slate-200"
      title="导出记录"
    >
      <Download class="w-4 h-4" />
    </button>
    <label class="p-1 text-slate-400 hover:text-slate-200 cursor-pointer" title="导入记录">
      <Upload class="w-4 h-4" />
      <input type="file" accept=".json" onchange={handleImport} class="hidden" />
    </label>
  </div>

  {#if isComparing && $selectedRecordIds.length > 0}
    <div class="mb-3 p-2 bg-amber-500/10 border border-amber-500/30 rounded-lg flex items-center justify-between flex-shrink-0">
      <span class="text-xs text-amber-300">
        已选择 {$selectedRecordIds.length} 条记录
      </span>
      <button
        onclick={doCompare}
        disabled={$selectedRecordIds.length < 2}
        class="px-2 py-1 bg-amber-500/30 hover:bg-amber-500/40 rounded text-xs text-amber-200
               disabled:opacity-50 disabled:cursor-not-allowed"
      >
        开始对比
      </button>
    </div>
  {/if}

  <div class="flex-1 min-h-0 overflow-y-auto space-y-2">
    {#if filteredRecords.length === 0}
      <div class="flex flex-col items-center justify-center h-full text-slate-500 text-sm py-8">
        <History class="w-10 h-10 mb-2 opacity-50" />
        <p>暂无测量记录</p>
        <p class="text-xs mt-1">完成校准后可保存记录</p>
      </div>
    {:else}
      {#each filteredRecords as record (record.id)}
        <div
          class={
            'rounded-lg p-3 border transition-all cursor-pointer ' +
            (isSelected(record.id)
              ? 'bg-amber-500/15 border-amber-500/50'
              : 'bg-slate-700/20 border-slate-600/30 hover:bg-slate-700/40 hover:border-slate-500/40'
            )
          }
          onclick={() => isComparing ? toggleSelect(record.id) : handleView(record)}
        >
          <div class="flex items-start justify-between gap-2">
            <div class="flex-1 min-w-0">
              <div class="flex items-center gap-2 mb-1">
                {#if isComparing}
                  <div
                    class={
                      'w-4 h-4 rounded border-2 flex items-center justify-center flex-shrink-0 ' +
                      (isSelected(record.id)
                        ? 'bg-amber-500 border-amber-500'
                        : 'border-slate-500'
                      )
                    }
                  >
                    {#if isSelected(record.id)}
                      <Check class="w-3 h-3 text-white" />
                    {/if}
                  </div>
                {/if}
                <h4 class="font-medium text-sm text-slate-100 truncate">
                  {record.name}
                </h4>
              </div>

              <div class="flex items-center gap-3 text-xs text-slate-400 mb-2">
                <span>{formatDate(record.createdAt)}</span>
                <span>{getSundialTypeName(record.input.sundialType)}</span>
                {#if record.input.locationName}
                  <span class="truncate">{record.input.locationName}</span>
                {/if}
              </div>

              <div class="flex items-center gap-2">
                <span class={'px-2 py-0.5 rounded text-xs font-mono ' + getScoreBg(record.result.qualityScore) + ' ' + getScoreColor(record.result.qualityScore)}>
                  {record.result.qualityScore} 分
                </span>
                {#if record.photoAnalysis}
                  <span class="px-2 py-0.5 rounded text-xs bg-purple-500/20 text-purple-300">
                    含照片
                  </span>
                {/if}
                {#if record.tags && record.tags.length > 0}
                  <span class="text-xs text-slate-500 flex items-center gap-0.5">
                    <Tag class="w-3 h-3" />
                    {record.tags.length}
                  </span>
                {/if}
              </div>
            </div>

            {#if !isComparing}
              <div class="flex flex-col gap-1 flex-shrink-0">
                <button
                  onclick={(e) => { e.stopPropagation(); handleLoad(record); }}
                  class="p-1 text-slate-400 hover:text-amber-400 transition-colors"
                  title="加载到当前"
                >
                  <FileText class="w-4 h-4" />
                </button>
                <button
                  onclick={(e) => { e.stopPropagation(); handleArchive(record.id); }}
                  class="p-1 text-slate-400 hover:text-blue-400 transition-colors"
                  title={record.isArchived ? '取消归档' : '归档'}
                >
                  {#if record.isArchived}
                    <ArchiveRestore class="w-4 h-4" />
                  {:else}
                    <Archive class="w-4 h-4" />
                  {/if}
                </button>
                <button
                  onclick={(e) => { e.stopPropagation(); handleDelete(record.id); }}
                  class="p-1 text-slate-400 hover:text-red-400 transition-colors"
                  title="删除"
                >
                  <Trash2 class="w-4 h-4" />
                </button>
              </div>
            {/if}
          </div>
        </div>
      {/each}
    {/if}
  </div>
</div>
