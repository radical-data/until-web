<script lang="ts">
	import { toKebabCase } from '$lib/utils';
	import fuzzysort from 'fuzzysort';
	import { deaths } from '$lib/stores';

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
	<title>Database · Until · Preserving Human Stories from Gaza's Conflict</title>
	<meta
		name="description"
		content="Explore the heart of Until's mission in our database. Here, find the names, ages, images and personal stories of Palestinians killed during Israel's assault on Gaza. Each entry is a tribute to an individual life, beyond just numbers. Our database is a testament to their humanity and a call to remember each unique story."
	/>
</svelte:head>

<main>
	<article>
		<section>
			<h1><span class="arabic">ريثما</span><br />Until</h1>
			<div class="search-container">
				<input
					type="text"
					bind:value={searchQuery}
					placeholder="Search names"
					on:input={filterDeaths}
				/>
			</div>
			<p class="deaths-list">
				{#each filteredDeaths as death, index}
					<a href={'database/' + toKebabCase(death.name_en)}>
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
