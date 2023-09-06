<script>
	import Cta from '$lib/components/Cta.svelte'
</script>

<footer class="py-20 bg-black text-white">
	<div class="container mx-auto flex justify-between space-x-14">
		<div class="flex flex-col space-y-6 w-2/3">
			<img src="/images/logo.svg" width={199} height={34.16} alt="Klik Resi Logo" />
			<p>Kamu bisa memonitor semua pengirimanmu secara real-time dengan berbagai fitur terintegrasi.</p>
			<div class="flex space-x-4">
				<Cta />
			</div>
		</div>
		<div class="flex space-x-6 w-3/4">
			<div class="flex flex-col space-y-6 w-1/2">
				<h6 class="font-heading font-semibold">Bantuan Pengguna</h6>
				<ul>
					<li class="mb-2">
						<a class="text-gray-400 hover:text-gray-300" href="https://blog.klikresi.com">Artikel</a>
					</li>
				</ul>
			</div>
			<div class="flex flex-col space-y-6 w-1/2">
				<h6 class="font-heading font-semibold">Produk</h6>
				<ul>
					<li class="mb-2">
						<a class="text-gray-400 hover:text-gray-300" href="https://www.postman.com/klikresi/workspace/klikresi-apis/overview">Tracking API</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
</footer>
<div class="border-t-[1px] border-gray-700 py-4 bg-black text-white">
	<div class="container mx-auto">
		<p>©2023 Klik Resi. All Rights Reserved</p>
	</div>
</div>
