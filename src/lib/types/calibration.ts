import type { SundialType } from './solar';

export interface CalibrationInput {
  gnomonLength: number;
  shadowLength: number;
  shadowDirection: number;
  measurementDateTime: string;
  latitude: number;
  longitude: number;
  sundialType: SundialType;
  dialTiltAngle: number;
  dialOrientation: number;
  locationName?: string;
  photoDataUrl?: string | null;
}

export interface LocationPreset {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
}

export interface InferredSolarPosition {
  altitude: number;
  azimuth: number;
  declination: number;
  hourAngle: number;
  solarTime: number;
}

export interface DeviationAnalysis {
  orientationDeviation: number;
  tiltDeviation: number;
  scaleError: number;
  timeDeviation: number;
}

export interface ComparisonPoint {
  theoretical: number;
  measured: number;
  difference: number;
  unit: string;
}

export interface CalibrationResult {
  inferredSolarPosition: InferredSolarPosition;
  theoreticalSolarPosition: InferredSolarPosition;
  deviation: DeviationAnalysis;
  comparison: {
    shadowLength: ComparisonPoint;
    shadowAngle: ComparisonPoint;
    solarAltitude: ComparisonPoint;
    solarAzimuth: ComparisonPoint;
    solarTime: ComparisonPoint;
  };
  calibrationSteps: CalibrationStep[];
  qualityScore: number;
  confidence: 'high' | 'medium' | 'low';
}

export interface CalibrationStep {
  id: number;
  title: string;
  description: string;
  adjustment: string;
  direction: 'clockwise' | 'counterclockwise' | 'up' | 'down' | 'none';
  magnitude: number;
  unit: string;
  priority: 'critical' | 'important' | 'minor';
}

export const DEVIATION_METRICS = [
  { key: 'orientationDeviation', label: '朝向偏差', unit: '°', color: '#f59e0b' },
  { key: 'tiltDeviation', label: '倾角偏差', unit: '°', color: '#3b82f6' },
  { key: 'scaleError', label: '刻度误差', unit: '%', color: '#10b981' },
  { key: 'timeDeviation', label: '时间偏差', unit: 'min', color: '#8b5cf6' },
] as const;
