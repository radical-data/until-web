import { fetchDeathsData, getMostRecentTotalDeaths } from '$lib/fetchData';
import { getRandomSubset } from '$lib/utils';

export async function load() {
    console.log("Fetching data...");
    const deathsData = await fetchDeathsData();
    const subsetDeaths = getRandomSubset(deathsData, 30);
    const totalDeaths = await getMostRecentTotalDeaths();
    console.log("Fetched");
    return {
        props: { deaths: deathsData, deathsSubset: subsetDeaths, totalDeaths: totalDeaths }
    };
}
