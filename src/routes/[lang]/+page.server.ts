import { fetchDeathsData } from '$lib/fetchData';
import { toKebabCase, getRandomSubset, capitaliseFirstLetter } from '$lib/utils';

export async function load() {
    console.log("Fetching data...")
    const deathsData = await fetchDeathsData();
    const subsetDeaths = getRandomSubset(deathsData, 30).map(function(death){
        death.modified_name = toKebabCase(death.name_en);
        death.first_name = death.name_en.split(' ')[0];
        death.gender = capitaliseFirstLetter(death.gender);
        return death;
    });
    console.log("Fetched")
    return {
        props: { deaths: deathsData, deathsSubset: subsetDeaths }
    };
}
