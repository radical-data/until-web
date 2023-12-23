<script lang="ts">
	import NavBar from '$lib/NavBar.svelte';
	import Footer from '$lib/Footer.svelte';
	import '../../app.css';
	import { browser } from '$app/environment';
	import '$lib/i18n';
	import { _, locale, waitLocale } from 'svelte-i18n';

	export const LayoutLoad: any = async () => {
		if (browser) {
			locale.set(window.navigator.language);
		}
		await waitLocale();
	};
	import { page } from '$app/stores';
	$: $page.params.lang && locale.set($page.params.lang);
</script>

<NavBar></NavBar>
<div dir={$_('direction')}>
	<slot />
</div>
<Footer></Footer>
