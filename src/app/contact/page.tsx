import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import ContactContent from "@/components/ContactContent";

export const metadata: Metadata = {
  title: "Contact Us · Red Fox",
  description:
    "Get in touch with the Red Fox team. Pitch a 2D animation project, explore brand collaborations, or inquire about Red Fox Styles.",
  openGraph: {
    title: "Contact Us · Red Fox",
    description:
      "We make people laugh — then we reply to their messages. Reach out for 2D animation, brand partnerships, or general inquiries.",
    images: ["/images/contact/title_rdfox_graffiti.png"],
  },
};

export default function ContactPage() {
  return (
    <main id="top" className="min-h-screen bg-[#F5F5F7] text-[#060E27] overflow-x-hidden relative">
      <Navbar />
      <ContactContent />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
