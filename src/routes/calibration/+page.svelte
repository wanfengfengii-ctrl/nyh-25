<script lang="ts">
  import { onMount } from 'svelte';
  import {
    Sun,
    ArrowLeft,
    Play,
    RefreshCw,
    Target,
    Save,
    History,
    Camera,
    GitCompare,
    Sliders,
    Image as ImageIcon,
    X,
  } from 'lucide-svelte';
  import CalibrationInput from '$lib/components/CalibrationInput.svelte';
  import CalibrationResult from '$lib/components/CalibrationResult.svelte';
  import CalibrationSteps from '$lib/components/CalibrationSteps.svelte';
  import PhotoAnalyzer from '$lib/components/PhotoAnalyzer.svelte';
  import MeasurementHistory from '$lib/components/MeasurementHistory.svelte';
  import MeasurementCompare from '$lib/components/MeasurementCompare.svelte';
  import RecordDetailModal from '$lib/components/RecordDetailModal.svelte';
  import { getTheoreticalSolarPosition } from '$lib/services/calibrationService';
  import { extractPhotoMetadata } from '$lib/services/photoAnalysisService';
  import { calibrationStore } from '$lib/stores/calibrationStore';
  import { measurementStore } from '$lib/stores/measurementStore';

  const {
    activeRecords,
  } = measurementStore;

  const {
    input,
    result,
    photoAnalysis,
    isCalculating,
    currentStep,
    calibrateAsync,
    resetInput,
    setCurrentStep,
    setPhotoAnalysis,
    applyPhotoAnalysisToInput,
    saveRecord,
    loadRecord,
  } = calibrationStore;

  import type {
    PhotoAnalysisResult,
    MeasurementRecord,
  } from '$lib/types';
  import { goto } from '$app/navigation';

  const DEFAULT_LATITUDE = 39.9;
  const DEFAULT_LONGITUDE = 116.4;
  const DEFAULT_GNOMON_LENGTH = 1;

  let activeTab: 'input' | 'photo' | 'history' | 'compare' = 'input';
  let compareRecordIds: string[] = [];
  let showRecordDetail: MeasurementRecord | null = null;
  let saveSuccessMsg = '';

  onMount(() => {
    resetInput();
  });

  async function handleCalibrate() {
    saveSuccessMsg = '';
    await calibrateAsync();
  }

  function handleReset() {
    resetInput();
    saveSuccessMsg = '';
  }

  function goBack() {
    goto('/');
  }

  function handlePhotoAnalysisUpdate(analysis: PhotoAnalysisResult) {
    setPhotoAnalysis(analysis);
  }

  function handleApplyPhotoAnalysis(data: { shadowLength: number; shadowDirection: number }) {
    applyPhotoAnalysisToInput(data);
    activeTab = 'input';
  }

  function handleSaveRecord() {
    const success = saveRecord();
    if (success) {
      saveSuccessMsg = '保存成功！';
      setTimeout(() => {
        saveSuccessMsg = '';
      }, 2000);
    }
  }

  function handleLoadRecord(record: MeasurementRecord) {
    loadRecord(record);
    showRecordDetail = null;
    activeTab = 'input';
    setCurrentStep(0);
  }

  function handleViewRecord(record: MeasurementRecord) {
    showRecordDetail = record;
  }

  function handleCompare(ids: string[]) {
    compareRecordIds = ids;
    activeTab = 'compare';
  }

  function handleCloseCompare() {
    activeTab = 'history';
  }

  function getTabClass(tab: typeof activeTab): string {
    const base = 'px-3 py-2 text-xs rounded-lg transition-all flex items-center gap-1.5 ';
    if (activeTab === tab) {
      return base + 'bg-amber-500/20 text-amber-300 border border-amber-500/50';
    }
    return base + 'text-slate-400 hover:text-slate-200 hover:bg-slate-700/30 border border-transparent';
  }
</script>

