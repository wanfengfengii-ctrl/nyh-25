<script lang="ts">
  import {
    CheckCircle2,
    Circle,
    RotateCw,
    RotateCcw,
    ArrowUp,
    ArrowDown,
    Minus,
    ListChecks,
    Info
  } from 'lucide-svelte';
  import type { CalibrationStep } from '$lib/types';

  export let steps: CalibrationStep[] = [];
  export let currentStep: number = 0;

  function getDirectionIcon(direction: string) {
    switch (direction) {
      case 'clockwise':
        return RotateCw;
      case 'counterclockwise':
        return RotateCcw;
      case 'up':
        return ArrowUp;
      case 'down':
        return ArrowDown;
      default:
        return Minus;
    }
  }

  function getPriorityColor(priority: string): string {
    switch (priority) {
      case 'critical':
        return 'bg-red-500/10 border-red-500/30 text-red-400';
      case 'important':
        return 'bg-amber-500/10 border-amber-500/30 text-amber-400';
      case 'minor':
        return 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400';
      default:
        return 'bg-slate-500/10 border-slate-500/30 text-slate-400';
    }
  }

  function getPriorityLabel(priority: string): string {
    switch (priority) {
      case 'critical':
        return '重要';
      case 'important':
        return '建议';
      case 'minor':
        return '轻微';
      default:
        return '';
    }
  }

  function getStepBgClass(index: number): string {
    if (index < currentStep) {
      return 'bg-emerald-500/10 border-emerald-500/30';
    }
    if (index === currentStep) {
      return 'bg-amber-500/10 border-amber-500/50 ring-1 ring-amber-500/30';
    }
    return 'bg-slate-700/20 border-slate-600/30';
  }

  function getStepNumberClass(index: number): string {
    if (index < currentStep) {
      return 'bg-emerald-500 text-white';
    }
    if (index === currentStep) {
      return 'bg-amber-500 text-white';
    }
    return 'bg-slate-600 text-slate-300';
  }

  function setCurrentStep(index: number) {
    currentStep = index;
  }

  function nextStep() {
    if (currentStep < steps.length - 1) {
      currentStep++;
    }
  }

  function prevStep() {
    if (currentStep > 0) {
      currentStep--;
    }
  }
</script>

<div class="glass-card p-5 h-full flex flex-col overflow-hidden">
  <div class="flex items-center justify-between mb-4 flex-shrink-0">
    <h3 class="font-display text-base text-amber-500 font-semibold flex items-center gap-2">
      <ListChecks class="w-4 h-4" />
      校准步骤
    </h3>
    <span class="text-xs text-slate-500">
      {currentStep + 1} / {steps.length}
    </span>
  </div>

  {#if steps.length > 0}
    <div class="flex-1 min-h-0 overflow-hidden flex flex-col">
      <div class="flex-1 overflow-y-auto space-y-2 mb-4">
        {#each steps as step, index}
          <div
            class={`rounded-lg p-3 border cursor-pointer transition-all duration-200 ${getStepBgClass(index)}`}
            onclick={() => setCurrentStep(index)}
          >
            <div class="flex items-start gap-3">
              <div
                class={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold ${getStepNumberClass(index)}`}
              >
                {#if index < currentStep}
                  <CheckCircle2 class="w-4 h-4" />
                {:else}
                  {index + 1}
                {/if}
              </div>
              <div class="flex-1 min-w-0">
                <div class="flex items-center justify-between mb-1">
                  <h4 class="font-medium text-sm text-slate-100">{step.title}</h4>
                  <span
                    class={`text-xs px-2 py-0.5 rounded-full border ${getPriorityColor(step.priority)}`}
                  >
                    {getPriorityLabel(step.priority)}
                  </span>
                </div>
                <p class="text-xs text-slate-400 mb-2">{step.description}</p>
                <div class="flex items-center gap-2">
                  {#if step.direction === 'clockwise'}
                    <RotateCw class="w-4 h-4 text-amber-400" />
                  {:else if step.direction === 'counterclockwise'}
                    <RotateCcw class="w-4 h-4 text-amber-400" />
                  {:else if step.direction === 'up'}
                    <ArrowUp class="w-4 h-4 text-amber-400" />
                  {:else if step.direction === 'down'}
                    <ArrowDown class="w-4 h-4 text-amber-400" />
                  {:else}
                    <Minus class="w-4 h-4 text-amber-400" />
                  {/if}
                  <span class="text-sm font-mono text-amber-300">
                    {step.adjustment}
                  </span>
                </div>
              </div>
            </div>
          </div>
        {/each}
      </div>

      <div class="flex items-center justify-between pt-4 border-t border-slate-700/50 flex-shrink-0">
        <button
          onclick={prevStep}
          disabled={currentStep === 0}
          class="px-4 py-2 bg-slate-700/50 hover:bg-slate-600/50 disabled:opacity-50 disabled:cursor-not-allowed
                 rounded-lg text-sm border border-slate-600/50 transition-colors"
        >
          上一步
        </button>
        <button
          onclick={nextStep}
          disabled={currentStep >= steps.length - 1}
          class="px-4 py-2 bg-amber-500/20 hover:bg-amber-500/30 disabled:opacity-50 disabled:cursor-not-allowed
                 rounded-lg text-sm border border-amber-500/30 text-amber-400 transition-colors"
        >
          下一步
        </button>
      </div>
    </div>
  {:else}
    <div class="flex-1 flex items-center justify-center">
      <div class="text-center text-slate-500">
        <Info class="w-10 h-10 mx-auto mb-2 opacity-50" />
        <p class="text-sm">暂无校准步骤</p>
      </div>
    </div>
  {/if}
</div>
