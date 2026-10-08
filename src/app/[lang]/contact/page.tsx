import type { Metadata } from 'next'
import { Eyebrow, Lines } from '@/components/brand'
import { ContactSection } from '@/components/contact-section'
import { PageHero } from '@/components/page-hero'
import { IMG } from '@/lib/data'
import { getI18n } from '@/lib/i18n/server'
import { F, NUM, SECTION, TITLE, W } from '@/lib/ui'

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getI18n()
  return { title: t.pages.contact.title, description: t.pages.contact.description }
}

export default async function ContactPage() {
  const { t } = await getI18n()
  const p = t.pages.contact
  const c = t.contact

  const cards = [
    { k: p.phone, v: c.phone, href: `tel:${c.phone.replace(/\s/g, '')}` },
    { k: p.email, v: c.email, href: `mailto:${c.email}` },
    { k: p.address, v: c.address },
    { k: p.hours, v: c.hours },
  ]

  return (
    <>
      <PageHero
        eyebrow={p.title}
        title={p.heroTitle}
        text={p.heroText}
        image={IMG.roof}
        crumbs={[{ href: '/contact', label: p.title }]}
      />

      <section aria-label={p.infoAria} className="py-12 sm:py-16 lg:py-20">
        <div className={`${W} grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5`}>
          {cards.map((x) => {
            const body = (
              <>
                <span className="text-[12px] text-ink-400 sm:text-[13px]">{x.k}</span>
                <span className="mt-2 block text-[18px] font-medium leading-[1.4] sm:text-[20px]">{x.v}</span>
              </>
            )
            return x.href ? (
              <a key={x.k} href={x.href} className={`block rounded-[20px] border border-ink-200 p-6 transition hover:border-brand-500 hover:bg-brand-50 sm:p-7 ${F}`}>{body}</a>
            ) : (
              <div key={x.k} className="rounded-[20px] border border-ink-200 p-6 sm:p-7">{body}</div>
            )
          })}
        </div>
      </section>

      <ContactSection
        aside={
          <ol className="mt-10 hidden border-t border-brand-800/30 sm:block">
            {t.process.slice(0, 3).map((s) => (
              <li key={s.n} className="flex gap-5 border-b border-brand-800/30 py-4">
                <span className={`${NUM} pt-1 text-[14px] font-bold`}>{s.n}</span>
                <span>
                  <strong className="block font-semibold">{s.t}</strong>
                  <span className="text-[14px] text-brand-900">{s.d}</span>
                </span>
              </li>
            ))}
          </ol>
        }
      />

      <section aria-labelledby="faq-title" className={SECTION}>
        <div className={`${W} sm:grid sm:grid-cols-[.9fr_1.1fr] sm:gap-[45px] xl:gap-[100px]`}>
          <div>
            <Eyebrow>{p.faqEyebrow}</Eyebrow>
            <h2 id="faq-title" className={TITLE}><Lines text={p.faqTitle} /></h2>
          </div>
          <div className="mt-8 border-t border-ink-200 sm:mt-0">
            {p.faq.map(([q, a]) => (
              <details key={q} className="group border-b border-ink-200 py-6 sm:py-7">
                <summary className={`flex cursor-pointer list-none items-center justify-between gap-4 text-[20px] font-medium leading-[1.4] [&::-webkit-details-marker]:hidden ${F}`}>
                  {q}
                  <span aria-hidden="true" className="grid h-[34px] w-[34px] flex-none place-items-center rounded-full border border-ink-200 font-[Arial] text-[22px] transition group-open:rotate-45 group-open:border-brand-500 group-open:bg-brand-500">+</span>
                </summary>
                <p className="mt-3 pr-12 text-[15px] leading-[1.8] text-ink-600">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
