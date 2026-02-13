import { NextRequest, NextResponse } from 'next/server'

const PUBLIC_FILE = /\.(.*)$/

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl

  // 1. Skip internal/static files
  if (
    pathname.startsWith('/_next') ||
    pathname.includes('/api/') ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next()
  }

  // 2. Simplified Locale Logic
  // Since 'en' is your default, Next.js handles it. 
  // We only redirect if someone hits the bare root without a slash
  if (pathname === '/') {
     // This respects your trailingSlash: true setting
     return NextResponse.next()
  }

  return NextResponse.next()
}
