<script lang="ts">
  import { Calendar, Clock, Globe, Ruler, Compass, Sun, Upload } from 'lucide-svelte';
  import type { SundialType, CalibrationInput } from '$lib/types';

  export let input: CalibrationInput;

  const sundialTypes: { value: SundialType; label: string; desc: string }[] = [
    { value: 'equatorial', label: '赤道式', desc: '盘面平行于赤道面' },
    { value: 'horizontal', label: '水平式', desc: '盘面水平放置' },
    { value: 'vertical', label: '垂直式', desc: '盘面垂直南向' }
  ];

  function updateField<K extends keyof CalibrationInput>(
    field: K,
    value: CalibrationInput[K]
  ) {
    input = { ...input, [field]: value };
  }

  function handleNumberInput(
    field: keyof CalibrationInput,
    e: Event
  ) {
    const val = parseFloat((e.target as HTMLInputElement).value);
    if (!isNaN(val)) {
      updateField(field, val as CalibrationInput[typeof field]);
    }
  }

  function getTypeBtnClass(typeValue: SundialType): string {
    const base = 'w-full text-left px-3 py-2 rounded-lg transition-all duration-200 border ';
    if (input.sundialType === typeValue) {
      return base + 'bg-amber-500/20 border-amber-500/50';
    }
    return base + 'bg-slate-700/30 border-slate-600/30 hover:bg-slate-700/50';
  }

  function formatDateTimeLocal(dateStr: string): string {
    const date = new Date(dateStr);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${year}-${month}-${day}T${hours}:${minutes}`;
  }

  function handleDateTimeInput(e: Event) {
    const val = (e.target as HTMLInputElement).value;
    if (val) {
      updateField('measurementDateTime', new Date(val).toISOString());
    }
  }
</script>

<div class="glass-card p-5 space-y-5 h-full overflow-y-auto">
  <div>
    <h3 class="font-display text-base text-amber-500 font-semibold mb-3 flex items-center gap-2">
      <Sun class="w-4 h-4" />
      日晷类型
    </h3>
    <div class="space-y-2">
      {#each sundialTypes as type}
        <button
          class={getTypeBtnClass(type.value)}
          onclick={() => updateField('sundialType', type.value)}
        >
          <div class="font-medium text-sm text-slate-100">{type.label}</div>
          <div class="text-xs text-slate-400">{type.desc}</div>
        </button>
      {/each}
    </div>
  </div>

  <div class="border-t border-slate-700/50 pt-5">
    <h3 class="font-display text-base text-amber-500 font-semibold mb-3 flex items-center gap-2">
      <Globe class="w-4 h-4" />
      地理位置
    </h3>
    <div class="space-y-3">
      <div>
        <label class="text-xs text-slate-400 mb-1 block">纬度 (°)</label>
        <div class="flex items-center gap-2">
          <input
            type="range"
            min="-90"
            max="90"
            step="0.1"
            value={input.latitude}
            oninput={(e) => handleNumberInput('latitude', e)}
            class="flex-1 accent-amber-500"
          />
          <input
            type="number"
            min="-90"
            max="90"
            step="0.1"
            value={input.latitude.toFixed(1)}
            oninput={(e) => handleNumberInput('latitude', e)}
            class="w-20 px-2 py-1 bg-slate-700/50 border border-slate-600/50 rounded text-sm text-center
                   focus:outline-none focus:border-amber-500/50"
          />
        </div>
      </div>
      <div>
        <label class="text-xs text-slate-400 mb-1 block">经度 (°)</label>
        <div class="flex items-center gap-2">
          <input
            type="range"
            min="-180"
            max="180"
            step="0.1"
            value={input.longitude}
            oninput={(e) => handleNumberInput('longitude', e)}
            class="flex-1 accent-amber-500"
          />
          <input
            type="number"
            min="-180"
            max="180"
            step="0.1"
            value={input.longitude.toFixed(1)}
            oninput={(e) => handleNumberInput('longitude', e)}
            class="w-20 px-2 py-1 bg-slate-700/50 border border-slate-600/50 rounded text-sm text-center
                   focus:outline-none focus:border-amber-500/50"
          />
        </div>
      </div>
    </div>
  </div>

  <div class="border-t border-slate-700/50 pt-5">
    <h3 class="font-display text-base text-amber-500 font-semibold mb-3 flex items-center gap-2">
      <Calendar class="w-4 h-4" />
      测量时间
    </h3>
    <input
      type="datetime-local"
      value={formatDateTimeLocal(input.measurementDateTime)}
      oninput={handleDateTimeInput}
      class="w-full px-3 py-2 bg-slate-700/50 border border-slate-600/50 rounded-lg text-sm
             focus:outline-none focus:border-amber-500/50 text-slate-100"
    />
  </div>

  <div class="border-t border-slate-700/50 pt-5">
    <h3 class="font-display text-base text-amber-500 font-semibold mb-3 flex items-center gap-2">
      <Ruler class="w-4 h-4" />
      实测数据
    </h3>
    <div class="space-y-3">
      <div>
        <label class="text-xs text-slate-400 mb-1 block">晷针长度 (m)</label>
        <input
          type="number"
          min="0.1"
          max="100"
          step="0.01"
          value={input.gnomonLength}
          oninput={(e) => handleNumberInput('gnomonLength', e)}
          class="w-full px-3 py-2 bg-slate-700/50 border border-slate-600/50 rounded-lg text-sm
                 focus:outline-none focus:border-amber-500/50 text-slate-100"
        />
      </div>
      <div>
        <label class="text-xs text-slate-400 mb-1 block">影长 (m)</label>
        <input
          type="number"
          min="0.01"
          max="1000"
          step="0.01"
          value={input.shadowLength}
          oninput={(e) => handleNumberInput('shadowLength', e)}
          class="w-full px-3 py-2 bg-slate-700/50 border border-slate-600/50 rounded-lg text-sm
                 focus:outline-none focus:border-amber-500/50 text-slate-100"
        />
      </div>
      <div>
        <label class="text-xs text-slate-400 mb-1 flex items-center justify-between">
          <span>影子方向 (°)</span>
          <span class="text-slate-300 font-mono">{input.shadowDirection.toFixed(1)}°</span>
        </label>
        <input
          type="range"
          min="0"
          max="360"
          step="0.5"
          value={input.shadowDirection}
          oninput={(e) => handleNumberInput('shadowDirection', e)}
          class="w-full accent-amber-500"
        />
        <div class="flex justify-between text-xs text-slate-500 mt-1">
          <span>0° 北</span>
          <span>90° 东</span>
          <span>180° 南</span>
          <span>270° 西</span>
        </div>
      </div>
    </div>
  </div>

  <div class="border-t border-slate-700/50 pt-5">
    <h3 class="font-display text-base text-amber-500 font-semibold mb-3 flex items-center gap-2">
      <Compass class="w-4 h-4" />
      日晷安装参数
    </h3>
    <div class="space-y-3">
      <div>
        <label class="text-xs text-slate-400 mb-1 flex items-center justify-between">
          <span>日晷朝向 (°)</span>
          <span class="text-slate-300 font-mono">{input.dialOrientation.toFixed(1)}°</span>
        </label>
        <input
          type="range"
          min="0"
          max="360"
          step="0.5"
          value={input.dialOrientation}
          oninput={(e) => handleNumberInput('dialOrientation', e)}
          class="w-full accent-amber-500"
        />
      </div>
      <div>
        <label class="text-xs text-slate-400 mb-1 flex items-center justify-between">
          <span>日晷倾角 (°)</span>
          <span class="text-slate-300 font-mono">{input.dialTiltAngle.toFixed(1)}°</span>
        </label>
        <input
          type="range"
          min="0"
          max="90"
          step="0.5"
          value={input.dialTiltAngle}
          oninput={(e) => handleNumberInput('dialTiltAngle', e)}
          class="w-full accent-amber-500"
        />
      </div>
    </div>
  </div>
</div>
