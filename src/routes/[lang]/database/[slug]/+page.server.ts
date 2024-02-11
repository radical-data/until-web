import { getDeathById } from '$lib/fetchById';
import { deaths } from '$lib/stores.js';
import { error } from '@sveltejs/kit';
import { get } from 'svelte/store';

export async function load({ params }) {
	const post = await getDeathById(params.slug, get(deaths));
	if (!post) {
		throw error(404, 'Page Not Found');
	}
	return post;
}
