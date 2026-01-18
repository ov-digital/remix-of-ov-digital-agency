import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, ArrowLeft } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-background">
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
              Блог
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Полезные материалы о digital-разработке, маркетинге и автоматизации бизнес-процессов
            </p>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="pb-16">
          <div className="section-container">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts.map((post) => (
                <Link
                  key={post.id}
                  to={`/blog/${post.slug}`}
                  className="group block"
                >
                  <article className="bg-card rounded-xl overflow-hidden card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                    
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                      
                      <h2 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-muted-foreground text-sm mb-4 flex-1">{post.excerpt}</p>
                      
                      <Button variant="ghost" size="sm" className="p-0 h-auto text-primary self-start">
                        Читать статью
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Button>
                    </div>
                  </article>
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
                Нужна помощь с проектом?
              </h2>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                Обсудим ваши задачи и найдем оптимальное решение для вашего бизнеса
              </p>
              <Link to="/#contacts">
                <Button size="lg" className="rounded-full">
                  Связаться с нами
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

export default BlogPage;
