// ============================================================
// Home Page — Main landing page with all sections
// ============================================================

import HeroSection from "@/components/sections/HeroSection";
import StylesSection from "@/components/sections/StylesSection";
import ArtistsSection from "@/components/sections/ArtistsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import GalleryPreview from "@/components/sections/GalleryPreview";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <StylesSection />
      <ArtistsSection />
      <GalleryPreview />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </>
  );
}
