import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Send, CheckCircle } from "lucide-react";
import { toast } from "sonner";

export const ContactsSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast.success("Заявка отправлена! Мы свяжемся с вами в ближайшее время.");
    setFormData({ name: "", email: "", phone: "", message: "" });
    setIsSubmitting(false);
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
                  placeholder="Ваше имя"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
              <div>
                <Input
                  type="tel"
                  placeholder="Телефон"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
              <div>
                <Textarea
                  placeholder="Расскажите о вашем проекте"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  required
                />
              </div>
              <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Отправка..." : "Отправить заявку"}
                <Send className="w-4 h-4 ml-2" />
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
                  href="mailto:ov.digital.agency@gmail.com"
                  className="flex items-center gap-4 p-4 bg-background rounded-lg card-shadow hover:card-shadow-hover transition-all hover:-translate-y-0.5"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium">Email</div>
                    <div className="text-muted-foreground text-sm">ov.digital.agency@gmail.com</div>
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
                  <span className="text-muted-foreground">Работаем с бизнесом и digital-студиями по всей России</span>
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
