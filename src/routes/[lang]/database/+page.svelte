<script lang="ts">
	import { toKebabCase } from '$lib/utils';
	import fuzzysort from 'fuzzysort';
	import { deaths } from '$lib/stores';
	import { _, locale } from 'svelte-i18n';

	let searchQuery = '';
	let options = {
		key: 'name_en',
		threshold: -10000
	};
	function filterDeaths(deathsData = $deaths, query = searchQuery) {
		if (query.trim() === '') {
			return deathsData;
		} else {
			const results = fuzzysort.go(query, deathsData, options);
			results.sort((a, b) => b.score - a.score);
			return results.map((result) => result.obj);
		}
	}

	$: filteredDeaths = filterDeaths($deaths, searchQuery);
</script>

<svelte:head>
	<title>{$_('pages.database')} · {$_('site.title')} · {$_('site.goal')}</title>
	<meta name="description" content={$_('database.description')} />
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
					bind:value={searchQuery}
					placeholder={$_('database.search')}
					on:input={filterDeaths}
				/>
			</div>
			<p class="deaths-list" dir="ltr">
				{#each filteredDeaths as death, index}
					<a href={`database/${toKebabCase(death.name_en)}`}>
						<span class="name">{death.name_en}</span>, <span class="age">{death.age}</span></a
					>{index !== filteredDeaths.length - 1 ? ' · ' : ''}
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
