import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { ContactFormPopup } from "@/components/ContactFormPopup";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { href: "#services", label: "Услуги", isHash: true },
  { href: "#technologies", label: "Технологии", isHash: true },
  { href: "#cases", label: "Кейсы", isHash: true },
  { href: "/about", label: "О нас", isHash: false },
  { href: "#contacts", label: "Контакты", isHash: true },
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const handleNavClick = (href: string) => {
    if (!isHomePage) {
      window.location.href = "/" + href;
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="section-container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className="text-3xl md:text-4xl font-bold">
              <span className="text-purple-500">O</span>
              <span className="text-blue-500">V</span>
            </span>
            <span className="text-sm md:text-base font-medium text-muted-foreground">Digital Agency</span>
          </Link>

{/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              link.isHash ? (
                <a
                  key={link.href}
                  href={isHomePage ? link.href : "/" + link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              )
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <ContactFormPopup>
              <Button>Обсудить проект</Button>
            </ContactFormPopup>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Меню"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

{/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-fade-in">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                link.isHash ? (
                  <a
                    key={link.href}
                    href={isHomePage ? link.href : "/" + link.href}
                    className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                )
              ))}
              <ContactFormPopup>
                <Button className="mt-2" onClick={() => setIsMenuOpen(false)}>
                  Обсудить проект
                </Button>
              </ContactFormPopup>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
