'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Brand } from './brand'
import { NAV } from '@/lib/data'
import { localize, type Lang } from '@/lib/i18n'
import { useI18n } from '@/lib/i18n/client'
import { BTN, F, YELLOW } from '@/lib/ui'

const LANG_LINKS: { lang: Lang; short: string; name: string }[] = [
  { lang: 'ka', short: 'ქარ', name: 'ქართული' },
  { lang: 'en', short: 'ENG', name: 'English' },
]

export function Header() {
  const { lang, path, t, href } = useI18n()
  const [menu, setMenu] = useState(false)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setMenu(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const isActive = (h: string) => (h === '/' ? path === '/' : path.startsWith(h))
  const links = NAV.map((n) => ({ href: n.href, label: t.nav[n.key] }))

  return (
    <header className="absolute inset-x-0 top-[17px] z-20 sm:top-7">
      <div className="relative mx-auto flex min-h-[64px] w-[calc(100%-32px)] max-w-[1440px] items-center gap-3 rounded-[60px] bg-white py-2.5 pl-3.5 pr-3 shadow-[0_8px_35px_rgba(0,0,0,0.043)] sm:min-h-[72px] sm:w-[calc(100%-56px)] sm:gap-[22px] sm:pl-[26px] lg:min-h-[82px] lg:py-3 lg:pr-4 xl:gap-8">
        <Brand href={href('/')} label={t.ui.homeAria} />
        <nav aria-label={t.ui.mainMenu} className="ml-auto hidden items-center gap-[18px] lg:flex xl:gap-[27px]">
          {links.map((n) => (
            <Link
              key={n.href}
              href={href(n.href)}
              aria-current={isActive(n.href) ? 'page' : undefined}
              className={`relative whitespace-nowrap text-[14px] font-medium after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:bg-brand-600 after:transition-all after:duration-200 after:content-[''] hover:after:right-0 ${isActive(n.href) ? 'after:right-0' : 'after:right-full'} ${F}`}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-[11px] sm:gap-[17px] lg:gap-3.5 xl:gap-5">
          <nav aria-label={t.ui.language} className="flex items-center gap-1 text-[13px]">
            {LANG_LINKS.map((l, i) => (
              <span key={l.lang} className="flex items-center gap-1">
                {i > 0 && <span aria-hidden="true" className="text-ink-200">/</span>}
                <Link
                  href={localize(l.lang, path)}
                  hrefLang={l.lang}
                  lang={l.lang}
                  aria-label={l.name}
                  aria-current={lang === l.lang ? 'true' : undefined}
                  onClick={() => setMenu(false)}
                  className={`rounded px-1 py-0.5 transition ${lang === l.lang ? 'font-semibold text-ink-900' : 'text-ink-400 hover:text-ink-900'} ${F}`}
                >
                  {l.short}
                </Link>
              </span>
            ))}
          </nav>
          <Link href={href('/contact')} className={`${BTN} ${YELLOW} hidden lg:inline-flex lg:px-[19px] lg:text-[13px] xl:px-[27px] xl:text-[14px]`}>
            {t.ui.contactUs}
          </Link>
          <button
            type="button"
            aria-label={menu ? t.ui.closeMenu : t.ui.openMenu}
            aria-expanded={menu}
            onClick={() => setMenu((m) => !m)}
            className={`flex h-[42px] w-[42px] flex-col items-center justify-center gap-[5px] rounded-full bg-brand-500 transition hover:bg-brand-600 sm:h-[46px] sm:w-[46px] lg:hidden ${F}`}
          >
            <span className={`h-0.5 w-[18px] bg-ink-900 transition duration-200 ${menu ? 'translate-y-[3.5px] rotate-45' : ''}`} />
            <span className={`h-0.5 w-[18px] bg-ink-900 transition duration-200 ${menu ? '-translate-y-[3.5px] -rotate-45' : ''}`} />
          </button>
        </div>

        {menu && (
          <nav aria-label={t.ui.mobileMenu} className="absolute inset-x-0 top-[76px] flex flex-col rounded-[20px] bg-white px-6 py-[17px] text-ink-900 shadow-[0_20px_40px_rgba(0,0,0,0.2)] sm:top-[86px] lg:hidden">
            {[...links, { href: '/contact', label: t.ui.contactUs }].map((n, i, arr) => (
              <Link
                key={n.href}
                href={href(n.href)}
                onClick={() => setMenu(false)}
                className={`py-[13px] text-[16px] ${i < arr.length - 1 ? 'border-b border-ink-100' : ''} ${isActive(n.href) ? 'font-semibold' : ''} ${F}`}
              >
                {n.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}
