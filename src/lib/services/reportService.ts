import type { CalibrationInput, CalibrationResult, SundialType } from '$lib/types';
import { formatTimeFromHours } from '$lib/utils/date';

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
  lines.push(
    `  偏差：  ${cmp.shadowLength.difference >= 0 ? '+' : ''}${cmp.shadowLength.difference.toFixed(3)} ${cmp.shadowLength.unit}`
  );
  lines.push('');
  lines.push(`影子角度：`);
  lines.push(`  理论值：${cmp.shadowAngle.theoretical.toFixed(1)} ${cmp.shadowAngle.unit}`);
  lines.push(`  实测值：${cmp.shadowAngle.measured.toFixed(1)} ${cmp.shadowAngle.unit}`);
  lines.push(
    `  偏差：  ${cmp.shadowAngle.difference >= 0 ? '+' : ''}${cmp.shadowAngle.difference.toFixed(1)} ${cmp.shadowAngle.unit}`
  );
  lines.push('');
  lines.push(`太阳高度角：`);
  lines.push(`  理论值：${cmp.solarAltitude.theoretical.toFixed(1)} ${cmp.solarAltitude.unit}`);
  lines.push(`  实测值：${cmp.solarAltitude.measured.toFixed(1)} ${cmp.solarAltitude.unit}`);
  lines.push(
    `  偏差：  ${cmp.solarAltitude.difference >= 0 ? '+' : ''}${cmp.solarAltitude.difference.toFixed(1)} ${cmp.solarAltitude.unit}`
  );
  lines.push('');
  lines.push(`太阳方位角：`);
  lines.push(`  理论值：${cmp.solarAzimuth.theoretical.toFixed(1)} ${cmp.solarAzimuth.unit}`);
  lines.push(`  实测值：${cmp.solarAzimuth.measured.toFixed(1)} ${cmp.solarAzimuth.unit}`);
  lines.push(
    `  偏差：  ${cmp.solarAzimuth.difference >= 0 ? '+' : ''}${cmp.solarAzimuth.difference.toFixed(1)} ${cmp.solarAzimuth.unit}`
  );
  lines.push('');
  lines.push(`真太阳时：`);
  lines.push(`  理论值：${formatTimeFromHours(cmp.solarTime.theoretical)}`);
  lines.push(`  实测值：${formatTimeFromHours(cmp.solarTime.measured)}`);
  lines.push(
    `  偏差：  ${cmp.solarTime.difference >= 0 ? '+' : ''}${(cmp.solarTime.difference * 60).toFixed(1)} 分钟`
  );
  lines.push('');

  lines.push('五、偏差分析');
  lines.push('───────────────────────────────────────────────');
  const dev = result.deviation;
  lines.push(`朝向偏差：${dev.orientationDeviation >= 0 ? '偏东' : '偏西'} ${Math.abs(dev.orientationDeviation).toFixed(1)}°`);
  lines.push(`倾角偏差：${dev.tiltDeviation >= 0 ? '偏大' : '偏小'} ${Math.abs(dev.tiltDeviation).toFixed(1)}°`);
  lines.push(`刻度误差：${dev.scaleError >= 0 ? '+' : ''}${dev.scaleError.toFixed(1)}%`);
  lines.push(`时间偏差：${dev.timeDeviation >= 0 ? '快' : '慢'} ${Math.abs(dev.timeDeviation).toFixed(1)} 分钟`);
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

export function generateReportCanvas(
  input: CalibrationInput,
  result: CalibrationResult
): HTMLCanvasElement {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d')!;

  const width = 800;
  const height = 1100;
  canvas.width = width;
  canvas.height = height;

  ctx.fillStyle = '#0f172a';
  ctx.fillRect(0, 0, width, height);

  drawHeader(ctx, width);
  drawQualitySection(ctx, result, 100);
  drawComparisonSection(ctx, result, 280);
  drawDeviationSection(ctx, result, 580);
  drawStepsSection(ctx, result, 760);
  drawFooter(ctx, input, width, height - 60);

  return canvas;
}

function drawHeader(ctx: CanvasRenderingContext2D, width: number) {
  const gradient = ctx.createLinearGradient(0, 0, width, 60);
  gradient.addColorStop(0, '#f59e0b');
  gradient.addColorStop(1, '#ea580c');

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, 60);

  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 24px sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('日晷校准报告', width / 2, 40);
}

