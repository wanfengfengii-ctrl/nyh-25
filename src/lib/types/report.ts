import type { CalibrationInput, CalibrationResult } from './calibration';

export interface ExportReportData {
  timestamp: string;
  input: CalibrationInput;
  result: CalibrationResult;
}
