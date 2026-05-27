import en from "../locales/en.json"
import id from "../locales/id.json"

export type Locale = "en" | "id"

type Translations = Record<string, string>

const translations: Record<Locale, Translations> = {
	en,
	id,
}

export function t(key: string, locale: Locale): string {
	return translations[locale][key] ?? key
}
