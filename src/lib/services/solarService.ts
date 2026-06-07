import { toRad, toDeg, safeAsin, safeAcos } from '$lib/utils/math';
import { getDayOfYear } from '$lib/utils/date';
import type { SolarPosition, AltitudePoint, YearlyAnalysisData } from '$lib/types';

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

  const solarTime = hours + (4 * longitude) / 60 + equationOfTime / 60;
  const hourAngle = (solarTime - 12) * 15;

  const latRad = toRad(latitude);
  const decRad = toRad(declination);
  const haRad = toRad(hourAngle);

  const sinAltitude =
    Math.sin(latRad) * Math.sin(decRad) +
    Math.cos(latRad) * Math.cos(decRad) * Math.cos(haRad);
  const altitude = toDeg(safeAsin(sinAltitude));

  const cosAzimuth =
    (Math.sin(decRad) - Math.sin(latRad) * sinAltitude) /
    (Math.cos(latRad) * Math.cos(toRad(altitude)));
  const azimuth = toDeg(safeAcos(cosAzimuth));

  const finalAzimuth = hourAngle > 0 ? 360 - azimuth : azimuth;

  return {
    altitude,
    azimuth: finalAzimuth,
    declination,
    hourAngle,
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
  const solarNoon = 12 - longitude / 15 - equationOfTime / 60;

  const sunrise = solarNoon - hourAngle / 15;
  const sunset = solarNoon + hourAngle / 15;
  const dayLength = (2 * hourAngle) / 15;

  return {
    sunrise: Math.max(0, Math.min(24, sunrise)),
    sunset: Math.max(0, Math.min(24, sunset)),
    dayLength,
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

export function getAltitudeCurve(
  date: Date,
  latitude: number,
  longitude: number = 0,
  steps: number = 96
): AltitudePoint[] {
  const points: AltitudePoint[] = [];
  const { sunrise, sunset } = getSunriseSunset(date, latitude, longitude);

  for (let i = 0; i <= steps; i++) {
    const hour = sunrise + (sunset - sunrise) * (i / steps);
    const timeDate = new Date(date);
    timeDate.setHours(Math.floor(hour), (hour % 1) * 60, 0, 0);

    const solarPos = getSolarPosition(timeDate, latitude, longitude);
    points.push({
      hour,
      altitude: Math.max(0, solarPos.altitude),
      azimuth: solarPos.azimuth,
    });
  }

  return points;
}

export function getMaxAltitude(
  date: Date,
  latitude: number,
  longitude: number = 0
): number {
  const dayOfYear = getDayOfYear(date);
  const declination = getSolarDeclination(dayOfYear);
  const latRad = toRad(latitude);
  const decRad = toRad(declination);

  const sinMaxAlt =
    Math.sin(latRad) * Math.sin(decRad) +
    Math.cos(latRad) * Math.cos(decRad);
  return toDeg(safeAsin(sinMaxAlt));
}

function getKeyDateData(
  year: number,
  month: number,
  day: number,
  latitude: number,
  longitude: number = 0
): { date: string; dayLength: number; maxAltitude: number } {
  const date = new Date(year, month - 1, day);
  const dateStr = date.toISOString().split('T')[0];
  const { dayLength } = getSunriseSunset(date, latitude, longitude);
  const maxAlt = getMaxAltitude(date, latitude, longitude);
  return { date: dateStr, dayLength, maxAltitude: maxAlt };
}

export function getYearlyAnalysisData(
  date: Date,
  latitude: number,
  longitude: number = 0
): YearlyAnalysisData {
  const year = date.getFullYear();

  const summerSolstice = getKeyDateData(year, 6, 21, latitude, longitude);
  const winterSolstice = getKeyDateData(year, 12, 21, latitude, longitude);
  const springEquinox = getKeyDateData(year, 3, 20, latitude, longitude);
  const autumnEquinox = getKeyDateData(year, 9, 23, latitude, longitude);

  const quarterly = [
    getKeyDateData(year, 2, 4, latitude, longitude),
    getKeyDateData(year, 5, 5, latitude, longitude),
    getKeyDateData(year, 8, 7, latitude, longitude),
    getKeyDateData(year, 11, 7, latitude, longitude),
  ];

  const currentDay = getKeyDateData(
    date.getFullYear(),
    date.getMonth() + 1,
    date.getDate(),
    latitude,
    longitude
  );

  return {
    solstices: {
      summer: summerSolstice,
      winter: winterSolstice,
    },
    equinoxes: {
      spring: springEquinox,
      autumn: autumnEquinox,
    },
    quarterly,
    currentDay,
  };
}
