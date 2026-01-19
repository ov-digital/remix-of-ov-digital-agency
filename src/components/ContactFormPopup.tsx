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
import { Send, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { toast } from "sonner";
import { submitContactForm, validateCaptcha, type ContactFormData } from "@/lib/form-handler";

interface ContactFormPopupProps {
  children: React.ReactNode;
  className?: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export const ContactFormPopup = ({ children, className }: ContactFormPopupProps) => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [consent, setConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateField = (name: string, value: string): string | undefined => {
    switch (name) {
      case "name":
        if (!value.trim()) return "Введите ваше имя";
        if (value.trim().length < 2) return "Имя должно быть не менее 2 символов";
        return undefined;
      case "email":
        if (!value.trim()) return "Введите email";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return "Введите корректный email";
        return undefined;
      case "phone":
        if (value && !/^[\d\s\-\+\(\)]+$/.test(value)) return "Введите корректный телефон";
        return undefined;
      case "message":
        if (!value.trim()) return "Введите сообщение";
        if (value.trim().length < 10) return "Сообщение должно быть не менее 10 символов";
        return undefined;
      default:
        return undefined;
    }
  };

  const handleChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
    if (touched[name]) {
      setErrors(prev => ({ ...prev, [name]: validateField(name, value) }));
    }
  };

  const handleBlur = (name: string) => {
    setTouched(prev => ({ ...prev, [name]: true }));
    setErrors(prev => ({ ...prev, [name]: validateField(name, formData[name as keyof ContactFormData] || "") }));
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {
      name: validateField("name", formData.name),
      email: validateField("email", formData.email),
      phone: validateField("phone", formData.phone || ""),
      message: validateField("message", formData.message),
    };
    setErrors(newErrors);
    setTouched({ name: true, email: true, phone: true, message: true });
    return !Object.values(newErrors).some(Boolean);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast.error("Пожалуйста, исправьте ошибки в форме");
      return;
    }
    
    if (!consent) {
      toast.error("Необходимо дать согласие на обработку персональных данных");
      return;
    }
    
    setIsSubmitting(true);

    try {
      const captchaResult = await validateCaptcha();
      if (!captchaResult.isValid) {
        toast.error("Проверка капчи не пройдена. Попробуйте снова.");
        setIsSubmitting(false);
        return;
      }

      const result = await submitContactForm(formData, captchaResult.token);

      if (result.success) {
        setIsSuccess(true);
        toast.success("🎉 Спасибо! Ваша заявка принята. Мы свяжемся с вами в течение 24 часов.");
        setFormData({ name: "", email: "", phone: "", message: "" });
        setConsent(false);
        setErrors({});
        setTouched({});
        setTimeout(() => {
          setIsSuccess(false);
          setOpen(false);
        }, 2000);
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      toast.error("Ошибка соединения. Проверьте интернет или напишите нам в Telegram.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const InputWithError = ({ name, type = "text", placeholder, maxLength, required = false }: {
    name: keyof ContactFormData;
    type?: string;
    placeholder: string;
    maxLength: number;
    required?: boolean;
  }) => (
    <div className="space-y-1">
      <Input
        type={type}
        placeholder={placeholder}
        value={formData[name]}
        onChange={(e) => handleChange(name, e.target.value)}
        onBlur={() => handleBlur(name)}
        required={required}
        maxLength={maxLength}
        className={errors[name] && touched[name] ? "border-destructive focus-visible:ring-destructive" : ""}
      />
      {errors[name] && touched[name] && (
        <p className="text-xs text-destructive flex items-center gap-1">
          <AlertCircle className="w-3 h-3" />
          {errors[name]}
        </p>
      )}
    </div>
  );

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
          <InputWithError 
            name="name" 
            placeholder="Ваше имя *" 
            maxLength={100} 
            required 
          />
          <InputWithError 
            name="email" 
            type="email" 
            placeholder="Email (например: ivan@company.ru) *" 
            maxLength={255} 
            required 
          />
          <InputWithError 
            name="phone" 
            type="tel" 
            placeholder="Телефон (например: +7 978 123-45-67)" 
            maxLength={20} 
          />
          <div className="space-y-1">
            <Textarea
              placeholder="Расскажите о вашем проекте: какие задачи нужно решить? *"
              value={formData.message}
              onChange={(e) => handleChange("message", e.target.value)}
              onBlur={() => handleBlur("message")}
              rows={4}
              required
              maxLength={1000}
              className={errors.message && touched.message ? "border-destructive focus-visible:ring-destructive" : ""}
            />
            {errors.message && touched.message && (
              <p className="text-xs text-destructive flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                {errors.message}
              </p>
            )}
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
