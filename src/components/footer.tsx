import Link from 'next/link'
import { Brand } from './brand'
import { F, W } from '@/lib/ui'

const LINKS = [
  ['/about', 'კომპანია'],
  ['/services', 'მომსახურება'],
  ['/projects', 'პროექტები'],
  ['/team', 'გუნდი'],
  ['/contact', 'კონტაქტი'],
]

export function Footer() {
  return (
    <footer className="bg-white pb-6 pt-[37px] sm:pb-[25px] sm:pt-[47px]">
      <div className={W}>
        <div className="pb-[27px] sm:flex sm:items-start sm:justify-between sm:gap-10 sm:pb-[38px] lg:items-center">
          <Brand big />
          <nav aria-label="საიტის გვერდები" className="mt-[29px] flex flex-wrap gap-x-[25px] gap-y-[17px] text-[13px] sm:mt-0 sm:gap-5 sm:text-[14px] lg:gap-[30px]">
            {LINKS.map(([href, l]) => (
              <Link key={href} href={href} className={`transition hover:text-ink-600 ${F}`}>{l}</Link>
            ))}
          </nav>
        </div>
        <div className="border-t border-ink-200 pt-5 text-[12px] text-ink-400 sm:flex sm:items-center sm:justify-between sm:gap-6 sm:pt-[23px]">
          <p>© 2026 ABC Construction. ყველა უფლება დაცულია.</p>
          <Link href="/" className={`mt-[13px] inline-block text-ink-600 sm:mt-0 ${F}`}>აშენებულია დიდი ხნით.</Link>
        </div>
      </div>
    </footer>
  )
}
