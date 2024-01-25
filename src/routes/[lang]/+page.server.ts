import { fetchDeathsData } from '$lib/fetchData';
import { toKebabCase, getRandomSubset } from '$lib/utils';

export async function load() {
    console.log("Fetching data...")
    const deathsData = await fetchDeathsData();
    const deaths = deathsData.map(function(death){
        return death;
        // return toKebabCase(death.name_en);
    });
    console.log("Fetched")
    return {
        props: { deaths: deaths, deathsSubset: getRandomSubset(deathsData, 30) }
    };
}
