import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import FishingWeekendPreview from "./cases/FishingWeekendPreview";
import Pacific147Preview from "./cases/Pacific147Preview";
import IgraShowPreview from "./cases/IgraShowPreview";
import TransAgroPreview from "./cases/TransAgroPreview";

const cases = [
  {
    title: "TransAgro",
    subtitle: "Интернет-каталог поставщика минеральных удобрений",
    casePage: "/cases/transagro",
    image: null,
    customPreview: TransAgroPreview,
  },
  {
    title: "147 Pacific",
    subtitle: "Интернет-магазин премиальных автомобильных аксессуаров",
    casePage: "/cases/147pacific",
    image: null,
    customPreview: Pacific147Preview,
  },
  {
    title: "Fishing Weekend",
    subtitle: "Интернет-магазин рыболовных товаров",
    casePage: "/cases/fishing-weekend",
    image: null,
    customPreview: FishingWeekendPreview,
  },
  {
    title: "Igra Show",
    subtitle: "Сайт-визитка концертного агентства Большая игра",
    casePage: "/cases/igra-show",
    image: null,
    customPreview: IgraShowPreview,
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
