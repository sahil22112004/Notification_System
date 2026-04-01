import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'
 
const protectedRoutes = [
  '/',
  '/creator',
  '/home'
]
const publicRoutes = ['/auth']
 
export default async function proxy(req: NextRequest) {
  
  const path = req.nextUrl.pathname
  const isProtectedRoute = protectedRoutes.includes(path)
  const isPublicRoute = publicRoutes.includes(path)

  console.log()
 
  const cookie = (await cookies()).get('token')?.value
  const isAuthenticated = !!cookie

 
  if (isProtectedRoute && !isAuthenticated) {
    return NextResponse.redirect(new URL('/auth', req.nextUrl))
  }
 
  if (
    isPublicRoute &&
    isAuthenticated &&
    !req.nextUrl.pathname.startsWith('/home')
  ) {
    return NextResponse.redirect(new URL('/home', req.nextUrl))
  }
 
  return NextResponse.next()
}
 
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}

