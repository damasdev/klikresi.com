<script lang="ts">
	const couriers = [
		{
			title: 'JNE',
			icon: 'jne'
		},
		{
			title: 'J&T Express',
			icon: 'jnt'
		},
		{
			title: 'Sicepat',
			icon: 'sicepat'
		},
		{
			title: 'POS Indonesia',
			icon: 'pos'
		},
		{
			title: 'SAP Express',
			icon: 'sap'
		},
		{
			title: 'Lion Parcel',
			icon: 'lionparcel'
		},
		{
			title: 'ID Express',
			icon: 'idx'
		},
		{
			title: 'Anteraja',
			icon: 'anteraja'
		},
		{
			title: 'Wahana',
			icon: 'wahana'
		},
		{
			title: 'Lainnya',
			icon: 'etc'
		}
	]
</script>

<section class="py-10 md:py-20 text-white bg-black scroll-mt-20" id="beranda">
	<div class="container mx-auto text-left px-6">
		<div class="flex md:items-center flex-col md:flex-row space-y-16 md:space-y-0 md:space-x-24">
			<div class="flex flex-col md:w-1/2">
				<div class="flex flex-col space-y-4">
					<h1 class="text-xl md:text-2xl lg:text-3xl font-bold font-heading">Paket Kamu Sudah Sampai Mana?</h1>
					<p class="text-sm md:text-lg">Tidak perlu bingung, kamu bisa memonitor semua pengirimanmu secara real-time.</p>
				</div>
				<div class="mt-12">
					<a class="outline px-6 py-3 rounded-lg" href="#produk">Pelajari Lebih Lanjut</a>
				</div>
			</div>
			<div class="relative md:w-1/2">
				<img src="/images/dashboard.webp" class="w-full h-full rounded-lg" alt="Hero" />
			</div>
		</div>
		<div class="mt-10 md:mt-16">
			<h2 class="font text-sm md:text-normal font-semibold mb-4 font-heading">Kami mendukung lebih dari 10+ ekspedisi terbaik di indonesia</h2>
			<div class="flex justify-start space-x-2 overflow-x-auto overflow-y-hidden">
				{#each couriers as courier}
					<img
						src={`/icons/${courier.icon}.svg`}
						class="transform transition duration-300 hover:scale-110 w-12 h-12"
						alt={courier.title}
					/>
				{/each}
			</div>
		</div>
	</div>
</section>
