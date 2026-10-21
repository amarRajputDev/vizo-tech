import { HeroSection } from "@/components/sections/HeroSection";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { SolutionsExplorer } from "@/components/sections/SolutionsExplorer";
import { PortfolioShowcase } from "@/components/sections/PortfolioShowcase";
import { AIWorkflowDemo } from "@/components/sections/AIWorkflowDemo";
import { WhyVizo } from "@/components/sections/WhyVizo";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { EngagementModels } from "@/components/sections/EngagementModels";
import { CredibilitySection } from "@/components/sections/CredibilitySection";
import { AboutSection } from "@/components/sections/AboutSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustStrip />
      <ServicesSection />
      <SolutionsExplorer />
      <PortfolioShowcase />
      <AIWorkflowDemo />
      <WhyVizo />
      <ProcessTimeline />
      <EngagementModels />
      <CredibilitySection />
      <AboutSection />
      <FAQSection />
      <ContactSection />
    </>
  );
}
