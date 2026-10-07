import Link from 'next/link'
import { Eyebrow } from '@/components/brand'
import { ContactSection } from '@/components/contact-section'
import { HeroSlider } from '@/components/hero-slider'
import { AboutBlock, ProjectsSection, PromiseBand, Stats, TeamSection } from '@/components/sections'
import { ServicesAccordion } from '@/components/services-accordion'
import { BTN, DARK, LINK, SECTION, TITLE, W } from '@/lib/ui'

export default function Home() {
  return (
    <>
      <HeroSlider />
      <Stats />
      <AboutBlock />

      <section id="services" aria-labelledby="services-title" className={`bg-ink-50 ${SECTION}`}>
        <div className={W}>
          <Eyebrow>რას ვაკეთებთ</Eyebrow>
          <h2 id="services-title" className={`${TITLE} mb-[29px] max-w-[740px] sm:mb-11`}>
            თქვენი პროექტის<br />ყველა ეტაპზე.
          </h2>
          <div className="flex flex-col gap-8 sm:grid sm:grid-cols-[230px_1fr] sm:gap-[35px] lg:grid-cols-[300px_1fr] lg:gap-[45px] xl:grid-cols-[360px_1fr] xl:gap-20">
            <div className="text-ink-600 sm:pt-7">
              <p className="mb-[22px] sm:mb-7 sm:max-w-[310px]">
                ვახორციელებთ სამშენებლო პროექტებს დაპროექტებიდან და შიდა მოწყობიდან მონტაჟამდე და საბოლოო ჩაბარებამდე.
              </p>
              <div className="flex flex-col items-start gap-5">
                <Link href="/contact" className={`${BTN} ${DARK}`}>პროექტის განხილვა</Link>
                <Link href="/services" className={`${LINK} text-ink-900`}>ყველა მომსახურება</Link>
              </div>
            </div>
            <ServicesAccordion />
          </div>
        </div>
      </section>

      <ProjectsSection />
      <PromiseBand />
      <TeamSection />
      <ContactSection />
    </>
  )
}
