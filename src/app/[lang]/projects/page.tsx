import type { Metadata } from 'next'
import { Eyebrow, Lines } from '@/components/brand'
import { PageHero } from '@/components/page-hero'
import { CtaBand, Partners, ProjectsGrid, Stats } from '@/components/sections'
import { IMG } from '@/lib/data'
import { getI18n } from '@/lib/i18n/server'
import { TITLE, W } from '@/lib/ui'

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getI18n()
  return { title: t.pages.projects.title, description: t.pages.projects.description }
}

export default async function ProjectsPage() {
  const { t } = await getI18n()
  const p = t.pages.projects
  return (
    <>
      <PageHero
        eyebrow={p.heroEyebrow}
        title={p.heroTitle}
        text={p.heroText}
        image={IMG.night}
        crumbs={[{ href: '/projects', label: p.title }]}
      />
      <Stats />
      <section aria-labelledby="projects-title" className="pb-16 pt-16 sm:pb-[102px] sm:pt-20 lg:pt-28">
        <div className={W}>
          <Eyebrow>{p.eyebrow}</Eyebrow>
          <div className="mb-[29px] sm:mb-11 sm:flex sm:items-end sm:justify-between sm:gap-[35px] lg:gap-[60px]">
            <h2 id="projects-title" className={`${TITLE} max-w-[740px]`}><Lines text={p.gridTitle} /></h2>
            <p className="mt-[22px] text-[16px] text-ink-600 sm:mt-0 sm:max-w-[290px] sm:text-[15px] lg:max-w-[380px] lg:text-[16px]">
              {p.gridText}
            </p>
          </div>
          <ProjectsGrid all />
        </div>
      </section>
      <Partners />
      <CtaBand />
    </>
  )
}
