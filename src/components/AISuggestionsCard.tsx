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
    <div className="gradient-card rounded-2xl p-8 text-white relative overflow-hidden shadow-lg">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full -ml-24 -mb-24"></div>
      
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
              <Lightbulb className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold">Sugestões da IA para Hoje</h2>
              <p className="text-sm text-white/80 mt-0.5">
                Baseado na análise do seu perfil e tendências
              </p>
            </div>
          </div>
          
          <Button 
            variant="secondary" 
            size="sm"
            className="bg-white/20 hover:bg-white/30 border-0 text-white backdrop-blur-sm"
          >
            Ver Todas
          </Button>
        </div>

        <div className="space-y-3">
          {suggestions.map((suggestion, index) => (
            <div
              key={index}
              className="flex items-start gap-3 p-4 bg-white/10 rounded-xl backdrop-blur-sm hover:bg-white/15 transition-colors"
            >
              <span className="text-xl flex-shrink-0">{suggestion.icon}</span>
              <p className="text-sm text-white/95 leading-relaxed">{suggestion.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
