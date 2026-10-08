'use client'

import { useEffect, useState } from 'react'
import { useI18n } from '@/lib/i18n/client'
import { F } from '@/lib/ui'

export function ServicesAccordion({ detailed = false }: { detailed?: boolean }) {
  const SERVICES = useI18n().t.services
  const [open, setOpen] = useState<number[]>([0])
  const toggle = (i: number) => setOpen((o) => (o.includes(i) ? o.filter((x) => x !== i) : [...o, i]))

  // Open the item targeted by a #slug link (e.g. /services#engineering).
  useEffect(() => {
    const sync = () => {
      const i = SERVICES.findIndex((s) => `#${s.slug}` === window.location.hash)
      if (i >= 0) setOpen((o) => (o.includes(i) ? o : [...o, i]))
    }
    sync()
    window.addEventListener('hashchange', sync)
    return () => window.removeEventListener('hashchange', sync)
  }, [SERVICES])

  return (
    <div className="border-t border-ink-200">
      {SERVICES.map((s, i) => {
        const isOpen = open.includes(i)
        return (
          <div key={s.slug} id={s.slug} className="scroll-mt-32 border-b border-ink-200">
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => toggle(i)}
              className={`group grid w-full grid-cols-[1fr_34px] items-center gap-[11px] text-left sm:grid-cols-[1fr_38px] sm:gap-2.5 lg:grid-cols-[1fr_42px] lg:gap-[17px] ${isOpen ? 'pb-2.5 pt-[21px] sm:pt-[25px]' : 'py-[21px] sm:py-[25px]'} ${F}`}
            >
              <h3 className="text-[22px] font-medium leading-[1.4] tracking-[-0.6px] lg:text-[26px]">{s.t}</h3>
              <span
                aria-hidden="true"
                className={`grid h-[34px] w-[34px] place-items-center rounded-full border font-[Arial] text-[22px] transition duration-200 sm:h-[39px] sm:w-[39px] sm:text-[24px] ${isOpen ? 'rotate-45 border-brand-500 bg-brand-500' : 'border-ink-200 group-hover:border-brand-500 group-hover:bg-brand-500'}`}
              >
                +
              </span>
            </button>
            {isOpen && (
              <div className="mb-[23px] mr-5 mt-[5px] sm:mb-[27px] sm:mr-10 sm:mt-0 lg:mr-[75px]">
                <p className="text-[16px] leading-[1.85] text-ink-600 sm:text-[15px] lg:text-[16px]">{s.d}</p>
                {detailed && (
                  <ul className="mt-4 flex flex-wrap gap-2 sm:gap-2.5">
                    {s.items.map((it) => (
                      <li key={it} className="rounded-[30px] border border-ink-200 bg-white px-3 py-[7px] text-[12px] sm:px-[15px] sm:text-[13px]">{it}</li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
