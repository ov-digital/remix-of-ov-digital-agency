import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import caseImage from "@/assets/case-transagro.jpg";

const CasePageTransagro = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-20">
        {/* Hero */}
        <section className="section-padding bg-card">
          <div className="section-container">
            <Link to="/#cases" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6">
              <ArrowLeft className="w-4 h-4" />
              Назад к кейсам
            </Link>
            
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    WordPress
                  </span>
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                  Transagro
                </h1>
                <p className="text-lg text-muted-foreground mb-6">
                  Каталог запасных частей для сельскохозяйственной техники с удобным поиском и системой заказов
                </p>
                <Button asChild size="lg">
                  <a href="https://transagro.ru" target="_blank" rel="noopener noreferrer">
                    Посетить сайт
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </div>
              
              <div className="rounded-xl overflow-hidden shadow-2xl">
                <img 
                  src={caseImage} 
                  alt="Transagro" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* About Project */}
        <section className="section-padding">
          <div className="section-container">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">О проекте</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Задача</h3>
                <p className="text-muted-foreground mb-6">
                  Создать удобный онлайн-каталог запасных частей для сельскохозяйственной техники 
                  (ROPA, HOLMER, John Deere, Amazone и др.) с возможностью быстрого поиска нужных 
                  деталей и оформления заказа. Обеспечить круглосуточный доступ к каталогу для 
                  срочных ремонтов.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Решение</h3>
                <p className="text-muted-foreground">
                  Разработали каталог на WordPress с расширенной системой фильтрации по брендам, 
                  категориям и артикулам. Реализовали раздел распродаж, прайс-листы и удобные 
                  формы заказа. Оптимизировали для быстрой загрузки даже при большом ассортименте.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What Was Done */}
        <section className="section-padding bg-card">
          <div className="section-container">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">Что было сделано</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Разработка на WordPress",
                "Каталог с 10 000+ позиций",
                "Умный поиск по артикулам",
                "Фильтрация по брендам техники",
                "Раздел распродаж и акций",
                "Скачиваемые прайс-листы",
                "Формы заказа и обратной связи",
                "Адаптивный дизайн",
                "SEO-оптимизация",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-background rounded-lg">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies */}
        <section className="section-padding">
          <div className="section-container">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">Технологии</h2>
            <div className="flex flex-wrap gap-3">
              {["WordPress", "PHP", "MySQL", "JavaScript", "WooCommerce", "Elementor"].map((tech) => (
                <span 
                  key={tech}
                  className="px-4 py-2 bg-secondary rounded-lg font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-primary text-primary-foreground">
          <div className="section-container text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Нужен похожий проект?
            </h2>
            <p className="text-primary-foreground/80 mb-6 max-w-xl mx-auto">
              Разработаем каталог товаров или запчастей с удобным поиском и системой заказов
            </p>
            <Button variant="secondary" size="lg" asChild>
              <Link to="/#contacts">Обсудить проект</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CasePageTransagro;
