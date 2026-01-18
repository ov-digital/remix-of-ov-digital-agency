import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import WebDevelopmentPage from "./pages/services/WebDevelopmentPage";
import WebDesignPage from "./pages/services/WebDesignPage";
import MobileAppsPage from "./pages/services/MobileAppsPage";
import SeoPage from "./pages/services/SeoPage";
import CrmPage from "./pages/services/CrmPage";
import TelegramPage from "./pages/services/TelegramPage";
import BlockchainAiPage from "./pages/services/BlockchainAiPage";
import CasePage147Pacific from "./pages/cases/CasePage147Pacific";
import CasePageFishing from "./pages/cases/CasePageFishing";
import CasePageIgra from "./pages/cases/CasePageIgra";
import CasePageTransagro from "./pages/cases/CasePageTransagro";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services/web-development" element={<WebDevelopmentPage />} />
          <Route path="/services/web-design" element={<WebDesignPage />} />
          <Route path="/services/mobile-apps" element={<MobileAppsPage />} />
          <Route path="/services/seo" element={<SeoPage />} />
          <Route path="/services/crm" element={<CrmPage />} />
          <Route path="/services/telegram" element={<TelegramPage />} />
          <Route path="/services/blockchain-ai" element={<BlockchainAiPage />} />
          <Route path="/cases/147pacific" element={<CasePage147Pacific />} />
          <Route path="/cases/fishing-weekend" element={<CasePageFishing />} />
          <Route path="/cases/igra-show" element={<CasePageIgra />} />
          <Route path="/cases/transagro" element={<CasePageTransagro />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
