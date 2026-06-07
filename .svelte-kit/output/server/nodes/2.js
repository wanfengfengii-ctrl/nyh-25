

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const universal = {
  "ssr": false
};
export const universal_id = "src/routes/+page.ts";
export const imports = ["_app/immutable/nodes/2.DIkm25NB.js","_app/immutable/chunks/DO7rFoIb.js","_app/immutable/chunks/BkjGKTc9.js","_app/immutable/chunks/D23tJsQ3.js","_app/immutable/chunks/B7M7KZ4O.js","_app/immutable/chunks/bit2PJ2i.js","_app/immutable/chunks/D2zD_ctW.js","_app/immutable/chunks/CBkj99Qp.js","_app/immutable/chunks/DK2_QM3p.js","_app/immutable/chunks/DTGl7d-d.js"];
export const stylesheets = [];
export const fonts = [];
