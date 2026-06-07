import type { SolarPosition } from '$lib/types';

const DEG_TO_RAD = Math.PI / 180;
const RAD_TO_DEG = 180 / Math.PI;

function toRad(deg: number): number {
  return deg * DEG_TO_RAD;
}

function toDeg(rad: number): number {
  return rad * RAD_TO_DEG;
}

function getDayOfYear(date: Date): number {
  const start = new Date(date.getFullYear(), 0, 0);
  const diff = date.getTime() - start.getTime();
  const oneDay = 1000 * 60 * 60 * 24;
  return Math.floor(diff / oneDay);
}

function getJulianDate(date: Date): number {
  return date.getTime() / 86400000 + 2440587.5;
}

export function getSolarDeclination(dayOfYear: number): number {
  return -23.45 * Math.cos(toRad((360 / 365) * (dayOfYear + 10)));
}

export function getEquationOfTime(dayOfYear: number): number {
  const B = toRad((360 / 365) * (dayOfYear - 81));
  return 9.87 * Math.sin(2 * B) - 7.53 * Math.cos(B) - 1.5 * Math.sin(B);
}

export function getSolarPosition(
  date: Date,
  latitude: number,
  longitude: number = 0
): SolarPosition {
  const dayOfYear = getDayOfYear(date);
  const declination = getSolarDeclination(dayOfYear);
  
  const hours = date.getHours() + date.getMinutes() / 60 + date.getSeconds() / 3600;
  const equationOfTime = getEquationOfTime(dayOfYear);
  
  const solarTime = hours + (4 * longitude / 60) + (equationOfTime / 60);
  const hourAngle = (solarTime - 12) * 15;
  
  const latRad = toRad(latitude);
  const decRad = toRad(declination);
  const haRad = toRad(hourAngle);
  
  const sinAltitude = Math.sin(latRad) * Math.sin(decRad) + 
                      Math.cos(latRad) * Math.cos(decRad) * Math.cos(haRad);
  const altitude = toDeg(Math.asin(Math.max(-1, Math.min(1, sinAltitude))));
  
  const cosAzimuth = (Math.sin(decRad) - Math.sin(latRad) * sinAltitude) / 
                     (Math.cos(latRad) * Math.cos(toRad(altitude)));
  const azimuth = toDeg(Math.acos(Math.max(-1, Math.min(1, cosAzimuth))));
  
  const finalAzimuth = hourAngle > 0 ? 360 - azimuth : azimuth;
  
  return {
    altitude,
    azimuth: finalAzimuth,
    declination,
    hourAngle
  };
}

export function getSunriseSunset(
  date: Date,
  latitude: number,
  longitude: number = 0
): { sunrise: number; sunset: number; dayLength: number } {
  const dayOfYear = getDayOfYear(date);
  const declination = getSolarDeclination(dayOfYear);
  const equationOfTime = getEquationOfTime(dayOfYear);
  
  const latRad = toRad(latitude);
  const decRad = toRad(declination);
  
  let cosHourAngle = -Math.tan(latRad) * Math.tan(decRad);
  
  if (cosHourAngle > 1) {
    return { sunrise: 12, sunset: 12, dayLength: 0 };
  }
  if (cosHourAngle < -1) {
    return { sunrise: 0, sunset: 24, dayLength: 24 };
  }
  
  const hourAngle = toDeg(Math.acos(cosHourAngle));
  const solarNoon = 12 - (longitude / 15) - (equationOfTime / 60);
  
  const sunrise = solarNoon - hourAngle / 15;
  const sunset = solarNoon + hourAngle / 15;
  const dayLength = (2 * hourAngle) / 15;
  
  return {
    sunrise: Math.max(0, Math.min(24, sunrise)),
    sunset: Math.max(0, Math.min(24, sunset)),
    dayLength
  };
}

export function isSunVisible(
  date: Date,
  latitude: number,
  longitude: number = 0
): boolean {
  const pos = getSolarPosition(date, latitude, longitude);
  return pos.altitude > 0;
}

export function getDayProgress(
  date: Date,
  latitude: number,
  longitude: number = 0
): number {
  const { sunrise, sunset, dayLength } = getSunriseSunset(date, latitude, longitude);
  const hours = date.getHours() + date.getMinutes() / 60;
  
  if (dayLength === 0) return 0;
  if (dayLength === 24) return 0.5;
  
  return Math.max(0, Math.min(1, (hours - sunrise) / dayLength));
}
