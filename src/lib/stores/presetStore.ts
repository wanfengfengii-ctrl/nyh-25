import { writable, derived, get } from 'svelte/store';
import type { Preset, SundialType } from '$lib/types';
import { loadFromStorage, saveToStorage, generateId } from '$lib/utils/storage';

const STORAGE_KEY = 'sundial-presets';
const MAX_PRESETS = 20;

function createInitialPresets(): Preset[] {
  return loadFromStorage<Preset[]>(STORAGE_KEY, []);
}

function createPresetStore() {
  const presets = writable<Preset[]>(createInitialPresets());

  function persist($presets: Preset[]) {
    saveToStorage(STORAGE_KEY, $presets);
  }

  const count = derived(presets, ($presets) => $presets.length);

  const canAddMore = derived(presets, ($presets) => $presets.length < MAX_PRESETS);

  function addPreset(preset: Omit<Preset, 'id' | 'createdAt'>): Preset | null {
    const $presets = get(presets);

    if ($presets.length >= MAX_PRESETS) {
      return null;
    }

    const newPreset: Preset = {
      ...preset,
      id: generateId(),
      createdAt: Date.now(),
    };

    const updated = [...$presets, newPreset];
    presets.set(updated);
    persist(updated);
    return newPreset;
  }

  function createPresetFromConfig(
    name: string,
    config: {
      type: SundialType;
      latitude: number;
      date: string;
      timeHours: number;
      gnomonLength: number;
    }
  ): Preset | null {
    const $presets = get(presets);

    if ($presets.length >= MAX_PRESETS) {
      return null;
    }

    const presetName = name.trim() || `方案 ${$presets.length + 1}`;

    return addPreset({
      name: presetName,
      type: config.type,
      latitude: config.latitude,
      date: config.date,
      timeHours: config.timeHours,
      gnomonLength: config.gnomonLength,
    });
  }

  function updatePreset(id: string, updates: Partial<Preset>) {
    const $presets = get(presets);
    const index = $presets.findIndex((p) => p.id === id);
    if (index === -1) return;

    const updated = [...$presets];
    updated[index] = { ...updated[index], ...updates };
    presets.set(updated);
    persist(updated);
  }

  function deletePreset(id: string) {
    const $presets = get(presets);
    const updated = $presets.filter((p) => p.id !== id);
    presets.set(updated);
    persist(updated);
  }

  function getPresetById(id: string): Preset | undefined {
    return get(presets).find((p) => p.id === id);
  }

  function clearAllPresets() {
    presets.set([]);
    saveToStorage(STORAGE_KEY, []);
  }

  return {
    presets,
    count,
    canAddMore,
    addPreset,
    createPresetFromConfig,
    updatePreset,
    deletePreset,
    getPresetById,
    clearAllPresets,
  };
}

export const presetStore = createPresetStore();
