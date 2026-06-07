import { writable, derived, get } from 'svelte/store';
import type { MeasurementRecord, CalibrationInput, CalibrationResult, PhotoAnalysisResult } from '$lib/types';

const STORAGE_KEY = 'sundial-measurements';
const MAX_RECORDS = 50;

function loadRecords(): MeasurementRecord[] {
  if (typeof localStorage === 'undefined') return [];
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

function saveRecords(records: MeasurementRecord[]) {
  if (typeof localStorage === 'undefined') return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(records));
}

function createMeasurementStore() {
  const records = writable<MeasurementRecord[]>([]);
  const selectedRecordIds = writable<string[]>([]);
  const activeRecordId = writable<string | null>(null);

  if (typeof localStorage !== 'undefined') {
    records.set(loadRecords());
  }

  const activeRecord = derived([records, activeRecordId], ([$records, $activeId]) => {
    if (!$activeId) return null;
    return $records.find(r => r.id === $activeId) || null;
  });

  const selectedRecords = derived([records, selectedRecordIds], ([$records, $selectedIds]) => {
    return $records.filter(r => $selectedIds.includes(r.id));
  });

  const activeRecords = derived(records, ($records) => {
    return $records.filter(r => !r.isArchived);
  });

  const archivedRecords = derived(records, ($records) => {
    return $records.filter(r => r.isArchived);
  });

  function addRecord(
    input: CalibrationInput,
    result: CalibrationResult,
    photoAnalysis?: PhotoAnalysisResult | null,
    name?: string
  ): MeasurementRecord | null {
    const $records = get(records);
    
    if ($records.length >= MAX_RECORDS) {
      return null;
    }

    const now = Date.now();
    const dateStr = new Date(input.measurementDateTime).toLocaleDateString('zh-CN');
    const newRecord: MeasurementRecord = {
      id: now.toString(),
      name: name || `测量记录 ${$records.length + 1} - ${dateStr}`,
      createdAt: now,
      updatedAt: now,
      input: { ...input },
      result: { ...result },
      photoAnalysis: photoAnalysis || null,
      notes: '',
      tags: [],
      isArchived: false,
    };

    const updated = [newRecord, ...$records];
    records.set(updated);
    saveRecords(updated);
    return newRecord;
  }

  function updateRecord(id: string, updates: Partial<MeasurementRecord>) {
    const $records = get(records);
    const index = $records.findIndex(r => r.id === id);
    if (index === -1) return;

    const updated = [...$records];
    updated[index] = {
      ...updated[index],
      ...updates,
      updatedAt: Date.now(),
    };
    records.set(updated);
    saveRecords(updated);
  }

  function deleteRecord(id: string) {
    const $records = get(records);
    const updated = $records.filter(r => r.id !== id);
    records.set(updated);
    saveRecords(updated);

    selectedRecordIds.update(ids => ids.filter(i => i !== id));
    const $activeId = get(activeRecordId);
    if ($activeId === id) {
      activeRecordId.set(null);
    }
  }

  function toggleArchive(id: string) {
    const $records = get(records);
    const record = $records.find(r => r.id === id);
    if (record) {
      updateRecord(id, { isArchived: !record.isArchived });
    }
  }

  function setActiveRecord(id: string | null) {
    activeRecordId.set(id);
  }

  function toggleSelectRecord(id: string) {
    selectedRecordIds.update(ids => {
      if (ids.includes(id)) {
        return ids.filter(i => i !== id);
      }
      return [...ids, id];
    });
  }

  function clearSelection() {
    selectedRecordIds.set([]);
  }

  function selectAll() {
    const $active = get(activeRecords);
    selectedRecordIds.set($active.map(r => r.id));
  }

  function addTag(id: string, tag: string) {
    const $records = get(records);
    const record = $records.find(r => r.id === id);
    if (record && !record.tags?.includes(tag)) {
      updateRecord(id, { tags: [...(record.tags || []), tag] });
    }
  }

  function removeTag(id: string, tag: string) {
    const $records = get(records);
    const record = $records.find(r => r.id === id);
    if (record) {
      updateRecord(id, { tags: (record.tags || []).filter(t => t !== tag) });
    }
  }

  function exportRecordsJSON(ids?: string[]): string {
    const $records = get(records);
    const toExport = ids ? $records.filter(r => ids.includes(r.id)) : $records;
    const data = {
      exportedAt: new Date().toISOString(),
      count: toExport.length,
      records: toExport,
    };
    return JSON.stringify(data, null, 2);
  }

  function importRecords(jsonStr: string): number {
    try {
      const data = JSON.parse(jsonStr);
      const importedRecords = data.records || [];
      const $records = get(records);
      
      const existingIds = new Set($records.map(r => r.id));
      const newRecords = importedRecords.filter((r: MeasurementRecord) => !existingIds.has(r.id));
      
      if (newRecords.length === 0) return 0;
      
      const merged = [...newRecords, ...$records].slice(0, MAX_RECORDS);
      records.set(merged);
      saveRecords(merged);
      return newRecords.length;
    } catch {
      return 0;
    }
  }

  function loadRecordToInput(id: string): CalibrationInput | null {
    const $records = get(records);
    const record = $records.find(r => r.id === id);
    if (record) {
      return { ...record.input };
    }
    return null;
  }

  function getRecordsByTag(tag: string): MeasurementRecord[] {
    const $records = get(records);
    return $records.filter(r => r.tags?.includes(tag));
  }

  function searchRecords(query: string): MeasurementRecord[] {
    const $records = get(records);
    const q = query.toLowerCase();
    return $records.filter(r =>
      r.name.toLowerCase().includes(q) ||
      r.notes?.toLowerCase().includes(q) ||
      r.tags?.some(t => t.toLowerCase().includes(q)) ||
      r.input.locationName?.toLowerCase().includes(q)
    );
  }

  return {
    records,
    activeRecords,
    archivedRecords,
    activeRecord,
    activeRecordId,
    selectedRecords,
    selectedRecordIds,
    addRecord,
    updateRecord,
    deleteRecord,
    toggleArchive,
    setActiveRecord,
    toggleSelectRecord,
    clearSelection,
    selectAll,
    addTag,
    removeTag,
    exportRecordsJSON,
    importRecords,
    loadRecordToInput,
    getRecordsByTag,
    searchRecords,
  };
}

export const measurementStore = createMeasurementStore();
