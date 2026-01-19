/**
 * Prerender Script для генерации статического HTML
 * 
 * Этот скрипт используется vite-prerender-plugin для генерации
 * статических HTML-страниц при сборке проекта.
 * 
 * Для добавления новых страниц:
 * 1. Добавьте маршрут в src/App.tsx
 * 2. Добавьте путь в массив ROUTES ниже (если страница не связана ссылками с других страниц)
 */

import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Routes, Route } from "react-router-dom";

// Eager imports for prerendering (all pages must be imported directly)
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AboutPage from "./pages/AboutPage";
import BlogPage from "./pages/BlogPage";
import BlogArticlePage from "./pages/blog/BlogArticlePage";
import PortfolioPage from "./pages/PortfolioPage";
import WebDevelopmentPage from "./pages/services/WebDevelopmentPage";
import WebDesignPage from "./pages/services/WebDesignPage";
import MobileAppsPage from "./pages/services/MobileAppsPage";
import SeoPage from "./pages/services/SeoPage";
import CrmPage from "./pages/services/CrmPage";
import TelegramPage from "./pages/services/TelegramPage";
import BlockchainAiPage from "./pages/services/BlockchainAiPage";
import DevOpsPage from "./pages/services/DevOpsPage";
import CasePage147Pacific from "./pages/cases/CasePage147Pacific";
import CasePageFishing from "./pages/cases/CasePageFishing";
import CasePageIgra from "./pages/cases/CasePageIgra";
import CasePageTransagro from "./pages/cases/CasePageTransagro";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";

// Данные для мета-тегов каждой страницы
import { blogPosts } from "./data/blogPosts";

/**
 * Все маршруты для prerendering
 * 
 * ВАЖНО: При добавлении новой страницы добавьте её путь сюда
 */
const ROUTES = [
  // Main pages
  "/",
  "/about",
  "/blog",
  "/portfolio",
  "/privacy-policy",
  
  // Services
  "/services/web-development",
  "/services/web-design",
  "/services/mobile-apps",
  "/services/seo",
  "/services/crm",
  "/services/telegram",
  "/services/blockchain-ai",
  "/services/devops",
  
  // Cases
  "/cases/147pacific",
  "/cases/fishing-weekend",
  "/cases/igra-show",
  "/cases/transagro",
  
  // Blog posts (динамически из данных)
  ...blogPosts.map(post => `/blog/${post.slug}`),
];

// Мета-данные для каждой страницы
interface PageMeta {
  title: string;
  description: string;
  ogImage?: string;
}

