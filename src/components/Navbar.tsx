"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5 md:py-7"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Left: Brand Logo (Fox Mascot + Graffiti RDFOX) */}
        <Link
          href="#top"
          className="flex items-center group transition-transform duration-200 hover:scale-[1.02]"
        >
          <div className="relative h-12 sm:h-14 md:h-16 w-44 sm:w-52 md:w-60">
            <Image
              src="/images/nav/logo.png"
              alt="Red Fox Logo"
              fill
              priority
              className="object-contain object-left"
            />
          </div>
        </Link>

        {/* Right: Desktop Storyboard Hand-Drawn Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-12">
          {/* 1. THE STORY */}
          <Link
            href="#about"
            className="group relative flex items-center transition-transform duration-200 hover:scale-110 active:scale-95"
            aria-label="The Story"
          >
            <div className="relative h-7 lg:h-8 w-20 lg:w-24">
              <Image
                src="/images/nav/nav_story.png"
                alt="The Story"
                fill
                className="object-contain transition-opacity group-hover:opacity-80"
              />
            </div>
          </Link>

          {/* 2. ENTERTAINMENT */}
          <Link
            href="#showreel"
            className="group relative flex items-center transition-transform duration-200 hover:scale-110 active:scale-95"
            aria-label="Entertainment"
          >
            <div className="relative h-8 lg:h-10 w-24 lg:w-28">
              <Image
                src="/images/nav/nav_entertainment.png"
                alt="Entertainment"
                fill
                className="object-contain transition-opacity group-hover:opacity-80"
              />
            </div>
          </Link>

          {/* 3. STYLES */}
          <a
            href="https://redfoxstyles.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center transition-transform duration-200 hover:scale-110 active:scale-95"
            aria-label="Styles"
          >
            <div className="relative h-6 lg:h-7 w-16 lg:w-20">
              <Image
                src="/images/nav/nav_styles.png"
                alt="Styles"
                fill
                className="object-contain transition-opacity group-hover:opacity-80"
              />
            </div>
          </a>

          {/* 4. CONTACT US! */}
          <Link
            href="#contact"
            className="group relative flex items-center transition-transform duration-200 hover:scale-110 active:scale-95"
            aria-label="Contact Us!"
          >
            <div className="relative h-8 lg:h-10 w-16 lg:w-20">
              <Image
                src="/images/nav/nav_contact.png"
                alt="Contact Us!"
                fill
                className="object-contain transition-opacity group-hover:opacity-80"
              />
            </div>
          </Link>
        </nav>

        {/* Mobile Hamburger Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#5C1414] hover:bg-[#5C1414]/10 rounded-lg transition-colors"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/98 backdrop-blur-lg border-b border-[#5C1414]/15 px-6 py-6 shadow-xl animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col items-center gap-6">
            <Link
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:scale-105 transition-transform"
            >
              <div className="relative h-8 w-28">
                <Image
                  src="/images/nav/nav_story.png"
                  alt="The Story"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>

            <Link
              href="#showreel"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:scale-105 transition-transform"
            >
              <div className="relative h-10 w-32">
                <Image
                  src="/images/nav/nav_entertainment.png"
                  alt="Entertainment"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>

            <a
              href="https://redfoxstyles.com"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:scale-105 transition-transform"
            >
              <div className="relative h-7 w-24">
                <Image
                  src="/images/nav/nav_styles.png"
                  alt="Styles"
                  fill
                  className="object-contain"
                />
              </div>
            </a>

            <Link
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:scale-105 transition-transform"
            >
              <div className="relative h-10 w-24">
                <Image
                  src="/images/nav/nav_contact.png"
                  alt="Contact Us!"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
