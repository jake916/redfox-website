"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Check } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  const navCards = [
    { title: "ABOUT", href: "#about", bg: "bg-[#F16529] text-white" },
    { title: "RED FOX STYLES ↗", href: "https://redfoxstyles.com", bg: "bg-[#4B94F3] text-white", external: true },
    { title: "COMING SOON", href: "#coming-soon", bg: "bg-[#D18BF4] text-[#060E27]" },
    { title: "CONTACT", href: "#contact", bg: "bg-[#4EBA81] text-white" },
  ];

  return (
    <footer className="bg-[#060E27] text-white pt-20 pb-12 px-4 md:px-8 border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Top 4 Navigation Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {navCards.map((card, idx) =>
            card.external ? (
              <motion.a
                key={idx}
                href={card.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`${card.bg} rounded-3xl p-6 sm:p-8 flex flex-col justify-between h-36 sm:h-44 shadow-lg transition-all duration-300 group`}
              >
                <div className="flex justify-end">
                  <div className="w-8 h-8 rounded-full bg-black/10 flex items-center justify-center">
                    <ArrowUpRight className="w-5 h-5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
                <span className="font-display text-2xl sm:text-3xl uppercase">
                  {card.title}
                </span>
              </motion.a>
            ) : (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <Link
                  href={card.href}
                  className={`${card.bg} rounded-3xl p-6 sm:p-8 flex flex-col justify-between h-36 sm:h-44 shadow-lg transition-all duration-300 group w-full block`}
                >
                  <div className="flex justify-end">
                    <div className="w-8 h-8 rounded-full bg-black/10 flex items-center justify-center">
                      <ArrowUpRight className="w-5 h-5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>
                  <span className="font-display text-2xl sm:text-3xl uppercase">
                    {card.title}
                  </span>
                </Link>
              </motion.div>
            )
          )}
        </div>

        {/* Newsletter & Brand Info Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center pt-8 border-t border-white/10"
        >
          {/* Brand Info */}
          <div className="lg:col-span-6 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/10 p-1 flex items-center justify-center overflow-hidden border border-white/20">
                <Image
                  src="/redfoxlogo.png"
                  alt="Red Fox Logo"
                  width={40}
                  height={40}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-display text-3xl tracking-wider">
                RED FOX
              </span>
            </div>
            <p className="text-sm opacity-70 max-w-md font-medium">
              Humor. Nostalgia. Good vibes only. Creating content that makes you laugh and selling nostalgia through the things we make.
            </p>

            <div className="pt-2 flex items-center gap-6 text-xs font-bold uppercase tracking-wider">
              <span>FOLLOW US:</span>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#F16529] transition-colors"
              >
                INSTAGRAM ↗
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#4B94F3] transition-colors"
              >
                TIKTOK ↗
              </a>
            </div>
          </div>

          {/* Lightweight Newsletter */}
          <div className="lg:col-span-6 bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 space-y-4">
            <div>
              <h4 className="font-display text-xl uppercase tracking-wide">
                JOIN THE PACK
              </h4>
              <p className="text-xs text-gray-300 font-medium">
                Get updates on new merch drops, wig styles, and upcoming entertainment releases.
              </p>
            </div>

            {subscribed ? (
              <div className="bg-[#4EBA81] text-white text-xs font-bold p-3 rounded-full flex items-center justify-center gap-2">
                <Check className="w-4 h-4" />
                <span>Subscribed! Welcome to the Red Fox pack.</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white/10 text-white placeholder:text-gray-400 text-xs px-4 py-3 rounded-full border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#F16529]"
                />
                <button
                  type="submit"
                  className="bg-[#F16529] hover:bg-[#d4511a] text-white font-bold px-6 py-3 rounded-full text-xs uppercase tracking-wider whitespace-nowrap transition-colors"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </motion.div>

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs opacity-50 pt-8 border-t border-white/5">
          <p>© 2026 Red Fox. All rights reserved.</p>
          <p>SINGLE-PAGE SITE WITH ANCHOR NAVIGATION</p>
        </div>
      </div>
    </footer>
  );
}
