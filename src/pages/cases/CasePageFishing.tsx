import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import caseImage from "@/assets/case-fishing.jpg";

const CasePageFishing = () => {
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
                    1С-Битрикс
                  </span>
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                  Fishing Weekend
                </h1>
                <p className="text-lg text-muted-foreground mb-6">
                  Корпоративный сайт магазина рыболовных товаров с каталогом продукции и интеграцией с 1С
                </p>
                <Button asChild size="lg">
                  <a href="https://fishing-weekend.ru/" target="_blank" rel="noopener noreferrer">
                    Посетить сайт
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </div>
              
              <div className="rounded-xl overflow-hidden shadow-2xl">
                <img 
                  src={caseImage} 
                  alt="Fishing Weekend" 
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
                  Создать современный корпоративный сайт для магазина рыболовных товаров с удобным 
                  каталогом продукции, системой фильтрации и полной интеграцией с учетной системой 1С 
                  для автоматической синхронизации товаров, цен и остатков.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Решение</h3>
                <p className="text-muted-foreground">
                  Разработали сайт на платформе 1С-Битрикс, которая обеспечивает нативную интеграцию 
                  с 1С и богатые возможности для электронной коммерции. Создали удобный каталог с 
                  многоуровневой фильтрацией и быстрым поиском.
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
                "Разработка на 1С-Битрикс",
                "Интеграция с 1С:Предприятие",
                "Каталог с умной фильтрацией",
                "Система поиска товаров",
                "Корзина и оформление заказов",
                "Личный кабинет покупателя",
                "Адаптивный дизайн",
                "SEO-оптимизация",
                "Обучение персонала",
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
              {["1С-Битрикс", "PHP", "MySQL", "JavaScript", "1С:Предприятие", "REST API"].map((tech) => (
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
              Разработаем корпоративный сайт или интернет-магазин на 1С-Битрикс с интеграцией с вашей 1С
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

export default CasePageFishing;
