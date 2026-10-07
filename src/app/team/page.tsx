import type { Metadata } from 'next'
import { Eyebrow } from '@/components/brand'
import { PageHero } from '@/components/page-hero'
import { CtaBand, PromiseBand, TeamGrid } from '@/components/sections'
import { IMG, VALUES } from '@/lib/data'
import { SECTION, TITLE, W } from '@/lib/ui'

export const metadata: Metadata = {
  title: 'გუნდი',
  description: 'ადამიანები ABC Construction-ის პროექტების მიღმა.',
}

export default function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="ადამიანები პროექტების მიღმა"
        title="ერთი გუნდი."
        accent="სრული პასუხისმგებლობა."
        text="ჩვენი საკუთარი თანამშრომლები და არა ქვეკონტრაქტორები. სწორედ ისინი შეაფასებენ თქვენს პროექტს და უხელმძღვანელებენ მას."
        image={IMG.interior}
        crumbs={[{ href: '/team', label: 'გუნდი' }]}
      />

      <section aria-labelledby="team-title" className={SECTION}>
        <div className={W}>
          <div className="mb-8 sm:mb-12 sm:grid sm:grid-cols-2 sm:items-end sm:gap-[45px] xl:gap-[100px]">
            <div>
              <Eyebrow>ხელმძღვანელობა</Eyebrow>
              <h2 id="team-title" className={TITLE}>ჩვენი გუნდი.</h2>
            </div>
            <p className="mt-6 max-w-[520px] text-ink-600 sm:mt-0">
              თითოეულ პროექტს ჰყავს პასუხისმგებელი მენეჯერი, რომელიც პირველი შეხვედრიდან საბოლოო ჩაბარებამდე თქვენს გვერდითაა.
            </p>
          </div>
          <TeamGrid />
        </div>
      </section>

      <section aria-labelledby="why-title" className={`bg-ink-50 ${SECTION}`}>
        <div className={`${W} sm:grid sm:grid-cols-[.9fr_1.1fr] sm:gap-[45px] xl:gap-[100px]`}>
          <div>
            <Eyebrow>რატომ ჩვენ</Eyebrow>
            <h2 id="why-title" className={TITLE}>გუნდი, რომელიც<br />საქმეს ბოლომდე<br />მიიყვანს.</h2>
          </div>
          <div className="mt-8 border-t border-ink-200 sm:mt-0">
            {VALUES.map((v) => (
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
      <CtaBand title="გაიცანით ჩვენი გუნდი პირადად." />
    </>
  )
}
