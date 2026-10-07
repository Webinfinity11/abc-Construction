import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Eyebrow } from '@/components/brand'
import { PageHero } from '@/components/page-hero'
import { CtaBand } from '@/components/sections'
import { ServicesAccordion } from '@/components/services-accordion'
import { IMG, PROCESS, SERVICES } from '@/lib/data'
import { BTN, DARK, F, NUM, SECTION, TITLE, W } from '@/lib/ui'

export const metadata: Metadata = {
  title: 'მომსახურება',
  description: 'მშენებლობა, ინჟინერია, პროექტის განხორციელება, დაპროექტება და მონტაჟი — ერთი გუნდისგან.',
}

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="მომსახურება"
        title="თქვენი პროექტის"
        accent="ყველა ეტაპზე."
        text="ვახორციელებთ სამშენებლო პროექტებს დაპროექტებიდან და შიდა მოწყობიდან მონტაჟამდე და საბოლოო ჩაბარებამდე."
        image={IMG.roof}
        crumbs={[{ href: '/services', label: 'მომსახურება' }]}
      />

      {/* Service cards */}
      <section aria-label="მომსახურების მიმართულებები" className={SECTION}>
        <div className={`${W} grid gap-5 sm:grid-cols-2 sm:gap-6`}>
          {SERVICES.map((s, i) => (
            <a key={s.slug} href={`#${s.slug}`} className={`group flex flex-col rounded-[20px] border border-ink-200 p-7 transition duration-200 hover:-translate-y-1 hover:border-brand-500 hover:shadow-pop sm:p-9 ${F}`}>
              <div className="flex items-start justify-between gap-6">
                <span className={`${NUM} text-[52px] tracking-[-3px] text-ink-200 transition group-hover:text-brand-500`}>0{i + 1}</span>
                <span aria-hidden="true" className="grid h-[42px] w-[42px] flex-none place-items-center rounded-full border border-ink-200 font-[Arial] text-[22px] transition group-hover:border-brand-500 group-hover:bg-brand-500">→</span>
              </div>
              <h2 className="mt-8 text-[24px] font-medium leading-[1.35] tracking-[-0.6px] lg:text-[28px]">{s.t}</h2>
              <p className="mt-3 text-[15px] leading-[1.8] text-ink-600 lg:text-[16px]">{s.d}</p>
            </a>
          ))}
        </div>
      </section>

      {/* Details */}
      <section aria-labelledby="details-title" className={`bg-ink-50 ${SECTION}`}>
        <div className={W}>
          <Eyebrow>დეტალურად</Eyebrow>
          <h2 id="details-title" className={`${TITLE} mb-[29px] max-w-[740px] sm:mb-11`}>
            რას მოიცავს<br />თითოეული მიმართულება.
          </h2>
          <div className="flex flex-col gap-8 sm:grid sm:grid-cols-[230px_1fr] sm:gap-[35px] lg:grid-cols-[300px_1fr] lg:gap-[45px] xl:grid-cols-[360px_1fr] xl:gap-20">
            <div className="text-ink-600 sm:pt-7">
              <div className="relative mb-7 hidden aspect-[4/5] overflow-hidden rounded-[20px] sm:block">
                <Image src={IMG.interior} alt="ინტერიერის საილუსტრაციო ფოტო" fill sizes="360px" className="object-cover" />
              </div>
              <p className="mb-[22px] sm:mb-7 sm:max-w-[310px]">
                საინჟინრო ხელმძღვანელობა ჩართულია ყველა ეტაპზე, რაც უზრუნველყოფს ხარისხს და საიმედოობას.
              </p>
              <Link href="/contact" className={`${BTN} ${DARK}`}>პროექტის განხილვა</Link>
            </div>
            <ServicesAccordion detailed />
          </div>
        </div>
      </section>

      {/* Process */}
      <section aria-labelledby="process-title" className="relative isolate overflow-hidden bg-ink-900 py-16 text-white sm:py-20 lg:py-28">
        <Image src={IMG.night} alt="" aria-hidden="true" fill sizes="100vw" className="pointer-events-none z-0 object-cover opacity-[0.14] grayscale" />
        <div className={`${W} relative z-[1]`}>
          <Eyebrow className="text-brand-500">პროცესი</Eyebrow>
          <h2 id="process-title" className="mb-10 max-w-[640px] text-[36px] font-medium leading-[1.25] tracking-[-1px] lg:text-[44px] lg:tracking-[-1.5px]">
            ოთხი ნაბიჯი —<br /><span className="text-brand-500">ერთი პასუხისმგებელი გუნდი.</span>
          </h2>
          <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {PROCESS.map((s) => (
              <li key={s.n} className="rounded-[20px] border border-white/15 p-6 sm:p-7">
                <span className={`${NUM} text-[40px] tracking-[-2px] text-brand-500`}>{s.n}</span>
                <h3 className="mt-5 text-[20px] font-medium">{s.t}</h3>
                <p className="mt-2.5 text-[14px] leading-[1.8] text-white/70">{s.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <div className="h-3.5 sm:h-7" />
      <CtaBand title="განვიხილოთ თქვენი პროექტი." />
    </>
  )
}
