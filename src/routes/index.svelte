<script lang="ts">
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

<section class="py-28 text-white bg-black scroll-mt-20" id="beranda">
	<div class="container mx-auto">
		<div class="flex items-center space-x-24">
			<div class="flex flex-col w-1/2">
				<div class="flex flex-col space-y-4">
					<h1 class="text-4xl font-bold font-heading">Paket Kamu Sudah Sampai Mana?</h1>
					<p>Tidak perlu bingung, kamu bisa memonitor semua pengirimanmu secara real-time.</p>
				</div>
				<div class="mt-12">
					<a class="outline px-6 py-3 rounded-lg" href="#produk">Pelajari Lebih Lanjut</a>
				</div>
			</div>
			<div class="relative w-1/2">
				<img src="/images/dashboard.webp" class="w-full h-full rounded-lg" alt="Hero" />
			</div>
		</div>
	</div>
</section>

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
						<h5 class="font-bold font-heading">{feature.title}</h5>
					</div>
					<p>{feature.description}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<section class="py-20 scroll-mt-20" id="harga">
	<div class="mx-auto container">
		<div class="sm:text-center">
			<h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Biaya Layanan</h2>
			<p class="mt-6 text-lg leading-8 text-gray-600">
				Kamu bisa terintegrasi dengan 20+ layanan pengiriman cukup dengan sekali bayar.
			</p>
		</div>
		<div class="mt-16 rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex">
			<div class="p-8 sm:p-10 lg:flex-auto">
				<h3 class="text-2xl font-bold tracking-tight text-gray-900">Tracking API</h3>
				<p class="mt-6 text-base leading-7 text-gray-600">
					Dibuat untuk memudahkan para web developer dan pemilik website untuk terintegrasi dengan
					layanan pengiriman dengan teknologi API
				</p>
				<div class="mt-10 flex items-center gap-x-4">
					<h4 class="flex-none text-sm font-semibold leading-6 text-indigo-600">Layanan</h4>
					<div class="h-px flex-auto bg-gray-100" />
				</div>
				<ul
					class="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
				>
					<li class="flex gap-x-3">
						<svg
							class="h-6 w-5 flex-none text-indigo-600"
							viewBox="0 0 20 20"
							fill="currentColor"
							aria-hidden="true"
						>
							<path
								fill-rule="evenodd"
								d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
								clip-rule="evenodd"
							/>
						</svg>
						Terintegrasi lebih dari 20+ layanan kurir
					</li>
					<li class="flex gap-x-3">
						<svg
							class="h-6 w-5 flex-none text-indigo-600"
							viewBox="0 0 20 20"
							fill="currentColor"
							aria-hidden="true"
						>
							<path
								fill-rule="evenodd"
								d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
								clip-rule="evenodd"
							/>
						</svg>
						Custom tracking page
					</li>
					<li class="flex gap-x-3">
						<svg
							class="h-6 w-5 flex-none text-indigo-600"
							viewBox="0 0 20 20"
							fill="currentColor"
							aria-hidden="true"
						>
							<path
								fill-rule="evenodd"
								d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
								clip-rule="evenodd"
							/>
						</svg>
						Lihat status pengiriman
					</li>
				</ul>
			</div>
			<div class="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
				<div
					class="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16"
				>
					<div class="mx-auto max-w-xs px-8">
						<p class="text-base font-semibold text-gray-600">Penawaran Terbatas</p>
						<p class="mt-6 flex items-baseline justify-center gap-x-2">
							<span class="text-lg font-semibold leading-6 tracking-wide text-gray-600">IDR</span>
							<span class="text-5xl font-bold tracking-tight text-gray-900">470.000</span>
						</p>
						<a
							target="_blank"
							href="https://api.whatsapp.com/send/?phone=6285156676849&text=Halo%20Damas!%20Aku%20baru%20aja%20mengunjungi%20klikresi.com%20nih.%20Mau%20dijelasin%20lebih%20lanjut%20tentang%20layanan%20Klik%20Resi%20dong!&type=phone_number&app_absent=0"
							class="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
							>Hubungi Kami</a
						>
						<p class="mt-6 text-xs leading-5 text-gray-600">
							Harga yang tercantum bersifat <span class="italic">one time payment</span> alias sekali
							bayar
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<section class="py-20 scroll-mt-20" id="faq">
	<div class="container mx-auto">
		<h2 class="mb-8 text-4xl font-bold font-heading">Frequently asked questions</h2>
		<div class="pt-8 text-left border-t border-gray-200">
			<div class="mb-10">
				<h3 class="flex items-center mb-4 text-lg font-medium text-gray-900">
					<svg
						class="flex-shrink-0 mr-2 w-5 h-5 text-gray-500"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
						><path
							fill-rule="evenodd"
							d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
							clip-rule="evenodd"
						/></svg
					>
					Apakah ada semacam limit yang diterapkan?
				</h3>
				<p class="text-gray-500">
					Kami masih dalam tahap pengembangan, untuk saat ini tidak ada semacam limit atau pricing
					plan. Meskipun demikian, harap gunakan layanan ini dengan bijak karena bisa jadi limit
					akan diberlakukan di kemudian hari.
				</p>
			</div>
		</div>
	</div>
</section>
