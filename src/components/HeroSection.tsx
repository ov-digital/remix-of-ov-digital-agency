import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, MapPin } from "lucide-react";
import { ContactFormPopup } from "@/components/ContactFormPopup";

const advantages = [
  "10+ лет опыта",
  "Работаем официально",
  "Гибкие модели оплаты",
  "Собственная команда",
];

export const HeroSection = () => {
  return (
    <section className="pt-24 md:pt-32 pb-16 md:pb-24">
      <div className="section-container">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-up">
            Создаём digital-продукты, которые{" "}
            <span className="gradient-text">увеличивают продажи</span> бизнеса
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-2 max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Разрабатываем решения под ключ — от идеи до запуска и поддержки
          </p>

          {/* Список услуг */}
          <p className="text-sm md:text-base text-muted-foreground/80 mb-6 animate-fade-up" style={{ animationDelay: "0.12s" }}>
            Сайты · Мобильные приложения · CRM · Автоматизация
          </p>

          {/* Микро-доверие с географией */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 mb-8 animate-fade-up" style={{ animationDelay: "0.15s" }}>
            <span className="text-sm md:text-base text-foreground font-medium">
              Работаем с компаниями по всей России
            </span>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4 text-primary" />
              <span>Луганск · Москва · Санкт-Петербург</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-3 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <ContactFormPopup>
              <Button variant="hero" size="lg">
                Получить консультацию
                <ArrowRight size={20} />
              </Button>
            </ContactFormPopup>
            <Button variant="heroOutline" size="lg" asChild>
              <a href="#cases">Смотреть примеры работ</a>
            </Button>
          </div>

          {/* Микро-текст под кнопками */}
          <p className="text-xs md:text-sm text-muted-foreground mb-10 animate-fade-up" style={{ animationDelay: "0.25s" }}>
            Ответим в течение 2 часов в рабочее время
          </p>

          {/* Advantages */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            {advantages.map((advantage) => (
              <div key={advantage} className="flex items-center gap-2 text-sm md:text-base">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">{advantage}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
