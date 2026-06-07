export type SundialType = 'equatorial' | 'horizontal' | 'vertical';

export type KeyDateMode = 'single' | 'solstices' | 'equinoxes' | 'quarterly';

export interface SolarPosition {
  altitude: number;
  azimuth: number;
  declination: number;
  hourAngle: number;
}

export interface ShadowPoint {
  x: number;
  y: number;
  length: number;
  angle: number;
  hour: number;
}

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

export interface SundialState {
  type: SundialType;
  latitude: number;
  date: string;
  timeHours: number;
  gnomonLength: number;
  showTrack: boolean;
  showCurrentPoint: boolean;
  compareMode: boolean;
  comparePresetIds: string[];
  analysisMode: 'single' | 'yearly';
  keyDateMode: KeyDateMode;
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

export interface AltitudePoint {
  hour: number;
  altitude: number;
  azimuth: number;
}

export interface YearlyAnalysisData {
  solstices: {
    summer: { date: string; dayLength: number; maxAltitude: number };
    winter: { date: string; dayLength: number; maxAltitude: number };
  };
  equinoxes: {
    spring: { date: string; dayLength: number; maxAltitude: number };
    autumn: { date: string; dayLength: number; maxAltitude: number };
  };
  quarterly: Array<{ date: string; dayLength: number; maxAltitude: number }>;
  currentDay: { dayLength: number; maxAltitude: number };
}

export const COMPARE_COLORS = [
  '#f59e0b',
  '#3b82f6',
  '#10b981',
  '#8b5cf6',
];

export const KEY_DATES = {
  solstices: [
    { label: '夏至', month: 6, day: 21 },
    { label: '冬至', month: 12, day: 21 },
  ],
  equinoxes: [
    { label: '春分', month: 3, day: 20 },
    { label: '秋分', month: 9, day: 23 },
  ],
  quarterly: [
    { label: '立春', month: 2, day: 4 },
    { label: '立夏', month: 5, day: 5 },
    { label: '立秋', month: 8, day: 7 },
    { label: '立冬', month: 11, day: 7 },
  ],
};

export interface KeyDateTrackData {
  label: string;
  date: string;
  color: string;
  shadowTrack: ShadowPoint[];
  altitudeCurve: AltitudePoint[];
  sunriseSunset: { sunrise: number; sunset: number; dayLength: number };
  maxAltitude: number;
}

export const KEY_DATE_COLORS = {
  solstices: ['#ef4444', '#3b82f6'],
  equinoxes: ['#10b981', '#f59e0b'],
  quarterly: ['#22c55e', '#eab308', '#f97316', '#8b5cf6'],
};
