import type {
  CalibrationInput,
  InferredSolarPosition,
  DeviationAnalysis,
  CalibrationResult,
  CalibrationStep,
  ComparisonPoint,
  SundialType,
} from '$lib/types';
import { getSolarDeclination, getEquationOfTime } from './astronomy';

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

function normalizeAngle(angle: number): number {
  let result = angle % 360;
  if (result < 0) result += 360;
  return result;
}

function angleDifference(angle1: number, angle2: number): number {
  let diff = angle1 - angle2;
  while (diff > 180) diff -= 360;
  while (diff < -180) diff += 360;
  return diff;
}

export function inferSolarPositionFromShadow(
  gnomonLength: number,
  shadowLength: number,
  shadowDirection: number,
  latitude: number
): InferredSolarPosition {
  const altRad = Math.atan(gnomonLength / shadowLength);
  const altitude = toDeg(altRad);

  const azimuth = normalizeAngle(shadowDirection + 180);

  const latRad = toRad(latitude);
  const sinDec =
    Math.sin(altRad) * Math.sin(latRad) +
    Math.cos(altRad) * Math.cos(latRad) * Math.cos(toRad(azimuth));
  const declination = toDeg(Math.asin(Math.max(-1, Math.min(1, sinDec))));

  const cosH =
    (Math.sin(altRad) - Math.sin(latRad) * Math.sin(toRad(declination))) /
    (Math.cos(latRad) * Math.cos(toRad(declination)));
  const hourAngle = toDeg(Math.acos(Math.max(-1, Math.min(1, cosH))));
  const finalHourAngle = azimuth > 180 ? hourAngle : -hourAngle;

  const solarTime = 12 + finalHourAngle / 15;

  return {
    altitude,
    azimuth,
    declination,
    hourAngle: finalHourAngle,
    solarTime,
  };
}

export function getTheoreticalSolarPosition(
  dateTimeStr: string,
  latitude: number,
  longitude: number
): InferredSolarPosition {
  const date = new Date(dateTimeStr);
  const dayOfYear = getDayOfYear(date);
  const declination = getSolarDeclination(dayOfYear);
  const equationOfTime = getEquationOfTime(dayOfYear);

  const utcHours =
    date.getUTCHours() + date.getUTCMinutes() / 60 + date.getUTCSeconds() / 3600;

  const solarTime = utcHours + longitude / 15 + equationOfTime / 60;
  const hourAngle = (solarTime - 12) * 15;

  const latRad = toRad(latitude);
  const decRad = toRad(declination);
  const haRad = toRad(hourAngle);

  const sinAltitude =
    Math.sin(latRad) * Math.sin(decRad) +
    Math.cos(latRad) * Math.cos(decRad) * Math.cos(haRad);
  const altitude = toDeg(Math.asin(Math.max(-1, Math.min(1, sinAltitude))));

  const cosAzimuth =
    (Math.sin(decRad) - Math.sin(latRad) * sinAltitude) /
    (Math.cos(latRad) * Math.cos(toRad(altitude)));
  const azimuth = toDeg(Math.acos(Math.max(-1, Math.min(1, cosAzimuth))));

  const finalAzimuth = hourAngle > 0 ? 360 - azimuth : azimuth;

  return {
    altitude,
    azimuth: finalAzimuth,
    declination,
    hourAngle,
    solarTime,
  };
}

export function calculateDeviation(
  theoretical: InferredSolarPosition,
  measured: InferredSolarPosition,
  sundialType: SundialType,
  dialTiltAngle: number,
  dialOrientation: number,
  latitude: number
): DeviationAnalysis {
  const azimuthDiff = angleDifference(measured.azimuth, theoretical.azimuth);
  const altitudeDiff = measured.altitude - theoretical.altitude;

  let orientationDeviation = azimuthDiff;
  let tiltDeviation = 0;

  switch (sundialType) {
    case 'horizontal':
      orientationDeviation = azimuthDiff;
      tiltDeviation = altitudeDiff * 0.5;
      break;
    case 'equatorial':
      orientationDeviation = azimuthDiff;
      tiltDeviation = dialTiltAngle - latitude;
      if (Math.abs(tiltDeviation) > 30) {
        tiltDeviation = altitudeDiff * 2;
      }
      break;
    case 'vertical':
      orientationDeviation = azimuthDiff;
      tiltDeviation = altitudeDiff * 0.8;
      break;
  }

  const solarTimeDiff = measured.solarTime - theoretical.solarTime;
  const timeDeviation = solarTimeDiff * 60;

  const scaleError =
    (Math.sin(toRad(measured.altitude)) / Math.cos(toRad(measured.altitude))) /
      (Math.sin(toRad(theoretical.altitude)) / Math.cos(toRad(theoretical.altitude))) -
    1;

  return {
    orientationDeviation,
    tiltDeviation,
    scaleError: scaleError * 100,
    timeDeviation,
  };
}

