import { NextRequest, NextResponse } from 'next/server';
import user from '@/database/user.json';

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    // Validação básica
    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email e senha são obrigatórios' },
        { status: 400 },
      );
    }

    // Valida credenciais contra o arquivo user.json
    if (email === user.email && password === user.password) {
      // Cria resposta com cookie
      const response = NextResponse.json(
        { success: true, message: 'Login realizado com sucesso' },
        { status: 200 },
      );

      // Define cookie de autenticação (válido por 24 horas)
      response.cookies.set('authenticated', 'true', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 86400, // 24 horas
      });

      return response;
    }

    return NextResponse.json(
      { error: 'Email ou senha inválidos' },
      { status: 401 },
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Erro ao processar login' },
      { status: 500 },
    );
  }
}
