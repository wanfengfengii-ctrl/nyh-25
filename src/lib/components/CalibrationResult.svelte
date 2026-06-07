<script lang="ts">
  import { AlertCircle, CheckCircle, ArrowUp, ArrowDown, RotateCw, RotateCcw, Target, TrendingUp, Minus } from 'lucide-svelte';
  import type { CalibrationResult, CalibrationStep, ComparisonPoint } from '$lib/types';
  import { formatTimeFromHours } from '$lib/utils/calibration';

  export let result: CalibrationResult | null = null;

  function getConfidenceColor(confidence: string): string {
    switch (confidence) {
      case 'high':
        return 'text-emerald-400';
      case 'medium':
        return 'text-amber-400';
      case 'low':
        return 'text-red-400';
      default:
        return 'text-slate-400';
    }
  }

  function getConfidenceBg(confidence: string): string {
    switch (confidence) {
      case 'high':
        return 'bg-emerald-500/20 border-emerald-500/30';
      case 'medium':
        return 'bg-amber-500/20 border-amber-500/30';
      case 'low':
        return 'bg-red-500/20 border-red-500/30';
      default:
        return 'bg-slate-500/20 border-slate-500/30';
    }
  }

  function getPriorityColor(priority: string): string {
    switch (priority) {
      case 'critical':
        return 'border-l-red-500 bg-red-500/5';
      case 'important':
        return 'border-l-amber-500 bg-amber-500/5';
      case 'minor':
        return 'border-l-emerald-500 bg-emerald-500/5';
      default:
        return 'border-l-slate-500 bg-slate-500/5';
    }
  }

  function getPriorityBadgeClass(priority: string): string {
    switch (priority) {
      case 'critical':
        return 'bg-red-500/20 text-red-400';
      case 'important':
        return 'bg-amber-500/20 text-amber-400';
      case 'minor':
        return 'bg-emerald-500/20 text-emerald-400';
      default:
        return 'bg-slate-500/20 text-slate-400';
    }
  }

  function getPriorityLabel(priority: string): string {
    switch (priority) {
      case 'critical':
        return '重要';
      case 'important':
        return '建议';
      case 'minor':
        return '轻微';
      default:
        return '';
    }
  }

  function getDirectionIcon(step: CalibrationStep) {
    switch (step.direction) {
      case 'clockwise':
        return RotateCw;
      case 'counterclockwise':
        return RotateCcw;
      case 'up':
        return ArrowUp;
      case 'down':
        return ArrowDown;
      default:
        return Minus;
    }
  }

  function formatComparisonValue(point: ComparisonPoint): string {
    if (point.unit === 'h') {
      return formatTimeFromHours(point.theoretical);
    }
    if (point.unit === 'm') {
      return point.theoretical.toFixed(2) + ' ' + point.unit;
    }
    return point.theoretical.toFixed(2) + point.unit;
  }

  function formatMeasuredValue(point: ComparisonPoint): string {
    if (point.unit === 'h') {
      return formatTimeFromHours(point.measured);
    }
    if (point.unit === 'm') {
      return point.measured.toFixed(2) + ' ' + point.unit;
    }
    return point.measured.toFixed(2) + point.unit;
  }

  function formatDifference(point: ComparisonPoint): string {
    const prefix = point.difference >= 0 ? '+' : '';
    if (point.unit === 'h') {
      const diffMins = point.difference * 60;
      return prefix + diffMins.toFixed(1) + ' 分钟';
    }
    if (point.unit === 'm') {
      return prefix + point.difference.toFixed(2) + ' ' + point.unit;
    }
    return prefix + point.difference.toFixed(2) + point.unit;
  }

  function getDiffClass(point: ComparisonPoint): string {
    const absDiff = Math.abs(point.difference);
    const threshold = point.unit === 'h' ? 0.1 : point.unit === 'm' ? 0.1 : 1;
    if (absDiff < threshold * 0.3) return 'text-emerald-400';
    if (absDiff < threshold) return 'text-amber-400';
    return 'text-red-400';
  }
</script>

