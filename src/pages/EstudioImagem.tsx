import { AppSidebar } from "@/components/AppSidebar";
import { DashboardHeader } from "@/components/DashboardHeader";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Sparkles, Download, Wand2, Image as ImageIcon, Layout } from "lucide-react";

const EstudioImagem = () => {
  return (
    <div className="flex min-h-screen w-full bg-background">
      <AppSidebar />
      
      <div className="flex-1 flex flex-col">
        <DashboardHeader />
        
        <main className="flex-1 p-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-foreground">Estúdio de Imagem</h1>
              <p className="text-muted-foreground mt-1">Crie artes profissionais com sua identidade visual</p>
            </div>

            <Tabs defaultValue="templates" className="space-y-6">
              <TabsList className="grid w-full max-w-md grid-cols-3">
                <TabsTrigger value="templates">
                  <Layout className="w-4 h-4 mr-2" />
                  Templates
                </TabsTrigger>
                <TabsTrigger value="gerar">
                  <Wand2 className="w-4 h-4 mr-2" />
                  Gerar com IA
                </TabsTrigger>
                <TabsTrigger value="galeria">
                  <ImageIcon className="w-4 h-4 mr-2" />
                  Minha Galeria
                </TabsTrigger>
              </TabsList>

              <TabsContent value="templates" className="space-y-6">
                <div className="grid grid-cols-4 gap-4">
                  {/* Categorias */}
                  <Card className="col-span-1">
                    <CardHeader>
                      <CardTitle className="text-base">Categorias</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {["Promoções", "Feed", "Stories", "Anúncios", "Datas Comemorativas", "Produtos"].map((cat) => (
                          <Button key={cat} variant="ghost" className="w-full justify-start text-sm">
                            {cat}
                          </Button>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Templates Grid */}
                  <div className="col-span-3">
                    <div className="grid grid-cols-3 gap-4">
                      {Array.from({ length: 9 }).map((_, i) => (
                        <Card key={i} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                          <div className="aspect-square bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                            <ImageIcon className="w-12 h-12 text-primary/40" />
                          </div>
                          <CardContent className="p-3">
                            <p className="text-sm font-medium">Template {i + 1}</p>
                            <p className="text-xs text-muted-foreground">Post 1080x1080</p>
                            <Button size="sm" className="w-full mt-2">
                              Usar Template
                            </Button>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="gerar" className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Configurações */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Gerar Imagem com IA</CardTitle>
                      <CardDescription>Descreva a arte que você quer criar</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <Label>Descrição da Imagem</Label>
                        <Input placeholder="Ex: Óculos de sol Ray-Ban sobre uma mesa de madeira com luz natural" />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label>Formato</Label>
                          <select className="w-full h-10 px-3 rounded-md border border-input bg-background">
                            <option>Quadrado (1:1)</option>
                            <option>Story (9:16)</option>
                            <option>Paisagem (16:9)</option>
                          </select>
                        </div>
                        <div className="space-y-2">
                          <Label>Estilo</Label>
                          <select className="w-full h-10 px-3 rounded-md border border-input bg-background">
                            <option>Realista</option>
                            <option>Minimalista</option>
                            <option>Moderno</option>
                            <option>Vintage</option>
                          </select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label className="flex items-center gap-2">
                          <input type="checkbox" className="rounded" defaultChecked />
                          Incluir logo da ótica automaticamente
                        </Label>
                      </div>

                      <Button className="w-full gradient-primary text-white">
                        <Sparkles className="w-4 h-4 mr-2" />
                        Gerar Imagem
                      </Button>
                    </CardContent>
                  </Card>

                  {/* Preview */}
                  <Card>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle>Preview</CardTitle>
                        <Button variant="outline" size="sm">
                          <Download className="w-4 h-4 mr-2" />
                          Baixar
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="aspect-square bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg flex items-center justify-center">
                        <div className="text-center">
                          <ImageIcon className="w-16 h-16 mx-auto mb-4 text-muted-foreground opacity-50" />
                          <p className="text-sm text-muted-foreground">
                            A imagem gerada aparecerá aqui
                          </p>
                        </div>
                      </div>

                      <div className="mt-4 p-4 bg-muted/50 rounded-lg">
                        <p className="text-xs text-muted-foreground">
                          💡 <strong>Dica:</strong> Seja específico na descrição. Mencione cores, estilo, ambiente e objetos que deseja na imagem.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="galeria" className="space-y-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold">Minhas Criações</h3>
                    <p className="text-sm text-muted-foreground">48 imagens salvas</p>
                  </div>
                  <Button variant="outline">
                    <Download className="w-4 h-4 mr-2" />
                    Baixar Todas
                  </Button>
                </div>

                <div className="grid grid-cols-4 gap-4">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <Card key={i} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                      <div className="aspect-square bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                        <ImageIcon className="w-12 h-12 text-primary/40" />
                      </div>
                      <CardContent className="p-3">
                        <p className="text-xs text-muted-foreground">
                          {new Date().toLocaleDateString()}
                        </p>
                        <div className="flex gap-1 mt-2">
                          <Button variant="outline" size="sm" className="flex-1 text-xs">
                            Ver
                          </Button>
                          <Button variant="outline" size="sm" className="flex-1 text-xs">
                            <Download className="w-3 h-3" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  );
};

export default EstudioImagem;