export function generateCalibrationSteps(
  deviation: DeviationAnalysis,
  sundialType: SundialType
): CalibrationStep[] {
  const steps: CalibrationStep[] = [];
  let stepId = 1;

  if (Math.abs(deviation.orientationDeviation) > 0.5) {
    steps.push({
      id: stepId++,
      title: '调整日晷朝向',
      description:
        deviation.orientationDeviation > 0
          ? '日晷当前朝向偏东，需要向西调整'
          : '日晷当前朝向偏西，需要向东调整',
      adjustment: `旋转 ${Math.abs(deviation.orientationDeviation).toFixed(1)}°`,
      direction: deviation.orientationDeviation > 0 ? 'counterclockwise' : 'clockwise',
      magnitude: Math.abs(deviation.orientationDeviation),
      unit: '度',
      priority: Math.abs(deviation.orientationDeviation) > 5 ? 'critical' : 'important',
    });
  }

  if (Math.abs(deviation.tiltDeviation) > 0.5) {
    const tiltLabel =
      sundialType === 'vertical'
        ? '调整日晷垂直倾角'
        : sundialType === 'equatorial'
          ? '调整日晷赤道倾角'
          : '调整日晷底座水平度';

    steps.push({
      id: stepId++,
      title: tiltLabel,
      description:
        deviation.tiltDeviation > 0
          ? '日晷当前倾角偏大，需要降低'
          : '日晷当前倾角偏小，需要升高',
      adjustment: `调整 ${Math.abs(deviation.tiltDeviation).toFixed(1)}°`,
      direction: deviation.tiltDeviation > 0 ? 'down' : 'up',
      magnitude: Math.abs(deviation.tiltDeviation),
      unit: '度',
      priority: Math.abs(deviation.tiltDeviation) > 5 ? 'critical' : 'important',
    });
  }

  if (Math.abs(deviation.scaleError) > 1) {
    steps.push({
      id: stepId++,
      title: '校正刻度比例',
      description:
        deviation.scaleError > 0
          ? '影子长度偏长，刻度间距需要缩小'
          : '影子长度偏短，刻度间距需要放大',
      adjustment: `调整比例 ${Math.abs(deviation.scaleError).toFixed(1)}%`,
      direction: 'none',
      magnitude: Math.abs(deviation.scaleError),
      unit: '%',
      priority: Math.abs(deviation.scaleError) > 5 ? 'important' : 'minor',
    });
  }

  if (Math.abs(deviation.timeDeviation) > 2) {
    steps.push({
      id: stepId++,
      title: '校正时间基准',
      description:
        deviation.timeDeviation > 0
          ? '日晷显示时间偏快，需要调整晷针或刻度起始位置'
          : '日晷显示时间偏慢，需要调整晷针或刻度起始位置',
      adjustment: `时间偏差 ${Math.abs(deviation.timeDeviation).toFixed(1)} 分钟`,
      direction: 'none',
      magnitude: Math.abs(deviation.timeDeviation),
      unit: '分钟',
      priority: Math.abs(deviation.timeDeviation) > 10 ? 'important' : 'minor',
    });
  }

  if (steps.length === 0) {
    steps.push({
      id: stepId++,
      title: '校准状态良好',
      description: '当前日晷的各项参数均在正常误差范围内，无需调整',
      adjustment: '保持现有状态',
      direction: 'none',
      magnitude: 0,
      unit: '',
      priority: 'minor',
    });
  }

  return steps;
}

export function createComparisonPoint(
  theoretical: number,
  measured: number,
  unit: string
): ComparisonPoint {
  return {
    theoretical,
    measured,
    difference: measured - theoretical,
    unit,
  };
}

export function calculateQualityScore(
  deviation: DeviationAnalysis
): { score: number; confidence: 'high' | 'medium' | 'low' } {
  const orientationPenalty = Math.min(Math.abs(deviation.orientationDeviation) * 2, 30);
  const tiltPenalty = Math.min(Math.abs(deviation.tiltDeviation) * 2, 30);
  const scalePenalty = Math.min(Math.abs(deviation.scaleError) * 3, 20);
  const timePenalty = Math.min(Math.abs(deviation.timeDeviation) / 2, 20);

  const totalPenalty = orientationPenalty + tiltPenalty + scalePenalty + timePenalty;
  const score = Math.max(0, 100 - totalPenalty);

  let confidence: 'high' | 'medium' | 'low' = 'high';
  if (score < 60) confidence = 'low';
  else if (score < 80) confidence = 'medium';

  return { score: Math.round(score), confidence };
}

