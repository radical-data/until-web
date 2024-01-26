import { writable, derived } from 'svelte/store';

export const deaths = writable([]) as any;
export const term = writable('');
export const filtered = derived(
    [deaths, term],
    (deaths, term) => {
      return deaths.includes(term);
});
  