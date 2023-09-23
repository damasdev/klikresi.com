import { g as getContext, c as create_ssr_component, b as subscribe, e as escape } from "../../chunks/ssr.js";
const getStores = () => {
  const stores = getContext("__svelte__");
  return {
    /** @type {typeof page} */
    page: {
      subscribe: stores.page.subscribe
    },
    /** @type {typeof navigating} */
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    /** @type {typeof updated} */
    updated: stores.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
const Error$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-18mcrm5_START -->${$$result.title = `<title>Klik Resi</title>`, ""}<meta name="robots" content="noindex,nofollow"><!-- HEAD_svelte-18mcrm5_END -->`, ""} <section class="py-10 md:py-20 scroll-mt-28"><div class="container mx-auto px-6"><div class="flex justify-center items-center border rounded-lg p-10 md:p-20">${escape($page.status)}: ${escape($page.error?.message)}</div></div></section>`;
});
export {
  Error$1 as default
};