export function performCalibration(input: CalibrationInput): CalibrationResult {
  const inferred = inferSolarPositionFromShadow(
    input.gnomonLength,
    input.shadowLength,
    input.shadowDirection,
    input.latitude
  );

  const theoretical = getTheoreticalSolarPosition(
    input.measurementDateTime,
    input.latitude,
    input.longitude
  );

  const deviation = calculateDeviation(
    theoretical,
    inferred,
    input.sundialType,
    input.dialTiltAngle,
    input.dialOrientation,
    input.latitude
  );

  const theoreticalShadowLength =
    theoretical.altitude > 0
      ? input.gnomonLength / Math.tan(toRad(theoretical.altitude))
      : 9999;
  const measuredShadowLength = input.shadowLength;

  const theoreticalShadowAngle = normalizeAngle(theoretical.azimuth - 180);
  const measuredShadowAngle = input.shadowDirection;

  const comparison = {
    shadowLength: createComparisonPoint(
      Math.min(theoreticalShadowLength, 9999),
      measuredShadowLength,
      'm'
    ),
    shadowAngle: createComparisonPoint(
      theoreticalShadowAngle,
      measuredShadowAngle,
      '°'
    ),
    solarAltitude: createComparisonPoint(theoretical.altitude, inferred.altitude, '°'),
    solarAzimuth: createComparisonPoint(theoretical.azimuth, inferred.azimuth, '°'),
    solarTime: createComparisonPoint(theoretical.solarTime, inferred.solarTime, 'h'),
  };

  const calibrationSteps = generateCalibrationSteps(deviation, input.sundialType);

  const { score, confidence } = calculateQualityScore(deviation);

  return {
    inferredSolarPosition: inferred,
    theoreticalSolarPosition: theoretical,
    deviation,
    comparison,
    calibrationSteps,
    qualityScore: score,
    confidence,
  };
}

