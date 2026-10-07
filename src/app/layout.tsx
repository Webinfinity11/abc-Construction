import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import './globals.css'

const firago = localFont({
  variable: '--font-firago',
  display: 'swap',
  src: [
    { path: './fonts/FiraGO-400.woff2', weight: '400' },
    { path: './fonts/FiraGO-500.woff2', weight: '500' },
    { path: './fonts/FiraGO-600.woff2', weight: '600' },
    { path: './fonts/FiraGO-700.woff2', weight: '700' },
  ],
})

const barlow = localFont({
  variable: '--font-barlow',
  display: 'swap',
  src: [{ path: './fonts/BarlowCondensed-700.woff2', weight: '700' }],
})

export const metadata: Metadata = {
  title: {
    default: 'ABC Construction — მშენებლობა და შიდა მოწყობა',
    template: '%s — ABC Construction',
  },
  description: 'ვაშენებთ მაღალი ხარისხის, საიმედო სივრცეებს — დაპროექტებიდან და ინჟინერიიდან მონტაჟამდე და საბოლოო ჩაბარებამდე.',
}

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="ka" className={`${firago.variable} ${barlow.variable}`}>
      <body className="relative w-full overflow-x-hidden bg-white font-sans text-[16px] leading-[1.65] text-ink-900 antialiased selection:bg-brand-500 selection:text-ink-900">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
