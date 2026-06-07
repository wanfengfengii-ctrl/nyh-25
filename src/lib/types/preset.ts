import type { SundialType, SolarPosition, AltitudePoint } from './solar';
import type { ShadowPoint } from './shadow';

export interface Preset {
  id: string;
  name: string;
  type: SundialType;
  latitude: number;
  date: string;
  timeHours: number;
  gnomonLength: number;
  createdAt: number;
}

export interface ComparePresetData {
  preset: Preset;
  color: string;
  shadow: ShadowPoint | null;
  shadowTrack: ShadowPoint[];
  sunriseSunset: { sunrise: number; sunset: number; dayLength: number };
  solarPosition: SolarPosition;
  sunVisible: boolean;
  maxShadowLength: number;
  noonShadowAngle: number;
  noonShadowLength: number;
  altitudeCurve: AltitudePoint[];
}

export const COMPARE_COLORS = [
  '#f59e0b',
  '#3b82f6',
  '#10b981',
  '#8b5cf6',
];
