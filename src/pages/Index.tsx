import HeroSection from "@/components/ui/hero-section";
import ExamplesSection from "@/components/ui/examples-section";
import FeaturesSection from "@/components/ui/features-section";
import TestimonialsSection from "@/components/ui/testimonials-section";
import IncludesSection from "@/components/ui/includes-section";
import PricingSection from "@/components/ui/pricing-section";
import BonusSection from "@/components/ui/bonus-section";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ExamplesSection />
      <FeaturesSection />
      <TestimonialsSection />
      <IncludesSection />
      <PricingSection />
      <BonusSection />
      
      {/* Footer */}
      <footer className="py-8 px-4 bg-foreground text-background text-center">
        <div className="container mx-auto">
          <p>&copy; 2024 Obra e Lucro. Todos os direitos reservados.</p>
          <p className="text-sm mt-2 opacity-80">
            Transforme seu negócio na construção civil com nossa ferramenta completa
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;