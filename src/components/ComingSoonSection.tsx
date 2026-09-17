"use client";

import React, { useState } from "react";
import ScallopedDivider from "./ScallopedDivider";
import { Check, Film, Tv, Sparkle } from "lucide-react";
import { motion } from "framer-motion";

export default function ComingSoonSection() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  const formats = [
    {
      title: "HUMOROUS COMIC STRIPS",
      icon: <Sparkle className="w-5 h-5 text-[#F16529]" />,
      desc: "Relatable daily comics bringing laugh-out-loud moments to your timeline.",
    },
    {
      title: "DAY IN THE LIFE CLIPS",
      icon: <Film className="w-5 h-5 text-[#4B94F3]" />,
      desc: "Docu-style social clips shot raw and unscripted. Real stories, real humor.",
    },
    {
      title: "2D ANIMATED SEGMENTS",
      icon: <Tv className="w-5 h-5 text-[#4EBA81]" />,
      desc: "Select animated stories brought to life with vibrant character animation.",
    },
  ];

  return (
    <section id="coming-soon" className="relative bg-[#060E27] text-white pt-20 pb-28 px-4 md:px-8 overflow-hidden">
      {/* Top Scallop */}
      <ScallopedDivider fillColor="#060E27" position="top" className="absolute -top-1 left-0 right-0" />

      {/* Background Gradient Blurs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#4B94F3]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#F16529]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-16 pt-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto space-y-4"
        >
          <div className="inline-block bg-[#D18BF4]/20 border border-[#D18BF4]/40 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#D18BF4]">
            COMING SOON: 
          </div>

          <h2 className="font-display text-4xl sm:text-6xl md:text-8xl uppercase leading-[0.9] tracking-tight">
            THE FUNNY STUFF IS <span className="text-[#F16529]">ON ITS WAY.</span>
          </h2>

          <p className="text-base sm:text-xl opacity-85 leading-relaxed font-medium">
            We&apos;re building something special humorous comic strips, docu-style social clips shot like &ldquo;a day in the life,&rdquo; and select segments brought to life with 2D animation. No stages, no scripts that feel like scripts. Just real, relatable humor.
          </p>
        </motion.div>

        {/* 3 Format Preview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {formats.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md hover:bg-white/10 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
                {item.icon}
              </div>
              <h3 className="font-display text-2xl uppercase mb-2 tracking-wide">
                {item.title}
              </h3>
              <p className="text-sm opacity-75 leading-relaxed font-medium">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Signup Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-[#F16529] to-[#d4511a] rounded-3xl md:rounded-[40px] p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden"
        >
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <span className="font-handwriting text-3xl text-[#E5EC5B] font-bold block -rotate-3">
              be the first to see it 🚀
            </span>

            <h3 className="font-display text-3xl sm:text-5xl uppercase leading-tight">
              NEVER MISS A DROP OR RELEASE
            </h3>

            <p className="text-sm sm:text-base opacity-90 font-medium">
              Join the pack to get early access to upcoming social clips, original series releases, and exclusive merch drops.
            </p>

            {subscribed ? (
              <div className="bg-white text-[#060E27] font-bold p-4 rounded-full max-w-md mx-auto flex items-center justify-center gap-2 shadow-lg animate-in fade-in zoom-in duration-300">
                <Check className="w-5 h-5 text-[#4EBA81]" />
                <span>You&apos;re on the list! We&apos;ll notify you first. 🦊</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white text-[#060E27] placeholder:text-gray-400 font-medium px-6 py-4 rounded-full border-none focus:outline-none focus:ring-4 focus:ring-black/20 text-sm shadow-md"
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto bg-[#060E27] hover:bg-black text-white font-bold px-8 py-4 rounded-full text-xs uppercase tracking-wider shadow-lg hover:shadow-xl transition-all duration-300 whitespace-nowrap"
                >
                  Notify Me
                </button>
              </form>
            )}

            {/* Social Links Prompt */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3 text-sm font-bold opacity-90">
              <span>Follow along as we build →</span>
              <div className="flex items-center gap-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/20 hover:bg-white/30 px-4 py-1.5 rounded-full text-xs uppercase tracking-wider transition-colors"
                >
                  Instagram ↗
                </a>
                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/20 hover:bg-white/30 px-4 py-1.5 rounded-full text-xs uppercase tracking-wider transition-colors"
                >
                  TikTok ↗
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Scallop */}
      <ScallopedDivider fillColor="#060E27" position="bottom" className="absolute -bottom-1 left-0 right-0" />
    </section>
  );
}
