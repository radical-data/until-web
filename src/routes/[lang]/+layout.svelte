<script lang="ts">
	import NavBar from '$lib/NavBar.svelte';
	import Footer from '$lib/Footer.svelte';
	import '../../app.css';
	import { browser } from '$app/environment';
	import '$lib/i18n';
	import { _, locale, waitLocale } from 'svelte-i18n';
	import { PlausibleAnalytics } from '@accuser/svelte-plausible-analytics';

	export const LayoutLoad: any = async () => {
		if (browser) {
			locale.set(window.navigator.language);
		}
		await waitLocale();
	};
	import { page } from '$app/stores';
	$: if (browser) {
		$page.params.lang && locale.set($page.params.lang);
	}
</script>

<PlausibleAnalytics domain={'until.radicaldata.org'}></PlausibleAnalytics>
<NavBar></NavBar>
<div dir={$_('direction')}>
	<slot />
</div>
<Footer></Footer>
