import type { SolarPosition, ShadowPoint, SundialType } from '$lib/types';
import { getSolarPosition, getSunriseSunset } from './astronomy';

const DEG_TO_RAD = Math.PI / 180;
const RAD_TO_DEG = 180 / Math.PI;

function toRad(deg: number): number {
  return deg * DEG_TO_RAD;
}

function toDeg(rad: number): number {
  return rad * RAD_TO_DEG;
}

export function getEquatorialShadow(
  solarPos: SolarPosition,
  gnomonLength: number,
  latitude: number,
  hour?: number
): ShadowPoint | null {
  if (solarPos.altitude <= 0) return null;
  
  const latRad = toRad(latitude);
  const decRad = toRad(solarPos.declination);
  const haRad = toRad(solarPos.hourAngle);
  
  const sinAltOnDial = Math.sin(decRad) * Math.sin(latRad) + 
                       Math.cos(decRad) * Math.cos(latRad) * Math.cos(haRad);
  
  const altOnDial = toDeg(Math.asin(sinAltOnDial));
  
  const x = gnomonLength * Math.tan(toRad(solarPos.hourAngle));
  const y = gnomonLength;
  
  const length = Math.sqrt(x * x + y * y);
  const angle = toDeg(Math.atan2(x, y));
  
  return { x, y, length, angle, hour: hour ?? 12 + solarPos.hourAngle / 15 };
}

export function getHorizontalShadow(
  solarPos: SolarPosition,
  latitude: number,
  gnomonLength: number,
  hour?: number
): ShadowPoint | null {
  if (solarPos.altitude <= 0) return null;
  
  const altRad = toRad(solarPos.altitude);
  const azRad = toRad(solarPos.azimuth);
  
  const shadowLength = gnomonLength / Math.tan(altRad);
  
  const x = shadowLength * Math.sin(azRad);
  const y = shadowLength * Math.cos(azRad);
  
  const length = shadowLength;
  const angle = solarPos.azimuth;
  
  return { x, y, length, angle, hour: hour ?? 12 + solarPos.hourAngle / 15 };
}

export function getVerticalShadow(
  solarPos: SolarPosition,
  latitude: number,
  gnomonLength: number,
  hour?: number
): ShadowPoint | null {
  if (solarPos.altitude <= 0) return null;
  
  const altRad = toRad(solarPos.altitude);
  const azRad = toRad(solarPos.azimuth);
  
  const sinAz = Math.sin(azRad);
  
  const yWall = gnomonLength / (Math.tan(altRad) * Math.abs(sinAz));
  
  const xWall = yWall * Math.cos(azRad) / Math.abs(sinAz);
  
  const length = Math.sqrt(xWall * xWall + yWall * yWall);
  const angle = toDeg(Math.atan2(xWall, yWall));
  
  return { x: xWall, y: -yWall, length, angle, hour: hour ?? 12 + solarPos.hourAngle / 15 };
}

export function getShadow(
  type: SundialType,
  solarPos: SolarPosition,
  latitude: number,
  gnomonLength: number,
  hour?: number
): ShadowPoint | null {
  switch (type) {
    case 'equatorial':
      return getEquatorialShadow(solarPos, gnomonLength, latitude, hour);
    case 'horizontal':
      return getHorizontalShadow(solarPos, latitude, gnomonLength, hour);
    case 'vertical':
      return getVerticalShadow(solarPos, latitude, gnomonLength, hour);
    default:
      return null;
  }
}

export function getHourLineAngle(
  type: SundialType,
  hour: number,
  latitude: number
): number {
  const hourAngle = (hour - 12) * 15;
  
  switch (type) {
    case 'equatorial':
      return hourAngle;
    case 'horizontal':
      const latRad = toRad(latitude);
      const haRad = toRad(hourAngle);
      const tanLine = Math.sin(haRad) / (Math.cos(haRad) * Math.sin(latRad) + 
                       Math.tan(toRad(23.45)) * Math.cos(latRad));
      return toDeg(Math.atan(tanLine));
    case 'vertical':
      const latRad2 = toRad(latitude);
      const haRad2 = toRad(hourAngle);
      const tanLine2 = Math.sin(haRad2) / (Math.cos(haRad2) * Math.cos(latRad2) - 
                        Math.tan(toRad(23.45)) * Math.sin(latRad2));
      return toDeg(Math.atan(tanLine2));
    default:
      return hourAngle;
  }
}

export function getShadowTrackPoints(
  type: SundialType,
  date: Date,
  latitude: number,
  gnomonLength: number,
  steps: number = 96
): ShadowPoint[] {
  const points: ShadowPoint[] = [];
  const { sunrise, sunset } = getSunriseSunset(date, latitude, 0);
  
  for (let i = 0; i <= steps; i++) {
    const hour = sunrise + (sunset - sunrise) * (i / steps);
    const timeDate = new Date(date);
    timeDate.setHours(Math.floor(hour), (hour % 1) * 60, 0, 0);
    
    const solarPos = getSolarPosition(timeDate, latitude, 0);
    const shadow = getShadow(type, solarPos, latitude, gnomonLength, hour);
    
    if (shadow) {
      points.push(shadow);
    }
  }
  
  return points;
}

export function getHourMarks(
  type: SundialType,
  latitude: number,
  gnomonLength: number
): Array<{ hour: number; angle: number; radius: number }> {
  const marks: Array<{ hour: number; angle: number; radius: number }> = [];
  
  for (let hour = 6; hour <= 18; hour++) {
    const angle = getHourLineAngle(type, hour, latitude);
    marks.push({ hour, angle, radius: gnomonLength * 1.5 });
  }
  
  return marks;
}

export function getMaxShadowLength(
  type: SundialType,
  date: Date,
  latitude: number,
  gnomonLength: number
): number {
  const track = getShadowTrackPoints(type, date, latitude, gnomonLength, 96);
  if (track.length === 0) return 0;
  return Math.max(...track.map((p) => p.length));
}

export function getNoonShadow(
  type: SundialType,
  date: Date,
  latitude: number,
  gnomonLength: number
): { angle: number; length: number } | null {
  const noonDate = new Date(date);
  noonDate.setHours(12, 0, 0, 0);
  const solarPos = getSolarPosition(noonDate, latitude, 0);
  const shadow = getShadow(type, solarPos, latitude, gnomonLength, 12);
  if (!shadow) return null;
  return { angle: shadow.angle, length: shadow.length };
}
