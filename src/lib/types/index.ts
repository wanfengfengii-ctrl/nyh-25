export type SundialType = 'equatorial' | 'horizontal' | 'vertical';

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
}

export interface Preset {
  id: string;
  name: string;
  type: SundialType;
  latitude: number;
  date: string;
  timeHours: number;
  createdAt: number;
}

export interface SundialState {
  type: SundialType;
  latitude: number;
  date: string;
  timeHours: number;
  gnomonLength: number;
  showTrack: boolean;
  compareMode: boolean;
  comparePresetId: string | null;
}
