<script lang="ts">
	const features = [
		{
			title: 'Tracking Page',
			icon: 'truck',
			description: 'Kamu bisa memonitor semua aktivitas pengiriman dalam satu dashboard.'
		},
		{
			title: 'Tracking API',
			icon: 'envelope',
			description: 'Kamu bisa melakukan integrasi ke lebih dari 10+ kurir sekaligus.'
		},
		{
			title: 'Webhook',
			icon: 'notification',
			description: 'Kamu bisa kirim notifikasi setiap ada perubahan status pengiriman.'
		},
		{
			title: 'Analytic',
			icon: 'analytic',
			description: 'Kamu bisa menganalisa performa dari riwayat pengirimanmu.'
		}
	]
</script>

<section class="py-16 md:py-20 scroll-mt-20" id="produk">
	<div class="container mx-auto px-6">
		<div class="flex flex-col justify-center md:text-center">
			<div class="flex flex-col space-y-3">
				<h2 class="text-xl md:text-2xl lg:text-3xl font-bold font-heading">
					Emang Boleh Lacak Paket Semudah Ini?
				</h2>
				<p>Nggak perlu repot ngurusin resi pelanggan, kamu tinggal terima beres</p>
			</div>
		</div>
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 mt-14 md:mt-20">
			{#each features as feature}
				<div class="flex flex-col space-y-3">
					<div class="flex space-x-3">
						<img
							src={`/icons/${feature.icon}.svg`}
							class="transform transition duration-300 hover:rotate-12"
							alt={feature.title}
							width={24}
							height={24}
						/>
						<h3 class="font-bold font-heading">{feature.title}</h3>
					</div>
					<p>{feature.description}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

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
					Butuh API untuk cek resi secara otomatis? Kami akan bantu integrasi dengan sistem yang
					kamu punya.
				</p>
			</div>
			<div class="relative md:w-1/2">
				<img src="/images/developer.webp" alt="Developer" class="w-full h-full rounded-md" />
			</div>
		</div>
	</div>
</section>
