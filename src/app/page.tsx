import HeroSection from "@/components/HeroSection";
import BusinessSection from "@/components/BusinessSection";
import ProductFeatures from "@/components/ProductFeatures";
import VideoSection from "@/components/VideoSection";
import BrandStoryBanner from "@/components/BrandStoryBanner";
import TrustSection from "@/components/TrustSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <BusinessSection />
      <ProductFeatures />
      <VideoSection />
      <BrandStoryBanner />
      <TrustSection />
      <FAQSection />
      <ContactSection />
    </>
  );
}
