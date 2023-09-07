<script lang="ts">
	import Faq from '$lib/components/Faq.svelte'
	import Pricing from '$lib/components/Pricing.svelte'

	const features = [
		{
			title: 'Dashboard',
			icon: 'analytic',
			description: 'Kamu bisa memonitor semua aktivitas pengiriman dalam satu dashboard.'
		},
		{
			title: 'Tracking API',
			icon: 'truck',
			description: 'Kamu bisa melakukan integrasi ke lebih dari 20+ kurir sekaligus.'
		},
		{
			title: 'Notifikasi',
			icon: 'notification',
			description: 'Kamu bisa kirim notifikasi setiap ada perubahan status pengiriman.'
		}
	]
</script>

<section class="py-20 scroll-mt-20" id="produk">
	<div class="max-w-screen-lg mx-auto">
		<div class="flex flex-col justify-center text-center">
			<div class="flex flex-col space-y-3">
				<h2 class="text-4xl font-bold font-heading">Nggak Perlu Repot, Biar Kami Yang Urus</h2>
				<p>Hemat waktu dan tenaga kamu dengan berbagai fitur terintegrasi.</p>
			</div>
		</div>
		<div class="grid grid-cols-3 gap-10 mt-20">
			{#each features as feature}
				<div
					class="flex flex-col p-4 space-y-3 hover:shadow-xl transition duration-300 cursor-pointer"
				>
					<div class="flex space-x-3">
						<img
							src={`/icons/${feature.icon}.svg`}
							class="transform transition duration-300 hover:rotate-12"
							alt={feature.title}
						/>
						<h3 class="font-bold font-heading">{feature.title}</h3>
					</div>
					<p>{feature.description}</p>
				</div>
			{/each}
		</div>
	</div>
</section>
