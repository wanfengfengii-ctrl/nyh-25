import type { CalibrationInput, CalibrationResult } from './calibration';

export interface PhotoAnalysisPoint {
  x: number;
  y: number;
}

export interface PhotoAnalysisResult {
  gnomonTip: PhotoAnalysisPoint | null;
  gnomonBase: PhotoAnalysisPoint | null;
  shadowTip: PhotoAnalysisPoint | null;
  shadowBase: PhotoAnalysisPoint | null;
  horizonLine: { start: PhotoAnalysisPoint; end: PhotoAnalysisPoint } | null;
  gnomonLengthPixels: number;
  shadowLengthPixels: number;
  shadowAngle: number;
  confidence: number;
  method: 'auto' | 'manual';
}

export interface PhotoExtractedMetadata {
  dateTime?: string;
  latitude?: number;
  longitude?: number;
  altitude?: number;
  orientation?: number;
  deviceMake?: string;
  deviceModel?: string;
}

export interface MeasurementRecord {
  id: string;
  name: string;
  createdAt: number;
  updatedAt: number;
  input: CalibrationInput;
  result: CalibrationResult;
  photoAnalysis?: PhotoAnalysisResult | null;
  notes?: string;
  tags?: string[];
  isArchived?: boolean;
}

export interface ComparisonData {
  recordIds: string[];
  records: MeasurementRecord[];
  metric: 'orientationDeviation' | 'tiltDeviation' | 'scaleError' | 'timeDeviation' | 'qualityScore';
}
