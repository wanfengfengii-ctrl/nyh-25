import { describe, it, expect } from 'vitest';
import {
  getDayOfYear,
  getJulianDate,
  formatTimeFromHours,
  formatShortTime,
  formatDateString,
  getTimestampFilename,
  setDateHours,
} from '$lib/utils/date';

describe('date utils', () => {
  describe('getDayOfYear', () => {
    it('should return 1 for January 1st', () => {
      const date = new Date(2024, 0, 1);
      expect(getDayOfYear(date)).toBe(1);
    });

    it('should return 366 for December 31st in a leap year', () => {
      const date = new Date(2024, 11, 31);
      expect(getDayOfYear(date)).toBe(366);
    });

    it('should return 365 for December 31st in a non-leap year', () => {
      const date = new Date(2023, 11, 31);
      expect(getDayOfYear(date)).toBe(365);
    });

    it('should return correct value for mid-year dates', () => {
      const date = new Date(2024, 5, 15);
      const day = getDayOfYear(date);
      expect(day).toBeGreaterThan(150);
      expect(day).toBeLessThan(200);
    });
  });

  describe('getJulianDate', () => {
    it('should return a positive Julian date number', () => {
      const date = new Date('2024-01-01T12:00:00Z');
      const jd = getJulianDate(date);
      expect(typeof jd).toBe('number');
      expect(jd).toBeGreaterThan(2460000);
    });

    it('should increase by 1 for each day', () => {
      const date1 = new Date('2024-01-01T12:00:00Z');
      const date2 = new Date('2024-01-02T12:00:00Z');
      const jd1 = getJulianDate(date1);
      const jd2 = getJulianDate(date2);
      expect(jd2 - jd1).toBeCloseTo(1, 5);
    });
  });

  describe('formatTimeFromHours', () => {
    it('should format hours to HH:MM:SS string', () => {
      expect(formatTimeFromHours(0)).toBe('00:00:00');
      expect(formatTimeFromHours(12)).toBe('12:00:00');
      expect(formatTimeFromHours(6.5)).toBe('06:30:00');
      expect(formatTimeFromHours(23.75)).toBe('23:45:00');
      expect(formatTimeFromHours(24)).toBe('24:00:00');
    });
  });

  describe('formatShortTime', () => {
    it('should format hours to HH:MM string', () => {
      expect(formatShortTime(0)).toBe('00:00');
      expect(formatShortTime(12)).toBe('12:00');
      expect(formatShortTime(6.5)).toBe('06:30');
      expect(formatShortTime(23.75)).toBe('23:45');
    });

    it('should return --:-- for out-of-range values', () => {
      expect(formatShortTime(-1)).toBe('--:--');
      expect(formatShortTime(25)).toBe('--:--');
    });
  });

  describe('formatDateString', () => {
    it('should format date to YYYY-MM-DD string', () => {
      const date = new Date('2024-01-15');
      const dateStr = formatDateString(date);
      expect(dateStr).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    });
  });

  describe('getTimestampFilename', () => {
    it('should return a timestamp string', () => {
      const filename = getTimestampFilename();
      expect(typeof filename).toBe('string');
      expect(filename.length).toBeGreaterThan(10);
    });

    it('should not contain colons or dots', () => {
      const filename = getTimestampFilename();
      expect(filename).not.toContain(':');
      expect(filename).not.toContain('.');
    });
  });

  describe('setDateHours', () => {
    it('should set hours on a date and return new date', () => {
      const date = new Date('2024-01-01T00:00:00');
      const result = setDateHours(date, 12.5);
      expect(result.getHours()).toBe(12);
      expect(result.getMinutes()).toBe(30);
      expect(result).not.toBe(date);
    });

    it('should handle fractional hours correctly', () => {
      const date = new Date('2024-01-01T00:00:00');
      const result = setDateHours(date, 6.25);
      expect(result.getHours()).toBe(6);
      expect(result.getMinutes()).toBe(15);
    });
  });
});
