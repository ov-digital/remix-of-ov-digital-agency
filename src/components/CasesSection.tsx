import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import caseImage1 from "@/assets/case-147pacific.jpg";
import caseImage2 from "@/assets/case-fishing.jpg";
import caseImage3 from "@/assets/case-igra.jpg";
import caseImage4 from "@/assets/case-transagro.jpg";

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
    subtitle: "Корпоративный сайт для рыболовной базы",
    description: "Корпоративный сайт с каталогом и 1С интеграцией",
    url: "https://fishing-weekend.ru/",
    casePage: "/cases/fishing-weekend",
    image: caseImage2,
    bgColor: "bg-gradient-to-br from-green-400 to-emerald-600",
    techIcons: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/1C_Company_logo.svg/200px-1C_Company_logo.svg.png",
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
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/1C_Company_logo.svg/200px-1C_Company_logo.svg.png",
    ],
  },
];

export const CasesSection = () => {
  return (
    <section id="cases" className="section-padding bg-card">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            Кейсы
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Примеры реализованных проектов для бизнеса и digital-студий
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {cases.map((caseItem) => (
            <Link
              key={caseItem.title}
              to={caseItem.casePage}
              className="group block"
            >
              {/* Card with colored background */}
              <div className={`${caseItem.bgColor} rounded-2xl p-4 md:p-6 relative overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl`}>
                {/* Logo/Title at top */}
                <div className="mb-4">
                  <h3 className="text-white font-bold text-lg md:text-xl drop-shadow-md">
                    {caseItem.title}
                  </h3>
                </div>
                
                {/* Screenshot mockup */}
                <div className="relative">
                  <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
                    <img
                      src={caseItem.image}
                      alt={caseItem.title}
                      className="w-full aspect-[16/10] object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                </div>
                
                {/* Bottom bar with URL and tech icons */}
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-white/90 text-sm">
                    <span className="truncate max-w-[150px] md:max-w-[200px]">
                      {caseItem.url.replace('https://', '').replace('/', '')}
                    </span>
                    <ExternalLink className="w-4 h-4 flex-shrink-0" />
                  </div>
                  
                  <div className="flex items-center gap-2">
                    {caseItem.techIcons.map((icon, index) => (
                      <div 
                        key={index} 
                        className="w-7 h-7 bg-white rounded-full p-1.5 shadow-md flex items-center justify-center"
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
      </div>
    </section>
  );
};
