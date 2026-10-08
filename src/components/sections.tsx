import Image from 'next/image'
import Link from 'next/link'
import { Eyebrow, Lines } from './brand'
import { IMG, PROJECTS } from '@/lib/data'
import { getI18n } from '@/lib/i18n/server'
import { BTN, DARK, F, LINK, NUM, SECTION, TITLE, W } from '@/lib/ui'

export async function Stats() {
  const { t } = await getI18n()
  return (
    <section aria-label={t.stats.aria} className="border-b border-ink-200 bg-ink-50 py-[30px] sm:py-[42px]">
      <div className={`${W} grid grid-cols-3 items-center gap-3.5 sm:gap-[22px] lg:grid-cols-[1.1fr_repeat(3,1fr)] xl:gap-10`}>
        <p className="hidden max-w-[230px] text-[19px] leading-[1.5] lg:block">
          <Lines text={t.stats.lead} />
        </p>
        {t.stats.items.map(([n, a, b], i) => (
          <div key={n + a} className={`flex flex-col items-start gap-[9px] border-ink-200 lg:flex-row lg:items-center lg:gap-3.5 lg:border-l lg:pl-[25px] xl:gap-[18px] xl:pl-10 ${i ? 'border-l pl-[17px] sm:pl-[25px]' : ''}`}>
            <strong className={`${NUM} text-[49px] tracking-[-2.5px] sm:text-[59px] sm:tracking-[-4px] xl:text-[68px]`}>{n}</strong>
            <span className="max-w-[86px] text-[12px] leading-[1.6] text-ink-600 sm:max-w-none sm:text-[14px] lg:max-w-[100px]">
              {a}<br />{b}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}

export async function AboutBlock({ withLink = true }: { withLink?: boolean }) {
  const { t, href } = await getI18n()
  const a = t.aboutBlock
  return (
    <section id="about" aria-labelledby="about-title" className={SECTION}>
      <div className={`${W} flex flex-col-reverse gap-[35px] sm:grid sm:grid-cols-[.92fr_1fr] sm:items-center lg:grid-cols-[1fr_1.06fr] lg:gap-[50px] xl:gap-[90px]`}>
        <div className="relative w-full pb-7 pr-6 sm:pb-9 sm:pr-4 lg:pr-[30px]">
          <div className="relative h-[370px] w-full overflow-hidden rounded-[20px] sm:h-[490px] lg:h-[520px] xl:h-[580px]">
            <Image src={IMG.facade} alt={t.alt.facade} fill sizes="(min-width: 640px) 50vw, 100vw" className="object-cover object-center sm:object-[35%_center]" />
          </div>
          <div className="absolute bottom-0 right-0 min-h-[165px] w-[177px] rounded-[26px] border-[6px] border-white bg-brand-500 px-[18px] py-[15px] sm:min-h-[167px] sm:w-[180px] sm:border-8 lg:min-h-[196px] lg:w-[222px] lg:px-[23px] lg:py-5">
            <strong className={`${NUM} mb-2.5 block text-[60px] tracking-[-5px] lg:text-[73px]`}>17</strong>
            <span className="block max-w-[125px] text-[13px] leading-[1.5] lg:text-[14px]">{a.years}</span>
          </div>
        </div>
        <div>
          <Eyebrow>{a.eyebrow}</Eyebrow>
          <h2 id="about-title" className="max-w-[590px] text-[34px] font-medium leading-[1.22] tracking-[-1.2px] sm:text-[33px] lg:text-[41px] lg:tracking-[-1.5px] xl:text-[48px]">
            <Lines text={a.title} />
          </h2>
          <p className="mt-[21px] leading-[1.85] text-ink-600 sm:mt-[26px] sm:text-[15px] lg:text-[16px]">{a.p1}</p>
          <p className="mt-[21px] leading-[1.85] text-ink-600 sm:mt-[26px] sm:text-[15px] lg:text-[16px]">{a.p2}</p>
          <div className="mt-[25px] flex items-center gap-4 border-t border-ink-200 pt-[23px] sm:mt-9 sm:gap-[30px] sm:pt-[27px]">
            <div aria-hidden="true" className="grid h-[51px] w-[51px] flex-none place-items-center rounded-full bg-ink-50 font-[Arial] font-bold tracking-[-1px]">ABC</div>
            <div className="text-[14px] leading-[1.5]">
              <strong className="block font-semibold">{a.oneTeam}</strong>
              {withLink && <Link href={href('/team')} className={`${LINK} mt-2`}>{t.ui.meetTeam}</Link>}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/** Numbered 01–04 service cards linking to /services#slug. */
export async function ServiceCards({ linked = false }: { linked?: boolean }) {
  const { t, href } = await getI18n()
  return (
    <div className="grid gap-5 sm:grid-cols-2 sm:gap-6">
      {t.services.map((s, i) => (
        <a key={s.slug} href={linked ? href(`/services#${s.slug}`) : `#${s.slug}`} className={`group flex flex-col rounded-[20px] border border-ink-200 bg-white p-7 transition duration-200 hover:-translate-y-1 hover:border-brand-500 hover:shadow-pop sm:p-9 ${F}`}>
          <div className="flex items-start justify-between gap-6">
            <span className={`${NUM} text-[52px] tracking-[-3px] text-ink-200 transition group-hover:text-brand-500`}>0{i + 1}</span>
            <span aria-hidden="true" className="grid h-[42px] w-[42px] flex-none place-items-center rounded-full border border-ink-200 font-[Arial] text-[22px] transition group-hover:border-brand-500 group-hover:bg-brand-500">→</span>
          </div>
          <h3 className="mt-8 text-[24px] font-medium leading-[1.35] tracking-[-0.6px] lg:text-[28px]">{s.t}</h3>
          <p className="mt-3 text-[15px] leading-[1.8] text-ink-600 lg:text-[16px]">{s.d}</p>
        </a>
      ))}
    </div>
  )
}

export async function ProjectCard({ index, big }: { index: number; big?: boolean }) {
  const { t, href } = await getI18n()
  const pr = PROJECTS[index]
  const name = t.projects[pr.slug]
  return (
    <Link href={href(`/projects/${pr.slug}`)} aria-label={`${t.ui.viewProject}: ${name}`} className={`group relative block w-full text-left ${big ? 'sm:row-span-2' : ''} ${F}`}>
      <div className={`relative overflow-hidden rounded-[20px] bg-ink-100 ${big ? 'h-[410px] sm:h-[539px] lg:h-[607px]' : 'h-[290px] sm:h-[210px] lg:h-[248px]'}`}>
        <Image
          src={pr.src}
          alt={t.alt[pr.alt]}
          fill
          sizes={big ? '(min-width: 640px) 58vw, 100vw' : '(min-width: 640px) 42vw, 100vw'}
          className={`object-cover transition-transform duration-700 ease-[cubic-bezier(.2,.6,.3,1)] group-hover:scale-[1.045] ${big ? 'object-[53%_center]' : ''}`}
        />
        <span className="absolute bottom-5 right-5 hidden translate-y-[5px] rounded-[50px] bg-brand-500 px-[18px] py-[11px] text-[13px] text-ink-900 opacity-0 transition duration-200 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100 lg:block">
          {t.ui.viewProject}
        </span>
      </div>
      <div className="flex items-center justify-between gap-[18px] px-px pb-[7px] pt-4 sm:pt-5">
        <div>
          <h3 className="text-[24px] font-medium leading-[1.35] sm:text-[22px] lg:text-[25px]">{name}</h3>
          <p className="mt-[7px] text-[12px] text-ink-600 lg:text-[13px]">{t.ui.category}</p>
        </div>
        <span aria-hidden="true" className="grid h-[42px] w-[42px] flex-none place-items-center rounded-full border border-ink-200 font-[Arial] text-[24px] transition group-hover:border-brand-500 group-hover:bg-brand-500">+</span>
      </div>
    </Link>
  )
}

export function ProjectsGrid({ all }: { all?: boolean }) {
  const rest = all ? PROJECTS.slice(3) : []
  return (
    <>
      <div className="flex flex-col gap-[29px] sm:grid sm:grid-cols-[1.35fr_1fr] sm:gap-6 lg:gap-[29px]">
        {PROJECTS.slice(0, 3).map((_, i) => <ProjectCard key={i} index={i} big={i === 0} />)}
      </div>
      {rest.length > 0 && (
        <div className="mt-[29px] grid gap-[29px] sm:mt-6 sm:grid-cols-2 sm:gap-6 lg:mt-[29px] lg:grid-cols-3 lg:gap-[29px]">
          {rest.map((_, i) => <ProjectCard key={i + 3} index={i + 3} />)}
        </div>
      )}
    </>
  )
}

export async function ProjectsSection() {
  const { t, href } = await getI18n()
  const p = t.projectsSection
  return (
    <section id="projects" aria-labelledby="projects-title" className="relative pb-16 pt-16 sm:pb-[102px] sm:pt-20 lg:pt-28">
      <div className={W}>
        <Eyebrow>{p.eyebrow}</Eyebrow>
        <div className="mb-[29px] sm:mb-11 sm:flex sm:items-end sm:justify-between sm:gap-[35px] lg:gap-[60px]">
          <h2 id="projects-title" className={`${TITLE} max-w-[740px]`}>
            <Lines text={p.title} />
          </h2>
          <p className="mt-[22px] text-[16px] text-ink-600 sm:mt-0 sm:max-w-[290px] sm:text-[15px] lg:max-w-[380px] lg:text-[16px]">
            {p.text1}<br className="hidden sm:block" /> {p.text2}
          </p>
        </div>
        <ProjectsGrid />
        <div className="mt-[25px] flex flex-col items-start gap-5 sm:mt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-[300px] text-[12px] leading-[1.7] text-ink-400 sm:max-w-none">{t.ui.photosNote}</p>
          <Link href={href('/projects')} className={LINK}>{t.ui.allProjects}</Link>
        </div>
      </div>
    </section>
  )
}

export async function PromiseBand() {
  const { t } = await getI18n()
  return (
    <section aria-labelledby="promise-title" className="relative isolate overflow-hidden bg-ink-900 py-[55px] text-white sm:py-[72px]">
      <Image src={IMG.roof} alt="" aria-hidden="true" fill sizes="100vw" className="pointer-events-none z-0 object-cover object-[center_56%] opacity-[0.18] grayscale" />
      <div className={`${W} relative z-[1] sm:grid sm:grid-cols-2 sm:items-center sm:gap-[45px] lg:gap-[65px] xl:gap-[100px]`}>
        <div>
          <Eyebrow className="text-brand-500">{t.promise.eyebrow}</Eyebrow>
          <h2 id="promise-title" className="max-w-[530px] text-[36px] font-medium leading-[1.25] tracking-[-1px] lg:text-[44px] lg:leading-[1.22] lg:tracking-[-1.5px]">
            {t.promise.title}<br /><span className="text-brand-500">{t.promise.accent}</span>
          </h2>
        </div>
        <div>
          <p className="mb-[25px] mt-[25px] leading-[1.9] text-white/75 sm:mt-0">{t.promise.text}</p>
          <div className="flex flex-wrap gap-2 sm:gap-2.5">
            {t.values.map((v) => (
              <span key={v.t} className="rounded-[30px] border border-white/15 px-3 py-[7px] text-[12px] text-ink-100 sm:px-[15px] sm:text-[13px]">{v.t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export async function TeamGrid() {
  const { t } = await getI18n()
  return (
    <>
      <div className="grid grid-cols-2 gap-x-5 gap-y-[30px] sm:gap-x-6 sm:gap-y-10 lg:grid-cols-4 lg:gap-6">
        {t.team.map((m) => (
          <article key={m.last} className="group">
            <div className="relative mb-[17px] aspect-[4/5] overflow-hidden rounded-[13px] bg-ink-100 sm:mb-6 sm:rounded-[18px]">
              <Image src={IMG.portrait} alt={t.alt.portrait} fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover object-[center_20%] grayscale transition duration-500 group-hover:scale-[1.025] group-hover:grayscale-0" />
            </div>
            <h3 className="mb-2 text-[18px] font-medium leading-[1.5] sm:text-[21px]">{m.first}<br />{m.last}</h3>
            <p className="text-[13px] text-ink-600 sm:text-[14px]">{m.role}</p>
          </article>
        ))}
      </div>
      <p className="mt-[23px] text-[12px] leading-[1.7] text-ink-400 sm:mt-[26px]">{t.teamSection.note}</p>
    </>
  )
}

export async function TeamSection() {
  const { t } = await getI18n()
  return (
    <section id="team" aria-labelledby="team-title" className={SECTION}>
      <div className={W}>
        <div className="mb-8 sm:mb-12 sm:grid sm:grid-cols-2 sm:items-end sm:gap-[45px] xl:gap-[100px]">
          <div>
            <Eyebrow>{t.teamSection.eyebrow}</Eyebrow>
            <h2 id="team-title" className={TITLE}>{t.teamSection.title}</h2>
          </div>
          <p className="mt-6 max-w-[520px] text-ink-600 sm:mt-0">{t.teamSection.text}</p>
        </div>
        <TeamGrid />
      </div>
    </section>
  )
}

/** Compact dark call-to-action band for the bottom of inner pages. */
export async function CtaBand({ title, text }: { title?: string; text?: string }) {
  const { t, href } = await getI18n()
  return (
    <section className="px-3 pb-3.5 sm:px-7 sm:pb-7">
      <div className="mx-auto flex max-w-[1600px] flex-col items-start gap-7 rounded-[20px] bg-brand-500 px-[22px] py-[43px] sm:rounded-[26px] sm:px-9 sm:py-[56px] lg:flex-row lg:items-center lg:justify-between lg:px-10 xl:px-[max(40px,calc((100%-1320px)/2))]">
        <div>
          <Eyebrow>{t.ui.letsTalk}</Eyebrow>
          <h2 className="text-[34px] font-medium leading-[1.22] tracking-[-1.2px] lg:text-[43px] lg:tracking-[-1.8px]">{title ?? t.cta.title}</h2>
          <p className="mt-4 max-w-[520px] leading-[1.85] text-brand-900">{text ?? t.cta.text}</p>
        </div>
        <Link href={href('/contact')} className={`${BTN} ${DARK} flex-none`}>{t.ui.contactUs} <span aria-hidden="true">→</span></Link>
      </div>
    </section>
  )
}
