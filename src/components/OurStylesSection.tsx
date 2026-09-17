"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function OurStylesSection() {
  return (
    <section id="styles" className="py-20 bg-[#F5F5F7] px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="bg-white border border-black/10 rounded-3xl md:rounded-[40px] p-8 sm:p-12 md:p-16 shadow-xl relative overflow-hidden"
        >
          {/* Background Accent Blur */}
          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-[#F16529]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-8 space-y-6"
            >
              <div className="inline-block bg-[#F16529]/15 border border-[#F16529]/30 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#F16529]">
                RED FOX STYLES
              </div>

              <div className="relative">
                <span className="font-handwriting text-3xl md:text-4xl text-[#F16529] font-bold block -rotate-3 mb-1">
                  looking good & feeling good ✨
                </span>
                <h2 className="font-display text-4xl sm:text-6xl md:text-7xl text-[#060E27] uppercase leading-[0.95] tracking-tight">
                  WHERE IT ALL <span className="text-[#F16529]">STARTS.</span>
                </h2>
              </div>

              <p className="text-base sm:text-xl text-[#060E27]/85 leading-relaxed font-medium max-w-2xl">
                We&apos;re kicking things off with wigs because looking good and feeling good should always go hand in hand. It&apos;s just the beginning. T-shirts and more are already on the way as we build out a full lineup that matches the Red Fox energy.
              </p>

              <div className="pt-2">
                <a
                  href="https://redfoxstyles.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 bg-[#F16529] hover:bg-[#d4511a] text-white font-bold px-9 py-4 rounded-full text-base uppercase tracking-wider shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <span>Shop Now</span>
                  <ArrowUpRight className="w-5 h-5" />
                </a>
              </div>
            </motion.div>

            {/* Right Brand Badge Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-4 flex justify-center"
            >
              <div className="bg-[#FFF5F0] border-2 border-[#F16529]/20 rounded-3xl p-8 text-center space-y-4 shadow-md w-full max-w-sm relative overflow-hidden">
                <div className="w-20 h-20 bg-white rounded-full p-2 mx-auto shadow-sm border border-[#F16529]/20 flex items-center justify-center">
                  <Image
                    src="/redfoxlogo.png"
                    alt="Red Fox Styles"
                    width={70}
                    height={70}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="font-display text-2xl uppercase text-[#060E27]">
                  RED FOX STYLES
                </h3>
                <p className="text-xs text-[#060E27]/70 font-semibold uppercase tracking-wider">
                  OFFICIAL STOREFRONT ↗
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
