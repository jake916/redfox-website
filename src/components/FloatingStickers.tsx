"use client";

import React from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function FloatingStickers() {
  const { scrollYProgress } = useScroll();

  // Sticker 1: "good vibes only" (Moves from top left down & right, rotates)
  const y1 = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [0, 300, 700, 1100, 1600]);
  const x1 = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [0, 50, -40, 60, -20]);
  const rotate1 = useTransform(scrollYProgress, [0, 0.5, 1], [-8, 12, -6]);
  const scale1 = useTransform(scrollYProgress, [0, 0.2, 0.5, 0.8, 1], [1, 1.05, 0.95, 1.1, 1]);

  // Sticker 2: "pure nostalgia" (Moves from top right down & left, rotates reverse)
  const y2 = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [0, 350, 800, 1200, 1750]);
  const x2 = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [0, -60, 30, -50, 40]);
  const rotate2 = useTransform(scrollYProgress, [0, 0.5, 1], [12, -10, 8]);
  const scale2 = useTransform(scrollYProgress, [0, 0.3, 0.6, 0.9, 1], [1, 0.95, 1.1, 1, 1.05]);

  return (
    <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden hidden md:block">
      {/* Scroll Floating Sticker 1 - Left Side */}
      <motion.div
        style={{ y: y1, x: x1, rotate: rotate1, scale: scale1 }}
        className="absolute top-28 left-8 lg:left-14"
      >
        <div className="bg-[#E5EC5B] text-[#060E27] font-handwriting text-2xl font-bold px-4 py-2 rounded-full shadow-2xl border-2 border-black flex items-center gap-2 backdrop-blur-sm">
          <Image
            src="/redfoxlogo.png"
            alt="Red Fox Icon"
            width={24}
            height={24}
            className="w-6 h-6 object-contain"
          />
          <span>good vibes only</span>
        </div>
      </motion.div>

      {/* Scroll Floating Sticker 2 - Right Side */}
      <motion.div
        style={{ y: y2, x: x2, rotate: rotate2, scale: scale2 }}
        className="absolute top-36 right-8 lg:right-16"
      >
        <div className="bg-[#D18BF4] text-white font-handwriting text-2xl font-bold px-4 py-2 rounded-full shadow-2xl border-2 border-black flex items-center gap-2 backdrop-blur-sm">
          <span>✨</span>
          <span>pure nostalgia</span>
        </div>
      </motion.div>
    </div>
  );
}
