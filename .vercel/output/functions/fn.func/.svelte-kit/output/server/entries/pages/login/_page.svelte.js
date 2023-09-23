import { c as create_ssr_component } from "../../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-1bel8ov_START -->${$$result.title = `<title>Login</title>`, ""}<!-- HEAD_svelte-1bel8ov_END -->`, ""} <section class="py-10 md:py-20 scroll-mt-28" data-svelte-h="svelte-io2qo5"><div class="container mx-auto px-6"><div class="border rounded-lg p-10 md:p-20 text-center"><h1 class="mb-2 text-2xl font-bold">Login Member</h1> <p class="mb-6 text-sm text-gray-700">Silahkan login untuk mulai menggunakan Klik Resi</p> <form class="flex justify-center" method="post" action="?/OAuth2"><button class="px-4 py-2 border flex gap-2 border-slate-200 rounded-lg text-slate-700"><img class="w-6 h-6" src="/icons/google.svg" loading="lazy" alt="google logo"> <span>Login with Google</span></button></form></div></div></section>`;
});
export {
  Page as default
};
