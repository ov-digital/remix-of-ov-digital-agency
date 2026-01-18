import { useState } from "react";
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
import { Send } from "lucide-react";
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!consent) {
      toast.error("Необходимо дать согласие на обработку персональных данных");
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
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          consent: "Да, пользователь дал согласие на обработку персональных данных",
          _subject: `Новая заявка от ${formData.name} - OV Digital Agency`,
        }),
      });

      if (response.ok) {
        toast.success("Заявка отправлена! Мы свяжемся с вами в ближайшее время.");
        setFormData({ name: "", email: "", phone: "", message: "" });
        setConsent(false);
        setOpen(false);
      } else {
        toast.error("Ошибка отправки. Попробуйте написать нам в Telegram.");
      }
    } catch (error) {
      toast.error("Ошибка отправки. Попробуйте написать нам в Telegram.");
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
          
          <Button type="submit" size="lg" className="w-full" disabled={isSubmitting || !consent}>
            {isSubmitting ? "Отправка..." : "Отправить заявку"}
            <Send className="w-4 h-4 ml-2" />
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
