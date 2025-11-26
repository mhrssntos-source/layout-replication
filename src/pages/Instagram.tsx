import { AppSidebar } from "@/components/AppSidebar";
import { DashboardHeader } from "@/components/DashboardHeader";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, Users, Heart, MessageCircle, Eye, Calendar } from "lucide-react";

const Instagram = () => {
  return (
    <div className="flex min-h-screen w-full bg-background">
      <AppSidebar />
      
      <div className="flex-1 flex flex-col">
        <DashboardHeader />
        
        <main className="flex-1 p-8">
          <div className="max-w-7xl mx-auto space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-foreground">Análise do Instagram</h1>
                <p className="text-muted-foreground mt-1">Acompanhe o desempenho do seu perfil</p>
              </div>
              <Button className="gradient-primary text-white">
                Conectar Instagram
              </Button>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Seguidores</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">12.543</div>
                  <p className="text-xs text-green-600 flex items-center mt-1">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    +234 esta semana
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Taxa de Engajamento</CardTitle>
                  <Heart className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">4.8%</div>
                  <p className="text-xs text-green-600 flex items-center mt-1">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    +0.3% vs. mês anterior
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Alcance</CardTitle>
                  <Eye className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">45.2K</div>
                  <p className="text-xs text-muted-foreground mt-1">Últimos 30 dias</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Posts este Mês</CardTitle>
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">18</div>
                  <p className="text-xs text-muted-foreground mt-1">Média: 4.5 por semana</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Melhor Horário */}
              <Card>
                <CardHeader>
                  <CardTitle>Melhores Horários para Postar</CardTitle>
                  <CardDescription>Baseado no engajamento da sua audiência</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { dia: "Segunda-feira", horario: "18h - 20h", engajamento: 87 },
                      { dia: "Quarta-feira", horario: "12h - 14h", engajamento: 82 },
                      { dia: "Sexta-feira", horario: "19h - 21h", engajamento: 91 },
                      { dia: "Sábado", horario: "14h - 16h", engajamento: 78 },
                    ].map((item) => (
                      <div key={item.dia} className="flex items-center gap-4">
                        <div className="flex-1">
                          <p className="font-medium text-sm">{item.dia}</p>
                          <p className="text-xs text-muted-foreground">{item.horario}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
                            <div 
                              className="h-full gradient-primary"
                              style={{ width: `${item.engajamento}%` }}
                            />
                          </div>
                          <span className="text-sm font-medium w-8">{item.engajamento}%</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Conteúdo que Funciona */}
              <Card>
                <CardHeader>
                  <CardTitle>Conteúdo que Funciona Melhor</CardTitle>
                  <CardDescription>Tipos de post com maior engajamento</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { tipo: "Óculos de Sol", posts: 24, engajamento: 5.2 },
                      { tipo: "Dicas de Cuidados", posts: 18, engajamento: 4.8 },
                      { tipo: "Tendências de Moda", posts: 15, engajamento: 4.3 },
                      { tipo: "Promoções", posts: 12, engajamento: 6.1 },
                    ].map((item) => (
                      <div key={item.tipo} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                        <div>
                          <p className="font-medium text-sm">{item.tipo}</p>
                          <p className="text-xs text-muted-foreground">{item.posts} posts</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-primary">{item.engajamento}%</p>
                          <p className="text-xs text-muted-foreground">engajamento</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Posts Recentes */}
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>Últimas Publicações</CardTitle>
                  <CardDescription>Desempenho dos seus posts recentes</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-4">
                    {Array.from({ length: 6 }).map((_, i) => (
                      <div key={i} className="space-y-2">
                        <div className="aspect-square bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg" />
                        <div className="flex items-center justify-between text-xs">
                          <span className="flex items-center gap-1">
                            <Heart className="w-3 h-3" />
                            1.2K
                          </span>
                          <span className="flex items-center gap-1">
                            <MessageCircle className="w-3 h-3" />
                            89
                          </span>
                          <span className="flex items-center gap-1">
                            <Eye className="w-3 h-3" />
                            5.4K
                          </span>
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

export default Instagram;