function drawQualitySection(
  ctx: CanvasRenderingContext2D,
  result: CalibrationResult,
  y: number
) {
  ctx.fillStyle = '#1e293b';
  ctx.beginPath();
  ctx.roundRect(40, y, 720, 160, 12);
  ctx.fill();

  ctx.fillStyle = '#f59e0b';
  ctx.font = 'bold 18px sans-serif';
  ctx.textAlign = 'left';
  ctx.fillText('综合质量评估', 60, y + 35);

  const score = result.qualityScore;
  const centerX = 400;
  const centerY = y + 100;
  const radius = 50;

  ctx.strokeStyle = '#334155';
  ctx.lineWidth = 10;
  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
  ctx.stroke();

  let scoreColor = '#10b981';
  if (score < 60) scoreColor = '#ef4444';
  else if (score < 80) scoreColor = '#f59e0b';

  ctx.strokeStyle = scoreColor;
  ctx.lineWidth = 10;
  ctx.lineCap = 'round';
  ctx.beginPath();
  ctx.arc(
    centerX,
    centerY,
    radius,
    -Math.PI / 2,
    -Math.PI / 2 + (score / 100) * Math.PI * 2
  );
  ctx.stroke();

  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 28px sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText(`${score}`, centerX, centerY + 10);

  ctx.fillStyle = '#94a3b8';
  ctx.font = '12px sans-serif';
  ctx.fillText('质量评分', centerX, centerY + 30);

  ctx.textAlign = 'left';
  ctx.fillStyle = '#94a3b8';
  ctx.font = '14px sans-serif';
  ctx.fillText('可信度:', 520, y + 70);
  ctx.fillStyle =
    result.confidence === 'high'
      ? '#10b981'
      : result.confidence === 'medium'
        ? '#f59e0b'
        : '#ef4444';
  ctx.font = 'bold 16px sans-serif';
  ctx.fillText(
    result.confidence === 'high' ? '高' : result.confidence === 'medium' ? '中' : '低',
    590,
    y + 70
  );

  ctx.fillStyle = '#94a3b8';
  ctx.font = '14px sans-serif';
  ctx.fillText('校准步骤:', 520, y + 100);
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 16px sans-serif';
  ctx.fillText(`${result.calibrationSteps.length} 步`, 590, y + 100);
}

function drawComparisonSection(
  ctx: CanvasRenderingContext2D,
  result: CalibrationResult,
  y: number
) {
  ctx.fillStyle = '#1e293b';
  ctx.beginPath();
  ctx.roundRect(40, y, 720, 280, 12);
  ctx.fill();

  ctx.fillStyle = '#f59e0b';
  ctx.font = 'bold 18px sans-serif';
  ctx.textAlign = 'left';
  ctx.fillText('理论值 vs 实测值', 60, y + 35);

  const items = [
    {
      label: '影长',
      theoretical: result.comparison.shadowLength.theoretical.toFixed(2),
      measured: result.comparison.shadowLength.measured.toFixed(2),
      unit: 'm',
      diff: result.comparison.shadowLength.difference,
    },
    {
      label: '影子角度',
      theoretical: result.comparison.shadowAngle.theoretical.toFixed(1),
      measured: result.comparison.shadowAngle.measured.toFixed(1),
      unit: '°',
      diff: result.comparison.shadowAngle.difference,
    },
    {
      label: '太阳高度角',
      theoretical: result.comparison.solarAltitude.theoretical.toFixed(1),
      measured: result.comparison.solarAltitude.measured.toFixed(1),
      unit: '°',
      diff: result.comparison.solarAltitude.difference,
    },
    {
      label: '太阳方位角',
      theoretical: result.comparison.solarAzimuth.theoretical.toFixed(1),
      measured: result.comparison.solarAzimuth.measured.toFixed(1),
      unit: '°',
      diff: result.comparison.solarAzimuth.difference,
    },
  ];

  const colX = [60, 280, 480, 640];

  ctx.fillStyle = '#94a3b8';
  ctx.font = '13px sans-serif';
  ctx.fillText('项目', colX[0], y + 70);
  ctx.fillText('理论值', colX[1], y + 70);
  ctx.fillText('实测值', colX[2], y + 70);
  ctx.fillText('偏差', colX[3], y + 70);

  items.forEach((item, i) => {
    const rowY = y + 100 + i * 42;

    ctx.fillStyle = '#334155';
    ctx.fillRect(60, rowY - 18, 680, 36);

    ctx.fillStyle = '#e2e8f0';
    ctx.font = '14px sans-serif';
    ctx.fillText(item.label, colX[0], rowY + 5);

    ctx.fillStyle = '#ffffff';
    ctx.font = '14px monospace';
    ctx.fillText(`${item.theoretical} ${item.unit}`, colX[1], rowY + 5);
    ctx.fillText(`${item.measured} ${item.unit}`, colX[2], rowY + 5);

    const diffStr = (item.diff >= 0 ? '+' : '') + item.diff.toFixed(2);
    ctx.fillStyle =
      Math.abs(item.diff) < 1
        ? '#10b981'
        : Math.abs(item.diff) < 5
          ? '#f59e0b'
          : '#ef4444';
    ctx.fillText(diffStr + ' ' + item.unit, colX[3], rowY + 5);
  });
}

