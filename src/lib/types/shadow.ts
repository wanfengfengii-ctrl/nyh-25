import type { SundialType } from './solar';

export interface ShadowPoint {
  x: number;
  y: number;
  length: number;
  angle: number;
  hour: number;
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

export interface HourMark {
  hour: number;
  angle: number;
  radius: number;
}

export type KeyDateMode = 'single' | 'solstices' | 'equinoxes' | 'quarterly';
