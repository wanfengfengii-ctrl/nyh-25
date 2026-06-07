import "clsx";
import { a as sanitize_props, b as spread_props, s as slot, c as ensure_array_like, d as attr_class, f as clsx, e as escape_html, h as attr, i as store_get, u as unsubscribe_stores, j as attr_style, k as stringify } from "../../chunks/index.js";
import { w as writable, i as derived, j as get } from "../../chunks/exports.js";
import { I as Icon, G as Globe, C as Calendar, S as Sun, T as Trending_up, X, B as Bar_chart_3, a as Compass } from "../../chunks/x.js";
import "@sveltejs/kit/internal";
import "../../chunks/utils2.js";
import "@sveltejs/kit/internal/server";
import "../../chunks/root.js";
import "../../chunks/state.svelte.js";
const COMPARE_COLORS = [
  "#f59e0b",
  "#3b82f6",
  "#10b981",
  "#8b5cf6"
];
const KEY_DATES = {
  solstices: [
    { label: "夏至", month: 6, day: 21 },
    { label: "冬至", month: 12, day: 21 }
  ],
  equinoxes: [
    { label: "春分", month: 3, day: 20 },
    { label: "秋分", month: 9, day: 23 }
  ],
  quarterly: [
    { label: "立春", month: 2, day: 4 },
    { label: "立夏", month: 5, day: 5 },
    { label: "立秋", month: 8, day: 7 },
    { label: "立冬", month: 11, day: 7 }
  ]
};
const KEY_DATE_COLORS = {
  solstices: ["#ef4444", "#3b82f6"],
  equinoxes: ["#10b981", "#f59e0b"],
  quarterly: ["#22c55e", "#eab308", "#f97316", "#8b5cf6"]
};
const DEG_TO_RAD$1 = Math.PI / 180;
const RAD_TO_DEG$1 = 180 / Math.PI;
function toRad$1(deg) {
  return deg * DEG_TO_RAD$1;
}
function toDeg$1(rad) {
  return rad * RAD_TO_DEG$1;
}
function getDayOfYear(date) {
  const start = new Date(date.getFullYear(), 0, 0);
  const diff = date.getTime() - start.getTime();
  const oneDay = 1e3 * 60 * 60 * 24;
  return Math.floor(diff / oneDay);
}
function getSolarDeclination(dayOfYear) {
  return -23.45 * Math.cos(toRad$1(360 / 365 * (dayOfYear + 10)));
}
function getEquationOfTime(dayOfYear) {
  const B = toRad$1(360 / 365 * (dayOfYear - 81));
  return 9.87 * Math.sin(2 * B) - 7.53 * Math.cos(B) - 1.5 * Math.sin(B);
}
function getSolarPosition(date, latitude, longitude = 0) {
  const dayOfYear = getDayOfYear(date);
  const declination = getSolarDeclination(dayOfYear);
  const hours = date.getHours() + date.getMinutes() / 60 + date.getSeconds() / 3600;
  const equationOfTime = getEquationOfTime(dayOfYear);
  const solarTime = hours + 4 * longitude / 60 + equationOfTime / 60;
  const hourAngle = (solarTime - 12) * 15;
  const latRad = toRad$1(latitude);
  const decRad = toRad$1(declination);
  const haRad = toRad$1(hourAngle);
  const sinAltitude = Math.sin(latRad) * Math.sin(decRad) + Math.cos(latRad) * Math.cos(decRad) * Math.cos(haRad);
  const altitude = toDeg$1(Math.asin(Math.max(-1, Math.min(1, sinAltitude))));
  const cosAzimuth = (Math.sin(decRad) - Math.sin(latRad) * sinAltitude) / (Math.cos(latRad) * Math.cos(toRad$1(altitude)));
  const azimuth = toDeg$1(Math.acos(Math.max(-1, Math.min(1, cosAzimuth))));
  const finalAzimuth = hourAngle > 0 ? 360 - azimuth : azimuth;
  return {
    altitude,
    azimuth: finalAzimuth,
    declination,
    hourAngle
  };
}
function getSunriseSunset(date, latitude, longitude = 0) {
  const dayOfYear = getDayOfYear(date);
  const declination = getSolarDeclination(dayOfYear);
  const equationOfTime = getEquationOfTime(dayOfYear);
  const latRad = toRad$1(latitude);
  const decRad = toRad$1(declination);
  let cosHourAngle = -Math.tan(latRad) * Math.tan(decRad);
  if (cosHourAngle > 1) {
    return { sunrise: 12, sunset: 12, dayLength: 0 };
  }
  if (cosHourAngle < -1) {
    return { sunrise: 0, sunset: 24, dayLength: 24 };
  }
  const hourAngle = toDeg$1(Math.acos(cosHourAngle));
  const solarNoon = 12 - longitude / 15 - equationOfTime / 60;
  const sunrise = solarNoon - hourAngle / 15;
  const sunset = solarNoon + hourAngle / 15;
  const dayLength = 2 * hourAngle / 15;
  return {
    sunrise: Math.max(0, Math.min(24, sunrise)),
    sunset: Math.max(0, Math.min(24, sunset)),
    dayLength
  };
}
function isSunVisible(date, latitude, longitude = 0) {
  const pos = getSolarPosition(date, latitude, longitude);
  return pos.altitude > 0;
}
function getAltitudeCurve(date, latitude, longitude = 0, steps = 96) {
  const points = [];
  const { sunrise, sunset } = getSunriseSunset(date, latitude, longitude);
  for (let i = 0; i <= steps; i++) {
    const hour = sunrise + (sunset - sunrise) * (i / steps);
    const timeDate = new Date(date);
    timeDate.setHours(Math.floor(hour), hour % 1 * 60, 0, 0);
    const solarPos = getSolarPosition(timeDate, latitude, longitude);
    points.push({
      hour,
      altitude: Math.max(0, solarPos.altitude),
      azimuth: solarPos.azimuth
    });
  }
  return points;
}
function getMaxAltitude(date, latitude, longitude = 0) {
  const dayOfYear = getDayOfYear(date);
  const declination = getSolarDeclination(dayOfYear);
  const latRad = toRad$1(latitude);
  const decRad = toRad$1(declination);
  const sinMaxAlt = Math.sin(latRad) * Math.sin(decRad) + Math.cos(latRad) * Math.cos(decRad);
  return toDeg$1(Math.asin(Math.max(-1, Math.min(1, sinMaxAlt))));
}
function getKeyDate(year, month, day, latitude, longitude = 0) {
  const date = new Date(year, month - 1, day);
  const dateStr = date.toISOString().split("T")[0];
  const { dayLength } = getSunriseSunset(date, latitude, longitude);
  const maxAlt = getMaxAltitude(date, latitude, longitude);
  return { date: dateStr, dayLength, maxAltitude: maxAlt };
}
function getYearlyAnalysisData(date, latitude, longitude = 0) {
  const year = date.getFullYear();
  const summerSolstice = getKeyDate(year, 6, 21, latitude, longitude);
  const winterSolstice = getKeyDate(year, 12, 21, latitude, longitude);
  const springEquinox = getKeyDate(year, 3, 20, latitude, longitude);
  const autumnEquinox = getKeyDate(year, 9, 23, latitude, longitude);
  const quarterly = [
    getKeyDate(year, 2, 4, latitude, longitude),
    getKeyDate(year, 5, 5, latitude, longitude),
    getKeyDate(year, 8, 7, latitude, longitude),
    getKeyDate(year, 11, 7, latitude, longitude)
  ];
  const currentDay = getKeyDate(
    date.getFullYear(),
    date.getMonth() + 1,
    date.getDate(),
    latitude,
    longitude
  );
  return {
    solstices: {
      summer: summerSolstice,
      winter: winterSolstice
    },
    equinoxes: {
      spring: springEquinox,
      autumn: autumnEquinox
    },
    quarterly,
    currentDay
  };
}
const DEG_TO_RAD = Math.PI / 180;
const RAD_TO_DEG = 180 / Math.PI;
function toRad(deg) {
  return deg * DEG_TO_RAD;
}
function toDeg(rad) {
  return rad * RAD_TO_DEG;
}
function getEquatorialShadow(solarPos, gnomonLength, latitude, hour) {
  if (solarPos.altitude <= 0) return null;
  toRad(solarPos.declination);
  toRad(solarPos.hourAngle);
  const x = gnomonLength * Math.tan(toRad(solarPos.hourAngle));
  const y = gnomonLength;
  const length = Math.sqrt(x * x + y * y);
  const angle = toDeg(Math.atan2(x, y));
  return { x, y, length, angle, hour: hour ?? 12 + solarPos.hourAngle / 15 };
}
function getHorizontalShadow(solarPos, latitude, gnomonLength, hour) {
  if (solarPos.altitude <= 0) return null;
  const altRad = toRad(solarPos.altitude);
  const azRad = toRad(solarPos.azimuth);
  const shadowLength = gnomonLength / Math.tan(altRad);
  const x = shadowLength * Math.sin(azRad);
  const y = shadowLength * Math.cos(azRad);
  const length = shadowLength;
  const angle = solarPos.azimuth;
  return { x, y, length, angle, hour: hour ?? 12 + solarPos.hourAngle / 15 };
}
function getVerticalShadow(solarPos, latitude, gnomonLength, hour) {
  if (solarPos.altitude <= 0) return null;
  const altRad = toRad(solarPos.altitude);
  const azRad = toRad(solarPos.azimuth);
  const sinAz = Math.sin(azRad);
  const yWall = gnomonLength / (Math.tan(altRad) * Math.abs(sinAz));
  const xWall = yWall * Math.cos(azRad) / Math.abs(sinAz);
  const length = Math.sqrt(xWall * xWall + yWall * yWall);
  const angle = toDeg(Math.atan2(xWall, yWall));
  return { x: xWall, y: -yWall, length, angle, hour: hour ?? 12 + solarPos.hourAngle / 15 };
}
function getShadow(type, solarPos, latitude, gnomonLength, hour) {
  switch (type) {
    case "equatorial":
      return getEquatorialShadow(solarPos, gnomonLength, latitude, hour);
    case "horizontal":
      return getHorizontalShadow(solarPos, latitude, gnomonLength, hour);
    case "vertical":
      return getVerticalShadow(solarPos, latitude, gnomonLength, hour);
    default:
      return null;
  }
}
function getHourLineAngle(type, hour, latitude) {
  const hourAngle = (hour - 12) * 15;
  switch (type) {
    case "equatorial":
      return hourAngle;
    case "horizontal":
      const latRad = toRad(latitude);
      const haRad = toRad(hourAngle);
      const tanLine = Math.sin(haRad) / (Math.cos(haRad) * Math.sin(latRad) + Math.tan(toRad(23.45)) * Math.cos(latRad));
      return toDeg(Math.atan(tanLine));
    case "vertical":
      const latRad2 = toRad(latitude);
      const haRad2 = toRad(hourAngle);
      const tanLine2 = Math.sin(haRad2) / (Math.cos(haRad2) * Math.cos(latRad2) - Math.tan(toRad(23.45)) * Math.sin(latRad2));
      return toDeg(Math.atan(tanLine2));
    default:
      return hourAngle;
  }
}
function getShadowTrackPoints(type, date, latitude, gnomonLength, steps = 96) {
  const points = [];
  const { sunrise, sunset } = getSunriseSunset(date, latitude, 0);
  for (let i = 0; i <= steps; i++) {
    const hour = sunrise + (sunset - sunrise) * (i / steps);
    const timeDate = new Date(date);
    timeDate.setHours(Math.floor(hour), hour % 1 * 60, 0, 0);
    const solarPos = getSolarPosition(timeDate, latitude, 0);
    const shadow = getShadow(type, solarPos, latitude, gnomonLength, hour);
    if (shadow) {
      points.push(shadow);
    }
  }
  return points;
}
function getHourMarks(type, latitude, gnomonLength) {
  const marks = [];
  for (let hour = 6; hour <= 18; hour++) {
    const angle = getHourLineAngle(type, hour, latitude);
    marks.push({ hour, angle, radius: gnomonLength * 1.5 });
  }
  return marks;
}
function getMaxShadowLength(type, date, latitude, gnomonLength) {
  const track = getShadowTrackPoints(type, date, latitude, gnomonLength, 96);
  if (track.length === 0) return 0;
  return Math.max(...track.map((p) => p.length));
}
function getNoonShadow(type, date, latitude, gnomonLength) {
  const noonDate = new Date(date);
  noonDate.setHours(12, 0, 0, 0);
  const solarPos = getSolarPosition(noonDate, latitude, 0);
  const shadow = getShadow(type, solarPos, latitude, gnomonLength, 12);
  if (!shadow) return null;
  return { angle: shadow.angle, length: shadow.length };
}
const STORAGE_KEY = "sundial-presets";
const MAX_PRESETS = 20;
const MAX_COMPARE_PRESETS = 4;
function loadPresets() {
  if (typeof localStorage === "undefined") return [];
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}
function savePresets(presets) {
  if (typeof localStorage === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(presets));
}
function createInitialState() {
  const now = /* @__PURE__ */ new Date();
  return {
    type: "horizontal",
    latitude: 39.9,
    date: now.toISOString().split("T")[0],
    timeHours: now.getHours() + now.getMinutes() / 60,
    gnomonLength: 1,
    showTrack: true,
    showCurrentPoint: true,
    compareMode: false,
    comparePresetIds: [],
    analysisMode: "single",
    keyDateMode: "single"
  };
}
function createSundialStore() {
  const config = writable(createInitialState());
  const presets = writable([]);
  if (typeof localStorage !== "undefined") {
    presets.set(loadPresets());
  }
  const currentDateTime = derived(config, ($config) => {
    const date = new Date($config.date);
    const hours = Math.floor($config.timeHours);
    const minutes = Math.floor(($config.timeHours - hours) * 60);
    date.setHours(hours, minutes, 0, 0);
    return date;
  });
  const solarPosition = derived([config, currentDateTime], ([$config, $date]) => {
    return getSolarPosition($date, $config.latitude, 0);
  });
  const sunVisible = derived([config, currentDateTime], ([$config, $date]) => {
    return isSunVisible($date, $config.latitude, 0);
  });
  const sunriseSunset = derived([config, currentDateTime], ([$config, $date]) => {
    return getSunriseSunset($date, $config.latitude, 0);
  });
  const altitudeCurve = derived([config, currentDateTime], ([$config, $date]) => {
    return getAltitudeCurve($date, $config.latitude, 0, 96);
  });
  const yearlyAnalysis = derived([config, currentDateTime], ([$config, $date]) => {
    return getYearlyAnalysisData($date, $config.latitude, 0);
  });
  const currentShadow = derived(
    [config, solarPosition, sunVisible],
    ([$config, $solarPos, $visible]) => {
      if (!$visible) return null;
      return getShadow($config.type, $solarPos, $config.latitude, $config.gnomonLength);
    }
  );
  const shadowTrack = derived(
    [config, currentDateTime],
    ([$config, $date]) => {
      return getShadowTrackPoints(
        $config.type,
        $date,
        $config.latitude,
        $config.gnomonLength,
        120
      );
    }
  );
  const hourMarks = derived([config], ([$config]) => {
    return getHourMarks($config.type, $config.latitude, $config.gnomonLength);
  });
  const comparePresets = derived([config, presets], ([$config, $presets]) => {
    if (!$config.compareMode || $config.comparePresetIds.length === 0) return [];
    return $config.comparePresetIds.map((id) => $presets.find((p) => p.id === id)).filter((p) => p !== void 0);
  });
  const comparePresetsData = derived([comparePresets], ([$comparePresets]) => {
    if ($comparePresets.length === 0) return [];
    return $comparePresets.map((preset, index) => {
      const date = new Date(preset.date);
      const hours = Math.floor(preset.timeHours);
      const minutes = Math.floor((preset.timeHours - hours) * 60);
      date.setHours(hours, minutes, 0, 0);
      const solarPos = getSolarPosition(date, preset.latitude, 0);
      const visible = isSunVisible(date, preset.latitude, 0);
      const shadow = visible ? getShadow(preset.type, solarPos, preset.latitude, preset.gnomonLength || 1) : null;
      const track = getShadowTrackPoints(
        preset.type,
        date,
        preset.latitude,
        preset.gnomonLength || 1,
        120
      );
      const ss = getSunriseSunset(date, preset.latitude, 0);
      const maxLen = getMaxShadowLength(
        preset.type,
        date,
        preset.latitude,
        preset.gnomonLength || 1
      );
      const noonShadow2 = getNoonShadow(
        preset.type,
        date,
        preset.latitude,
        preset.gnomonLength || 1
      );
      const altCurve = getAltitudeCurve(date, preset.latitude, 0, 96);
      return {
        preset,
        color: COMPARE_COLORS[index % COMPARE_COLORS.length],
        shadow,
        shadowTrack: track,
        sunriseSunset: ss,
        solarPosition: solarPos,
        sunVisible: visible,
        maxShadowLength: maxLen,
        noonShadowAngle: noonShadow2?.angle ?? 0,
        noonShadowLength: noonShadow2?.length ?? 0,
        altitudeCurve: altCurve
      };
    });
  });
  const maxShadowLength = derived([config, currentDateTime], ([$config, $date]) => {
    return getMaxShadowLength(
      $config.type,
      $date,
      $config.latitude,
      $config.gnomonLength
    );
  });
  const noonShadow = derived([config, currentDateTime], ([$config, $date]) => {
    return getNoonShadow(
      $config.type,
      $date,
      $config.latitude,
      $config.gnomonLength
    );
  });
  const keyDateTracks = derived([config, currentDateTime], ([$config, $date]) => {
    if ($config.keyDateMode === "single") return [];
    const year = $date.getFullYear();
    const dates = KEY_DATES[$config.keyDateMode];
    const colors = KEY_DATE_COLORS[$config.keyDateMode];
    return dates.map((d, i) => {
      const date = new Date(year, d.month - 1, d.day);
      const dateStr = date.toISOString().split("T")[0];
      const track = getShadowTrackPoints(
        $config.type,
        date,
        $config.latitude,
        $config.gnomonLength,
        120
      );
      const altCurve = getAltitudeCurve(date, $config.latitude, 0, 96);
      const ss = getSunriseSunset(date, $config.latitude, 0);
      const maxAlt = getMaxAltitude(date, $config.latitude, 0);
      return {
        label: d.label,
        date: dateStr,
        color: colors[i],
        shadowTrack: track,
        altitudeCurve: altCurve,
        sunriseSunset: ss,
        maxAltitude: maxAlt
      };
    });
  });
  function setType(type) {
    config.update((s) => ({ ...s, type }));
  }
  function setLatitude(lat) {
    const clamped = Math.max(-90, Math.min(90, lat));
    config.update((s) => ({ ...s, latitude: clamped }));
  }
  function setDate(date) {
    config.update((s) => ({ ...s, date }));
  }
  function setTimeHours(hours) {
    const clamped = Math.max(0, Math.min(24, hours));
    config.update((s) => ({ ...s, timeHours: clamped }));
  }
  function setGnomonLength(length) {
    config.update((s) => ({ ...s, gnomonLength: Math.max(0.1, length) }));
  }
  function setShowTrack(show) {
    config.update((s) => ({ ...s, showTrack: show }));
  }
  function setShowCurrentPoint(show) {
    config.update((s) => ({ ...s, showCurrentPoint: show }));
  }
  function setCompareMode(enabled) {
    config.update((s) => ({
      ...s,
      compareMode: enabled,
      comparePresetIds: enabled ? s.comparePresetIds : []
    }));
  }
  function toggleComparePreset(id) {
    const $config = get(config);
    const isSelected = $config.comparePresetIds.includes(id);
    if (isSelected) {
      config.update((s) => ({
        ...s,
        comparePresetIds: s.comparePresetIds.filter((pid) => pid !== id)
      }));
    } else {
      if ($config.comparePresetIds.length >= MAX_COMPARE_PRESETS) {
        return false;
      }
      config.update((s) => ({
        ...s,
        comparePresetIds: [...s.comparePresetIds, id],
        compareMode: true
      }));
    }
    return true;
  }
  function setAnalysisMode(mode) {
    config.update((s) => ({ ...s, analysisMode: mode }));
  }
  function setKeyDateMode(mode) {
    config.update((s) => ({ ...s, keyDateMode: mode }));
  }
  function savePreset(name) {
    const $config = get(config);
    const $presets = get(presets);
    if ($presets.length >= MAX_PRESETS) {
      return false;
    }
    const newPreset = {
      id: Date.now().toString(),
      name: name || `方案 ${$presets.length + 1}`,
      type: $config.type,
      latitude: $config.latitude,
      date: $config.date,
      timeHours: $config.timeHours,
      gnomonLength: $config.gnomonLength,
      createdAt: Date.now()
    };
    const updated = [...$presets, newPreset];
    presets.set(updated);
    savePresets(updated);
    return true;
  }
  function loadPreset(id) {
    const $presets = get(presets);
    const preset = $presets.find((p) => p.id === id);
    if (preset) {
      config.update((s) => ({
        ...s,
        type: preset.type,
        latitude: preset.latitude,
        date: preset.date,
        timeHours: preset.timeHours,
        gnomonLength: preset.gnomonLength
      }));
    }
  }
  function deletePreset(id) {
    const $presets = get(presets);
    const updated = $presets.filter((p) => p.id !== id);
    presets.set(updated);
    savePresets(updated);
    config.update((s) => ({
      ...s,
      comparePresetIds: s.comparePresetIds.filter((pid) => pid !== id)
    }));
  }
  function resetToNow() {
    const now = /* @__PURE__ */ new Date();
    config.update((s) => ({
      ...s,
      date: now.toISOString().split("T")[0],
      timeHours: now.getHours() + now.getMinutes() / 60
    }));
  }
  return {
    config,
    presets,
    currentDateTime,
    solarPosition,
    sunVisible,
    sunriseSunset,
    altitudeCurve,
    yearlyAnalysis,
    currentShadow,
    shadowTrack,
    hourMarks,
    maxShadowLength,
    noonShadow,
    keyDateTracks,
    comparePresets,
    comparePresetsData,
    setType,
    setLatitude,
    setDate,
    setTimeHours,
    setGnomonLength,
    setShowTrack,
    setShowCurrentPoint,
    setCompareMode,
    toggleComparePreset,
    setAnalysisMode,
    setKeyDateMode,
    savePreset,
    loadPreset,
    deletePreset,
    resetToNow
  };
}
const sundialStore = createSundialStore();
function Activity($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v0.344.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const iconNode = [["path", { "d": "M22 12h-4l-3 9L9 3l-3 9H2" }]];
  Icon($$renderer, spread_props([
    { name: "activity" },
    $$sanitized_props,
    {
      /**
       * @component @name Activity
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMjIgMTJoLTRsLTMgOUw5IDNsLTMgOUgyIiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/activity
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      iconNode,
      children: ($$renderer2) => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function Check($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v0.344.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const iconNode = [["path", { "d": "M20 6 9 17l-5-5" }]];
  Icon($$renderer, spread_props([
    { name: "check" },
    $$sanitized_props,
    {
      /**
       * @component @name Check
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/check
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      iconNode,
      children: ($$renderer2) => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function Circle($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v0.344.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const iconNode = [["circle", { "cx": "12", "cy": "12", "r": "10" }]];
  Icon($$renderer, spread_props([
    { name: "circle" },
    $$sanitized_props,
    {
      /**
       * @component @name Circle
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/circle
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      iconNode,
      children: ($$renderer2) => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function Clock($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v0.344.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const iconNode = [
    ["circle", { "cx": "12", "cy": "12", "r": "10" }],
    ["polyline", { "points": "12 6 12 12 16 14" }]
  ];
  Icon($$renderer, spread_props([
    { name: "clock" },
    $$sanitized_props,
    {
      /**
       * @component @name Clock
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIgLz4KICA8cG9seWxpbmUgcG9pbnRzPSIxMiA2IDEyIDEyIDE2IDE0IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/clock
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      iconNode,
      children: ($$renderer2) => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function Copy($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v0.344.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const iconNode = [
    [
      "rect",
      {
        "width": "14",
        "height": "14",
        "x": "8",
        "y": "8",
        "rx": "2",
        "ry": "2"
      }
    ],
    [
      "path",
      {
        "d": "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"
      }
    ]
  ];
  Icon($$renderer, spread_props([
    { name: "copy" },
    $$sanitized_props,
    {
      /**
       * @component @name Copy
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cmVjdCB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIHg9IjgiIHk9IjgiIHJ4PSIyIiByeT0iMiIgLz4KICA8cGF0aCBkPSJNNCAxNmMtMS4xIDAtMi0uOS0yLTJWNGMwLTEuMS45LTIgMi0yaDEwYzEuMSAwIDIgLjkgMiAyIiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/copy
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      iconNode,
      children: ($$renderer2) => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function Eye($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v0.344.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const iconNode = [
    [
      "path",
      { "d": "M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" }
    ],
    ["circle", { "cx": "12", "cy": "12", "r": "3" }]
  ];
  Icon($$renderer, spread_props([
    { name: "eye" },
    $$sanitized_props,
    {
      /**
       * @component @name Eye
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMiAxMnMzLTcgMTAtNyAxMCA3IDEwIDctMyA3LTEwIDctMTAtNy0xMC03WiIgLz4KICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIzIiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/eye
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      iconNode,
      children: ($$renderer2) => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function Flower_2($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v0.344.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const iconNode = [
    [
      "path",
      {
        "d": "M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1"
      }
    ],
    ["circle", { "cx": "12", "cy": "8", "r": "2" }],
    ["path", { "d": "M12 10v12" }],
    [
      "path",
      { "d": "M12 22c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5Z" }
    ],
    [
      "path",
      { "d": "M12 22c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5Z" }
    ]
  ];
  Icon($$renderer, spread_props([
    { name: "flower-2" },
    $$sanitized_props,
    {
      /**
       * @component @name Flower2
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTIgNWEzIDMgMCAxIDEgMyAzbS0zLTNhMyAzIDAgMSAwLTMgM20zLTN2MU05IDhhMyAzIDAgMSAwIDMgM005IDhoMW01IDBhMyAzIDAgMSAxLTMgM20zLTNoLTFtLTIgM3YtMSIgLz4KICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjgiIHI9IjIiIC8+CiAgPHBhdGggZD0iTTEyIDEwdjEyIiAvPgogIDxwYXRoIGQ9Ik0xMiAyMmM0LjIgMCA3LTEuNjY3IDctNS00LjIgMC03IDEuNjY3LTcgNVoiIC8+CiAgPHBhdGggZD0iTTEyIDIyYy00LjIgMC03LTEuNjY3LTctNSA0LjIgMCA3IDEuNjY3IDcgNVoiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/flower-2
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      iconNode,
      children: ($$renderer2) => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function Layers($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v0.344.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const iconNode = [
    [
      "path",
      {
        "d": "m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"
      }
    ],
    [
      "path",
      { "d": "m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" }
    ],
    [
      "path",
      { "d": "m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" }
    ]
  ];
  Icon($$renderer, spread_props([
    { name: "layers" },
    $$sanitized_props,
    {
      /**
       * @component @name Layers
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJtMTIuODMgMi4xOGEyIDIgMCAwIDAtMS42NiAwTDIuNiA2LjA4YTEgMSAwIDAgMCAwIDEuODNsOC41OCAzLjkxYTIgMiAwIDAgMCAxLjY2IDBsOC41OC0zLjlhMSAxIDAgMCAwIDAtMS44M1oiIC8+CiAgPHBhdGggZD0ibTIyIDE3LjY1LTkuMTcgNC4xNmEyIDIgMCAwIDEtMS42NiAwTDIgMTcuNjUiIC8+CiAgPHBhdGggZD0ibTIyIDEyLjY1LTkuMTcgNC4xNmEyIDIgMCAwIDEtMS42NiAwTDIgMTIuNjUiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/layers
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      iconNode,
      children: ($$renderer2) => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function Leaf($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v0.344.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const iconNode = [
    [
      "path",
      {
        "d": "M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"
      }
    ],
    [
      "path",
      { "d": "M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" }
    ]
  ];
  Icon($$renderer, spread_props([
    { name: "leaf" },
    $$sanitized_props,
    {
      /**
       * @component @name Leaf
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTEgMjBBNyA3IDAgMCAxIDkuOCA2LjFDMTUuNSA1IDE3IDQuNDggMTkgMmMxIDIgMiA0LjE4IDIgOCAwIDUuNS00Ljc4IDEwLTEwIDEwWiIgLz4KICA8cGF0aCBkPSJNMiAyMWMwLTMgMS44NS01LjM2IDUuMDgtNkM5LjUgMTQuNTIgMTIgMTMgMTMgMTIiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/leaf
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      iconNode,
      children: ($$renderer2) => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function Save($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v0.344.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const iconNode = [
    [
      "path",
      {
        "d": "M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"
      }
    ],
    ["polyline", { "points": "17 21 17 13 7 13 7 21" }],
    ["polyline", { "points": "7 3 7 8 15 8" }]
  ];
  Icon($$renderer, spread_props([
    { name: "save" },
    $$sanitized_props,
    {
      /**
       * @component @name Save
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTkgMjFINWEyIDIgMCAwIDEtMi0yVjVhMiAyIDAgMCAxIDItMmgxMWw1IDV2MTFhMiAyIDAgMCAxLTIgMnoiIC8+CiAgPHBvbHlsaW5lIHBvaW50cz0iMTcgMjEgMTcgMTMgNyAxMyA3IDIxIiAvPgogIDxwb2x5bGluZSBwb2ludHM9IjcgMyA3IDggMTUgOCIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/save
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      iconNode,
      children: ($$renderer2) => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function Snowflake($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v0.344.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const iconNode = [
    ["line", { "x1": "2", "x2": "22", "y1": "12", "y2": "12" }],
    ["line", { "x1": "12", "x2": "12", "y1": "2", "y2": "22" }],
    ["path", { "d": "m20 16-4-4 4-4" }],
    ["path", { "d": "m4 8 4 4-4 4" }],
    ["path", { "d": "m16 4-4 4-4-4" }],
    ["path", { "d": "m8 20 4-4 4 4" }]
  ];
  Icon($$renderer, spread_props([
    { name: "snowflake" },
    $$sanitized_props,
    {
      /**
       * @component @name Snowflake
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8bGluZSB4MT0iMiIgeDI9IjIyIiB5MT0iMTIiIHkyPSIxMiIgLz4KICA8bGluZSB4MT0iMTIiIHgyPSIxMiIgeTE9IjIiIHkyPSIyMiIgLz4KICA8cGF0aCBkPSJtMjAgMTYtNC00IDQtNCIgLz4KICA8cGF0aCBkPSJtNCA4IDQgNC00IDQiIC8+CiAgPHBhdGggZD0ibTE2IDQtNCA0LTQtNCIgLz4KICA8cGF0aCBkPSJtOCAyMCA0LTQgNCA0IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/snowflake
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      iconNode,
      children: ($$renderer2) => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function Sunrise($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v0.344.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const iconNode = [
    ["path", { "d": "M12 2v8" }],
    ["path", { "d": "m4.93 10.93 1.41 1.41" }],
    ["path", { "d": "M2 18h2" }],
    ["path", { "d": "M20 18h2" }],
    ["path", { "d": "m19.07 10.93-1.41 1.41" }],
    ["path", { "d": "M22 22H2" }],
    ["path", { "d": "m8 6 4-4 4 4" }],
    ["path", { "d": "M16 18a4 4 0 0 0-8 0" }]
  ];
  Icon($$renderer, spread_props([
    { name: "sunrise" },
    $$sanitized_props,
    {
      /**
       * @component @name Sunrise
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTIgMnY4IiAvPgogIDxwYXRoIGQ9Im00LjkzIDEwLjkzIDEuNDEgMS40MSIgLz4KICA8cGF0aCBkPSJNMiAxOGgyIiAvPgogIDxwYXRoIGQ9Ik0yMCAxOGgyIiAvPgogIDxwYXRoIGQ9Im0xOS4wNyAxMC45My0xLjQxIDEuNDEiIC8+CiAgPHBhdGggZD0iTTIyIDIySDIiIC8+CiAgPHBhdGggZD0ibTggNiA0LTQgNCA0IiAvPgogIDxwYXRoIGQ9Ik0xNiAxOGE0IDQgMCAwIDAtOCAwIiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/sunrise
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      iconNode,
      children: ($$renderer2) => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function Sunset($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v0.344.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const iconNode = [
    ["path", { "d": "M12 10V2" }],
    ["path", { "d": "m4.93 10.93 1.41 1.41" }],
    ["path", { "d": "M2 18h2" }],
    ["path", { "d": "M20 18h2" }],
    ["path", { "d": "m19.07 10.93-1.41 1.41" }],
    ["path", { "d": "M22 22H2" }],
    ["path", { "d": "m16 6-4 4-4-4" }],
    ["path", { "d": "M16 18a4 4 0 0 0-8 0" }]
  ];
  Icon($$renderer, spread_props([
    { name: "sunset" },
    $$sanitized_props,
    {
      /**
       * @component @name Sunset
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTIgMTBWMiIgLz4KICA8cGF0aCBkPSJtNC45MyAxMC45MyAxLjQxIDEuNDEiIC8+CiAgPHBhdGggZD0iTTIgMThoMiIgLz4KICA8cGF0aCBkPSJNMjAgMThoMiIgLz4KICA8cGF0aCBkPSJtMTkuMDcgMTAuOTMtMS40MSAxLjQxIiAvPgogIDxwYXRoIGQ9Ik0yMiAyMkgyIiAvPgogIDxwYXRoIGQ9Im0xNiA2LTQgNC00LTQiIC8+CiAgPHBhdGggZD0iTTE2IDE4YTQgNCAwIDAgMC04IDAiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/sunset
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      iconNode,
      children: ($$renderer2) => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function Trash_2($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v0.344.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const iconNode = [
    ["path", { "d": "M3 6h18" }],
    ["path", { "d": "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" }],
    ["path", { "d": "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" }],
    ["line", { "x1": "10", "x2": "10", "y1": "11", "y2": "17" }],
    ["line", { "x1": "14", "x2": "14", "y1": "11", "y2": "17" }]
  ];
  Icon($$renderer, spread_props([
    { name: "trash-2" },
    $$sanitized_props,
    {
      /**
       * @component @name Trash2
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMyA2aDE4IiAvPgogIDxwYXRoIGQ9Ik0xOSA2djE0YzAgMS0xIDItMiAySDdjLTEgMC0yLTEtMi0yVjYiIC8+CiAgPHBhdGggZD0iTTggNlY0YzAtMSAxLTIgMi0yaDRjMSAwIDIgMSAyIDJ2MiIgLz4KICA8bGluZSB4MT0iMTAiIHgyPSIxMCIgeTE9IjExIiB5Mj0iMTciIC8+CiAgPGxpbmUgeDE9IjE0IiB4Mj0iMTQiIHkxPSIxMSIgeTI9IjE3IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/trash-2
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      iconNode,
      children: ($$renderer2) => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function ControlPanel($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    const {
      config,
      solarPosition,
      sunVisible,
      sunriseSunset
    } = sundialStore;
    const sundialTypes = [
      { value: "equatorial", label: "赤道式", desc: "盘面平行于赤道面" },
      { value: "horizontal", label: "水平式", desc: "盘面水平放置" },
      { value: "vertical", label: "垂直式", desc: "盘面垂直南向" }
    ];
    function formatTime(hours) {
      const h = Math.floor(hours);
      const m = Math.floor((hours - h) * 60);
      return `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}`;
    }
    function formatTimeFromHours(hours) {
      if (hours < 0 || hours > 24) return "--:--";
      const h = Math.floor(hours);
      const m = Math.floor((hours - h) * 60);
      return `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}`;
    }
    function getTypeBtnClass(typeValue) {
      const currentType = get(config).type;
      const base = "w-full text-left px-3 py-2 rounded-lg transition-all duration-200 border ";
      if (currentType === typeValue) {
        return base + "bg-amber-500/20 border-amber-500/50";
      }
      return base + "bg-slate-700/30 border-slate-600/30 hover:bg-slate-700/50";
    }
    function getSunValClass() {
      const visible = get(sunVisible);
      return "font-mono text-slate-200 " + (visible ? "" : "line-through");
    }
    $$renderer2.push(`<div class="glass-card p-5 space-y-5 h-full overflow-y-auto"><div><h3 class="font-display text-base text-amber-500 font-semibold mb-3 flex items-center gap-2">`);
    Globe($$renderer2, { class: "w-4 h-4" });
    $$renderer2.push(`<!----> 日晷类型</h3> <div class="space-y-2"><!--[-->`);
    const each_array = ensure_array_like(sundialTypes);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let type = each_array[$$index];
      $$renderer2.push(`<button${attr_class(clsx(getTypeBtnClass(type.value)))}><div class="font-medium text-sm text-slate-100">${escape_html(type.label)}</div> <div class="text-xs text-slate-400">${escape_html(type.desc)}</div></button>`);
    }
    $$renderer2.push(`<!--]--></div></div> <div class="border-t border-slate-700/50 pt-5"><h3 class="font-display text-base text-amber-500 font-semibold mb-3 flex items-center gap-2">`);
    Globe($$renderer2, { class: "w-4 h-4" });
    $$renderer2.push(`<!----> 纬度设置</h3> <div class="space-y-3"><div class="flex items-center gap-3"><input type="range" min="-90" max="90" step="0.1"${attr("value", store_get($$store_subs ??= {}, "$config", config).latitude)} class="flex-1 accent-amber-500"/> <input type="number" min="-90" max="90" step="0.1"${attr("value", store_get($$store_subs ??= {}, "$config", config).latitude.toFixed(1))} class="w-20 px-2 py-1 bg-slate-700/50 border border-slate-600/50 rounded text-sm text-center focus:outline-none focus:border-amber-500/50"/></div> <div class="flex justify-between text-xs text-slate-500"><span>-90° 南极</span> <span>0° 赤道</span> <span>90° 北极</span></div></div></div> <div class="border-t border-slate-700/50 pt-5"><h3 class="font-display text-base text-amber-500 font-semibold mb-3 flex items-center gap-2">`);
    Calendar($$renderer2, { class: "w-4 h-4" });
    $$renderer2.push(`<!----> 日期</h3> <input type="date"${attr("value", store_get($$store_subs ??= {}, "$config", config).date)} class="w-full px-3 py-2 bg-slate-700/50 border border-slate-600/50 rounded-lg text-sm focus:outline-none focus:border-amber-500/50 text-slate-100"/></div> <div class="border-t border-slate-700/50 pt-5"><div class="flex items-center justify-between mb-3"><h3 class="font-display text-base text-amber-500 font-semibold flex items-center gap-2">`);
    Clock($$renderer2, { class: "w-4 h-4" });
    $$renderer2.push(`<!----> 时间</h3> <span class="text-2xl font-mono text-slate-100">${escape_html(formatTime(store_get($$store_subs ??= {}, "$config", config).timeHours))}</span></div> <input type="range" min="0" max="24" step="0.05"${attr("value", store_get($$store_subs ??= {}, "$config", config).timeHours)} class="w-full accent-amber-500"/> <div class="flex justify-between text-xs text-slate-500 mt-1"><span>00:00</span> <span>06:00</span> <span>12:00</span> <span>18:00</span> <span>24:00</span></div> <button class="w-full mt-3 px-3 py-2 bg-slate-700/50 hover:bg-slate-600/50 rounded-lg text-sm border border-slate-600/50 transition-colors">重置为当前时间</button></div> <div class="border-t border-slate-700/50 pt-5"><h3 class="font-display text-base text-amber-500 font-semibold mb-3 flex items-center gap-2">`);
    Sun($$renderer2, { class: "w-4 h-4" });
    $$renderer2.push(`<!----> 太阳位置</h3> <div class="space-y-2 text-sm"><div class="flex justify-between items-center"><span class="text-slate-400">高度角</span> <span${attr_class(clsx(getSunValClass()))}>${escape_html(store_get($$store_subs ??= {}, "$solarPosition", solarPosition).altitude.toFixed(1))}°</span></div> <div class="flex justify-between items-center"><span class="text-slate-400">方位角</span> <span${attr_class(clsx(getSunValClass()))}>${escape_html(store_get($$store_subs ??= {}, "$solarPosition", solarPosition).azimuth.toFixed(1))}°</span></div> <div class="flex justify-between items-center"><span class="text-slate-400">赤纬角</span> <span class="font-mono text-slate-200">${escape_html(store_get($$store_subs ??= {}, "$solarPosition", solarPosition).declination.toFixed(1))}°</span></div> `);
    if (!store_get($$store_subs ??= {}, "$sunVisible", sunVisible)) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<div class="mt-2 px-3 py-2 bg-red-900/30 border border-red-700/30 rounded-lg text-red-400 text-xs">太阳位于地平线以下，无法显示影子</div>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--></div></div> <div class="border-t border-slate-700/50 pt-5"><h3 class="font-display text-base text-amber-500 font-semibold mb-3">日出日落</h3> <div class="grid grid-cols-2 gap-3"><div class="bg-slate-700/30 rounded-lg p-3 text-center">`);
    Sunrise($$renderer2, { class: "w-5 h-5 mx-auto text-orange-400 mb-1" });
    $$renderer2.push(`<!----> <div class="text-xs text-slate-400">日出</div> <div class="font-mono text-sm text-slate-200">${escape_html(formatTimeFromHours(store_get($$store_subs ??= {}, "$sunriseSunset", sunriseSunset).sunrise))}</div></div> <div class="bg-slate-700/30 rounded-lg p-3 text-center">`);
    Sunset($$renderer2, { class: "w-5 h-5 mx-auto text-orange-500 mb-1" });
    $$renderer2.push(`<!----> <div class="text-xs text-slate-400">日落</div> <div class="font-mono text-sm text-slate-200">${escape_html(formatTimeFromHours(store_get($$store_subs ??= {}, "$sunriseSunset", sunriseSunset).sunset))}</div></div></div> <div class="mt-3 text-center text-xs text-slate-400">日照时长: ${escape_html(store_get($$store_subs ??= {}, "$sunriseSunset", sunriseSunset).dayLength.toFixed(1))} 小时</div></div></div>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function SundialScene($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    const {
      config,
      sunVisible,
      comparePresetsData
    } = sundialStore;
    $$renderer2.push(`<div class="w-full h-full relative">`);
    if (!store_get($$store_subs ??= {}, "$sunVisible", sunVisible)) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<div class="absolute top-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-slate-800/80 backdrop-blur-sm rounded-lg border border-slate-600/50 text-sm text-slate-300 z-10">太阳位于地平线以下</div>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--> `);
    if (store_get($$store_subs ??= {}, "$config", config).compareMode && store_get($$store_subs ??= {}, "$comparePresetsData", comparePresetsData).length > 0) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<div class="absolute top-4 right-4 flex flex-col gap-1 z-10"><!--[-->`);
      const each_array = ensure_array_like(store_get($$store_subs ??= {}, "$comparePresetsData", comparePresetsData));
      for (let index = 0, $$length = each_array.length; index < $$length; index++) {
        let data = each_array[index];
        $$renderer2.push(`<div class="px-3 py-1.5 backdrop-blur-sm rounded-lg border text-xs flex items-center gap-2"${attr_style(`background-color: ${stringify(data.color)}20; border-color: ${stringify(data.color)}60; color: ${stringify(data.color)}`)}><span class="w-2 h-2 rounded-full"${attr_style(`background-color: ${stringify(data.color)}`)}></span> ${escape_html(data.preset.name)}</div>`);
      }
      $$renderer2.push(`<!--]--></div>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--> <div class="absolute bottom-4 left-4 text-xs text-slate-500 z-10">拖拽旋转 · 滚轮缩放</div></div>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function ShadowTrack($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    const {
      config,
      shadowTrack,
      currentShadow,
      sunVisible,
      comparePresetsData,
      keyDateTracks
    } = sundialStore;
    const svgSize = 280;
    const padding = 24;
    const viewSize = svgSize - padding * 2;
    const centerX = svgSize / 2;
    const centerY = svgSize / 2;
    function formatTime(hours) {
      const h = Math.floor(hours);
      const m = Math.floor((hours - h) * 60);
      return `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}`;
    }
    function getTrackScale() {
      const track = get(shadowTrack);
      const compData = get(comparePresetsData);
      const kdData = get(keyDateTracks);
      const allTracks = [...track || []];
      for (const d of compData) {
        allTracks.push(...d.shadowTrack);
      }
      for (const d of kdData) {
        allTracks.push(...d.shadowTrack);
      }
      if (!allTracks || allTracks.length === 0) return 0.05;
      const maxX = Math.max(...allTracks.map((p) => Math.abs(p.x)));
      const maxY = Math.max(...allTracks.map((p) => Math.abs(p.y)));
      const maxVal = Math.max(maxX, maxY) || 1;
      return viewSize / 2 / maxVal * 0.9;
    }
    function getTrackPath(track, scale) {
      if (!track || track.length === 0) return "";
      return track.map((p, i) => {
        const x = centerX + p.x * scale;
        const y = centerY + p.y * scale;
        return (i === 0 ? "M" : "L") + x.toFixed(2) + " " + y.toFixed(2);
      }).join(" ");
    }
    function getCurrentPos(shadow, scale) {
      const visible = get(sunVisible);
      if (!visible || !shadow) {
        return { x: centerX, y: centerY };
      }
      return { x: centerX + shadow.x * scale, y: centerY + shadow.y * scale };
    }
    function getShadowLength(shadow) {
      const visible = get(sunVisible);
      if (!visible || !shadow) return "--";
      return shadow.length.toFixed(2);
    }
    function getShadowAngle(shadow) {
      const visible = get(sunVisible);
      if (!visible || !shadow) return "--";
      return shadow.angle.toFixed(1) + "°";
    }
    const compassLabels = [
      { x: centerX, y: padding - 4, label: "N", align: "middle" },
      {
        x: centerX,
        y: svgSize - padding + 10,
        label: "S",
        align: "middle"
      },
      { x: padding - 8, y: centerY + 4, label: "W", align: "end" },
      {
        x: svgSize - padding + 8,
        y: centerY + 4,
        label: "E",
        align: "start"
      }
    ];
    $$renderer2.push(`<div class="glass-card p-5"><div class="flex items-center justify-between mb-4"><h3 class="font-display text-base text-amber-500 font-semibold flex items-center gap-2">`);
    Activity($$renderer2, { class: "w-4 h-4" });
    $$renderer2.push(`<!----> 影子轨迹</h3> <div class="flex gap-1"><button${attr_class(`px-2 py-1 text-xs rounded-md transition-colors flex items-center gap-1 ${store_get($$store_subs ??= {}, "$config", config).showTrack ? "bg-amber-500/20 text-amber-500" : "bg-slate-700/30 text-slate-400"}`)} title="显示/隐藏轨迹线">`);
    Eye($$renderer2, { class: "w-3 h-3" });
    $$renderer2.push(`<!----> 轨迹</button> <button${attr_class(`px-2 py-1 text-xs rounded-md transition-colors flex items-center gap-1 ${store_get($$store_subs ??= {}, "$config", config).showCurrentPoint ? "bg-red-500/20 text-red-400" : "bg-slate-700/30 text-slate-400"}`)} title="显示/隐藏当前位置">`);
    Circle($$renderer2, { class: "w-3 h-3" });
    $$renderer2.push(`<!----> 当前</button></div></div> <div class="flex gap-1 mb-3"><button${attr_class(`flex-1 px-3 py-1.5 text-xs rounded-md transition-colors flex items-center justify-center gap-1 ${"bg-amber-500/20 text-amber-500"}`)}>`);
    Activity($$renderer2, { class: "w-3 h-3" });
    $$renderer2.push(`<!----> 轨迹视图</button> <button${attr_class(`flex-1 px-3 py-1.5 text-xs rounded-md transition-colors flex items-center justify-center gap-1 ${"bg-slate-700/30 text-slate-400 hover:bg-slate-700/50"}`)}>`);
    Trending_up($$renderer2, { class: "w-3 h-3" });
    $$renderer2.push(`<!----> 高度曲线</button></div> `);
    {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<div class="flex justify-center"><svg${attr("width", svgSize)}${attr("height", svgSize)} class="bg-slate-900/50 rounded-lg border border-slate-700/50"><defs><radialGradient id="trackGlow" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#f59e0b" stop-opacity="0.3"></stop><stop offset="100%" stop-color="#f59e0b" stop-opacity="0"></stop></radialGradient><!--[-->`);
      const each_array = ensure_array_like(COMPARE_COLORS);
      for (let i = 0, $$length = each_array.length; i < $$length; i++) {
        let color = each_array[i];
        $$renderer2.push(`<radialGradient${attr("id", `compareGlow${stringify(i)}`)} cx="50%" cy="50%" r="50%"><stop offset="0%"${attr("stop-color", color)} stop-opacity="0.3"></stop><stop offset="100%"${attr("stop-color", color)} stop-opacity="0"></stop></radialGradient><filter${attr("id", `compareFilter${stringify(i)}`)}><feGaussianBlur stdDeviation="2" result="coloredBlur"></feGaussianBlur><feMerge><feMergeNode in="coloredBlur"></feMergeNode><feMergeNode in="SourceGraphic"></feMergeNode></feMerge></filter>`);
      }
      $$renderer2.push(`<!--]--><filter id="glow"><feGaussianBlur stdDeviation="2" result="coloredBlur"></feGaussianBlur><feMerge><feMergeNode in="coloredBlur"></feMergeNode><feMergeNode in="SourceGraphic"></feMergeNode></feMerge></filter></defs><circle${attr("cx", centerX)}${attr("cy", centerY)}${attr("r", viewSize / 2 - 5)} fill="none" stroke="#334155" stroke-width="1" stroke-dasharray="4,4"></circle><circle${attr("cx", centerX)}${attr("cy", centerY)}${attr("r", viewSize / 4)} fill="none" stroke="#334155" stroke-width="1" stroke-dasharray="2,4"></circle><line${attr("x1", centerX)}${attr("y1", padding)}${attr("x2", centerX)}${attr("y2", svgSize - padding)} stroke="#334155" stroke-width="1"></line><line${attr("x1", padding)}${attr("y1", centerY)}${attr("x2", svgSize - padding)}${attr("y2", centerY)} stroke="#334155" stroke-width="1"></line><!--[-->`);
      const each_array_1 = ensure_array_like(compassLabels);
      for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
        let label = each_array_1[$$index_1];
        $$renderer2.push(`<text${attr("x", label.x)}${attr("y", label.y)}${attr("text-anchor", label.align)} fill="#64748b" font-size="10" font-family="Inter, sans-serif">${escape_html(label.label)}</text>`);
      }
      $$renderer2.push(`<!--]-->`);
      if (store_get($$store_subs ??= {}, "$config", config).compareMode && store_get($$store_subs ??= {}, "$comparePresetsData", comparePresetsData).length > 0 && store_get($$store_subs ??= {}, "$config", config).showTrack) {
        $$renderer2.push("<!--[0-->");
        $$renderer2.push(`<!--[-->`);
        const each_array_2 = ensure_array_like(store_get($$store_subs ??= {}, "$comparePresetsData", comparePresetsData));
        for (let index = 0, $$length = each_array_2.length; index < $$length; index++) {
          let data = each_array_2[index];
          if (data.shadowTrack && data.shadowTrack.length > 0) {
            $$renderer2.push("<!--[0-->");
            $$renderer2.push(`<path${attr("d", getTrackPath(data.shadowTrack, getTrackScale()))} fill="none"${attr("stroke", data.color)} stroke-width="2" stroke-dasharray="6,4"${attr("filter", `url(#compareFilter${stringify(index)})`)} opacity="0.7"></path>`);
          } else {
            $$renderer2.push("<!--[-1-->");
          }
          $$renderer2.push(`<!--]-->`);
        }
        $$renderer2.push(`<!--]-->`);
      } else {
        $$renderer2.push("<!--[-1-->");
      }
      $$renderer2.push(`<!--]-->`);
      if (store_get($$store_subs ??= {}, "$keyDateTracks", keyDateTracks).length > 0 && store_get($$store_subs ??= {}, "$config", config).showTrack) {
        $$renderer2.push("<!--[0-->");
        $$renderer2.push(`<!--[-->`);
        const each_array_3 = ensure_array_like(store_get($$store_subs ??= {}, "$keyDateTracks", keyDateTracks));
        for (let index = 0, $$length = each_array_3.length; index < $$length; index++) {
          let data = each_array_3[index];
          if (data.shadowTrack && data.shadowTrack.length > 0) {
            $$renderer2.push("<!--[0-->");
            $$renderer2.push(`<path${attr("d", getTrackPath(data.shadowTrack, getTrackScale()))} fill="none"${attr("stroke", data.color)} stroke-width="2.5" stroke-dasharray="8,4" opacity="0.8"></path>`);
          } else {
            $$renderer2.push("<!--[-1-->");
          }
          $$renderer2.push(`<!--]-->`);
        }
        $$renderer2.push(`<!--]-->`);
      } else {
        $$renderer2.push("<!--[-1-->");
      }
      $$renderer2.push(`<!--]-->`);
      if (store_get($$store_subs ??= {}, "$config", config).showTrack) {
        $$renderer2.push("<!--[0-->");
        $$renderer2.push(`<path${attr("d", getTrackPath(store_get($$store_subs ??= {}, "$shadowTrack", shadowTrack), getTrackScale()))} fill="none" stroke="#f59e0b" stroke-width="2" filter="url(#glow)" opacity="0.8"></path>`);
      } else {
        $$renderer2.push("<!--[-1-->");
      }
      $$renderer2.push(`<!--]--><circle${attr("cx", centerX)}${attr("cy", centerY)} r="4" fill="#94a3b8"></circle>`);
      if (store_get($$store_subs ??= {}, "$config", config).compareMode && store_get($$store_subs ??= {}, "$comparePresetsData", comparePresetsData).length > 0 && store_get($$store_subs ??= {}, "$config", config).showCurrentPoint) {
        $$renderer2.push("<!--[0-->");
        $$renderer2.push(`<!--[-->`);
        const each_array_4 = ensure_array_like(store_get($$store_subs ??= {}, "$comparePresetsData", comparePresetsData));
        for (let index = 0, $$length = each_array_4.length; index < $$length; index++) {
          let data = each_array_4[index];
          if (data.shadow && data.sunVisible) {
            $$renderer2.push("<!--[0-->");
            $$renderer2.push(`<line${attr("x1", centerX)}${attr("y1", centerY)}${attr("x2", getCurrentPos(data.shadow, getTrackScale()).x)}${attr("y2", getCurrentPos(data.shadow, getTrackScale()).y)}${attr("stroke", data.color)} stroke-width="1.5" stroke-dasharray="4,3" opacity="0.7"></line><circle${attr("cx", getCurrentPos(data.shadow, getTrackScale()).x)}${attr("cy", getCurrentPos(data.shadow, getTrackScale()).y)} r="15"${attr("fill", `url(#compareGlow${stringify(index)})`)}></circle><circle${attr("cx", getCurrentPos(data.shadow, getTrackScale()).x)}${attr("cy", getCurrentPos(data.shadow, getTrackScale()).y)} r="5"${attr("fill", data.color)}${attr("filter", `url(#compareFilter${stringify(index)})`)}></circle><circle${attr("cx", getCurrentPos(data.shadow, getTrackScale()).x)}${attr("cy", getCurrentPos(data.shadow, getTrackScale()).y)} r="2" fill="#ffffff"></circle>`);
          } else {
            $$renderer2.push("<!--[-1-->");
          }
          $$renderer2.push(`<!--]-->`);
        }
        $$renderer2.push(`<!--]-->`);
      } else {
        $$renderer2.push("<!--[-1-->");
      }
      $$renderer2.push(`<!--]-->`);
      if (store_get($$store_subs ??= {}, "$sunVisible", sunVisible) && store_get($$store_subs ??= {}, "$currentShadow", currentShadow) && store_get($$store_subs ??= {}, "$config", config).showCurrentPoint) {
        $$renderer2.push("<!--[0-->");
        $$renderer2.push(`<line${attr("x1", centerX)}${attr("y1", centerY)}${attr("x2", getCurrentPos(store_get($$store_subs ??= {}, "$currentShadow", currentShadow), getTrackScale()).x)}${attr("y2", getCurrentPos(store_get($$store_subs ??= {}, "$currentShadow", currentShadow), getTrackScale()).y)} stroke="#f87171" stroke-width="1.5" stroke-dasharray="4,3" opacity="0.7"></line><circle${attr("cx", getCurrentPos(store_get($$store_subs ??= {}, "$currentShadow", currentShadow), getTrackScale()).x)}${attr("cy", getCurrentPos(store_get($$store_subs ??= {}, "$currentShadow", currentShadow), getTrackScale()).y)} r="15" fill="url(#trackGlow)"></circle><circle${attr("cx", getCurrentPos(store_get($$store_subs ??= {}, "$currentShadow", currentShadow), getTrackScale()).x)}${attr("cy", getCurrentPos(store_get($$store_subs ??= {}, "$currentShadow", currentShadow), getTrackScale()).y)} r="5" fill="#ef4444" filter="url(#glow)"></circle><circle${attr("cx", getCurrentPos(store_get($$store_subs ??= {}, "$currentShadow", currentShadow), getTrackScale()).x)}${attr("cy", getCurrentPos(store_get($$store_subs ??= {}, "$currentShadow", currentShadow), getTrackScale()).y)} r="2" fill="#ffffff"></circle>`);
      } else {
        $$renderer2.push("<!--[-1-->");
      }
      $$renderer2.push(`<!--]--></svg></div>`);
    }
    $$renderer2.push(`<!--]--> <div class="mt-4 grid grid-cols-2 gap-3 text-center"><div class="bg-slate-700/30 rounded-lg p-2"><div class="text-xs text-slate-400">影子长度</div> <div class="font-mono text-sm text-slate-200">${escape_html(getShadowLength(store_get($$store_subs ??= {}, "$currentShadow", currentShadow)))}</div></div> <div class="bg-slate-700/30 rounded-lg p-2"><div class="text-xs text-slate-400">影子角度</div> <div class="font-mono text-sm text-slate-200">${escape_html(getShadowAngle(store_get($$store_subs ??= {}, "$currentShadow", currentShadow)))}</div></div></div> `);
    if (store_get($$store_subs ??= {}, "$config", config).compareMode && store_get($$store_subs ??= {}, "$comparePresetsData", comparePresetsData).length > 0) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<div class="mt-3 space-y-2"><!--[-->`);
      const each_array_9 = ensure_array_like(store_get($$store_subs ??= {}, "$comparePresetsData", comparePresetsData));
      for (let $$index_9 = 0, $$length = each_array_9.length; $$index_9 < $$length; $$index_9++) {
        let data = each_array_9[$$index_9];
        $$renderer2.push(`<div class="p-2 rounded-lg border"${attr_style(`background-color: ${stringify(data.color)}10; border-color: ${stringify(data.color)}30`)}><div class="text-xs font-medium flex items-center gap-2"${attr_style(`color: ${stringify(data.color)}`)}><span class="w-2 h-2 rounded-full"${attr_style(`background-color: ${stringify(data.color)}`)}></span> ${escape_html(data.preset.name)}</div> <div class="text-xs text-slate-400 flex gap-3 mt-1"><span>长度: ${escape_html(data.shadow ? data.shadow.length.toFixed(2) : "--")}</span> <span>角度: ${escape_html(data.shadow ? data.shadow.angle.toFixed(1) + "°" : "--")}</span></div></div>`);
      }
      $$renderer2.push(`<!--]--></div>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--> `);
    if (store_get($$store_subs ??= {}, "$keyDateTracks", keyDateTracks).length > 0) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<div class="mt-3 space-y-1.5"><div class="text-xs text-slate-500 mb-1">关键日期轨迹</div> <!--[-->`);
      const each_array_10 = ensure_array_like(store_get($$store_subs ??= {}, "$keyDateTracks", keyDateTracks));
      for (let $$index_10 = 0, $$length = each_array_10.length; $$index_10 < $$length; $$index_10++) {
        let data = each_array_10[$$index_10];
        $$renderer2.push(`<div class="flex items-center justify-between p-1.5 rounded-md"${attr_style(`background-color: ${stringify(data.color)}10; border-left: 3px solid ${stringify(data.color)}`)}><div class="text-xs font-medium"${attr_style(`color: ${stringify(data.color)}`)}>${escape_html(data.label)}</div> <div class="text-xs text-slate-400">${escape_html(data.sunriseSunset.dayLength.toFixed(1))}h · ${escape_html(data.maxAltitude.toFixed(0))}°</div></div>`);
      }
      $$renderer2.push(`<!--]--></div>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--> <div class="mt-3 text-center text-xs text-slate-500">当前时间: <span class="font-mono text-slate-300">${escape_html(formatTime(store_get($$store_subs ??= {}, "$config", config).timeHours))}</span></div></div>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function PresetManager($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    const {
      config,
      presets
    } = sundialStore;
    const typeLabels = { equatorial: "赤道式", horizontal: "水平式", vertical: "垂直式" };
    function formatTime(hours) {
      const h = Math.floor(hours);
      const m = Math.floor((hours - h) * 60);
      return `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}`;
    }
    function formatDate(dateStr) {
      return dateStr;
    }
    function getCompareColor(presetId) {
      const cfg = get(config);
      const index = cfg.comparePresetIds.indexOf(presetId);
      if (index === -1) return "transparent";
      return COMPARE_COLORS[index % COMPARE_COLORS.length];
    }
    function getCompareBtnClass(presetId) {
      const cfg = get(config);
      const isSelected = cfg.comparePresetIds.includes(presetId);
      const base = "p-1.5 rounded-md transition-colors ";
      if (isSelected) {
        getCompareColor(presetId);
        return base + "text-white";
      }
      return base + "hover:bg-slate-600/50 text-slate-400";
    }
    function getPresetItemClass(presetId) {
      const cfg = get(config);
      const isSelected = cfg.comparePresetIds.includes(presetId);
      const base = "p-3 rounded-lg border transition-all ";
      if (isSelected) {
        getCompareColor(presetId);
        return base + "bg-slate-700/30";
      }
      return base + "bg-slate-700/30 border-slate-600/30 hover:border-slate-500/50";
    }
    $$renderer2.push(`<div class="glass-card p-5 h-full flex flex-col relative overflow-hidden">`);
    {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--> <div class="flex items-center justify-between mb-4"><h3 class="font-display text-base text-amber-500 font-semibold flex items-center gap-2">`);
    Save($$renderer2, { class: "w-4 h-4" });
    $$renderer2.push(`<!----> 参数方案</h3> <button class="px-3 py-1 text-xs bg-amber-500/20 hover:bg-amber-500/30 text-amber-500 rounded-md transition-colors flex items-center gap-1">`);
    Save($$renderer2, { class: "w-3 h-3" });
    $$renderer2.push(`<!----> 保存</button></div> `);
    {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--> `);
    if (store_get($$store_subs ??= {}, "$config", config).compareMode && store_get($$store_subs ??= {}, "$config", config).comparePresetIds.length > 0) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<div class="mb-3 p-2 bg-blue-900/20 border border-blue-500/30 rounded-lg"><div class="flex items-center justify-between"><div class="text-xs text-blue-400 flex items-center gap-1">`);
      Copy($$renderer2, { class: "w-3 h-3" });
      $$renderer2.push(`<!----> 对比模式 (${escape_html(store_get($$store_subs ??= {}, "$config", config).comparePresetIds.length)}/4)</div> <button class="p-1 rounded hover:bg-blue-500/20 text-blue-400 transition-colors" title="清除对比">`);
      X($$renderer2, { class: "w-3.5 h-3.5" });
      $$renderer2.push(`<!----></button></div> <div class="flex gap-1.5 mt-2"><!--[-->`);
      const each_array = ensure_array_like(store_get($$store_subs ??= {}, "$config", config).comparePresetIds);
      for (let index = 0, $$length = each_array.length; index < $$length; index++) {
        let pid = each_array[index];
        const preset = store_get($$store_subs ??= {}, "$presets", presets).find((p) => p.id === pid);
        if (preset) {
          $$renderer2.push("<!--[0-->");
          $$renderer2.push(`<div class="flex items-center gap-1 px-2 py-0.5 rounded text-xs"${attr_style(`background-color: ${stringify(COMPARE_COLORS[index % COMPARE_COLORS.length])}20; color: ${stringify(COMPARE_COLORS[index % COMPARE_COLORS.length])}`)}><span class="w-1.5 h-1.5 rounded-full"${attr_style(`background-color: ${stringify(COMPARE_COLORS[index % COMPARE_COLORS.length])}`)}></span> <span class="truncate max-w-16">${escape_html(preset.name)}</span></div>`);
        } else {
          $$renderer2.push("<!--[-1-->");
        }
        $$renderer2.push(`<!--]-->`);
      }
      $$renderer2.push(`<!--]--></div></div>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--> <div class="flex-1 overflow-y-auto space-y-2 min-h-0">`);
    if (store_get($$store_subs ??= {}, "$presets", presets).length === 0) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<div class="text-center py-8 text-slate-500 text-sm">暂无保存的方案 <br/> <span class="text-xs">点击"保存"按钮保存当前参数</span></div>`);
    } else {
      $$renderer2.push("<!--[-1-->");
      $$renderer2.push(`<!--[-->`);
      const each_array_1 = ensure_array_like(store_get($$store_subs ??= {}, "$presets", presets));
      for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
        let preset = each_array_1[$$index_1];
        const isSelected = store_get($$store_subs ??= {}, "$config", config).comparePresetIds.includes(preset.id);
        const colorIndex = store_get($$store_subs ??= {}, "$config", config).comparePresetIds.indexOf(preset.id);
        $$renderer2.push(`<div${attr_class(clsx(getPresetItemClass(preset.id)))}${attr_style(isSelected ? `border-left: 3px solid ${COMPARE_COLORS[colorIndex % COMPARE_COLORS.length]}` : "")}><div class="flex items-start justify-between"><button class="flex-1 min-w-0 text-left mr-2"><div class="font-medium text-sm text-slate-100 truncate">${escape_html(preset.name)}</div> <div class="text-xs text-slate-400 mt-1 space-y-0.5"><div class="flex gap-3"><span>${escape_html(typeLabels[preset.type])}</span> <span>纬度: ${escape_html(preset.latitude.toFixed(1))}°</span></div> <div class="flex gap-3"><span>${escape_html(formatDate(preset.date))}</span> <span>${escape_html(formatTime(preset.timeHours))}</span></div></div></button> <div class="flex items-center gap-1 flex-shrink-0"><button${attr_class(clsx(getCompareBtnClass(preset.id)))}${attr("title", isSelected ? "取消对比" : "加入对比")}${attr_style(isSelected ? `background-color: ${COMPARE_COLORS[colorIndex % COMPARE_COLORS.length]}40` : "")}>`);
        if (isSelected) {
          $$renderer2.push("<!--[0-->");
          Check($$renderer2, { class: "w-4 h-4" });
        } else {
          $$renderer2.push("<!--[-1-->");
          Copy($$renderer2, { class: "w-4 h-4" });
        }
        $$renderer2.push(`<!--]--></button> <button class="p-1.5 rounded-md hover:bg-red-900/30 text-slate-400 hover:text-red-400 transition-colors" title="删除">`);
        Trash_2($$renderer2, { class: "w-4 h-4" });
        $$renderer2.push(`<!----></button></div></div></div>`);
      }
      $$renderer2.push(`<!--]-->`);
    }
    $$renderer2.push(`<!--]--></div> <div class="mt-3 pt-3 border-t border-slate-700/50"><div class="text-xs text-slate-500">点击 `);
    Copy($$renderer2, { class: "w-3 h-3 inline" });
    $$renderer2.push(`<!----> 按钮将方案加入对比（最多4个）</div></div></div>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function CompareSummary($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    const {
      config,
      sunriseSunset,
      maxShadowLength,
      noonShadow,
      comparePresetsData
    } = sundialStore;
    const typeLabels = { equatorial: "赤道式", horizontal: "水平式", vertical: "垂直式" };
    function formatHours(hours) {
      return hours.toFixed(1) + " 小时";
    }
    function formatLength(length) {
      return length.toFixed(2);
    }
    function formatAngle(angle) {
      return angle.toFixed(1) + "°";
    }
    function getDiffClass(current, compare) {
      const diff = compare - current;
      if (Math.abs(diff) < 1e-3) return "text-slate-400";
      return diff > 0 ? "text-green-400" : "text-red-400";
    }
    function getDiffValue(current, compare, unit = "") {
      const diff = compare - current;
      if (Math.abs(diff) < 1e-3) return "—";
      const prefix = diff > 0 ? "+" : "";
      return prefix + diff.toFixed(2) + unit;
    }
    $$renderer2.push(`<div class="glass-card p-5"><div class="flex items-center justify-between mb-4"><h3 class="font-display text-base text-amber-500 font-semibold flex items-center gap-2">`);
    Bar_chart_3($$renderer2, { class: "w-4 h-4" });
    $$renderer2.push(`<!----> 方案差异摘要</h3></div> `);
    if (!store_get($$store_subs ??= {}, "$config", config).compareMode || store_get($$store_subs ??= {}, "$comparePresetsData", comparePresetsData).length === 0) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<div class="text-center py-6 text-slate-500 text-sm">选择 1-4 个方案进行对比 <div class="text-xs mt-1 text-slate-600">在下方预设列表中点击对比按钮</div></div>`);
    } else {
      $$renderer2.push("<!--[-1-->");
      $$renderer2.push(`<div class="space-y-4"><div class="bg-slate-800/40 rounded-lg p-3 border border-amber-500/30"><div class="flex items-center gap-2 mb-2"><span class="w-3 h-3 rounded-full bg-amber-500"></span> <span class="text-sm font-medium text-amber-500">当前方案</span> <span class="text-xs text-slate-500 ml-auto">${escape_html(typeLabels[store_get($$store_subs ??= {}, "$config", config).type])}</span></div> <div class="grid grid-cols-3 gap-2 text-center"><div><div class="text-xs text-slate-500 mb-1">最长影长</div> <div class="font-mono text-sm text-slate-200">${escape_html(formatLength(store_get($$store_subs ??= {}, "$maxShadowLength", maxShadowLength)))}</div></div> <div><div class="text-xs text-slate-500 mb-1">正午方向</div> <div class="font-mono text-sm text-slate-200">${escape_html(store_get($$store_subs ??= {}, "$noonShadow", noonShadow) ? formatAngle(store_get($$store_subs ??= {}, "$noonShadow", noonShadow).angle) : "--")}</div></div> <div><div class="text-xs text-slate-500 mb-1">日照时长</div> <div class="font-mono text-sm text-slate-200">${escape_html(formatHours(store_get($$store_subs ??= {}, "$sunriseSunset", sunriseSunset).dayLength))}</div></div></div></div> <!--[-->`);
      const each_array = ensure_array_like(store_get($$store_subs ??= {}, "$comparePresetsData", comparePresetsData));
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let data = each_array[$$index];
        $$renderer2.push(`<div class="rounded-lg p-3 border"${attr_style(`background-color: ${stringify(data.color)}08; border-color: ${stringify(data.color)}30`)}><div class="flex items-center gap-2 mb-2"><span class="w-3 h-3 rounded-full"${attr_style(`background-color: ${stringify(data.color)}`)}></span> <span class="text-sm font-medium"${attr_style(`color: ${stringify(data.color)}`)}>${escape_html(data.preset.name)}</span> <span class="text-xs text-slate-500 ml-auto">${escape_html(typeLabels[data.preset.type])}</span></div> <div class="grid grid-cols-3 gap-2 text-center"><div><div class="text-xs text-slate-500 mb-1">最长影长</div> <div class="font-mono text-sm text-slate-200">${escape_html(formatLength(data.maxShadowLength))}</div> <div${attr_class(`text-xs ${stringify(getDiffClass(store_get($$store_subs ??= {}, "$maxShadowLength", maxShadowLength), data.maxShadowLength))}`)}>${escape_html(getDiffValue(store_get($$store_subs ??= {}, "$maxShadowLength", maxShadowLength), data.maxShadowLength))}</div></div> <div><div class="text-xs text-slate-500 mb-1">正午方向</div> <div class="font-mono text-sm text-slate-200">${escape_html(formatAngle(data.noonShadowAngle))}</div> <div${attr_class(`text-xs ${stringify(getDiffClass(store_get($$store_subs ??= {}, "$noonShadow", noonShadow)?.angle ?? 0, data.noonShadowAngle))}`)}>${escape_html(getDiffValue(store_get($$store_subs ??= {}, "$noonShadow", noonShadow)?.angle ?? 0, data.noonShadowAngle, "°"))}</div></div> <div><div class="text-xs text-slate-500 mb-1">日照时长</div> <div class="font-mono text-sm text-slate-200">${escape_html(formatHours(data.sunriseSunset.dayLength))}</div> <div${attr_class(`text-xs ${stringify(getDiffClass(store_get($$store_subs ??= {}, "$sunriseSunset", sunriseSunset).dayLength, data.sunriseSunset.dayLength))}`)}>${escape_html(getDiffValue(store_get($$store_subs ??= {}, "$sunriseSunset", sunriseSunset).dayLength, data.sunriseSunset.dayLength, "h"))}</div></div></div></div>`);
      }
      $$renderer2.push(`<!--]--> <div class="pt-2 border-t border-slate-700/50"><div class="text-xs text-slate-500"><span class="text-green-400">绿色</span> 表示优于当前方案 · <span class="text-red-400">红色</span> 表示劣于当前方案</div></div></div>`);
    }
    $$renderer2.push(`<!--]--></div>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function YearlyAnalysis($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    const {
      config,
      yearlyAnalysis
    } = sundialStore;
    function formatDate(dateStr) {
      const d = new Date(dateStr);
      return `${d.getMonth() + 1}月${d.getDate()}日`;
    }
    const modeTabs = [
      { mode: "single", label: "单日" },
      { mode: "solstices", label: "至日" },
      { mode: "equinoxes", label: "分日" },
      { mode: "quarterly", label: "四立" }
    ];
    function getDateData(mode, key, index) {
      const data = get(yearlyAnalysis);
      if (mode === "solstices") {
        return data.solstices[key];
      } else if (mode === "equinoxes") {
        return data.equinoxes[key];
      } else if (mode === "quarterly" && index !== void 0) {
        return data.quarterly[index];
      }
      return null;
    }
    const keyDateGroups = [
      {
        mode: "solstices",
        label: "至日",
        icon: Sun,
        colors: KEY_DATE_COLORS.solstices,
        dates: [
          { key: "summer", label: "夏至" },
          { key: "winter", label: "冬至" }
        ]
      },
      {
        mode: "equinoxes",
        label: "分日",
        icon: Leaf,
        colors: KEY_DATE_COLORS.equinoxes,
        dates: [
          { key: "spring", label: "春分" },
          { key: "autumn", label: "秋分" }
        ]
      },
      {
        mode: "quarterly",
        label: "四立",
        icon: Flower_2,
        colors: KEY_DATE_COLORS.quarterly,
        dates: [
          { key: "q1", label: "立春", index: 0 },
          { key: "q2", label: "立夏", index: 1 },
          { key: "q3", label: "立秋", index: 2 },
          { key: "q4", label: "立冬", index: 3 }
        ]
      }
    ];
    $$renderer2.push(`<div class="glass-card p-5"><div class="flex items-center justify-between mb-4"><h3 class="font-display text-base text-amber-500 font-semibold flex items-center gap-2">`);
    Calendar($$renderer2, { class: "w-4 h-4" });
    $$renderer2.push(`<!----> 全年太阳轨迹分析</h3></div> <div class="flex gap-1 mb-4 bg-slate-800/40 rounded-lg p-1"><!--[-->`);
    const each_array = ensure_array_like(modeTabs);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let tab = each_array[$$index];
      $$renderer2.push(`<button${attr_class(`flex-1 py-1.5 text-xs font-medium rounded-md transition-all ${store_get($$store_subs ??= {}, "$config", config).keyDateMode === tab.mode ? "bg-amber-500/20 text-amber-500" : "text-slate-400 hover:text-slate-300"}`)}>${escape_html(tab.label)}</button>`);
    }
    $$renderer2.push(`<!--]--></div> `);
    if (store_get($$store_subs ??= {}, "$config", config).keyDateMode !== "single") {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<div class="flex items-center gap-1.5 mb-3 px-2 py-1.5 bg-violet-500/10 border border-violet-500/30 rounded-lg">`);
      Layers($$renderer2, { class: "w-3.5 h-3.5 text-violet-400" });
      $$renderer2.push(`<!----> <span class="text-xs text-violet-400">叠加模式：已在视图中显示多条轨迹</span></div>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--> <div class="space-y-4"><div class="bg-slate-800/40 rounded-lg p-3 border border-slate-700/50"><div class="text-xs text-slate-400 mb-2">当前日期</div> <div class="flex items-center justify-between"><div><div class="font-mono text-sm text-slate-200">${escape_html(store_get($$store_subs ??= {}, "$config", config).date)}</div> <div class="text-xs text-slate-500 mt-0.5">日照: ${escape_html(store_get($$store_subs ??= {}, "$yearlyAnalysis", yearlyAnalysis).currentDay.dayLength.toFixed(1))}小时 · 
            最高: ${escape_html(store_get($$store_subs ??= {}, "$yearlyAnalysis", yearlyAnalysis).currentDay.maxAltitude.toFixed(1))}°</div></div></div></div> <!--[-->`);
    const each_array_1 = ensure_array_like(keyDateGroups);
    for (let $$index_2 = 0, $$length = each_array_1.length; $$index_2 < $$length; $$index_2++) {
      let group = each_array_1[$$index_2];
      $$renderer2.push(`<div class="opacity-90"><div class="flex items-center gap-2 mb-2">`);
      if (group.icon) {
        $$renderer2.push("<!--[-->");
        group.icon($$renderer2, { class: "w-3.5 h-3.5 text-slate-400" });
        $$renderer2.push("<!--]-->");
      } else {
        $$renderer2.push("<!--[!-->");
        $$renderer2.push("<!--]-->");
      }
      $$renderer2.push(` <span class="text-xs font-medium text-slate-400">${escape_html(group.label)}</span></div> <div class="grid grid-cols-2 gap-2"><!--[-->`);
      const each_array_2 = ensure_array_like(group.dates);
      for (let idx = 0, $$length2 = each_array_2.length; idx < $$length2; idx++) {
        let dateItem = each_array_2[idx];
        const dateData = getDateData(group.mode, dateItem.key, dateItem.index);
        if (dateData) {
          $$renderer2.push("<!--[0-->");
          $$renderer2.push(`<button${attr_class(`p-2 bg-slate-800/40 hover:bg-slate-700/50 rounded-lg border hover:border-amber-500/30 transition-all text-left relative overflow-hidden ${store_get($$store_subs ??= {}, "$config", config).keyDateMode === group.mode ? "border-slate-500/50" : "border-slate-700/50"}`)}>`);
          if (store_get($$store_subs ??= {}, "$config", config).keyDateMode === group.mode) {
            $$renderer2.push("<!--[0-->");
            $$renderer2.push(`<div class="absolute left-0 top-0 bottom-0 w-1 rounded-l-lg"${attr_style(`background-color: ${stringify(group.colors[idx])};`)}></div>`);
          } else {
            $$renderer2.push("<!--[-1-->");
          }
          $$renderer2.push(`<!--]--> <div class="text-xs font-medium text-slate-200 pl-1">${escape_html(dateItem.label)}</div> <div class="text-xs text-slate-500 mt-0.5 pl-1">${escape_html(formatDate(dateData.date))}</div> <div class="text-xs text-amber-500/80 mt-1 pl-1">${escape_html(dateData.dayLength.toFixed(1))}h · ${escape_html(dateData.maxAltitude.toFixed(0))}°</div></button>`);
        } else {
          $$renderer2.push("<!--[-1-->");
        }
        $$renderer2.push(`<!--]-->`);
      }
      $$renderer2.push(`<!--]--></div></div>`);
    }
    $$renderer2.push(`<!--]--> <div class="pt-2 border-t border-slate-700/50"><div class="text-xs text-slate-500 flex items-center gap-1">`);
    Snowflake($$renderer2, { class: "w-3 h-3" });
    $$renderer2.push(`<!----> <span>冬至日照最短 · 夏至日照最长</span></div></div></div></div>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    $$renderer2.push(`<div class="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 text-white"><header class="border-b border-slate-700/40 backdrop-blur-sm bg-slate-900/30 sticky top-0 z-20"><div class="max-w-[1800px] mx-auto px-6 py-4 flex items-center justify-between"><div class="flex items-center gap-3"><div class="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-orange-600 flex items-center justify-center shadow-lg shadow-amber-500/20">`);
    Sun($$renderer2, { class: "w-6 h-6 text-white" });
    $$renderer2.push(`<!----></div> <div><h1 class="font-display text-xl font-bold text-amber-500 tracking-wider">日晷模拟器</h1> <p class="text-xs text-slate-500">Sundial Simulator</p></div></div> <div class="flex items-center gap-4"><nav class="flex items-center gap-1"><button class="px-3 py-1.5 text-sm text-amber-400 bg-amber-500/10 rounded-lg border border-amber-500/20">模拟器</button> <button class="px-3 py-1.5 text-sm text-slate-400 hover:text-slate-200 hover:bg-slate-700/50 rounded-lg border border-transparent hover:border-slate-600/50 transition-colors flex items-center gap-2">`);
    Compass($$renderer2, { class: "w-4 h-4" });
    $$renderer2.push(`<!----> 校准测量</button></nav> <div class="text-sm text-slate-400 hidden sm:block">多方案对比 · 全年太阳轨迹分析</div></div></div></header> <main class="max-w-[1800px] mx-auto px-4 sm:px-6 py-6"><div class="grid grid-cols-12 gap-6 h-[calc(100vh-100px)]"><div class="col-span-12 lg:col-span-3 h-full overflow-hidden">`);
    ControlPanel($$renderer2);
    $$renderer2.push(`<!----></div> <div class="col-span-12 lg:col-span-6 flex flex-col gap-6 min-h-[400px] lg:min-h-0 lg:h-full"><div class="flex-1 glass-card rounded-xl overflow-hidden min-h-0">`);
    SundialScene($$renderer2);
    $$renderer2.push(`<!----></div> <div class="h-[280px] flex-shrink-0">`);
    CompareSummary($$renderer2);
    $$renderer2.push(`<!----></div></div> <div class="col-span-12 lg:col-span-3 flex flex-col gap-6 h-full overflow-hidden"><div class="h-[380px] flex-shrink-0 overflow-hidden">`);
    ShadowTrack($$renderer2);
    $$renderer2.push(`<!----></div> <div class="flex-1 min-h-0 overflow-hidden">`);
    YearlyAnalysis($$renderer2);
    $$renderer2.push(`<!----></div> <div class="flex-1 min-h-0 overflow-hidden">`);
    PresetManager($$renderer2);
    $$renderer2.push(`<!----></div></div></div></main></div>`);
  });
}
export {
  _page as default
};
