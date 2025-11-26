import { Store, Users, Palette } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function PersonaCard() {
  return (
    <Card className="p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
          <Store className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h3 className="font-bold text-foreground">Ótica Visão Clara</h3>
          <p className="text-xs text-muted-foreground">Persona da IA</p>
        </div>
      </div>

      <div className="space-y-3 mb-6">
        <div className="flex items-start gap-3">
          <Users className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" />
          <div>
            <p className="text-xs font-medium text-muted-foreground">Tom: Profissional e acolhedor</p>
          </div>
        </div>
        
        <div className="flex items-start gap-3">
          <Users className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" />
          <div>
            <p className="text-xs font-medium text-muted-foreground">Público: Adultos 25-55 anos</p>
          </div>
        </div>
        
        <div className="flex items-start gap-3">
          <Palette className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" />
          <div>
            <p className="text-xs font-medium text-muted-foreground">Cores: Azul e Verde</p>
          </div>
        </div>
      </div>

      <Button variant="outline" className="w-full" size="sm">
        Atualizar Persona
      </Button>
    </Card>
  );
}
