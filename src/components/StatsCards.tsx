import { TrendingUp, Heart, Users, Star } from "lucide-react";
import { Card } from "@/components/ui/card";

const stats = [
  {
    label: "Engajamento",
    value: "2.4k",
    change: "+12%",
    icon: TrendingUp,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    label: "Curtidas",
    value: "1.8k",
    change: "+8%",
    icon: Heart,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
  },
  {
    label: "Novos Seguidores",
    value: "342",
    change: "+15%",
    icon: Users,
    color: "text-cyan-500",
    bgColor: "bg-cyan-500/10",
  },
  {
    label: "Avaliações",
    value: "28",
    change: "4.8",
    icon: Star,
    color: "text-amber-500",
    bgColor: "bg-amber-500/10",
  },
];

export function StatsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-start justify-between mb-4">
            <div className={`w-12 h-12 rounded-xl ${stat.bgColor} flex items-center justify-center`}>
              <stat.icon className={`w-6 h-6 ${stat.color}`} />
            </div>
            <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">
              {stat.change}
            </span>
          </div>
          
          <h4 className="text-2xl font-bold text-foreground mb-1">{stat.value}</h4>
          <p className="text-sm text-muted-foreground">{stat.label}</p>
        </Card>
      ))}
    </div>
  );
}
