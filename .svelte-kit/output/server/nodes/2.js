

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const universal = {
  "ssr": false
};
export const universal_id = "src/routes/+page.ts";
export const imports = ["_app/immutable/nodes/2.BgkOT8t6.js","_app/immutable/chunks/BimzPX6F.js","_app/immutable/chunks/YK3oDBfS.js","_app/immutable/chunks/BHm_P5Ce.js","_app/immutable/chunks/DQdumUKV.js","_app/immutable/chunks/DxTIuSTY.js","_app/immutable/chunks/aaScoccQ.js"];
export const stylesheets = [];
export const fonts = [];
