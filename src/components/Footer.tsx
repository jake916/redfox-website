"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#EBD8E6] text-[#241A23] pt-16 md:pt-24 pb-12 md:pb-16 px-6 md:px-12 lg:px-20 border-t border-[#853D6D]/15">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start justify-between">
          {/* -----------------------------------------------------------------
              LEFT COLUMN: Stacked Script Logo + Warm Bio Statement
              (Matches the Jenny Hoyos reference signature & intro paragraph)
          ----------------------------------------------------------------- */}
          <div className="lg:col-span-7 space-y-6 max-w-xl">
            {/* Signature Logo Lockup: Fox Mascot + Stacked Cursive "red fox" */}
            <Link
              href="/"
              className="inline-flex items-center gap-3.5 group"
              aria-label="Red Fox Home"
            >
              <div className="relative w-14 h-14 sm:w-16 sm:h-16 shrink-0 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/redfoxlogo.png"
                  alt="Red Fox Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="font-handwriting text-5xl sm:text-6xl font-bold text-[#1E121C] leading-[0.8] -rotate-2 group-hover:text-[#853D6D] transition-colors">
                <span className="block">red</span>
                <span className="block">fox</span>
              </div>
            </Link>

            {/* Bio / Mission statement styled like the reference */}
            <p className="text-[#2E222D] text-base sm:text-lg leading-relaxed font-normal">
              We&apos;re Red Fox, a collective of an architect, fine artist, and mass
              communicator who believe the best things in life happen when you follow
              your curiosity. Through storytelling, quirky animations, and creative
              experiments, we hope to inspire people to try new things, think
              bigger, and have a little more fun along the way!
            </p>
          </div>

          {/* -----------------------------------------------------------------
              RIGHT COLUMN: Two Clean Navigation Columns
              Col 1: Home, Contact Us + 3 Filled Social Icon Circles
              Col 2: The Story, Entertainment, Styles (or Fans, Brands, Creators)
          ----------------------------------------------------------------- */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-8 sm:gap-12 pt-2 lg:pt-3">
            {/* Column 1: Home & Contact */}
            <div className="space-y-4">
              <div>
                <Link
                  href="/"
                  className="font-sans text-xl sm:text-2xl font-semibold text-[#853D6D] hover:opacity-75 transition-opacity inline-block"
                >
                  Home
                </Link>
              </div>

              <div>
                <Link
                  href="/contact"
                  className="font-sans text-xl sm:text-2xl font-semibold text-[#853D6D] hover:opacity-75 transition-opacity inline-block"
                >
                  Contact Us
                </Link>
              </div>

              {/* Social Media Pill / Circle Badges: TikTok, YouTube, Instagram */}
              <div className="pt-2 flex items-center gap-2.5 sm:gap-3">
                {/* TikTok */}
                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok"
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#853D6D] text-white flex items-center justify-center hover:scale-110 hover:brightness-110 active:scale-95 transition-all shadow-sm"
                >
                  <svg
                    className="w-4 h-4 fill-current"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.82 4.49 6.27 6.27 0 0 0 1.95-4.49V8.66a8.27 8.27 0 0 0 4.84 1.56v-3.5a4.84 4.84 0 0 1-1.02-.03z" />
                  </svg>
                </a>

                {/* YouTube */}
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#853D6D] text-white flex items-center justify-center hover:scale-110 hover:brightness-110 active:scale-95 transition-all shadow-sm"
                >
                  <svg
                    className="w-4 h-4 fill-current"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#853D6D] text-white flex items-center justify-center hover:scale-110 hover:brightness-110 active:scale-95 transition-all shadow-sm"
                >
                  <svg
                    className="w-4 h-4 fill-current"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Column 2: The Story, Entertainment, Styles */}
            <div className="space-y-4">
              <div>
                <Link
                  href="/story"
                  className="font-sans text-xl sm:text-2xl font-semibold text-[#853D6D] hover:opacity-75 transition-opacity inline-block"
                >
                  The Story
                </Link>
              </div>

              <div>
                <Link
                  href="/entertainment"
                  className="font-sans text-xl sm:text-2xl font-semibold text-[#853D6D] hover:opacity-75 transition-opacity inline-block"
                >
                  Entertainment
                </Link>
              </div>

              <div>
                <a
                  href="https://redfoxstyles.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-xl sm:text-2xl font-semibold text-[#853D6D] hover:opacity-75 transition-opacity inline-block"
                >
                  Styles
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* -----------------------------------------------------------------
            BOTTOM COPYRIGHT BAR: Clean and minimalist
        ----------------------------------------------------------------- */}
        <div className="mt-14 sm:mt-16 pt-6 border-t border-[#853D6D]/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-[#853D6D]/70">
          <p>© {new Date().getFullYear()} Red Fox. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/story" className="hover:text-[#853D6D] transition-colors">
              Our Story
            </Link>
            <Link href="/contact" className="hover:text-[#853D6D] transition-colors">
              Contact
            </Link>
            <a
              href="https://discord.gg"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#853D6D] transition-colors"
            >
              Discord Community
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
