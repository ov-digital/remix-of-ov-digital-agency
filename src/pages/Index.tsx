import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { TechnologiesSection } from "@/components/TechnologiesSection";
import { ServicesSection } from "@/components/ServicesSection";
import { CasesSection } from "@/components/CasesSection";
import { BlogSection } from "@/components/BlogSection";
import { ContactsSection } from "@/components/ContactsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <TechnologiesSection />
        <CasesSection />
        <BlogSection />
        <ContactsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
