import { c as create_ssr_component, f as add_attribute, e as escape, d as each, v as validate_component } from "./ssr.js";
const ButtonCta = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<a target="_blank" href="https://api.whatsapp.com/send/?phone=6285156676849&text=Halo%20Damas!%20Aku%20baru%20aja%20mengunjungi%20klikresi.com%20nih.%20Mau%20%20tanya-tanya%20%20dong!&type=phone_number&app_absent=0" class="py-2 flex items-center px-6 outline rounded-lg" aria-label="Hubungi Kami via Whatsapp" data-svelte-h="svelte-7zmdc3"><span>Hubungi Kami</span> <svg xmlns="http://www.w3.org/2000/svg" class="ml-auto" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><line x1="5" y1="12" x2="19" y2="12"></line><line x1="13" y1="18" x2="19" y2="12"></line><line x1="13" y1="6" x2="19" y2="12"></line></svg></a>`;
});
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const menus = [
    { url: "/#beranda", title: "Beranda" },
    { url: "/#produk", title: "Produk" },
    { url: "/#faq", title: "FAQ" }
  ];
  return `<nav class="sticky top-0 w-full bg-black text-white py-6 z-10"><div class="mx-auto container flex items-center justify-between flex-wrap px-6"><div class="flex items-center flex-shrink-0 text-white mr-6" data-svelte-h="svelte-o9xhis"><a href="/"><img src="/images/logo.svg" alt="Klik Resi Logo"${add_attribute("width", 99, 0)}${add_attribute("height", 13, 0)}></a></div> <div class="block md:hidden"><button class="flex items-center px-3 py-2 border rounded text-white border-white" data-svelte-h="svelte-gvmsc0"><svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path></svg></button></div> <div class="${escape("hidden", true) + " w-full flex-grow md:flex md:items-center md:w-auto"}"><div class="text-sm md:flex-grow">${each(menus, (menu) => {
    return `<a${add_attribute("href", menu.url, 0)} class="block mt-4 md:inline-block md:mt-0 mr-8">${escape(menu.title)}</a>`;
  })}</div> <div class="mt-10 md:mt-0">${validate_component(ButtonCta, "ButtonCta").$$render($$result, {}, {}, {})}</div></div></div></nav>`;
});
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<footer class="pt-16 md:pt-20 pb-24 bg-black text-white" data-svelte-h="svelte-6brg8e"><div class="container mx-auto flex flex-col md:flex-row justify-between space-y-10 md:space-y-0 md:space-x-14 px-6"><div class="flex flex-col space-y-6 md:w-2/3"><img src="/images/logo.svg"${add_attribute("width", 199, 0)}${add_attribute("height", 34.16, 0)} alt="Klik Resi Logo"> <p>Kamu bisa memonitor semua pengirimanmu secara real-time dengan berbagai fitur terintegrasi.</p></div> <div class="flex flex-col md:flex-row md:space-x-6 space-y-10 md:space-y-0 md:w-3/4"><div class="flex flex-col space-y-6 w-1/2"><h4 class="font-heading font-semibold">Bantuan Pengguna</h4> <ul><li class="mb-2"><a class="text-gray-400 hover:text-gray-300" href="/privacy-policy">Kebijakan Privasi</a></li> <li class="mb-2"><a class="text-gray-400 hover:text-gray-300" href="/terms">Ketentuan Layanan</a></li></ul></div> <div class="flex flex-col space-y-6 w-1/2"><h4 class="font-heading font-semibold">Produk</h4> <ul><li class="mb-2"><a class="text-gray-400 hover:text-gray-300" href="https://documenter.getpostman.com/view/29221489/2s9YC7SBgH">Tracking API</a></li> <li class="mb-2"><a class="text-gray-400 hover:text-gray-300" href="https://blog.klikresi.com" target="_blank">Artikel</a></li></ul></div></div></div></footer> <div class="border-t-[1px] border-gray-700 py-4 bg-black text-white" data-svelte-h="svelte-1iyff58"><div class="container mx-auto px-6"><p>Copyright 2023 © Klik Resi. All rights reserved.
			<span class="hidden md:inline">Various trademarks held by their respective owners.</span></p></div></div>`;
});
export {
  Footer as F,
  Navbar as N
};
