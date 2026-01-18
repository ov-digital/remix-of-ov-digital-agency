import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Send, Loader2, CheckCircle } from "lucide-react";
import { toast } from "sonner";

interface ContactFormPopupProps {
  children: React.ReactNode;
  className?: string;
}

export const ContactFormPopup = ({ children, className }: ContactFormPopupProps) => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [consent, setConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const lastSubmitTime = useRef<number>(0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!consent) {
      toast.error("Необходимо дать согласие на обработку персональных данных");
      return;
    }

    // Защита от повторных отправок (минимум 30 секунд между заявками)
    const now = Date.now();
    if (now - lastSubmitTime.current < 30000) {
      toast.error("Подождите немного перед повторной отправкой");
      return;
    }
    
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/xkgwqnpj", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          message: formData.message.trim(),
          consent: "Да, пользователь дал согласие на обработку персональных данных",
          _subject: `Новая заявка от ${formData.name.trim()} - OV Digital Agency`,
        }),
      });

      if (response.ok) {
        lastSubmitTime.current = now;
        setIsSuccess(true);
        toast.success("Заявка отправлена! Мы свяжемся с вами в ближайшее время.");
        setFormData({ name: "", email: "", phone: "", message: "" });
        setConsent(false);
        setTimeout(() => {
          setIsSuccess(false);
          setOpen(false);
        }, 2000);
      } else {
        toast.error("Не удалось отправить заявку. Попробуйте написать нам в Telegram.");
      }
    } catch (error) {
      toast.error("Ошибка соединения. Проверьте интернет или напишите нам в Telegram.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild className={className}>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">Обсудить проект</DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div>
            <Input
              placeholder="Ваше имя *"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              maxLength={100}
            />
          </div>
          <div>
            <Input
              type="email"
              placeholder="Email *"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              maxLength={255}
            />
          </div>
          <div>
            <Input
              type="tel"
              placeholder="Телефон"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              maxLength={20}
            />
          </div>
          <div>
            <Textarea
              placeholder="Расскажите о вашем проекте *"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={4}
              required
              maxLength={1000}
            />
          </div>
          
          {/* Consent checkbox */}
          <div className="flex items-start space-x-3">
            <Checkbox 
              id="consent-popup" 
              checked={consent}
              onCheckedChange={(checked) => setConsent(checked === true)}
              className="mt-1"
            />
            <label htmlFor="consent-popup" className="text-xs text-muted-foreground leading-relaxed cursor-pointer">
              Я согласен(а) на обработку моих персональных данных в соответствии с{" "}
              <Link 
                to="/privacy-policy" 
                target="_blank"
                className="text-primary hover:underline"
                onClick={(e) => e.stopPropagation()}
              >
                Политикой обработки персональных данных
              </Link>
            </label>
          </div>
          
          <p className="text-xs text-muted-foreground">
            Отправляя форму, вы подтверждаете, что ознакомлены и согласны с{" "}
            <Link to="/privacy-policy" target="_blank" className="text-primary hover:underline">
              Политикой обработки персональных данных
            </Link>{" "}
            и даёте согласие на обработку ваших персональных данных в целях связи и обработки вашей заявки.
          </p>
          
          <Button 
            type="submit" 
            size="lg" 
            className={`w-full ${isSuccess ? 'bg-green-600 hover:bg-green-700' : ''}`} 
            disabled={isSubmitting || !consent}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Отправка...
              </>
            ) : isSuccess ? (
              <>
                <CheckCircle className="w-4 h-4 mr-2" />
                Отправлено!
              </>
            ) : (
              <>
                Отправить заявку
                <Send className="w-4 h-4 ml-2" />
              </>
            )}
          </Button>
          <p className="text-xs text-muted-foreground text-center">
            Или напишите нам в{" "}
            <a 
              href="https://t.me/ov_digital_agency" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Telegram
            </a>
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};
