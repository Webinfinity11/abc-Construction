import Link from 'next/link'
import { Fragment } from 'react'
import { F } from '@/lib/ui'

export function Mark({ big }: { big?: boolean }) {
  return (
    <span className={`grid flex-none place-items-center border-2 border-ink-900 bg-brand-500 text-ink-900 ${big ? 'h-[39px] w-[39px] sm:h-[45px] sm:w-[45px]' : 'h-[33px] w-[33px] lg:h-9 lg:w-9 xl:h-10 xl:w-10'}`}>
      <svg viewBox="4 4 24 24" className="h-5 w-5 sm:h-[22px] sm:w-[22px]" fill="none" stroke="currentColor" strokeWidth="2.75" strokeLinecap="square" aria-hidden="true">
        <path d="M5 27h22" />
        <path d="M8 27V12l8-6 8 6v15" />
        <path d="M13 27v-7h6v7" />
      </svg>
    </span>
  )
}

export function Brand({ big, href = '/', label }: { big?: boolean; href?: string; label: string }) {
  return (
    <Link href={href} aria-label={label} className={`flex flex-shrink-0 items-center gap-2 leading-none sm:gap-2.5 ${F}`}>
      <Mark big={big} />
      <span className={`font-display font-bold uppercase leading-none tracking-[0.02em] text-brand-500 ${big ? 'text-[27px] sm:text-[29px]' : 'text-[21px] lg:text-[23px] xl:text-[25px]'}`}>
        ABC<span className="text-ink-900">Construction</span>
      </span>
    </Link>
  )
}

export function Eyebrow({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`mb-[18px] flex items-center gap-2.5 text-[12px] font-medium sm:mb-[23px] sm:text-[14px] ${className}`}>
      <span className="h-[7px] w-[7px] flex-none rounded-full bg-current" />
      {children}
    </div>
  )
}

/** Renders "\n" in dictionary strings as line breaks. */
export function Lines({ text }: { text: string }) {
  return text.split('\n').map((l, i) => (
    <Fragment key={i}>
      {i > 0 && <br />}
      {l}
    </Fragment>
  ))
}
