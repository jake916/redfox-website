"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-5 left-0 right-0 z-50 px-4 md:px-8 max-w-7xl mx-auto pointer-events-auto">
      {/* Floating White Navigation Bar */}
      <div className="w-full bg-white/95 backdrop-blur-md border border-black/10 rounded-full px-5 py-3 shadow-xl flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="#top" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full bg-[#FFF5F0] border border-[#F16529]/20 flex items-center justify-center overflow-hidden shadow-sm transform group-hover:scale-110 transition-transform duration-300">
            <Image
              src="/redfoxlogo.png"
              alt="Red Fox Logo"
              width={40}
              height={40}
              className="w-full h-full object-contain p-0.5"
            />
          </div>
          <span className="font-display text-2xl text-[#060E27] tracking-tight uppercase">
            Red Fox
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-bold text-[#060E27]/80">
          <Link
            href="#top"
            className="hover:text-[#F16529] transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            href="#about"
            className="hover:text-[#4B94F3] transition-colors duration-200"
          >
            About
          </Link>
          <Link
            href="#styles"
            className="hover:text-[#F16529] transition-colors duration-200"
          >
            Red Fox Styles
          </Link>
          <Link
            href="#coming-soon"
            className="hover:text-[#D18BF4] transition-colors duration-200"
          >
            Coming Soon
          </Link>
          <Link
            href="#contact"
            className="hover:text-[#4EBA81] transition-colors duration-200"
          >
            Contact
          </Link>
        </nav>

        {/* CTA Button & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <a
            href="https://redfoxstyles.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 bg-[#F16529] hover:bg-[#d4511a] text-white font-bold px-5 py-2.5 rounded-full text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <span>Shop Red Fox Styles</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full text-[#060E27] hover:bg-black/5"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-20 left-4 right-4 bg-white border border-black/10 rounded-3xl p-6 shadow-2xl flex flex-col gap-4 md:hidden z-50 animate-in fade-in slide-in-from-top-4 duration-300">
          <Link
            href="#top"
            onClick={() => setMobileMenuOpen(false)}
            className="text-lg font-bold text-[#060E27] py-2 border-b border-gray-100"
          >
            Home
          </Link>
          <Link
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="text-lg font-bold text-[#060E27] py-2 border-b border-gray-100"
          >
            About
          </Link>
          <Link
            href="#styles"
            onClick={() => setMobileMenuOpen(false)}
            className="text-lg font-bold text-[#060E27] py-2 border-b border-gray-100"
          >
            Red Fox Styles
          </Link>
          <Link
            href="#coming-soon"
            onClick={() => setMobileMenuOpen(false)}
            className="text-lg font-bold text-[#060E27] py-2 border-b border-gray-100"
          >
            Coming Soon
          </Link>
          <Link
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="text-lg font-bold text-[#060E27] py-2"
          >
            Contact
          </Link>

          <a
            href="https://redfoxstyles.com"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full text-center bg-[#F16529] text-white font-bold py-3 rounded-full uppercase text-sm mt-2 shadow-md flex items-center justify-center gap-2"
          >
            <span>Shop Red Fox Styles</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      )}
    </header>
  );
}
