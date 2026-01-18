import { ExternalLink, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import caseImage1 from "@/assets/case-147pacific-preview.jpg";
import caseImage3 from "@/assets/case-igra-preview.jpg";
import caseImage4 from "@/assets/case-transagro-preview.jpg";
import bitrixLogo from "@/assets/bitrix-logo.svg";
import FishingWeekendPreview from "./cases/FishingWeekendPreview";

const cases = [
  {
    title: "147pacific.com",
    subtitle: "Интернет-магазин на headless eCommerce",
    description: "Интернет-магазин на headless eCommerce, кастомные интеграции, оплата и логистика",
    url: "https://147pacific.com/",
    casePage: "/cases/147pacific",
    image: caseImage1,
    bgColor: "bg-gradient-to-br from-cyan-400 to-blue-500",
    techIcons: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    ],
  },
  {
    title: "Fishing Weekend",
    subtitle: "Интернет-магазин рыболовных товаров",
    description: "Корпоративный сайт с каталогом и 1С интеграцией",
    url: "https://fishing-weekend.ru/",
    casePage: "/cases/fishing-weekend",
    image: null,
    customPreview: FishingWeekendPreview,
    bgColor: "bg-gradient-to-br from-sky-400 to-blue-600",
    techIcons: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
      bitrixLogo,
    ],
  },
  {
    title: "Igra.show",
    subtitle: "Промо-сайт развлекательного шоу",
    description: "Промо-сайт с кастомным дизайном",
    url: "https://igra.show",
    casePage: "/cases/igra-show",
    image: caseImage3,
    bgColor: "bg-gradient-to-br from-orange-400 to-amber-500",
    techIcons: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
    ],
  },
  {
    title: "Транс Агро",
    subtitle: "Каталог минеральных удобрений",
    description: "Корпоративный сайт поставщика минеральных удобрений",
    url: "https://transagro.bxdemo.ru/",
    casePage: "/cases/transagro",
    image: caseImage4,
    bgColor: "bg-gradient-to-br from-green-500 to-lime-600",
    techIcons: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
      bitrixLogo,
    ],
  },
];

export const CasesSection = () => {
  // Show only first 4 cases on homepage
  const displayedCases = cases.slice(0, 4);

  return (
    <section id="cases" className="section-padding bg-card">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            Портфолио
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Примеры реализованных проектов для бизнеса
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {displayedCases.map((caseItem) => (
            <Link
              key={caseItem.title}
              to={caseItem.casePage}
              className="group block"
            >
              {/* Card with image preview */}
              <div className="rounded-2xl overflow-hidden relative transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                {/* Full preview image or custom component */}
                <div className="relative aspect-[16/9]">
                  {caseItem.customPreview ? (
                    (() => {
                      const CustomPreview = caseItem.customPreview;
                      return <CustomPreview />;
                    })()
                  ) : (
                    <img
                      src={caseItem.image!}
                      alt={caseItem.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  )}
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Title overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                    <h3 className="text-white font-bold text-lg md:text-xl drop-shadow-md">
                      {caseItem.title}
                    </h3>
                  </div>
                </div>
                
                {/* Bottom bar with URL and tech icons */}
                <div className="bg-card p-4 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <span className="truncate max-w-[150px] md:max-w-[200px]">
                      {caseItem.url.replace('https://', '').replace('/', '')}
                    </span>
                    <ExternalLink className="w-4 h-4 flex-shrink-0" />
                  </div>
                  
                  <div className="flex items-center gap-2">
                    {caseItem.techIcons.map((icon, index) => (
                      <div 
                        key={index} 
                        className="w-7 h-7 bg-muted rounded-full p-1.5 flex items-center justify-center"
                      >
                        <img 
                          src={icon} 
                          alt="Technology" 
                          className="w-full h-full object-contain"
                          loading="lazy"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Title below card */}
              <h4 className="mt-4 font-semibold text-foreground group-hover:text-primary transition-colors">
                {caseItem.subtitle}
              </h4>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-10">
          <Link to="/portfolio">
            <Button variant="outline" size="lg" className="rounded-full">
              Все работы
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
