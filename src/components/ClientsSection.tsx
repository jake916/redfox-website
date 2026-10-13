"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

interface Client {
  name: string;
  category: string;
  logo: string;
  maxHeight: string;
  badge?: string;
}

const clientsRow1: Client[] = [
  {
    name: "MTN",
    category: "Telecommunications & Media",
    logo: "/images/clients/logo_mtn.png",
    maxHeight: "h-16 sm:h-20 md:h-24",
  },
  {
    name: "Cartoon Network",
    category: "Global Animation Network",
    logo: "/images/clients/logo_cartoon_network.png",
    maxHeight: "h-20 sm:h-24 md:h-28",
  },
  {
    name: "Magic Carpet Studios",
    category: "Animation & Story Studio",
    logo: "/images/clients/logo_magic_carpet.png",
    maxHeight: "h-20 sm:h-24 md:h-28",
  },
];

const clientsRow2: Client[] = [
  {
    name: "STORM",
    category: "Creative Agency & Entertainment",
    logo: "/images/clients/logo_storm.png",
    maxHeight: "h-16 sm:h-20 md:h-24",
  },
  {
    name: "Union Bank",
    category: "Banking & Financial Services",
    logo: "/images/clients/logo_union_bank.png",
    maxHeight: "h-14 sm:h-16 md:h-20",
  },
  {
    name: "TECNO",
    category: "Consumer Tech & Mobile",
    logo: "/images/clients/logo_tecno.png",
    maxHeight: "h-16 sm:h-20 md:h-24",
  },
];

const clientsRow3: Client[] = [
  {
    name: "Film Trybe",
    category: "Film Production & Media",
    logo: "/images/clients/logo_film_trybe.png",
    maxHeight: "h-14 sm:h-16 md:h-20",
  },
  {
    name: "FAANTV",
    category: "Funke Akindele Network",
    logo: "/images/clients/logo_faantv.png",
    maxHeight: "h-14 sm:h-16 md:h-20",
  },
];

export default function ClientsSection() {
  return (
    <section
      id="clients"
      className="relative py-20 sm:py-28 md:py-36 px-6 sm:px-10 md:px-16 bg-[#F5F5F7] text-[#060E27] overflow-hidden border-t border-black/5"
    >
      {/* Background Decorative Accents */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-[#F16529]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-[#4B94F3]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header Block Matching Storyboard Page 5 */}
        <div className="flex flex-col items-center text-center space-y-4 mb-14 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-black/10 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#5C1414] shadow-sm mb-2"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#F16529]" />
            <span>Trusted Partnerships</span>
          </motion.div>

          {/* Authentic 3D CLIENTS Title Graphic from Storyboard */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative w-full max-w-md sm:max-w-xl md:max-w-2xl h-16 sm:h-24 md:h-32 flex items-center justify-center"
          >
            <Image
              src="/images/clients/clients_title_transparent.png"
              alt="CLIENTS"
              fill
              priority
              className="object-contain"
            />
            {/* Screen reader title */}
            <h2 className="sr-only">Clients and Partners</h2>
          </motion.div>

          {/* Storyboard Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-sans text-lg sm:text-xl md:text-2xl font-medium text-[#060E27]/85 tracking-tight max-w-xl"
          >
            Our clients and partners include:
          </motion.p>
        </div>

        {/* Logos Grid Replicating the 3-3-2 Layout from Storyboard */}
        <div className="space-y-6 sm:space-y-8">
          {/* Row 1: MTN | Cartoon Network | Magic Carpet */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {clientsRow1.map((client, idx) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="group relative bg-white border border-black/10 hover:border-[#F16529]/40 rounded-3xl p-8 sm:p-10 flex flex-col items-center justify-center min-h-[170px] sm:min-h-[200px] shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className={`relative w-full ${client.maxHeight} flex items-center justify-center transition-transform duration-300 group-hover:scale-105`}>
                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={400}
                    height={200}
                    className="max-h-full w-auto object-contain"
                  />
                </div>
                <span className="sr-only">{client.name} — {client.category}</span>
              </motion.div>
            ))}
          </div>

          {/* Row 2: STORM | Union Bank | TECNO */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {clientsRow2.map((client, idx) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 + idx * 0.1 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="group relative bg-white border border-black/10 hover:border-[#F16529]/40 rounded-3xl p-8 sm:p-10 flex flex-col items-center justify-center min-h-[170px] sm:min-h-[200px] shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className={`relative w-full ${client.maxHeight} flex items-center justify-center transition-transform duration-300 group-hover:scale-105`}>
                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={400}
                    height={200}
                    className="max-h-full w-auto object-contain"
                  />
                </div>
                <span className="sr-only">{client.name} — {client.category}</span>
              </motion.div>
            ))}
          </div>

          {/* Row 3: FILM TRYBE | FAANTV (Centered 2 Columns) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
            {clientsRow3.map((client, idx) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="group relative bg-white border border-black/10 hover:border-[#F16529]/40 rounded-3xl p-8 sm:p-10 flex flex-col items-center justify-center min-h-[170px] sm:min-h-[200px] shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className={`relative w-full ${client.maxHeight} flex items-center justify-center transition-transform duration-300 group-hover:scale-105`}>
                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={450}
                    height={150}
                    className="max-h-full w-auto object-contain"
                  />
                </div>
                <span className="sr-only">{client.name} — {client.category}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Hand-Drawn / Interactive Bottom Callout (Referencing the Storyboard & Collab Goal) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 sm:mt-20 pt-8 border-t border-black/10 flex flex-col sm:flex-row items-center justify-between gap-6 bg-white/70 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border border-black/10 shadow-sm"
        >
          <div className="space-y-1 text-center sm:text-left">
            <span className="font-handwriting text-2xl text-[#F16529] font-bold block -rotate-1">
              want to team up? 🚀
            </span>
            <p className="font-sans text-base sm:text-lg font-semibold text-[#060E27]">
              Let&apos;s make hilarious, memorable work for your brand.
            </p>
          </div>

          <Link
            href="#contact"
            className="inline-flex items-center gap-2 bg-[#5C1414] hover:bg-[#7a1a1a] text-white font-bold text-sm sm:text-base px-6 py-3 rounded-full shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-200"
          >
            <span>Collab with Us</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
