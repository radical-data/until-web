import { toKebabCase } from "./utils";

export function getDeathById(id: string, deathsData) {
    const death = deathsData.find((death) => {
        const normalisedDeathName = toKebabCase(death.name_en);
        return normalisedDeathName === id;
    });
    return death || null;
}