{#if result}
  <div class="glass-card p-5 h-full overflow-y-auto">
    <div class="mb-5">
      <h3 class="font-display text-base text-amber-500 font-semibold mb-3 flex items-center gap-2">
        <Target class="w-4 h-4" />
        校准质量评估
      </h3>
      <div class={`rounded-xl p-4 border ${getConfidenceBg(result.confidence)}`}>
        <div class="flex items-center justify-between mb-3">
          <span class="text-slate-300 text-sm">综合评分</span>
          <span class={`text-2xl font-bold ${getConfidenceColor(result.confidence)}`}>
            {result.qualityScore} 分
          </span>
        </div>
        <div class="w-full bg-slate-700/50 rounded-full h-2 mb-2">
          <div
            class={`h-2 rounded-full transition-all duration-500 ${
              result.qualityScore >= 80
                ? 'bg-emerald-500'
                : result.qualityScore >= 60
                  ? 'bg-amber-500'
                  : 'bg-red-500'
            }`}
            style={`width: ${result.qualityScore}%`}
          ></div>
        </div>
        <div class="flex items-center justify-between text-xs">
          <span class="text-slate-500">可信度:</span>
          <span class={getConfidenceColor(result.confidence)}>
            {result.confidence === 'high' ? '高' : result.confidence === 'medium' ? '中' : '低'}
          </span>
        </div>
      </div>
    </div>

    <div class="border-t border-slate-700/50 pt-5 mb-5">
      <h3 class="font-display text-base text-amber-500 font-semibold mb-3 flex items-center gap-2">
        <TrendingUp class="w-4 h-4" />
        理论值 vs 实测值
      </h3>
      <div class="space-y-2">
        <div class="bg-slate-700/30 rounded-lg p-3">
          <div class="flex justify-between items-center mb-2">
            <span class="text-xs text-slate-400">影长</span>
            <span class={getDiffClass(result.comparison.shadowLength)}>
              {formatDifference(result.comparison.shadowLength)}
            </span>
          </div>
          <div class="flex justify-between text-sm">
            <div>
              <div class="text-xs text-slate-500">理论值</div>
              <div class="font-mono text-slate-200">
                {formatComparisonValue(result.comparison.shadowLength)}
              </div>
            </div>
            <div class="text-right">
              <div class="text-xs text-slate-500">实测值</div>
              <div class="font-mono text-slate-200">
                {formatMeasuredValue(result.comparison.shadowLength)}
              </div>
            </div>
          </div>
        </div>

        <div class="bg-slate-700/30 rounded-lg p-3">
          <div class="flex justify-between items-center mb-2">
            <span class="text-xs text-slate-400">影子角度</span>
            <span class={getDiffClass(result.comparison.shadowAngle)}>
              {formatDifference(result.comparison.shadowAngle)}
            </span>
          </div>
          <div class="flex justify-between text-sm">
            <div>
              <div class="text-xs text-slate-500">理论值</div>
              <div class="font-mono text-slate-200">
                {formatComparisonValue(result.comparison.shadowAngle)}
              </div>
            </div>
            <div class="text-right">
              <div class="text-xs text-slate-500">实测值</div>
              <div class="font-mono text-slate-200">
                {formatMeasuredValue(result.comparison.shadowAngle)}
              </div>
            </div>
          </div>
        </div>

        <div class="bg-slate-700/30 rounded-lg p-3">
          <div class="flex justify-between items-center mb-2">
            <span class="text-xs text-slate-400">太阳高度角</span>
            <span class={getDiffClass(result.comparison.solarAltitude)}>
              {formatDifference(result.comparison.solarAltitude)}
            </span>
          </div>
          <div class="flex justify-between text-sm">
            <div>
              <div class="text-xs text-slate-500">理论值</div>
              <div class="font-mono text-slate-200">
                {formatComparisonValue(result.comparison.solarAltitude)}
              </div>
            </div>
            <div class="text-right">
              <div class="text-xs text-slate-500">反推值</div>
              <div class="font-mono text-slate-200">
                {formatMeasuredValue(result.comparison.solarAltitude)}
              </div>
            </div>
          </div>
        </div>

        <div class="bg-slate-700/30 rounded-lg p-3">
          <div class="flex justify-between items-center mb-2">
            <span class="text-xs text-slate-400">太阳方位角</span>
            <span class={getDiffClass(result.comparison.solarAzimuth)}>
              {formatDifference(result.comparison.solarAzimuth)}
            </span>
          </div>
          <div class="flex justify-between text-sm">
            <div>
              <div class="text-xs text-slate-500">理论值</div>
              <div class="font-mono text-slate-200">
                {formatComparisonValue(result.comparison.solarAzimuth)}
              </div>
            </div>
            <div class="text-right">
              <div class="text-xs text-slate-500">反推值</div>
              <div class="font-mono text-slate-200">
                {formatMeasuredValue(result.comparison.solarAzimuth)}
              </div>
            </div>
          </div>
        </div>

        <div class="bg-slate-700/30 rounded-lg p-3">
          <div class="flex justify-between items-center mb-2">
            <span class="text-xs text-slate-400">真太阳时</span>
            <span class={getDiffClass(result.comparison.solarTime)}>
              {formatDifference(result.comparison.solarTime)}
            </span>
          </div>
          <div class="flex justify-between text-sm">
            <div>
              <div class="text-xs text-slate-500">理论值</div>
              <div class="font-mono text-slate-200">
                {formatComparisonValue(result.comparison.solarTime)}
              </div>
            </div>
            <div class="text-right">
              <div class="text-xs text-slate-500">反推值</div>
              <div class="font-mono text-slate-200">
                {formatMeasuredValue(result.comparison.solarTime)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="border-t border-slate-700/50 pt-5">
      <h3 class="font-display text-base text-amber-500 font-semibold mb-3 flex items-center gap-2">
        <AlertCircle class="w-4 h-4" />
        偏差分析
      </h3>
      <div class="grid grid-cols-2 gap-3">
        <div class="bg-slate-700/30 rounded-lg p-3 text-center">
          <div class="text-xs text-slate-400 mb-1">朝向偏差</div>
          <div class={`font-mono text-lg ${
            Math.abs(result.deviation.orientationDeviation) > 5
              ? 'text-red-400'
              : Math.abs(result.deviation.orientationDeviation) > 1
                ? 'text-amber-400'
                : 'text-emerald-400'
          }`}>
            {result.deviation.orientationDeviation >= 0 ? '+' : ''}
            {result.deviation.orientationDeviation.toFixed(1)}°
          </div>
        </div>
        <div class="bg-slate-700/30 rounded-lg p-3 text-center">
          <div class="text-xs text-slate-400 mb-1">倾角偏差</div>
          <div class={`font-mono text-lg ${
            Math.abs(result.deviation.tiltDeviation) > 5
              ? 'text-red-400'
              : Math.abs(result.deviation.tiltDeviation) > 1
                ? 'text-amber-400'
                : 'text-emerald-400'
          }`}>
            {result.deviation.tiltDeviation >= 0 ? '+' : ''}
            {result.deviation.tiltDeviation.toFixed(1)}°
          </div>
        </div>
        <div class="bg-slate-700/30 rounded-lg p-3 text-center">
          <div class="text-xs text-slate-400 mb-1">刻度误差</div>
          <div class={`font-mono text-lg ${
            Math.abs(result.deviation.scaleError) > 5
              ? 'text-red-400'
              : Math.abs(result.deviation.scaleError) > 1
                ? 'text-amber-400'
                : 'text-emerald-400'
          }`}>
            {result.deviation.scaleError >= 0 ? '+' : ''}
            {result.deviation.scaleError.toFixed(1)}%
          </div>
        </div>
        <div class="bg-slate-700/30 rounded-lg p-3 text-center">
          <div class="text-xs text-slate-400 mb-1">时间偏差</div>
          <div class={`font-mono text-lg ${
            Math.abs(result.deviation.timeDeviation) > 10
              ? 'text-red-400'
              : Math.abs(result.deviation.timeDeviation) > 2
                ? 'text-amber-400'
                : 'text-emerald-400'
          }`}>
            {result.deviation.timeDeviation >= 0 ? '+' : ''}
            {result.deviation.timeDeviation.toFixed(1)} 分
          </div>
        </div>
      </div>
    </div>
  </div>
{:else}
  <div class="glass-card p-5 h-full flex items-center justify-center">
    <div class="text-center text-slate-500">
      <Target class="w-12 h-12 mx-auto mb-3 opacity-50" />
      <p class="text-sm">输入实测数据后点击"开始校准"</p>
      <p class="text-xs mt-1">查看偏差分析与校准建议</p>
    </div>
  </div>
{/if}
