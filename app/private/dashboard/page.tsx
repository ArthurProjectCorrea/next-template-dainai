'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const chartData = [
  { name: 'Jan', total: 1200, users: 400 },
  { name: 'Fev', total: 1900, users: 600 },
  { name: 'Mar', total: 1600, users: 500 },
  { name: 'Abr', total: 2200, users: 700 },
  { name: 'Mai', total: 2800, users: 900 },
  { name: 'Jun', total: 3200, users: 1100 },
];

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground mt-2">
          Bem-vindo ao seu painel de controle
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">Receita Total</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ 45.231,89</div>
            <p className="text-xs text-muted-foreground mt-1">
              +20.1% em relação ao mês anterior
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">
              Usuários Ativos
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2.350</div>
            <p className="text-xs text-muted-foreground mt-1">
              +180 novos este mês
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">
              Taxas de Conversão
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3.2%</div>
            <p className="text-xs text-muted-foreground mt-1">
              +0.5% em relação ao anterior
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">
              Ações Pendentes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground mt-1">
              3 críticas aguardando ação
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Visão Geral de Vendas</CardTitle>
            <CardDescription>Últimos 6 meses</CardDescription>
          </CardHeader>
          <CardContent className="pt-4">
            <div className="space-y-4">
              {chartData.map((data) => (
                <div key={data.name} className="flex items-end gap-4">
                  <span className="w-12 font-semibold">{data.name}</span>
                  <div className="flex gap-2 flex-1">
                    <div
                      className="bg-blue-500 rounded"
                      style={{
                        height: `${(data.total / 3200) * 100}px`,
                        minHeight: '20px',
                        width: '20px',
                      }}
                      title={`Total: ${data.total}`}
                    />
                    <div
                      className="bg-green-500 rounded"
                      style={{
                        height: `${(data.users / 1100) * 100}px`,
                        minHeight: '20px',
                        width: '20px',
                      }}
                      title={`Usuários: ${data.users}`}
                    />
                  </div>
                  <span className="text-sm text-muted-foreground w-16 text-right">
                    {data.total}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex gap-4 mt-4 pt-4 border-t text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-500 rounded"></div>
                <span>Total</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded"></div>
                <span>Usuários</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Tendência de Crescimento</CardTitle>
            <CardDescription>Performance do último semestre</CardDescription>
          </CardHeader>
          <CardContent className="pt-4">
            <div className="space-y-2">
              {chartData.map((data, idx) => (
                <div key={data.name} className="flex items-center gap-3">
                  <span className="w-12 font-semibold">{data.name}</span>
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-500 h-2 rounded-full"
                      style={{ width: `${(data.total / 3200) * 100}%` }}
                    />
                  </div>
                  <span className="text-sm text-muted-foreground w-16 text-right">
                    {data.total}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle>Atividades Recentes</CardTitle>
          <CardDescription>Últimas ações realizadas no sistema</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              {
                action: 'Novo usuário criado',
                timestamp: 'há 2 horas',
                icon: '👤',
              },
              {
                action: 'Parâmetro sistema atualizado',
                timestamp: 'há 5 horas',
                icon: '⚙️',
              },
              { action: 'Relatório gerado', timestamp: 'há 1 dia', icon: '📊' },
              {
                action: 'Backup concluído',
                timestamp: 'há 2 dias',
                icon: '💾',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between py-2 border-b last:border-0"
              >
                <div className="flex items-center gap-3">
                  <span className="text-xl">{item.icon}</span>
                  <div>
                    <p className="font-medium text-sm">{item.action}</p>
                    <p className="text-xs text-muted-foreground">
                      {item.timestamp}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
