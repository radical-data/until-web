import { fetchDeathsData } from '$lib/fetchData';
import type { LayoutServerLoad } from './$types';

export const load = (async () => {
    console.log("Fetching data...")
    const data = await fetchDeathsData();
    console.log("Fetched")
    return {
        props: { deathsData: data }
    };
}) satisfies LayoutServerLoad;