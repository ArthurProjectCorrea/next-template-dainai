import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    // Cria resposta que remove o cookie
    const response = NextResponse.json(
      { success: true, message: 'Logout realizado com sucesso' },
      { status: 200 },
    );

    // Remove cookie de autenticação
    response.cookies.set('authenticated', '', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 0, // Expira imediatamente
    });

    return response;
  } catch (error) {
    return NextResponse.json(
      { error: 'Erro ao processar logout' },
      { status: 500 },
    );
  }
}
