import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowLeft } from "lucide-react";
import { getBlogPostBySlug } from "@/data/blogPosts";
import { PageMeta } from "@/components/PageMeta";

const BlogArticlePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPostBySlug(slug) : undefined;

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-24 pb-16">
          <div className="section-container text-center">
            <h1 className="text-3xl font-bold mb-4">Статья не найдена</h1>
            <p className="text-muted-foreground mb-8">
              К сожалению, запрашиваемая статья не существует.
            </p>
            <Link to="/blog">
              <Button>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Вернуться в блог
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const renderContent = (content: string) => {
    return content.split('\n').map((line, i) => {
      // Skip H1 in content since we already have H1 in the header
      if (line.startsWith('# ')) {
        return null;
      } else if (line.startsWith('## ')) {
        return <h2 key={i} className="text-xl md:text-2xl font-semibold mt-8 mb-4">{line.slice(3)}</h2>;
      } else if (line.startsWith('### ')) {
        return <h3 key={i} className="text-lg font-semibold mt-6 mb-3">{line.slice(4)}</h3>;
      } else if (line.startsWith('- **')) {
        const match = line.match(/- \*\*(.+?)\*\* — (.+)/);
        if (match) {
          return <p key={i} className="ml-4 mb-2"><strong>{match[1]}</strong> — {match[2]}</p>;
        }
        return <p key={i} className="ml-4 mb-2">{line.slice(2)}</p>;
      } else if (line.startsWith('- ')) {
        return <p key={i} className="ml-4 mb-2">• {line.slice(2)}</p>;
      } else if (line.startsWith('**')) {
        return <p key={i} className="font-semibold mt-4 mb-2">{line.replace(/\*\*/g, '')}</p>;
      } else if (line.trim()) {
        return <p key={i} className="mb-4 text-muted-foreground leading-relaxed">{line}</p>;
      }
      return null;
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <PageMeta 
        title={post.title} 
        description={post.excerpt}
      />
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-24 pb-8 md:pt-32 md:pb-12">
          <div className="section-container">
            <Link 
              to="/blog" 
              className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Вернуться в блог
            </Link>

            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
              <Calendar className="w-4 h-4" />
              <span>{post.date}</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              {post.title}
            </h1>

            <p className="text-lg text-muted-foreground max-w-2xl">
              {post.excerpt}
            </p>
          </div>
        </section>

        {/* Featured Image */}
        <section className="pb-8">
          <div className="section-container">
            <div className="rounded-2xl overflow-hidden">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full aspect-video object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="pb-16">
          <div className="section-container">
            <article className="max-w-3xl mx-auto prose prose-lg">
              {renderContent(post.content)}
            </article>
          </div>
        </section>

        {/* CTA Section */}
        <section className="pb-16">
          <div className="section-container">
            <div className="bg-primary/5 rounded-2xl p-8 md:p-12 text-center max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Нужна помощь с проектом?
              </h2>
              <p className="text-muted-foreground mb-6">
                Обсудим ваши задачи и найдем оптимальное решение
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

export default BlogArticlePage;
