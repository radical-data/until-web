import { getDeathById } from "$lib/fetchById";
import { fetchDeathsData } from "$lib/fetchData.js";
import { error } from "@sveltejs/kit";

export async function load({ params }) {
    const deathsData = await fetchDeathsData();
    const post = await getDeathById(params.slug, deathsData)
    if (!post) {
        throw error(404, 'Page Not Found');
    }
    return post;
}