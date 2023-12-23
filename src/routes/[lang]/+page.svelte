<script>
	import Button from '$lib/Button.svelte';
	import LastUpdated from '$lib/LastUpdated.svelte';
	import { deaths } from '$lib/stores';
	import { getRandomSubset, toKebabCase } from '$lib/utils';
	import { _, locale } from 'svelte-i18n';
	export let data;
	$: deaths.set(data.props.deathsData);
	$: deathsToShow = getRandomSubset($deaths, 30);
	let totalDeathEstimate = 20000;
</script>

<svelte:head>
	<title>{$_('site.title')} · {$_('site.short_description')}</title>
	<meta name="description" content={$_('site.long_description')} />
	<meta property="og:title" content="{$_('site.title')} · {$_('site.short_description')}" />
	<meta property="og:description" content={$_('site.long_description')} />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://until.radicaldata.org" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="{$_('site.title')} · {$_('site.short_description')}" />
	<meta name="twitter:description" content={$_('site.long_description')} />
</svelte:head>

<h1><span class="arabic">ريثما</span><br />Until</h1>
<p class="subtitle">
	{$_('site.description')}
</p>
<main>
	<div class="last-updated">
		<LastUpdated lastUpdatedTime={new Date('2023-11-27T15:43')}></LastUpdated>
	</div>
	<article>
		<section>
			<p class="statement">
				{$_('home.statement', {
					values: { number_in_database: new Intl.NumberFormat().format($deaths.length) ,
					total_killed: new Intl.NumberFormat().format(totalDeathEstimate)}
				})}
				<!-- <span class="highlight">Until</span> remembers
				<span class="highlight">{new Intl.NumberFormat().format($deaths.length)}</span>
				of the
				<span class="highlight">{new Intl.NumberFormat().format(totalDeathEstimate)}</span> killed. -->
			</p>
			<p class="deaths-list" dir="ltr">
				{#each deathsToShow as death, index}
				<a href={`${$locale}/database/${toKebabCase(death.name_en)}`}>
					<span class="name">{death.name_en}</span>, <span class="age">{death.age}</span></a
					>{index !== deathsToShow.length - 1 ? ' · ' : ''}
				{/each}
			</p>
			<p class="invite">{$_('home.database_link_description')} <Button href={`${$locale}/database`}>{$_('home.database_link')}</Button></p>
		</section>
		<section>
			<h2>{$_('about.contributing')}</h2>
			<p>
				{$_('contributing.description')}
				<!-- As a community project, <span class="until">Until</span> is built by volunteers like you. There
				are 2 main ways you can support: -->
			</p>
			<ol>
				<li>
					{$_('contributing.sources')}
					<!-- <span class="focus">Submit sources</span>: Use the
					<a href="https://wjtikx0v.nocodb.com/#/nc/form/5fd4112d-b5d0-487d-aaa2-9559710858c6"
						>source submission form</a
					> to share sources (e.g. news articles, social media updates). These will be integrated into
					the database. -->
					<Button href={$_('form.source')}></Button>
				</li>
				<li>{$_('contributing.testimonial')}<Button href={$_('form.testimonial')}></Button></li>
				<li>
					{$_('contributing.share')}
					<!-- <span class="focus">Share</span>: To be useful, <span class="until">Until</span> needs to be
					used. Please share it with your family, friends and representatives. -->
				</li>
			</ol>
			<p>
				{$_('contributing.miscellaneous')}
				<!-- If you have other skills that could be helpful (design, translation, programming, social
				media support etc.), please get in touch through the <a
					href="https://wjtikx0v.nocodb.com/#/nc/form/83775246-bd27-48f0-ba98-e604f9f5f79e"
					>contribution form</a
				>. -->
				<Button href={$_('form.contact')}></Button>
			</p>
		</section>
	</article>
</main>

<style>
	.last-updated {
		display: flex;
		justify-content: center;
		margin-top: 1rem;
	}
	.statement {
		font-size: 1.75rem;
		font-style: italic;
		font-weight: 400;
		/* padding-left: 1.5rem; */
		text-align: center;
	}

	.statement .highlight {
		font-weight: 700;
	}
</style>
