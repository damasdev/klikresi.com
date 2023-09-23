import { c as create_ssr_component } from "../../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-mc1kyo_START -->${$$result.title = `<title>Dashboard</title>`, ""}<!-- HEAD_svelte-mc1kyo_END -->`, ""} <section class="py-10 md:py-20 scroll-mt-28" data-svelte-h="svelte-1e5gqhj"><div class="container mx-auto px-6"><div class="border rounded-lg p-10 md:p-20">Dashboard</div></div></section>`;
});
export {
  Page as default
};
