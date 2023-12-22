<script lang="ts">
	import { _, locale } from 'svelte-i18n';
	import { languages } from './i18n';
	import { page } from '$app/stores';
	import type { Page } from '@sveltejs/kit';
	function switchLangUrl(newLang: string, currentPage: Page) {
		let currentPath = currentPage.url.pathname;
		const currentLang = currentPage.params.lang || 'en';
		const langRegex = new RegExp(`^/${currentLang}(\/|$)`);
		return currentPath.replace(langRegex, `/${newLang}$1`);
	}
</script>

<nav>
	<ul>
		<li><a href="/{$locale}">{$_('pages.home')}</a></li>
		<li><a href="/{$locale}/database">{$_('pages.database')}</a></li>
		<li><a href="/{$locale}/about">{$_('pages.about')}</a></li>
	</ul>
	<ul>
		{#each languages as language}
			<li>
				<a href={switchLangUrl(language.code, $page)}>
					<span class={language.code === 'ar' ? 'arabic' : ''}>{language.name}</span>
				</a>
			</li>
		{/each}
	</ul>
</nav>

<style>
	nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	ul {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
	}

	ul:first-child {
		margin-right: auto;
	}

	a {
		text-decoration: none;
		color: white;
		display: block;
		padding: 0px 10px;
		margin: 0;
		transition: all 0.3s ease;
		border-radius: 9999px;
		font-weight: 600;
	}

	a:hover {
		background-color: #f4f4f4;
		color: #101010;
	}
</style>
