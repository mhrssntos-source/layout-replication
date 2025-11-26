import { AppSidebar } from "@/components/AppSidebar";
import { DashboardHeader } from "@/components/DashboardHeader";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, MessageSquare, TrendingUp, MapPin, Phone, Clock } from "lucide-react";

const GoogleMeuNegocio = () => {
  return (
    <div className="flex min-h-screen w-full bg-background">
      <AppSidebar />
      
      <div className="flex-1 flex flex-col">
        <DashboardHeader />
        
        <main className="flex-1 p-8">
          <div className="max-w-7xl mx-auto space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-foreground">Google Meu Negócio</h1>
                <p className="text-muted-foreground mt-1">Gerencie sua presença no Google</p>
              </div>
              <Button className="gradient-primary text-white">
                Conectar Google
              </Button>
            </div>

            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Avaliação Média</CardTitle>
                  <Star className="h-4 w-4 text-yellow-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">4.8</div>
                  <p className="text-xs text-muted-foreground mt-1">142 avaliações</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Visualizações</CardTitle>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">3.2K</div>
                  <p className="text-xs text-green-600 flex items-center mt-1">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    +12% vs. semana passada
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Cliques no Site</CardTitle>
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">234</div>
                  <p className="text-xs text-muted-foreground mt-1">Últimos 7 dias</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Ligações</CardTitle>
                  <Phone className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">87</div>
                  <p className="text-xs text-muted-foreground mt-1">Esta semana</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Avaliações Recentes */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>Avaliações Recentes</CardTitle>
                      <CardDescription>4 avaliações pendentes de resposta</CardDescription>
                    </div>
                    <Button variant="outline" size="sm">Ver Todas</Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { nome: "Maria Silva", estrelas: 5, texto: "Excelente atendimento! Encontrei o óculos perfeito.", tempo: "2 dias atrás", respondida: false },
                      { nome: "João Santos", estrelas: 4, texto: "Boa variedade de produtos. Preços justos.", tempo: "3 dias atrás", respondida: true },
                      { nome: "Ana Costa", estrelas: 5, texto: "Muito satisfeita com a compra. Recomendo!", tempo: "5 dias atrás", respondida: false },
                    ].map((avaliacao, i) => (
                      <div key={i} className="p-4 border border-border rounded-lg space-y-2">
                        <div className="flex items-start justify-between">
                          <div>
                            <p className="font-medium text-sm">{avaliacao.nome}</p>
                            <div className="flex items-center gap-1 mt-1">
                              {Array.from({ length: 5 }).map((_, j) => (
                                <Star
                                  key={j}
                                  className={`w-3 h-3 ${j < avaliacao.estrelas ? 'fill-yellow-500 text-yellow-500' : 'text-gray-300'}`}
                                />
                              ))}
                            </div>
                          </div>
                          <Clock className="w-3 h-3 text-muted-foreground" />
                        </div>
                        <p className="text-sm text-muted-foreground">{avaliacao.texto}</p>
                        <div className="flex items-center justify-between">
                          <p className="text-xs text-muted-foreground">{avaliacao.tempo}</p>
                          {!avaliacao.respondida && (
                            <Button variant="outline" size="sm">
                              <MessageSquare className="w-3 h-3 mr-1" />
                              Responder
                            </Button>
                          )}
                          {avaliacao.respondida && (
                            <span className="text-xs text-green-600">✓ Respondida</span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Sugestões da IA */}
              <Card>
                <CardHeader>
                  <CardTitle>Sugestões da IA</CardTitle>
                  <CardDescription>Ações recomendadas para melhorar seu perfil</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { 
                        icone: "💬", 
                        titulo: "Responder 4 avaliações pendentes",
                        descricao: "Aumenta sua taxa de resposta e credibilidade",
                        prioridade: "alta"
                      },
                      { 
                        icone: "📸", 
                        titulo: "Adicionar fotos dos produtos",
                        descricao: "Perfis com fotos recebem 42% mais cliques",
                        prioridade: "media"
                      },
                      { 
                        icone: "🕐", 
                        titulo: "Atualizar horário de funcionamento",
                        descricao: "Seu horário de sábado não está preenchido",
                        prioridade: "alta"
                      },
                      { 
                        icone: "📱", 
                        titulo: "Ativar mensagens",
                        descricao: "Permita que clientes entrem em contato diretamente",
                        prioridade: "baixa"
                      },
                    ].map((sugestao, i) => (
                      <div key={i} className="p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors">
                        <div className="flex items-start gap-3">
                          <span className="text-2xl">{sugestao.icone}</span>
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <p className="font-medium text-sm">{sugestao.titulo}</p>
                              <span className={`text-xs px-2 py-0.5 rounded-full ${
                                sugestao.prioridade === 'alta' ? 'bg-red-100 text-red-700' :
                                sugestao.prioridade === 'media' ? 'bg-yellow-100 text-yellow-700' :
                                'bg-blue-100 text-blue-700'
                              }`}>
                                {sugestao.prioridade}
                              </span>
                            </div>
                            <p className="text-xs text-muted-foreground mt-1">{sugestao.descricao}</p>
                            <Button variant="link" size="sm" className="p-0 h-auto mt-2">
                              Fazer agora →
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Como você se compara */}
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>Comparação com Concorrentes</CardTitle>
                  <CardDescription>Óticas similares na sua região</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { metrica: "Avaliação Média", voce: 4.8, media: 4.3, melhor: true },
                      { metrica: "Número de Avaliações", voce: 142, media: 98, melhor: true },
                      { metrica: "Fotos Publicadas", voce: 34, media: 52, melhor: false },
                      { metrica: "Taxa de Resposta", voce: 87, media: 76, melhor: true },
                    ].map((item) => (
                      <div key={item.metrica} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">{item.metrica}</span>
                          <span className={`text-sm ${item.melhor ? 'text-green-600' : 'text-yellow-600'}`}>
                            {item.melhor ? '↑' : '↓'} {item.voce} vs {item.media} (média)
                          </span>
                        </div>
                        <div className="flex gap-2">
                          <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                            <div 
                              className={`h-full ${item.melhor ? 'gradient-primary' : 'bg-yellow-500'}`}
                              style={{ width: `${(item.voce / (item.voce > item.media ? item.voce : item.media)) * 100}%` }}
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default GoogleMeuNegocio;
