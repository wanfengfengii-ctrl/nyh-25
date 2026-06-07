import { writable, derived, get } from 'svelte/store';
import type { SundialState, Preset, SolarPosition, ShadowPoint, SundialType, ComparePresetData, AltitudePoint, YearlyAnalysisData, KeyDateTrackData } from '$lib/types';
import { COMPARE_COLORS, KEY_DATE_COLORS, KEY_DATES } from '$lib/types';
import { getSolarPosition, isSunVisible, getSunriseSunset, getAltitudeCurve, getMaxAltitude, getYearlyAnalysisData } from '$lib/utils/astronomy';
import { getShadow, getShadowTrackPoints, getHourMarks, getMaxShadowLength, getNoonShadow } from '$lib/utils/sundialMath';

const STORAGE_KEY = 'sundial-presets';
const MAX_PRESETS = 20;
const MAX_COMPARE_PRESETS = 4;

function loadPresets(): Preset[] {
  if (typeof localStorage === 'undefined') return [];
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

function savePresets(presets: Preset[]) {
  if (typeof localStorage === 'undefined') return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(presets));
}

function createInitialState(): SundialState {
  const now = new Date();
  return {
    type: 'horizontal',
    latitude: 39.9,
    date: now.toISOString().split('T')[0],
    timeHours: now.getHours() + now.getMinutes() / 60,
    gnomonLength: 1,
    showTrack: true,
    showCurrentPoint: true,
    compareMode: false,
    comparePresetIds: [],
    analysisMode: 'single',
    keyDateMode: 'single'
  };
}

