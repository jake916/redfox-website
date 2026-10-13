"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative pt-32 md:pt-40 pb-24 md:pb-36 px-6 md:px-12 lg:px-20 bg-white text-[#5C1414] overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-28 md:space-y-40">

        {/* =========================================================================
            ROW 1 (Storyboard Page 1 - Top):
            Left: "We'll make mustard music..."
            Right: Fox character in studio
        ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
          {/* Text Left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-6 flex flex-col justify-center"
          >
            <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.2rem] font-bold tracking-tight text-[#5C1414] leading-[1.08] select-none">
              We&apos;ll make
              <br />
              mustard
              <br />
              music...
            </h2>
          </motion.div>

          {/* Fox Illustration Right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-6 flex justify-center md:justify-end"
          >
            <div className="relative w-full max-w-md aspect-square rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <Image
                src="/images/storyboard/fox_music.jpg"
                alt="Fox making mustard music"
                fill
                priority
                className="object-contain"
              />
            </div>
          </motion.div>
        </div>

        {/* =========================================================================
            ROW 2 (Storyboard Page 1 - Bottom / Page 2 - Top):
            Left: Laughing Dad Caricature
            Right: "Crack dad jokes..."
        ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
          {/* Laughing Caricature Left */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-6 flex justify-center md:justify-start order-2 md:order-1"
          >
            <div className="relative w-full max-w-md aspect-square rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <Image
                src="/images/storyboard/laughing_dad.jpg"
                alt="Laughing dad jokes caricature"
                fill
                className="object-contain"
              />
            </div>
          </motion.div>

          {/* Text Right */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-6 flex flex-col justify-center order-1 md:order-2"
          >
            <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.2rem] font-bold tracking-tight text-[#5C1414] leading-[1.08] select-none">
              Crack dad
              <br />
              jokes...
            </h2>
          </motion.div>
        </div>

        {/* =========================================================================
            ROW 3 (Storyboard Page 2):
            Left: "and call Speed Darlington a fine boy just to make you laugh" + (Collab with Us!)
            Right: Speed Darlington Caricature
        ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
          {/* Text & Circled Button Left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-6 flex flex-col justify-center space-y-6"
          >
            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-[4.2rem] font-bold tracking-tight text-[#5C1414] leading-[1.12] select-none">
              and call Speed
              <br />
              Darlington a
              <br />
              fine boy just to
              <br />
              make you laugh
            </h2>

            {/* Hand-drawn style circled button as in storyboard */}
            <div className="pt-2">
              <Link
                href="#contact"
                className="inline-block border-2 border-[#5C1414] text-[#5C1414] hover:bg-[#5C1414] hover:text-white font-bold text-2xl sm:text-3xl px-8 py-2.5 rounded-full tracking-wide transition-colors duration-200"
              >
                Collab with Us!
              </Link>
            </div>
          </motion.div>

          {/* Speed Darlington Caricature Right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-6 flex justify-center md:justify-end"
          >
            <div className="relative w-full max-w-md aspect-square rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <Image
                src="/images/storyboard/speed_darlington.jpg"
                alt="Caricature of Speed Darlington"
                fill
                className="object-contain"
              />
            </div>
          </motion.div>
        </div>

        {/* =========================================================================
            ROW 4 (Storyboard Page 3):
            Left: "We make you laugh for a living!" + 3 stacked buttons
            Right: Animated character frame
        ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center pt-6">
          {/* Left Column: Heading + 3 Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-6 flex flex-col justify-center space-y-8"
          >
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.2rem] font-bold tracking-tight text-[#5C1414] leading-[1.08] select-none">
              We make
              <br />
              you laugh
              <br />
              for a living!
            </h1>

            {/* 3 Action Buttons Stacked - Authentic Hand-Drawn Storyboard Typography with Transparent Background */}
            <div className="flex flex-col items-start gap-4 sm:gap-6 pt-2">
              {/* 1. Work with Us! */}
              <Link
                href="#contact"
                className="group relative inline-flex items-center transition-all duration-200 hover:scale-105 active:scale-95"
                aria-label="Work with Us!"
              >
                <div className="relative h-12 sm:h-14 md:h-16 w-52 sm:w-64 md:w-72">
                  <Image
                    src="/images/storyboard/btn_work_with_us.png"
                    alt="Work with Us!"
                    fill
                    className="object-contain object-left transition-opacity group-hover:opacity-80"
                  />
                </div>
              </Link>

              {/* 2. OUR STORE */}
              <a
                href="https://redfoxstyles.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center transition-all duration-200 hover:scale-105 active:scale-95"
                aria-label="Our Store"
              >
                <div className="relative h-11 sm:h-13 md:h-15 w-52 sm:w-64 md:w-72">
                  <Image
                    src="/images/storyboard/btn_our_store.png"
                    alt="Our Store"
                    fill
                    className="object-contain object-left transition-opacity group-hover:opacity-80"
                  />
                </div>
              </a>

              {/* 3. WHO IS REDFOX */}
              <Link
                href="#about"
                className="group relative inline-flex items-center transition-all duration-200 hover:scale-105 active:scale-95"
                aria-label="Who is Red Fox"
              >
                <div className="relative h-11 sm:h-13 md:h-15 w-60 sm:w-72 md:w-80">
                  <Image
                    src="/images/storyboard/btn_who_is_redfox.png"
                    alt="Who is Red Fox"
                    fill
                    className="object-contain object-left transition-opacity group-hover:opacity-80"
                  />
                </div>
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Animated Character Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-6 flex justify-center md:justify-end"
          >
            {/* Framed border box matching the storyboard portrait box */}
            <div className="relative w-full max-w-sm aspect-[3/4] border-4 border-[#5C1414]/90 rounded-sm p-4 bg-white flex flex-col items-center justify-center shadow-md">
              <motion.div
                animate={{
                  y: [0, -22, 0],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 2.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative w-full h-full"
              >
                <Image
                  src="/images/storyboard/jumping_fox.jpg"
                  alt="Animated character jump"
                  fill
                  className="object-contain"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
