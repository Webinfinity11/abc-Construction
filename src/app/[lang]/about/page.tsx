import type { Metadata } from 'next'
import { Eyebrow, Lines } from '@/components/brand'
import { PageHero } from '@/components/page-hero'
import { AboutBlock, CtaBand, PromiseBand, ServiceCards, Stats } from '@/components/sections'
import { IMG } from '@/lib/data'
import { getI18n } from '@/lib/i18n/server'
import { NUM, SECTION, TITLE, W } from '@/lib/ui'

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getI18n()
  return { title: t.pages.about.title, description: t.pages.about.description }
}

export default async function AboutPage() {
  const { t } = await getI18n()
  const p = t.pages.about
  return (
    <>
      <PageHero
        eyebrow={p.title}
        title={p.heroTitle}
        accent={p.heroAccent}
        text={p.heroText}
        image={IMG.facade}
        crumbs={[{ href: '/about', label: p.title }]}
      />
      <Stats />
      <AboutBlock />

      {/* Services */}
      <section aria-labelledby="services-title" className={`border-t border-ink-200 ${SECTION}`}>
        <div className={W}>
          <Eyebrow>{t.homeServices.eyebrow}</Eyebrow>
          <h2 id="services-title" className={`${TITLE} mb-[29px] max-w-[740px] sm:mb-11`}>
            <Lines text={t.homeServices.title} />
          </h2>
          <ServiceCards linked />
        </div>
      </section>

      {/* Values */}
      <section aria-labelledby="values-title" className={`bg-ink-50 ${SECTION}`}>
        <div className={W}>
          <div className="mb-8 sm:mb-12 sm:grid sm:grid-cols-2 sm:items-end sm:gap-[45px] xl:gap-[100px]">
            <div>
              <Eyebrow>{p.valuesEyebrow}</Eyebrow>
              <h2 id="values-title" className={TITLE}><Lines text={p.valuesTitle} /></h2>
            </div>
            <p className="mt-6 max-w-[520px] text-ink-600 sm:mt-0">{p.valuesText}</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-3 sm:gap-6">
            {t.values.map((v, i) => (
              <article key={v.t} className="rounded-[20px] bg-white p-7 shadow-card sm:p-8">
                <span className={`${NUM} block text-[44px] tracking-[-3px] text-brand-600`}>0{i + 1}</span>
                <h3 className="mt-6 text-[22px] font-medium leading-[1.35] tracking-[-0.5px]">{v.t}</h3>
                <p className="mt-3 text-[15px] leading-[1.8] text-ink-600">{v.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section aria-labelledby="process-title" className={SECTION}>
        <div className={W}>
          <Eyebrow>{p.processEyebrow}</Eyebrow>
          <h2 id="process-title" className={`${TITLE} mb-[29px] max-w-[740px] sm:mb-11`}>
            <Lines text={p.processTitle} />
          </h2>
          <ol className="grid border-t border-ink-200 sm:grid-cols-2 sm:gap-x-8 lg:grid-cols-4">
            {t.process.map((s) => (
              <li key={s.n} className="border-b border-ink-200 py-7 sm:py-9 lg:border-b-0">
                <span className="grid h-[42px] w-[42px] place-items-center rounded-full bg-brand-500 font-[Arial] text-[14px] font-bold">{s.n}</span>
                <h3 className="mt-6 text-[22px] font-medium leading-[1.35] tracking-[-0.5px]">{s.t}</h3>
                <p className="mt-3 text-[15px] leading-[1.8] text-ink-600">{s.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <PromiseBand />
      <div className="h-3.5 sm:h-7" />
      <CtaBand />
    </>
  )
}
