'use client'

import { usePathname } from 'next/navigation'
import { dict, localize, splitPath } from '.'

/** Current language + dictionary + link helper for Client Components. */
export function useI18n() {
  const { lang, path } = splitPath(usePathname())
  return { lang, path, t: dict(lang), href: (p: string) => localize(lang, p) }
}
