import { AppSidebar } from "@/components/AppSidebar";
import { DashboardHeader } from "@/components/DashboardHeader";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Sparkles, Copy, RefreshCw, MessageSquare, Instagram, Facebook } from "lucide-react";
import { useState } from "react";

const GeradorTexto = () => {
  const [gerandoTexto, setGerandoTexto] = useState(false);
  const [textoGerado, setTextoGerado] = useState("");

  const gerarTexto = () => {
    setGerandoTexto(true);
    setTimeout(() => {
      setTextoGerado(
        "🕶️ Chegou a coleção de verão da Ray-Ban! ☀️\n\n" +
        "Prepare-se para os dias ensolarados com estilo e proteção. Nossa nova linha traz os modelos mais desejados com até 20% de desconto.\n\n" +
        "✨ Destaque da semana: Ray-Ban Aviator\n💙 Proteção UV400\n🎯 Lentes polarizadas\n\n" +
        "Visite nossa loja e encontre o modelo perfeito para você!\n\n" +
        "#OticaVisaoClara #RayBan #OculosDeSol #Verao2024 #Estilo"
      );
      setGerandoTexto(false);
    }, 2000);
  };

  return (
    <div className="flex min-h-screen w-full bg-background">
      <AppSidebar />
      
      <div className="flex-1 flex flex-col">
        <DashboardHeader />
        
        <main className="flex-1 p-8">
          <div className="max-w-6xl mx-auto">
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-foreground">Gerador de Texto com IA</h1>
              <p className="text-muted-foreground mt-1">Crie conteúdos profissionais em segundos</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Configurações */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Configurações</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label>Tipo de Conteúdo</Label>
                      <Select defaultValue="post">
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="post">Post para Feed</SelectItem>
                          <SelectItem value="story">Story</SelectItem>
                          <SelectItem value="campanha">Campanha Promocional</SelectItem>
                          <SelectItem value="anuncio">Anúncio</SelectItem>
                          <SelectItem value="email">E-mail Marketing</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label>Tema/Assunto</Label>
                      <Select defaultValue="produto">
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="produto">Lançamento de Produto</SelectItem>
                          <SelectItem value="promocao">Promoção/Desconto</SelectItem>
                          <SelectItem value="dica">Dica de Cuidados</SelectItem>
                          <SelectItem value="tendencia">Tendência de Moda</SelectItem>
                          <SelectItem value="educativo">Conteúdo Educativo</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label>Tom de Voz</Label>
                      <Select defaultValue="profissional">
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="profissional">Profissional</SelectItem>
                          <SelectItem value="descontraido">Descontraído</SelectItem>
                          <SelectItem value="vendedor">Focado em Vendas</SelectItem>
                          <SelectItem value="educativo">Educativo</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label>Plataforma</Label>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="flex-1">
                          <Instagram className="w-4 h-4 mr-1" />
                          Instagram
                        </Button>
                        <Button variant="outline" size="sm" className="flex-1">
                          <Facebook className="w-4 h-4 mr-1" />
                          Facebook
                        </Button>
                      </div>
                    </div>

                    <Button 
                      className="w-full gradient-primary text-white"
                      onClick={gerarTexto}
                      disabled={gerandoTexto}
                    >
                      {gerandoTexto ? (
                        <>
                          <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                          Gerando...
                        </>
                      ) : (
                        <>
                          <Sparkles className="w-4 h-4 mr-2" />
                          Gerar Texto
                        </>
                      )}
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Informações Adicionais</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <Textarea 
                      placeholder="Adicione detalhes específicos: nome do produto, preço, período da promoção..."
                      rows={4}
                    />
                  </CardContent>
                </Card>
              </div>

              {/* Texto Gerado */}
              <div className="lg:col-span-2 space-y-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>Texto Gerado</CardTitle>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <RefreshCw className="w-4 h-4 mr-2" />
                          Gerar Variação
                        </Button>
                        <Button variant="outline" size="sm">
                          <Copy className="w-4 h-4 mr-2" />
                          Copiar
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    {textoGerado ? (
                      <div className="space-y-4">
                        <Textarea 
                          value={textoGerado}
                          onChange={(e) => setTextoGerado(e.target.value)}
                          rows={12}
                          className="font-mono text-sm"
                        />
                        <div className="flex items-center justify-between text-sm text-muted-foreground">
                          <span>{textoGerado.length} caracteres</span>
                          <span>10 hashtags</span>
                        </div>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center justify-center h-[300px] text-center">
                        <MessageSquare className="w-16 h-16 text-muted-foreground mb-4 opacity-50" />
                        <p className="text-muted-foreground">
                          Configure as opções e clique em "Gerar Texto"<br />
                          para criar seu conteúdo com IA
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Variações Geradas</CardTitle>
                    <CardDescription>Outras opções de texto criadas pela IA</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="p-4 border border-border rounded-lg hover:border-primary transition-colors cursor-pointer">
                          <p className="text-sm text-foreground line-clamp-3">
                            Versão {i}: Texto alternativo gerado pela IA com abordagem diferente...
                          </p>
                          <div className="flex items-center gap-2 mt-2">
                            <Button variant="ghost" size="sm">
                              <Copy className="w-3 h-3 mr-1" />
                              Usar
                            </Button>
                          </div>
                        </div>
                      ))}
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

export default GeradorTexto;
