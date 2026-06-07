import { describe, it, expect } from 'vitest';
import {
  getSolarDeclination,
  getEquationOfTime,
  getSolarPosition,
  getSunriseSunset,
  isSunVisible,
  getAltitudeCurve,
  getMaxAltitude,
  getYearlyAnalysisData,
} from '$lib/services/solarService';

describe('solarService', () => {
  function getLocalNoonDate(): Date {
    const date = new Date('2024-06-21');
    date.setHours(12, 0, 0, 0);
    return date;
  }

  function getLocalMidnightDate(): Date {
    const date = new Date('2024-06-21');
    date.setHours(0, 0, 0, 0);
    return date;
  }

  describe('getSolarDeclination', () => {
    it('should return declination in degrees', () => {
      const dec = getSolarDeclination(80);
      expect(typeof dec).toBe('number');
      expect(dec).toBeGreaterThan(-23.5);
      expect(dec).toBeLessThan(23.5);
    });

    it('should be maximum around summer solstice (day 172)', () => {
      const summerDec = getSolarDeclination(172);
      expect(summerDec).toBeGreaterThan(20);
    });

    it('should be minimum around winter solstice (day 355)', () => {
      const winterDec = getSolarDeclination(355);
      expect(winterDec).toBeLessThan(-20);
    });

    it('should be near zero at equinoxes', () => {
      const springDec = getSolarDeclination(80);
      const autumnDec = getSolarDeclination(266);
      expect(Math.abs(springDec)).toBeLessThan(10);
      expect(Math.abs(autumnDec)).toBeLessThan(10);
    });
  });

  describe('getEquationOfTime', () => {
    it('should return equation of time in minutes', () => {
      const eot = getEquationOfTime(100);
      expect(typeof eot).toBe('number');
      expect(eot).toBeGreaterThan(-20);
      expect(eot).toBeLessThan(20);
    });
  });

  describe('getSolarPosition', () => {
    it('should return solar position with altitude and azimuth', () => {
      const date = getLocalNoonDate();
      const pos = getSolarPosition(date, 40, 0);
      expect(typeof pos.altitude).toBe('number');
      expect(typeof pos.azimuth).toBe('number');
      expect(typeof pos.declination).toBe('number');
      expect(typeof pos.hourAngle).toBe('number');
    });

    it('should have positive altitude at noon on summer solstice at mid-latitudes', () => {
      const date = getLocalNoonDate();
      const pos = getSolarPosition(date, 40, 0);
      expect(pos.altitude).toBeGreaterThan(30);
    });

    it('should have azimuth near 180 at solar noon in northern hemisphere', () => {
      const date = getLocalNoonDate();
      const pos = getSolarPosition(date, 40, 0);
      expect(Math.abs(pos.azimuth - 180)).toBeLessThan(30);
    });
  });

  describe('getSunriseSunset', () => {
    it('should return sunrise and sunset times', () => {
      const date = new Date('2024-06-21');
      const result = getSunriseSunset(date, 40, 0);
      expect(typeof result.sunrise).toBe('number');
      expect(typeof result.sunset).toBe('number');
      expect(typeof result.dayLength).toBe('number');
      expect(result.sunrise).toBeGreaterThan(0);
      expect(result.sunset).toBeLessThan(24);
      expect(result.sunrise).toBeLessThan(result.sunset);
    });

    it('should have longer day in summer at northern latitudes', () => {
      const date = new Date('2024-06-21');
      const result = getSunriseSunset(date, 50, 0);
      expect(result.dayLength).toBeGreaterThan(12);
    });

    it('should have shorter day in winter at northern latitudes', () => {
      const date = new Date('2024-12-21');
      const result = getSunriseSunset(date, 50, 0);
      expect(result.dayLength).toBeLessThan(12);
    });
  });

  describe('isSunVisible', () => {
    it('should return true at noon', () => {
      const date = getLocalNoonDate();
      expect(isSunVisible(date, 40, 0)).toBe(true);
    });

    it('should return false at midnight', () => {
      const date = getLocalMidnightDate();
      expect(isSunVisible(date, 40, 0)).toBe(false);
    });
  });

  describe('getAltitudeCurve', () => {
    it('should return an array of altitude points', () => {
      const date = new Date('2024-06-21');
      const curve = getAltitudeCurve(date, 40, 0, 24);
      expect(Array.isArray(curve)).toBe(true);
      expect(curve.length).toBe(25);
      expect(curve[0].hour).toBeDefined();
      expect(curve[0].altitude).toBeDefined();
    });

    it('should have maximum altitude around noon', () => {
      const date = new Date('2024-06-21');
      const curve = getAltitudeCurve(date, 40, 0, 48);
      const maxAlt = Math.max(...curve.map((p) => p.altitude));
      const maxPoint = curve.find((p) => p.altitude === maxAlt);
      expect(maxPoint?.hour).toBeGreaterThan(10);
      expect(maxPoint?.hour).toBeLessThan(14);
    });
  });

  describe('getMaxAltitude', () => {
    it('should return maximum altitude for the day', () => {
      const date = new Date('2024-06-21');
      const maxAlt = getMaxAltitude(date, 40, 0);
      expect(typeof maxAlt).toBe('number');
      expect(maxAlt).toBeGreaterThan(40);
    });

    it('should be higher in summer than winter', () => {
      const summerDate = new Date('2024-06-21');
      const winterDate = new Date('2024-12-21');
      const summerAlt = getMaxAltitude(summerDate, 40, 0);
      const winterAlt = getMaxAltitude(winterDate, 40, 0);
      expect(summerAlt).toBeGreaterThan(winterAlt);
    });
  });

  describe('getYearlyAnalysisData', () => {
    it('should return yearly analysis data with expected structure', () => {
      const date = new Date('2024-06-21');
      const data = getYearlyAnalysisData(date, 40, 0);
      expect(data.solstices).toBeDefined();
      expect(data.equinoxes).toBeDefined();
      expect(data.quarterly).toBeDefined();
      expect(data.currentDay).toBeDefined();
    });

    it('should have summer solstice with longest day', () => {
      const date = new Date('2024-01-01');
      const data = getYearlyAnalysisData(date, 40, 0);
      expect(data.solstices.summer.dayLength).toBeGreaterThan(data.solstices.winter.dayLength);
    });

    it('should have 4 quarterly data points', () => {
      const date = new Date('2024-01-01');
      const data = getYearlyAnalysisData(date, 40, 0);
      expect(data.quarterly.length).toBe(4);
    });
  });
});
