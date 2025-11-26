import { Wand2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function QuickActionCard() {
  return (
    <div className="bg-card rounded-2xl p-8 border border-border text-center shadow-card">
      <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
        <Wand2 className="w-8 h-8 text-primary" />
      </div>
      
      <h3 className="text-xl font-bold text-foreground mb-2">
        Gerar Semana Completa com IA
      </h3>
      <p className="text-sm text-muted-foreground mb-6">
        Crie 7 posts personalizados para sua ótica em segundos
      </p>
      
      <Button size="lg" className="shadow-lg">
        Gerar Agora
      </Button>
    </div>
  );
}
