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
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Large gradient circle - top right */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-gradient-to-br from-primary/20 to-blue-500/20 rounded-full blur-3xl" />
        
        {/* Medium gradient circle - bottom left */}
        <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-gradient-to-tr from-purple-500/15 to-primary/15 rounded-full blur-3xl" />
        
        {/* Small accent circle - center right */}
        <div className="absolute top-1/2 right-10 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl" />
        
        {/* Grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(to right, currentColor 1px, transparent 1px),
              linear-gradient(to bottom, currentColor 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />
        
        {/* Floating decorative shapes */}
        <div className="absolute top-40 left-10 w-3 h-3 bg-primary/30 rounded-full animate-pulse" />
        <div className="absolute top-60 right-20 w-2 h-2 bg-blue-500/40 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-40 left-1/4 w-4 h-4 bg-purple-500/20 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
        
        {/* Diagonal line accents */}
        <div className="absolute top-20 left-1/3 w-24 h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent rotate-45" />
        <div className="absolute bottom-32 right-1/3 w-32 h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent -rotate-45" />
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
