import { NextRequest, NextResponse } from 'next/server'

export function middleware(req: NextRequest) {
  // We simply pass the request through. 
  // Next.js i18n will handle the 'en' default automatically.
  return NextResponse.next()
}

// The Matcher ensures middleware ONLY runs on actual pages
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - locales (translation files)
     * - img, logo, svg (your public assets)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|locales|img|logo|svg).*)',
  ],
}
