<script>
	import LastUpdated from '$lib/LastUpdated.svelte';
</script>

<h1><span class="arabic">إلى أن</span><br />Until</h1>
<p class="subtitle">A community-led database of Palestinians killed in Israeli assault on Gaza.</p>
<main>
	<article>
		<section>
			<p>
				On <time datetime="2023-11-10">November 10th</time>, Gaza City's health system collapsed.
				Since then, the Ministry of Health in Gaza has not been able to provide regular casualty
				figures.
			</p>
			<p>
				<span class="until">Until</span> is a community effort to fill that space. It provides a regularly-updated
				database of who is being killed in the Israel-Hamas War.
			</p>
		</section>
		<section>
			<div class="last-updated">
				<LastUpdated lastUpdatedTime={new Date('2023-11-27T15:43')}></LastUpdated>
			</div>
			<p class="statement">
				<span class="number">14,784</span> killed,<br />
				<span class="number">6,432</span> of them children.
			</p>
			<p class="invite">See the <a href="database">full database</a>.</p>
		</section>
		<section>
			<h2>Contributing</h2>
			<p>
				As a community project, <span class="until">Until</span> is built by volunteers like you. There
				are 2 main ways you can support:
			</p>
			<ol>
				<li>
					<span class="focus">Submit sources</span>: Use the
					<a href="source-submission">source submission form</a> to share sources (e.g. news articles,
					social media updates). These will be integrated into the database.
				</li>
				<li>
					<span class="focus">Share</span>: To be useful, <span class="until">Until</span> needs to be
					used. Please share it with your family, friends and representatives.
				</li>
			</ol>
			<p>
				If you have other skills that could be helpful (design, translation, programming, social
				media support etc.), please get in touch through the <a href="contribution-form"
					>contribution form</a
				>.
			</p>
		</section>
		<section>
			<h2>Methodology</h2>
			<p><span class="until">Until</span> uses an iterative approach to build the database.</p>
		</section>
	</article>
</main>

<style>
	.last-updated {
		display: flex;
		justify-content: center;
        margin-top: 1rem;
	}
</style>
