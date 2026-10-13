import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ShowreelSection from "@/components/ShowreelSection";
import ClientsSection from "@/components/ClientsSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <main id="top" className="min-h-screen bg-[#F5F5F7] text-[#060E27] overflow-x-hidden relative">
      <Navbar />
      <HeroSection />
      <ShowreelSection />
      <ClientsSection />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
