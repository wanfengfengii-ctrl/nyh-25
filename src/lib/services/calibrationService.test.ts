import { describe, it, expect } from 'vitest';
import {
  inferSolarPositionFromShadow,
  getTheoreticalSolarPosition,
  calculateDeviation,
  generateCalibrationSteps,
  createComparisonPoint,
  calculateQualityScore,
  performCalibration,
} from '$lib/services/calibrationService';
import type { CalibrationInput, SundialType } from '$lib/types';

describe('calibrationService', () => {
  const testInput: CalibrationInput = {
    gnomonLength: 1,
    shadowLength: 1.2,
    shadowDirection: 180,
    measurementDateTime: new Date('2024-06-21T12:00:00').toISOString(),
    latitude: 40,
    longitude: 0,
    sundialType: 'horizontal',
    dialTiltAngle: 0,
    dialOrientation: 180,
  };

  describe('inferSolarPositionFromShadow', () => {
    it('should infer solar position from shadow', () => {
      const pos = inferSolarPositionFromShadow(1, 1.2, 180, 40);
      expect(pos).toBeDefined();
      expect(typeof pos.altitude).toBe('number');
      expect(typeof pos.azimuth).toBe('number');
      expect(typeof pos.declination).toBe('number');
      expect(typeof pos.hourAngle).toBe('number');
      expect(typeof pos.solarTime).toBe('number');
    });

    it('should have positive altitude for valid shadow', () => {
      const pos = inferSolarPositionFromShadow(1, 1.2, 180, 40);
      expect(pos.altitude).toBeGreaterThan(0);
    });

    it('should have lower altitude for longer shadow', () => {
      const longShadow = inferSolarPositionFromShadow(1, 10, 180, 40);
      const shortShadow = inferSolarPositionFromShadow(1, 0.5, 180, 40);
      expect(longShadow.altitude).toBeLessThan(shortShadow.altitude);
    });
  });

  describe('getTheoreticalSolarPosition', () => {
    it('should return theoretical solar position', () => {
      const pos = getTheoreticalSolarPosition(
        testInput.measurementDateTime,
        testInput.latitude,
        testInput.longitude
      );
      expect(pos).toBeDefined();
      expect(typeof pos.altitude).toBe('number');
      expect(typeof pos.azimuth).toBe('number');
      expect(typeof pos.solarTime).toBe('number');
    });
  });

  describe('calculateDeviation', () => {
    it('should calculate deviation analysis', () => {
      const theoretical = getTheoreticalSolarPosition(
        testInput.measurementDateTime,
        testInput.latitude,
        testInput.longitude
      );
      const measured = inferSolarPositionFromShadow(
        testInput.gnomonLength,
        testInput.shadowLength,
        testInput.shadowDirection,
        testInput.latitude
      );

      const deviation = calculateDeviation(
        theoretical,
        measured,
        testInput.sundialType,
        testInput.dialTiltAngle,
        testInput.dialOrientation,
        testInput.latitude
      );

      expect(deviation).toBeDefined();
      expect(typeof deviation.orientationDeviation).toBe('number');
      expect(typeof deviation.tiltDeviation).toBe('number');
      expect(typeof deviation.scaleError).toBe('number');
      expect(typeof deviation.timeDeviation).toBe('number');
    });
  });

  describe('generateCalibrationSteps', () => {
    it('should generate calibration steps', () => {
      const theoretical = getTheoreticalSolarPosition(
        testInput.measurementDateTime,
        testInput.latitude,
        testInput.longitude
      );
      const measured = inferSolarPositionFromShadow(
        testInput.gnomonLength,
        testInput.shadowLength,
        testInput.shadowDirection,
        testInput.latitude
      );
      const deviation = calculateDeviation(
        theoretical,
        measured,
        testInput.sundialType,
        testInput.dialTiltAngle,
        testInput.dialOrientation,
        testInput.latitude
      );

      const steps = generateCalibrationSteps(deviation, testInput.sundialType);
      expect(Array.isArray(steps)).toBe(true);
      expect(steps.length).toBeGreaterThan(0);
      expect(steps[0].title).toBeDefined();
      expect(steps[0].description).toBeDefined();
      expect(steps[0].id).toBeDefined();
    });
  });

  describe('createComparisonPoint', () => {
    it('should create a comparison point', () => {
      const point = createComparisonPoint(30, 45, '°');
      expect(point.theoretical).toBe(30);
      expect(point.measured).toBe(45);
      expect(point.difference).toBe(15);
      expect(point.unit).toBe('°');
    });
  });

  describe('calculateQualityScore', () => {
    it('should return a score between 0 and 100', () => {
      const theoretical = getTheoreticalSolarPosition(
        testInput.measurementDateTime,
        testInput.latitude,
        testInput.longitude
      );
      const measured = inferSolarPositionFromShadow(
        testInput.gnomonLength,
        testInput.shadowLength,
        testInput.shadowDirection,
        testInput.latitude
      );
      const deviation = calculateDeviation(
        theoretical,
        measured,
        testInput.sundialType,
        testInput.dialTiltAngle,
        testInput.dialOrientation,
        testInput.latitude
      );
      const { score } = calculateQualityScore(deviation);
      expect(score).toBeGreaterThanOrEqual(0);
      expect(score).toBeLessThanOrEqual(100);
    });

    it('should return a confidence level', () => {
      const theoretical = getTheoreticalSolarPosition(
        testInput.measurementDateTime,
        testInput.latitude,
        testInput.longitude
      );
      const measured = inferSolarPositionFromShadow(
        testInput.gnomonLength,
        testInput.shadowLength,
        testInput.shadowDirection,
        testInput.latitude
      );
      const deviation = calculateDeviation(
        theoretical,
        measured,
        testInput.sundialType,
        testInput.dialTiltAngle,
        testInput.dialOrientation,
        testInput.latitude
      );
      const { confidence } = calculateQualityScore(deviation);
      expect(['high', 'medium', 'low']).toContain(confidence);
    });
  });

  describe('performCalibration', () => {
    it('should perform complete calibration', () => {
      const result = performCalibration(testInput);
      expect(result).toBeDefined();
      expect(result.inferredSolarPosition).toBeDefined();
      expect(result.theoreticalSolarPosition).toBeDefined();
      expect(result.deviation).toBeDefined();
      expect(result.calibrationSteps).toBeDefined();
      expect(result.comparison).toBeDefined();
      expect(result.qualityScore).toBeDefined();
      expect(result.confidence).toBeDefined();
    });

    it('should have calibration steps array', () => {
      const result = performCalibration(testInput);
      expect(Array.isArray(result.calibrationSteps)).toBe(true);
      expect(result.calibrationSteps.length).toBeGreaterThan(0);
    });

    it('should have comparison data', () => {
      const result = performCalibration(testInput);
      expect(result.comparison).toBeDefined();
      expect(result.comparison.shadowLength).toBeDefined();
      expect(result.comparison.shadowAngle).toBeDefined();
      expect(result.comparison.solarAltitude).toBeDefined();
      expect(result.comparison.solarAzimuth).toBeDefined();
      expect(result.comparison.solarTime).toBeDefined();
    });

    it('should work for all sundial types', () => {
      const types: SundialType[] = ['equatorial', 'horizontal', 'vertical'];
      types.forEach((type) => {
        const input = { ...testInput, sundialType: type };
        const result = performCalibration(input);
        expect(result).toBeDefined();
      });
    });
  });
});