function drawDeviationSection(
  ctx: CanvasRenderingContext2D,
  result: CalibrationResult,
  y: number
) {
  ctx.fillStyle = '#1e293b';
  ctx.beginPath();
  ctx.roundRect(40, y, 720, 160, 12);
  ctx.fill();

  ctx.fillStyle = '#f59e0b';
  ctx.font = 'bold 18px sans-serif';
  ctx.textAlign = 'left';
  ctx.fillText('偏差分析', 60, y + 35);

  const dev = result.deviation;
  const items = [
    { label: '朝向偏差', value: dev.orientationDeviation, unit: '°', threshold: 5 },
    { label: '倾角偏差', value: dev.tiltDeviation, unit: '°', threshold: 5 },
    { label: '刻度误差', value: dev.scaleError, unit: '%', threshold: 5 },
    { label: '时间偏差', value: dev.timeDeviation, unit: '分', threshold: 10 },
  ];

  const cardWidth = 165;
  const gap = 20;
  const startX = 60;
  const cardY = y + 60;

  items.forEach((item, i) => {
    const x = startX + i * (cardWidth + gap);

    ctx.fillStyle = '#0f172a';
    ctx.beginPath();
    ctx.roundRect(x, cardY, cardWidth, 80, 8);
    ctx.fill();

    ctx.fillStyle = '#94a3b8';
    ctx.font = '12px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(item.label, x + cardWidth / 2, cardY + 28);

    const absVal = Math.abs(item.value);
    let color = '#10b981';
    if (absVal > item.threshold) color = '#ef4444';
    else if (absVal > item.threshold * 0.3) color = '#f59e0b';

    ctx.fillStyle = color;
    ctx.font = 'bold 20px monospace';
    const valueStr = (item.value >= 0 ? '+' : '') + item.value.toFixed(1);
    ctx.fillText(`${valueStr} ${item.unit}`, x + cardWidth / 2, cardY + 58);
  });
}

