<script>
	import ButtonCta from '$lib/components/ButtonCta.svelte'
</script>

<footer class="py-20 bg-black text-white">
	<div
		class="container mx-auto flex flex-col md:flex-row justify-between space-y-10 md:space-y-0 md:space-x-14 px-6"
	>
		<div class="flex flex-col space-y-6 md:w-2/3">
			<img src="/images/logo.svg" width={199} height={34.16} alt="Klik Resi Logo" />
			<p>
				Kamu bisa memonitor semua pengirimanmu secara real-time dengan berbagai fitur terintegrasi.
			</p>
			<div class="flex space-x-4">
				<ButtonCta />
			</div>
		</div>
		<div class="flex flex-col md:flex-row md:space-x-6 space-y-10 md:space-y-0 md:w-3/4">
			<div class="flex flex-col space-y-6 w-1/2">
				<h4 class="font-heading font-semibold">Bantuan Pengguna</h4>
				<ul>
					<li class="mb-2">
						<a
							class="text-gray-400 hover:text-gray-300"
							href="https://blog.klikresi.com"
							target="_blank">Artikel</a
						>
					</li>
				</ul>
			</div>
			<div class="flex flex-col space-y-6 w-1/2">
				<h4 class="font-heading font-semibold">Produk</h4>
				<ul>
					<li class="mb-2">
						<a
							class="text-gray-400 hover:text-gray-300"
							href="https://documenter.getpostman.com/view/29221489/2s9YC7SBgH">Tracking API</a
						>
					</li>
				</ul>
			</div>
		</div>
	</div>
</footer>
<div class="border-t-[1px] border-gray-700 py-4 bg-black text-white">
	<div class="container mx-auto px-6">
		<p>
			Copyright 2023 © Klik Resi. All rights reserved. <span class="hidden md:inline"
				>Various trademarks held by their respective owners.</span
			>
		</p>
	</div>
</div>
