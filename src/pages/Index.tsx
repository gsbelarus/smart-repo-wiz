import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import TestGenSection from "@/components/TestGenSection";
import DocsGenSection from "@/components/DocsGenSection";
import BenefitsSection from "@/components/BenefitsSection";
import ModelsSection from "@/components/ModelsSection";
import PricingSection from "@/components/PricingSection";
import ContactModal from "@/components/ContactModal";
import Footer from "@/components/Footer";

const Index = () => {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <HeroSection onLearnMore={() => setContactOpen(true)} />
      <FeaturesSection />
      <TestGenSection />
      <DocsGenSection />
      <BenefitsSection />
      <ModelsSection />
      <PricingSection />
      <Footer />
      <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />
    </div>
  );
};

export default Index;
