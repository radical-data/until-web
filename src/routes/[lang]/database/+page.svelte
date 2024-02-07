<script lang="ts">
	import { deaths, filter, filtered, } from '$lib/stores';
	import { _, locale } from 'svelte-i18n';

	export let val = '';
	$: filter.set(val);
	$: filteredDeaths = $filter.trim() === '' ? deaths : filtered;
</script>

<svelte:head>
	<title>{$_('pages.database')} · {$_('site.title')} · {$_('site.goal')}</title>
	<meta
		name="description"
		content="{$_('database.description')}"
	/>
</svelte:head>

<main>
	<article>
		<section>
			<h1><span class="arabic">ريثما</span><br />{$_('database.title')}</h1>
			<p class="subtitle">
				{$_('database.subtitle')}
			</p>
			<div class="search-container">
				<input
					type="text"
					bind:value={val}
					placeholder="{$_('database.search')}"
				/>
			</div>
			<p class="deaths-list" dir="ltr">
				{#each $filteredDeaths as death, index}
					<a href={`database/${death.modified_name}`}>
						<span class="name">{death.name_en}</span>, <span class="age">{death.age}</span></a
					>{index !== $filteredDeaths.length - 1 ? ' · ' : ''}
				{/each}
			</p>
		</section>
	</article>
</main>

<style>
	.search-container {
		display: flex;
		justify-content: flex-end;
		align-items: center;
	}
</style>
