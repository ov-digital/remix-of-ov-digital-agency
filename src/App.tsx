import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ScrollToTop } from "@/components/ScrollToTop";
import { CookieBanner } from "@/components/CookieBanner";

// Eager load main page
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Lazy load other pages for better performance
const AboutPage = lazy(() => import("./pages/AboutPage"));
const BlogPage = lazy(() => import("./pages/BlogPage"));
const BlogArticlePage = lazy(() => import("./pages/blog/BlogArticlePage"));
const PortfolioPage = lazy(() => import("./pages/PortfolioPage"));
const WebDevelopmentPage = lazy(() => import("./pages/services/WebDevelopmentPage"));
const WebDesignPage = lazy(() => import("./pages/services/WebDesignPage"));
const MobileAppsPage = lazy(() => import("./pages/services/MobileAppsPage"));
const SeoPage = lazy(() => import("./pages/services/SeoPage"));
const CrmPage = lazy(() => import("./pages/services/CrmPage"));
const TelegramPage = lazy(() => import("./pages/services/TelegramPage"));
const BlockchainAiPage = lazy(() => import("./pages/services/BlockchainAiPage"));
const DevOpsPage = lazy(() => import("./pages/services/DevOpsPage"));
const CasePage147Pacific = lazy(() => import("./pages/cases/CasePage147Pacific"));
const CasePageFishing = lazy(() => import("./pages/cases/CasePageFishing"));
const CasePageIgra = lazy(() => import("./pages/cases/CasePageIgra"));
const CasePageTransagro = lazy(() => import("./pages/cases/CasePageTransagro"));
const PrivacyPolicyPage = lazy(() => import("./pages/PrivacyPolicyPage"));

const queryClient = new QueryClient();

// Loading fallback
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
  </div>
);

// Scroll to hash on navigation
const ScrollToHash = () => {
  const { pathname, hash } = useLocation();
  
  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToHash />
        <ScrollToTop />
        <CookieBanner />
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogArticlePage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/services/web-development" element={<WebDevelopmentPage />} />
            <Route path="/services/web-design" element={<WebDesignPage />} />
            <Route path="/services/mobile-apps" element={<MobileAppsPage />} />
            <Route path="/services/seo" element={<SeoPage />} />
            <Route path="/services/crm" element={<CrmPage />} />
            <Route path="/services/telegram" element={<TelegramPage />} />
            <Route path="/services/blockchain-ai" element={<BlockchainAiPage />} />
            <Route path="/services/devops" element={<DevOpsPage />} />
            <Route path="/cases/147pacific" element={<CasePage147Pacific />} />
            <Route path="/cases/fishing-weekend" element={<CasePageFishing />} />
            <Route path="/cases/igra-show" element={<CasePageIgra />} />
            <Route path="/cases/transagro" element={<CasePageTransagro />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
