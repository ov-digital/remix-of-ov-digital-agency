import { ReactNode } from "react";
import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

interface ServicePageLayoutProps {
  title: string;
  subtitle: string;
  description: string;
  price: string;
  priceNote?: string;
  features: string[];
  steps: { title: string; description: string }[];
  technologies?: string[];
  benefits: { title: string; description: string }[];
  icon: ReactNode;
}

export const ServicePageLayout = ({
  title,
  subtitle,
  description,
  price,
  priceNote,
  features,
  steps,
  technologies,
  benefits,
  icon,
}: ServicePageLayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-24 md:pt-32 pb-16 md:pb-20 bg-card">
          <div className="section-container">
            <Link 
              to="/#services" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Все услуги
            </Link>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  {icon}
                </div>
                
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
                  {title}
                </h1>
                
                <p className="text-xl text-primary font-medium mb-4">
                  {subtitle}
                </p>
                
                <p className="text-lg text-muted-foreground mb-8">
                  {description}
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" asChild>
                    <a href="#contacts">
                      Обсудить проект
                      <ArrowRight className="w-5 h-5" />
                    </a>
                  </Button>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-primary">{price}</span>
                    {priceNote && (
                      <span className="text-sm text-muted-foreground">{priceNote}</span>
                    )}
                  </div>
                </div>
              </div>

              <div className="bg-background rounded-2xl p-8 card-shadow">
                <h3 className="font-semibold text-lg mb-6">Что входит в услугу:</h3>
                <ul className="space-y-4">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Steps Section */}
        <section className="section-padding">
          <div className="section-container">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
              Этапы работы
            </h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
              Прозрачный процесс разработки с регулярной обратной связью
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((step, index) => (
                <div 
                  key={index} 
                  className="relative bg-card rounded-xl p-6 card-shadow hover:card-shadow-hover transition-all hover:-translate-y-1"
                >
                  <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                    {index + 1}
                  </div>
                  <h3 className="font-semibold text-lg mt-4 mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        {technologies && technologies.length > 0 && (
          <section className="section-padding bg-card">
            <div className="section-container">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
                Технологии
              </h2>
              <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
                Используем проверенный стек для надежных решений
              </p>

              <div className="flex flex-wrap justify-center gap-3">
                {technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-background rounded-lg text-sm font-medium card-shadow hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Benefits Section */}
        <section className={`section-padding ${technologies ? '' : 'bg-card'}`}>
          <div className="section-container">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
              Почему выбирают нас
            </h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
              Преимущества работы с OV Digital Agency
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div 
                  key={index} 
                  className="bg-card rounded-xl p-6 card-shadow hover:card-shadow-hover transition-all hover:-translate-y-1"
                >
                  <h3 className="font-semibold text-lg mb-2 text-primary">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contacts" className="section-padding bg-primary">
          <div className="section-container text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-primary-foreground">
              Готовы начать проект?
            </h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
              Свяжитесь с нами для бесплатной консультации. Обсудим задачи и предложим оптимальное решение.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <a href="https://t.me/ov_digital_agency" target="_blank" rel="noopener noreferrer">
                  Написать в Telegram
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                <a href="mailto:ov.digital.agency@gmail.com">
                  ov.digital.agency@gmail.com
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};
