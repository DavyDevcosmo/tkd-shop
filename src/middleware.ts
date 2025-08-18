import { MiddlewareConfig, NextRequest, NextResponse } from "next/server"

const publicRoutes = [
  { path: '/auth/login', whenAuthenticated: 'next' },
  { path: '/auth/register', whenAuthenticated: 'next' },
  { path: '/dashboard', whenAuthenticated: 'redirect' },
  { path: '/', whenAuthenticated: 'next' },
    { path: '/account', whenAuthenticated: 'next' },
 
] as const

const REDIRECT_WHEN_NOT_AUTHENTICATED_ROUTE = '/auth/login'

function isJwtExpired(token: string): boolean {
  try {
    const payloadBase64 = token.split('.')[1]
    const payloadJson = atob(payloadBase64)
    const payload = JSON.parse(payloadJson)
    const now = Math.floor(Date.now() / 1000)

    return payload.exp < now
  } catch (err) {
    return true 
  }
}

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname

 
  if (path.startsWith('/api')) {
    return NextResponse.next()
  }

  const publicRoute = publicRoutes.find(route => route.path === path)
  const authToken = request.cookies.get('token')?.value

  if (!authToken && publicRoute) {
    return NextResponse.next()
  }

  if (!authToken && !publicRoute) {
    const redirectUrl = request.nextUrl.clone()
    redirectUrl.pathname = REDIRECT_WHEN_NOT_AUTHENTICATED_ROUTE
    return NextResponse.redirect(redirectUrl)
  }

  if (authToken && isJwtExpired(authToken)) {
    const response = NextResponse.redirect(new URL('/auth/login', request.url))
    response.cookies.delete('token') // Remove cookie expirado
    return response
  }console.log("Token recebido:", authToken)

  if (authToken && publicRoute && publicRoute.whenAuthenticated === 'redirect') {
    const redirectUrl = request.nextUrl.clone()
    redirectUrl.pathname = '/dashboard'
    return NextResponse.redirect(redirectUrl)
  }

  return NextResponse.next()
}

export const config: MiddlewareConfig = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
}