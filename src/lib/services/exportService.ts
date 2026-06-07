import type { CalibrationInput, CalibrationResult } from '$lib/types';
import { getTimestampFilename } from '$lib/utils/date';
import { generateTextReport, generateReportCanvas, generatePrintableReport } from './reportService';

export function downloadFile(
  content: string,
  filename: string,
  mimeType: string = 'text/plain'
): void {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

export function downloadBlob(blob: Blob, filename: string): void {
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

export function downloadJSONReport(
  input: CalibrationInput,
  result: CalibrationResult
): void {
  const report = {
    timestamp: new Date().toISOString(),
    input: {
      ...input,
      photoDataUrl: input.photoDataUrl ? '[照片数据已省略]' : null,
    },
    result,
  };
  const jsonStr = JSON.stringify(report, null, 2);
  const timestamp = getTimestampFilename();
  downloadFile(jsonStr, `日晷校准报告_${timestamp}.json`, 'application/json');
}

export function downloadTextReport(
  input: CalibrationInput,
  result: CalibrationResult
): void {
  const text = generateTextReport(input, result);
  const timestamp = getTimestampFilename();
  downloadFile(text, `日晷校准报告_${timestamp}.txt`, 'text/plain');
}

export function downloadReportAsImage(
  input: CalibrationInput,
  result: CalibrationResult,
  format: 'png' | 'jpeg' = 'png'
): void {
  const canvas = generateReportCanvas(input, result);
  const mimeType = format === 'png' ? 'image/png' : 'image/jpeg';
  const dataUrl = canvas.toDataURL(mimeType, 0.95);

  const link = document.createElement('a');
  const timestamp = getTimestampFilename();
  link.download = `日晷校准报告_${timestamp}.${format}`;
  link.href = dataUrl;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

export function printReport(
  input: CalibrationInput,
  result: CalibrationResult
): void {
  const html = generatePrintableReport(input, result);
  const printWindow = window.open('', '_blank');
  if (printWindow) {
    printWindow.document.write(html);
    printWindow.document.close();
    printWindow.onload = () => {
      printWindow.focus();
      printWindow.print();
    };
  }
}

export function downloadRecordsJSON(
  records: Array<{ id: string; [key: string]: unknown }>,
  filename?: string
): void {
  const data = {
    exportedAt: new Date().toISOString(),
    count: records.length,
    records,
  };
  const jsonStr = JSON.stringify(data, null, 2);
  const timestamp = getTimestampFilename();
  downloadFile(
    jsonStr,
    filename || `测量记录_${timestamp}.json`,
    'application/json'
  );
}
