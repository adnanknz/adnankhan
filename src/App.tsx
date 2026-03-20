import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import About from "./pages/About.tsx";
import LegalAI from "./pages/LegalAI.tsx";
import MarTech from "./pages/MarTech.tsx";
import Work from "./pages/Work.tsx";
import Insights from "./pages/Insights.tsx";
import Speaking from "./pages/Speaking.tsx";
import Contact from "./pages/Contact.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/legal-ai" element={<LegalAI />} />
          <Route path="/martech" element={<MarTech />} />
          <Route path="/work" element={<Work />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/speaking" element={<Speaking />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
