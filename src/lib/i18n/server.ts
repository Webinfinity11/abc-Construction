import { lang as rootLang } from 'next/root-params'
import { DEFAULT_LANG, dict, isLang, localize } from '.'

/** Current language + dictionary + link helper for Server Components. */
export async function getI18n() {
  const raw = (await rootLang()) ?? DEFAULT_LANG
  const lang = isLang(raw) ? raw : DEFAULT_LANG
  return { lang, t: dict(lang), href: (path: string) => localize(lang, path) }
}
