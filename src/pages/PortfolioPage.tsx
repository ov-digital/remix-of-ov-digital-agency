import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import FishingWeekendPreview from "@/components/cases/FishingWeekendPreview";
import Pacific147Preview from "@/components/cases/Pacific147Preview";
import IgraShowPreview from "@/components/cases/IgraShowPreview";
import TransAgroPreview from "@/components/cases/TransAgroPreview";
import { PageMeta } from "@/components/PageMeta";

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

const PortfolioPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <PageMeta 
        title="Портфолио" 
        description="Примеры реализованных проектов OV Digital Agency: интернет-магазины, корпоративные сайты, веб-приложения."
      />
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-24 pb-12 md:pt-32 md:pb-16">
          <div className="section-container">
            <Link 
              to="/" 
              className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              На главную
            </Link>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Портфолио
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Примеры реализованных проектов для бизнеса: интернет-магазины, корпоративные сайты, веб-приложения
            </p>
          </div>
        </section>

        {/* Cases Grid */}
        <section className="pb-16">
          <div className="section-container">
            <div className="grid md:grid-cols-2 gap-6">
              {cases.map((caseItem) => (
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
          </div>
        </section>

        {/* CTA Section */}
        <section className="pb-16">
          <div className="section-container">
            <div className="bg-primary/5 rounded-2xl p-8 md:p-12 text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Хотите такой же проект?
              </h2>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                Обсудим вашу задачу и предложим оптимальное решение
              </p>
              <Link to="/#contacts">
                <Button size="lg" className="rounded-full">
                  Обсудить проект
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PortfolioPage;
