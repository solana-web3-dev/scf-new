import Navbar from "@/components/Navbar";
import NewsTicker from "@/components/NewsTicker";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import PresaleWidget from "@/components/PresaleWidget";
import TokenomicsSection from "@/components/TokenomicsSection";
import EcosystemSection from "@/components/EcosystemSection";
import ComparisonTable from "@/components/ComparisonTable";
import BenefitsSection from "@/components/BenefitsSection";
import RoadmapSection from "@/components/RoadmapSection";
import DeveloperSection from "@/components/DeveloperSection";
import PartnersSection from "@/components/PartnersSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <NewsTicker />
      
      <div className="relative">
        <div className="lg:flex lg:items-start lg:gap-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex-1">
            <HeroSection />
          </div>
          <div className="hidden xl:block sticky top-24 pt-24 pb-8">
            <PresaleWidget />
          </div>
        </div>
        
        <div className="xl:hidden max-w-md mx-auto px-4 py-8">
          <PresaleWidget />
        </div>
      </div>

      <PartnersSection />
      <FeaturesSection />
      <ComparisonTable />
      <BenefitsSection />
      <TokenomicsSection />
      <EcosystemSection />
      <RoadmapSection />
      <DeveloperSection />
      <FAQSection />
      <Footer />
    </div>
  );
}
