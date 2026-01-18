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
    <section className="pt-24 md:pt-32 pb-16 md:pb-24 relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        {/* Large gradient orb - top right */}
        <div 
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-60"
          style={{
            background: 'radial-gradient(circle, rgba(99,102,241,0.15) 0%, rgba(59,130,246,0.1) 40%, transparent 70%)'
          }}
        />
        
        {/* Medium gradient orb - bottom left */}
        <div 
          className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full opacity-60"
          style={{
            background: 'radial-gradient(circle, rgba(139,92,246,0.15) 0%, rgba(99,102,241,0.1) 40%, transparent 70%)'
          }}
        />
        
        {/* Subtle grid pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.15]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#6366f1" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
        
        {/* Floating dots */}
        <div className="absolute top-24 left-[15%] w-3 h-3 bg-primary/40 rounded-full" />
        <div className="absolute top-40 right-[20%] w-2 h-2 bg-blue-500/50 rounded-full" />
        <div className="absolute bottom-24 left-[25%] w-4 h-4 bg-purple-400/30 rounded-full" />
        <div className="absolute top-1/2 right-[15%] w-2 h-2 bg-indigo-400/40 rounded-full" />
        <div className="absolute bottom-40 right-[30%] w-3 h-3 bg-blue-400/30 rounded-full" />
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
