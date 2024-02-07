import { writable, derived } from 'svelte/store';
import { type Person } from '../models/person'

export const deaths = writable<Person[]>([]);
export const filter = writable('');
export const filtered = derived([filter, deaths], ([$filter, $deaths]) => {
    return $deaths.filter(x => x.name_en === $filter)
});
