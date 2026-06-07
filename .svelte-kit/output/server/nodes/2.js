

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const universal = {
  "ssr": false
};
export const universal_id = "src/routes/+page.ts";
export const imports = ["_app/immutable/nodes/2.B5Gs-kK6.js","_app/immutable/chunks/6ofpDSTB.js","_app/immutable/chunks/onGPnXmB.js","_app/immutable/chunks/BWsLbMaN.js","_app/immutable/chunks/BbeqyZwP.js","_app/immutable/chunks/CJgPXwjf.js","_app/immutable/chunks/CliYfAgJ.js","_app/immutable/chunks/BGGfSDgV.js","_app/immutable/chunks/CZ95Ho_y.js","_app/immutable/chunks/BYP7nSbY.js"];
export const stylesheets = [];
export const fonts = [];
