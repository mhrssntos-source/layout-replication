import { AppSidebar } from "@/components/AppSidebar";
import { DashboardHeader } from "@/components/DashboardHeader";
import { AISuggestionsCard } from "@/components/AISuggestionsCard";
import { QuickActionCard } from "@/components/QuickActionCard";
import { RecentPosts } from "@/components/RecentPosts";
import { PersonaCard } from "@/components/PersonaCard";
import { QuickActions } from "@/components/QuickActions";
import { StatsCards } from "@/components/StatsCards";

const Index = () => {
  return (
    <div className="flex min-h-screen w-full bg-background">
      <AppSidebar />
      
      <div className="flex-1 flex flex-col">
        <DashboardHeader />
        
        <main className="flex-1 p-8">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                <AISuggestionsCard />
                <QuickActionCard />
                <RecentPosts />
                <StatsCards />
              </div>

              {/* Right Sidebar */}
              <div className="space-y-6">
                <PersonaCard />
                <QuickActions />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
