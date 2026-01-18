import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import caseImage from "@/assets/case-igra-preview.jpg";

const CasePageIgra = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-20">
        {/* Hero */}
        <section className="section-padding bg-card">
          <div className="section-container">
            <Link to="/#cases" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6">
              <ArrowLeft className="w-4 h-4" />
              Назад к портфолио
            </Link>
            
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    WordPress
                  </span>
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                  Igra.show
                </h1>
                <p className="text-lg text-muted-foreground mb-6">
                  Сайт-портфолио концертного агентства с 20-летним опытом организации туров и шоу по России. Более 765 проведённых мероприятий.
                </p>
                <Button asChild size="lg">
                  <a href="https://igra.show" target="_blank" rel="noopener noreferrer">
                    Посетить сайт
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </div>
              
              <div className="rounded-xl overflow-hidden shadow-2xl">
                <img 
                  src={caseImage} 
                  alt="Igra.show" 
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
                  Создать представительский сайт для концертного агентства, которое организует туры 
                  звёзд российской эстрады (Григорий Лепс, Любэ, Сергей Лазарев и др.). Требовалась 
                  афиша мероприятий, портфолио артистов и форма букинга.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Решение</h3>
                <p className="text-muted-foreground">
                  Разработали эффектный сайт с яркими визуальными решениями, передающими атмосферу 
                  концертных шоу. Реализовали удобную афишу предстоящих мероприятий, галерею артистов 
                  и систему заявок на организацию концертов.
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
                "Эффектный креативный дизайн",
                "Афиша предстоящих событий",
                "Каталог артистов с портфолио",
                "Форма букинга и заказа",
                "Галерея фото и видео",
                "Интеграция с соцсетями",
                "Адаптивная верстка",
                "SEO-оптимизация",
                "Административная панель",
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
              {["WordPress", "PHP", "JavaScript", "GSAP", "CSS3 Animations", "MySQL"].map((tech) => (
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
              Создадим яркий сайт для концертного агентства, артиста или мероприятия
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

export default CasePageIgra;
