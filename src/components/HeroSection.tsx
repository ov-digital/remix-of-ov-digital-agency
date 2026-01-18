import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { ContactFormPopup } from "@/components/ContactFormPopup";

const advantages = [
  "10+ лет опыта",
  "Работаем официально (ИП)",
  "Почасовая и фикс-прайс модель",
  "Собственная команда",
];

export const HeroSection = () => {
  return (
    <section className="pt-24 md:pt-32 pb-16 md:pb-24">
      <div className="section-container">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-up">
            OV Digital Agency — разработка и внедрение{" "}
            <span className="gradient-text">digital-решений</span> для бизнеса
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Создаем сайты, интернет-магазины, корпоративные порталы, мобильные приложения, CRM и Telegram-боты. Работаем с бизнесом по всей России
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <ContactFormPopup>
              <Button variant="hero" size="lg">
                Обсудить проект
                <ArrowRight size={20} />
              </Button>
            </ContactFormPopup>
            <Button variant="heroOutline" size="lg" asChild>
              <a href="#cases">Смотреть портфолио</a>
            </Button>
          </div>

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
