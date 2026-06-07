export type SundialType = 'equatorial' | 'horizontal' | 'vertical';

export type KeyDateMode = 'single' | 'solstices' | 'equinoxes' | 'quarterly';

export interface SolarPosition {
  altitude: number;
  azimuth: number;
  declination: number;
  hourAngle: number;
}

export interface AltitudePoint {
  hour: number;
  altitude: number;
  azimuth: number;
}
