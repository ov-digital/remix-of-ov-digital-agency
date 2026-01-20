import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { ContactFormPopup } from "@/components/ContactFormPopup";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { href: "#services", label: "Услуги", isHash: true },
  { href: "#technologies", label: "Технологии", isHash: true },
  { href: "#cases", label: "Портфолио", isHash: true },
  { href: "/about", label: "О нас", isHash: false },
  { href: "#contacts", label: "Контакты", isHash: true },
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  const handleNavClick = (href: string) => {
    if (!isHomePage) {
      window.location.href = "/" + href;
    }
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border transition-all duration-300 ${isScrolled ? 'py-0' : 'py-1'}`}>
        <div className="section-container">
          <div className={`flex items-center justify-between transition-all duration-300 ${isScrolled ? 'h-14 md:h-16' : 'h-16 md:h-20'}`}>
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
              ref={buttonRef}
              className="lg:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Меню"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation - Outside header for proper overlay */}
      {isMenuOpen && (
        <>
          {/* Backdrop overlay */}
          <div 
            className="lg:hidden fixed inset-0 bg-black/50 z-40"
            style={{ top: isScrolled ? '56px' : '68px' }}
            onClick={() => setIsMenuOpen(false)}
          />
          {/* Menu panel */}
          <div 
            ref={menuRef} 
            className="lg:hidden fixed left-0 right-0 z-50 bg-background border-b border-border shadow-2xl animate-fade-in"
            style={{ top: isScrolled ? '56px' : '68px' }}
          >
            <nav className="flex flex-col px-6 py-6">
              {navLinks.map((link) => (
                link.isHash ? (
                  <a
                    key={link.href}
                    href={isHomePage ? link.href : "/" + link.href}
                    className="text-base font-medium text-foreground hover:text-primary transition-colors py-3 border-b border-border/50 last:border-b-0"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="text-base font-medium text-foreground hover:text-primary transition-colors py-3 border-b border-border/50 last:border-b-0"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                )
              ))}
              <div className="mt-4 pt-2">
                <ContactFormPopup>
                  <Button className="w-full" size="lg">
                    Обсудить проект
                  </Button>
                </ContactFormPopup>
              </div>
            </nav>
          </div>
        </>
      )}
    </>
  );
};
