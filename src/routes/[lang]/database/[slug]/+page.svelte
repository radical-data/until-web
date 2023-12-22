<script lang="ts">
	import Button from '$lib/Button.svelte';
	import { capitaliseFirstLetter } from '$lib/utils';
	import { _ } from 'svelte-i18n';

	export let data;
	let first_name = data.name_en.split(' ')[0];
</script>

<svelte:head>
	<title>{$_('individual.title', { values: { name: data.name_en } })}</title>
	<meta
		name="description"
		content={$_('individual.description', { values: { name: data.name_en } })}
	/>
</svelte:head>
<h1>{data.name_en}</h1>
<p><span class="variable">{$_('individual.age')}:</span> {data.age}</p>
<p><span class="variable">{$_('individual.gender')}:</span> {capitaliseFirstLetter(data.gender)}</p>

<h2>{$_('individual.testimonials')}</h2>
<Button href="https://wjtikx0v.nocodb.com/#/nc/form/0d902ef3-add1-4659-83c0-dcd8a41bbadc"
	>{$_('individual.share_testimonial', { values: { name: first_name }})}</Button
>
<h2>{$_('individual.photos')}</h2>
<Button href="https://wjtikx0v.nocodb.com/#/nc/form/028c69ba-425e-49bf-af68-fc9d4e39e59c"
	>{$_('individual.share_photo', { values: { name: first_name }})}</Button
>

<style>
	.variable {
		font-weight: 300;
	}
</style>
