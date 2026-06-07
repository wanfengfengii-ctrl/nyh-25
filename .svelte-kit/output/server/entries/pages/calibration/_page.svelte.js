import { a as sanitize_props, b as spread_props, s as slot, c as ensure_array_like, d as attr_class, f as clsx, e as escape_html, h as attr, l as bind_props, m as fallback, j as attr_style, k as stringify, i as store_get, u as unsubscribe_stores } from "../../../chunks/index.js";
import { I as Icon, S as Sun, G as Globe, C as Calendar, X, a as Compass, B as Bar_chart_3, T as Trending_up } from "../../../chunks/x.js";
import { i as derived, w as writable, j as get } from "../../../chunks/exports.js";
import "@sveltejs/kit/internal";
import "../../../chunks/utils2.js";
import "@sveltejs/kit/internal/server";
import "../../../chunks/root.js";
import "../../../chunks/state.svelte.js";
function Alert_circle($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v0.344.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const iconNode = [
    ["circle", { "cx": "12", "cy": "12", "r": "10" }],
    ["line", { "x1": "12", "x2": "12", "y1": "8", "y2": "12" }],
    [
      "line",
      { "x1": "12", "x2": "12.01", "y1": "16", "y2": "16" }
    ]
  ];
  Icon($$renderer, spread_props([
    { name: "alert-circle" },
    $$sanitized_props,
    {
      /**
       * @component @name AlertCircle
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIgLz4KICA8bGluZSB4MT0iMTIiIHgyPSIxMiIgeTE9IjgiIHkyPSIxMiIgLz4KICA8bGluZSB4MT0iMTIiIHgyPSIxMi4wMSIgeTE9IjE2IiB5Mj0iMTYiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/alert-circle
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
function Arrow_down($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v0.344.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const iconNode = [
    ["path", { "d": "M12 5v14" }],
    ["path", { "d": "m19 12-7 7-7-7" }]
  ];
  Icon($$renderer, spread_props([
    { name: "arrow-down" },
    $$sanitized_props,
    {
      /**
       * @component @name ArrowDown
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTIgNXYxNCIgLz4KICA8cGF0aCBkPSJtMTkgMTItNyA3LTctNyIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/arrow-down
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
function Arrow_left($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v0.344.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const iconNode = [
    ["path", { "d": "m12 19-7-7 7-7" }],
    ["path", { "d": "M19 12H5" }]
  ];
  Icon($$renderer, spread_props([
    { name: "arrow-left" },
    $$sanitized_props,
    {
      /**
       * @component @name ArrowLeft
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJtMTIgMTktNy03IDctNyIgLz4KICA8cGF0aCBkPSJNMTkgMTJINSIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/arrow-left
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
function Arrow_up($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v0.344.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const iconNode = [
    ["path", { "d": "m5 12 7-7 7 7" }],
    ["path", { "d": "M12 19V5" }]
  ];
  Icon($$renderer, spread_props([
    { name: "arrow-up" },
    $$sanitized_props,
    {
      /**
       * @component @name ArrowUp
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJtNSAxMiA3LTcgNyA3IiAvPgogIDxwYXRoIGQ9Ik0xMiAxOVY1IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/arrow-up
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
function Camera($$renderer, $$props) {
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
        "d": "M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"
      }
    ],
    ["circle", { "cx": "12", "cy": "13", "r": "3" }]
  ];
  Icon($$renderer, spread_props([
    { name: "camera" },
    $$sanitized_props,
    {
      /**
       * @component @name Camera
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTQuNSA0aC01TDcgN0g0YTIgMiAwIDAgMC0yIDJ2OWEyIDIgMCAwIDAgMiAyaDE2YTIgMiAwIDAgMCAyLTJWOWEyIDIgMCAwIDAtMi0yaC0zbC0yLjUtM3oiIC8+CiAgPGNpcmNsZSBjeD0iMTIiIGN5PSIxMyIgcj0iMyIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/camera
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
function Check_circle_2($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v0.344.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const iconNode = [
    ["circle", { "cx": "12", "cy": "12", "r": "10" }],
    ["path", { "d": "m9 12 2 2 4-4" }]
  ];
  Icon($$renderer, spread_props([
    { name: "check-circle-2" },
    $$sanitized_props,
    {
      /**
       * @component @name CheckCircle2
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIgLz4KICA8cGF0aCBkPSJtOSAxMiAyIDIgNC00IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/check-circle-2
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
function Chevron_down($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v0.344.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const iconNode = [["path", { "d": "m6 9 6 6 6-6" }]];
  Icon($$renderer, spread_props([
    { name: "chevron-down" },
    $$sanitized_props,
    {
      /**
       * @component @name ChevronDown
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJtNiA5IDYgNiA2LTYiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/chevron-down
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
function Crosshair($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v0.344.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const iconNode = [
    ["circle", { "cx": "12", "cy": "12", "r": "10" }],
    ["line", { "x1": "22", "x2": "18", "y1": "12", "y2": "12" }],
    ["line", { "x1": "6", "x2": "2", "y1": "12", "y2": "12" }],
    ["line", { "x1": "12", "x2": "12", "y1": "6", "y2": "2" }],
    ["line", { "x1": "12", "x2": "12", "y1": "22", "y2": "18" }]
  ];
  Icon($$renderer, spread_props([
    { name: "crosshair" },
    $$sanitized_props,
    {
      /**
       * @component @name Crosshair
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIgLz4KICA8bGluZSB4MT0iMjIiIHgyPSIxOCIgeTE9IjEyIiB5Mj0iMTIiIC8+CiAgPGxpbmUgeDE9IjYiIHgyPSIyIiB5MT0iMTIiIHkyPSIxMiIgLz4KICA8bGluZSB4MT0iMTIiIHgyPSIxMiIgeTE9IjYiIHkyPSIyIiAvPgogIDxsaW5lIHgxPSIxMiIgeDI9IjEyIiB5MT0iMjIiIHkyPSIxOCIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/crosshair
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
function Download($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v0.344.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const iconNode = [
    ["path", { "d": "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }],
    ["polyline", { "points": "7 10 12 15 17 10" }],
    ["line", { "x1": "12", "x2": "12", "y1": "15", "y2": "3" }]
  ];
  Icon($$renderer, spread_props([
    { name: "download" },
    $$sanitized_props,
    {
      /**
       * @component @name Download
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMjEgMTV2NGEyIDIgMCAwIDEtMiAySDVhMiAyIDAgMCAxLTItMnYtNCIgLz4KICA8cG9seWxpbmUgcG9pbnRzPSI3IDEwIDEyIDE1IDE3IDEwIiAvPgogIDxsaW5lIHgxPSIxMiIgeDI9IjEyIiB5MT0iMTUiIHkyPSIzIiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/download
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
function Git_compare($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v0.344.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const iconNode = [
    ["circle", { "cx": "18", "cy": "18", "r": "3" }],
    ["circle", { "cx": "6", "cy": "6", "r": "3" }],
    ["path", { "d": "M13 6h3a2 2 0 0 1 2 2v7" }],
    ["path", { "d": "M11 18H8a2 2 0 0 1-2-2V9" }]
  ];
  Icon($$renderer, spread_props([
    { name: "git-compare" },
    $$sanitized_props,
    {
      /**
       * @component @name GitCompare
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8Y2lyY2xlIGN4PSIxOCIgY3k9IjE4IiByPSIzIiAvPgogIDxjaXJjbGUgY3g9IjYiIGN5PSI2IiByPSIzIiAvPgogIDxwYXRoIGQ9Ik0xMyA2aDNhMiAyIDAgMCAxIDIgMnY3IiAvPgogIDxwYXRoIGQ9Ik0xMSAxOEg4YTIgMiAwIDAgMS0yLTJWOSIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/git-compare
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
function History($$renderer, $$props) {
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
      { "d": "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" }
    ],
    ["path", { "d": "M3 3v5h5" }],
    ["path", { "d": "M12 7v5l4 2" }]
  ];
  Icon($$renderer, spread_props([
    { name: "history" },
    $$sanitized_props,
    {
      /**
       * @component @name History
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMyAxMmE5IDkgMCAxIDAgOS05IDkuNzUgOS43NSAwIDAgMC02Ljc0IDIuNzRMMyA4IiAvPgogIDxwYXRoIGQ9Ik0zIDN2NWg1IiAvPgogIDxwYXRoIGQ9Ik0xMiA3djVsNCAyIiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/history
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
function Image($$renderer, $$props) {
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
        "width": "18",
        "height": "18",
        "x": "3",
        "y": "3",
        "rx": "2",
        "ry": "2"
      }
    ],
    ["circle", { "cx": "9", "cy": "9", "r": "2" }],
    ["path", { "d": "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" }]
  ];
  Icon($$renderer, spread_props([
    { name: "image" },
    $$sanitized_props,
    {
      /**
       * @component @name Image
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cmVjdCB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHg9IjMiIHk9IjMiIHJ4PSIyIiByeT0iMiIgLz4KICA8Y2lyY2xlIGN4PSI5IiBjeT0iOSIgcj0iMiIgLz4KICA8cGF0aCBkPSJtMjEgMTUtMy4wODYtMy4wODZhMiAyIDAgMCAwLTIuODI4IDBMNiAyMSIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/image
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
function Info($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v0.344.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const iconNode = [
    ["circle", { "cx": "12", "cy": "12", "r": "10" }],
    ["path", { "d": "M12 16v-4" }],
    ["path", { "d": "M12 8h.01" }]
  ];
  Icon($$renderer, spread_props([
    { name: "info" },
    $$sanitized_props,
    {
      /**
       * @component @name Info
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIgLz4KICA8cGF0aCBkPSJNMTIgMTZ2LTQiIC8+CiAgPHBhdGggZD0iTTEyIDhoLjAxIiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/info
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
function List_checks($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v0.344.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const iconNode = [
    ["path", { "d": "m3 17 2 2 4-4" }],
    ["path", { "d": "m3 7 2 2 4-4" }],
    ["path", { "d": "M13 6h8" }],
    ["path", { "d": "M13 12h8" }],
    ["path", { "d": "M13 18h8" }]
  ];
  Icon($$renderer, spread_props([
    { name: "list-checks" },
    $$sanitized_props,
    {
      /**
       * @component @name ListChecks
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJtMyAxNyAyIDIgNC00IiAvPgogIDxwYXRoIGQ9Im0zIDcgMiAyIDQtNCIgLz4KICA8cGF0aCBkPSJNMTMgNmg4IiAvPgogIDxwYXRoIGQ9Ik0xMyAxMmg4IiAvPgogIDxwYXRoIGQ9Ik0xMyAxOGg4IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/list-checks
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
function Map_pin($$renderer, $$props) {
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
      { "d": "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" }
    ],
    ["circle", { "cx": "12", "cy": "10", "r": "3" }]
  ];
  Icon($$renderer, spread_props([
    { name: "map-pin" },
    $$sanitized_props,
    {
      /**
       * @component @name MapPin
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMjAgMTBjMCA2LTggMTItOCAxMnMtOC02LTgtMTJhOCA4IDAgMCAxIDE2IDBaIiAvPgogIDxjaXJjbGUgY3g9IjEyIiBjeT0iMTAiIHI9IjMiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/map-pin
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
function Minus($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v0.344.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const iconNode = [["path", { "d": "M5 12h14" }]];
  Icon($$renderer, spread_props([
    { name: "minus" },
    $$sanitized_props,
    {
      /**
       * @component @name Minus
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNNSAxMmgxNCIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/minus
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
function Refresh_cw($$renderer, $$props) {
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
      { "d": "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" }
    ],
    ["path", { "d": "M21 3v5h-5" }],
    [
      "path",
      { "d": "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" }
    ],
    ["path", { "d": "M8 16H3v5" }]
  ];
  Icon($$renderer, spread_props([
    { name: "refresh-cw" },
    $$sanitized_props,
    {
      /**
       * @component @name RefreshCw
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMyAxMmE5IDkgMCAwIDEgOS05IDkuNzUgOS43NSAwIDAgMSA2Ljc0IDIuNzRMMjEgOCIgLz4KICA8cGF0aCBkPSJNMjEgM3Y1aC01IiAvPgogIDxwYXRoIGQ9Ik0yMSAxMmE5IDkgMCAwIDEtOSA5IDkuNzUgOS43NSAwIDAgMS02Ljc0LTIuNzRMMyAxNiIgLz4KICA8cGF0aCBkPSJNOCAxNkgzdjUiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/refresh-cw
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
function Rotate_ccw($$renderer, $$props) {
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
      { "d": "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" }
    ],
    ["path", { "d": "M3 3v5h5" }]
  ];
  Icon($$renderer, spread_props([
    { name: "rotate-ccw" },
    $$sanitized_props,
    {
      /**
       * @component @name RotateCcw
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMyAxMmE5IDkgMCAxIDAgOS05IDkuNzUgOS43NSAwIDAgMC02Ljc0IDIuNzRMMyA4IiAvPgogIDxwYXRoIGQ9Ik0zIDN2NWg1IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/rotate-ccw
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
function Rotate_cw($$renderer, $$props) {
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
      { "d": "M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8" }
    ],
    ["path", { "d": "M21 3v5h-5" }]
  ];
  Icon($$renderer, spread_props([
    { name: "rotate-cw" },
    $$sanitized_props,
    {
      /**
       * @component @name RotateCw
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMjEgMTJhOSA5IDAgMSAxLTktOWMyLjUyIDAgNC45MyAxIDYuNzQgMi43NEwyMSA4IiAvPgogIDxwYXRoIGQ9Ik0yMSAzdjVoLTUiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/rotate-cw
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
function Ruler($$renderer, $$props) {
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
        "d": "M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"
      }
    ],
    ["path", { "d": "m14.5 12.5 2-2" }],
    ["path", { "d": "m11.5 9.5 2-2" }],
    ["path", { "d": "m8.5 6.5 2-2" }],
    ["path", { "d": "m17.5 15.5 2-2" }]
  ];
  Icon($$renderer, spread_props([
    { name: "ruler" },
    $$sanitized_props,
    {
      /**
       * @component @name Ruler
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMjEuMyAxNS4zYTIuNCAyLjQgMCAwIDEgMCAzLjRsLTIuNiAyLjZhMi40IDIuNCAwIDAgMS0zLjQgMEwyLjcgOC43YTIuNDEgMi40MSAwIDAgMSAwLTMuNGwyLjYtMi42YTIuNDEgMi40MSAwIDAgMSAzLjQgMFoiIC8+CiAgPHBhdGggZD0ibTE0LjUgMTIuNSAyLTIiIC8+CiAgPHBhdGggZD0ibTExLjUgOS41IDItMiIgLz4KICA8cGF0aCBkPSJtOC41IDYuNSAyLTIiIC8+CiAgPHBhdGggZD0ibTE3LjUgMTUuNSAyLTIiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/ruler
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
function Sliders($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v0.344.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const iconNode = [
    ["line", { "x1": "4", "x2": "4", "y1": "21", "y2": "14" }],
    ["line", { "x1": "4", "x2": "4", "y1": "10", "y2": "3" }],
    ["line", { "x1": "12", "x2": "12", "y1": "21", "y2": "12" }],
    ["line", { "x1": "12", "x2": "12", "y1": "8", "y2": "3" }],
    ["line", { "x1": "20", "x2": "20", "y1": "21", "y2": "16" }],
    ["line", { "x1": "20", "x2": "20", "y1": "12", "y2": "3" }],
    ["line", { "x1": "2", "x2": "6", "y1": "14", "y2": "14" }],
    ["line", { "x1": "10", "x2": "14", "y1": "8", "y2": "8" }],
    ["line", { "x1": "18", "x2": "22", "y1": "16", "y2": "16" }]
  ];
  Icon($$renderer, spread_props([
    { name: "sliders" },
    $$sanitized_props,
    {
      /**
       * @component @name Sliders
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8bGluZSB4MT0iNCIgeDI9IjQiIHkxPSIyMSIgeTI9IjE0IiAvPgogIDxsaW5lIHgxPSI0IiB4Mj0iNCIgeTE9IjEwIiB5Mj0iMyIgLz4KICA8bGluZSB4MT0iMTIiIHgyPSIxMiIgeTE9IjIxIiB5Mj0iMTIiIC8+CiAgPGxpbmUgeDE9IjEyIiB4Mj0iMTIiIHkxPSI4IiB5Mj0iMyIgLz4KICA8bGluZSB4MT0iMjAiIHgyPSIyMCIgeTE9IjIxIiB5Mj0iMTYiIC8+CiAgPGxpbmUgeDE9IjIwIiB4Mj0iMjAiIHkxPSIxMiIgeTI9IjMiIC8+CiAgPGxpbmUgeDE9IjIiIHgyPSI2IiB5MT0iMTQiIHkyPSIxNCIgLz4KICA8bGluZSB4MT0iMTAiIHgyPSIxNCIgeTE9IjgiIHkyPSI4IiAvPgogIDxsaW5lIHgxPSIxOCIgeDI9IjIyIiB5MT0iMTYiIHkyPSIxNiIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/sliders
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
function Target($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v0.344.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const iconNode = [
    ["circle", { "cx": "12", "cy": "12", "r": "10" }],
    ["circle", { "cx": "12", "cy": "12", "r": "6" }],
    ["circle", { "cx": "12", "cy": "12", "r": "2" }]
  ];
  Icon($$renderer, spread_props([
    { name: "target" },
    $$sanitized_props,
    {
      /**
       * @component @name Target
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIgLz4KICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSI2IiAvPgogIDxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjIiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/target
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
function Upload($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v0.344.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const iconNode = [
    ["path", { "d": "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }],
    ["polyline", { "points": "17 8 12 3 7 8" }],
    ["line", { "x1": "12", "x2": "12", "y1": "3", "y2": "15" }]
  ];
  Icon($$renderer, spread_props([
    { name: "upload" },
    $$sanitized_props,
    {
      /**
       * @component @name Upload
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMjEgMTV2NGEyIDIgMCAwIDEtMiAySDVhMiAyIDAgMCAxLTItMnYtNCIgLz4KICA8cG9seWxpbmUgcG9pbnRzPSIxNyA4IDEyIDMgNyA4IiAvPgogIDxsaW5lIHgxPSIxMiIgeDI9IjEyIiB5MT0iMyIgeTI9IjE1IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/upload
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
function CalibrationInput($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let input = $$props["input"];
    const sundialTypes = [
      { value: "equatorial", label: "赤道式", desc: "盘面平行于赤道面" },
      { value: "horizontal", label: "水平式", desc: "盘面水平放置" },
      { value: "vertical", label: "垂直式", desc: "盘面垂直南向" }
    ];
    let isLocating = false;
    function getTypeBtnClass(typeValue) {
      const base = "w-full text-left px-3 py-2 rounded-lg transition-all duration-200 border ";
      if (input.sundialType === typeValue) {
        return base + "bg-amber-500/20 border-amber-500/50";
      }
      return base + "bg-slate-700/30 border-slate-600/30 hover:bg-slate-700/50";
    }
    function formatDateTimeLocal(dateStr) {
      const date = new Date(dateStr);
      const year = date.getFullYear();
      const month = (date.getMonth() + 1).toString().padStart(2, "0");
      const day = date.getDate().toString().padStart(2, "0");
      const hours = date.getHours().toString().padStart(2, "0");
      const minutes = date.getMinutes().toString().padStart(2, "0");
      return `${year}-${month}-${day}T${hours}:${minutes}`;
    }
    $$renderer2.push(`<div class="glass-card p-5 space-y-5 h-full overflow-y-auto"><div><h3 class="font-display text-base text-amber-500 font-semibold mb-3 flex items-center gap-2">`);
    Sun($$renderer2, { class: "w-4 h-4" });
    $$renderer2.push(`<!----> 日晷类型</h3> <div class="space-y-2"><!--[-->`);
    const each_array = ensure_array_like(sundialTypes);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let type = each_array[$$index];
      $$renderer2.push(`<button${attr_class(clsx(getTypeBtnClass(type.value)))}><div class="font-medium text-sm text-slate-100">${escape_html(type.label)}</div> <div class="text-xs text-slate-400">${escape_html(type.desc)}</div></button>`);
    }
    $$renderer2.push(`<!--]--></div></div> <div class="border-t border-slate-700/50 pt-5"><h3 class="font-display text-base text-amber-500 font-semibold mb-3 flex items-center gap-2">`);
    Globe($$renderer2, { class: "w-4 h-4" });
    $$renderer2.push(`<!----> 地理位置</h3> <div class="relative mb-3"><button class="w-full px-3 py-2 bg-slate-700/50 border border-slate-600/50 rounded-lg text-sm text-left focus:outline-none focus:border-amber-500/50 text-slate-200 flex items-center justify-between hover:bg-slate-700/70 transition-colors"><span class="flex items-center gap-2">`);
    Map_pin($$renderer2, { class: "w-4 h-4 text-amber-400" });
    $$renderer2.push(`<!----> ${escape_html("选择城市...")}</span> `);
    Chevron_down($$renderer2, { class: "w-4 h-4 text-slate-400" });
    $$renderer2.push(`<!----></button> `);
    {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--></div> <button${attr("disabled", isLocating, true)} class="w-full mb-3 px-3 py-2 bg-blue-500/20 hover:bg-blue-500/30 border border-blue-500/30 rounded-lg text-sm text-blue-400 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors">`);
    Crosshair($$renderer2, { class: `w-4 h-4 ${""}` });
    $$renderer2.push(`<!----> ${escape_html("使用当前位置")}</button> `);
    {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--> <div class="space-y-3"><div><label class="text-xs text-slate-400 mb-1 block">纬度 (°)</label> <div class="flex items-center gap-2"><input type="range" min="-90" max="90" step="0.1"${attr("value", input.latitude)} class="flex-1 accent-amber-500"/> <input type="number" min="-90" max="90" step="0.1"${attr("value", input.latitude.toFixed(1))} class="w-20 px-2 py-1 bg-slate-700/50 border border-slate-600/50 rounded text-sm text-center focus:outline-none focus:border-amber-500/50"/></div></div> <div><label class="text-xs text-slate-400 mb-1 block">经度 (°)</label> <div class="flex items-center gap-2"><input type="range" min="-180" max="180" step="0.1"${attr("value", input.longitude)} class="flex-1 accent-amber-500"/> <input type="number" min="-180" max="180" step="0.1"${attr("value", input.longitude.toFixed(1))} class="w-20 px-2 py-1 bg-slate-700/50 border border-slate-600/50 rounded text-sm text-center focus:outline-none focus:border-amber-500/50"/></div></div></div></div> <div class="border-t border-slate-700/50 pt-5"><h3 class="font-display text-base text-amber-500 font-semibold mb-3 flex items-center gap-2">`);
    Calendar($$renderer2, { class: "w-4 h-4" });
    $$renderer2.push(`<!----> 测量时间</h3> <input type="datetime-local"${attr("value", formatDateTimeLocal(input.measurementDateTime))} class="w-full px-3 py-2 bg-slate-700/50 border border-slate-600/50 rounded-lg text-sm focus:outline-none focus:border-amber-500/50 text-slate-100"/></div> <div class="border-t border-slate-700/50 pt-5"><h3 class="font-display text-base text-amber-500 font-semibold mb-3 flex items-center gap-2">`);
    Image($$renderer2, { class: "w-4 h-4" });
    $$renderer2.push(`<!----> 现场照片</h3> `);
    if (input.photoDataUrl) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<div class="relative rounded-lg overflow-hidden border border-slate-600/50"><img${attr("src", input.photoDataUrl)} alt="现场照片" class="w-full h-auto"/> <button class="absolute top-2 right-2 w-8 h-8 bg-red-500/80 hover:bg-red-500 rounded-full flex items-center justify-center text-white transition-colors">`);
      X($$renderer2, { class: "w-4 h-4" });
      $$renderer2.push(`<!----></button></div> <p class="text-xs text-slate-500 mt-2 text-center">点击右上角 × 可删除照片</p>`);
    } else {
      $$renderer2.push("<!--[-1-->");
      $$renderer2.push(`<div class="space-y-2"><label class="block"><div class="border-2 border-dashed border-slate-600/50 rounded-lg p-5 text-center hover:border-amber-500/50 hover:bg-slate-700/20 transition-all cursor-pointer">`);
      Upload($$renderer2, { class: "w-8 h-8 mx-auto mb-2 text-slate-500" });
      $$renderer2.push(`<!----> <p class="text-sm text-slate-300 mb-1">上传现场照片</p> <p class="text-xs text-slate-500">支持 JPG、PNG 格式</p></div> <input type="file" accept="image/*" class="hidden"/></label> <label class="block"><div class="border-2 border-slate-600/30 rounded-lg p-3 text-center hover:border-blue-500/50 hover:bg-blue-500/10 transition-all cursor-pointer"><div class="flex items-center justify-center gap-2">`);
      Camera($$renderer2, { class: "w-4 h-4 text-blue-400" });
      $$renderer2.push(`<!----> <span class="text-xs text-blue-300">拍照（移动端）</span></div></div> <input type="file" accept="image/*" capture="environment" class="hidden"/></label></div>`);
    }
    $$renderer2.push(`<!--]--></div> <div class="border-t border-slate-700/50 pt-5"><h3 class="font-display text-base text-amber-500 font-semibold mb-3 flex items-center gap-2">`);
    Ruler($$renderer2, { class: "w-4 h-4" });
    $$renderer2.push(`<!----> 实测数据</h3> <div class="space-y-3"><div><label class="text-xs text-slate-400 mb-1 block">晷针长度 (m)</label> <input type="number" min="0.1" max="100" step="0.01"${attr("value", input.gnomonLength)} class="w-full px-3 py-2 bg-slate-700/50 border border-slate-600/50 rounded-lg text-sm focus:outline-none focus:border-amber-500/50 text-slate-100"/></div> <div><label class="text-xs text-slate-400 mb-1 block">影长 (m)</label> <input type="number" min="0.01" max="1000" step="0.01"${attr("value", input.shadowLength)} class="w-full px-3 py-2 bg-slate-700/50 border border-slate-600/50 rounded-lg text-sm focus:outline-none focus:border-amber-500/50 text-slate-100"/></div> <div><label class="text-xs text-slate-400 mb-1 flex items-center justify-between"><span>影子方向 (°)</span> <span class="text-slate-300 font-mono">${escape_html(input.shadowDirection.toFixed(1))}°</span></label> <input type="range" min="0" max="360" step="0.5"${attr("value", input.shadowDirection)} class="w-full accent-amber-500"/> <div class="flex justify-between text-xs text-slate-500 mt-1"><span>0° 北</span> <span>90° 东</span> <span>180° 南</span> <span>270° 西</span></div></div></div></div> <div class="border-t border-slate-700/50 pt-5"><h3 class="font-display text-base text-amber-500 font-semibold mb-3 flex items-center gap-2">`);
    Compass($$renderer2, { class: "w-4 h-4" });
    $$renderer2.push(`<!----> 日晷安装参数</h3> <div class="space-y-3"><div><label class="text-xs text-slate-400 mb-1 flex items-center justify-between"><span>日晷朝向 (°)</span> <span class="text-slate-300 font-mono">${escape_html(input.dialOrientation.toFixed(1))}°</span></label> <input type="range" min="0" max="360" step="0.5"${attr("value", input.dialOrientation)} class="w-full accent-amber-500"/></div> <div><label class="text-xs text-slate-400 mb-1 flex items-center justify-between"><span>日晷倾角 (°)</span> <span class="text-slate-300 font-mono">${escape_html(input.dialTiltAngle.toFixed(1))}°</span></label> <input type="range" min="0" max="90" step="0.5"${attr("value", input.dialTiltAngle)} class="w-full accent-amber-500"/></div></div></div></div>`);
    bind_props($$props, { input });
  });
}
function formatTimeFromHours(hours) {
  const h = Math.floor(hours);
  const m = Math.floor((hours - h) * 60);
  const s = Math.floor(((hours - h) * 60 - m) * 60);
  return `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
}
function DeviationChart($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let result = fallback($$props["result"], null);
    let height = fallback($$props["height"], 200);
    $$renderer2.push(`<div class="glass-card p-4"><div class="flex items-center gap-2 mb-3">`);
    Bar_chart_3($$renderer2, { class: "w-4 h-4 text-amber-500" });
    $$renderer2.push(`<!----> <h3 class="font-display text-sm text-amber-500 font-semibold">偏差可视化</h3></div> `);
    if (result) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<div class="relative"><canvas class="w-full"${attr_style(`height: ${stringify(height)}px;`)}></canvas></div>`);
    } else {
      $$renderer2.push("<!--[-1-->");
      $$renderer2.push(`<div${attr_class(`flex items-center justify-center h-[${stringify(height)}px] text-slate-500 text-sm`)}>暂无数据</div>`);
    }
    $$renderer2.push(`<!--]--></div>`);
    bind_props($$props, { result, height });
  });
}
function CalibrationResult($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let result = fallback($$props["result"], null);
    let input = fallback($$props["input"], null);
    function getConfidenceColor(confidence) {
      switch (confidence) {
        case "high":
          return "text-emerald-400";
        case "medium":
          return "text-amber-400";
        case "low":
          return "text-red-400";
        default:
          return "text-slate-400";
      }
    }
    function getConfidenceBg(confidence) {
      switch (confidence) {
        case "high":
          return "bg-emerald-500/20 border-emerald-500/30";
        case "medium":
          return "bg-amber-500/20 border-amber-500/30";
        case "low":
          return "bg-red-500/20 border-red-500/30";
        default:
          return "bg-slate-500/20 border-slate-500/30";
      }
    }
    function formatComparisonValue(point) {
      if (point.unit === "h") {
        return formatTimeFromHours(point.theoretical);
      }
      if (point.unit === "m") {
        return point.theoretical.toFixed(2) + " " + point.unit;
      }
      return point.theoretical.toFixed(2) + point.unit;
    }
    function formatMeasuredValue(point) {
      if (point.unit === "h") {
        return formatTimeFromHours(point.measured);
      }
      if (point.unit === "m") {
        return point.measured.toFixed(2) + " " + point.unit;
      }
      return point.measured.toFixed(2) + point.unit;
    }
    function formatDifference(point) {
      const prefix = point.difference >= 0 ? "+" : "";
      if (point.unit === "h") {
        const diffMins = point.difference * 60;
        return prefix + diffMins.toFixed(1) + " 分钟";
      }
      if (point.unit === "m") {
        return prefix + point.difference.toFixed(2) + " " + point.unit;
      }
      return prefix + point.difference.toFixed(2) + point.unit;
    }
    function getDiffClass(point) {
      const absDiff = Math.abs(point.difference);
      const threshold = point.unit === "h" ? 0.1 : point.unit === "m" ? 0.1 : 1;
      if (absDiff < threshold * 0.3) return "text-emerald-400";
      if (absDiff < threshold) return "text-amber-400";
      return "text-red-400";
    }
    if (result) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<div class="glass-card p-5 h-full overflow-y-auto"><div class="flex items-center justify-between mb-5"><h3 class="font-display text-base text-amber-500 font-semibold flex items-center gap-2">`);
      Target($$renderer2, { class: "w-4 h-4" });
      $$renderer2.push(`<!----> 校准质量评估</h3> <div class="relative"><button class="px-3 py-1.5 bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-500/30 rounded-lg text-sm text-emerald-400 flex items-center gap-1.5 transition-colors">`);
      Download($$renderer2, { class: "w-4 h-4" });
      $$renderer2.push(`<!----> 导出</button> `);
      {
        $$renderer2.push("<!--[-1-->");
      }
      $$renderer2.push(`<!--]--></div></div> <div class="mb-5"><div${attr_class(`rounded-xl p-4 border ${getConfidenceBg(result.confidence)}`)}><div class="flex items-center justify-between mb-3"><span class="text-slate-300 text-sm">综合评分</span> <span${attr_class(`text-2xl font-bold ${getConfidenceColor(result.confidence)}`)}>${escape_html(result.qualityScore)} 分</span></div> <div class="w-full bg-slate-700/50 rounded-full h-2 mb-2"><div${attr_class(`h-2 rounded-full transition-all duration-500 ${result.qualityScore >= 80 ? "bg-emerald-500" : result.qualityScore >= 60 ? "bg-amber-500" : "bg-red-500"}`)}${attr_style(`width: ${result.qualityScore}%`)}></div></div> <div class="flex items-center justify-between text-xs"><span class="text-slate-500">可信度:</span> <span${attr_class(clsx(getConfidenceColor(result.confidence)))}>${escape_html(result.confidence === "high" ? "高" : result.confidence === "medium" ? "中" : "低")}</span></div></div></div> `);
      if (result) {
        $$renderer2.push("<!--[0-->");
        $$renderer2.push(`<div class="mb-5">`);
        DeviationChart($$renderer2, { result, height: 180 });
        $$renderer2.push(`<!----></div>`);
      } else {
        $$renderer2.push("<!--[-1-->");
      }
      $$renderer2.push(`<!--]--> <div class="border-t border-slate-700/50 pt-5 mb-5"><h3 class="font-display text-base text-amber-500 font-semibold mb-3 flex items-center gap-2">`);
      Trending_up($$renderer2, { class: "w-4 h-4" });
      $$renderer2.push(`<!----> 理论值 vs 实测值</h3> <div class="space-y-2"><div class="bg-slate-700/30 rounded-lg p-3"><div class="flex justify-between items-center mb-2"><span class="text-xs text-slate-400">影长</span> <span${attr_class(clsx(getDiffClass(result.comparison.shadowLength)))}>${escape_html(formatDifference(result.comparison.shadowLength))}</span></div> <div class="flex justify-between text-sm"><div><div class="text-xs text-slate-500">理论值</div> <div class="font-mono text-slate-200">${escape_html(formatComparisonValue(result.comparison.shadowLength))}</div></div> <div class="text-right"><div class="text-xs text-slate-500">实测值</div> <div class="font-mono text-slate-200">${escape_html(formatMeasuredValue(result.comparison.shadowLength))}</div></div></div></div> <div class="bg-slate-700/30 rounded-lg p-3"><div class="flex justify-between items-center mb-2"><span class="text-xs text-slate-400">影子角度</span> <span${attr_class(clsx(getDiffClass(result.comparison.shadowAngle)))}>${escape_html(formatDifference(result.comparison.shadowAngle))}</span></div> <div class="flex justify-between text-sm"><div><div class="text-xs text-slate-500">理论值</div> <div class="font-mono text-slate-200">${escape_html(formatComparisonValue(result.comparison.shadowAngle))}</div></div> <div class="text-right"><div class="text-xs text-slate-500">实测值</div> <div class="font-mono text-slate-200">${escape_html(formatMeasuredValue(result.comparison.shadowAngle))}</div></div></div></div> <div class="bg-slate-700/30 rounded-lg p-3"><div class="flex justify-between items-center mb-2"><span class="text-xs text-slate-400">太阳高度角</span> <span${attr_class(clsx(getDiffClass(result.comparison.solarAltitude)))}>${escape_html(formatDifference(result.comparison.solarAltitude))}</span></div> <div class="flex justify-between text-sm"><div><div class="text-xs text-slate-500">理论值</div> <div class="font-mono text-slate-200">${escape_html(formatComparisonValue(result.comparison.solarAltitude))}</div></div> <div class="text-right"><div class="text-xs text-slate-500">反推值</div> <div class="font-mono text-slate-200">${escape_html(formatMeasuredValue(result.comparison.solarAltitude))}</div></div></div></div> <div class="bg-slate-700/30 rounded-lg p-3"><div class="flex justify-between items-center mb-2"><span class="text-xs text-slate-400">太阳方位角</span> <span${attr_class(clsx(getDiffClass(result.comparison.solarAzimuth)))}>${escape_html(formatDifference(result.comparison.solarAzimuth))}</span></div> <div class="flex justify-between text-sm"><div><div class="text-xs text-slate-500">理论值</div> <div class="font-mono text-slate-200">${escape_html(formatComparisonValue(result.comparison.solarAzimuth))}</div></div> <div class="text-right"><div class="text-xs text-slate-500">反推值</div> <div class="font-mono text-slate-200">${escape_html(formatMeasuredValue(result.comparison.solarAzimuth))}</div></div></div></div> <div class="bg-slate-700/30 rounded-lg p-3"><div class="flex justify-between items-center mb-2"><span class="text-xs text-slate-400">真太阳时</span> <span${attr_class(clsx(getDiffClass(result.comparison.solarTime)))}>${escape_html(formatDifference(result.comparison.solarTime))}</span></div> <div class="flex justify-between text-sm"><div><div class="text-xs text-slate-500">理论值</div> <div class="font-mono text-slate-200">${escape_html(formatComparisonValue(result.comparison.solarTime))}</div></div> <div class="text-right"><div class="text-xs text-slate-500">反推值</div> <div class="font-mono text-slate-200">${escape_html(formatMeasuredValue(result.comparison.solarTime))}</div></div></div></div></div></div> <div class="border-t border-slate-700/50 pt-5"><h3 class="font-display text-base text-amber-500 font-semibold mb-3 flex items-center gap-2">`);
      Alert_circle($$renderer2, { class: "w-4 h-4" });
      $$renderer2.push(`<!----> 偏差分析</h3> <div class="grid grid-cols-2 gap-3"><div class="bg-slate-700/30 rounded-lg p-3 text-center"><div class="text-xs text-slate-400 mb-1">朝向偏差</div> <div${attr_class(`font-mono text-lg ${Math.abs(result.deviation.orientationDeviation) > 5 ? "text-red-400" : Math.abs(result.deviation.orientationDeviation) > 1 ? "text-amber-400" : "text-emerald-400"}`)}>${escape_html(result.deviation.orientationDeviation >= 0 ? "+" : "")}
            ${escape_html(result.deviation.orientationDeviation.toFixed(1))}°</div></div> <div class="bg-slate-700/30 rounded-lg p-3 text-center"><div class="text-xs text-slate-400 mb-1">倾角偏差</div> <div${attr_class(`font-mono text-lg ${Math.abs(result.deviation.tiltDeviation) > 5 ? "text-red-400" : Math.abs(result.deviation.tiltDeviation) > 1 ? "text-amber-400" : "text-emerald-400"}`)}>${escape_html(result.deviation.tiltDeviation >= 0 ? "+" : "")}
            ${escape_html(result.deviation.tiltDeviation.toFixed(1))}°</div></div> <div class="bg-slate-700/30 rounded-lg p-3 text-center"><div class="text-xs text-slate-400 mb-1">刻度误差</div> <div${attr_class(`font-mono text-lg ${Math.abs(result.deviation.scaleError) > 5 ? "text-red-400" : Math.abs(result.deviation.scaleError) > 1 ? "text-amber-400" : "text-emerald-400"}`)}>${escape_html(result.deviation.scaleError >= 0 ? "+" : "")}
            ${escape_html(result.deviation.scaleError.toFixed(1))}%</div></div> <div class="bg-slate-700/30 rounded-lg p-3 text-center"><div class="text-xs text-slate-400 mb-1">时间偏差</div> <div${attr_class(`font-mono text-lg ${Math.abs(result.deviation.timeDeviation) > 10 ? "text-red-400" : Math.abs(result.deviation.timeDeviation) > 2 ? "text-amber-400" : "text-emerald-400"}`)}>${escape_html(result.deviation.timeDeviation >= 0 ? "+" : "")}
            ${escape_html(result.deviation.timeDeviation.toFixed(1))} 分</div></div></div></div></div>`);
    } else {
      $$renderer2.push("<!--[-1-->");
      $$renderer2.push(`<div class="glass-card p-5 h-full flex items-center justify-center"><div class="text-center text-slate-500">`);
      Target($$renderer2, { class: "w-12 h-12 mx-auto mb-3 opacity-50" });
      $$renderer2.push(`<!----> <p class="text-sm">输入实测数据后点击"开始校准"</p> <p class="text-xs mt-1">查看偏差分析与校准建议</p></div></div>`);
    }
    $$renderer2.push(`<!--]-->`);
    bind_props($$props, { result, input });
  });
}
function CalibrationSteps($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let steps = fallback($$props["steps"], () => [], true);
    let currentStep = fallback($$props["currentStep"], 0);
    function getPriorityColor(priority) {
      switch (priority) {
        case "critical":
          return "bg-red-500/10 border-red-500/30 text-red-400";
        case "important":
          return "bg-amber-500/10 border-amber-500/30 text-amber-400";
        case "minor":
          return "bg-emerald-500/10 border-emerald-500/30 text-emerald-400";
        default:
          return "bg-slate-500/10 border-slate-500/30 text-slate-400";
      }
    }
    function getPriorityLabel(priority) {
      switch (priority) {
        case "critical":
          return "重要";
        case "important":
          return "建议";
        case "minor":
          return "轻微";
        default:
          return "";
      }
    }
    function getStepBgClass(index) {
      if (index < currentStep) {
        return "bg-emerald-500/10 border-emerald-500/30";
      }
      if (index === currentStep) {
        return "bg-amber-500/10 border-amber-500/50 ring-1 ring-amber-500/30";
      }
      return "bg-slate-700/20 border-slate-600/30";
    }
    function getStepNumberClass(index) {
      if (index < currentStep) {
        return "bg-emerald-500 text-white";
      }
      if (index === currentStep) {
        return "bg-amber-500 text-white";
      }
      return "bg-slate-600 text-slate-300";
    }
    $$renderer2.push(`<div class="glass-card p-5 h-full flex flex-col overflow-hidden"><div class="flex items-center justify-between mb-4 flex-shrink-0"><h3 class="font-display text-base text-amber-500 font-semibold flex items-center gap-2">`);
    List_checks($$renderer2, { class: "w-4 h-4" });
    $$renderer2.push(`<!----> 校准步骤</h3> <span class="text-xs text-slate-500">${escape_html(currentStep + 1)} / ${escape_html(steps.length)}</span></div> `);
    if (steps.length > 0) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<div class="flex-1 min-h-0 overflow-hidden flex flex-col"><div class="flex-1 overflow-y-auto space-y-2 mb-4"><!--[-->`);
      const each_array = ensure_array_like(steps);
      for (let index = 0, $$length = each_array.length; index < $$length; index++) {
        let step = each_array[index];
        $$renderer2.push(`<div${attr_class(`rounded-lg p-3 border cursor-pointer transition-all duration-200 ${getStepBgClass(index)}`)}><div class="flex items-start gap-3"><div${attr_class(`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold ${getStepNumberClass(index)}`)}>`);
        if (index < currentStep) {
          $$renderer2.push("<!--[0-->");
          Check_circle_2($$renderer2, { class: "w-4 h-4" });
        } else {
          $$renderer2.push("<!--[-1-->");
          $$renderer2.push(`${escape_html(index + 1)}`);
        }
        $$renderer2.push(`<!--]--></div> <div class="flex-1 min-w-0"><div class="flex items-center justify-between mb-1"><h4 class="font-medium text-sm text-slate-100">${escape_html(step.title)}</h4> <span${attr_class(`text-xs px-2 py-0.5 rounded-full border ${getPriorityColor(step.priority)}`)}>${escape_html(getPriorityLabel(step.priority))}</span></div> <p class="text-xs text-slate-400 mb-2">${escape_html(step.description)}</p> <div class="flex items-center gap-2">`);
        if (step.direction === "clockwise") {
          $$renderer2.push("<!--[0-->");
          Rotate_cw($$renderer2, { class: "w-4 h-4 text-amber-400" });
        } else if (step.direction === "counterclockwise") {
          $$renderer2.push("<!--[1-->");
          Rotate_ccw($$renderer2, { class: "w-4 h-4 text-amber-400" });
        } else if (step.direction === "up") {
          $$renderer2.push("<!--[2-->");
          Arrow_up($$renderer2, { class: "w-4 h-4 text-amber-400" });
        } else if (step.direction === "down") {
          $$renderer2.push("<!--[3-->");
          Arrow_down($$renderer2, { class: "w-4 h-4 text-amber-400" });
        } else {
          $$renderer2.push("<!--[-1-->");
          Minus($$renderer2, { class: "w-4 h-4 text-amber-400" });
        }
        $$renderer2.push(`<!--]--> <span class="text-sm font-mono text-amber-300">${escape_html(step.adjustment)}</span></div></div></div></div>`);
      }
      $$renderer2.push(`<!--]--></div> <div class="flex items-center justify-between pt-4 border-t border-slate-700/50 flex-shrink-0"><button${attr("disabled", currentStep === 0, true)} class="px-4 py-2 bg-slate-700/50 hover:bg-slate-600/50 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg text-sm border border-slate-600/50 transition-colors">上一步</button> <button${attr("disabled", currentStep >= steps.length - 1, true)} class="px-4 py-2 bg-amber-500/20 hover:bg-amber-500/30 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg text-sm border border-amber-500/30 text-amber-400 transition-colors">下一步</button></div></div>`);
    } else {
      $$renderer2.push("<!--[-1-->");
      $$renderer2.push(`<div class="flex-1 flex items-center justify-center"><div class="text-center text-slate-500">`);
      Info($$renderer2, { class: "w-10 h-10 mx-auto mb-2 opacity-50" });
      $$renderer2.push(`<!----> <p class="text-sm">暂无校准步骤</p></div></div>`);
    }
    $$renderer2.push(`<!--]--></div>`);
    bind_props($$props, { steps, currentStep });
  });
}
const STORAGE_KEY = "sundial-measurements";
const MAX_RECORDS = 50;
function loadRecords() {
  if (typeof localStorage === "undefined") return [];
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}
function saveRecords(records) {
  if (typeof localStorage === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(records));
}
function createMeasurementStore() {
  const records = writable([]);
  const selectedRecordIds = writable([]);
  const activeRecordId = writable(null);
  if (typeof localStorage !== "undefined") {
    records.set(loadRecords());
  }
  const activeRecord = derived([records, activeRecordId], ([$records, $activeId]) => {
    if (!$activeId) return null;
    return $records.find((r) => r.id === $activeId) || null;
  });
  const selectedRecords = derived([records, selectedRecordIds], ([$records, $selectedIds]) => {
    return $records.filter((r) => $selectedIds.includes(r.id));
  });
  const activeRecords = derived(records, ($records) => {
    return $records.filter((r) => !r.isArchived);
  });
  const archivedRecords = derived(records, ($records) => {
    return $records.filter((r) => r.isArchived);
  });
  function addRecord(input, result, photoAnalysis, name) {
    const $records = get(records);
    if ($records.length >= MAX_RECORDS) {
      return null;
    }
    const now = Date.now();
    const dateStr = new Date(input.measurementDateTime).toLocaleDateString("zh-CN");
    const newRecord = {
      id: now.toString(),
      name: name || `测量记录 ${$records.length + 1} - ${dateStr}`,
      createdAt: now,
      updatedAt: now,
      input: { ...input },
      result: { ...result },
      photoAnalysis: photoAnalysis || null,
      notes: "",
      tags: [],
      isArchived: false
    };
    const updated = [newRecord, ...$records];
    records.set(updated);
    saveRecords(updated);
    return newRecord;
  }
  function updateRecord(id, updates) {
    const $records = get(records);
    const index = $records.findIndex((r) => r.id === id);
    if (index === -1) return;
    const updated = [...$records];
    updated[index] = {
      ...updated[index],
      ...updates,
      updatedAt: Date.now()
    };
    records.set(updated);
    saveRecords(updated);
  }
  function deleteRecord(id) {
    const $records = get(records);
    const updated = $records.filter((r) => r.id !== id);
    records.set(updated);
    saveRecords(updated);
    selectedRecordIds.update((ids) => ids.filter((i) => i !== id));
    const $activeId = get(activeRecordId);
    if ($activeId === id) {
      activeRecordId.set(null);
    }
  }
  function toggleArchive(id) {
    const $records = get(records);
    const record = $records.find((r) => r.id === id);
    if (record) {
      updateRecord(id, { isArchived: !record.isArchived });
    }
  }
  function setActiveRecord(id) {
    activeRecordId.set(id);
  }
  function toggleSelectRecord(id) {
    selectedRecordIds.update((ids) => {
      if (ids.includes(id)) {
        return ids.filter((i) => i !== id);
      }
      return [...ids, id];
    });
  }
  function clearSelection() {
    selectedRecordIds.set([]);
  }
  function selectAll() {
    const $active = get(activeRecords);
    selectedRecordIds.set($active.map((r) => r.id));
  }
  function addTag(id, tag) {
    const $records = get(records);
    const record = $records.find((r) => r.id === id);
    if (record && !record.tags?.includes(tag)) {
      updateRecord(id, { tags: [...record.tags || [], tag] });
    }
  }
  function removeTag(id, tag) {
    const $records = get(records);
    const record = $records.find((r) => r.id === id);
    if (record) {
      updateRecord(id, { tags: (record.tags || []).filter((t) => t !== tag) });
    }
  }
  function exportRecordsJSON(ids) {
    const $records = get(records);
    const toExport = ids ? $records.filter((r) => ids.includes(r.id)) : $records;
    const data = {
      exportedAt: (/* @__PURE__ */ new Date()).toISOString(),
      count: toExport.length,
      records: toExport
    };
    return JSON.stringify(data, null, 2);
  }
  function importRecords(jsonStr) {
    try {
      const data = JSON.parse(jsonStr);
      const importedRecords = data.records || [];
      const $records = get(records);
      const existingIds = new Set($records.map((r) => r.id));
      const newRecords = importedRecords.filter((r) => !existingIds.has(r.id));
      if (newRecords.length === 0) return 0;
      const merged = [...newRecords, ...$records].slice(0, MAX_RECORDS);
      records.set(merged);
      saveRecords(merged);
      return newRecords.length;
    } catch {
      return 0;
    }
  }
  function loadRecordToInput(id) {
    const $records = get(records);
    const record = $records.find((r) => r.id === id);
    if (record) {
      return { ...record.input };
    }
    return null;
  }
  function getRecordsByTag(tag) {
    const $records = get(records);
    return $records.filter((r) => r.tags?.includes(tag));
  }
  function searchRecords(query) {
    const $records = get(records);
    const q = query.toLowerCase();
    return $records.filter(
      (r) => r.name.toLowerCase().includes(q) || r.notes?.toLowerCase().includes(q) || r.tags?.some((t) => t.toLowerCase().includes(q)) || r.input.locationName?.toLowerCase().includes(q)
    );
  }
  return {
    records,
    activeRecords,
    archivedRecords,
    activeRecord,
    activeRecordId,
    selectedRecords,
    selectedRecordIds,
    addRecord,
    updateRecord,
    deleteRecord,
    toggleArchive,
    setActiveRecord,
    toggleSelectRecord,
    clearSelection,
    selectAll,
    addTag,
    removeTag,
    exportRecordsJSON,
    importRecords,
    loadRecordToInput,
    getRecordsByTag,
    searchRecords
  };
}
const measurementStore = createMeasurementStore();
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    const { activeRecords } = measurementStore;
    const DEFAULT_LATITUDE = 39.9;
    const DEFAULT_LONGITUDE = 116.4;
    const DEFAULT_GNOMON_LENGTH = 1;
    let input = createDefaultInput();
    let result = null;
    let currentStep = 0;
    let isCalculating = false;
    let activeTab = "input";
    let compareRecordIds = [];
    function createDefaultInput() {
      const now = /* @__PURE__ */ new Date();
      return {
        gnomonLength: DEFAULT_GNOMON_LENGTH,
        shadowLength: 1.2,
        shadowDirection: 5,
        measurementDateTime: now.toISOString(),
        latitude: DEFAULT_LATITUDE,
        longitude: DEFAULT_LONGITUDE,
        sundialType: "horizontal",
        dialTiltAngle: 0,
        dialOrientation: 180
      };
    }
    function getTabClass(tab) {
      const base = "px-3 py-2 text-xs rounded-lg transition-all flex items-center gap-1.5 ";
      if (activeTab === tab) {
        return base + "bg-amber-500/20 text-amber-300 border border-amber-500/50";
      }
      return base + "text-slate-400 hover:text-slate-200 hover:bg-slate-700/30 border border-transparent";
    }
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<div class="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 text-white"><header class="border-b border-slate-700/40 backdrop-blur-sm bg-slate-900/30 sticky top-0 z-20"><div class="max-w-[1800px] mx-auto px-4 sm:px-6 py-3 flex items-center justify-between"><div class="flex items-center gap-3"><button class="w-9 h-9 rounded-xl bg-slate-700/50 hover:bg-slate-600/50 flex items-center justify-center border border-slate-600/50 transition-colors">`);
      Arrow_left($$renderer3, { class: "w-4 h-4" });
      $$renderer3.push(`<!----></button> <div class="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-400 to-orange-600 flex items-center justify-center shadow-lg shadow-amber-500/20">`);
      Target($$renderer3, { class: "w-5 h-5 text-white" });
      $$renderer3.push(`<!----></div> <div class="hidden sm:block"><h1 class="font-display text-lg font-bold text-amber-500 tracking-wider">AI 实景校准与报告中心</h1> <p class="text-xs text-slate-500">AI Sundial Calibration &amp; Report Center</p></div></div> <div class="flex items-center gap-2">`);
      {
        $$renderer3.push("<!--[-1-->");
      }
      $$renderer3.push(`<!--]--> `);
      {
        $$renderer3.push("<!--[-1-->");
      }
      $$renderer3.push(`<!--]--> <button class="px-3 py-2 bg-slate-700/50 hover:bg-slate-600/50 rounded-lg text-sm border border-slate-600/50 transition-colors flex items-center gap-1.5">`);
      Refresh_cw($$renderer3, { class: "w-4 h-4" });
      $$renderer3.push(`<!----> <span class="hidden sm:inline">重置</span></button> <button${attr("disabled", isCalculating, true)} class="px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 rounded-lg text-sm font-medium text-white shadow-lg shadow-amber-500/20 transition-all duration-200 flex items-center gap-1.5 disabled:opacity-50">`);
      Play($$renderer3, { class: "w-4 h-4" });
      $$renderer3.push(`<!----> <span class="hidden sm:inline">${escape_html("开始校准")}</span> <span class="sm:hidden">${escape_html("校准")}</span></button></div></div> <div class="max-w-[1800px] mx-auto px-4 sm:px-6 pb-2 flex gap-2 overflow-x-auto"><button${attr_class(clsx(getTabClass("input")))}>`);
      Sliders($$renderer3, { class: "w-3.5 h-3.5" });
      $$renderer3.push(`<!----> 校准参数</button> <button${attr_class(clsx(getTabClass("photo")))}>`);
      Camera($$renderer3, { class: "w-3.5 h-3.5" });
      $$renderer3.push(`<!----> 照片分析</button> <button${attr_class(clsx(getTabClass("history")))}>`);
      History($$renderer3, { class: "w-3.5 h-3.5" });
      $$renderer3.push(`<!----> 历史记录 `);
      if (store_get($$store_subs ??= {}, "$activeRecords", activeRecords).length > 0) {
        $$renderer3.push("<!--[0-->");
        $$renderer3.push(`<span class="bg-slate-600 text-slate-200 px-1.5 py-0.5 rounded text-xs">${escape_html(store_get($$store_subs ??= {}, "$activeRecords", activeRecords).length)}</span>`);
      } else {
        $$renderer3.push("<!--[-1-->");
      }
      $$renderer3.push(`<!--]--></button> `);
      if (compareRecordIds.length > 0) {
        $$renderer3.push("<!--[0-->");
        $$renderer3.push(`<button${attr_class(clsx(getTabClass("compare")))}>`);
        Git_compare($$renderer3, { class: "w-3.5 h-3.5" });
        $$renderer3.push(`<!----> 对比</button>`);
      } else {
        $$renderer3.push("<!--[-1-->");
      }
      $$renderer3.push(`<!--]--></div></header> <main class="max-w-[1800px] mx-auto px-4 sm:px-6 py-4">`);
      {
        $$renderer3.push("<!--[0-->");
        $$renderer3.push(`<div class="grid grid-cols-12 gap-4 lg:gap-6 min-h-[calc(100vh-120px)]"><div class="col-span-12 lg:col-span-3 h-full">`);
        CalibrationInput($$renderer3, {
          get input() {
            return input;
          },
          set input($$value) {
            input = $$value;
            $$settled = false;
          }
        });
        $$renderer3.push(`<!----></div> <div class="col-span-12 lg:col-span-5 flex flex-col gap-4 min-h-[400px] lg:min-h-0"><div class="flex-1 glass-card rounded-xl overflow-hidden min-h-0">`);
        CalibrationResult($$renderer3, { result, input });
        $$renderer3.push(`<!----></div></div> <div class="col-span-12 lg:col-span-4 flex flex-col gap-4 h-full"><div class="flex-1 min-h-0 overflow-hidden">`);
        CalibrationSteps($$renderer3, {
          steps: [],
          get currentStep() {
            return currentStep;
          },
          set currentStep($$value) {
            currentStep = $$value;
            $$settled = false;
          }
        });
        $$renderer3.push(`<!----></div> `);
        {
          $$renderer3.push("<!--[-1-->");
        }
        $$renderer3.push(`<!--]--></div></div>`);
      }
      $$renderer3.push(`<!--]--></main> `);
      {
        $$renderer3.push("<!--[-1-->");
      }
      $$renderer3.push(`<!--]--></div>`);
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
export {
  _page as default
};
