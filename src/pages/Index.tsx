import MenuBar from "@/components/MenuBar";
import HeroSection from "@/components/HeroSection";
import SetupsSection from "@/components/SetupsSection";
import FeaturesSection from "@/components/FeaturesSection";
import FAQSection from "@/components/FAQSection";
import PricingSection from "@/components/PricingSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <MenuBar />
    <HeroSection />
    <SetupsSection />
    <FeaturesSection />
    <FAQSection />
    <PricingSection />
    <Footer />
  </div>
);

export default Index;
