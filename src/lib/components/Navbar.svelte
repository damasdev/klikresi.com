<script>
	import ButtonCta from '$lib/components/ButtonCta.svelte'

	let show = false

	const menus = [
		{
			url: '/#beranda',
			title: 'Beranda'
		},
		{
			url: '/#produk',
			title: 'Produk'
		},
		{
			url: '/#faq',
			title: 'FAQ'
		}
	]
</script>

<nav class="sticky top-0 w-full bg-black text-white py-6 z-10">
	<div class="mx-auto container flex items-center justify-between flex-wrap px-6">
		<div class="flex items-center flex-shrink-0 text-white mr-6">
			<a href="/"><img src="/images/logo.svg" alt="Klik Resi Logo" width={99} height={13} /></a>
		</div>
		<div class="block md:hidden">
			<button
				class="flex items-center px-3 py-2 border rounded text-white border-white"
				on:click|preventDefault={() => (show = !show)}
			>
				<svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
					<title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
				</svg>
			</button>
		</div>
		<div class="{show ? 'block' : 'hidden'} w-full flex-grow md:flex md:items-center md:w-auto">
			<div class="text-sm md:flex-grow">
				{#each menus as menu}
					<a href={menu.url} class="block mt-4 md:inline-block md:mt-0 mr-8">{menu.title}</a>
				{/each}
			</div>
			<div class="mt-10 md:mt-0">
				<ButtonCta />
			</div>
		</div>
	</div>
</nav>
