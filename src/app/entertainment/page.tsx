import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import EntertainmentContent from "@/components/EntertainmentContent";

export const metadata: Metadata = {
  title: "Entertainment & Collaborations · Red Fox",
  description:
    "Stand-up comedy, 2D animation, mustard music, and personal & professional showreel collaborations from the Red Fox pack.",
  openGraph: {
    title: "Entertainment & Collaborations · Red Fox",
    description:
      "Our intention is to make you laugh! Stand-up comedy, 2D animation, and showreel collaborations with leading studios and brands.",
    images: ["/images/entertainment/title_collaborations.png"],
  },
};

export default function EntertainmentPage() {
  return (
    <main id="top" className="min-h-screen bg-[#F5F5F7] text-[#060E27] overflow-x-hidden relative">
      <Navbar />
      <EntertainmentContent />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
