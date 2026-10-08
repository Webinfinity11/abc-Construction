import { NextResponse, type NextRequest } from 'next/server'

// Georgian is served from the root (/about), English from /en (/en/about).
// Internally every route lives under app/[lang], so root paths are rewritten to /ka.
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Skip Next internals and files (favicon.ico, images, fonts…).
  if (pathname.startsWith('/_next') || pathname.includes('.')) return
  if (pathname === '/en' || pathname.startsWith('/en/')) return

  const url = request.nextUrl.clone()
  if (pathname === '/ka' || pathname.startsWith('/ka/')) {
    url.pathname = pathname.slice(3) || '/'
    return NextResponse.redirect(url, 308)
  }

  url.pathname = `/ka${pathname === '/' ? '' : pathname}`
  return NextResponse.rewrite(url)
}
