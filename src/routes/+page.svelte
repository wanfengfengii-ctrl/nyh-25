<script lang="ts">
  import ControlPanel from '$lib/components/ControlPanel.svelte';
  import SundialScene from '$lib/components/SundialScene.svelte';
  import ShadowTrack from '$lib/components/ShadowTrack.svelte';
  import PresetManager from '$lib/components/PresetManager.svelte';
  import { Sun } from 'lucide-svelte';
</script>

<div class="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 text-white">
  <header class="border-b border-slate-700/40 backdrop-blur-sm bg-slate-900/30 sticky top-0 z-20">
    <div class="max-w-[1600px] mx-auto px-6 py-4 flex items-center justify-between">
      <div class="flex items-center gap-3">
        <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-orange-600
                    flex items-center justify-center shadow-lg shadow-amber-500/20">
          <Sun class="w-6 h-6 text-white" />
        </div>
        <div>
          <h1 class="font-display text-xl font-bold text-amber-500 tracking-wider">
            日晷模拟器
          </h1>
          <p class="text-xs text-slate-500">Sundial Simulator</p>
        </div>
      </div>
      <div class="text-sm text-slate-400 hidden sm:block">
        探索不同纬度、日期与时间的光影变化
      </div>
    </div>
  </header>

  <main class="max-w-[1600px] mx-auto px-4 sm:px-6 py-6">
    <div class="grid grid-cols-12 gap-6 h-[calc(100vh-120px)]">
      <div class="col-span-12 lg:col-span-3 h-full overflow-hidden">
        <ControlPanel />
      </div>

      <div class="col-span-12 lg:col-span-6 flex flex-col gap-6 min-h-[400px] lg:min-h-0 lg:h-full">
        <div class="flex-1 glass-card rounded-xl overflow-hidden min-h-0">
          <SundialScene />
        </div>
      </div>

      <div class="col-span-12 lg:col-span-3 flex flex-col gap-6 h-full overflow-hidden">
        <ShadowTrack />
        <div class="flex-1 min-h-0 overflow-hidden">
          <PresetManager />
        </div>
      </div>
    </div>
  </main>
</div>
