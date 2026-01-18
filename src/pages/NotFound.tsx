import { Link } from "react-router-dom";
import { Home, ArrowLeft, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center">
        {/* Animated 404 */}
        <div className="relative mb-8">
          <h1 className="text-[120px] md:text-[180px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500 leading-none animate-fade-in">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <Search className="w-16 h-16 md:w-24 md:h-24 text-muted-foreground/20" />
          </div>
        </div>
        
        <h2 className="text-2xl md:text-3xl font-bold mb-4 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          Страница не найдена
        </h2>
        
        <p className="text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          К сожалению, запрашиваемая страница не существует или была перемещена. 
          Вернитесь на главную или воспользуйтесь навигацией.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <Button asChild size="lg">
            <Link to="/">
              <Home className="w-4 h-4 mr-2" />
              На главную
            </Link>
          </Button>
          
          <Button variant="outline" size="lg" onClick={() => window.history.back()}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Назад
          </Button>
        </div>
        
        {/* Quick links */}
        <div className="mt-12 pt-8 border-t border-border animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <p className="text-sm text-muted-foreground mb-4">Популярные разделы:</p>
          <div className="flex flex-wrap gap-2 justify-center">
            <Link to="/#services" className="text-sm text-primary hover:underline">Услуги</Link>
            <span className="text-muted-foreground">•</span>
            <Link to="/#cases" className="text-sm text-primary hover:underline">Кейсы</Link>
            <span className="text-muted-foreground">•</span>
            <Link to="/about" className="text-sm text-primary hover:underline">О нас</Link>
            <span className="text-muted-foreground">•</span>
            <Link to="/#contacts" className="text-sm text-primary hover:underline">Контакты</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
