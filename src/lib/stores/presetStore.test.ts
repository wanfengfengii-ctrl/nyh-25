import { describe, it, expect, beforeEach } from 'vitest';
import { get } from 'svelte/store';
import { presetStore } from '$lib/stores/presetStore';
import type { SundialType } from '$lib/types';

describe('presetStore', () => {
  beforeEach(() => {
    presetStore.clearAllPresets();
  });

  describe('initial state', () => {
    it('should start with empty presets', () => {
      const presets = get(presetStore.presets);
      expect(presets).toEqual([]);
    });

    it('should have count of 0', () => {
      const count = get(presetStore.count);
      expect(count).toBe(0);
    });

    it('should allow adding more presets', () => {
      const canAdd = get(presetStore.canAddMore);
      expect(canAdd).toBe(true);
    });
  });

  describe('addPreset', () => {
    it('should add a preset', () => {
      const preset = presetStore.addPreset({
        name: '测试方案',
        type: 'horizontal',
        latitude: 40,
        date: '2024-01-01',
        timeHours: 12,
        gnomonLength: 1,
      });

      expect(preset).not.toBeNull();
      expect(preset?.name).toBe('测试方案');
      expect(preset?.id).toBeDefined();
      expect(preset?.createdAt).toBeDefined();

      const presets = get(presetStore.presets);
      expect(presets.length).toBe(1);
    });

    it('should generate unique IDs', () => {
      const p1 = presetStore.addPreset({
        name: '方案1',
        type: 'horizontal',
        latitude: 40,
        date: '2024-01-01',
        timeHours: 12,
        gnomonLength: 1,
      });
      const p2 = presetStore.addPreset({
        name: '方案2',
        type: 'equatorial',
        latitude: 30,
        date: '2024-06-01',
        timeHours: 15,
        gnomonLength: 1.5,
      });

      expect(p1?.id).not.toEqual(p2?.id);
    });
  });

  describe('createPresetFromConfig', () => {
    it('should create a preset from config', () => {
      const preset = presetStore.createPresetFromConfig('我的方案', {
        type: 'vertical' as SundialType,
        latitude: 35.5,
        date: '2024-03-15',
        timeHours: 10.5,
        gnomonLength: 2,
      });

      expect(preset).not.toBeNull();
      expect(preset?.type).toBe('vertical');
      expect(preset?.latitude).toBe(35.5);
      expect(preset?.date).toBe('2024-03-15');
      expect(preset?.timeHours).toBe(10.5);
      expect(preset?.gnomonLength).toBe(2);
    });

    it('should use default name if empty', () => {
      const preset = presetStore.createPresetFromConfig('', {
        type: 'horizontal' as SundialType,
        latitude: 40,
        date: '2024-01-01',
        timeHours: 12,
        gnomonLength: 1,
      });

      expect(preset).not.toBeNull();
      expect(preset?.name.length).toBeGreaterThan(0);
    });
  });

  describe('getPresetById', () => {
    it('should get preset by ID', () => {
      const created = presetStore.addPreset({
        name: '查找测试',
        type: 'horizontal',
        latitude: 40,
        date: '2024-01-01',
        timeHours: 12,
        gnomonLength: 1,
      });

      const found = presetStore.getPresetById(created!.id);
      expect(found).not.toBeUndefined();
      expect(found?.name).toBe('查找测试');
    });

    it('should return undefined for non-existent ID', () => {
      const found = presetStore.getPresetById('nonexistent');
      expect(found).toBeUndefined();
    });
  });

  describe('updatePreset', () => {
    it('should update a preset', () => {
      const created = presetStore.addPreset({
        name: '原名',
        type: 'horizontal',
        latitude: 40,
        date: '2024-01-01',
        timeHours: 12,
        gnomonLength: 1,
      });

      presetStore.updatePreset(created!.id, { name: '新名字' });

      const updated = presetStore.getPresetById(created!.id);
      expect(updated?.name).toBe('新名字');
    });

    it('should not fail for non-existent ID', () => {
      expect(() => {
        presetStore.updatePreset('nonexistent', { name: 'test' });
      }).not.toThrow();
    });
  });

  describe('deletePreset', () => {
    it('should delete a preset', () => {
      const created = presetStore.addPreset({
        name: '待删除',
        type: 'horizontal',
        latitude: 40,
        date: '2024-01-01',
        timeHours: 12,
        gnomonLength: 1,
      });

      presetStore.deletePreset(created!.id);

      const found = presetStore.getPresetById(created!.id);
      expect(found).toBeUndefined();

      const count = get(presetStore.count);
      expect(count).toBe(0);
    });
  });

  describe('clearAllPresets', () => {
    it('should clear all presets', () => {
      presetStore.addPreset({
        name: '方案1',
        type: 'horizontal',
        latitude: 40,
        date: '2024-01-01',
        timeHours: 12,
        gnomonLength: 1,
      });
      presetStore.addPreset({
        name: '方案2',
        type: 'equatorial',
        latitude: 30,
        date: '2024-06-01',
        timeHours: 15,
        gnomonLength: 1.5,
      });

      presetStore.clearAllPresets();

      const count = get(presetStore.count);
      expect(count).toBe(0);
    });
  });
});
