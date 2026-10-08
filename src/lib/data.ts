import type { Dict } from './i18n'

// ტექსტები ორივე ენაზე — lib/i18n/ka.ts და lib/i18n/en.ts.
export const IMG = {
  night: 'https://live.staticflickr.com/3305/3640920662_308f24ee74_b.jpg',
  facade: 'https://cdn.stocksnap.io/img-thumbs/960w/KQA30E4YCM.jpg',
  interior: 'https://cdn.stocksnap.io/img-thumbs/960w/NF6P1OX124.jpg',
  roof: 'https://cdn.stocksnap.io/img-thumbs/960w/APYMC719T1.jpg',
  portrait: 'https://live.staticflickr.com/4210/35001115431_f7e791a90a_b.jpg',
}

export const NAV = [
  { href: '/', key: 'home' },
  { href: '/about', key: 'about' },
  { href: '/services', key: 'services' },
  { href: '/projects', key: 'projects' },
  { href: '/team', key: 'team' },
] as const

export type Project = { slug: string; src: string; alt: keyof Dict['alt'] }

const PHOTOS = [
  { src: IMG.interior, alt: 'interior' },
  { src: IMG.facade, alt: 'building' },
  { src: IMG.night, alt: 'lit' },
  { src: IMG.roof, alt: 'site' },
] as const

// თანმიმდევრობა საიტზე. სახელები — Dict['projects'].
export const PROJECTS: Project[] = [
  'erisioni-studio',
  'sakeni',
  'kings-garden',
  'east-point',
  'tbilisi-gardens',
  'domino',
  'radio-city',
  'aversi-clinic',
  'metropol-kavtaradze',
  'tabukashvili',
  'cbd-development',
  'seven-hills',
  'biography',
  'anagi',
  'impost',
].map((slug, i) => ({ slug, ...PHOTOS[i % PHOTOS.length] }))
