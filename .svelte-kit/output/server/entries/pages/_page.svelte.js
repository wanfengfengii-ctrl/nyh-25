import "clsx";
import { a5 as sanitize_props, a6 as rest_props, a7 as fallback, a8 as attributes, a9 as ensure_array_like, aa as element, a4 as slot, ab as bind_props, ac as spread_props, ad as attr_class, ae as clsx, e as escape_html, af as attr, ag as store_get, ah as unsubscribe_stores } from "../../chunks/index.js";
import { w as writable, d as derived, g as get } from "../../chunks/index2.js";
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
const DEG_TO_RAD = Math.PI / 180;
const RAD_TO_DEG = 180 / Math.PI;
function toRad(deg) {
  return deg * DEG_TO_RAD;
}
function toDeg(rad) {
  return rad * RAD_TO_DEG;
}
function getEquatorialShadow(solarPos, gnomonLength, latitude) {
  if (solarPos.altitude <= 0) return null;
  toRad(solarPos.declination);
  toRad(solarPos.hourAngle);
  const x = gnomonLength * Math.tan(toRad(solarPos.hourAngle));
  const y = gnomonLength;
  const length = Math.sqrt(x * x + y * y);
  const angle = toDeg(Math.atan2(x, y));
  return { x, y, length, angle };
}
function getHorizontalShadow(solarPos, latitude, gnomonLength) {
  if (solarPos.altitude <= 0) return null;
  const altRad = toRad(solarPos.altitude);
  const azRad = toRad(solarPos.azimuth);
  const shadowLength = gnomonLength / Math.tan(altRad);
  const x = shadowLength * Math.sin(azRad);
  const y = shadowLength * Math.cos(azRad);
  const length = shadowLength;
  const angle = solarPos.azimuth;
  return { x, y, length, angle };
}
function getVerticalShadow(solarPos, latitude, gnomonLength) {
  if (solarPos.altitude <= 0) return null;
  const altRad = toRad(solarPos.altitude);
  const azRad = toRad(solarPos.azimuth);
  const sinAz = Math.sin(azRad);
  const yWall = gnomonLength / (Math.tan(altRad) * Math.abs(sinAz));
  const xWall = yWall * Math.cos(azRad) / Math.abs(sinAz);
  const length = Math.sqrt(xWall * xWall + yWall * yWall);
  const angle = toDeg(Math.atan2(xWall, yWall));
  return { x: xWall, y: -yWall, length, angle };
}
function getShadow(type, solarPos, latitude, gnomonLength) {
  switch (type) {
    case "equatorial":
      return getEquatorialShadow(solarPos, gnomonLength);
    case "horizontal":
      return getHorizontalShadow(solarPos, latitude, gnomonLength);
    case "vertical":
      return getVerticalShadow(solarPos, latitude, gnomonLength);
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
    const shadow = getShadow(type, solarPos, latitude, gnomonLength);
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
const STORAGE_KEY = "sundial-presets";
const MAX_PRESETS = 20;
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
    compareMode: false,
    comparePresetId: null
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
  function setCompareMode(enabled) {
    config.update((s) => ({ ...s, compareMode: enabled }));
  }
  function setComparePreset(id) {
    config.update((s) => ({ ...s, comparePresetId: id }));
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
        timeHours: preset.timeHours
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
      comparePresetId: s.comparePresetId === id ? null : s.comparePresetId
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
    currentShadow,
    shadowTrack,
    hourMarks,
    setType,
    setLatitude,
    setDate,
    setTimeHours,
    setGnomonLength,
    setShowTrack,
    setCompareMode,
    setComparePreset,
    savePreset,
    loadPreset,
    deletePreset,
    resetToNow
  };
}
const sundialStore = createSundialStore();
/**
 * @license lucide-svelte v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": 2,
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
};
function Icon($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "name",
    "color",
    "size",
    "strokeWidth",
    "absoluteStrokeWidth",
    "iconNode"
  ]);
  $$renderer.component(($$renderer2) => {
    let name = $$props["name"];
    let color = fallback($$props["color"], "currentColor");
    let size = fallback($$props["size"], 24);
    let strokeWidth = fallback($$props["strokeWidth"], 2);
    let absoluteStrokeWidth = fallback($$props["absoluteStrokeWidth"], false);
    let iconNode = $$props["iconNode"];
    $$renderer2.push(`<svg${attributes(
      {
        ...defaultAttributes,
        ...$$restProps,
        width: size,
        height: size,
        stroke: color,
        "stroke-width": absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
        class: `lucide-icon lucide lucide-${name} ${$$sanitized_props.class ?? ""}`
      },
      void 0,
      void 0,
      void 0,
      3
    )}><!--[-->`);
    const each_array = ensure_array_like(iconNode);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let [tag, attrs] = each_array[$$index];
      element($$renderer2, tag, () => {
        $$renderer2.push(`${attributes({ ...attrs }, void 0, void 0, void 0, 3)}`);
      });
    }
    $$renderer2.push(`<!--]--><!--[-->`);
    slot($$renderer2, $$props, "default", {});
    $$renderer2.push(`<!--]--></svg>`);
    bind_props($$props, {
      name,
      color,
      size,
      strokeWidth,
      absoluteStrokeWidth,
      iconNode
    });
  });
}
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
function Calendar($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v0.344.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const iconNode = [
    ["path", { "d": "M8 2v4" }],
    ["path", { "d": "M16 2v4" }],
    [
      "rect",
      { "width": "18", "height": "18", "x": "3", "y": "4", "rx": "2" }
    ],
    ["path", { "d": "M3 10h18" }]
  ];
  Icon($$renderer, spread_props([
    { name: "calendar" },
    $$sanitized_props,
    {
      /**
       * @component @name Calendar
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNOCAydjQiIC8+CiAgPHBhdGggZD0iTTE2IDJ2NCIgLz4KICA8cmVjdCB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHg9IjMiIHk9IjQiIHJ4PSIyIiAvPgogIDxwYXRoIGQ9Ik0zIDEwaDE4IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/calendar
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
function Globe($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v0.344.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const iconNode = [
    ["circle", { "cx": "12", "cy": "12", "r": "10" }],
    [
      "path",
      { "d": "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" }
    ],
    ["path", { "d": "M2 12h20" }]
  ];
  Icon($$renderer, spread_props([
    { name: "globe" },
    $$sanitized_props,
    {
      /**
       * @component @name Globe
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIgLz4KICA8cGF0aCBkPSJNMTIgMmExNC41IDE0LjUgMCAwIDAgMCAyMCAxNC41IDE0LjUgMCAwIDAgMC0yMCIgLz4KICA8cGF0aCBkPSJNMiAxMmgyMCIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/globe
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
function Play($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v0.344.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const iconNode = [["polygon", { "points": "5 3 19 12 5 21 5 3" }]];
  Icon($$renderer, spread_props([
    { name: "play" },
    $$sanitized_props,
    {
      /**
       * @component @name Play
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cG9seWdvbiBwb2ludHM9IjUgMyAxOSAxMiA1IDIxIDUgMyIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/play
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
function Sun($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v0.344.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const iconNode = [
    ["circle", { "cx": "12", "cy": "12", "r": "4" }],
    ["path", { "d": "M12 2v2" }],
    ["path", { "d": "M12 20v2" }],
    ["path", { "d": "m4.93 4.93 1.41 1.41" }],
    ["path", { "d": "m17.66 17.66 1.41 1.41" }],
    ["path", { "d": "M2 12h2" }],
    ["path", { "d": "M20 12h2" }],
    ["path", { "d": "m6.34 17.66-1.41 1.41" }],
    ["path", { "d": "m19.07 4.93-1.41 1.41" }]
  ];
  Icon($$renderer, spread_props([
    { name: "sun" },
    $$sanitized_props,
    {
      /**
       * @component @name Sun
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSI0IiAvPgogIDxwYXRoIGQ9Ik0xMiAydjIiIC8+CiAgPHBhdGggZD0iTTEyIDIwdjIiIC8+CiAgPHBhdGggZD0ibTQuOTMgNC45MyAxLjQxIDEuNDEiIC8+CiAgPHBhdGggZD0ibTE3LjY2IDE3LjY2IDEuNDEgMS40MSIgLz4KICA8cGF0aCBkPSJNMiAxMmgyIiAvPgogIDxwYXRoIGQ9Ik0yMCAxMmgyIiAvPgogIDxwYXRoIGQ9Im02LjM0IDE3LjY2LTEuNDEgMS40MSIgLz4KICA8cGF0aCBkPSJtMTkuMDcgNC45My0xLjQxIDEuNDEiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/sun
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
      sunVisible
    } = sundialStore;
    $$renderer2.push(`<div class="w-full h-full relative">`);
    if (!store_get($$store_subs ??= {}, "$sunVisible", sunVisible)) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<div class="absolute top-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-slate-800/80 backdrop-blur-sm rounded-lg border border-slate-600/50 text-sm text-slate-300 z-10">太阳位于地平线以下</div>`);
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
    const { config, shadowTrack, currentShadow, sunVisible } = sundialStore;
    const svgSize = 240;
    const padding = 20;
    const viewSize = svgSize - padding * 2;
    const centerX = svgSize / 2;
    const centerY = svgSize / 2;
    function formatTime(hours) {
      const h = Math.floor(hours);
      const m = Math.floor((hours - h) * 60);
      return `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}`;
    }
    function getScale() {
      const track = get(shadowTrack);
      if (!track || track.length === 0) return 0.05;
      const maxX = Math.max(...track.map((p) => Math.abs(p.x)));
      const maxY = Math.max(...track.map((p) => Math.abs(p.y)));
      const maxVal = Math.max(maxX, maxY) || 1;
      return viewSize / 2 / maxVal * 0.9;
    }
    function getTrackPath() {
      const track = get(shadowTrack);
      if (!track || track.length === 0) return "";
      const scale = getScale();
      return track.map((p, i) => {
        const x = centerX + p.x * scale;
        const y = centerY + p.y * scale;
        return (i === 0 ? "M" : "L") + x.toFixed(2) + " " + y.toFixed(2);
      }).join(" ");
    }
    function getCurrentPos() {
      const shadow = get(currentShadow);
      const visible = get(sunVisible);
      const scale = getScale();
      if (!visible || !shadow) {
        return { x: centerX, y: centerY };
      }
      return { x: centerX + shadow.x * scale, y: centerY + shadow.y * scale };
    }
    function getTrackBtnClass() {
      const show = get(config).showTrack;
      const base = "px-3 py-1 text-xs rounded-md transition-colors flex items-center gap-1 ";
      if (show) {
        return base + "bg-amber-500/20 text-amber-500";
      }
      return base + "bg-slate-700/30 text-slate-400";
    }
    function getShadowLength() {
      const shadow = get(currentShadow);
      const visible = get(sunVisible);
      if (!visible || !shadow) return "--";
      return shadow.length.toFixed(2);
    }
    function getShadowAngle() {
      const shadow = get(currentShadow);
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
    $$renderer2.push(`<!----> 影子轨迹</h3> <button${attr_class(clsx(getTrackBtnClass()))}>`);
    Eye($$renderer2, { class: "w-3 h-3" });
    $$renderer2.push(`<!----> ${escape_html(store_get($$store_subs ??= {}, "$config", config).showTrack ? "显示" : "隐藏")}</button></div> <div class="flex justify-center"><svg${attr("width", svgSize)}${attr("height", svgSize)} class="bg-slate-900/50 rounded-lg border border-slate-700/50"><defs><radialGradient id="trackGlow" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#f59e0b" stop-opacity="0.3"></stop><stop offset="100%" stop-color="#f59e0b" stop-opacity="0"></stop></radialGradient><filter id="glow"><feGaussianBlur stdDeviation="2" result="coloredBlur"></feGaussianBlur><feMerge><feMergeNode in="coloredBlur"></feMergeNode><feMergeNode in="SourceGraphic"></feMergeNode></feMerge></filter></defs><circle${attr("cx", centerX)}${attr("cy", centerY)}${attr("r", viewSize / 2 - 5)} fill="none" stroke="#334155" stroke-width="1" stroke-dasharray="4,4"></circle><circle${attr("cx", centerX)}${attr("cy", centerY)}${attr("r", viewSize / 4)} fill="none" stroke="#334155" stroke-width="1" stroke-dasharray="2,4"></circle><line${attr("x1", centerX)}${attr("y1", padding)}${attr("x2", centerX)}${attr("y2", svgSize - padding)} stroke="#334155" stroke-width="1"></line><line${attr("x1", padding)}${attr("y1", centerY)}${attr("x2", svgSize - padding)}${attr("y2", centerY)} stroke="#334155" stroke-width="1"></line><!--[-->`);
    const each_array = ensure_array_like(compassLabels);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let label = each_array[$$index];
      $$renderer2.push(`<text${attr("x", label.x)}${attr("y", label.y)}${attr("text-anchor", label.align)} fill="#64748b" font-size="10" font-family="Inter, sans-serif">${escape_html(label.label)}</text>`);
    }
    $$renderer2.push(`<!--]-->`);
    if (store_get($$store_subs ??= {}, "$config", config).showTrack) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<path${attr("d", getTrackPath())} fill="none" stroke="#f59e0b" stroke-width="2" filter="url(#glow)" opacity="0.8"></path>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--><circle${attr("cx", centerX)}${attr("cy", centerY)} r="4" fill="#94a3b8"></circle>`);
    if (store_get($$store_subs ??= {}, "$sunVisible", sunVisible) && store_get($$store_subs ??= {}, "$currentShadow", currentShadow) && store_get($$store_subs ??= {}, "$config", config).showTrack) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<line${attr("x1", centerX)}${attr("y1", centerY)}${attr("x2", getCurrentPos().x)}${attr("y2", getCurrentPos().y)} stroke="#f87171" stroke-width="1.5" stroke-dasharray="4,3" opacity="0.7"></line><circle${attr("cx", getCurrentPos().x)}${attr("cy", getCurrentPos().y)} r="15" fill="url(#trackGlow)"></circle><circle${attr("cx", getCurrentPos().x)}${attr("cy", getCurrentPos().y)} r="5" fill="#ef4444" filter="url(#glow)"></circle><circle${attr("cx", getCurrentPos().x)}${attr("cy", getCurrentPos().y)} r="2" fill="#ffffff"></circle>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--></svg></div> <div class="mt-4 grid grid-cols-2 gap-3 text-center"><div class="bg-slate-700/30 rounded-lg p-2"><div class="text-xs text-slate-400">影子长度</div> <div class="font-mono text-sm text-slate-200">${escape_html(getShadowLength())}</div></div> <div class="bg-slate-700/30 rounded-lg p-2"><div class="text-xs text-slate-400">影子角度</div> <div class="font-mono text-sm text-slate-200">${escape_html(getShadowAngle())}</div></div></div> <div class="mt-3 text-center text-xs text-slate-500">当前时间: <span class="font-mono text-slate-300">${escape_html(formatTime(store_get($$store_subs ??= {}, "$config", config).timeHours))}</span></div></div>`);
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
    function getCompareBtnClass(presetId) {
      const cfg = get(config);
      const base = "p-1.5 rounded-md transition-colors ";
      if (cfg.comparePresetId === presetId) {
        return base + "bg-blue-500/30 text-blue-400";
      }
      return base + "hover:bg-slate-600/50 text-slate-400";
    }
    function getPresetItemClass(presetId) {
      const cfg = get(config);
      const base = "p-3 rounded-lg border cursor-pointer transition-all ";
      if (cfg.comparePresetId === presetId) {
        return base + "bg-blue-900/20 border-blue-500/30";
      }
      return base + "bg-slate-700/30 border-slate-600/30 hover:bg-slate-700/50";
    }
    $$renderer2.push(`<div class="glass-card p-5 h-full flex flex-col"><div class="flex items-center justify-between mb-4"><h3 class="font-display text-base text-amber-500 font-semibold flex items-center gap-2">`);
    Save($$renderer2, { class: "w-4 h-4" });
    $$renderer2.push(`<!----> 参数方案</h3> <button class="px-3 py-1 text-xs bg-amber-500/20 hover:bg-amber-500/30 text-amber-500 rounded-md transition-colors flex items-center gap-1">`);
    Save($$renderer2, { class: "w-3 h-3" });
    $$renderer2.push(`<!----> 保存</button></div> `);
    {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--> <div class="flex-1 overflow-y-auto space-y-2 min-h-0">`);
    if (store_get($$store_subs ??= {}, "$presets", presets).length === 0) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<div class="text-center py-8 text-slate-500 text-sm">暂无保存的方案 <br/> <span class="text-xs">点击"保存"按钮保存当前参数</span></div>`);
    } else {
      $$renderer2.push("<!--[-1-->");
      $$renderer2.push(`<!--[-->`);
      const each_array = ensure_array_like(store_get($$store_subs ??= {}, "$presets", presets));
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let preset = each_array[$$index];
        $$renderer2.push(`<div${attr_class(clsx(getPresetItemClass(preset.id)))}><div class="flex items-start justify-between"><div class="flex-1 min-w-0"><div class="font-medium text-sm text-slate-100 truncate">${escape_html(preset.name)}</div> <div class="text-xs text-slate-400 mt-1 space-y-0.5"><div class="flex gap-3"><span>${escape_html(typeLabels[preset.type])}</span> <span>纬度: ${escape_html(preset.latitude.toFixed(1))}°</span></div> <div class="flex gap-3"><span>${escape_html(formatDate(preset.date))}</span> <span>${escape_html(formatTime(preset.timeHours))}</span></div></div></div> <div class="flex items-center gap-1 ml-2 flex-shrink-0"><button${attr_class(clsx(getCompareBtnClass(preset.id)))} title="对比">`);
        Copy($$renderer2, { class: "w-4 h-4" });
        $$renderer2.push(`<!----></button> <button class="p-1.5 rounded-md hover:bg-red-900/30 text-slate-400 hover:text-red-400 transition-colors" title="删除">`);
        Trash_2($$renderer2, { class: "w-4 h-4" });
        $$renderer2.push(`<!----></button></div></div></div>`);
      }
      $$renderer2.push(`<!--]-->`);
    }
    $$renderer2.push(`<!--]--></div> `);
    if (store_get($$store_subs ??= {}, "$config", config).compareMode) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<div class="mt-3 pt-3 border-t border-slate-700/50"><div class="text-xs text-blue-400 flex items-center gap-1">`);
      Play($$renderer2, { class: "w-3 h-3" });
      $$renderer2.push(`<!----> 对比模式已启用</div></div>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--></div>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function _page($$renderer) {
  $$renderer.push(`<div class="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 text-white"><header class="border-b border-slate-700/40 backdrop-blur-sm bg-slate-900/30 sticky top-0 z-20"><div class="max-w-[1600px] mx-auto px-6 py-4 flex items-center justify-between"><div class="flex items-center gap-3"><div class="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-orange-600 flex items-center justify-center shadow-lg shadow-amber-500/20">`);
  Sun($$renderer, { class: "w-6 h-6 text-white" });
  $$renderer.push(`<!----></div> <div><h1 class="font-display text-xl font-bold text-amber-500 tracking-wider">日晷模拟器</h1> <p class="text-xs text-slate-500">Sundial Simulator</p></div></div> <div class="text-sm text-slate-400 hidden sm:block">探索不同纬度、日期与时间的光影变化</div></div></header> <main class="max-w-[1600px] mx-auto px-4 sm:px-6 py-6"><div class="grid grid-cols-12 gap-6 h-[calc(100vh-120px)]"><div class="col-span-12 lg:col-span-3 h-full overflow-hidden">`);
  ControlPanel($$renderer);
  $$renderer.push(`<!----></div> <div class="col-span-12 lg:col-span-6 flex flex-col gap-6 min-h-[400px] lg:min-h-0 lg:h-full"><div class="flex-1 glass-card rounded-xl overflow-hidden min-h-0">`);
  SundialScene($$renderer);
  $$renderer.push(`<!----></div></div> <div class="col-span-12 lg:col-span-3 flex flex-col gap-6 h-full overflow-hidden">`);
  ShadowTrack($$renderer);
  $$renderer.push(`<!----> <div class="flex-1 min-h-0 overflow-hidden">`);
  PresetManager($$renderer);
  $$renderer.push(`<!----></div></div></div></main></div>`);
}
export {
  _page as default
};
