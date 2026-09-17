import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhoWeAre from "@/components/WhoWeAre";
import OurStylesSection from "@/components/OurStylesSection";
import ComingSoonSection from "@/components/ComingSoonSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingStickers from "@/components/FloatingStickers";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <main id="top" className="min-h-screen bg-[#F5F5F7] text-[#060E27] overflow-x-hidden relative">
      <FloatingStickers />
      <Navbar />
      <HeroSection />
      <WhoWeAre />
      <OurStylesSection />
      <ComingSoonSection />
      <ContactSection />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
