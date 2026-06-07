

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const universal = {
  "ssr": false
};
export const universal_id = "src/routes/+page.ts";
export const imports = ["_app/immutable/nodes/2.DDrl8f2a.js","_app/immutable/chunks/C8ljrCLQ.js","_app/immutable/chunks/BlUFxKqS.js","_app/immutable/chunks/Cftn-Hqf.js","_app/immutable/chunks/CQiZbgde.js","_app/immutable/chunks/f1ydsf1N.js","_app/immutable/chunks/BBOVe7_l.js"];
export const stylesheets = [];
export const fonts = [];
