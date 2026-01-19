import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Globe, 
  Palette, 
  Smartphone, 
  Search, 
  Settings, 
  MessageSquare, 
  Cpu,
  Server
} from "lucide-react";
import { ContactFormPopup } from "@/components/ContactFormPopup";

const services = [
  {
    icon: Globe,
    title: "Разработка веб-проектов",
    description: "Сайты, интернет-магазины, корпоративные порталы, веб-сервисы любой сложности",
    price: "от 150 000 ₽",
    link: "/services/web-development",
  },
  {
    icon: Palette,
    title: "Веб-дизайн",
    description: "UI/UX дизайн сайтов и мобильных приложений, прототипирование, фирменный стиль",
    price: "от 50 000 ₽",
    link: "/services/web-design",
  },
  {
    icon: Smartphone,
    title: "Мобильные приложения",
    description: "Кроссплатформенные приложения на React Native и Flutter для iOS и Android",
    price: "от 300 000 ₽",
    link: "/services/mobile-apps",
  },
  {
    icon: Server,
    title: "DevOps и инфраструктура",
    description: "Настройка серверов, Docker, Kubernetes, CI/CD, облачная архитектура",
    price: "от 100 000 ₽",
    link: "/services/devops",
  },
  {
    icon: Search,
    title: "SEO и контекстная реклама",
    description: "Комплексное продвижение сайтов, настройка рекламных кампаний, аналитика",
    price: "от 30 000 ₽/мес",
    link: "/services/seo",
  },
  {
    icon: Settings,
    title: "CRM и автоматизация",
    description: "Внедрение и настройка Bitrix24, AmoCRM, интеграции с внешними сервисами",
    price: "от 80 000 ₽",
    link: "/services/crm",
  },
  {
    icon: MessageSquare,
    title: "Telegram-решения",
    description: "Telegram-боты, Mini Apps, интеграции с CRM и платежными системами",
    price: "от 50 000 ₽",
    link: "/services/telegram",
  },
  {
    icon: Cpu,
    title: "Blockchain / Web3 / AI",
    description: "Смарт-контракты, DeFi-проекты, AI-решения, чат-боты с ИИ",
    price: "от 200 000 ₽",
    link: "/services/blockchain-ai",
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="section-padding">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            Услуги
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Полный цикл разработки digital-продуктов — от идеи до запуска и поддержки. Помогаем бизнесу в Луганске, Москве, СПб и по всей России
          </p>
          <div className="mt-4 inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
            <span>Почасовая ставка: 2 750 ₽ / час</span>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-card rounded-xl p-6 card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                <service.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              
              <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-sm mb-4 flex-grow">{service.description}</p>
              
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-border">
                <span className="font-semibold text-primary">{service.price}</span>
                <Button variant="ghost" size="sm" asChild>
                  <Link to={service.link}>Подробнее →</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA после секции */}
        <div className="text-center mt-10">
          <ContactFormPopup>
            <Button variant="outline" size="lg" className="rounded-full">
              Узнать стоимость для вашего проекта
            </Button>
          </ContactFormPopup>
        </div>
      </div>
    </section>
  );
};
