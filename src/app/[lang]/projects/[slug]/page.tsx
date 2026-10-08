import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Eyebrow, Lines } from '@/components/brand'
import { PageHero } from '@/components/page-hero'
import { CtaBand, ProjectCard } from '@/components/sections'
import { IMG, PROJECTS } from '@/lib/data'
import { getI18n } from '@/lib/i18n/server'
import { BTN, F, OUTLINE, SECTION, TITLE, W } from '@/lib/ui'

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata(props: PageProps<'/[lang]/projects/[slug]'>): Promise<Metadata> {
  const { slug } = await props.params
  const { t } = await getI18n()
  const name = t.projects[slug]
  return name ? { title: name, description: `${name} ${t.pages.project.description}` } : {}
}

export default async function ProjectPage(props: PageProps<'/[lang]/projects/[slug]'>) {
  const { slug } = await props.params
  const index = PROJECTS.findIndex((x) => x.slug === slug)
  if (index < 0) notFound()

  const { t, href } = await getI18n()
  const p = t.pages.project
  const pr = PROJECTS[index]
  const name = t.projects[pr.slug]
  const prev = PROJECTS[(index + PROJECTS.length - 1) % PROJECTS.length]
  const next = PROJECTS[(index + 1) % PROJECTS.length]
  const others = [1, 2, 3, 4].map((d) => (index + d) % PROJECTS.length)
  const gallery = [pr.src, IMG.interior, IMG.roof].filter((s, i, a) => a.indexOf(s) === i)

  return (
    <>
      <PageHero
        eyebrow={t.ui.category}
        title={name}
        image={pr.src}
        crumbs={[{ href: '/projects', label: t.nav.projects }, { href: `/projects/${pr.slug}`, label: name }]}
      />

      <section aria-labelledby="overview-title" className={SECTION}>
        <div className={`${W} grid gap-10 lg:grid-cols-[1fr_380px] lg:gap-[70px] xl:gap-[100px]`}>
          <div>
            <Eyebrow>{p.eyebrow}</Eyebrow>
            <h2 id="overview-title" className={`${TITLE} max-w-[680px]`}><Lines text={p.title} /></h2>
            <p className="mt-[26px] max-w-[680px] leading-[1.85] text-ink-600 lg:text-[17px]">{p.text}</p>
            <ul className="mt-8 flex flex-wrap gap-2 sm:gap-2.5">
              {t.services.map((s) => (
                <li key={s.slug}>
                  <Link href={href(`/services#${s.slug}`)} className={`inline-block rounded-[30px] border border-ink-200 px-3 py-[7px] text-[12px] transition hover:border-brand-500 hover:bg-brand-500 sm:px-[15px] sm:text-[13px] ${F}`}>{s.t}</Link>
                </li>
              ))}
            </ul>
          </div>
          <aside className="self-start rounded-[20px] bg-ink-50 p-7 sm:p-8">
            <dl>
              {p.facts.map(([k, v], i) => (
                <div key={k} className={`py-4 ${i ? 'border-t border-ink-200' : 'pt-0'}`}>
                  <dt className="text-[12px] text-ink-400">{k}</dt>
                  <dd className="mt-1 text-[16px] font-medium">{v}</dd>
                </div>
              ))}
            </dl>
            <Link href={href('/contact')} className={`${BTN} mt-4 w-full bg-brand-500 text-ink-900 hover:bg-brand-600`}>{t.ui.discussSimilar}</Link>
          </aside>
        </div>
      </section>

      {/* Gallery */}
      <section aria-label={p.galleryAria} className="pb-16 sm:pb-20 lg:pb-28">
        <div className={`${W} grid gap-5 sm:grid-cols-2 sm:gap-6`}>
          {gallery.map((src, i) => (
            <div key={src} className={`relative overflow-hidden rounded-[20px] bg-ink-100 ${i === 0 ? 'h-[300px] sm:col-span-2 sm:h-[520px]' : 'h-[260px] sm:h-[360px]'}`}>
              <Image src={src} alt={t.alt.project} fill sizes={i === 0 ? '100vw' : '50vw'} className="object-cover" />
            </div>
          ))}
        </div>
        <div className={`${W} mt-[25px]`}>
          <p className="text-[12px] leading-[1.7] text-ink-400">{p.galleryNote}</p>
          <div className="mt-8 flex flex-col gap-2.5 border-t border-ink-200 pt-8 sm:flex-row sm:justify-between">
            <Link href={href(`/projects/${prev.slug}`)} className={`${BTN} ${OUTLINE} border-ink-200`}>← {t.projects[prev.slug]}</Link>
            <Link href={href(`/projects/${next.slug}`)} className={`${BTN} ${OUTLINE} border-ink-200`}>{t.projects[next.slug]} →</Link>
          </div>
        </div>
      </section>

      {/* More */}
      <section aria-labelledby="more-title" className={`bg-ink-50 ${SECTION}`}>
        <div className={W}>
          <Eyebrow>{p.moreEyebrow}</Eyebrow>
          <h2 id="more-title" className={`${TITLE} mb-[29px] sm:mb-11`}>{p.moreTitle}</h2>
          <div className="grid gap-[29px] sm:grid-cols-2 sm:gap-6 lg:gap-[29px]">
            {others.map((i) => <ProjectCard key={i} index={i} />)}
          </div>
        </div>
      </section>

      <div className="h-3.5 sm:h-7" />
      <CtaBand />
    </>
  )
}
