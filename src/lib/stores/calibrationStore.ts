import { writable, derived, get } from 'svelte/store';
import type {
  CalibrationInput,
  CalibrationResult,
  PhotoAnalysisResult,
} from '$lib/types';
import { performCalibration, getTheoreticalSolarPosition } from '$lib/services/calibrationService';
import { createEmptyPhotoAnalysis } from '$lib/services/photoAnalysisService';
import { measurementStore } from './measurementStore';

const DEFAULT_LATITUDE = 39.9;
const DEFAULT_LONGITUDE = 116.4;
const DEFAULT_GNOMON_LENGTH = 1;

function createDefaultInput(): CalibrationInput {
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

function createCalibrationStore() {
  const input = writable<CalibrationInput>(createDefaultInput());
  const result = writable<CalibrationResult | null>(null);
  const photoAnalysis = writable<PhotoAnalysisResult>(createEmptyPhotoAnalysis());
  const isCalculating = writable(false);
  const currentStep = writable(0);

  const canCalibrate = derived([input], ([$input]) => {
    return (
      $input.gnomonLength > 0 &&
      $input.shadowLength > 0 &&
      $input.latitude >= -90 &&
      $input.latitude <= 90
    );
  });

  function setInput<K extends keyof CalibrationInput>(
    field: K,
    value: CalibrationInput[K]
  ) {
    input.update((s) => ({ ...s, [field]: value }));
  }

  function updateInput(updates: Partial<CalibrationInput>) {
    input.update((s) => ({ ...s, ...updates }));
  }

  function resetInput() {
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
      // Use defaults if calculation fails
    }
    input.set(defaultInput);
    result.set(null);
    photoAnalysis.set(createEmptyPhotoAnalysis());
    currentStep.set(0);
  }

  function calibrate(): CalibrationResult | null {
    const $input = get(input);
    isCalculating.set(true);

    try {
      const calibrationResult = performCalibration($input);
      result.set(calibrationResult);
      currentStep.set(0);
      return calibrationResult;
    } finally {
      isCalculating.set(false);
    }
  }

  async function calibrateAsync(): Promise<CalibrationResult | null> {
    isCalculating.set(true);

    return new Promise((resolve) => {
      setTimeout(() => {
        try {
          const $input = get(input);
          const calibrationResult = performCalibration($input);
          result.set(calibrationResult);
          currentStep.set(0);
          resolve(calibrationResult);
        } catch {
          resolve(null);
        } finally {
          isCalculating.set(false);
        }
      }, 300);
    });
  }

  function setCurrentStep(step: number) {
    currentStep.set(step);
  }

  function setPhotoAnalysis(analysis: PhotoAnalysisResult) {
    photoAnalysis.set(analysis);
  }

  function applyPhotoAnalysisToInput(data: { shadowLength: number; shadowDirection: number }) {
    const $input = get(input);
    input.set({
      ...$input,
      shadowLength: data.shadowLength || $input.shadowLength,
      shadowDirection: data.shadowDirection || $input.shadowDirection,
    });
  }

  function saveRecord(name?: string): boolean {
    const $result = get(result);
    const $input = get(input);
    const $photoAnalysis = get(photoAnalysis);

    if (!$result) return false;

    const record = measurementStore.addRecord(
      $input,
      $result,
      $photoAnalysis,
      name
    );
    return record !== null;
  }

  function loadRecord(record: {
    input: CalibrationInput;
    result: CalibrationResult;
    photoAnalysis?: PhotoAnalysisResult | null;
  }) {
    input.set({ ...record.input });
    result.set({ ...record.result });
    if (record.photoAnalysis) {
      photoAnalysis.set({ ...record.photoAnalysis });
    } else {
      photoAnalysis.set(createEmptyPhotoAnalysis());
    }
    currentStep.set(0);
  }

  return {
    input,
    result,
    photoAnalysis,
    isCalculating,
    currentStep,
    canCalibrate,
    setInput,
    updateInput,
    resetInput,
    calibrate,
    calibrateAsync,
    setCurrentStep,
    setPhotoAnalysis,
    applyPhotoAnalysisToInput,
    saveRecord,
    loadRecord,
  };
}

export const calibrationStore = createCalibrationStore();
