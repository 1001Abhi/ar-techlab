import { CtaSection } from "@/components/home/cta-section";
import { FeatureSection } from "@/components/home/feature-section";
import { MainSection } from "@/components/home/main-section";
import { PricingSection } from "@/components/home/pricing-section";
import { TestimonialSection } from "@/components/home/testimonial-section";

export default function Home() {
  return (
    <>
      <MainSection />
      <FeatureSection />
      <PricingSection />
      <TestimonialSection />
      <CtaSection />
    </>
  );
}
