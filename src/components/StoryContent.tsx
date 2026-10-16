"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  MessageCircle,
  ExternalLink,
  ArrowRight,
} from "lucide-react";

export default function StoryContent() {

  return (
    <div className="pt-28 md:pt-36 pb-20 md:pb-28">
      {/* =========================================================================
          SECTION 1 (Storyboard Page 6 - Top): WHO IS RED FOX?
          Left: Authentic Title + Body Copy
          Right: Caricature of The Architect
      ========================================================================= */}
      <section className="px-6 md:px-12 lg:px-20 max-w-7xl mx-auto mb-28 md:mb-40">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Heading & Story Intro */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >

            {/* Hand-Drawn Title from Storyboard */}
            <div className="relative w-full max-w-lg h-24 sm:h-32 md:h-36">
              <Image
                src="/images/story/title_who_is_redfox.png"
                alt="Who is RedFox?"
                fill
                priority
                className="object-contain object-left"
              />
            </div>
            <h1 className="sr-only">Who is Red Fox?</h1>

            {/* Storyboard Core Sentence */}
            <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#5C1414] leading-snug">
              Red Fox is a team of an architect, fine artist and mass communicator who have egos{" "}
              <span className="italic text-[#F16529] font-handwriting text-3xl sm:text-4xl md:text-5xl block sm:inline">
                (sometimes bigger than ourselves).
              </span>
            </p>

            {/* Expanded Narrative Copy */}
            <div className="space-y-4 text-base sm:text-lg text-[#060E27]/80 leading-relaxed font-normal pt-2">
              <p>
                We create humorous, thoughtful content while building a community around it. We sell nostalgia through the things we make. And we believe deeply that the stories and experiences we share have the power to transform lives.
              </p>
              <p>
                We&apos;re not here to be another brand shouting into the void. We&apos;re here to make you laugh, make you feel something familiar, and maybe make your day a little better along the way.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Partner 1 - The Architect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col items-center"
          >
            <div className="relative group w-full max-w-md bg-white p-4 sm:p-5 rounded-3xl border-2 border-[#5C1414]/20 shadow-xl transition-all duration-300 hover:shadow-2xl hover:border-[#5C1414]/40 hover:-translate-y-1">

              {/* Caricature Canvas */}
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-[#FFFDF9] border border-[#5C1414]/10 mb-4">
                <Image
                  src="/images/story/architect_partner.jpg"
                  alt="Caricature of the Architect Partner"
                  fill
                  priority
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2 (Storyboard Page 6 - Bottom & Page 7 - Top): WHAT WE DO!
          Left: Caricature of The Fine Artist
          Right: Authentic Title + What We Do + Who It's For
      ========================================================================= */}
      <section className="bg-white py-24 md:py-32 border-y border-[#5C1414]/10 px-6 md:px-12 lg:px-20 mb-28 md:mb-40">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Partner 2 - The Fine Artist & Animator */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 flex flex-col items-center order-2 lg:order-1"
            >
              <div className="relative group w-full max-w-md bg-[#FDFBF7] p-4 sm:p-5 rounded-3xl border-2 border-[#5C1414]/20 shadow-xl transition-all duration-300 hover:shadow-2xl hover:border-[#5C1414]/40 hover:-translate-y-1">

                {/* Caricature Canvas */}
                <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-white border border-[#5C1414]/10 mb-4">
                  <Image
                    src="/images/story/fine_artist_partner.jpg"
                    alt="Caricature of the Fine Artist Partner"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
            </motion.div>

            {/* Right Column: "WHAT WE DO!" Content & "Who It's For" */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-7 space-y-6 order-1 lg:order-2"
            >
              {/* Hand-Drawn Title from Storyboard */}
              <div className="relative w-full max-w-md h-20 sm:h-24 md:h-28">
                <Image
                  src="/images/story/title_what_we_do.png"
                  alt="WHAT WE DO!"
                  fill
                  className="object-contain object-left"
                />
              </div>
              <h2 className="sr-only">What We Do!</h2>

              {/* Exact Storyboard Quote */}
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#5C1414] leading-snug">
                Our purpose is to make you laugh{" "}
                <span className="text-[#F16529] font-handwriting text-3xl sm:text-4xl block sm:inline">
                  (or at least smile)
                </span>{" "}
                using various art forms like strip art, animation and comedy.
              </p>

            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3 (Storyboard Page 7 - Bottom & Page 8 - Top): OUR BACKGROUND
          Left: Authentic Title + Background Narrative
          Right: Caricature of The Mass Communicator
      ========================================================================= */}
      <section className="px-6 md:px-12 lg:px-20 max-w-7xl mx-auto mb-28 md:mb-40">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Heading & Background Details */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Hand-Drawn Title from Storyboard */}
            <div className="relative w-full max-w-lg h-20 sm:h-24 md:h-28">
              <Image
                src="/images/story/title_our_background.png"
                alt="OUR BACKGROUND."
                fill
                className="object-contain object-left"
              />
            </div>
            <h2 className="sr-only">Our Background</h2>

            {/* Exact Storyboard Sentence */}
            <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#5C1414] leading-snug">
              The architect has worked in <span className="underline decoration-[#F16529]/60">Svengali Design Ltd</span> amongst other companies; the fine artist worked for <span className="underline decoration-[#4B94F3]/60">Magic Carpet Studios</span> and the Communicator, <span className="underline decoration-[#4EBA81]/60">Cool FM</span>.
            </p>

            

            {/* Quick Links / Explore More */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href="/#showreel"
                className="inline-flex items-center gap-2 bg-[#5C1414] hover:bg-[#430e0e] text-white px-6 py-3 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-colors shadow-md hover:shadow-lg"
              >
                Watch Showreel <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="https://redfoxstyles.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-[#5C1414] border border-[#5C1414]/25 px-6 py-3 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-colors"
              >
                Explore Styles <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Partner 3 - The Mass Communicator */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col items-center"
          >
            <div className="relative group w-full max-w-md bg-white p-4 sm:p-5 rounded-3xl border-2 border-[#5C1414]/20 shadow-xl transition-all duration-300 hover:shadow-2xl hover:border-[#5C1414]/40 hover:-translate-y-1">

              {/* Caricature Canvas */}
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-[#FDFBF7] border border-[#5C1414]/10 mb-4">
                <Image
                  src="/images/story/mass_communicator_partner.jpg"
                  alt="Caricature of the Mass Communicator Partner"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4 (Storyboard Page 8 - Bottom): COMMUNITY / JOIN MY DISCORD
          The authentic sketch border from Page 8:
          "Want to be a part of our community?" -> "Join my discord"
      ========================================================================= */}
      <section className="px-6 md:px-12 lg:px-20 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl bg-white border-2 border-dashed border-[#5C1414]/30 p-8 sm:p-12 md:p-14 shadow-lg text-center overflow-hidden"
        >
          {/* Subtle Background Watermark */}
          <div className="absolute top-0 right-0 w-64 h-64 opacity-5 pointer-events-none">
            <Image
              src="/redfoxlogo.png"
              alt=""
              width={256}
              height={256}
              className="object-contain"
            />
          </div>

          <div className="max-w-2xl mx-auto space-y-6">
            {/* Storyboard Handwritten Community Question */}
            <div className="space-y-2">
              <span className="font-handwriting text-2xl sm:text-3xl text-[#F16529] font-bold block">
                — Ready to hang out? —
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#5C1414] tracking-tight">
                Want to be a part of our community?
              </h2>
              <p className="text-sm sm:text-base text-[#060E27]/70 font-medium">
                Get behind-the-scenes sketches, early access to new comic drops, exclusive Discord hangouts with the partners, and community polls.
              </p>
            </div>

            {/* CTA Button: Storyboard "(Join my discord)" */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://discord.gg"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#5865F2] hover:bg-[#4752c4] text-white font-bold px-8 py-4 rounded-full text-base sm:text-lg shadow-md hover:shadow-xl transition-all hover:scale-105 active:scale-95"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Join our Discord</span>
              </a>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
