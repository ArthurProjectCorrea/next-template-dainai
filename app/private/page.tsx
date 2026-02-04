import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const updates = [
    {
      version: 'v1.0.0',
      date: '04 de Fevereiro, 2026',
      changes: [
        'Sistema de autenticação implementado',
        'Layout responsivo com sidebar dinâmica',
        'Middleware de proteção de rotas',
        'Design system com Tailwind CSS',
      ],
    },
    {
      version: 'v0.9.0',
      date: 'Em desenvolvimento',
      changes: [
        'Painel de dashboard com gráficos',
        'Gerenciamento de usuários',
        'Sistema de parâmetros configuráveis',
        'Relatórios e analytics',
      ],
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <div>
          <h1 className="text-4xl font-bold tracking-tight">
            Bem-vindo ao Template
          </h1>
          <p className="text-lg text-muted-foreground mt-2">
            Admin template moderno construído com Next.js, TypeScript e Tailwind
            CSS
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold flex items-center gap-2">
              <CheckCircle2 className="w-6 h-6 text-green-600" />
              Ativo
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              Sistema operacional
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">Versão</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1.0.0</div>
            <p className="text-xs text-muted-foreground mt-1">
              Última atualização
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">Módulos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-muted-foreground mt-1">
              Dashboard + Admin
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Quick Links */}
      <Card>
        <CardHeader>
          <CardTitle>Acesso Rápido</CardTitle>
          <CardDescription>
            Navegue para as principais seções da aplicação
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3 md:grid-cols-2">
            <Link
              href="/private/dashboard"
              className="p-3 border rounded-lg hover:bg-accent transition-colors"
            >
              <h3 className="font-semibold">📊 Dashboard</h3>
              <p className="text-sm text-muted-foreground">
                Visualize as métricas principais
              </p>
            </Link>
            <Link
              href="/private/admin/usuario"
              className="p-3 border rounded-lg hover:bg-accent transition-colors"
            >
              <h3 className="font-semibold">👥 Gerenciar Usuários</h3>
              <p className="text-sm text-muted-foreground">
                Controle de usuários do sistema
              </p>
            </Link>
            <Link
              href="/private/admin/parametro"
              className="p-3 border rounded-lg hover:bg-accent transition-colors"
            >
              <h3 className="font-semibold">⚙️ Parâmetros</h3>
              <p className="text-sm text-muted-foreground">
                Configure as opções do sistema
              </p>
            </Link>
          </div>
        </CardContent>
      </Card>

      {/* Updates */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Notas de Atualização</h2>
        <div className="space-y-4">
          {updates.map((update) => (
            <Card key={update.version}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">{update.version}</CardTitle>
                  <Badge
                    variant={
                      update.version === 'v1.0.0' ? 'default' : 'outline'
                    }
                  >
                    {update.version === 'v1.0.0'
                      ? 'Atual'
                      : 'Em desenvolvimento'}
                  </Badge>
                </div>
                <CardDescription>{update.date}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {update.changes.map((change, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 mt-1 text-green-600 flex-shrink-0" />
                      <span className="text-sm">{change}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
