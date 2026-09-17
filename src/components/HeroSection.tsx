"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative pt-36 pb-24 md:pt-44 md:pb-32 px-4 md:px-8 overflow-hidden bg-gradient-to-b from-[#FFF5F0] via-[#FFF8F2] to-[#F5F5F7]">
      {/* Animated Glowing Background Mesh & Blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Blob 1: Orange */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 40, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-20 -left-20 w-96 h-96 bg-[#F16529]/20 rounded-full blur-3xl"
        />

        {/* Blob 2: Blue */}
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/3 -right-20 w-[30rem] h-[30rem] bg-[#4B94F3]/20 rounded-full blur-3xl"
        />

        {/* Blob 3: Yellow */}
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            x: [0, 30, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-10 left-1/3 w-80 h-80 bg-[#E5EC5B]/30 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-20">
        {/* Eyebrow Tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-flex items-center gap-2.5 bg-white/90 backdrop-blur-sm border border-black/10 px-4 py-2 rounded-full text-xs md:text-sm font-bold uppercase tracking-wider text-[#060E27] shadow-sm mb-6"
        >
          <div className="w-5 h-5 relative flex-shrink-0">
            <Image src="/redfoxlogo.png" alt="Red Fox Logo" fill className="object-contain" />
          </div>
          <span>HUMOR. NOSTALGIA. GOOD VIBES ONLY.</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="font-display text-6xl sm:text-8xl md:text-9xl text-[#060E27] leading-[0.9] tracking-tight uppercase mb-8 max-w-5xl mx-auto"
        >
          WELCOME TO{" "}
          <motion.span
            whileHover={{ scale: 1.03, rotate: 0 }}
            className="inline-block relative px-4 py-1 bg-[#F16529] text-white rounded-2xl md:rounded-3xl transform -rotate-1 shadow-md transition-transform"
          >
            RED FOX
          </motion.span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="text-lg sm:text-2xl md:text-3xl font-medium text-[#060E27]/80 max-w-3xl mx-auto leading-relaxed mb-10"
        >
          We make people laugh then make them think about it later.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="https://redfoxstyles.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-[#F16529] hover:bg-[#d4511a] text-white font-bold px-8 py-4 rounded-full text-sm md:text-base uppercase tracking-wider shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-center flex items-center justify-center gap-2"
          >
            <span>Shop Red Fox Styles</span>
            <ArrowUpRight className="w-5 h-5" />
          </a>

          <Link
            href="#about"
            className="w-full sm:w-auto bg-white hover:bg-gray-50 border border-black/10 text-[#060E27] font-bold px-8 py-4 rounded-full text-sm md:text-base uppercase tracking-wider shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
          >
            <span>Our Story</span>
            <ArrowDown className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
