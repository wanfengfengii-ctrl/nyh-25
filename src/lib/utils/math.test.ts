import { describe, it, expect } from 'vitest';
import {
  toRad,
  toDeg,
  normalizeAngle,
  angleDifference,
  clamp,
  lerp,
  getDistance,
  getAngleBetweenPoints,
  safeAsin,
  safeAcos,
} from '$lib/utils/math';

describe('math utils', () => {
  describe('toRad', () => {
    it('should convert degrees to radians', () => {
      expect(toRad(0)).toBe(0);
      expect(toRad(180)).toBeCloseTo(Math.PI);
      expect(toRad(90)).toBeCloseTo(Math.PI / 2);
      expect(toRad(360)).toBeCloseTo(Math.PI * 2);
      expect(toRad(-90)).toBeCloseTo(-Math.PI / 2);
    });
  });

  describe('toDeg', () => {
    it('should convert radians to degrees', () => {
      expect(toDeg(0)).toBe(0);
      expect(toDeg(Math.PI)).toBeCloseTo(180);
      expect(toDeg(Math.PI / 2)).toBeCloseTo(90);
      expect(toDeg(Math.PI * 2)).toBeCloseTo(360);
      expect(toDeg(-Math.PI / 2)).toBeCloseTo(-90);
    });
  });

  describe('normalizeAngle', () => {
    it('should normalize angle to 0-360 degrees', () => {
      expect(normalizeAngle(0)).toBe(0);
      expect(normalizeAngle(360)).toBeCloseTo(0);
      expect(normalizeAngle(450)).toBeCloseTo(90);
      expect(normalizeAngle(-90)).toBeCloseTo(270);
      expect(normalizeAngle(-450)).toBeCloseTo(270);
      expect(normalizeAngle(720)).toBeCloseTo(0);
    });
  });

  describe('angleDifference', () => {
    it('should calculate signed angle difference within -180 to 180', () => {
      expect(angleDifference(90, 0)).toBeCloseTo(90);
      expect(angleDifference(0, 90)).toBeCloseTo(-90);
      expect(angleDifference(10, 350)).toBeCloseTo(20);
      expect(angleDifference(350, 10)).toBeCloseTo(-20);
      expect(angleDifference(180, 180)).toBeCloseTo(0);
    });

    it('should keep difference within -180 to 180 range', () => {
      const diff = angleDifference(0, 270);
      expect(diff).toBeGreaterThan(-180);
      expect(diff).toBeLessThanOrEqual(180);
    });
  });

  describe('clamp', () => {
    it('should clamp value within range', () => {
      expect(clamp(5, 0, 10)).toBe(5);
      expect(clamp(-5, 0, 10)).toBe(0);
      expect(clamp(15, 0, 10)).toBe(10);
      expect(clamp(0, 0, 10)).toBe(0);
      expect(clamp(10, 0, 10)).toBe(10);
    });
  });

  describe('lerp', () => {
    it('should linearly interpolate between values', () => {
      expect(lerp(0, 10, 0)).toBe(0);
      expect(lerp(0, 10, 1)).toBe(10);
      expect(lerp(0, 10, 0.5)).toBe(5);
      expect(lerp(0, 10, 0.25)).toBe(2.5);
      expect(lerp(5, 15, 0.5)).toBe(10);
    });
  });

  describe('getDistance', () => {
    it('should calculate distance between two points', () => {
      expect(getDistance(0, 0, 3, 4)).toBe(5);
      expect(getDistance(0, 0, 0, 0)).toBe(0);
      expect(getDistance(1, 1, 4, 5)).toBe(5);
      expect(getDistance(-1, -1, 2, 3)).toBe(5);
    });
  });

  describe('getAngleBetweenPoints', () => {
    it('should calculate angle between two points in degrees (0-360)', () => {
      expect(getAngleBetweenPoints(0, 0, 1, 0)).toBeCloseTo(0);
      expect(getAngleBetweenPoints(0, 0, 0, 1)).toBeCloseTo(90);
      expect(getAngleBetweenPoints(0, 0, -1, 0)).toBeCloseTo(180);
      expect(getAngleBetweenPoints(0, 0, 1, 1)).toBeCloseTo(45);
    });
  });

  describe('safeAsin', () => {
    it('should safely compute arcsin with clamped input', () => {
      expect(safeAsin(0)).toBeCloseTo(0);
      expect(safeAsin(1)).toBeCloseTo(Math.PI / 2);
      expect(safeAsin(-1)).toBeCloseTo(-Math.PI / 2);
      expect(safeAsin(1.5)).toBeCloseTo(Math.PI / 2);
      expect(safeAsin(-1.5)).toBeCloseTo(-Math.PI / 2);
      expect(safeAsin(0.5)).toBeCloseTo(Math.asin(0.5));
    });
  });

  describe('safeAcos', () => {
    it('should safely compute arccos with clamped input', () => {
      expect(safeAcos(0)).toBeCloseTo(Math.PI / 2);
      expect(safeAcos(1)).toBeCloseTo(0);
      expect(safeAcos(-1)).toBeCloseTo(Math.PI);
      expect(safeAcos(1.5)).toBeCloseTo(0);
      expect(safeAcos(-1.5)).toBeCloseTo(Math.PI);
      expect(safeAcos(0.5)).toBeCloseTo(Math.acos(0.5));
    });
  });
});
