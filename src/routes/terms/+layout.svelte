<script lang="ts">
	import Navbar from '$lib/components/Home/Navbar.svelte';
	import Footer from '$lib/components/Home/Footer.svelte';
</script>

<div class="w-full min-h-screen scroll-smooth">
	<Navbar />
	
	<slot />
	
	<Footer />
</div>
