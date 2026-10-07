'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Brand } from './brand'
import { NAV } from '@/lib/data'
import { BTN, F, YELLOW } from '@/lib/ui'

export function Header() {
  const pathname = usePathname()
  const [menu, setMenu] = useState(false)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setMenu(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const isActive = (href: string) => (href === '/' ? pathname === '/' : pathname.startsWith(href))

  return (
    <header className="absolute inset-x-0 top-[17px] z-20 sm:top-7">
      <div className="relative mx-auto flex min-h-[64px] w-[calc(100%-32px)] max-w-[1440px] items-center gap-3 rounded-[60px] bg-white py-2.5 pl-3.5 pr-3 shadow-[0_8px_35px_rgba(0,0,0,0.043)] sm:min-h-[72px] sm:w-[calc(100%-56px)] sm:gap-[22px] sm:pl-[26px] lg:min-h-[82px] lg:py-3 lg:pr-4 xl:gap-8">
        <Brand />
        <nav aria-label="მთავარი მენიუ" className="ml-auto hidden items-center gap-[18px] lg:flex xl:gap-[27px]">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              aria-current={isActive(n.href) ? 'page' : undefined}
              className={`relative whitespace-nowrap text-[14px] font-medium after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:bg-brand-600 after:transition-all after:duration-200 after:content-[''] hover:after:right-0 ${isActive(n.href) ? 'after:right-0' : 'after:right-full'} ${F}`}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-[11px] sm:gap-[17px] lg:gap-3.5 xl:gap-5">
          <span aria-label="ენა: ქართული" className="hidden text-[13px] text-ink-500 sm:block lg:hidden xl:block">ქარ</span>
          <Link href="/contact" className={`${BTN} ${YELLOW} hidden lg:inline-flex lg:px-[19px] lg:text-[13px] xl:px-[27px] xl:text-[14px]`}>
            დაგვიკავშირდით
          </Link>
          <button
            type="button"
            aria-label={menu ? 'მენიუს დახურვა' : 'მენიუს გახსნა'}
            aria-expanded={menu}
            onClick={() => setMenu((m) => !m)}
            className={`flex h-[42px] w-[42px] flex-col items-center justify-center gap-[5px] rounded-full bg-brand-500 transition hover:bg-brand-600 sm:h-[46px] sm:w-[46px] lg:hidden ${F}`}
          >
            <span className={`h-0.5 w-[18px] bg-ink-900 transition duration-200 ${menu ? 'translate-y-[3.5px] rotate-45' : ''}`} />
            <span className={`h-0.5 w-[18px] bg-ink-900 transition duration-200 ${menu ? '-translate-y-[3.5px] -rotate-45' : ''}`} />
          </button>
        </div>

        {menu && (
          <nav aria-label="მობილური მენიუ" className="absolute inset-x-0 top-[76px] flex flex-col rounded-[20px] bg-white px-6 py-[17px] text-ink-900 shadow-[0_20px_40px_rgba(0,0,0,0.2)] sm:top-[86px] lg:hidden">
            {[...NAV, { href: '/contact', label: 'დაგვიკავშირდით' }].map((n, i, arr) => (
              <Link
                key={n.href}
                href={n.href}
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
