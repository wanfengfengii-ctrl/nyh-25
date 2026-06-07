import type { ShadowPoint } from './shadow';
import type { AltitudePoint } from './solar';

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
