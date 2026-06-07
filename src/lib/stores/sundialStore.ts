import { writable, derived, get } from 'svelte/store';
import type { SundialState, Preset, SolarPosition, ShadowPoint, SundialType } from '$lib/types';
import { getSolarPosition, isSunVisible, getSunriseSunset } from '$lib/utils/astronomy';
import { getShadow, getShadowTrackPoints, getHourMarks } from '$lib/utils/sundialMath';

const STORAGE_KEY = 'sundial-presets';
const MAX_PRESETS = 20;

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
    comparePresetId: null
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

  const comparePreset = derived([config, presets], ([$config, $presets]) => {
    if (!$config.compareMode || !$config.comparePresetId) return null;
    return $presets.find((p) => p.id === $config.comparePresetId) || null;
  });

  const compareShadow = derived([comparePreset], ([$preset]) => {
    if (!$preset) return null;
    const date = new Date($preset.date);
    const hours = Math.floor($preset.timeHours);
    const minutes = Math.floor(($preset.timeHours - hours) * 60);
    date.setHours(hours, minutes, 0, 0);
    const solarPos = getSolarPosition(date, $preset.latitude, 0);
    const visible = isSunVisible(date, $preset.latitude, 0);
    if (!visible) return null;
    return getShadow($preset.type, solarPos, $preset.latitude, $preset.gnomonLength || 1);
  });

  const compareShadowTrack = derived([comparePreset], ([$preset]) => {
    if (!$preset) return [];
    const date = new Date($preset.date);
    return getShadowTrackPoints(
      $preset.type,
      date,
      $preset.latitude,
      $preset.gnomonLength || 1,
      120
    );
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
    config.update((s) => ({ ...s, compareMode: enabled }));
  }

  function setComparePreset(id: string | null) {
    config.update((s) => ({ ...s, comparePresetId: id }));
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
      comparePresetId: s.comparePresetId === id ? null : s.comparePresetId
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
    currentShadow,
    shadowTrack,
    hourMarks,
    comparePreset,
    compareShadow,
    compareShadowTrack,
    setType,
    setLatitude,
    setDate,
    setTimeHours,
    setGnomonLength,
    setShowTrack,
    setShowCurrentPoint,
    setCompareMode,
    setComparePreset,
    savePreset,
    loadPreset,
    deletePreset,
    resetToNow
  };
}

export const sundialStore = createSundialStore();
