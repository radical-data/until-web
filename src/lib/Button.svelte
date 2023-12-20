<script lang="ts">
	export let href: string;
	import arrow from '$lib/assets/right-arrow.svg';
</script>

<a {href}>
	<slot />
    <img src={arrow} alt="">
</a>

<style>
	a {
		padding: 0.625rem;
		justify-content: center;
		align-items: center;
		gap: 0.625rem;
		border: 1px solid #f4f4f4;
		border-radius: 9999rem;
		display: inline-flex;
        text-decoration: none;
	}
</style>
