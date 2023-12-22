import { defaultLocale } from '$lib/i18n';
import { redirect } from '@sveltejs/kit';

export function load() {
	redirect(301, defaultLocale);
}