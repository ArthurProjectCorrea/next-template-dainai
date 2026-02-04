import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Save, RotateCcw } from 'lucide-react';

export default function ParametroPage() {
  const parameters = [
    {
      category: 'Geral',
      items: [
        {
          key: 'nome_aplicacao',
          label: 'Nome da Aplicação',
          value: 'Template Admin',
          type: 'text',
        },
        { key: 'versao', label: 'Versão', value: '1.0.0', type: 'text' },
        {
          key: 'email_suporte',
          label: 'E-mail de Suporte',
          value: 'suporte@example.com',
          type: 'email',
        },
      ],
    },
    {
      category: 'Segurança',
      items: [
        {
          key: 'timeout_sessao',
          label: 'Timeout da Sessão (minutos)',
          value: '30',
          type: 'number',
        },
        {
          key: 'max_tentativas_login',
          label: 'Máx. Tentativas de Login',
          value: '5',
          type: 'number',
        },
        {
          key: 'exigir_2fa',
          label: 'Exigir Autenticação 2FA',
          value: 'false',
          type: 'checkbox',
        },
      ],
    },
    {
      category: 'Sistema',
      items: [
        {
          key: 'idioma_padrao',
          label: 'Idioma Padrão',
          value: 'pt-BR',
          type: 'text',
        },
        {
          key: 'fuso_horario',
          label: 'Fuso Horário',
          value: 'America/Sao_Paulo',
          type: 'text',
        },
        {
          key: 'modo_manutencao',
          label: 'Modo Manutenção',
          value: 'false',
          type: 'checkbox',
        },
      ],
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">
          Parâmetros do Sistema
        </h1>
        <p className="text-muted-foreground mt-2">
          Configure as opções globais da aplicação
        </p>
      </div>

      {/* Alert */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex gap-3">
        <span className="text-2xl">ℹ️</span>
        <div>
          <p className="font-semibold text-blue-900">Informação importante</p>
          <p className="text-sm text-blue-800">
            Alterações em parâmetros do sistema podem afetar o funcionamento da
            aplicação. Realize mudanças com cuidado.
          </p>
        </div>
      </div>

      {/* Parameters Form */}
      <div className="space-y-6">
        {parameters.map((section) => (
          <Card key={section.category}>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>{section.category}</span>
                <Badge variant="outline">Configurável</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {section.items.map((param) => (
                  <div key={param.key} className="grid gap-3">
                    <Label htmlFor={param.key} className="font-medium">
                      {param.label}
                    </Label>
                    {param.type === 'checkbox' ? (
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          id={param.key}
                          defaultChecked={param.value === 'true'}
                          className="w-4 h-4 rounded"
                        />
                        <span className="text-sm text-muted-foreground">
                          {param.value === 'true' ? 'Ativado' : 'Desativado'}
                        </span>
                      </label>
                    ) : (
                      <Input
                        id={param.key}
                        type={param.type}
                        defaultValue={param.value}
                        className="max-w-xs"
                      />
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3">
        <Button className="flex items-center gap-2">
          <Save className="w-4 h-4" />
          Salvar Alterações
        </Button>
        <Button variant="outline" className="flex items-center gap-2">
          <RotateCcw className="w-4 h-4" />
          Desfazer
        </Button>
      </div>

      {/* Last Update Info */}
      <Card className="bg-muted/50">
        <CardHeader>
          <CardTitle className="text-base">Informações do Sistema</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Última atualização:</span>
            <span className="font-medium">03/02/2026 às 14:30</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Atualizado por:</span>
            <span className="font-medium">Arthur Corrêa</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Status do Sistema:</span>
            <span className="font-medium flex items-center gap-2">
              <span className="w-2 h-2 bg-green-600 rounded-full"></span>
              Operacional
            </span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
