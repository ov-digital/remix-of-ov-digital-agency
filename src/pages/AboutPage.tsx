import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import { ContactFormPopup } from "@/components/ContactFormPopup";
import { Button } from "@/components/ui/button";
import { Users, Heart, Lightbulb, Target, CheckCircle2, ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { PageMeta } from "@/components/PageMeta";

const AboutPage = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: storyRef, isVisible: storyVisible } = useScrollAnimation();
  const { ref: valuesRef, isVisible: valuesVisible } = useScrollAnimation();
  const { ref: whyRef, isVisible: whyVisible } = useScrollAnimation();

  return (
    <div className="min-h-screen bg-background">
      <PageMeta 
        title="О компании" 
        description="OV Digital Agency — команда профессионалов с 10+ летним опытом. Создаём сайты, мобильные приложения и CRM-системы."
      />
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section 
          ref={heroRef}
          className={`section-padding bg-gradient-to-br from-primary/5 via-purple-500/5 to-background transition-all duration-700 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="section-container">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-6">
                <Users className="w-4 h-4" />
                <span className="text-sm font-medium">О компании</span>
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">OV</span> — это Олеся и Владислав
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                Мы — команда профессионалов, которые превращают идеи в работающие digital-решения. 
                Наше название — это инициалы основателей, объединённых общей страстью к технологиям.
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section 
          ref={storyRef}
          className={`section-padding transition-all duration-700 delay-100 ${storyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Наша история</h2>
                
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    <strong className="text-foreground">OV Digital Agency</strong> появилась из простой идеи — 
                    создавать качественные digital-продукты, которые действительно помогают бизнесу расти.
                  </p>
                  
                  <p>
                    <strong className="text-foreground">Олеся</strong> отвечает за дизайн, клиентский сервис и 
                    управление проектами. Её внимание к деталям и понимание потребностей клиентов помогают 
                    создавать решения, которые не только красиво выглядят, но и эффективно работают.
                  </p>
                  
                  <p>
                    <strong className="text-foreground">Владислав</strong> — технический директор и ведущий 
                    разработчик. Более 10 лет опыта в создании сложных веб-систем, от интернет-магазинов 
                    до корпоративных порталов и мобильных приложений.
                  </p>
                  
                  <p>
                    Вместе мы собрали команду единомышленников и успешно реализовали десятки проектов 
                    для бизнеса по всей России.
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-2xl p-8 md:p-12">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-4xl md:text-5xl font-bold text-primary mb-2">10+</div>
                      <div className="text-sm text-muted-foreground">Лет опыта</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl md:text-5xl font-bold text-primary mb-2">50+</div>
                      <div className="text-sm text-muted-foreground">Проектов</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl md:text-5xl font-bold text-primary mb-2">30+</div>
                      <div className="text-sm text-muted-foreground">Клиентов</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl md:text-5xl font-bold text-primary mb-2">5</div>
                      <div className="text-sm text-muted-foreground">Специалистов</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section 
          ref={valuesRef}
          className={`section-padding bg-card transition-all duration-700 delay-200 ${valuesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="section-container">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Наши ценности</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-background rounded-xl p-6 text-center">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Качество</h3>
                <p className="text-muted-foreground text-sm">
                  Мы не гонимся за количеством. Каждый проект получает максимум внимания и заботы.
                </p>
              </div>
              
              <div className="bg-background rounded-xl p-6 text-center">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Инновации</h3>
                <p className="text-muted-foreground text-sm">
                  Используем современные технологии и следим за трендами индустрии.
                </p>
              </div>
              
              <div className="bg-background rounded-xl p-6 text-center">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Результат</h3>
                <p className="text-muted-foreground text-sm">
                  Ориентируемся на бизнес-цели клиента, а не просто выполняем техническое задание.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Us Section */}
        <section 
          ref={whyRef}
          className={`section-padding transition-all duration-700 delay-300 ${whyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="section-container">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Почему выбирают нас</h2>
              
              <div className="space-y-4">
                {[
                  "Работаем официально как ИП с полным документооборотом",
                  "Прозрачное ценообразование — почасовая или фикс-прайс модель",
                  "Собственная команда разработчиков без аутсорса",
                  "Поддержка и развитие проектов после запуска",
                  "Опыт работы с крупными брендами и стартапами",
                  "Гибкий подход — от небольших доработок до комплексных решений",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-card rounded-lg">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              
              <div className="text-center mt-12">
                <ContactFormPopup>
                  <Button size="lg" className="group">
                    Обсудить проект
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </ContactFormPopup>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutPage;
