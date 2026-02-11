import { NextRequest, NextResponse } from 'next/server'

const PUBLIC_FILE = /\.(.*)$/

export function middleware(req: NextRequest) {
  const { pathname, locale } = req.nextUrl

  // 1. Skip internal files and API routes
  if (
    pathname.startsWith('/_next') ||
    pathname.includes('/api/') ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next()
  }

  // 2. Handle the 'default' locale redirect
  if (locale === 'default') {
    // Construct the new URL for the 'en' locale
    const url = req.nextUrl.clone()
    url.pathname = `/en${pathname}`
    
    // Important: remove the 'default' locale from the redirect to prevent loops
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}
