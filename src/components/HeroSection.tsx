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
    <section className="pt-24 md:pt-32 pb-16 md:pb-24 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        {/* Large gradient circle - top right */}
        <div className="absolute -top-20 -right-20 w-[500px] h-[500px] bg-gradient-to-br from-primary/30 to-blue-500/30 rounded-full blur-[100px]" />
        
        {/* Medium gradient circle - bottom left */}
        <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-gradient-to-tr from-purple-500/25 to-primary/25 rounded-full blur-[80px]" />
        
        {/* Small accent circle - center */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-blue-400/15 rounded-full blur-[60px]" />
        
        {/* Grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #6366f1 1px, transparent 1px),
              linear-gradient(to bottom, #6366f1 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
        
        {/* Floating decorative dots */}
        <div className="absolute top-32 left-20 w-4 h-4 bg-primary/40 rounded-full animate-pulse" />
        <div className="absolute top-48 right-32 w-3 h-3 bg-blue-500/50 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-32 left-1/4 w-5 h-5 bg-purple-500/30 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
        <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-primary/50 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="section-container relative">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-up">
            OV Digital Agency — разработка и внедрение{" "}
            <span className="gradient-text">digital-решений</span> для бизнеса
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Создаем сайты, интернет-магазины, корпоративные порталы, мобильные приложения, CRM и Telegram-боты. Работаем с бизнесом и digital-студиями по всей России
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
              <a href="#cases">Смотреть кейсы</a>
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

/* 
=== BACKUP: Original version without graphics ===
To revert, replace this file content with:

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
            Создаем сайты, интернет-магазины, корпоративные порталы, мобильные приложения, CRM и Telegram-боты. Работаем с бизнесом и digital-студиями по всей России
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <ContactFormPopup>
              <Button variant="hero" size="lg">
                Обсудить проект
                <ArrowRight size={20} />
              </Button>
            </ContactFormPopup>
            <Button variant="heroOutline" size="lg" asChild>
              <a href="#cases">Смотреть кейсы</a>
            </Button>
          </div>

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
*/
