import { AppSidebar } from "@/components/AppSidebar";
import { DashboardHeader } from "@/components/DashboardHeader";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User, Bell, CreditCard, Shield, HelpCircle } from "lucide-react";

const Configuracoes = () => {
  return (
    <div className="flex min-h-screen w-full bg-background">
      <AppSidebar />
      
      <div className="flex-1 flex flex-col">
        <DashboardHeader />
        
        <main className="flex-1 p-8">
          <div className="max-w-4xl mx-auto space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Configurações</h1>
              <p className="text-muted-foreground mt-1">Gerencie sua conta e preferências</p>
            </div>

            <Tabs defaultValue="perfil" className="space-y-6">
              <TabsList>
                <TabsTrigger value="perfil">
                  <User className="w-4 h-4 mr-2" />
                  Perfil
                </TabsTrigger>
                <TabsTrigger value="notificacoes">
                  <Bell className="w-4 h-4 mr-2" />
                  Notificações
                </TabsTrigger>
                <TabsTrigger value="plano">
                  <CreditCard className="w-4 h-4 mr-2" />
                  Plano
                </TabsTrigger>
                <TabsTrigger value="seguranca">
                  <Shield className="w-4 h-4 mr-2" />
                  Segurança
                </TabsTrigger>
              </TabsList>

              <TabsContent value="perfil" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Informações Pessoais</CardTitle>
                    <CardDescription>Atualize seus dados pessoais</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="nome">Nome Completo</Label>
                        <Input id="nome" placeholder="João Silva" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">E-mail</Label>
                        <Input id="email" type="email" placeholder="joao@otica.com" />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="telefone">Telefone</Label>
                        <Input id="telefone" placeholder="(11) 98765-4321" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cargo">Cargo</Label>
                        <Input id="cargo" placeholder="Proprietário" />
                      </div>
                    </div>
                    <Button className="gradient-primary text-white">Salvar Alterações</Button>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="notificacoes" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Preferências de Notificações</CardTitle>
                    <CardDescription>Escolha como deseja receber atualizações</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      { titulo: "Novas sugestões da IA", descricao: "Receber notificações quando a IA gerar novas sugestões" },
                      { titulo: "Posts agendados", descricao: "Lembrete antes de posts programados serem publicados" },
                      { titulo: "Novas avaliações", descricao: "Notificar sobre novas avaliações no Google" },
                      { titulo: "Relatórios semanais", descricao: "Resumo semanal de desempenho por e-mail" },
                    ].map((item) => (
                      <div key={item.titulo} className="flex items-center justify-between p-4 border border-border rounded-lg">
                        <div>
                          <p className="font-medium text-sm">{item.titulo}</p>
                          <p className="text-xs text-muted-foreground">{item.descricao}</p>
                        </div>
                        <input type="checkbox" className="rounded" defaultChecked />
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="plano" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Plano Atual</CardTitle>
                    <CardDescription>Plano Profissional - R$ 147/mês</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="p-4 gradient-primary rounded-lg text-white">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold">Uso de Tokens</span>
                        <span className="text-sm">2.450 / 5.000</span>
                      </div>
                      <div className="w-full bg-white/20 rounded-full h-2">
                        <div className="bg-white h-2 rounded-full" style={{ width: '49%' }} />
                      </div>
                      <p className="text-xs opacity-90 mt-2">Renova em 15 dias</p>
                    </div>

                    <div className="space-y-3">
                      <h3 className="font-medium">Recursos Incluídos:</h3>
                      <div className="grid grid-cols-2 gap-2">
                        {[
                          "✓ IA Personalizada",
                          "✓ Geração Ilimitada de Textos",
                          "✓ 500 Imagens/mês",
                          "✓ WhatsApp Business",
                          "✓ Agendamento de Posts",
                          "✓ Análise de Redes Sociais",
                          "✓ Google Meu Negócio",
                          "✓ Suporte Prioritário",
                        ].map((recurso) => (
                          <div key={recurso} className="text-sm text-muted-foreground">
                            {recurso}
                          </div>
                        ))}
                      </div>
                    </div>

                    <Button variant="outline" className="w-full">Fazer Upgrade para Premium</Button>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="seguranca" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Segurança da Conta</CardTitle>
                    <CardDescription>Mantenha sua conta protegida</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="senha-atual">Senha Atual</Label>
                      <Input id="senha-atual" type="password" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="nova-senha">Nova Senha</Label>
                      <Input id="nova-senha" type="password" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirmar-senha">Confirmar Nova Senha</Label>
                      <Input id="confirmar-senha" type="password" />
                    </div>
                    <Button className="gradient-primary text-white">Alterar Senha</Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Autenticação em Dois Fatores</CardTitle>
                    <CardDescription>Adicione uma camada extra de segurança</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline">Ativar 2FA</Button>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Configuracoes;
