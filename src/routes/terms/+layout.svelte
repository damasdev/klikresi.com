<script lang="ts">
	import '../../app.css';
	import '@fontsource/montserrat/700.css';
	import '@fontsource/montserrat/600.css';
	import '@fontsource/montserrat/400.css';
	import '@fontsource/mulish/700.css';
	import '@fontsource/mulish/400.css';
	import Navbar from '$lib/components/Home/Navbar.svelte';
	import Footer from '$lib/components/Home/Footer.svelte';
</script>

<div class="w-full min-h-screen scroll-smooth">
	<Navbar />
	
	<slot />
	
	<Footer />
</div>
