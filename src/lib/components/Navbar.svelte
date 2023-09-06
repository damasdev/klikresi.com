<script>
	import Cta from '$lib/components/Cta.svelte'
</script>

<nav class="sticky top-0 w-full bg-black text-white py-6 z-10">
	<div class="flex justify-between container mx-auto">
		<div class="flex items-center space-x-16">
			<img src="/images/logo.svg" alt="Klik Resi Logo" width={99} height={13} />
			<div class="flex space-x-10">
				<a href="/#beranda">Beranda</a>
				<a href="/#produk">Produk</a>
				<a href="/#harga">Harga</a>
				<a href="/#faq">FAQ</a>
			</div>
		</div>
		<div class="flex items-center space-x-6">
			<Cta />
		</div>
	</div>
</nav>
