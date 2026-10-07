import type { Metadata } from 'next'
import { Eyebrow } from '@/components/brand'
import { ContactSection } from '@/components/contact-section'
import { PageHero } from '@/components/page-hero'
import { CONTACT, IMG, PROCESS } from '@/lib/data'
import { F, NUM, SECTION, TITLE, W } from '@/lib/ui'

export const metadata: Metadata = {
  title: 'კონტაქტი',
  description: 'დაგვიკავშირდით და მოგვიყევით თქვენი პროექტის შესახებ.',
}

const CARDS = [
  { k: 'ტელეფონი', v: CONTACT.phone, href: `tel:${CONTACT.phone.replace(/\s/g, '')}` },
  { k: 'ელფოსტა', v: CONTACT.email, href: `mailto:${CONTACT.email}` },
  { k: 'მისამართი', v: CONTACT.address },
  { k: 'სამუშაო საათები', v: CONTACT.hours },
]

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="კონტაქტი"
        title="დავიწყოთ"
        accent="საუბარი."
        text="გამოგვიგზავნეთ ნახაზები ან უბრალოდ მოგვიყევით, დაახლოებით რა გჭირდებათ."
        image={IMG.roof}
        crumbs={[{ href: '/contact', label: 'კონტაქტი' }]}
      />

      <section aria-label="საკონტაქტო ინფორმაცია" className="py-12 sm:py-16 lg:py-20">
        <div className={`${W} grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5`}>
          {CARDS.map((c) => {
            const body = (
              <>
                <span className="text-[12px] text-ink-400 sm:text-[13px]">{c.k}</span>
                <span className="mt-2 block text-[18px] font-medium leading-[1.4] sm:text-[20px]">{c.v}</span>
              </>
            )
            return c.href ? (
              <a key={c.k} href={c.href} className={`block rounded-[20px] border border-ink-200 p-6 transition hover:border-brand-500 hover:bg-brand-50 sm:p-7 ${F}`}>{body}</a>
            ) : (
              <div key={c.k} className="rounded-[20px] border border-ink-200 p-6 sm:p-7">{body}</div>
            )
          })}
        </div>
      </section>

      <ContactSection
        aside={
          <ol className="mt-10 hidden border-t border-brand-800/30 sm:block">
            {PROCESS.slice(0, 3).map((s) => (
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
            <Eyebrow>ხშირი კითხვები</Eyebrow>
            <h2 id="faq-title" className={TITLE}>რა ხდება<br />მოთხოვნის შემდეგ?</h2>
          </div>
          <div className="mt-8 border-t border-ink-200 sm:mt-0">
            {[
              ['რა ინფორმაცია უნდა მოგაწოდოთ?', 'საკმარისია მოკლე აღწერა — რას გეგმავთ, სად და დაახლოებით როდის. თუ გაქვთ ნახაზები, ისინიც დაგვეხმარება.'],
              ['ვინ დამიკავშირდება?', 'ჩვენი გუნდის წევრი — პროექტის მენეჯერი, რომელიც შემდეგ უხელმძღვანელებს თქვენს პროექტს.'],
              ['როგორ მივიღებ შეთავაზებას?', 'პროექტის განხილვის შემდეგ მოგიმზადებთ გამჭვირვალე შეთავაზებას გრაფიკითა და ბიუჯეტით.'],
            ].map(([q, a]) => (
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
