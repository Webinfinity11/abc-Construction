import Image from 'next/image'
import Link from 'next/link'
import { Eyebrow } from './brand'
import { IMG, PROJECTS, STATS, TEAM, VALUES } from '@/lib/data'
import { BTN, DARK, F, LINK, NUM, SECTION, TITLE, W } from '@/lib/ui'

export function Stats() {
  return (
    <section aria-label="ABC Construction რიცხვებში" className="border-b border-ink-200 bg-ink-50 py-[30px] sm:py-[42px]">
      <div className={`${W} grid grid-cols-3 items-center gap-3.5 sm:gap-[22px] lg:grid-cols-[1.1fr_repeat(3,1fr)] xl:gap-10`}>
        <p className="hidden max-w-[230px] text-[19px] leading-[1.5] lg:block">
          გამოცდილება,<br />რომელსაც ენდობით.
        </p>
        {STATS.map(([n, a, b], i) => (
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

export function AboutBlock({ withLink = true }: { withLink?: boolean }) {
  return (
    <section id="about" aria-labelledby="about-title" className={SECTION}>
      <div className={`${W} flex flex-col-reverse gap-[35px] sm:grid sm:grid-cols-[.92fr_1fr] sm:items-center lg:grid-cols-[1fr_1.06fr] lg:gap-[50px] xl:gap-[90px]`}>
        <div className="relative w-full pb-7 pr-6 sm:pb-9 sm:pr-4 lg:pr-[30px]">
          <div className="relative h-[370px] w-full overflow-hidden rounded-[20px] sm:h-[490px] lg:h-[520px] xl:h-[580px]">
            <Image src={IMG.facade} alt="მინისა და აგურის თანამედროვე ფასადი — საილუსტრაციო ფოტო" fill sizes="(min-width: 640px) 50vw, 100vw" className="object-cover object-center sm:object-[35%_center]" />
          </div>
          <div className="absolute bottom-0 right-0 min-h-[165px] w-[177px] rounded-[26px] border-[6px] border-white bg-brand-500 px-[18px] py-[15px] sm:min-h-[167px] sm:w-[180px] sm:border-8 lg:min-h-[196px] lg:w-[222px] lg:px-[23px] lg:py-5">
            <strong className={`${NUM} mb-2.5 block text-[60px] tracking-[-5px] lg:text-[73px]`}>17</strong>
            <span className="block max-w-[125px] text-[13px] leading-[1.5] lg:text-[14px]">წელი საიმედო სივრცეების შექმნაში</span>
          </div>
        </div>
        <div>
          <Eyebrow>ვინ ვართ ჩვენ</Eyebrow>
          <h2 id="about-title" className="max-w-[590px] text-[34px] font-medium leading-[1.22] tracking-[-1.2px] sm:text-[33px] lg:text-[41px] lg:tracking-[-1.5px] xl:text-[48px]">
            კონტრაქტორი,<br />რომელიც საქმეს<br />ბოლომდე მიიყვანს.
          </h2>
          <p className="mt-[21px] leading-[1.85] text-ink-600 sm:mt-[26px] sm:text-[15px] lg:text-[16px]">
            ჩვენ ვართ მშენებლობისა და შიდა მოწყობის გუნდი, რომელიც ქმნის მაღალი ხარისხის, საიმედო სივრცეებს დროულად და ბიუჯეტის ფარგლებში.
          </p>
          <p className="mt-[21px] leading-[1.85] text-ink-600 sm:mt-[26px] sm:text-[15px] lg:text-[16px]">
            ჩვენი საინჟინრო ხელმძღვანელობა ჩართულია ყველა ეტაპზე — დაპროექტებიდან და მონტაჟიდან საბოლოო ჩაბარებამდე.
          </p>
          <div className="mt-[25px] flex items-center gap-4 border-t border-ink-200 pt-[23px] sm:mt-9 sm:gap-[30px] sm:pt-[27px]">
            <div aria-hidden="true" className="grid h-[51px] w-[51px] flex-none place-items-center rounded-full bg-ink-50 font-[Arial] font-bold tracking-[-1px]">ABC</div>
            <div className="text-[14px] leading-[1.5]">
              <strong className="block font-semibold">ერთი გუნდი. სრული პასუხისმგებლობა.</strong>
              {withLink && <Link href="/team" className={`${LINK} mt-2`}>გაიცანით გუნდი</Link>}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function ProjectCard({ index, big }: { index: number; big?: boolean }) {
  const pr = PROJECTS[index]
  return (
    <Link href={`/projects/${pr.slug}`} aria-label={`პროექტის ნახვა: ${pr.name}`} className={`group relative block w-full text-left ${big ? 'sm:row-span-2' : ''} ${F}`}>
      <div className={`relative overflow-hidden rounded-[20px] bg-ink-100 ${big ? 'h-[410px] sm:h-[539px] lg:h-[607px]' : 'h-[290px] sm:h-[210px] lg:h-[248px]'}`}>
        <Image
          src={pr.src}
          alt={pr.alt}
          fill
          sizes={big ? '(min-width: 640px) 58vw, 100vw' : '(min-width: 640px) 42vw, 100vw'}
          className={`object-cover transition-transform duration-700 ease-[cubic-bezier(.2,.6,.3,1)] group-hover:scale-[1.045] ${big ? 'object-[53%_center]' : ''}`}
        />
        <span className="absolute bottom-5 right-5 hidden translate-y-[5px] rounded-[50px] bg-brand-500 px-[18px] py-[11px] text-[13px] text-ink-900 opacity-0 transition duration-200 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100 lg:block">
          პროექტის ნახვა
        </span>
      </div>
      <div className="flex items-center justify-between gap-[18px] px-px pb-[7px] pt-4 sm:pt-5">
        <div>
          <h3 className="text-[24px] font-medium leading-[1.35] sm:text-[22px] lg:text-[25px]">{pr.name}</h3>
          <p className="mt-[7px] text-[12px] text-ink-600 lg:text-[13px]">მშენებლობა და შიდა მოწყობა</p>
        </div>
        <span aria-hidden="true" className="grid h-[42px] w-[42px] flex-none place-items-center rounded-full border border-ink-200 font-[Arial] text-[24px] transition group-hover:border-brand-500 group-hover:bg-brand-500">+</span>
      </div>
    </Link>
  )
}

export function ProjectsGrid() {
  return (
    <div className="flex flex-col gap-[29px] sm:grid sm:grid-cols-[1.35fr_1fr] sm:gap-6 lg:gap-[29px]">
      {PROJECTS.map((_, i) => <ProjectCard key={i} index={i} big={i === 0} />)}
    </div>
  )
}

export function ProjectsSection() {
  return (
    <section id="projects" aria-labelledby="projects-title" className="relative pb-16 pt-16 sm:pb-[102px] sm:pt-20 lg:pt-28">
      <div className={W}>
        <Eyebrow>რჩეული სამუშაოები</Eyebrow>
        <div className="mb-[29px] sm:mb-11 sm:flex sm:items-end sm:justify-between sm:gap-[35px] lg:gap-[60px]">
          <h2 id="projects-title" className={`${TITLE} max-w-[740px]`}>
            სივრცეები, რომლებიც<br />ჩვენზე საუბრობენ.
          </h2>
          <p className="mt-[22px] text-[16px] text-ink-600 sm:mt-0 sm:max-w-[290px] sm:text-[15px] lg:max-w-[380px] lg:text-[16px]">
            ჩვენ მიერ ბოლოს ჩაბარებული ობიექტები.<br className="hidden sm:block" /> მშენებლობა და შიდა მოწყობა — იდეიდან დასრულებულ სივრცემდე.
          </p>
        </div>
        <ProjectsGrid />
        <div className="mt-[25px] flex flex-col items-start gap-5 sm:mt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-[300px] text-[12px] leading-[1.7] text-ink-400 sm:max-w-none">ფოტომასალა საილუსტრაციოა.</p>
          <Link href="/projects" className={LINK}>ყველა პროექტი</Link>
        </div>
      </div>
    </section>
  )
}

export function PromiseBand() {
  return (
    <section aria-labelledby="promise-title" className="relative isolate overflow-hidden bg-ink-900 py-[55px] text-white sm:py-[72px]">
      <Image src={IMG.roof} alt="" aria-hidden="true" fill sizes="100vw" className="pointer-events-none z-0 object-cover object-[center_56%] opacity-[0.18] grayscale" />
      <div className={`${W} relative z-[1] sm:grid sm:grid-cols-2 sm:items-center sm:gap-[45px] lg:gap-[65px] xl:gap-[100px]`}>
        <div>
          <Eyebrow className="text-brand-500">ჩვენი მიდგომა</Eyebrow>
          <h2 id="promise-title" className="max-w-[530px] text-[36px] font-medium leading-[1.25] tracking-[-1px] lg:text-[44px] lg:leading-[1.22] lg:tracking-[-1.5px]">
            მაღალი ხარისხი.<br /><span className="text-brand-500">ყველა დეტალში.</span>
          </h2>
        </div>
        <div>
          <p className="mb-[25px] mt-[25px] leading-[1.9] text-white/75 sm:mt-0">
            ვაშენებთ მაღალი ხარისხის, საიმედო სივრცეებს დროულად და ხარისხიანად და მშენებლობის მთელ პროცესს კლიენტებისთვის მარტივს ვხდით.
          </p>
          <div className="flex flex-wrap gap-2 sm:gap-2.5">
            {VALUES.map((v) => (
              <span key={v.t} className="rounded-[30px] border border-white/15 px-3 py-[7px] text-[12px] text-ink-100 sm:px-[15px] sm:text-[13px]">{v.t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export function TeamGrid() {
  return (
    <>
      <div className="grid grid-cols-2 gap-x-5 gap-y-[30px] sm:gap-x-6 sm:gap-y-10 lg:grid-cols-4 lg:gap-6">
        {TEAM.map((m) => (
          <article key={m.last} className="group">
            <div className="relative mb-[17px] aspect-[4/5] overflow-hidden rounded-[13px] bg-ink-100 sm:mb-6 sm:rounded-[18px]">
              <Image src={IMG.portrait} alt="სატესტო პორტრეტი — გუნდის წევრი" fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover object-[center_20%] grayscale transition duration-500 group-hover:scale-[1.025] group-hover:grayscale-0" />
            </div>
            <h3 className="mb-2 text-[18px] font-medium leading-[1.5] sm:text-[21px]">{m.first}<br />{m.last}</h3>
            <p className="text-[13px] text-ink-600 sm:text-[14px]">{m.role}</p>
          </article>
        ))}
      </div>
      <p className="mt-[23px] text-[12px] leading-[1.7] text-ink-400 sm:mt-[26px]">პორტრეტები სატესტოა და არ ასახავს გუნდის რეალურ წევრებს.</p>
    </>
  )
}

export function TeamSection() {
  return (
    <section id="team" aria-labelledby="team-title" className={SECTION}>
      <div className={W}>
        <div className="mb-8 sm:mb-12 sm:grid sm:grid-cols-2 sm:items-end sm:gap-[45px] xl:gap-[100px]">
          <div>
            <Eyebrow>ადამიანები პროექტების მიღმა</Eyebrow>
            <h2 id="team-title" className={TITLE}>ჩვენი გუნდი.</h2>
          </div>
          <p className="mt-6 max-w-[520px] text-ink-600 sm:mt-0">
            ჩვენი საკუთარი თანამშრომლები და არა ქვეკონტრაქტორები. სწორედ ისინი შეაფასებენ თქვენს პროექტს და უხელმძღვანელებენ მას.
          </p>
        </div>
        <TeamGrid />
      </div>
    </section>
  )
}

/** Compact dark call-to-action band for the bottom of inner pages. */
export function CtaBand({ title = 'გაქვთ პროექტი?', text = 'მოგვიყევით, რას გეგმავთ — გულწრფელად გეტყვით, ვართ თუ არა ამისთვის შესაფერისი კონტრაქტორი.' }: { title?: string; text?: string }) {
  return (
    <section className="px-3 pb-3.5 sm:px-7 sm:pb-7">
      <div className="mx-auto flex max-w-[1600px] flex-col items-start gap-7 rounded-[20px] bg-brand-500 px-[22px] py-[43px] sm:rounded-[26px] sm:px-9 sm:py-[56px] lg:flex-row lg:items-center lg:justify-between lg:px-10 xl:px-[max(40px,calc((100%-1320px)/2))]">
        <div>
          <Eyebrow>დავიწყოთ საუბარი</Eyebrow>
          <h2 className="text-[34px] font-medium leading-[1.22] tracking-[-1.2px] lg:text-[43px] lg:tracking-[-1.8px]">{title}</h2>
          <p className="mt-4 max-w-[520px] leading-[1.85] text-brand-900">{text}</p>
        </div>
        <Link href="/contact" className={`${BTN} ${DARK} flex-none`}>შეთავაზების მოთხოვნა</Link>
      </div>
    </section>
  )
}
