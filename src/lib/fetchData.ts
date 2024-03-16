import { NOCODB_BASE } from "$env/static/private";
import { nocodb_api } from "$lib/nocodb_api";
import { toKebabCase, getRandomSubset, capitaliseFirstLetter } from "./utils";

async function fetchPage(page: number) {
    const options = {
        limit: 100,
        offset: (page - 1) * 100,
        fields: ["name_en", "age", "gender"]
    };

    try {
        const data = await nocodb_api.dbTableRow.list('noco', NOCODB_BASE, 'Deaths', options);
        return Object.values(data.list);
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
}

async function getNumberOfRecords() {
    const data = await nocodb_api.dbTableRow.list('noco', NOCODB_BASE, 'Deaths', { limit: 0 });
    const numberOfRecords = data.pageInfo.totalRows;
    return numberOfRecords;
}

export async function fetchDeathsData() {
    const allRows = [];
    const totalRows = await getNumberOfRecords();

    const totalPages = Math.ceil(totalRows / 100);

    for (let page = 1; page <= totalPages; page++) {
        const pageData = await fetchPage(page);
        allRows.push(...pageData);
    }

    const result = allRows.map((death) => {
        death.modified_name = toKebabCase(death.name_en);
        death.first_name = death.name_en.split(' ')[0];
        death.gender = capitaliseFirstLetter(death.gender);
        return death;
    });

    const shuffledDeaths = getRandomSubset(result);
    return shuffledDeaths;
}

export async function getMostRecentTotalDeaths() {
    try {
        const response = await nocodb_api.dbTableRow.list('noco', NOCODB_BASE, 'Totals', { limit: 0 });
        if (response.list && response.list.length > 0) {
            const sortedData = response.list.sort((a, b) => new Date(b.date_published) - new Date(a.date_published));
            return sortedData[0].total_deaths;
        } else {
            return null;
        }
    } catch (error) {
        console.error('Error fetching the most recent total deaths:', error);
        return null;
    }
}