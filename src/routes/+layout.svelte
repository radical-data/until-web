<script lang="ts">
	import type { LayoutData } from './$types';
	export let data: LayoutData;
	import NavBar from '$lib/NavBar.svelte';
	import Footer from '$lib/Footer.svelte';
	import '../app.css';
	import { deaths } from '$lib/stores';
	deaths.set(data.props.deathsData);
</script>

<NavBar></NavBar>
<slot />
<Footer></Footer>
