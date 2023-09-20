<script lang="ts">
	import Hero from '$lib/components/Hero.svelte'
	import Feature from '$lib/components/Feature.svelte'
	import Pricing from '$lib/components/Pricing.svelte'
	import Faq from '$lib/components/Faq.svelte'
	import StickyWa from '$lib/components/StickyWa.svelte'
</script>

<svelte:head>
	<title>Klik Resi - Lacak Paket Jadi Mudah</title>
	<meta
		content="Klik Resi adalah platform yang membantu pelaku eCommerce untuk melacak paket secara otomatis."
		name="description"
	/>
</svelte:head>

<Hero />

<Feature />

<section class="pb-16 md:pb-20">
	<div class="container mx-auto px-6">
		<div class="flex md:items-center flex-col md:flex-row space-y-16 md:space-y-0 md:space-x-24">
			<div class="flex flex-col md:w-1/2">
				<h2 class="text-xl md:text-2xl lg:text-3xl font-bold font-heading mb-4">Informasi Yang Lebih Akurat</h2>
				<h3 class="flex items-center mb-2 text-lg font-bold text-gray-900">Status Pengiriman</h3>
				<p class="mb-4 text-gray-700">
					Kami melakukan klasifikasi paket kedalam 11 status mulai dari pickup hingga delivered
					secara otomatis.
				</p>
				<h3 class="flex items-center mb-2 text-lg font-bold text-gray-900">Riwayat</h3>
				<p class="mb-4 text-gray-700">
					Kamu bisa melihat riwayat pengiriman mulai dari tanggal hingga lokasi paket secara real-time.
				</p>
			</div>
			<div class="relative md:w-1/2">
				<img src="/images/summary.webp" alt="Summary" class="w-full h-full rounded-md" />
			</div>
		</div>
	</div>
</section>

<Pricing />

<Faq />

<StickyWa />