const PAGE_META: Record<string, PageMeta> = {
  "/": {
    title: "OV Digital Agency - создаём сайты и digital-продукты под ключ. Дизайн, разработка, автоматизация.",
    description: "Создаём сайты, интернет-магазины, мобильные приложения, CRM и Telegram-боты под ключ. 10+ лет опыта. Дизайн, разработка, автоматизация бизнес-процессов.",
  },
  "/about": {
    title: "О компании | OV Digital Agency",
    description: "Узнайте больше о нашей команде и подходе к работе. 10+ лет опыта в digital-разработке.",
  },
  "/blog": {
    title: "Блог | OV Digital Agency",
    description: "Полезные статьи о веб-разработке, SEO, автоматизации бизнеса и digital-маркетинге.",
  },
  "/portfolio": {
    title: "Портфолио | OV Digital Agency",
    description: "Наши лучшие проекты: сайты, интернет-магазины, мобильные приложения и CRM-системы.",
  },
  "/privacy-policy": {
    title: "Политика конфиденциальности | OV Digital Agency",
    description: "Политика обработки персональных данных OV Digital Agency.",
  },
  "/services/web-development": {
    title: "Разработка сайтов | OV Digital Agency",
    description: "Создаём современные сайты и веб-приложения на React, 1С-Битрикс, WordPress. От лендинга до enterprise-портала.",
  },
  "/services/web-design": {
    title: "Дизайн сайтов | OV Digital Agency",
    description: "UI/UX дизайн сайтов и мобильных приложений. Современный подход, удобство для пользователей.",
  },
  "/services/mobile-apps": {
    title: "Мобильные приложения | OV Digital Agency",
    description: "Разработка мобильных приложений для iOS и Android. React Native, Flutter, нативная разработка.",
  },
  "/services/seo": {
    title: "SEO-продвижение | OV Digital Agency",
    description: "Комплексное SEO-продвижение сайтов в Яндекс и Google. Аудит, оптимизация, контент-маркетинг.",
  },
  "/services/crm": {
    title: "CRM и автоматизация | OV Digital Agency",
    description: "Внедрение CRM-систем и автоматизация бизнес-процессов. Bitrix24, AmoCRM, 1С.",
  },
  "/services/telegram": {
    title: "Telegram-боты и Mini Apps | OV Digital Agency",
    description: "Разработка Telegram-ботов и Mini Apps для бизнеса. Автоматизация, продажи, клиентский сервис.",
  },
  "/services/blockchain-ai": {
    title: "Blockchain и AI решения | OV Digital Agency",
    description: "Разработка решений на базе блокчейн и искусственного интеллекта для бизнеса.",
  },
  "/services/devops": {
    title: "DevOps и инфраструктура | OV Digital Agency",
    description: "DevOps-услуги: CI/CD, Docker, Kubernetes, облачная инфраструктура, мониторинг.",
  },
  "/cases/147pacific": {
    title: "Кейс 147 Pacific | OV Digital Agency",
    description: "Разработка сайта для ресторана 147 Pacific. Современный дизайн, интеграция бронирования.",
  },
  "/cases/fishing-weekend": {
    title: "Кейс Fishing Weekend | OV Digital Agency",
    description: "Создание сайта для рыболовного клуба. Каталог услуг, онлайн-бронирование.",
  },
  "/cases/igra-show": {
    title: "Кейс IGRA Show | OV Digital Agency",
    description: "Разработка сайта для шоу-проекта IGRA. Анимации, интерактивные элементы.",
  },
  "/cases/transagro": {
    title: "Кейс ТрансАгро | OV Digital Agency",
    description: "Корпоративный сайт для транспортной компании ТрансАгро. Каталог услуг, формы заявок.",
  },
};

// Добавляем мета-данные для блог-постов
blogPosts.forEach(post => {
  PAGE_META[`/blog/${post.slug}`] = {
    title: `${post.title} | OV Digital Agency`,
    description: post.excerpt,
  };
});

/**
 * Prerender App - версия приложения для SSR
 * Без lazy loading и browser-only компонентов
 */
const PrerenderApp = ({ url }: { url: string }) => {
  const queryClient = new QueryClient();
  
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <StaticRouter location={url}>
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
            <Route path="*" element={<NotFound />} />
          </Routes>
        </StaticRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

/**
 * Функция prerender, вызываемая плагином при сборке
 */
export async function prerender(data: { url: string }) {
  const { url } = data;
  
  // Получаем мета-данные для текущей страницы
  const meta = PAGE_META[url] || PAGE_META["/"];
  
  // Рендерим React в строку HTML
  const html = renderToString(<PrerenderApp url={url} />);
  
  // Возвращаем HTML и мета-данные
  return {
    html,
    // Дополнительные маршруты для prerender (плагин их автоматически найдёт по ссылкам)
    links: new Set(ROUTES),
    // Мета-данные для <head>
    head: {
      lang: "ru",
      title: meta.title,
      elements: new Set([
        { type: "meta", props: { name: "description", content: meta.description } },
        { type: "meta", props: { property: "og:title", content: meta.title } },
        { type: "meta", props: { property: "og:description", content: meta.description } },
        { type: "meta", props: { property: "og:url", content: `https://ov-digital.ru${url}` } },
        { type: "meta", props: { property: "og:type", content: "website" } },
        { type: "meta", props: { property: "og:locale", content: "ru_RU" } },
        { type: "meta", props: { property: "og:site_name", content: "OV Digital Agency" } },
        { type: "meta", props: { property: "og:image", content: meta.ogImage || "https://ov-digital.ru/og-image.png" } },
        { type: "meta", props: { name: "twitter:card", content: "summary_large_image" } },
        { type: "meta", props: { name: "twitter:title", content: meta.title } },
        { type: "meta", props: { name: "twitter:description", content: meta.description } },
        { type: "meta", props: { name: "twitter:image", content: meta.ogImage || "https://ov-digital.ru/og-image.png" } },
        { type: "link", props: { rel: "canonical", href: `https://ov-digital.ru${url}` } },
      ]),
    },
  };
}

// Экспорт маршрутов для использования в других местах
export { ROUTES };
