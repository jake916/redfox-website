"use client";

import React from "react";
import Image from "next/image";
import { Heart, Smile, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function WhoWeAre() {
  return (
    <section id="about" className="relative bg-[#F5F5F7] pb-20 pt-8 px-4 md:px-8">
      {/* Container Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="max-w-7xl mx-auto bg-white border border-black/10 rounded-3xl md:rounded-[40px] p-6 sm:p-10 md:p-16 shadow-xl relative overflow-hidden space-y-16"
      >
        {/* Background Accent Pill */}
        <div className="absolute -top-10 -right-10 w-48 h-48 bg-[#F16529]/15 rounded-full blur-2xl pointer-events-none" />

        {/* Section 1: Brand Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-block bg-[#F16529]/15 border border-[#F16529]/30 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#F16529]">
              BRAND STORY
            </div>

            <div className="relative">
              <span className="font-handwriting text-3xl md:text-4xl text-[#F16529] font-bold block -rotate-3 mb-1">
                good vibes only ✨
              </span>
              <h2 className="font-display text-4xl sm:text-6xl md:text-7xl text-[#060E27] uppercase leading-[0.95] tracking-tight">
                WE&apos;RE <span className="text-[#F16529]">RED FOX.</span>
              </h2>
            </div>

            <div className="space-y-4 text-base sm:text-lg text-[#060E27]/85 leading-relaxed max-w-xl">
              <p className="font-medium">
                We create humorous, thoughtful content while building a community around it. We sell nostalgia through the things we make. And we believe deeply that the stories and experiences we share have the power to transform lives.
              </p>
              <p className="text-[#060E27]/70">
                We&apos;re not here to be another brand shouting into the void. We&apos;re here to make you laugh, make you feel something familiar, and maybe make your day a little better along the way.
              </p>
            </div>
          </motion.div>

          {/* Right Image Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden border-4 border-[#060E27] shadow-2xl bg-gray-100 group">
              <Image
                src="/images/team_photo.jpg"
                alt="Red Fox Culture"
                width={700}
                height={525}
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
              />

              {/* Floating Sticker Badge */}
              <div className="absolute bottom-4 right-4 bg-[#E5EC5B] text-[#060E27] font-handwriting text-2xl font-bold px-5 py-2 rounded-2xl border-2 border-black shadow-lg rotate-[-6deg] animate-float">
                welcome to the pack 🦊
              </div>
            </div>
          </motion.div>
        </div>

        {/* Section 2: Who It's For */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-[#FFF5F0] border-2 border-[#F16529]/20 rounded-3xl p-8 sm:p-12 relative overflow-hidden"
        >
          <div className="max-w-3xl space-y-4">
            <div className="inline-block bg-[#4B94F3] text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
              WHO IT&apos;S FOR
            </div>

            <h3 className="font-display text-3xl sm:text-5xl text-[#060E27] uppercase leading-tight">
              BUILT FOR PEOPLE WITH A <span className="text-[#F16529]">SPRING IN THEIR STEP.</span>
            </h3>

            <p className="text-base sm:text-xl text-[#060E27]/80 leading-relaxed font-medium">
              Red Fox is for the 22–45 crowd working-class people with a passion for humor and a good life. If you take your hustle seriously but never forget to laugh, you&apos;re already one of us.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <div className="bg-white px-4 py-2 rounded-full border border-black/10 font-bold text-xs uppercase tracking-wider text-[#060E27] shadow-sm flex items-center gap-2">
                <Smile className="w-4 h-4 text-[#F16529]" />
                <span>Passion For Humor</span>
              </div>

              <div className="bg-white px-4 py-2 rounded-full border border-black/10 font-bold text-xs uppercase tracking-wider text-[#060E27] shadow-sm flex items-center gap-2">
                <Heart className="w-4 h-4 text-[#4EBA81]" />
                <span>Love For Good Vibes</span>
              </div>

              <div className="bg-white px-4 py-2 rounded-full border border-black/10 font-bold text-xs uppercase tracking-wider text-[#060E27] shadow-sm flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#4B94F3]" />
                <span>Aged 22–45 & Beyond</span>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
