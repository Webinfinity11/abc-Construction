import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Eyebrow } from '@/components/brand'
import { PageHero } from '@/components/page-hero'
import { CtaBand, ProjectCard } from '@/components/sections'
import { IMG, PROJECTS, SERVICES } from '@/lib/data'
import { BTN, F, OUTLINE, SECTION, TITLE, W } from '@/lib/ui'

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata(props: PageProps<'/projects/[slug]'>): Promise<Metadata> {
  const { slug } = await props.params
  const p = PROJECTS.find((x) => x.slug === slug)
  return p ? { title: p.name, description: `${p.name} — მშენებლობა და შიდა მოწყობა.` } : {}
}

export default async function ProjectPage(props: PageProps<'/projects/[slug]'>) {
  const { slug } = await props.params
  const index = PROJECTS.findIndex((x) => x.slug === slug)
  if (index < 0) notFound()

  const p = PROJECTS[index]
  const prev = PROJECTS[(index + PROJECTS.length - 1) % PROJECTS.length]
  const next = PROJECTS[(index + 1) % PROJECTS.length]
  const others = PROJECTS.map((_, i) => i).filter((i) => i !== index)
  const gallery = [p.src, IMG.interior, IMG.roof].filter((s, i, a) => a.indexOf(s) === i)

  const facts = [
    ['კატეგორია', 'მშენებლობა და შიდა მოწყობა'],
    ['სტატუსი', 'ჩაბარებული'],
    ['შემსრულებელი', 'ABC Construction'],
  ]

  return (
    <>
      <PageHero
        eyebrow="მშენებლობა და შიდა მოწყობა"
        title={p.name}
        image={p.src}
        crumbs={[{ href: '/projects', label: 'პროექტები' }, { href: `/projects/${p.slug}`, label: p.name }]}
      />

      <section aria-labelledby="overview-title" className={SECTION}>
        <div className={`${W} grid gap-10 lg:grid-cols-[1fr_380px] lg:gap-[70px] xl:gap-[100px]`}>
          <div>
            <Eyebrow>პროექტის შესახებ</Eyebrow>
            <h2 id="overview-title" className={`${TITLE} max-w-[680px]`}>იდეიდან<br />დასრულებულ სივრცემდე.</h2>
            <p className="mt-[26px] max-w-[680px] leading-[1.85] text-ink-600 lg:text-[17px]">
              ABC Construction-ის პორტფოლიოს ფარგლებში განხორციელებული მშენებლობისა და შიდა მოწყობის პროექტი. საინჟინრო ხელმძღვანელობა ჩართული იყო ყველა ეტაპზე — დაპროექტებიდან და მონტაჟიდან საბოლოო ჩაბარებამდე.
            </p>
            <ul className="mt-8 flex flex-wrap gap-2 sm:gap-2.5">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services#${s.slug}`} className={`inline-block rounded-[30px] border border-ink-200 px-3 py-[7px] text-[12px] transition hover:border-brand-500 hover:bg-brand-500 sm:px-[15px] sm:text-[13px] ${F}`}>{s.t}</Link>
                </li>
              ))}
            </ul>
          </div>
          <aside className="self-start rounded-[20px] bg-ink-50 p-7 sm:p-8">
            <dl>
              {facts.map(([k, v], i) => (
                <div key={k} className={`py-4 ${i ? 'border-t border-ink-200' : 'pt-0'}`}>
                  <dt className="text-[12px] text-ink-400">{k}</dt>
                  <dd className="mt-1 text-[16px] font-medium">{v}</dd>
                </div>
              ))}
            </dl>
            <Link href="/contact" className={`${BTN} mt-4 w-full bg-brand-500 text-ink-900 hover:bg-brand-600`}>მსგავსი პროექტის განხილვა</Link>
          </aside>
        </div>
      </section>

      {/* Gallery */}
      <section aria-label="ფოტოგალერეა" className="pb-16 sm:pb-20 lg:pb-28">
        <div className={`${W} grid gap-5 sm:grid-cols-2 sm:gap-6`}>
          {gallery.map((src, i) => (
            <div key={src} className={`relative overflow-hidden rounded-[20px] bg-ink-100 ${i === 0 ? 'h-[300px] sm:col-span-2 sm:h-[520px]' : 'h-[260px] sm:h-[360px]'}`}>
              <Image src={src} alt="პროექტის საილუსტრაციო ფოტო" fill sizes={i === 0 ? '100vw' : '50vw'} className="object-cover" />
            </div>
          ))}
        </div>
        <div className={`${W} mt-[25px]`}>
          <p className="text-[12px] leading-[1.7] text-ink-400">ფოტოები საილუსტრაციოა და არ ასახავს რეალურ პროექტს.</p>
          <div className="mt-8 flex flex-col gap-2.5 border-t border-ink-200 pt-8 sm:flex-row sm:justify-between">
            <Link href={`/projects/${prev.slug}`} className={`${BTN} ${OUTLINE} border-ink-200`}>← {prev.name}</Link>
            <Link href={`/projects/${next.slug}`} className={`${BTN} ${OUTLINE} border-ink-200`}>{next.name} →</Link>
          </div>
        </div>
      </section>

      {/* More */}
      <section aria-labelledby="more-title" className={`bg-ink-50 ${SECTION}`}>
        <div className={W}>
          <Eyebrow>სხვა პროექტები</Eyebrow>
          <h2 id="more-title" className={`${TITLE} mb-[29px] sm:mb-11`}>ნახეთ მეტი.</h2>
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
