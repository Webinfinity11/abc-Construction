import type { Metadata } from 'next'
import { Eyebrow, Lines } from '@/components/brand'
import { PageHero } from '@/components/page-hero'
import { CtaBand, PromiseBand, TeamGrid } from '@/components/sections'
import { IMG } from '@/lib/data'
import { getI18n } from '@/lib/i18n/server'
import { SECTION, TITLE, W } from '@/lib/ui'

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getI18n()
  return { title: t.pages.team.title, description: t.pages.team.description }
}

export default async function TeamPage() {
  const { t } = await getI18n()
  const p = t.pages.team
  return (
    <>
      <PageHero
        eyebrow={t.teamSection.eyebrow}
        title={p.heroTitle}
        accent={p.heroAccent}
        text={t.teamSection.text}
        image={IMG.interior}
        crumbs={[{ href: '/team', label: p.title }]}
      />

      <section aria-labelledby="team-title" className={SECTION}>
        <div className={W}>
          <div className="mb-8 sm:mb-12 sm:grid sm:grid-cols-2 sm:items-end sm:gap-[45px] xl:gap-[100px]">
            <div>
              <Eyebrow>{p.eyebrow}</Eyebrow>
              <h2 id="team-title" className={TITLE}>{t.teamSection.title}</h2>
            </div>
            <p className="mt-6 max-w-[520px] text-ink-600 sm:mt-0">{p.text}</p>
          </div>
          <TeamGrid />
        </div>
      </section>

      <section aria-labelledby="why-title" className={`bg-ink-50 ${SECTION}`}>
        <div className={`${W} sm:grid sm:grid-cols-[.9fr_1.1fr] sm:gap-[45px] xl:gap-[100px]`}>
          <div>
            <Eyebrow>{p.whyEyebrow}</Eyebrow>
            <h2 id="why-title" className={TITLE}><Lines text={p.whyTitle} /></h2>
          </div>
          <div className="mt-8 border-t border-ink-200 sm:mt-0">
            {t.values.map((v) => (
              <div key={v.t} className="grid gap-2 border-b border-ink-200 py-6 sm:grid-cols-[200px_1fr] sm:gap-8 sm:py-7">
                <h3 className="text-[20px] font-medium leading-[1.4]">{v.t}</h3>
                <p className="text-[15px] leading-[1.8] text-ink-600">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PromiseBand />
      <div className="h-3.5 sm:h-7" />
      <CtaBand />
    </>
  )
}
