import Link from 'next/link'
import { Eyebrow } from '@/components/brand'
import { BTN, LINK, NUM, W, YELLOW } from '@/lib/ui'

export default function NotFound() {
  return (
    <section className="flex min-h-[720px] items-center bg-ink-900 pb-24 pt-[180px] text-white">
      <div className={W}>
        <span className={`${NUM} block text-[120px] tracking-[-8px] text-brand-500 sm:text-[180px]`}>404</span>
        <Eyebrow className="mt-6 text-ink-100">გვერდი ვერ მოიძებნა</Eyebrow>
        <h1 className="max-w-[640px] text-[36px] font-medium leading-[1.25] tracking-[-1.2px] sm:text-[48px]">
          ეს სივრცე ჯერ <span className="text-brand-500">არ აშენებულა.</span>
        </h1>
        <div className="mt-9 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
          <Link href="/" className={`${BTN} ${YELLOW}`}>მთავარ გვერდზე</Link>
          <Link href="/contact" className={`${LINK} text-white`}>დაგვიკავშირდით</Link>
        </div>
      </div>
    </section>
  )
}