function drawStepsSection(
  ctx: CanvasRenderingContext2D,
  result: CalibrationResult,
  y: number
) {
  ctx.fillStyle = '#1e293b';
  ctx.beginPath();
  ctx.roundRect(40, y, 720, 280, 12);
  ctx.fill();

  ctx.fillStyle = '#f59e0b';
  ctx.font = 'bold 18px sans-serif';
  ctx.textAlign = 'left';
  ctx.fillText('校准步骤', 60, y + 35);

  const steps = result.calibrationSteps.slice(0, 4);
  let currentY = y + 70;

  steps.forEach((step, i) => {
    const x = 60;
    const width = 680;
    const height = 50;

    let priorityColor = '#10b981';
    if (step.priority === 'critical') priorityColor = '#ef4444';
    else if (step.priority === 'important') priorityColor = '#f59e0b';

    ctx.strokeStyle = '#334155';
    ctx.lineWidth = 1;
    ctx.fillStyle = '#0f172a';
    ctx.beginPath();
    ctx.roundRect(x, currentY, width, height, 6);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = priorityColor;
    ctx.fillRect(x, currentY, 4, height);

    ctx.fillStyle = priorityColor;
    ctx.beginPath();
    ctx.arc(x + 24, currentY + 25, 12, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 12px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(`${i + 1}`, x + 24, currentY + 29);

    ctx.fillStyle = '#e2e8f0';
    ctx.font = 'bold 13px sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText(step.title, x + 46, currentY + 20);

    ctx.fillStyle = '#94a3b8';
    ctx.font = '11px sans-serif';
    ctx.fillText(step.adjustment, x + 46, currentY + 38);

    currentY += height + 8;
  });

  if (result.calibrationSteps.length > 4) {
    ctx.fillStyle = '#64748b';
    ctx.font = '12px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(`... 还有 ${result.calibrationSteps.length - 4} 个步骤`, 400, currentY + 20);
  }
}

function drawFooter(
  ctx: CanvasRenderingContext2D,
  input: CalibrationInput,
  width: number,
  y: number
) {
  ctx.strokeStyle = '#334155';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(40, y - 10);
  ctx.lineTo(width - 40, y - 10);
  ctx.stroke();

  ctx.fillStyle = '#64748b';
  ctx.font = '11px sans-serif';
  ctx.textAlign = 'left';
  ctx.fillText(
    `测量时间: ${new Date(input.measurementDateTime).toLocaleString('zh-CN')}`,
    40,
    y + 10
  );
  ctx.fillText(
    `位置: ${input.locationName || `${input.latitude.toFixed(2)}°N, ${input.longitude.toFixed(2)}°E`}`,
    40,
    y + 28
  );

  ctx.textAlign = 'right';
  ctx.fillText(`报告生成时间: ${new Date().toLocaleString('zh-CN')}`, width - 40, y + 10);
  ctx.fillText('AI 日晷校准与报告中心', width - 40, y + 28);
}

export function generatePrintableReport(
  input: CalibrationInput,
  result: CalibrationResult
): string {
  const dev = result.deviation;
  const cmp = result.comparison;

  return `
<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<title>日晷校准报告</title>
<style>
  body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; margin: 40px; color: #1e293b; }
  h1 { color: #f59e0b; text-align: center; border-bottom: 3px solid #f59e0b; padding-bottom: 10px; }
  h2 { color: #f59e0b; margin-top: 30px; border-bottom: 2px solid #e2e8f0; padding-bottom: 5px; }
  .score-box { background: #f8fafc; border-radius: 12px; padding: 20px; text-align: center; margin: 20px 0; }
  .score { font-size: 48px; font-weight: bold; color: ${result.qualityScore >= 80 ? '#10b981' : result.qualityScore >= 60 ? '#f59e0b' : '#ef4444'}; }
  .grid { display: grid; grid-template-columns: 1fr 1fr 1fr 1fr; gap: 12px; margin: 15px 0; }
  .card { background: #f8fafc; border-radius: 8px; padding: 15px; text-align: center; }
  .card-label { color: #64748b; font-size: 12px; margin-bottom: 8px; }
  .card-value { font-size: 20px; font-weight: bold; font-family: monospace; }
  table { width: 100%; border-collapse: collapse; margin: 15px 0; }
  th, td { padding: 10px; text-align: left; border-bottom: 1px solid #e2e8f0; }
  th { background: #f1f5f9; font-weight: 600; }
  .step { background: #f8fafc; border-radius: 8px; padding: 12px; margin: 8px 0; border-left: 4px solid #f59e0b; }
  .step-title { font-weight: bold; margin-bottom: 4px; }
  .step-desc { color: #64748b; font-size: 14px; }
  .meta { color: #64748b; font-size: 13px; margin-top: 30px; border-top: 1px solid #e2e8f0; padding-top: 15px; }
  .critical { border-left-color: #ef4444; }
  .important { border-left-color: #f59e0b; }
  .minor { border-left-color: #10b981; }
  @media print {
    body { margin: 20px; }
    .page-break { page-break-before: always; }
  }
</style>
</head>
<body>
  <h1>日晷校准报告</h1>

  <div class="score-box">
    <div class="score">${result.qualityScore} 分</div>
    <div style="color:#64748b">综合质量评分 · 可信度: ${result.confidence === 'high' ? '高' : result.confidence === 'medium' ? '中' : '低'}</div>
  </div>

  <h2>一、测量信息</h2>
  <p><strong>测量时间：</strong>${new Date(input.measurementDateTime).toLocaleString('zh-CN')}</p>
  <p><strong>地点：</strong>${input.locationName || '自定义位置'} (${input.latitude.toFixed(4)}°N, ${input.longitude.toFixed(4)}°E)</p>
  <p><strong>日晷类型：</strong>${getSundialTypeName(input.sundialType)}</p>
  <p><strong>晷针长度：</strong>${input.gnomonLength.toFixed(2)} m</p>

  <h2>二、偏差分析</h2>
  <div class="grid">
    <div class="card">
      <div class="card-label">朝向偏差</div>
      <div class="card-value" style="color: ${Math.abs(dev.orientationDeviation) > 5 ? '#ef4444' : Math.abs(dev.orientationDeviation) > 1 ? '#f59e0b' : '#10b981'}">
        ${dev.orientationDeviation >= 0 ? '+' : ''}${dev.orientationDeviation.toFixed(1)}°
      </div>
    </div>
    <div class="card">
      <div class="card-label">倾角偏差</div>
      <div class="card-value" style="color: ${Math.abs(dev.tiltDeviation) > 5 ? '#ef4444' : Math.abs(dev.tiltDeviation) > 1 ? '#f59e0b' : '#10b981'}">
        ${dev.tiltDeviation >= 0 ? '+' : ''}${dev.tiltDeviation.toFixed(1)}°
      </div>
    </div>
    <div class="card">
      <div class="card-label">刻度误差</div>
      <div class="card-value" style="color: ${Math.abs(dev.scaleError) > 5 ? '#ef4444' : Math.abs(dev.scaleError) > 1 ? '#f59e0b' : '#10b981'}">
        ${dev.scaleError >= 0 ? '+' : ''}${dev.scaleError.toFixed(1)}%
      </div>
    </div>
    <div class="card">
      <div class="card-label">时间偏差</div>
      <div class="card-value" style="color: ${Math.abs(dev.timeDeviation) > 10 ? '#ef4444' : Math.abs(dev.timeDeviation) > 2 ? '#f59e0b' : '#10b981'}">
        ${dev.timeDeviation >= 0 ? '+' : ''}${dev.timeDeviation.toFixed(1)} 分
      </div>
    </div>
  </div>

  <h2>三、理论值 vs 实测值</h2>
  <table>
    <thead>
      <tr><th>项目</th><th>理论值</th><th>实测/反推值</th><th>偏差</th></tr>
    </thead>
    <tbody>
      <tr><td>影长</td><td>${cmp.shadowLength.theoretical.toFixed(3)} m</td><td>${cmp.shadowLength.measured.toFixed(3)} m</td><td>${cmp.shadowLength.difference >= 0 ? '+' : ''}${cmp.shadowLength.difference.toFixed(3)} m</td></tr>
      <tr><td>影子角度</td><td>${cmp.shadowAngle.theoretical.toFixed(1)}°</td><td>${cmp.shadowAngle.measured.toFixed(1)}°</td><td>${cmp.shadowAngle.difference >= 0 ? '+' : ''}${cmp.shadowAngle.difference.toFixed(1)}°</td></tr>
      <tr><td>太阳高度角</td><td>${cmp.solarAltitude.theoretical.toFixed(1)}°</td><td>${cmp.solarAltitude.measured.toFixed(1)}°</td><td>${cmp.solarAltitude.difference >= 0 ? '+' : ''}${cmp.solarAltitude.difference.toFixed(1)}°</td></tr>
      <tr><td>太阳方位角</td><td>${cmp.solarAzimuth.theoretical.toFixed(1)}°</td><td>${cmp.solarAzimuth.measured.toFixed(1)}°</td><td>${cmp.solarAzimuth.difference >= 0 ? '+' : ''}${cmp.solarAzimuth.difference.toFixed(1)}°</td></tr>
      <tr><td>真太阳时</td><td>${formatTimeFromHours(cmp.solarTime.theoretical)}</td><td>${formatTimeFromHours(cmp.solarTime.measured)}</td><td>${cmp.solarTime.difference >= 0 ? '+' : ''}${(cmp.solarTime.difference * 60).toFixed(1)} 分钟</td></tr>
    </tbody>
  </table>

  <h2>四、校准步骤</h2>
  ${result.calibrationSteps
    .map(
      (step) => `
    <div class="step ${step.priority}">
      <div class="step-title">${step.id}. ${step.title} <span style="font-size:12px;color:#64748b">[${step.priority === 'critical' ? '重要' : step.priority === 'important' ? '建议' : '轻微'}]</span></div>
      <div class="step-desc">${step.description}</div>
      <div style="margin-top:6px;color:#f59e0b;font-weight:500;">调整建议：${step.adjustment}</div>
    </div>
  `
    )
    .join('')}

  <div class="meta">
    <p>报告生成时间：${new Date().toLocaleString('zh-CN')}</p>
    <p>生成来源：AI 日晷校准与报告中心</p>
  </div>
</body>
</html>
  `;
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
