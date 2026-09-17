import type { Metadata } from "next";
import { Anton, Caveat, Inter } from "next/font/google";
import "./globals.css";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Red Fox · Humor. Nostalgia. Good vibes only.",
  description:
    "We create humorous, thoughtful content while building a community around it. We sell nostalgia through the things we make.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${anton.variable} ${caveat.variable} ${inter.variable} scroll-smooth`}>
      <body className="font-sans antialiased bg-[#F5F5F7] text-[#060E27] selection:bg-[#F16529] selection:text-white">
        {children}
      </body>
    </html>
  );
}
