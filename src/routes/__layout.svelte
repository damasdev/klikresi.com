<script>
	import '../app.css'
	import '@fontsource/montserrat/700.css'
	import '@fontsource/montserrat/600.css'
	import '@fontsource/montserrat/400.css'
	import '@fontsource/mulish/700.css'
	import '@fontsource/mulish/400.css'
	import Navbar from '$lib/components/Navbar.svelte'
	import Footer from '$lib/components/Footer.svelte'
	import Wa from '$lib/components/Wa.svelte'
</script>

<svelte:head>
	<title>Klik Resi - Lacak Paket Jadi Mudah</title>
	<meta
		content="Klik Resi adalah platform yang membantu pelaku eCommerce untuk melacak paket secara otomatis."
		name="description"
	/>
</svelte:head>

<div class="w-full min-h-screen scroll-smooth">
	<Navbar />

	<slot />

	<Footer />
	<Wa />
</div>

<style lang="postcss" global>
	button {
		@apply px-6 py-3 font-sans rounded-full outline-none transition duration-300;
	}
	button.primary {
		@apply bg-primary text-white hover:bg-blue-700;
	}
	button.outline {
		@apply border-white text-white border-[1px] hover:bg-white hover:text-black;
	}
	button.outline-dark {
		@apply border-black text-black border-[1px] hover:bg-black hover:text-white;
	}
	button.secondary {
		@apply bg-white text-black hover:bg-neutral-100;
	}
</style>
