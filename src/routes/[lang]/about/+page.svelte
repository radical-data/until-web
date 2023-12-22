<script>
	import { _ } from "svelte-i18n";
</script>
<svelte:head>
	<title>{$_('about.title')} · {$_('site.goal')}</title>
	<meta name="description" content="{$_('about.description')}" />
</svelte:head>

<h1><span class="arabic">حول</span><br />{$_('about.title')}</h1>
<p class="subtitle">
	{$_('site.description_with_title')}
	<!-- Until is a community-led database of Palestinians killed in the Israeli assault on Gaza. -->
</p>
<main>
	<article>
		<section>
			<p>{$_('about.goal')}</p>
			<!-- <p>
				The ongoing genocide seeks to dehumanise the Palestinian people by reducing them to numbers,
				anonymous bodies and mass graves.
			</p>
			<p>
				<span class="until">Until</span> is a community effort to collect names, images and stories of
				the people who have been killed. The database gives name, singularity, and humanity to each person,
				showing that each death in these statistics are people with lives, loves and joy.
			</p> -->
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
					{$_('contributing.way1')}
					<!-- <span class="focus">Submit sources</span>: Use the
					<a href="https://wjtikx0v.nocodb.com/#/nc/form/5fd4112d-b5d0-487d-aaa2-9559710858c6"
						>source submission form</a
					> to share sources (e.g. news articles, social media updates). These will be integrated into
					the database. -->
				</li>
				<li>
					{$_('contributing.way2')}
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
			</p>
		</section>
		<section>
			<h2>{$_('about.methodology')}</h2>
			<p>
				{$_('about.methodology_description')}
				<!-- Until uses an iterative approach to build the database. People can add sources which are sorted
				through a hybrid process of automation and moderation. Through this, we combine information
				from various sources to build as detailed picture as possible.
				We also invite testimonials and images to give a more complete picture of each of the people
				in the database. -->
			</p>
		</section>
		<section>
			<h2>{$_('about.who_we_are')}</h2>
			<p>
				{$_('about.who_we_are_description')}
			</p>
		</section>
	</article>
</main>
