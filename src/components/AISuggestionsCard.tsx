import { Lightbulb, CheckCircle2, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const suggestions = [
  {
    icon: "💡",
    text: "Poste sobre óculos de sol para o verão - alta demanda detectada",
  },
  {
    icon: "🔍",
    text: "Responda 4 avaliações no Google - melhore seu ranking local",
  },
  {
    icon: "❤️",
    text: "Crie conteúdo sobre cuidados com os olhos - engaja +40%",
  },
];

export function AISuggestionsCard() {
  return (
    <div className="gradient-card rounded-xl p-5 text-white relative overflow-hidden shadow-lg">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full -mr-24 -mt-24"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full -ml-16 -mb-16"></div>
      
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
              <Lightbulb className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-base font-bold">Sugestões da IA para Hoje</h2>
              <p className="text-xs text-white/80">
                Baseado na análise do seu perfil e tendências
              </p>
            </div>
          </div>
          
          <Button 
            variant="secondary" 
            size="sm"
            className="bg-white/20 hover:bg-white/30 border-0 text-white backdrop-blur-sm text-xs h-8"
          >
            Ver Todas
          </Button>
        </div>

        <div className="space-y-2">
          {suggestions.map((suggestion, index) => (
            <div
              key={index}
              className="flex items-start gap-2 p-3 bg-white/10 rounded-lg backdrop-blur-sm hover:bg-white/15 transition-colors"
            >
              <span className="text-base flex-shrink-0">{suggestion.icon}</span>
              <p className="text-xs text-white/95 leading-relaxed">{suggestion.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
