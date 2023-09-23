

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.3addb36b.js","_app/immutable/chunks/scheduler.e367d6f5.js","_app/immutable/chunks/index.4f31dce3.js","_app/immutable/chunks/singletons.bc2369e4.js"];
export const stylesheets = [];
export const fonts = [];
