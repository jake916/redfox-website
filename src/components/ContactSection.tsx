"use client";

import React, { useState } from "react";
import { Mail, Send, Check } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-[#F5F5F7] px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="bg-white border border-black/10 rounded-3xl md:rounded-[40px] p-8 sm:p-12 md:p-16 shadow-xl relative overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-6 space-y-6"
            >
              <div className="inline-block bg-[#F16529]/15 border border-[#F16529]/30 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#F16529]">
                GET IN TOUCH
              </div>

              <div className="relative">
                <span className="font-handwriting text-3xl text-[#F16529] font-bold block -rotate-3 mb-1">
                  let&apos;s talk 👋
                </span>
                <h2 className="font-display text-4xl sm:text-6xl text-[#060E27] uppercase leading-[0.95] tracking-tight">
                  SAY HELLO TO THE <span className="text-[#F16529]">RED FOX PACK</span>
                </h2>
              </div>

              <p className="text-base sm:text-lg text-[#060E27]/80 leading-relaxed font-medium">
                Have a question about our Red Fox Styles drops, upcoming entertainment releases, or just want to connect? Send us a message!
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#FFF5F0] text-[#F16529] flex items-center justify-center font-bold">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase font-bold text-[#060E27]/50">EMAIL US DIRECTLY</div>
                    <a href="mailto:hello@redfox.com" className="font-bold text-[#060E27] hover:text-[#F16529] text-base sm:text-lg">
                      hello@redfox.com
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-6 bg-[#F5F5F7] border border-black/5 rounded-3xl p-6 sm:p-8"
            >
              {submitted ? (
                <div className="bg-white text-[#060E27] p-8 rounded-2xl text-center space-y-4 shadow-sm border border-black/5">
                  <div className="w-12 h-12 bg-[#4EBA81]/20 text-[#4EBA81] rounded-full flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6 stroke-[3]" />
                  </div>
                  <h3 className="font-display text-2xl uppercase">MESSAGE RECEIVED!</h3>
                  <p className="text-sm text-[#060E27]/70 font-medium">
                    Thanks for reaching out! We&apos;ll get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#060E27]/70 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sam Fox"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white text-[#060E27] px-4 py-3 rounded-xl border border-black/10 focus:outline-none focus:ring-2 focus:ring-[#F16529] text-sm font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#060E27]/70 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="sam@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white text-[#060E27] px-4 py-3 rounded-xl border border-black/10 focus:outline-none focus:ring-2 focus:ring-[#F16529] text-sm font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#060E27]/70 mb-1">
                      Message
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="What's on your mind?"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-white text-[#060E27] px-4 py-3 rounded-xl border border-black/10 focus:outline-none focus:ring-2 focus:ring-[#F16529] text-sm font-medium resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#F16529] hover:bg-[#d4511a] text-white font-bold py-4 rounded-xl text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
