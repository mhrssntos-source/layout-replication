import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Persona from "./pages/Persona";
import GeradorTexto from "./pages/GeradorTexto";
import EstudioImagem from "./pages/EstudioImagem";
import Instagram from "./pages/Instagram";
import GoogleMeuNegocio from "./pages/GoogleMeuNegocio";
import Agendador from "./pages/Agendador";
import Configuracoes from "./pages/Configuracoes";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/persona" element={<Persona />} />
          <Route path="/texto" element={<GeradorTexto />} />
          <Route path="/imagem" element={<EstudioImagem />} />
          <Route path="/instagram" element={<Instagram />} />
          <Route path="/google" element={<GoogleMeuNegocio />} />
          <Route path="/agendador" element={<Agendador />} />
          <Route path="/config" element={<Configuracoes />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
