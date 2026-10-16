"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Copy,
  Check,
  Send,
  Sparkles,
  ExternalLink,
  MessageSquare,
  Clock,
  MapPin,
  ArrowRight,
  HelpCircle,
} from "lucide-react";

const INQUIRY_TOPICS = [
  { id: "animation", label: "2D Animation & Motion" },
  { id: "collab", label: "Brand Collaboration" },
  { id: "styles", label: "Red Fox Styles & Wigs" },
  { id: "comedy", label: "Comedy & Content" },
  { id: "general", label: "General Question" },
];

const FAQS = [
  {
    q: "How quickly does the pack respond?",
    a: "Usually within 24–48 hours (WAT). If it's the weekend, we might be deep in character animation or recording skits, but we reply to every genuine message.",
  },
  {
    q: "Do you take on commercial brand projects?",
    a: "Yes! From broadcast 2D motion idents and animated explainer shorts to viral social campaigns and docu-comedy skits, we partner with brands worldwide.",
  },
  {
    q: "Where can I buy Red Fox Styles wigs and merch?",
    a: "Red Fox Styles is our official storefront. All wig collections, apparel drops, and accessory lines live at redfoxstyles.com.",
  },
];

export default function ContactContent() {
  const [selectedTopic, setSelectedTopic] = useState("animation");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("hello@redfoxentertainment.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    // Simulate interactive transmission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    }, 900);
  };

  return (
    <div className="pt-28 md:pt-36 pb-20 md:pb-28">
      {/* =========================================================================
          HEADER SECTION (Storyboard Page 11):
          - Large Hand-Drawn Graffiti "RDFOX"
          - Handwritten Marker Accent "Contact us page."
          - Friendly Tagline and Subheadline
      ========================================================================= */}
      <section className="px-6 md:px-12 lg:px-20 max-w-7xl mx-auto mb-16 md:mb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center space-y-6"
        >
          {/* Top Row: Authentic Handwritten Note + Tagline Badge */}
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#5C1414]/10 text-[#5C1414] text-xs sm:text-sm font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#F16529]" />
              Humor · Nostalgia · Good Vibes Only
            </span>
          </div>

          {/* Centered Large Hand-Drawn Graffiti RDFOX Title from Storyboard Page 11 */}
          <div className="relative w-full max-w-2xl h-28 sm:h-36 md:h-44">
            <Image
              src="/images/contact/title_rdfox_graffiti.png"
              alt="RDFOX Graffiti"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 700px"
              className="object-contain"
            />
          </div>
          <h1 className="sr-only">Contact Us · Red Fox</h1>

          {/* Subheadline & Context */}
          <p className="max-w-2xl mx-auto text-lg sm:text-xl md:text-2xl font-bold text-[#5C1414] leading-snug">
            We make people laugh —{" "}
            <span className="font-handwriting text-2xl sm:text-3xl md:text-4xl text-[#F16529] font-normal block sm:inline">
              then we reply to their messages.
            </span>
          </p>

          <p className="max-w-xl mx-auto text-sm sm:text-base text-[#060E27]/75 font-medium leading-relaxed">
            Got a wild 2D animation idea, a brand collaboration, a question about our drops, or just want to say hi? Drop us a line below.
          </p>
        </motion.div>
      </section>

      {/* =========================================================================
          MAIN CONTACT SECTION (Storyboard Page 11 Layout):
          - Left Column: Standing Fox Mascot Sketch + Speech Bubble + Direct Quick Contacts
          - Right Column: Hand-Drawn Form Container (2 top inputs + topic selector + message)
      ========================================================================= */}
      <section className="px-6 md:px-12 lg:px-20 max-w-7xl mx-auto mb-24 md:mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* ---------------------------------------------------------------------
              LEFT COLUMN: Fox Mascot Sketch + Quick Connect Info
          --------------------------------------------------------------------- */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 flex flex-col items-center lg:items-start space-y-8"
          >
            {/* Mascot Sketch & Witty Bubble */}
            <div className="relative w-full max-w-sm mx-auto lg:mx-0 bg-white rounded-3xl p-6 sm:p-8 border border-[#5C1414]/15 shadow-sm overflow-hidden flex flex-col items-center text-center">
              {/* Authentic Storyboard Marker Badge in corner */}
              {/* <div className="absolute -top-3 -right-3 w-24 h-24 pointer-events-none rotate-12 opacity-85">
                <Image
                  src="/images/contact/badge_contact_note.png"
                  alt="Contact note sticker"
                  fill
                  sizes="100px"
                  className="object-contain"
                />
              </div> */}

              {/* The Standing Fox Mascot (extracted from Storyboard Page 11) */}
              <div className="relative w-48 sm:w-56 h-64 sm:h-72 my-2">
                <Image
                  src="/images/contact/mascot_fox_pointing.png"
                  alt="Red Fox Mascot Pointing"
                  fill
                  sizes="(max-width: 640px) 200px, 240px"
                  className="object-contain drop-shadow-sm transition-transform duration-300 hover:scale-105"
                />
              </div>

              {/* Speech Bubble / Quote */}
              <div className="mt-4 p-4 rounded-2xl bg-[#F5F5F7] border border-[#5C1414]/10 w-full text-left space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#F16529] uppercase tracking-wider">
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>The Fox Says:</span>
                </div>
                <p className="text-sm font-bold text-[#5C1414] leading-relaxed">
                  &ldquo;Don&apos;t be shy! We actually read every single message. Fill out the form or hit our inbox directly.&rdquo;
                </p>
              </div>
            </div>

            {/* Direct Connect Quick Cards */}
            <div className="w-full space-y-3.5">
              {/* 1. Direct Email Card with Copy button */}
              <div className="p-5 rounded-2xl bg-white border border-[#5C1414]/15 shadow-xs flex items-center justify-between gap-4">
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-[#5C1414]/10 text-[#5C1414] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-xs font-bold uppercase tracking-wider text-gray-500 block">
                      Direct Email
                    </span>
                    <a
                      href="mailto:hello@redfoxentertainment.com"
                      className="text-sm sm:text-base font-bold text-[#5C1414] hover:text-[#F16529] transition-colors truncate block"
                    >
                      hello@redfoxentertainment.com
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2 text-gray-500 hover:text-[#5C1414] hover:bg-[#5C1414]/10 rounded-lg transition-colors shrink-0"
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  {copiedEmail ? (
                    <Check className="w-5 h-5 text-green-600" />
                  ) : (
                    <Copy className="w-5 h-5" />
                  )}
                </button>
              </div>

              {/* 2. Response Time & Studio Location */}
              <div className="grid grid-cols-2 gap-3.5 text-xs text-gray-600">
                <div className="p-4 rounded-2xl bg-white border border-[#5C1414]/15 shadow-xs space-y-1">
                  <div className="flex items-center gap-1.5 text-[#5C1414] font-bold">
                    <Clock className="w-3.5 h-3.5 text-[#F16529]" />
                    <span>Response Time</span>
                  </div>
                  <p className="font-medium text-[#060E27]/80">
                    Within 24–48 hours
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-[#5C1414]/15 shadow-xs space-y-1">
                  <div className="flex items-center gap-1.5 text-[#5C1414] font-bold">
                    <MapPin className="w-3.5 h-3.5 text-[#F16529]" />
                    <span>Creative Studio</span>
                  </div>
                  <p className="font-medium text-[#060E27]/80">
                    Lagos, NG · Worldwide
                  </p>
                </div>
              </div>

              {/* 3. Social Pack Links (Copy Section 6) */}
              <div className="p-5 rounded-2xl bg-white border border-[#5C1414]/15 shadow-xs flex flex-wrap items-center justify-between gap-3 text-xs font-bold uppercase tracking-wider">
                <span className="text-gray-500">Follow the Pack:</span>
                <div className="flex items-center gap-3">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#F16529]/10 text-[#F16529] hover:bg-[#F16529] hover:text-white transition-all"
                  >
                    <span>Instagram</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a
                    href="https://tiktok.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#4B94F3]/10 text-[#4B94F3] hover:bg-[#4B94F3] hover:text-white transition-all"
                  >
                    <span>TikTok</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ---------------------------------------------------------------------
              RIGHT COLUMN: Contact Form Card (Storyboard Page 11 Layout)
              - 2 Top Side-by-Side Inputs: Name & Email
              - Topic Selection Pills
              - Wide Textarea: Message
              - Action Button
          --------------------------------------------------------------------- */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="bg-white rounded-3xl p-6 sm:p-10 md:p-12 border-2 border-[#5C1414]/20 shadow-xl relative overflow-hidden">
              
              {/* Subtle top sketch accent bar */}
              <div className="h-1.5 w-full bg-gradient-to-r from-[#5C1414] via-[#F16529] to-[#4B94F3] absolute top-0 left-0" />

              <div className="space-y-6">
                <div>
                  <h2 className="font-display text-2xl sm:text-3xl text-[#5C1414] uppercase tracking-wide">
                    SEND US A MESSAGE
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-500 font-medium mt-1">
                    Fill out the fields below and our team will get right back to you.
                  </p>
                </div>

                <AnimatePresence mode="wait">
                  {isSubmitted ? (
                    /* Success Confirmation State */
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="py-12 px-6 text-center space-y-4 bg-[#F5F5F7] rounded-2xl border border-green-500/20"
                    >
                      <div className="w-16 h-16 rounded-full bg-green-500 text-white mx-auto flex items-center justify-center shadow-md animate-bounce">
                        <Check className="w-8 h-8 stroke-[3]" />
                      </div>
                      <h3 className="font-display text-2xl sm:text-3xl text-[#5C1414] uppercase">
                        MESSAGE RECEIVED!
                      </h3>
                      <p className="text-sm text-gray-600 max-w-md mx-auto leading-relaxed font-medium">
                        Thank you for reaching out! Your message has landed safely with the Red Fox team. We will review your note and respond shortly.
                      </p>
                      <button
                        onClick={() => setIsSubmitted(false)}
                        className="mt-4 px-6 py-2.5 rounded-full bg-[#5C1414] hover:bg-[#430e0e] text-white font-bold text-xs uppercase tracking-wider transition-colors"
                      >
                        Send Another Note
                      </button>
                    </motion.div>
                  ) : (
                    /* The Active Form */
                    <form onSubmit={handleSubmit} className="space-y-5">
                      
                      {/* Top Row (Storyboard Page 11): 2 Side-by-Side Inputs */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* Field 1: Full Name */}
                        <div className="space-y-1.5">
                          <label
                            htmlFor="contact-name"
                            className="block text-xs font-bold uppercase tracking-wider text-[#5C1414]"
                          >
                            YOUR NAME <span className="text-[#F16529]">*</span>
                          </label>
                          <input
                            id="contact-name"
                            type="text"
                            required
                            placeholder="e.g. Maya Cole"
                            value={formData.name}
                            onChange={(e) =>
                              setFormData({ ...formData, name: e.target.value })
                            }
                            className="w-full bg-[#F5F5F7] text-[#060E27] placeholder:text-gray-400 text-sm px-4 py-3.5 rounded-xl border border-[#5C1414]/20 focus:outline-none focus:ring-2 focus:ring-[#F16529] focus:bg-white transition-all font-medium"
                          />
                        </div>

                        {/* Field 2: Email Address */}
                        <div className="space-y-1.5">
                          <label
                            htmlFor="contact-email"
                            className="block text-xs font-bold uppercase tracking-wider text-[#5C1414]"
                          >
                            EMAIL ADDRESS <span className="text-[#F16529]">*</span>
                          </label>
                          <input
                            id="contact-email"
                            type="email"
                            required
                            placeholder="you@domain.com"
                            value={formData.email}
                            onChange={(e) =>
                              setFormData({ ...formData, email: e.target.value })
                            }
                            className="w-full bg-[#F5F5F7] text-[#060E27] placeholder:text-gray-400 text-sm px-4 py-3.5 rounded-xl border border-[#5C1414]/20 focus:outline-none focus:ring-2 focus:ring-[#F16529] focus:bg-white transition-all font-medium"
                          />
                        </div>
                      </div>

                      {/* Topic Pill Selector */}
                      <div className="space-y-2 pt-1">
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#5C1414]">
                          WHAT&apos;S ON YOUR MIND?
                        </label>
                        <div className="flex flex-wrap gap-2">
                          {INQUIRY_TOPICS.map((topic) => (
                            <button
                              key={topic.id}
                              type="button"
                              onClick={() => setSelectedTopic(topic.id)}
                              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                                selectedTopic === topic.id
                                  ? "bg-[#5C1414] text-white shadow-xs scale-[1.02]"
                                  : "bg-[#F5F5F7] text-gray-700 hover:bg-[#5C1414]/10 hover:text-[#5C1414]"
                              }`}
                            >
                              {topic.label}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Bottom Row (Storyboard Page 11): Large Message Box */}
                      <div className="space-y-1.5 pt-1">
                        <label
                          htmlFor="contact-message"
                          className="block text-xs font-bold uppercase tracking-wider text-[#5C1414]"
                        >
                          YOUR MESSAGE <span className="text-[#F16529]">*</span>
                        </label>
                        <textarea
                          id="contact-message"
                          required
                          rows={5}
                          placeholder="Tell us about your project, idea, timeline, or whatever's on your mind..."
                          value={formData.message}
                          onChange={(e) =>
                            setFormData({ ...formData, message: e.target.value })
                          }
                          className="w-full bg-[#F5F5F7] text-[#060E27] placeholder:text-gray-400 text-sm p-4 rounded-xl border border-[#5C1414]/20 focus:outline-none focus:ring-2 focus:ring-[#F16529] focus:bg-white transition-all font-medium resize-none"
                        />
                      </div>

                      {/* Action Button */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-[#5C1414] hover:bg-[#430e0e] text-white font-bold py-4 rounded-xl text-sm uppercase tracking-wider transition-all hover:scale-[1.01] active:scale-[0.99] shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            <span>Sending to Red Fox...</span>
                          </>
                        ) : (
                          <>
                            <span>Send Message</span>
                            <Send className="w-4 h-4" />
                          </>
                        )}
                      </button>

                      <p className="text-[11px] text-gray-400 text-center font-medium">
                        No spam. No endless marketing funnels. Just real people making cool things.
                      </p>
                    </form>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* =========================================================================
          FAQ / WHAT TO EXPECT SECTION:
          Quick answers to common questions about collaboration and products
      ========================================================================= */}
      <section className="px-6 md:px-12 lg:px-20 max-w-5xl mx-auto border-t border-[#5C1414]/10 pt-16 md:pt-20">
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 text-[#5C1414] font-bold text-xs uppercase tracking-wider">
            <HelpCircle className="w-4 h-4 text-[#F16529]" />
            <span>Got Questions?</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl text-[#5C1414] uppercase">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <p className="text-sm text-gray-600 max-w-md mx-auto font-medium">
            Quick notes before you submit your inquiry to the Red Fox team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FAQS.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 border border-[#5C1414]/15 shadow-xs space-y-2.5"
            >
              <h3 className="font-bold text-[#5C1414] text-sm leading-snug">
                {faq.q}
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed font-medium">
                {faq.a}
              </p>
            </div>
          ))}
        </div>

        {/* Red Fox Styles Link Prompt */}
        <div className="mt-12 p-6 rounded-2xl bg-[#5C1414]/5 border border-[#5C1414]/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <span className="text-xs font-bold text-[#F16529] uppercase tracking-wider block">
              Looking for our wigs & fashion store?
            </span>
            <p className="text-sm font-bold text-[#5C1414]">
              Visit Red Fox Styles to explore our newest wig collections & apparel drops.
            </p>
          </div>
          <a
            href="https://redfoxstyles.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#5C1414] hover:bg-[#430e0e] text-white font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-full transition-all hover:scale-105 active:scale-95 shrink-0"
          >
            <span>Visit Styles Store</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </section>
    </div>
  );
}
