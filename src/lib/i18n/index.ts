import { init, register } from 'svelte-i18n'

export const defaultLocale = 'en'

export const languages = [{code: "en", name: "English"}, {code: "ar", name: "العربية"}];

languages.forEach(language => {
    register(language.code, () => import(`./locales/${language.code}.json`));
});

init({
	fallbackLocale: defaultLocale,
	initialLocale: defaultLocale,
})