<script>
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>Klik Resi</title>
	<meta name="robots" content="noindex,nofollow" />
</svelte:head>

<section class="py-10 md:py-20 scroll-mt-28">
	<div class="container mx-auto px-6">
		<div class="flex justify-center items-center border rounded-lg p-10 md:p-20">
			{$page.status}: {$page.error?.message}
		</div>
	</div>
</section>
