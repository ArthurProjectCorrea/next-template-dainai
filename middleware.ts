import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Verifica se o usuário está tentando acessar rotas privadas
  if (pathname.startsWith('/private')) {
    const isAuthenticated =
      request.cookies.get('authenticated')?.value === 'true';

    // Se não estiver autenticado, redireciona para login
    if (!isAuthenticated) {
      return NextResponse.redirect(new URL('/auth/login', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/private/:path*'],
};
