<script lang="ts">
	import NavBar from '$lib/NavBar.svelte';
	import Footer from '$lib/Footer.svelte';
	import '../app.css';
</script>

<NavBar></NavBar>
<slot />
<Footer></Footer>
