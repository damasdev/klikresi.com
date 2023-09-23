

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.431b1561.js","_app/immutable/chunks/scheduler.2aecb5fb.js","_app/immutable/chunks/index.b69b95a3.js","_app/immutable/chunks/paths.3b255979.js"];
export const stylesheets = [];
export const fonts = [];
