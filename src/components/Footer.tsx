import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { href: "/services/web-development", label: "Веб-разработка" },
    { href: "/services/web-design", label: "Веб-дизайн" },
    { href: "/services/mobile-apps", label: "Мобильные приложения" },
    { href: "/services/telegram", label: "Telegram-боты" },
    { href: "/services/seo", label: "SEO-продвижение" },
    { href: "/services/crm", label: "CRM-системы" },
  ];

  const navigation = [
    { href: "/#services", label: "Услуги" },
    { href: "/#technologies", label: "Технологии" },
    { href: "/#cases", label: "Портфолио" },
    { href: "/about", label: "О нас" },
    { href: "/#contacts", label: "Контакты" },
  ];

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <span className="text-3xl font-bold">
                <span className="text-purple-400">O</span>
                <span className="text-blue-400">V</span>
              </span>
              <span className="text-base font-medium text-background/80">Digital Agency</span>
            </Link>
            <p className="text-background/60 text-sm leading-relaxed">
              Создаём цифровые продукты, которые помогают бизнесу расти и развиваться.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-background">Услуги</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    to={service.href}
                    className="text-sm text-background/60 hover:text-background transition-colors"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-background">Навигация</h4>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="text-sm text-background/60 hover:text-background transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-background">Контакты</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:ov.digital.agency@gmail.com"
                  className="text-sm text-background/60 hover:text-background transition-colors"
                >
                  ov.digital.agency@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://t.me/ov_digital_agency"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-background/60 hover:text-background transition-colors"
                >
                  Telegram: @ov_digital_agency
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-background/10">
        <div className="text-sm text-background/60 text-center md:text-left">
            © {currentYear} OV Digital Agency. Все права защищены.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
