<script lang="ts">
	import Hero from '$lib/components/Home/Hero.svelte';
	import Feature from '$lib/components/Home/Feature.svelte';
	import Product from '$lib/components/Home/Product.svelte';
	import Faq from '$lib/components/Home/Faq.svelte';
	import StickyWa from '$lib/components/Home/StickyWa.svelte';
	import Navbar from '$lib/components/Home/Navbar.svelte';
	import Footer from '$lib/components/Home/Footer.svelte';
</script>

<svelte:head>
	<title>Klik Resi - Lacak Paket Jadi Mudah</title>
	<meta
		content="Klik Resi adalah platform yang membantu pelaku eCommerce untuk melacak paket secara otomatis."
		name="description"
	/>
</svelte:head>

<Navbar />

<Hero />

<Feature />

<Product />

<Faq />

<StickyWa />

<Footer />
