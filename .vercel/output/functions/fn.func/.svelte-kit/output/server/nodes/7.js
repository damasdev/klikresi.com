

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/dashboard/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/7.ce752bf9.js","_app/immutable/chunks/scheduler.e367d6f5.js","_app/immutable/chunks/index.4f31dce3.js"];
export const stylesheets = [];
export const fonts = [];
