import { en } from './en'
import { ka } from './ka'

export const LANGS = ['ka', 'en'] as const
export type Lang = (typeof LANGS)[number]
export const DEFAULT_LANG: Lang = 'ka'

const DICTS = { ka, en }

export const isLang = (l: string): l is Lang => (LANGS as readonly string[]).includes(l)
export const dict = (l: Lang) => DICTS[l]

/** Georgian lives at the root, English under /en. */
export const localize = (l: Lang, path: string) => (l === DEFAULT_LANG ? path : path === '/' ? `/${l}` : `/${l}${path}`)

/** Strips the /en prefix from a browser pathname. */
export function splitPath(pathname: string): { lang: Lang; path: string } {
  const m = pathname.match(/^\/(en)(\/.*)?$/)
  return m ? { lang: 'en', path: m[2] || '/' } : { lang: DEFAULT_LANG, path: pathname }
}

export type { Dict } from './ka'
