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
  // Основные услуги
  {
    icon: Globe,
    title: "Разработка веб-проектов",
    description: "Создаём сайты и сервисы, которые привлекают клиентов и увеличивают продажи",
    price: "от 150 000 ₽",
    link: "/services/web-development",
    category: "main",
  },
  {
    icon: Palette,
    title: "Веб-дизайн",
    description: "Дизайн, который выделяет вас среди конкурентов и вызывает доверие клиентов",
    price: "от 50 000 ₽",
    link: "/services/web-design",
    category: "main",
  },
  {
    icon: Smartphone,
    title: "Мобильные приложения",
    description: "Приложения для iOS и Android — ваш бизнес всегда под рукой у клиента",
    price: "от 300 000 ₽",
    link: "/services/mobile-apps",
    category: "main",
  },
  {
    icon: Settings,
    title: "CRM и автоматизация",
    description: "Систематизируем продажи и освобождаем время команды от рутины",
    price: "от 80 000 ₽",
    link: "/services/crm",
    category: "main",
  },
  // Поддержка и рост
  {
    icon: Search,
    title: "SEO и контекстная реклама",
    description: "Приводим целевых клиентов из поиска и увеличиваем отдачу от рекламы",
    price: "от 30 000 ₽/мес",
    link: "/services/seo",
    category: "growth",
  },
  {
    icon: Server,
    title: "DevOps и инфраструктура",
    description: "Обеспечиваем стабильную работу сервисов 24/7 и быстрое масштабирование",
    price: "от 100 000 ₽",
    link: "/services/devops",
    category: "growth",
  },
  // Advanced
  {
    icon: MessageSquare,
    title: "Telegram-решения",
    description: "Боты и мини-приложения для продаж, поддержки и коммуникации с клиентами",
    price: "от 50 000 ₽",
    link: "/services/telegram",
    category: "advanced",
  },
  {
    icon: Cpu,
    title: "Blockchain / Web3 / AI",
    description: "Передовые технологии для бизнесов, готовых к инновациям",
    price: "от 200 000 ₽",
    link: "/services/blockchain-ai",
    category: "advanced",
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
            Помогаем бизнесу расти: автоматизируем процессы, увеличиваем продажи и создаём продукты, которые работают на вас
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
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

        {/* Пояснение к ценам */}
        <p className="text-center text-sm text-muted-foreground mt-6">
          Итоговая стоимость зависит от объёма задач, сроков и интеграций. Рассчитаем точную цену после обсуждения проекта.
        </p>

        {/* CTA после секции */}
        <div className="text-center mt-8">
          <ContactFormPopup>
            <Button variant="default" size="lg" className="rounded-full">
              Обсудить ваш проект
            </Button>
          </ContactFormPopup>
        </div>
      </div>
    </section>
  );
};
