import type { Metadata } from 'next'
import { Eyebrow } from '@/components/brand'
import { PageHero } from '@/components/page-hero'
import { CtaBand, ProjectsGrid, Stats } from '@/components/sections'
import { IMG } from '@/lib/data'
import { TITLE, W } from '@/lib/ui'

export const metadata: Metadata = {
  title: 'პროექტები',
  description: 'ABC Construction-ის მიერ ჩაბარებული მშენებლობისა და შიდა მოწყობის პროექტები.',
}

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="რჩეული სამუშაოები"
        title="სივრცეები, რომლებიც"
        accent="ჩვენზე საუბრობენ."
        text="ჩვენ მიერ ბოლოს ჩაბარებული ობიექტები. მშენებლობა და შიდა მოწყობა — იდეიდან დასრულებულ სივრცემდე."
        image={IMG.night}
        crumbs={[{ href: '/projects', label: 'პროექტები' }]}
      />
      <Stats />
      <section aria-labelledby="projects-title" className="pb-16 pt-16 sm:pb-[102px] sm:pt-20 lg:pt-28">
        <div className={W}>
          <Eyebrow>პორტფოლიო</Eyebrow>
          <div className="mb-[29px] sm:mb-11 sm:flex sm:items-end sm:justify-between sm:gap-[35px] lg:gap-[60px]">
            <h2 id="projects-title" className={`${TITLE} max-w-[740px]`}>ჩაბარებული<br />ობიექტები.</h2>
            <p className="mt-[22px] text-[16px] text-ink-600 sm:mt-0 sm:max-w-[290px] sm:text-[15px] lg:max-w-[380px] lg:text-[16px]">
              აირჩიეთ პროექტი დეტალების სანახავად.
            </p>
          </div>
          <ProjectsGrid />
          <p className="mt-[25px] text-[12px] leading-[1.7] text-ink-400">ფოტომასალა საილუსტრაციოა.</p>
        </div>
      </section>
      <CtaBand title="შემდეგი პროექტი შეიძლება თქვენი იყოს." />
    </>
  )
}
