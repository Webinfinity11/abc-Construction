'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Eyebrow } from './brand'
import { IMG } from '@/lib/data'
import { BTN, LINK, YELLOW } from '@/lib/ui'

const SLIDES = [
  { src: IMG.night, alt: 'თანამედროვე ვილა საღამოს განათებით — საილუსტრაციო ფოტო', pos: 'object-[62%_center] sm:object-[60%_45%]' },
  { src: IMG.facade, alt: 'მინისა და აგურის თანამედროვე ფასადი შებინდებისას — საილუსტრაციო ფოტო', pos: 'object-[60%_center] sm:object-[center_70%]' },
]

export function HeroSlider() {
  const [slide, setSlide] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setSlide((s) => (s + 1) % SLIDES.length), 6500)
    return () => clearInterval(t)
  }, [])

  return (
    <section aria-label="ვაშენებთ საიმედო სივრცეებს" className="relative isolate flex min-h-[760px] items-start overflow-hidden bg-ink-800 pb-[110px] pt-[142px] text-white sm:min-h-[790px] sm:items-center sm:pb-[130px] sm:pt-[184px] xl:min-h-[820px]">
      <div
        className="pointer-events-none absolute inset-0 -z-[3] flex transition-transform duration-[1350ms] ease-[cubic-bezier(.22,1,.36,1)]"
        style={{ transform: `translateX(-${slide * 100}%)` }}
      >
        {SLIDES.map((s, i) => (
          <div key={i} aria-hidden={slide !== i} className="relative h-full min-w-0 flex-[0_0_100%] overflow-hidden">
            <Image src={s.src} alt={s.alt} fill priority={i === 0} sizes="100vw" className={`object-cover ${s.pos}`} />
          </div>
        ))}
      </div>
      <div className="absolute inset-0 -z-[2] bg-[linear-gradient(90deg,rgba(22,18,14,.91),rgba(22,18,14,.53)),linear-gradient(0deg,rgba(22,18,14,.64),transparent_60%)] sm:bg-[linear-gradient(90deg,rgba(15,13,10,.87),rgba(15,13,10,.5)_46%,rgba(15,13,10,.06)_85%),linear-gradient(0deg,rgba(12,10,8,.7),transparent_44%)]" />

      <div className="mx-auto w-[calc(100%-40px)] max-w-[1320px] sm:w-[calc(100%-64px)] lg:w-[calc(100%-104px)]">
        <div className="max-w-[870px]">
          <Eyebrow className="!mb-[22px] text-ink-50 sm:!mb-[25px]">მშენებლობა და შიდა მოწყობა</Eyebrow>
          <h1 className="max-w-[560px] text-[36px] font-medium leading-[1.25] tracking-[-1.35px] sm:max-w-[740px] sm:text-[60px] sm:leading-[1.21] sm:tracking-[-2.3px] xl:max-w-[960px] xl:text-[73px]">
            ვაშენებთ<br className="hidden sm:block" /> მაღალი ხარისხის,<br className="hidden sm:block" />{' '}
            <span className="block text-brand-500 sm:inline">საიმედო სივრცეებს.</span>
          </h1>
          <p className="mt-[23px] max-w-[470px] text-[15px] leading-[1.8] text-ink-100 sm:mt-7 sm:max-w-[565px] sm:text-[16px] sm:leading-[1.85] xl:text-[17px]">
            დაპროექტებიდან და ინჟინერიიდან მონტაჟამდე და საბოლოო ჩაბარებამდე — მშენებლობის მთელ პროცესს თქვენთვის მარტივს ვხდით.
          </p>
          <div className="mt-[26px] flex flex-col items-start gap-[18px] sm:mt-[35px] sm:flex-row sm:items-center sm:gap-5">
            <Link href="/projects" className={`${BTN} ${YELLOW} min-h-[51px] px-[25px] sm:min-h-[56px] sm:px-[30px]`}>
              ჩვენი პროექტები
            </Link>
            <Link href="/about" className={`${LINK} text-[13px] text-white sm:ml-1.5 sm:text-[14px]`}>
              გაიცანით ABC Construction
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 gap-2 sm:bottom-10">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`სლაიდი ${i + 1}`}
            aria-current={slide === i}
            onClick={() => setSlide(i)}
            className={`h-1 rounded-full transition-all duration-300 ${slide === i ? 'w-8 bg-brand-500' : 'w-4 bg-white/40 hover:bg-white/70'}`}
          />
        ))}
      </div>
    </section>
  )
}
