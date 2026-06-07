<script lang="ts">
  import { onMount } from 'svelte';
  import { Sun, ArrowLeft, Play, RefreshCw, Target } from 'lucide-svelte';
  import CalibrationInput from '$lib/components/CalibrationInput.svelte';
  import CalibrationResult from '$lib/components/CalibrationResult.svelte';
  import CalibrationSteps from '$lib/components/CalibrationSteps.svelte';
  import { performCalibration, getTheoreticalSolarPosition } from '$lib/utils/calibration';
  import type { CalibrationInput as CalibrationInputType, CalibrationResult as CalibrationResultType } from '$lib/types';
  import { goto } from '$app/navigation';

  const DEFAULT_LATITUDE = 39.9;
  const DEFAULT_LONGITUDE = 116.4;
  const DEFAULT_GNOMON_LENGTH = 1;

  let input: CalibrationInputType = createDefaultInput();
  let result: CalibrationResultType | null = null;
  let currentStep = 0;
  let isCalculating = false;

  function createDefaultInput(): CalibrationInputType {
    const now = new Date();
    return {
      gnomonLength: DEFAULT_GNOMON_LENGTH,
      shadowLength: 1.2,
      shadowDirection: 5,
      measurementDateTime: now.toISOString(),
      latitude: DEFAULT_LATITUDE,
      longitude: DEFAULT_LONGITUDE,
      sundialType: 'horizontal',
      dialTiltAngle: 0,
      dialOrientation: 180,
    };
  }

  function initializeWithDefaults() {
    const defaultInput = createDefaultInput();
    try {
      const theoretical = getTheoreticalSolarPosition(
        defaultInput.measurementDateTime,
        defaultInput.latitude,
        defaultInput.longitude
      );

      if (theoretical.altitude > 0) {
        const theoreticalShadowLength =
          defaultInput.gnomonLength / Math.tan((theoretical.altitude * Math.PI) / 180);
        const theoreticalShadowDirection = ((theoretical.azimuth + 180) % 360);

        defaultInput.shadowLength = Math.max(0.1, theoreticalShadowLength * 0.95);
        defaultInput.shadowDirection = (theoreticalShadowDirection + 8 + 360) % 360;
      }
    } catch (e) {
      // 使用默认值
    }
    input = defaultInput;
  }

  onMount(() => {
    initializeWithDefaults();
  });

  function handleCalibrate() {
    isCalculating = true;
    setTimeout(() => {
      result = performCalibration(input);
      currentStep = 0;
      isCalculating = false;
    }, 300);
  }

  function handleReset() {
    initializeWithDefaults();
    result = null;
    currentStep = 0;
  }

  function goBack() {
    goto('/');
  }
</script>

<div class="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 text-white">
  <header class="border-b border-slate-700/40 backdrop-blur-sm bg-slate-900/30 sticky top-0 z-20">
    <div class="max-w-[1800px] mx-auto px-6 py-4 flex items-center justify-between">
      <div class="flex items-center gap-3">
        <button
          onclick={goBack}
          class="w-10 h-10 rounded-xl bg-slate-700/50 hover:bg-slate-600/50 flex items-center justify-center
                 border border-slate-600/50 transition-colors"
        >
          <ArrowLeft class="w-5 h-5" />
        </button>
        <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-orange-600
                    flex items-center justify-center shadow-lg shadow-amber-500/20">
          <Target class="w-6 h-6 text-white" />
        </div>
        <div>
          <h1 class="font-display text-xl font-bold text-amber-500 tracking-wider">
            日晷校准与实景测量
          </h1>
          <p class="text-xs text-slate-500">Sundial Calibration & Field Measurement</p>
        </div>
      </div>
      <div class="flex items-center gap-2">
        <button
          onclick={handleReset}
          class="px-4 py-2 bg-slate-700/50 hover:bg-slate-600/50 rounded-lg text-sm
                 border border-slate-600/50 transition-colors flex items-center gap-2"
        >
          <RefreshCw class="w-4 h-4" />
          重置
        </button>
        <button
          onclick={handleCalibrate}
          disabled={isCalculating}
          class="px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500
                 rounded-lg text-sm font-medium text-white shadow-lg shadow-amber-500/20
                 transition-all duration-200 flex items-center gap-2 disabled:opacity-50"
        >
          <Play class="w-4 h-4" />
          {isCalculating ? '计算中...' : '开始校准'}
        </button>
      </div>
    </div>
  </header>

  <main class="max-w-[1800px] mx-auto px-4 sm:px-6 py-6">
    <div class="grid grid-cols-12 gap-6 h-[calc(100vh-100px)]">
      <div class="col-span-12 lg:col-span-3 h-full overflow-hidden">
        <CalibrationInput bind:input />
      </div>

      <div class="col-span-12 lg:col-span-5 flex flex-col gap-6 min-h-[400px] lg:min-h-0 lg:h-full">
        <div class="flex-1 glass-card rounded-xl overflow-hidden min-h-0">
          <CalibrationResult {result} {input} />
        </div>
      </div>

      <div class="col-span-12 lg:col-span-4 flex flex-col gap-6 h-full overflow-hidden">
        <div class="flex-1 min-h-0 overflow-hidden">
          <CalibrationSteps
            steps={result?.calibrationSteps || []}
            bind:currentStep
          />
        </div>
      </div>
    </div>
  </main>
</div>
