import { HeroCarousel } from "@/components/HeroCarousel";
import { ServicesSection } from "@/components/ServicesSection";
import { ProcessSection } from "@/components/ProcessSection";
import { ContactSection } from "@/components/ContactSection";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroCarousel />
      <ServicesSection />
      <ProcessSection />
      <ContactSection />
    </main>
  );
};

export default Index;