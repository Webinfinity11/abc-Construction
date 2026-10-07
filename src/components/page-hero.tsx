import Image from 'next/image'
import Link from 'next/link'
import { Eyebrow } from './brand'
import { F, W } from '@/lib/ui'

type Crumb = { href: string; label: string }

/** Shorter dark photo hero used on inner pages, matching the landing hero. */
export function PageHero({
  eyebrow,
  title,
  accent,
  text,
  image,
  crumbs = [],
}: {
  eyebrow: string
  title: React.ReactNode
  accent?: React.ReactNode
  text?: React.ReactNode
  image: string
  crumbs?: Crumb[]
}) {
  return (
    <section className="relative isolate flex min-h-[520px] items-end overflow-hidden bg-ink-800 pb-[60px] pt-[150px] text-white sm:min-h-[580px] sm:pb-[80px] sm:pt-[190px] xl:min-h-[620px]">
      <Image src={image} alt="" aria-hidden="true" fill priority sizes="100vw" className="-z-[3] object-cover object-center" />
      <div className="absolute inset-0 -z-[2] bg-[linear-gradient(90deg,rgba(22,18,14,.91),rgba(22,18,14,.6)),linear-gradient(0deg,rgba(22,18,14,.7),transparent_60%)] sm:bg-[linear-gradient(90deg,rgba(15,13,10,.9),rgba(15,13,10,.55)_50%,rgba(15,13,10,.15)_90%),linear-gradient(0deg,rgba(12,10,8,.75),transparent_50%)]" />
      <div className={W}>
        {crumbs.length > 0 && (
          <nav aria-label="ნავიგაციის ბილიკი" className="mb-6 flex flex-wrap items-center gap-2 text-[12px] text-ink-200 sm:mb-8 sm:text-[13px]">
            <Link href="/" className={`hover:text-brand-500 ${F}`}>მთავარი</Link>
            {crumbs.map((c) => (
              <span key={c.href} className="flex items-center gap-2">
                <span aria-hidden="true" className="text-ink-400">/</span>
                <Link href={c.href} className={`hover:text-brand-500 ${F}`}>{c.label}</Link>
              </span>
            ))}
          </nav>
        )}
        <div className="max-w-[870px]">
          <Eyebrow className="!mb-[20px] text-ink-50">{eyebrow}</Eyebrow>
          <h1 className="text-[36px] font-medium leading-[1.22] tracking-[-1.35px] sm:text-[52px] sm:tracking-[-2px] xl:text-[64px]">
            {title}
            {accent && <> <span className="text-brand-500">{accent}</span></>}
          </h1>
          {text && (
            <p className="mt-[22px] max-w-[565px] text-[15px] leading-[1.8] text-ink-100 sm:mt-7 sm:text-[16px] sm:leading-[1.85] xl:text-[17px]">{text}</p>
          )}
        </div>
      </div>
    </section>
  )
}
