import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Edit2, Trash2, Plus, Search } from 'lucide-react';

const users = [
  {
    id: 1,
    name: 'Arthur Corrêa',
    email: 'arthur@example.com',
    role: 'Administrador',
    status: 'Ativo',
    joinDate: '04/02/2026',
  },
  {
    id: 2,
    name: 'Maria Silva',
    email: 'maria@example.com',
    role: 'Editor',
    status: 'Ativo',
    joinDate: '01/02/2026',
  },
  {
    id: 3,
    name: 'João Santos',
    email: 'joao@example.com',
    role: 'Usuário',
    status: 'Inativo',
    joinDate: '28/01/2026',
  },
  {
    id: 4,
    name: 'Ana Costa',
    email: 'ana@example.com',
    role: 'Editor',
    status: 'Ativo',
    joinDate: '25/01/2026',
  },
];

export default function UsuariosPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">
          Gerenciar Usuários
        </h1>
        <p className="text-muted-foreground mt-2">
          Visualize e administre todos os usuários do sistema
        </p>
      </div>

      {/* Filters and Actions */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div className="relative w-full sm:w-64">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input placeholder="Buscar usuários..." className="pl-10" />
        </div>
        <Button className="flex items-center gap-2 w-full sm:w-auto">
          <Plus className="w-4 h-4" />
          Novo Usuário
        </Button>
      </div>

      {/* Users Table */}
      <Card>
        <CardHeader>
          <CardTitle>Lista de Usuários</CardTitle>
          <CardDescription>
            Total de {users.length} usuários no sistema
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 font-semibold text-sm">
                    Nome
                  </th>
                  <th className="text-left py-3 px-4 font-semibold text-sm">
                    E-mail
                  </th>
                  <th className="text-left py-3 px-4 font-semibold text-sm">
                    Função
                  </th>
                  <th className="text-left py-3 px-4 font-semibold text-sm">
                    Status
                  </th>
                  <th className="text-left py-3 px-4 font-semibold text-sm">
                    Data de Cadastro
                  </th>
                  <th className="text-left py-3 px-4 font-semibold text-sm">
                    Ações
                  </th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr
                    key={user.id}
                    className="border-b hover:bg-muted/50 transition-colors"
                  >
                    <td className="py-3 px-4 text-sm">{user.name}</td>
                    <td className="py-3 px-4 text-sm text-muted-foreground">
                      {user.email}
                    </td>
                    <td className="py-3 px-4 text-sm">
                      <Badge variant="outline">{user.role}</Badge>
                    </td>
                    <td className="py-3 px-4 text-sm">
                      <Badge
                        variant={
                          user.status === 'Ativo' ? 'default' : 'secondary'
                        }
                        className={
                          user.status === 'Ativo'
                            ? 'bg-green-100 text-green-800'
                            : ''
                        }
                      >
                        {user.status}
                      </Badge>
                    </td>
                    <td className="py-3 px-4 text-sm text-muted-foreground">
                      {user.joinDate}
                    </td>
                    <td className="py-3 px-4 text-sm">
                      <div className="flex items-center gap-2">
                        <button
                          className="p-2 hover:bg-muted rounded-lg transition-colors"
                          title="Editar"
                        >
                          <Edit2 className="w-4 h-4 text-blue-600" />
                        </button>
                        <button
                          className="p-2 hover:bg-muted rounded-lg transition-colors"
                          title="Deletar"
                        >
                          <Trash2 className="w-4 h-4 text-red-600" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">
              Usuários Ativos
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground mt-1">
              Conectados ou últimas 24h
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">
              Total de Usuários
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4</div>
            <p className="text-xs text-muted-foreground mt-1">
              Cadastrados no sistema
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">
              Novos Usuários
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-muted-foreground mt-1">Este mês</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
