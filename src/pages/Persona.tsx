import { AppSidebar } from "@/components/AppSidebar";
import { DashboardHeader } from "@/components/DashboardHeader";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Upload, Sparkles, Save } from "lucide-react";

const Persona = () => {
  return (
    <div className="flex min-h-screen w-full bg-background">
      <AppSidebar />
      
      <div className="flex-1 flex flex-col">
        <DashboardHeader />
        
        <main className="flex-1 p-8">
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-foreground">Persona da Ótica</h1>
                <p className="text-muted-foreground mt-1">Treine a IA com as informações da sua ótica</p>
              </div>
              <Button className="gradient-primary text-white">
                <Save className="w-4 h-4 mr-2" />
                Salvar Persona
              </Button>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-primary" />
                  Informações Básicas
                </CardTitle>
                <CardDescription>Dados principais da sua ótica</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="nome">Nome da Ótica</Label>
                    <Input id="nome" placeholder="Ex: Ótica Visão Clara" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cidade">Cidade</Label>
                    <Input id="cidade" placeholder="Ex: São Paulo, SP" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="descricao">Descrição</Label>
                  <Textarea 
                    id="descricao" 
                    placeholder="Conte sobre sua ótica, história, diferenciais..."
                    rows={4}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="logo">Logo da Ótica</Label>
                  <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary transition-colors cursor-pointer">
                    <Upload className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">
                      Clique para fazer upload ou arraste a imagem
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">PNG, JPG até 5MB</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Identidade Visual</CardTitle>
                <CardDescription>Cores e estilo da sua marca</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label>Cor Principal</Label>
                    <div className="flex gap-2">
                      <Input type="color" className="w-16 h-10" defaultValue="#4F9CF9" />
                      <Input placeholder="#4F9CF9" className="flex-1" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Cor Secundária</Label>
                    <div className="flex gap-2">
                      <Input type="color" className="w-16 h-10" defaultValue="#1EAEDB" />
                      <Input placeholder="#1EAEDB" className="flex-1" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Cor de Destaque</Label>
                    <div className="flex gap-2">
                      <Input type="color" className="w-16 h-10" defaultValue="#FF6B6B" />
                      <Input placeholder="#FF6B6B" className="flex-1" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Tom de Voz</CardTitle>
                <CardDescription>Como a IA deve se comunicar</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Estilo de Comunicação</Label>
                    <Select defaultValue="profissional">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="profissional">Profissional</SelectItem>
                        <SelectItem value="descontraido">Descontraído</SelectItem>
                        <SelectItem value="elegante">Elegante</SelectItem>
                        <SelectItem value="jovem">Jovem e Moderno</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Público-Alvo Principal</Label>
                    <Select defaultValue="adultos">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="adultos">Adultos 30-50 anos</SelectItem>
                        <SelectItem value="jovens">Jovens 18-30 anos</SelectItem>
                        <SelectItem value="idosos">Idosos 50+ anos</SelectItem>
                        <SelectItem value="todos">Todas as idades</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Palavras-chave da Marca</Label>
                  <Input placeholder="Ex: qualidade, estilo, cuidado, visão" />
                  <p className="text-xs text-muted-foreground">Separe por vírgulas</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Produtos e Serviços</CardTitle>
                <CardDescription>O que sua ótica oferece</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Principais Produtos</Label>
                  <Textarea 
                    placeholder="Ex: Óculos de grau, óculos de sol, lentes de contato, acessórios..."
                    rows={3}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Marcas Trabalhadas</Label>
                  <Textarea 
                    placeholder="Ex: Ray-Ban, Oakley, Prada, Armani..."
                    rows={2}
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Persona;