<div class="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 text-white">
  <header class="border-b border-slate-700/40 backdrop-blur-sm bg-slate-900/30 sticky top-0 z-20">
    <div class="max-w-[1800px] mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
      <div class="flex items-center gap-3">
        <button
          onclick={goBack}
          class="w-9 h-9 rounded-xl bg-slate-700/50 hover:bg-slate-600/50 flex items-center justify-center
                 border border-slate-600/50 transition-colors"
        >
          <ArrowLeft class="w-4 h-4" />
        </button>
        <div class="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-400 to-orange-600
                    flex items-center justify-center shadow-lg shadow-amber-500/20">
          <Target class="w-5 h-5 text-white" />
        </div>
        <div class="hidden sm:block">
          <h1 class="font-display text-lg font-bold text-amber-500 tracking-wider">
            AI 实景校准与报告中心
          </h1>
          <p class="text-xs text-slate-500">AI Sundial Calibration & Report Center</p>
        </div>
      </div>

      <div class="flex items-center gap-2">
        {#if $result && saveSuccessMsg}
          <span class="text-xs text-emerald-400 mr-2">{saveSuccessMsg}</span>
        {/if}
        {#if $result}
          <button
            onclick={handleSaveRecord}
            class="hidden sm:flex px-3 py-2 bg-emerald-500/20 hover:bg-emerald-500/30
                   border border-emerald-500/30 rounded-lg text-sm text-emerald-400
                   items-center gap-1.5 transition-colors"
          >
            <Save class="w-4 h-4" />
            保存记录
          </button>
        {/if}
        <button
          onclick={handleReset}
          class="px-3 py-2 bg-slate-700/50 hover:bg-slate-600/50 rounded-lg text-sm
                 border border-slate-600/50 transition-colors flex items-center gap-1.5"
        >
          <RefreshCw class="w-4 h-4" />
          <span class="hidden sm:inline">重置</span>
        </button>
        <button
          onclick={handleCalibrate}
          disabled={$isCalculating}
          class="px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500
                 rounded-lg text-sm font-medium text-white shadow-lg shadow-amber-500/20
                 transition-all duration-200 flex items-center gap-1.5 disabled:opacity-50"
        >
          <Play class="w-4 h-4" />
          <span class="hidden sm:inline">{$isCalculating ? '计算中...' : '开始校准'}</span>
          <span class="sm:hidden">{$isCalculating ? '...' : '校准'}</span>
        </button>
      </div>
    </div>

    <div class="max-w-[1800px] mx-auto px-4 sm:px-6 pb-2 flex gap-2 overflow-x-auto">
      <button
        class={getTabClass('input')}
        onclick={() => activeTab = 'input'}
      >
        <Sliders class="w-3.5 h-3.5" />
        校准参数
      </button>
      <button
        class={getTabClass('photo')}
        onclick={() => activeTab = 'photo'}
      >
        <Camera class="w-3.5 h-3.5" />
        照片分析
      </button>
      <button
        class={getTabClass('history')}
        onclick={() => activeTab = 'history'}
      >
        <History class="w-3.5 h-3.5" />
        历史记录
        {#if $activeRecords.length > 0}
          <span class="bg-slate-600 text-slate-200 px-1.5 py-0.5 rounded text-xs">
            {$activeRecords.length}
          </span>
        {/if}
      </button>
      {#if compareRecordIds.length > 0}
        <button
          class={getTabClass('compare')}
          onclick={() => activeTab = 'compare'}
        >
          <GitCompare class="w-3.5 h-3.5" />
          对比
        </button>
      {/if}
    </div>
  </header>

  <main class="max-w-[1800px] mx-auto px-4 sm:px-6 py-4">
    {#if activeTab === 'input'}
      <div class="grid grid-cols-12 gap-4 lg:gap-6 min-h-[calc(100vh-120px)]">
        <div class="col-span-12 lg:col-span-3 h-full">
          <CalibrationInput bind:input={$input} />
        </div>

        <div class="col-span-12 lg:col-span-5 flex flex-col gap-4 min-h-[400px] lg:min-h-0">
          <div class="flex-1 glass-card rounded-xl overflow-hidden min-h-0">
            <CalibrationResult result={$result} input={$input} />
          </div>
        </div>

        <div class="col-span-12 lg:col-span-4 flex flex-col gap-4 h-full">
          <div class="flex-1 min-h-0 overflow-hidden">
            <CalibrationSteps
              steps={$result?.calibrationSteps || []}
              bind:currentStep={$currentStep}
            />
          </div>

          {#if $result}
            <button
              onclick={handleSaveRecord}
              class="sm:hidden w-full py-2.5 bg-gradient-to-r from-emerald-500 to-teal-600
                     hover:from-emerald-400 hover:to-teal-500 rounded-lg text-sm font-medium
                     text-white shadow-lg shadow-emerald-500/20 transition-all duration-200
                     flex items-center justify-center gap-2"
            >
              <Save class="w-4 h-4" />
              保存测量记录
            </button>
          {/if}
        </div>
      </div>
    {:else if activeTab === 'photo'}
      <div class="grid grid-cols-12 gap-4 lg:gap-6 min-h-[calc(100vh-120px)]">
        <div class="col-span-12 lg:col-span-8">
          {#if $input.photoDataUrl}
            <PhotoAnalyzer
              photoDataUrl={$input.photoDataUrl}
              gnomonLength={$input.gnomonLength}
              bind:analysis={$photoAnalysis}
              on:applyToInput={(e) => handleApplyPhotoAnalysis(e.detail)}
            />
          {:else}
            <div class="glass-card p-8 text-center">
              <ImageIcon class="w-16 h-16 mx-auto mb-4 text-slate-500 opacity-50" />
              <p class="text-slate-400 mb-4">请先在左侧"校准参数"中上传现场照片</p>
              <button
                onclick={() => activeTab = 'input'}
                class="px-4 py-2 bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/30
                       rounded-lg text-sm text-amber-300 transition-colors"
              >
                前往上传照片
              </button>
            </div>
          {/if}
        </div>

        <div class="col-span-12 lg:col-span-4">
          <div class="glass-card p-5 space-y-4">
            <h3 class="font-display text-base text-amber-500 font-semibold">分析说明</h3>
            <div class="space-y-3 text-sm text-slate-300">
              <div>
                <h4 class="font-medium text-slate-200 mb-1">AI 自动识别</h4>
                <p class="text-slate-400 text-xs">
                  点击"AI 识别"按钮，系统将自动分析照片中的晷针、影子和地平线。
                </p>
              </div>
              <div>
                <h4 class="font-medium text-slate-200 mb-1">手动标注</h4>
                <p class="text-slate-400 text-xs">
                  选择标注工具后在图片上点击，手动标记晷针顶端/底座、影子末端/起点，以及地平线。
                </p>
              </div>
              <div>
                <h4 class="font-medium text-slate-200 mb-1">应用到校准</h4>
                <p class="text-slate-400 text-xs">
                  标注完成后，系统会根据晷针长度自动计算影子实际长度和方向，一键应用到校准参数。
                </p>
              </div>
              <div>
                <h4 class="font-medium text-slate-200 mb-1">移动端拍照</h4>
                <p class="text-slate-400 text-xs">
                  在手机上访问时，点击上传按钮可选择"拍照"，直接使用相机拍摄现场照片。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    {:else if activeTab === 'history'}
      <div class="grid grid-cols-12 gap-4 lg:gap-6 min-h-[calc(100vh-120px)]">
        <div class="col-span-12 lg:col-span-5 h-full">
          <MeasurementHistory
            on:loadRecord={(e) => handleLoadRecord(e.detail)}
            on:viewRecord={(e) => handleViewRecord(e.detail)}
            on:compare={(e) => handleCompare(e.detail)}
          />
        </div>

        <div class="col-span-12 lg:col-span-7 h-full">
          <div class="glass-card p-8 h-full flex items-center justify-center">
            <div class="text-center text-slate-500">
              <History class="w-16 h-16 mx-auto mb-4 opacity-30" />
              <p class="text-sm">选择左侧的记录查看详情</p>
              <p class="text-xs mt-2">或点击"对比"按钮比较多条记录</p>
            </div>
          </div>
        </div>
      </div>
    {:else if activeTab === 'compare'}
      <div class="min-h-[calc(100vh-120px)]">
        <MeasurementCompare
          recordIds={compareRecordIds}
          on:close={handleCloseCompare}
        />
      </div>
    {/if}
  </main>

  {#if showRecordDetail}
    <RecordDetailModal
      record={showRecordDetail}
      on:close={() => showRecordDetail = null}
      on:load={(e) => handleLoadRecord(e.detail)}
    />
  {/if}
</div>
