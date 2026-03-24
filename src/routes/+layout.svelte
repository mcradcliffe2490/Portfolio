<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { afterNavigate } from '$app/navigation';

	let { children } = $props();

	afterNavigate(() => {
		if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
			window.gtag('event', 'page_view', {
				page_location: window.location.href
			});
		}
	});
</script>

<Header />
<main>
	{@render children()}
</main>
<Footer />

<style>
	main {
		min-height: calc(100vh - 140px);
	}
</style>
