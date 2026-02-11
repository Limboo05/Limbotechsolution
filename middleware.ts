import { NextRequest, NextResponse } from 'next/server'

const PUBLIC_FILE = /\.(.*)$/

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl

  // 1. Skip internal files and static assets
  if (
    pathname.startsWith('/_next') ||
    pathname.includes('/api/') ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next()
  }

  // 2. Just return next() and let Next.js i18n handle the rest
  // Next.js will automatically serve 'en' content at the root '/'
  return NextResponse.next()
}
