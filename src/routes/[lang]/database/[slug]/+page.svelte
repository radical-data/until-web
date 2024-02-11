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
<Button href={$_('form.testimonial')}
	>{$_('individual.share_testimonial', { values: { name: first_name } })}</Button
>
<h2>{$_('individual.photos')}</h2>
<Button href={$_('form.photo')}
	>{$_('individual.share_photo', { values: { name: first_name } })}</Button
>

<style>
	.variable {
		font-weight: 300;
	}
</style>
