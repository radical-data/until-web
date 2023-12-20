<script lang="ts">
	import fuzzysort from 'fuzzysort';

	let deaths = [
		{ name: 'Amal Zakaria Ali Al-Astal', age: 24, id: 'amal-zakaria-ali-al-astal' },
		{ name: 'Hamza Nasser Suleiman Al-Astal', age: 26, id: 'hamza-nasser-suleiman-al-astal' }
	];

	let searchQuery = '';
	let filteredDeaths: { name: string; age: number; id: string }[] = deaths;
	let options = {
        key: 'name',
		threshold: -10000
	};
	function updateFilteredDeaths() {
		if (searchQuery.trim() === '') {
			filteredDeaths = deaths;
		} else {
			const results = fuzzysort.go(searchQuery, deaths, options);
			results.sort((a, b) => b.score - a.score);
			filteredDeaths = results.map((result) => result.obj);
		}
	}
</script>

<section>
	<h1><span class="arabic">ريثما</span><br />Until</h1>
	<div class="search-container">
		<input
			type="text"
			bind:value={searchQuery}
			placeholder="Search names"
			on:input={updateFilteredDeaths}
		/>
	</div>
	<p class="list">
		{#each filteredDeaths as death, index}
			<a href={'database/' + death.id}>
				<span class="name">{death.name}</span>, <span class="age">{death.age}</span></a
			>{index !== filteredDeaths.length - 1 ? ' · ' : ''}
		{/each}
	</p>
</section>

<style>
	.list {
		/* font-size: 0.85rem; */
		line-height: 1.5rem;
	}

	.name {
		font-weight: 600;
	}

	.age {
		font-weight: 300;
		font-style: italic;
	}
	a {
		text-decoration: none;
	}
	a:hover {
		text-decoration: underline;
	}

	.search-container {
		display: flex;
		justify-content: flex-end;
		align-items: center;
	}
</style>