function createSundialStore() {
  const config = writable<SundialState>(createInitialState());
  const presets = writable<Preset[]>([]);

  if (typeof localStorage !== 'undefined') {
    presets.set(loadPresets());
  }

  const currentDateTime = derived(config, ($config) => {
    const date = new Date($config.date);
    const hours = Math.floor($config.timeHours);
    const minutes = Math.floor(($config.timeHours - hours) * 60);
    date.setHours(hours, minutes, 0, 0);
    return date;
  });

  const solarPosition = derived([config, currentDateTime], ([$config, $date]) => {
    return getSolarPosition($date, $config.latitude, 0);
  });

  const sunVisible = derived([config, currentDateTime], ([$config, $date]) => {
    return isSunVisible($date, $config.latitude, 0);
  });

  const sunriseSunset = derived([config, currentDateTime], ([$config, $date]) => {
    return getSunriseSunset($date, $config.latitude, 0);
  });

  const altitudeCurve = derived([config, currentDateTime], ([$config, $date]) => {
    return getAltitudeCurve($date, $config.latitude, 0, 96);
  });

  const yearlyAnalysis = derived([config, currentDateTime], ([$config, $date]) => {
    return getYearlyAnalysisData($date, $config.latitude, 0);
  });

  const currentShadow = derived(
    [config, solarPosition, sunVisible],
    ([$config, $solarPos, $visible]) => {
      if (!$visible) return null;
      return getShadow($config.type, $solarPos, $config.latitude, $config.gnomonLength);
    }
  );

  const shadowTrack = derived(
    [config, currentDateTime],
    ([$config, $date]) => {
      return getShadowTrackPoints(
        $config.type,
        $date,
        $config.latitude,
        $config.gnomonLength,
        120
      );
    }
  );

  const hourMarks = derived([config], ([$config]) => {
    return getHourMarks($config.type, $config.latitude, $config.gnomonLength);
  });

  const comparePresets = derived([config, presets], ([$config, $presets]) => {
    if (!$config.compareMode || $config.comparePresetIds.length === 0) return [];
    return $config.comparePresetIds
      .map((id) => $presets.find((p) => p.id === id))
      .filter((p): p is Preset => p !== undefined);
  });

  const comparePresetsData = derived([comparePresets], ([$comparePresets]) => {
    if ($comparePresets.length === 0) return [];
    
    return $comparePresets.map((preset, index): ComparePresetData => {
      const date = new Date(preset.date);
      const hours = Math.floor(preset.timeHours);
      const minutes = Math.floor((preset.timeHours - hours) * 60);
      date.setHours(hours, minutes, 0, 0);
      
      const solarPos = getSolarPosition(date, preset.latitude, 0);
      const visible = isSunVisible(date, preset.latitude, 0);
      const shadow = visible 
        ? getShadow(preset.type, solarPos, preset.latitude, preset.gnomonLength || 1) 
        : null;
      const track = getShadowTrackPoints(
        preset.type,
        date,
        preset.latitude,
        preset.gnomonLength || 1,
        120
      );
      const ss = getSunriseSunset(date, preset.latitude, 0);
      const maxLen = getMaxShadowLength(
        preset.type,
        date,
        preset.latitude,
        preset.gnomonLength || 1
      );
      const noonShadow = getNoonShadow(
        preset.type,
        date,
        preset.latitude,
        preset.gnomonLength || 1
      );
      const altCurve = getAltitudeCurve(date, preset.latitude, 0, 96);
      
      return {
        preset,
        color: COMPARE_COLORS[index % COMPARE_COLORS.length],
        shadow,
        shadowTrack: track,
        sunriseSunset: ss,
        solarPosition: solarPos,
        sunVisible: visible,
        maxShadowLength: maxLen,
        noonShadowAngle: noonShadow?.angle ?? 0,
        noonShadowLength: noonShadow?.length ?? 0,
        altitudeCurve: altCurve
      };
    });
  });

  const maxShadowLength = derived([config, currentDateTime], ([$config, $date]) => {
    return getMaxShadowLength(
      $config.type,
      $date,
      $config.latitude,
      $config.gnomonLength
    );
  });

  const noonShadow = derived([config, currentDateTime], ([$config, $date]) => {
    return getNoonShadow(
      $config.type,
      $date,
      $config.latitude,
      $config.gnomonLength
    );
  });

  const keyDateTracks = derived([config, currentDateTime], ([$config, $date]) => {
    if ($config.keyDateMode === 'single') return [];
    
    const year = $date.getFullYear();
    const dates = KEY_DATES[$config.keyDateMode];
    const colors = KEY_DATE_COLORS[$config.keyDateMode];
    
    return dates.map((d, i): KeyDateTrackData => {
      const date = new Date(year, d.month - 1, d.day);
      const dateStr = date.toISOString().split('T')[0];
      const track = getShadowTrackPoints(
        $config.type,
        date,
        $config.latitude,
        $config.gnomonLength,
        120
      );
      const altCurve = getAltitudeCurve(date, $config.latitude, 0, 96);
      const ss = getSunriseSunset(date, $config.latitude, 0);
      const maxAlt = getMaxAltitude(date, $config.latitude, 0);
      
      return {
        label: d.label,
        date: dateStr,
        color: colors[i],
        shadowTrack: track,
        altitudeCurve: altCurve,
        sunriseSunset: ss,
        maxAltitude: maxAlt
      };
    });
  });

  function setType(type: SundialType) {
    config.update((s) => ({ ...s, type }));
  }

  function setLatitude(lat: number) {
    const clamped = Math.max(-90, Math.min(90, lat));
    config.update((s) => ({ ...s, latitude: clamped }));
  }

  function setDate(date: string) {
    config.update((s) => ({ ...s, date }));
  }

  function setTimeHours(hours: number) {
    const clamped = Math.max(0, Math.min(24, hours));
    config.update((s) => ({ ...s, timeHours: clamped }));
  }

  function setGnomonLength(length: number) {
    config.update((s) => ({ ...s, gnomonLength: Math.max(0.1, length) }));
  }

  function setShowTrack(show: boolean) {
    config.update((s) => ({ ...s, showTrack: show }));
  }

  function setShowCurrentPoint(show: boolean) {
    config.update((s) => ({ ...s, showCurrentPoint: show }));
  }

  function setCompareMode(enabled: boolean) {
    config.update((s) => ({ 
      ...s, 
      compareMode: enabled,
      comparePresetIds: enabled ? s.comparePresetIds : []
    }));
  }

  function toggleComparePreset(id: string) {
    const $config = get(config);
    const isSelected = $config.comparePresetIds.includes(id);
    
    if (isSelected) {
      config.update((s) => ({
        ...s,
        comparePresetIds: s.comparePresetIds.filter((pid) => pid !== id)
      }));
    } else {
      if ($config.comparePresetIds.length >= MAX_COMPARE_PRESETS) {
        return false;
      }
      config.update((s) => ({
        ...s,
        comparePresetIds: [...s.comparePresetIds, id],
        compareMode: true
      }));
    }
    return true;
  }

  function setAnalysisMode(mode: 'single' | 'yearly') {
    config.update((s) => ({ ...s, analysisMode: mode }));
  }

  function setKeyDateMode(mode: 'single' | 'solstices' | 'equinoxes' | 'quarterly') {
    config.update((s) => ({ ...s, keyDateMode: mode }));
  }

  function savePreset(name: string): boolean {
    const $config = get(config);
    const $presets = get(presets);
    
    if ($presets.length >= MAX_PRESETS) {
      return false;
    }
    
    const newPreset: Preset = {
      id: Date.now().toString(),
      name: name || `方案 ${$presets.length + 1}`,
      type: $config.type,
      latitude: $config.latitude,
      date: $config.date,
      timeHours: $config.timeHours,
      gnomonLength: $config.gnomonLength,
      createdAt: Date.now()
    };
    
    const updated = [...$presets, newPreset];
    presets.set(updated);
    savePresets(updated);
    return true;
  }

  function loadPreset(id: string) {
    const $presets = get(presets);
    const preset = $presets.find((p) => p.id === id);
    if (preset) {
      config.update((s) => ({
        ...s,
        type: preset.type,
        latitude: preset.latitude,
        date: preset.date,
        timeHours: preset.timeHours,
        gnomonLength: preset.gnomonLength
      }));
    }
  }

  function deletePreset(id: string) {
    const $presets = get(presets);
    const updated = $presets.filter((p) => p.id !== id);
    presets.set(updated);
    savePresets(updated);
    
    config.update((s) => ({
      ...s,
      comparePresetIds: s.comparePresetIds.filter((pid) => pid !== id)
    }));
  }

  function resetToNow() {
    const now = new Date();
    config.update((s) => ({
      ...s,
      date: now.toISOString().split('T')[0],
      timeHours: now.getHours() + now.getMinutes() / 60
    }));
  }

  return {
    config,
    presets,
    currentDateTime,
    solarPosition,
    sunVisible,
    sunriseSunset,
    altitudeCurve,
    yearlyAnalysis,
    currentShadow,
    shadowTrack,
    hourMarks,
    maxShadowLength,
    noonShadow,
    keyDateTracks,
    comparePresets,
    comparePresetsData,
    setType,
    setLatitude,
    setDate,
    setTimeHours,
    setGnomonLength,
    setShowTrack,
    setShowCurrentPoint,
    setCompareMode,
    toggleComparePreset,
    setAnalysisMode,
    setKeyDateMode,
    savePreset,
    loadPreset,
    deletePreset,
    resetToNow
  };
}

export const sundialStore = createSundialStore();
