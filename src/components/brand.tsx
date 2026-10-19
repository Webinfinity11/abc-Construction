import Image from 'next/image'
import Link from 'next/link'
import { Fragment } from 'react'

export function Brand({ big, href = '/', label }: { big?: boolean; href?: string; label: string }) {
  return (
    <Link href={href} aria-label={label} className="flex flex-shrink-0 items-center">
      <Image
        src="/brand/abc-logo.png"
        alt=""
        width={680}
        height={444}
        priority={big}
        className={big ? 'h-[88px] w-auto sm:h-[104px]' : 'h-[54px] w-auto sm:h-[62px] lg:h-[66px]'}
      />
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
