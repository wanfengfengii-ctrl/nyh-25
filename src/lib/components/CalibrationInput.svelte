<script lang="ts">
  import { Calendar, Clock, Globe, Ruler, Compass, Sun, Upload, MapPin, Crosshair, X, Image as ImageIcon, ChevronDown, Camera } from 'lucide-svelte';
  import type { SundialType, CalibrationInput, LocationPreset } from '$lib/types';

  export let input: CalibrationInput;

  const sundialTypes: { value: SundialType; label: string; desc: string }[] = [
    { value: 'equatorial', label: '赤道式', desc: '盘面平行于赤道面' },
    { value: 'horizontal', label: '水平式', desc: '盘面水平放置' },
    { value: 'vertical', label: '垂直式', desc: '盘面垂直南向' }
  ];

  const locationPresets: LocationPreset[] = [
    { id: 'beijing', name: '北京', latitude: 39.9, longitude: 116.4 },
    { id: 'shanghai', name: '上海', latitude: 31.2, longitude: 121.5 },
    { id: 'guangzhou', name: '广州', latitude: 23.1, longitude: 113.3 },
    { id: 'chengdu', name: '成都', latitude: 30.7, longitude: 104.1 },
    { id: 'xian', name: '西安', latitude: 34.3, longitude: 108.9 },
    { id: 'hangzhou', name: '杭州', latitude: 30.3, longitude: 120.2 },
    { id: 'nanjing', name: '南京', latitude: 32.1, longitude: 118.8 },
    { id: 'wuhan', name: '武汉', latitude: 30.6, longitude: 114.3 },
  ];

  let isLocating = false;
  let locateError = '';
  let showLocationDropdown = false;
  let selectedLocationName = '';

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

  function selectLocation(preset: LocationPreset) {
    updateField('latitude', preset.latitude);
    updateField('longitude', preset.longitude);
    updateField('locationName', preset.name);
    selectedLocationName = preset.name;
    showLocationDropdown = false;
  }

  function getCurrentLocation() {
    isLocating = true;
    locateError = '';

    if (!navigator.geolocation) {
      locateError = '您的浏览器不支持定位功能';
      isLocating = false;
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        updateField('latitude', position.coords.latitude);
        updateField('longitude', position.coords.longitude);
        updateField('locationName', '当前位置');
        selectedLocationName = '当前位置';
        isLocating = false;
      },
      (error) => {
        locateError = '定位失败：' + error.message;
        isLocating = false;
      },
      { enableHighAccuracy: true, timeout: 10000 }
    );
  }

  function handlePhotoUpload(e: Event) {
    const file = (e.target as HTMLInputElement).files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const dataUrl = event.target?.result as string;
      updateField('photoDataUrl', dataUrl);
    };
    reader.readAsDataURL(file);
  }

  function handleCameraCapture(e: Event) {
    const file = (e.target as HTMLInputElement).files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const dataUrl = event.target?.result as string;
      updateField('photoDataUrl', dataUrl);
    };
    reader.readAsDataURL(file);
  }

  function removePhoto() {
    updateField('photoDataUrl', null);
  }

  function toggleLocationDropdown() {
    showLocationDropdown = !showLocationDropdown;
  }

  function handleBlur() {
    setTimeout(() => {
      showLocationDropdown = false;
    }, 200);
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

    <div class="relative mb-3">
      <button
        onclick={toggleLocationDropdown}
        onblur={handleBlur}
        class="w-full px-3 py-2 bg-slate-700/50 border border-slate-600/50 rounded-lg text-sm text-left
               focus:outline-none focus:border-amber-500/50 text-slate-200 flex items-center justify-between
               hover:bg-slate-700/70 transition-colors"
      >
        <span class="flex items-center gap-2">
          <MapPin class="w-4 h-4 text-amber-400" />
          {selectedLocationName || '选择城市...'}
        </span>
        <ChevronDown class="w-4 h-4 text-slate-400" />
      </button>

      {#if showLocationDropdown}
        <div class="absolute top-full left-0 right-0 mt-1 bg-slate-800 border border-slate-600/50 rounded-lg
                    shadow-xl z-50 max-h-48 overflow-y-auto">
          {#each locationPresets as preset}
            <button
              onclick={() => selectLocation(preset)}
              class="w-full px-3 py-2 text-left text-sm text-slate-200 hover:bg-slate-700/50
                     first:rounded-t-lg last:rounded-b-lg transition-colors"
            >
              {preset.name}
              <span class="text-xs text-slate-500 ml-2">
                {preset.latitude.toFixed(1)}°N, {preset.longitude.toFixed(1)}°E
              </span>
            </button>
          {/each}
        </div>
      {/if}
    </div>

    <button
      onclick={getCurrentLocation}
      disabled={isLocating}
      class="w-full mb-3 px-3 py-2 bg-blue-500/20 hover:bg-blue-500/30 border border-blue-500/30
             rounded-lg text-sm text-blue-400 flex items-center justify-center gap-2
             disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
    >
      <Crosshair class="w-4 h-4 {isLocating ? 'animate-spin' : ''}" />
      {isLocating ? '定位中...' : '使用当前位置'}
    </button>

    {#if locateError}
      <div class="mb-3 px-3 py-2 bg-red-500/10 border border-red-500/30 rounded-lg text-xs text-red-400">
        {locateError}
      </div>
    {/if}

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
      <ImageIcon class="w-4 h-4" />
      现场照片
    </h3>

    {#if input.photoDataUrl}
      <div class="relative rounded-lg overflow-hidden border border-slate-600/50">
        <img src={input.photoDataUrl} alt="现场照片" class="w-full h-auto" />
        <button
          onclick={removePhoto}
          class="absolute top-2 right-2 w-8 h-8 bg-red-500/80 hover:bg-red-500 rounded-full
                 flex items-center justify-center text-white transition-colors"
        >
          <X class="w-4 h-4" />
        </button>
      </div>
      <p class="text-xs text-slate-500 mt-2 text-center">
        点击右上角 × 可删除照片
      </p>
    {:else}
      <div class="space-y-2">
        <label class="block">
          <div class="border-2 border-dashed border-slate-600/50 rounded-lg p-5 text-center
                      hover:border-amber-500/50 hover:bg-slate-700/20 transition-all cursor-pointer">
            <Upload class="w-8 h-8 mx-auto mb-2 text-slate-500" />
            <p class="text-sm text-slate-300 mb-1">上传现场照片</p>
            <p class="text-xs text-slate-500">支持 JPG、PNG 格式</p>
          </div>
          <input
            type="file"
            accept="image/*"
            onchange={handlePhotoUpload}
            class="hidden"
          />
        </label>
        <label class="block">
          <div class="border-2 border-slate-600/30 rounded-lg p-3 text-center
                      hover:border-blue-500/50 hover:bg-blue-500/10 transition-all cursor-pointer">
            <div class="flex items-center justify-center gap-2">
              <Camera class="w-4 h-4 text-blue-400" />
              <span class="text-xs text-blue-300">拍照（移动端）</span>
            </div>
          </div>
          <input
            type="file"
            accept="image/*"
            capture="environment"
            onchange={handleCameraCapture}
            class="hidden"
          />
        </label>
      </div>
    {/if}
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
