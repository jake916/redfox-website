import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import StoryContent from "@/components/StoryContent";

export const metadata: Metadata = {
  title: "The Story · Who is Red Fox?",
  description:
    "Meet the collective of an architect, fine artist, and mass communicator behind Red Fox. Humor, nostalgia, and good vibes only.",
  openGraph: {
    title: "The Story · Red Fox",
    description:
      "Red Fox is a team of an architect, fine artist and mass communicator creating humor, nostalgia, and community.",
    images: ["/images/story/title_who_is_redfox.png"],
  },
};

export default function StoryPage() {
  return (
    <main id="top" className="min-h-screen bg-[#F5F5F7] text-[#060E27] overflow-x-hidden relative">
      <Navbar />
      <StoryContent />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
