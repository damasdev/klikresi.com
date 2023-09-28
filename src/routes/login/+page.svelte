<svelte:head>
	<title>Login</title>
</svelte:head>

<section class="py-10 md:py-20 scroll-mt-28">
	<div class="container mx-auto px-6">
		<div class="border rounded-lg px-10 py-20 md:px-20 md:py-32 text-center">
			<h1 class="mb-2 text-2xl font-bold">Login Member</h1>
			<p class="mb-6 text-sm text-gray-700">Silahkan login untuk mulai menggunakan Klik Resi</p>
			<form class="flex justify-center" method="post" action="?/OAuth2">
				<button class="px-4 py-2 border flex gap-2 border-slate-200 rounded-lg text-slate-700">
					<img class="w-6 h-6" src="/icons/google.svg" loading="lazy" alt="google logo" />
					<span>Login with Google</span>
				</button>
			</form>
		</div>
	</div>
</section>
