import { fetchDeathsData } from '$lib/fetchData';

export async function load() {
    console.log("Fetching data...")
    const deathsData = await fetchDeathsData();
    console.log("Fetched")
    return {
        props: { deathsData }
    };
}
