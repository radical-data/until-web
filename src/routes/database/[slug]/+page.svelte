<script lang="ts">
	import Button from "$lib/Button.svelte";
	import { capitaliseFirstLetter } from "$lib/utils";

	export let data;
  let first_name = data.name_en.split(' ')[0];
</script>

<svelte:head>
	<title>A digital memorial for {data.name_en}</title>
	<meta name="description" content="{data.name_en} was killed in the Israeli assault on Gaza. Here you can hear {data.gender} story, leave a testimonial or share a photo." />
</svelte:head>

<h1>{data.name_en}</h1>
<p><span class="variable">Age:</span> {data.age}</p>
<p><span class="variable">Gender:</span>{capitaliseFirstLetter(data.gender)}</p>

<h2>Testimonials</h2>
<Button href="https://wjtikx0v.nocodb.com/#/nc/form/5fd4112d-b5d0-487d-aaa2-9559710858c6">Write a testimonial for {first_name}</Button>
<h2>Photos</h2>
<Button href="https://wjtikx0v.nocodb.com/#/nc/form/028c69ba-425e-49bf-af68-fc9d4e39e59c">Share a photo of {first_name}</Button>

<style>
  .variable {
    font-weight: 300;
  }
</style>