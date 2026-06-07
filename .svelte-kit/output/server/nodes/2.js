

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const universal = {
  "ssr": false
};
export const universal_id = "src/routes/+page.ts";
export const imports = ["_app/immutable/nodes/2.Dye7Fw2B.js","_app/immutable/chunks/CccdY9tH.js","_app/immutable/chunks/CbNMObeC.js","_app/immutable/chunks/yoV3ktm0.js","_app/immutable/chunks/B5jYMjmH.js","_app/immutable/chunks/lsJTQPrH.js","_app/immutable/chunks/B11h_Szs.js","_app/immutable/chunks/Co30PYDo.js","_app/immutable/chunks/CW55drJ9.js","_app/immutable/chunks/Da9aMGFQ.js"];
export const stylesheets = [];
export const fonts = [];
