import { AppSidebar } from "@/components/AppSidebar";
import { DashboardHeader } from "@/components/DashboardHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Instagram, Facebook, Plus } from "lucide-react";
import { useState } from "react";

const Agendador = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const diasSemana = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
  const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    return { firstDay, daysInMonth };
  };

  const { firstDay, daysInMonth } = getDaysInMonth(currentDate);

  return (
    <div className="flex min-h-screen w-full bg-background">
      <AppSidebar />
      
      <div className="flex-1 flex flex-col">
        <DashboardHeader />
        
        <main className="flex-1 p-8">
          <div className="max-w-7xl mx-auto space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-foreground">Agendador de Posts</h1>
                <p className="text-muted-foreground mt-1">Planeje e agende suas publicações</p>
              </div>
              <Button className="gradient-primary text-white">
                <Plus className="w-4 h-4 mr-2" />
                Novo Post
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              {/* Calendário */}
              <Card className="lg:col-span-3">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>
                      {meses[currentDate.getMonth()]} {currentDate.getFullYear()}
                    </CardTitle>
                    <div className="flex gap-2">
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1))}
                      >
                        ←
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => setCurrentDate(new Date())}
                      >
                        Hoje
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1))}
                      >
                        →
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-7 gap-2">
                    {/* Cabeçalho dos dias */}
                    {diasSemana.map((dia) => (
                      <div key={dia} className="text-center text-sm font-medium text-muted-foreground p-2">
                        {dia}
                      </div>
                    ))}
                    
                    {/* Dias vazios antes do primeiro dia */}
                    {Array.from({ length: firstDay }).map((_, i) => (
                      <div key={`empty-${i}`} className="aspect-square" />
                    ))}
                    
                    {/* Dias do mês */}
                    {Array.from({ length: daysInMonth }).map((_, i) => {
                      const dia = i + 1;
                      const postsAgendados = Math.floor(Math.random() * 4); // Simulação
                      const isToday = dia === new Date().getDate() && 
                                     currentDate.getMonth() === new Date().getMonth() &&
                                     currentDate.getFullYear() === new Date().getFullYear();
                      
                      return (
                        <div
                          key={dia}
                          className={`aspect-square border border-border rounded-lg p-2 hover:border-primary transition-colors cursor-pointer ${
                            isToday ? 'gradient-primary text-white' : 'bg-card'
                          }`}
                        >
                          <div className="flex flex-col h-full">
                            <span className={`text-sm font-medium ${isToday ? 'text-white' : 'text-foreground'}`}>
                              {dia}
                            </span>
                            {postsAgendados > 0 && (
                              <div className="mt-auto space-y-1">
                                {Array.from({ length: Math.min(postsAgendados, 2) }).map((_, j) => (
                                  <div
                                    key={j}
                                    className={`h-1 rounded-full ${
                                      isToday ? 'bg-white/50' : 'bg-primary/50'
                                    }`}
                                  />
                                ))}
                                {postsAgendados > 2 && (
                                  <span className={`text-xs ${isToday ? 'text-white' : 'text-muted-foreground'}`}>
                                    +{postsAgendados - 2}
                                  </span>
                                )}
                              </div>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>

              {/* Sidebar - Posts Agendados */}
              <div className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Posts de Hoje</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {[
                      { hora: "10:00", plataforma: "Instagram", tipo: "Feed" },
                      { hora: "14:00", plataforma: "Facebook", tipo: "Post" },
                      { hora: "18:00", plataforma: "Instagram", tipo: "Story" },
                    ].map((post, i) => (
                      <div key={i} className="p-3 border border-border rounded-lg space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            {post.plataforma === "Instagram" ? (
                              <Instagram className="w-4 h-4 text-pink-600" />
                            ) : (
                              <Facebook className="w-4 h-4 text-blue-600" />
                            )}
                            <span className="text-sm font-medium">{post.plataforma}</span>
                          </div>
                          <div className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Clock className="w-3 h-3" />
                            {post.hora}
                          </div>
                        </div>
                        <p className="text-xs text-muted-foreground">{post.tipo}</p>
                        <Button variant="outline" size="sm" className="w-full text-xs">
                          Ver Detalhes
                        </Button>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Estatísticas</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Posts esta semana</span>
                      <span className="font-bold">12</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Agendados</span>
                      <span className="font-bold">8</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Publicados</span>
                      <span className="font-bold text-green-600">4</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Agendador;
