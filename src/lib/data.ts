// ტექსტები ორივე ენაზე — lib/i18n/ka.ts და lib/i18n/en.ts.
export const IMG = {
  night: 'https://live.staticflickr.com/3305/3640920662_308f24ee74_b.jpg',
  facade: 'https://cdn.stocksnap.io/img-thumbs/960w/KQA30E4YCM.jpg',
  interior: 'https://cdn.stocksnap.io/img-thumbs/960w/NF6P1OX124.jpg',
  roof: 'https://cdn.stocksnap.io/img-thumbs/960w/APYMC719T1.jpg',
  portrait: 'https://live.staticflickr.com/4210/35001115431_f7e791a90a_b.jpg',
}

// გუნდის სექცია დროებით დამალულია, სანამ კლიენტი რეალურ ფოტოებს და მონაცემებს მოგვაწვდის.
export const SHOW_TEAM = false

export const NAV = [
  { href: '/', key: 'home' },
  { href: '/about', key: 'about' },
  { href: '/services', key: 'services' },
  { href: '/projects', key: 'projects' },
  { href: '/team', key: 'team' },
] as const

export type Project = { slug: string; src: string; gallery: string[] }

// თანმიმდევრობა საიტზე და ფოტოების რაოდენობა — public/projects/<slug>/1..n.webp (1000×1000).
// სახელები — Dict['projects'].
const OWN: [string, number][] = [
  ['erisioni-studio', 1],
  ['sakeni', 1],
  ['kings-garden', 1],
  ['east-point', 3],
  ['tbilisi-gardens-1', 1],
  ['tbilisi-gardens-2', 1],
  ['tbilisi-gardens-3', 1],
  ['domino-east-point', 1],
  ['domino-dighomi', 1],
  ['radio-city', 1],
  ['aversi-clinic', 2],
  ['metropol-kavtaradze', 2],
]

export const PROJECTS: Project[] = OWN.map(([slug, n]) => {
  const gallery = Array.from({ length: n }, (_, k) => `/projects/${slug}/${k + 1}.webp`)
  return { slug, src: gallery[0], gallery }
})
