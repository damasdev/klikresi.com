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

<section class="pb-16 md:pb-24">
	<div class="container mx-auto px-6">
		<div class="flex md:items-center flex-col md:flex-row space-y-16 md:space-y-0 md:space-x-24">
			<div class="flex flex-col md:w-1/2">
				<h2 class="text-xl md:text-2xl lg:text-3xl font-bold font-heading mb-4">
					Informasi Yang Lebih Akurat
				</h2>
				<h3 class="flex items-center mb-2 text-lg font-bold text-gray-900">Status Pengiriman</h3>
				<p class="mb-4 text-gray-700">
					Kami melakukan klasifikasi paket kedalam 11 kategori mulai dari pickup hingga delivered
					secara otomatis.
				</p>
				<h3 class="flex items-center mb-2 text-lg font-bold text-gray-900">Riwayat</h3>
				<p class="mb-4 text-gray-700">
					Kamu bisa melihat riwayat pengiriman mulai dari tanggal hingga lokasi paket secara
					real-time.
				</p>
			</div>
			<div class="relative md:w-1/2">
				<img src="/images/summary.webp" alt="Summary" class="w-full h-full rounded-md" />
			</div>
		</div>
	</div>
</section>

<section class="pb-16 md:pb-24">
	<div class="container mx-auto px-6">
		<div class="flex md:items-center flex-col md:flex-row space-y-16 md:space-y-0">
			<div class="flex flex-col md:w-1/2 md:order-last md:ml-24">
				<h2 class="text-xl md:text-2xl lg:text-3xl font-bold font-heading mb-4">
					Mengapa Memilih Klik Resi?
				</h2>
				<h3 class="flex items-center mb-2 text-lg font-bold text-gray-900">Business Owner</h3>
				<p class="mb-4 text-gray-700">
					Kerepotan mengurus ribuan resi pelanggan? Kami akan bantu dan kamu tinggal terima beres.
				</p>
				<h3 class="flex items-center mb-2 text-lg font-bold text-gray-900">Developer</h3>
				<p class="mb-4 text-gray-700">
					Butuh API untuk cek resi secara otomatis? Kami akan bantu integrasi dengan sistem yang kamu punya.
				</p>
			</div>
			<div class="relative md:w-1/2">
				<img src="/images/developer.webp" alt="Developer" class="w-full h-full rounded-md" />
			</div>
		</div>
	</div>
</section>

<Pricing />

<Faq />

<StickyWa />