export function formatTimeFromHours(hours: number): string {
  const h = Math.floor(hours);
  const m = Math.floor((hours - h) * 60);
  const s = Math.floor(((hours - h) * 60 - m) * 60);
  return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s
    .toString()
    .padStart(2, '0')}`;
}

export function generateTextReport(
  input: CalibrationInput,
  result: CalibrationResult
): string {
  const lines: string[] = [];

  lines.push('═══════════════════════════════════════════════');
  lines.push('           日晷校准报告');
  lines.push('═══════════════════════════════════════════════');
  lines.push('');

  lines.push('一、测量信息');
  lines.push('───────────────────────────────────────────────');
  lines.push(`测量时间：${new Date(input.measurementDateTime).toLocaleString('zh-CN')}`);
  if (input.locationName) {
    lines.push(`地点：${input.locationName}`);
  }
  lines.push(`纬度：${input.latitude.toFixed(4)}°`);
  lines.push(`经度：${input.longitude.toFixed(4)}°`);
  lines.push(`日晷类型：${getSundialTypeName(input.sundialType)}`);
  lines.push(`日晷朝向：${input.dialOrientation.toFixed(1)}°`);
  lines.push(`日晷倾角：${input.dialTiltAngle.toFixed(1)}°`);
  lines.push('');

  lines.push('二、实测数据');
  lines.push('───────────────────────────────────────────────');
  lines.push(`晷针长度：${input.gnomonLength.toFixed(2)} m`);
  lines.push(`影长：${input.shadowLength.toFixed(2)} m`);
  lines.push(`影子方向：${input.shadowDirection.toFixed(1)}°`);
  lines.push('');

  lines.push('三、校准结果');
  lines.push('───────────────────────────────────────────────');
  lines.push(`质量评分：${result.qualityScore} / 100`);
  lines.push(`可信度：${getConfidenceName(result.confidence)}`);
  lines.push('');

  lines.push('四、理论值 vs 实测值 对照');
  lines.push('───────────────────────────────────────────────');
  const cmp = result.comparison;
  lines.push(`影长：`);
  lines.push(`  理论值：${cmp.shadowLength.theoretical.toFixed(3)} ${cmp.shadowLength.unit}`);
  lines.push(`  实测值：${cmp.shadowLength.measured.toFixed(3)} ${cmp.shadowLength.unit}`);
  lines.push(`  偏差：  ${cmp.shadowLength.difference >= 0 ? '+' : ''}${cmp.shadowLength.difference.toFixed(3)} ${cmp.shadowLength.unit}`);
  lines.push('');
  lines.push(`影子角度：`);
  lines.push(`  理论值：${cmp.shadowAngle.theoretical.toFixed(1)} ${cmp.shadowAngle.unit}`);
  lines.push(`  实测值：${cmp.shadowAngle.measured.toFixed(1)} ${cmp.shadowAngle.unit}`);
  lines.push(`  偏差：  ${cmp.shadowAngle.difference >= 0 ? '+' : ''}${cmp.shadowAngle.difference.toFixed(1)} ${cmp.shadowAngle.unit}`);
  lines.push('');
  lines.push(`太阳高度角：`);
  lines.push(`  理论值：${cmp.solarAltitude.theoretical.toFixed(1)} ${cmp.solarAltitude.unit}`);
  lines.push(`  实测值：${cmp.solarAltitude.measured.toFixed(1)} ${cmp.solarAltitude.unit}`);
  lines.push(`  偏差：  ${cmp.solarAltitude.difference >= 0 ? '+' : ''}${cmp.solarAltitude.difference.toFixed(1)} ${cmp.solarAltitude.unit}`);
  lines.push('');
  lines.push(`太阳方位角：`);
  lines.push(`  理论值：${cmp.solarAzimuth.theoretical.toFixed(1)} ${cmp.solarAzimuth.unit}`);
  lines.push(`  实测值：${cmp.solarAzimuth.measured.toFixed(1)} ${cmp.solarAzimuth.unit}`);
  lines.push(`  偏差：  ${cmp.solarAzimuth.difference >= 0 ? '+' : ''}${cmp.solarAzimuth.difference.toFixed(1)} ${cmp.solarAzimuth.unit}`);
  lines.push('');
  lines.push(`真太阳时：`);
  lines.push(`  理论值：${formatTimeFromHours(cmp.solarTime.theoretical)}`);
  lines.push(`  实测值：${formatTimeFromHours(cmp.solarTime.measured)}`);
  lines.push(`  偏差：  ${cmp.solarTime.difference >= 0 ? '+' : ''}${(cmp.solarTime.difference * 60).toFixed(1)} 分钟`);
  lines.push('');

  lines.push('五、偏差分析');
  lines.push('───────────────────────────────────────────────');
  const dev = result.deviation;
  lines.push(`朝向偏差：${dev.orientationDeviation >= 0 ? '偏东' : '偏西'} ${Math.abs(dev.orientationDeviation).toFixed(1)}°`);
  lines.push(`倾角偏差：${dev.tiltDeviation >= 0 ? '偏大' : '偏小'} ${Math.abs(dev.tiltDeviation).toFixed(1)}°`);
  lines.push(`刻度误差：${dev.scaleError >= 0 ? '+' : ''}${(dev.scaleError * 100).toFixed(1)}%`);
  lines.push(`时间偏差：${dev.timeDeviation >= 0 ? '快' : '慢'} ${Math.abs(dev.timeDeviation * 60).toFixed(1)} 分钟`);
  lines.push('');

  lines.push('六、校准步骤');
  lines.push('───────────────────────────────────────────────');
  result.calibrationSteps.forEach((step, index) => {
    lines.push(`${index + 1}. ${step.title}`);
    lines.push(`   ${step.description}`);
    lines.push(`   优先级：${getPriorityName(step.priority)}`);
    if (step.adjustment) {
      lines.push(`   调整建议：${step.adjustment}`);
    }
    lines.push('');
  });

  lines.push('═══════════════════════════════════════════════');
  lines.push(`报告生成时间：${new Date().toLocaleString('zh-CN')}`);
  lines.push('═══════════════════════════════════════════════');

  return lines.join('\n');
}

function getSundialTypeName(type: SundialType): string {
  const names: Record<SundialType, string> = {
    equatorial: '赤道式',
    horizontal: '水平式',
    vertical: '垂直式',
  };
  return names[type] || type;
}

function getConfidenceName(confidence: string): string {
  const names: Record<string, string> = {
    high: '高',
    medium: '中',
    low: '低',
  };
  return names[confidence] || confidence;
}

function getPriorityName(priority: string): string {
  const names: Record<string, string> = {
    critical: '重要',
    recommended: '建议',
    minor: '轻微',
  };
  return names[priority] || priority;
}

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
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  downloadFile(jsonStr, `日晷校准报告_${timestamp}.json`, 'application/json');
}

export function downloadTextReport(
  input: CalibrationInput,
  result: CalibrationResult
): void {
  const text = generateTextReport(input, result);
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  downloadFile(text, `日晷校准报告_${timestamp}.txt`, 'text/plain');
}
