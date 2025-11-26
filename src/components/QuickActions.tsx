import { FileText, Image, Instagram, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";

const actions = [
  { icon: FileText, label: "Criar Texto", color: "text-blue-500" },
  { icon: Image, label: "Criar Imagem", color: "text-purple-500" },
  { icon: Instagram, label: "Analisar Instagram", color: "text-pink-500" },
  { icon: TrendingUp, label: "Ver Avaliações", color: "text-green-500" },
];

export function QuickActions() {
  return (
    <Card className="p-6">
      <h3 className="font-bold text-foreground mb-4">Ações Rápidas</h3>
      
      <div className="space-y-2">
        {actions.map((action, index) => (
          <button
            key={index}
            className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-secondary transition-colors text-left"
          >
            <div className={`w-10 h-10 rounded-lg bg-muted/50 flex items-center justify-center ${action.color}`}>
              <action.icon className="w-5 h-5" />
            </div>
            <span className="text-sm font-medium text-foreground">{action.label}</span>
          </button>
        ))}
      </div>
    </Card>
  );
}
