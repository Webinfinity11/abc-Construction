'use client'

import { useState } from 'react'
import { Eyebrow } from './brand'
import { BTN, DARK, F } from '@/lib/ui'

const FIELDS = [
  { l: 'სახელი და გვარი *', n: 'name', ph: 'თქვენი სახელი', req: true, full: false, type: 'text' },
  { l: 'ტელეფონი *', n: 'phone', ph: '+995', req: true, full: false, type: 'tel' },
  { l: 'ელფოსტა', n: 'email', ph: 'თქვენი ელფოსტა', req: false, full: true, type: 'email' },
]

const INPUT = 'block w-full rounded-none border-0 border-b border-brand-800/45 bg-transparent px-px pb-[13px] pt-[9px] text-[16px] text-ink-900 placeholder:text-brand-800/80 focus:border-ink-900 focus:outline-none focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-accent-500'

export function ContactSection({ aside }: { aside?: React.ReactNode }) {
  const [sent, setSent] = useState(false)

  return (
    <section id="contact" aria-labelledby="contact-title" className="px-3 pb-3.5 sm:px-7 sm:pb-7">
      <div className="mx-auto max-w-[1600px] rounded-[20px] bg-brand-500 px-[22px] py-[43px] sm:grid sm:grid-cols-1 sm:gap-10 sm:rounded-[26px] sm:px-9 sm:py-[60px] lg:grid-cols-2 lg:gap-[50px] lg:px-10 lg:py-[77px] xl:gap-[95px] xl:px-[max(40px,calc((100%-1320px)/2))]">
        <div>
          <Eyebrow>დავიწყოთ საუბარი</Eyebrow>
          <h2 id="contact-title" className="max-w-[600px] text-[37px] font-medium leading-[1.25] tracking-[-1.2px] sm:text-[38px] sm:tracking-[-1.8px] lg:text-[43px] xl:text-[54px]">
            ავაშენოთ ის,<br />რაც დიდხანს<br />გაძლებს.
          </h2>
          <p className="mt-[22px] max-w-[480px] text-[16px] leading-[1.9] text-brand-900 sm:mt-[27px] sm:text-[15px] lg:text-[16px]">
            გამოგვიგზავნეთ ნახაზები ან უბრალოდ მოგვიყევით, დაახლოებით რა გჭირდებათ. გულწრფელად გეტყვით, ვართ თუ არა ამისთვის შესაფერისი კონტრაქტორი.
          </p>
          {aside ?? (
            <div aria-hidden="true" className="mt-[42px] hidden font-[Arial] text-[80px] font-bold leading-none tracking-[-7px] text-brand-950/[0.14] sm:block lg:text-[106px]">ABC.</div>
          )}
        </div>

        <form className="mt-9 self-center sm:mt-0" onSubmit={(e) => { e.preventDefault(); setSent(true) }}>
          <div className="grid grid-cols-1 gap-[21px] sm:gap-[18px] lg:grid-cols-2 lg:gap-[22px]">
            {FIELDS.map((f) => (
              <label key={f.n} className={`block min-w-0 ${f.full ? 'lg:col-span-2' : ''}`}>
                <span className="mb-2 block text-[13px]">{f.l}</span>
                <input name={f.n} type={f.type} required={f.req} placeholder={f.ph} className={`${INPUT} min-h-[48px]`} />
              </label>
            ))}
            <label className="block min-w-0 lg:col-span-2">
              <span className="mb-2 block text-[13px]">პროექტის შესახებ *</span>
              <textarea name="message" required rows={2} placeholder="მოკლედ მოგვიყევით, რას გეგმავთ..." className={`${INPUT} min-h-[89px] resize-y leading-[1.6]`} />
            </label>
          </div>
          <div className="mt-[27px] flex flex-col items-start gap-4 sm:mt-7 sm:gap-[15px] xl:flex-row xl:items-center xl:gap-6">
            <button type="submit" className={`${BTN} ${DARK} w-full flex-none sm:w-auto`}>შეთავაზების მოთხოვნა</button>
            <p className="max-w-[290px] text-[12px] leading-[1.55] text-brand-900 sm:max-w-none xl:max-w-[220px]">სადემონსტრაციო ფორმა — მონაცემები ჯერ არ იგზავნება.</p>
          </div>
          {sent && (
            <div role="status" className="mt-5 rounded-[12px] border border-brand-800/50 bg-brand-100 px-[19px] py-[17px] text-[14px] leading-[1.65]">
              <strong className="mb-1 block font-semibold">მოთხოვნა მზადაა.</strong>
              <span>ეს სადემონსტრაციო ფორმაა — თქვენი მონაცემები არ გაგზავნილა და არ შენახულა.</span>
              <br />
              <button type="button" onClick={() => setSent(false)} className={`mt-3 border-b border-current pb-1 text-[13px] font-semibold ${F}`}>
                მოთხოვნის შეცვლა
              </button>
            </div>
          )}
        </form>
      </div>
    </section>
  )
}
