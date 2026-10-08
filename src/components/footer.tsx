import Link from 'next/link'
import { Brand } from './brand'
import { getI18n } from '@/lib/i18n/server'
import { F, W } from '@/lib/ui'

const LINKS = ['about', 'services', 'projects', 'team', 'contact'] as const

export async function Footer() {
  const { t, href } = await getI18n()
  return (
    <footer className="bg-white pb-6 pt-[37px] sm:pb-[25px] sm:pt-[47px]">
      <div className={W}>
        <div className="pb-[27px] sm:flex sm:items-start sm:justify-between sm:gap-10 sm:pb-[38px] lg:items-center">
          <Brand big href={href('/')} label={t.ui.homeAria} />
          <nav aria-label={t.ui.footerNav} className="mt-[29px] flex flex-wrap gap-x-[25px] gap-y-[17px] text-[13px] sm:mt-0 sm:gap-5 sm:text-[14px] lg:gap-[30px]">
            {LINKS.map((k) => (
              <Link key={k} href={href(`/${k}`)} className={`transition hover:text-ink-600 ${F}`}>{t.nav[k]}</Link>
            ))}
          </nav>
        </div>
        <div className="border-t border-ink-200 pt-5 text-[12px] text-ink-400 sm:flex sm:items-center sm:justify-between sm:gap-6 sm:pt-[23px]">
          <p>© 2026 ABC Construction. {t.ui.rights}</p>
          <Link href={href('/')} className={`mt-[13px] inline-block text-ink-600 sm:mt-0 ${F}`}>{t.ui.builtToLast}</Link>
        </div>
      </div>
    </footer>
  )
}
