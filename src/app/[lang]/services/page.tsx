import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Eyebrow, Lines } from '@/components/brand'
import { PageHero } from '@/components/page-hero'
import { CtaBand, ServiceCards } from '@/components/sections'
import { ServicesAccordion } from '@/components/services-accordion'
import { IMG } from '@/lib/data'
import { getI18n } from '@/lib/i18n/server'
import { BTN, DARK, NUM, SECTION, TITLE, W } from '@/lib/ui'

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getI18n()
  return { title: t.pages.services.title, description: t.pages.services.description }
}

export default async function ServicesPage() {
  const { t, href } = await getI18n()
  const p = t.pages.services
  return (
    <>
      <PageHero
        eyebrow={p.title}
        title={p.heroTitle}
        accent={p.heroAccent}
        text={p.heroText}
        image={IMG.roof}
        crumbs={[{ href: '/services', label: p.title }]}
      />

      {/* Service cards */}
      <section aria-label={p.cardsAria} className={SECTION}>
        <div className={W}>
          <ServiceCards />
        </div>
      </section>

      {/* Details */}
      <section aria-labelledby="details-title" className={`bg-ink-50 ${SECTION}`}>
        <div className={W}>
          <Eyebrow>{p.detailsEyebrow}</Eyebrow>
          <h2 id="details-title" className={`${TITLE} mb-[29px] max-w-[740px] sm:mb-11`}>
            <Lines text={p.detailsTitle} />
          </h2>
          <div className="flex flex-col gap-8 sm:grid sm:grid-cols-[230px_1fr] sm:gap-[35px] lg:grid-cols-[300px_1fr] lg:gap-[45px] xl:grid-cols-[360px_1fr] xl:gap-20">
            <div className="text-ink-600 sm:pt-7">
              <div className="relative mb-7 hidden aspect-[4/5] overflow-hidden rounded-[20px] sm:block">
                <Image src={IMG.interior} alt={t.alt.interior} fill sizes="360px" className="object-cover" />
              </div>
              <p className="mb-[22px] sm:mb-7 sm:max-w-[310px]">{p.detailsText}</p>
              <Link href={href('/contact')} className={`${BTN} ${DARK}`}>{t.ui.discuss}</Link>
            </div>
            <ServicesAccordion detailed />
          </div>
        </div>
      </section>

      {/* Process */}
      <section aria-labelledby="process-title" className="relative isolate overflow-hidden bg-ink-900 py-16 text-white sm:py-20 lg:py-28">
        <Image src={IMG.night} alt="" aria-hidden="true" fill sizes="100vw" className="pointer-events-none z-0 object-cover opacity-[0.14] grayscale" />
        <div className={`${W} relative z-[1]`}>
          <Eyebrow className="text-brand-500">{p.processEyebrow}</Eyebrow>
          <h2 id="process-title" className="mb-10 max-w-[640px] text-[36px] font-medium leading-[1.25] tracking-[-1px] lg:text-[44px] lg:tracking-[-1.5px]">
            {p.processTitle}<br /><span className="text-brand-500">{p.processAccent}</span>
          </h2>
          <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {t.process.map((s) => (
              <li key={s.n} className="rounded-[20px] border border-white/15 p-6 sm:p-7">
                <span className={`${NUM} text-[40px] tracking-[-2px] text-brand-500`}>{s.n}</span>
                <h3 className="mt-5 text-[20px] font-medium">{s.t}</h3>
                <p className="mt-2.5 text-[14px] leading-[1.8] text-white/70">{s.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <div className="h-3.5 sm:h-7" />
      <CtaBand />
    </>
  )
}
