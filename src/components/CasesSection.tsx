import { ExternalLink } from "lucide-react";
import caseImage1 from "@/assets/case-147pacific.jpg";
import caseImage2 from "@/assets/case-fishing.jpg";
import caseImage3 from "@/assets/case-igra.jpg";
import caseImage4 from "@/assets/case-transagro.jpg";

const cases = [
  {
    title: "147pacific.com",
    technology: "Python / Django + Saleor",
    description: "Интернет-магазин на headless eCommerce, кастомные интеграции, оплата и логистика",
    url: "https://147pacific.com/",
    image: caseImage1,
  },
  {
    title: "Fishing Weekend",
    technology: "1С-Битрикс",
    description: "Корпоративный сайт с каталогом и 1С интеграцией",
    url: "https://fishing-weekend.ru/",
    image: caseImage2,
  },
  {
    title: "Igra.show",
    technology: "WordPress",
    description: "Промо-сайт с кастомным дизайном",
    url: "https://igra.show",
    image: caseImage3,
  },
  {
    title: "Transagro",
    technology: "1С-Битрикс",
    description: "Корпоративный сайт транспортной компании",
    url: "https://transagro.bxdemo.ru/",
    image: caseImage4,
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
            <a
              key={caseItem.title}
              href={caseItem.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-background rounded-xl overflow-hidden card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1"
            >
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={caseItem.image}
                  alt={caseItem.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ExternalLink className="w-6 h-6 text-background" />
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="font-semibold text-lg">{caseItem.title}</h3>
                  <span className="px-2 py-0.5 bg-primary/10 text-primary rounded text-xs font-medium">
                    {caseItem.technology}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm">{caseItem.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
