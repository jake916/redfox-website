"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize2,
} from "lucide-react";

export default function EntertainmentContent() {
  // Video Showreel Player State
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const sendYoutubeCommand = (func: string, args: unknown[] = []) => {
    if (iframeRef.current && iframeRef.current.contentWindow) {
      iframeRef.current.contentWindow.postMessage(
        JSON.stringify({
          event: "command",
          func,
          args,
        }),
        "*"
      );
    }
  };

  const toggleSound = () => {
    if (isMuted) {
      sendYoutubeCommand("unMute");
      sendYoutubeCommand("setVolume", [100]);
      setIsMuted(false);
    } else {
      sendYoutubeCommand("mute");
      setIsMuted(true);
    }
  };

  const togglePlay = () => {
    if (isPlaying) {
      sendYoutubeCommand("pauseVideo");
      setIsPlaying(false);
    } else {
      sendYoutubeCommand("playVideo");
      setIsPlaying(true);
    }
  };

  const toggleFullscreen = () => {
    if (iframeRef.current && iframeRef.current.requestFullscreen) {
      iframeRef.current.requestFullscreen();
    }
  };


  return (
    <div className="pt-28 md:pt-36 pb-20 md:pb-28">
      {/* =========================================================================
          SECTION 1 (Storyboard Page 9): OUR INTENTION IS TO MAKE U LAUGH!
          Authentic Hand-Drawn Title + All Coming Soon Box + Media Pipeline Cards
      ========================================================================= */}
      <section className="px-6 md:px-12 lg:px-20 max-w-7xl mx-auto mb-28 md:mb-36">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-8">

          {/* Authentic Hand-Drawn Title from Storyboard Page 9 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative w-full max-w-xl h-44 sm:h-56 md:h-64 my-2"
          >
            <Image
              src="/images/entertainment/title_our_intention_is.png"
              alt="OUR INTENTION IS, to make u laugh!"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 650px"
              className="object-contain"
            />
          </motion.div>
          <h1 className="sr-only">Our Intention is to make you laugh!</h1>

          {/* Core Storyboard Copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4 max-w-2xl"
          >
            {/* <p className="text-xl sm:text-2xl md:text-3xl font-bold text-[#5C1414] leading-snug">
              This section will soon be populated with stand-up comedy and music using live-action, illustrated and animated media...
            </p> */}
            <p className="font-display text-3xl sm:text-4xl text-[#F16529] tracking-wider uppercase">
              ALL COMING SOON!
            </p>
            <p className="text-base sm:text-lg text-[#060E27]/80 leading-relaxed font-normal pt-2">
              We&apos;re building something special — humorous comic strips, docu-style social clips shot like &ldquo;a day in the life,&rdquo; and select segments brought to life with 2D animation. No stages, no scripts that feel like scripts. Just real, relatable humor.
            </p>
          </motion.div>

          {/* "Be the first to see it" Newsletter Box */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-full max-w-lg bg-white p-6 sm:p-8 rounded-3xl border-2 border-dashed border-[#5C1414]/25 shadow-md space-y-4"
          >
            <div>
              <span className="font-bold text-[#5C1414] text-lg sm:text-xl block">
                Be the first to see it.
              </span>
              <p className="text-xs sm:text-sm text-gray-600 mt-1">
                Drop your email to get early access passes to our comedy pilots and animation drops.
              </p>
            </div>

            {subscribed ? (
              <div className="bg-[#4EBA81] text-white text-xs sm:text-sm font-bold p-3.5 rounded-full flex items-center justify-center gap-2">
                <Check className="w-4 h-4" />
                <span>You&apos;re on the VIP list! We will notify you first.</span>
              </div>
            ) : (
              <form onSubmit={handleNotifySubmit} className="flex gap-2">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-[#F5F5F7] text-[#060E27] placeholder:text-gray-400 text-xs sm:text-sm px-5 py-3 rounded-full border border-[#5C1414]/20 focus:outline-none focus:ring-2 focus:ring-[#F16529]"
                />
                <button
                  type="submit"
                  className="bg-[#5C1414] hover:bg-[#430e0e] text-white font-bold px-6 py-3 rounded-full text-xs sm:text-sm uppercase tracking-wider whitespace-nowrap transition-colors shadow-xs flex items-center gap-1.5"
                >
                  <Bell className="w-4 h-4" />
                  <span>Notify Me</span>
                </button>
              </form>
            )}

            <div className="pt-2 text-xs text-gray-500 font-medium flex items-center justify-center gap-3">
              <span>Follow along as we build:</span>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-[#F16529] font-bold hover:opacity-80"
              >
                Instagram ↗
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-[#4B94F3] font-bold hover:opacity-80"
              >
                TikTok ↗
              </a>
            </div>
          </motion.div> */}

          {/* 3 Upcoming Media Formats */}
          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full pt-8 text-left">
            <motion.div
              whileHover={{ y: -6 }}
              className="p-6 rounded-3xl bg-white border border-[#5C1414]/15 shadow-sm space-y-3"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#5C1414]/10 text-[#5C1414] flex items-center justify-center">
                <Laugh className="w-6 h-6" />
              </div>
              <h3 className="font-display text-2xl text-[#5C1414]">STAND-UP & SKITS</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Raw, observational live-action sketches and docu-style comedy capturing the hilarious realities of modern life.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -6 }}
              className="p-6 rounded-3xl bg-white border border-[#5C1414]/15 shadow-sm space-y-3"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#F16529]/15 text-[#F16529] flex items-center justify-center">
                <Film className="w-6 h-6" />
              </div>
              <h3 className="font-display text-2xl text-[#F16529]">2D ANIMATION</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Short-form animated segments and mischievous cartoon characters with classic cartoon bounce and snappy punchlines.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -6 }}
              className="p-6 rounded-3xl bg-white border border-[#5C1414]/15 shadow-sm space-y-3"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#4B94F3]/15 text-[#4B94F3] flex items-center justify-center">
                <Music className="w-6 h-6" />
              </div>
              <h3 className="font-display text-2xl text-[#4B94F3]">MUSTARD MUSIC</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Hilarious musical parodies, catchy earworms, and comedic audio bangers designed to make you laugh and nod along.
              </p>
            </motion.div>
          </div> */}
        </div>
      </section>

      {/* =========================================================================
          SECTION 2 (Storyboard Page 10): COLLABORATIONS!
          Authentic Hand-Drawn Title + "Showreels refer to jennyhoyos.com brand page"
          Showreel Player + Filterable Portfolio Grid
      ========================================================================= */}
      <section className="bg-white py-24 md:py-32 border-t border-[#5C1414]/10 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Section Header */}
          <div className="flex flex-col items-center text-center space-y-6 max-w-3xl mx-auto">
            {/* Hand-Drawn Title from Storyboard Page 10 */}
            <div className="relative w-full max-w-md h-32 sm:h-40 md:h-44">
              <Image
                src="/images/entertainment/title_collaborations.png"
                alt="Collaborations!"
                fill
                sizes="(max-width: 768px) 100vw, 500px"
                className="object-contain"
              />
            </div>
            <h2 className="sr-only">Collaborations!</h2>

            <p className="text-xl sm:text-2xl md:text-3xl font-bold text-[#5C1414]">
              Here are some of our personal and professional works in our showreels.
            </p>
            <p className="text-sm sm:text-base text-gray-600 max-w-xl">
              From global television broadcast idents to viral branded comic campaigns and narrative film pre-visualization, we bring high-octane creative energy to every partnership.
            </p>
          </div>

          {/* Featured Showreel Video Theater (Jenny Hoyos inspired centerpiece) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full max-w-5xl mx-auto bg-[#060E27] rounded-3xl p-3 sm:p-5 shadow-2xl border-2 border-[#5C1414]/30 overflow-hidden"
          >
            {/* Video Header Bar */}
            <div className="flex items-center justify-between px-3 py-2 text-white/80 text-xs font-semibold mb-2">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
                <span className="uppercase tracking-wider">FEATURED REEL · 2D ANIMATION & COMEDY SHOWCASE</span>
              </div>
              <div className="flex items-center gap-2 text-white/50 text-[11px]">
                <span>RED FOX STUDIO</span>
              </div>
            </div>

            {/* Video Container */}
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-black shadow-inner">
              <iframe
                ref={iframeRef}
                src="https://www.youtube.com/embed/u9lj-c29dxI?enablejsapi=1&autoplay=1&mute=1&controls=0&loop=1&playlist=u9lj-c29dxI&playsinline=1&rel=0&modestbranding=1"
                title="Red Fox Animation Showreel"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                className="w-full h-full object-cover scale-105 pointer-events-none"
              />

              {/* Floating Controls Overlay */}
              <div className="absolute bottom-4 right-4 z-20 flex items-center gap-2 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20">
                <button
                  onClick={togglePlay}
                  className="p-1.5 text-white/90 hover:text-white transition-colors"
                  aria-label={isPlaying ? "Pause Video" : "Play Video"}
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                </button>
                <button
                  onClick={toggleSound}
                  className="p-1.5 text-white/90 hover:text-white transition-colors"
                  aria-label={isMuted ? "Unmute Video" : "Mute Video"}
                >
                  {isMuted ? <VolumeX className="w-4 h-4 text-red-400" /> : <Volume2 className="w-4 h-4 text-green-400" />}
                </button>
                <button
                  onClick={toggleFullscreen}
                  className="p-1.5 text-white/90 hover:text-white transition-colors"
                  aria-label="Fullscreen"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Interactive Category Filter Pills (Jenny Hoyos Brand Showcase Style) */}
          {/* <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 pt-4">
            {[
              { id: "all", label: "All Works" },
              { id: "animation", label: "Animation & Motion" },
              { id: "brand", label: "Brand Collaborations" },
              { id: "comedy", label: "Original Comedy" },
              { id: "audio", label: "Radio & Audio" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-wide transition-all ${
                  activeCategory === tab.id
                    ? "bg-[#5C1414] text-white shadow-md scale-105"
                    : "bg-[#F5F5F7] text-[#060E27]/70 hover:bg-[#5C1414]/10 hover:text-[#5C1414]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div> */}

        </div>
      </section>

      {/* =========================================================================
          SECTION 3: COLLABORATION CTA & INQUIRIES
      ========================================================================= */}
      {/* <section className="px-6 md:px-12 lg:px-20 max-w-5xl mx-auto pt-20">
        <div className="bg-[#060E27] text-white rounded-3xl p-8 sm:p-12 md:p-16 text-center space-y-6 shadow-2xl relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#F16529]">
              LET&apos;S CREATE TOGETHER
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl uppercase tracking-wide">
              HAVE A PROJECT OR COMMERCIAL INQUIRY?
            </h2>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              Whether you need 2D animated showstoppers, viral comic characters, or hilarious narrative campaigns that turn heads, our collective is ready to collaborate.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#F16529] hover:bg-[#d4511a] text-white font-bold px-8 py-4 rounded-full text-sm sm:text-base uppercase tracking-wider transition-all hover:scale-105 active:scale-95 shadow-lg"
              >
                <span>Collab with Us!</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/story"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white font-bold px-8 py-4 rounded-full text-sm sm:text-base transition-colors"
              >
                <span>Meet the Pack (The Story)</span>
                <ExternalLink className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
}
