<script>
	import '../app.css'
	import '@fontsource/montserrat/700.css'
	import '@fontsource/montserrat/600.css'
	import '@fontsource/montserrat/400.css'
	import '@fontsource/mulish/700.css'
	import '@fontsource/mulish/400.css'
	import Navbar from '$lib/components/Navbar.svelte'
	import Footer from '$lib/components/Footer.svelte'
	import StickyWa from '$lib/components/StickyWa.svelte'
</script>

<div class="w-full min-h-screen scroll-smooth overflow-x-hidden">
	<Navbar />

	<slot />

	<Footer />

	<StickyWa />
</div>
