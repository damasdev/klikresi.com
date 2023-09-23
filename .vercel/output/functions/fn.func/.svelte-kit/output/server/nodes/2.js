

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/dashboard/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.e4d9ae42.js","_app/immutable/chunks/scheduler.e367d6f5.js","_app/immutable/chunks/index.4f31dce3.js"];
export const stylesheets = ["_app/immutable/assets/400.423e7507.css"];
export const fonts = [];
