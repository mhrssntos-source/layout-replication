import { LayoutDashboard, User, FileText, Image, Instagram, Building2, Calendar, Settings } from "lucide-react";
import { NavLink } from "@/components/NavLink";

const menuItems = [
  { title: "Dashboard", url: "/", icon: LayoutDashboard },
  { title: "Persona da Ótica", url: "/persona", icon: User },
  { title: "Gerador de Texto", url: "/texto", icon: FileText },
  { title: "Estúdio de Imagem", url: "/imagem", icon: Image },
  { title: "Instagram", url: "/instagram", icon: Instagram },
  { title: "Google Meu Negócio", url: "/google", icon: Building2 },
  { title: "Agendador", url: "/agendador", icon: Calendar },
  { title: "Configurações", url: "/config", icon: Settings },
];

export function AppSidebar() {
  return (
    <aside className="w-[240px] bg-card border-r border-border flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-border">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">Ó</span>
          </div>
          <div>
            <h1 className="font-bold text-foreground">ÓticaLab</h1>
            <p className="text-xs text-muted-foreground">AI para Óticas</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1">
        {menuItems.map((item) => (
          <NavLink
            key={item.url}
            to={item.url}
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors"
            activeClassName="bg-secondary text-foreground font-medium"
          >
            <item.icon className="w-5 h-5 flex-shrink-0" />
            <span className="text-sm">{item.title}</span>
          </NavLink>
        ))}
      </nav>

      {/* Upgrade Card */}
      <div className="p-4">
        <div className="gradient-primary rounded-xl p-4 text-white relative overflow-hidden">
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-lg">👑</span>
              <span className="text-sm font-semibold">Plano Profissional</span>
            </div>
            <p className="text-xs opacity-90 mb-3">2.450 / 5.000 tokens usados</p>
            <div className="w-full bg-white/20 rounded-full h-1.5 mb-3">
              <div className="bg-white h-1.5 rounded-full" style={{ width: '49%' }}></div>
            </div>
            <button className="w-full bg-white/20 hover:bg-white/30 text-white text-xs font-medium py-2 rounded-lg transition-colors">
              Fazer Upgrade
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}
