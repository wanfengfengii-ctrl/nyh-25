

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.BGYMXMjy.js","_app/immutable/chunks/DO7rFoIb.js","_app/immutable/chunks/BkjGKTc9.js","_app/immutable/chunks/D23tJsQ3.js"];
export const stylesheets = ["_app/immutable/assets/0.C2XixuHH.css"];
export const fonts = [];
