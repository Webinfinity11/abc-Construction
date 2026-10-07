import type { Metadata } from 'next'
import { Eyebrow } from '@/components/brand'
import { PageHero } from '@/components/page-hero'
import { AboutBlock, CtaBand, PromiseBand, Stats } from '@/components/sections'
import { IMG, PROCESS, VALUES } from '@/lib/data'
import { NUM, SECTION, TITLE, W } from '@/lib/ui'

export const metadata: Metadata = {
  title: 'კომპანია',
  description: 'ABC Construction — მშენებლობისა და შიდა მოწყობის გუნდი, რომელიც საქმეს ბოლომდე მიიყვანს.',
}

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="კომპანია"
        title="17 წელი"
        accent="საიმედო სივრცეების შექმნაში."
        text="ჩვენ ვართ მშენებლობისა და შიდა მოწყობის გუნდი, რომელიც ქმნის მაღალი ხარისხის, საიმედო სივრცეებს დროულად და ბიუჯეტის ფარგლებში."
        image={IMG.facade}
        crumbs={[{ href: '/about', label: 'კომპანია' }]}
      />
      <Stats />
      <AboutBlock />

      {/* Values */}
      <section aria-labelledby="values-title" className={`bg-ink-50 ${SECTION}`}>
        <div className={W}>
          <div className="mb-8 sm:mb-12 sm:grid sm:grid-cols-2 sm:items-end sm:gap-[45px] xl:gap-[100px]">
            <div>
              <Eyebrow>რას ვეყრდნობით</Eyebrow>
              <h2 id="values-title" className={TITLE}>ჩვენი<br />პრინციპები.</h2>
            </div>
            <p className="mt-6 max-w-[520px] text-ink-600 sm:mt-0">
              მშენებლობის მთელ პროცესს კლიენტებისთვის მარტივს ვხდით — ერთი გუნდით, მკაფიო გეგმითა და სრული პასუხისმგებლობით.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-3 sm:gap-6">
            {VALUES.map((v, i) => (
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
          <Eyebrow>როგორ ვმუშაობთ</Eyebrow>
          <h2 id="process-title" className={`${TITLE} mb-[29px] max-w-[740px] sm:mb-11`}>
            იდეიდან<br />ჩაბარებამდე.
          </h2>
          <ol className="grid border-t border-ink-200 sm:grid-cols-2 sm:gap-x-8 lg:grid-cols-4">
            {PROCESS.map((s) => (
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
