import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Mail, Phone, Send, CheckCircle, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { submitContactForm, validateCaptcha, type ContactFormData } from "@/lib/form-handler";

export const ContactsSection = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [consent, setConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!consent) {
      toast.error("Необходимо дать согласие на обработку персональных данных");
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Валидация капчи (если настроена)
      const captchaResult = await validateCaptcha();
      if (!captchaResult.isValid) {
        toast.error("Проверка капчи не пройдена. Попробуйте снова.");
        setIsSubmitting(false);
        return;
      }

      // Отправка формы
      const result = await submitContactForm(formData, captchaResult.token);

      if (result.success) {
        setIsSuccess(true);
        toast.success(result.message);
        setFormData({ name: "", email: "", phone: "", message: "" });
        setConsent(false);
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      toast.error("Ошибка соединения. Проверьте интернет или напишите нам в Telegram.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacts" className="section-padding bg-card">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            Контакты
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Обсудим ваш проект и предложим оптимальное решение
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-background rounded-xl p-6 md:p-8 card-shadow">
            <h3 className="font-semibold text-xl mb-6">Обсудить проект</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
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
                  id="consent-section" 
                  checked={consent}
                  onCheckedChange={(checked) => setConsent(checked === true)}
                  className="mt-1"
                />
                <label htmlFor="consent-section" className="text-xs text-muted-foreground leading-relaxed cursor-pointer">
                  Я согласен(а) на обработку моих персональных данных в соответствии с{" "}
                  <Link 
                    to="/privacy-policy" 
                    target="_blank"
                    className="text-primary hover:underline"
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
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Direct Contacts */}
            <div>
              <h3 className="font-semibold text-xl mb-6">Связаться с нами</h3>
              
              <div className="space-y-4">
                <a
                  href="mailto:ov.digital.agency@yandex.ru"
                  className="flex items-center gap-4 p-4 bg-background rounded-lg card-shadow hover:card-shadow-hover transition-all hover:-translate-y-0.5"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium">Email</div>
                    <div className="text-muted-foreground text-sm">ov.digital.agency@yandex.ru</div>
                  </div>
                </a>

                <a
                  href="tel:+79782586628"
                  className="flex items-center gap-4 p-4 bg-background rounded-lg card-shadow hover:card-shadow-hover transition-all hover:-translate-y-0.5"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium">Телефон</div>
                    <div className="text-muted-foreground text-sm">+7 978 258-66-28</div>
                  </div>
                </a>

                <a
                  href="https://t.me/ov_digital_agency"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-background rounded-lg card-shadow hover:card-shadow-hover transition-all hover:-translate-y-0.5"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Send className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium">Telegram</div>
                    <div className="text-muted-foreground text-sm">@ov_digital_agency</div>
                  </div>
                </a>
              </div>
            </div>

            {/* About Company */}
            <div className="bg-background rounded-xl p-6 card-shadow">
              <h3 className="font-semibold text-lg mb-4">О компании</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">10+ лет опыта в разработке digital-решений</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Работаем официально как ИП</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Собственная команда разработчиков</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Работаем с бизнесом по всей России</span>
                </div>
              </div>
            </div>

            {/* Requisites */}
            <details className="bg-background rounded-xl p-6 card-shadow group">
              <summary className="font-semibold text-lg cursor-pointer list-none flex items-center justify-between">
                Реквизиты
                <span className="text-muted-foreground group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="mt-4 space-y-2 text-sm text-muted-foreground">
                <p><strong className="text-foreground">ИП:</strong> Григоренко Олеся Александровна</p>
                <p><strong className="text-foreground">ИНН:</strong> 345971572610</p>
                <p><strong className="text-foreground">ОГРНИП:</strong> 325940100061282</p>
                <p><strong className="text-foreground">Р/с:</strong> 40802810320000852028</p>
                <p><strong className="text-foreground">Банк:</strong> ООО "Банк Точка"</p>
                <p><strong className="text-foreground">ИНН банка:</strong> 9721194461</p>
                <p><strong className="text-foreground">К/с:</strong> 30101810745374525104</p>
                <p><strong className="text-foreground">БИК:</strong> 044525104</p>
              </div>
            </details>
          </div>
        </div>
      </div>
    </section>
  );
};
