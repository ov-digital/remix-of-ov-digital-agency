import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

const COOKIE_CONSENT_KEY = "ov_cookie_consent";

export const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      // Небольшая задержка для плавного появления
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "declined");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-in slide-in-from-bottom-5 duration-500">
      <div className="section-container">
        <div className="bg-card border rounded-xl p-4 md:p-6 card-shadow flex flex-col md:flex-row md:items-center gap-4">
          <div className="flex-1">
            <p className="text-sm text-foreground mb-1 font-medium">
              Мы используем файлы cookies
            </p>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Для улучшения работы сайта и анализа посещаемости мы используем файлы cookies. 
              Продолжая использовать сайт, вы соглашаетесь с{" "}
              <Link to="/privacy-policy" className="text-primary hover:underline">
                Политикой обработки персональных данных
              </Link>
              . Вы можете отключить cookies в настройках браузера.
            </p>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={handleDecline}
              className="text-xs"
            >
              Отклонить
            </Button>
            <Button 
              size="sm" 
              onClick={handleAccept}
              className="text-xs"
            >
              Принять
            </Button>
          </div>
          <button 
            onClick={handleDecline}
            className="absolute top-2 right-2 md:static p-1 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Закрыть"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
