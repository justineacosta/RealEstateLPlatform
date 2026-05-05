import HeroSection from "@/components/sections/HeroSection";
import StatsSection from "@/components/sections/StatsSection";
import FeaturedProperties from "@/components/sections/FeaturedProperties";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import AgentsSection from "@/components/sections/AgentsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CTASection from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <FeaturedProperties />
      <AboutSection />
      <ServicesSection />
      <AgentsSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
