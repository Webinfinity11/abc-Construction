import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { LANGS } from '@/lib/i18n'
import { getI18n } from '@/lib/i18n/server'
import '../globals.css'

const firago = localFont({
  variable: '--font-firago',
  display: 'swap',
  src: [
    { path: '../fonts/FiraGO-400.woff2', weight: '400' },
    { path: '../fonts/FiraGO-500.woff2', weight: '500' },
    { path: '../fonts/FiraGO-600.woff2', weight: '600' },
    { path: '../fonts/FiraGO-700.woff2', weight: '700' },
  ],
})

const barlow = localFont({
  variable: '--font-barlow',
  display: 'swap',
  src: [{ path: '../fonts/BarlowCondensed-700.woff2', weight: '700' }],
})

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }))
}

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getI18n()
  return {
    title: { default: t.meta.title, template: '%s — ABC Construction' },
    description: t.meta.description,
  }
}

export default async function RootLayout({ children }: LayoutProps<'/[lang]'>) {
  const { lang } = await getI18n()
  return (
    <html lang={lang} className={`${firago.variable} ${barlow.variable}`}>
      <body className="relative w-full overflow-x-hidden bg-white font-sans text-[16px] leading-[1.65] text-ink-900 antialiased selection:bg-brand-500 selection:text-ink-900">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
