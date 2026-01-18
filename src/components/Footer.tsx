const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-8">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">OV</span>
            </div>
            <span className="font-semibold">Digital Agency</span>
          </div>
          
          <div className="text-sm text-background/60 text-center md:text-left">
            © {currentYear} OV Digital Agency. Все права защищены.
          </div>
          
          <div className="flex items-center gap-4 text-sm">
            <a 
              href="mailto:ov.digital.agency@gmail.com" 
              className="text-background/60 hover:text-background transition-colors"
            >
              ov.digital.agency@gmail.com
            </a>
            <a 
              href="https://t.me/ov_digital_agency" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-background/60 hover:text-background transition-colors"
            >
              Telegram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
