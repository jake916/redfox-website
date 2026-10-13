"use client";

import React, { useState, useRef } from "react";
import { Volume2, VolumeX, Play, Pause, Maximize2 } from "lucide-react";

interface ShowreelSectionProps {
  videoId?: string;
}

export default function ShowreelSection({ videoId = "u9lj-c29dxI" }: ShowreelSectionProps) {
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Send commands to YouTube iframe via postMessage
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
    if (iframeRef.current) {
      if (iframeRef.current.requestFullscreen) {
        iframeRef.current.requestFullscreen();
      }
    }
  };

  return (
    <section
      id="showreel"
      className="relative w-full bg-black overflow-hidden"
    >
      {/* Target anchor for entertainment link */}
      <span id="entertainment" className="sr-only" />

      {/* Full-width 16:9 Video Container */}
      <div className="relative w-full aspect-video min-h-[360px] md:min-h-[500px] lg:min-h-[640px]">
        <iframe
          ref={iframeRef}
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&playsinline=1&controls=1&rel=0&modestbranding=1&enablejsapi=1`}
          title="Red Fox Showreel"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="w-full h-full object-cover border-0"
        />

        {/* Floating Controls Overlay */}
        <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 right-4 sm:right-8 flex items-center justify-between pointer-events-auto z-10">
          {/* Sound / Unmute Toggle Button */}
          <button
            onClick={toggleSound}
            className="flex items-center gap-2 bg-[#5C1414] hover:bg-[#7a1a1a] text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-bold shadow-2xl transition-all duration-200 transform hover:scale-105 active:scale-95 border border-white/20 cursor-pointer"
            aria-label={isMuted ? "Unmute audio" : "Mute audio"}
          >
            {isMuted ? (
              <>
                <VolumeX className="w-4 h-4 text-white" />
                <span>Click for Sound</span>
              </>
            ) : (
              <>
                <Volume2 className="w-4 h-4 text-[#F16529]" />
                <span>Sound On</span>
              </>
            )}
          </button>

          {/* Play/Pause & Fullscreen Controls */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={togglePlay}
              className="flex items-center justify-center bg-black/70 hover:bg-black/90 text-white p-2.5 sm:p-3 rounded-full text-xs sm:text-sm backdrop-blur-md transition-all duration-200 hover:scale-105 active:scale-95 border border-white/15 cursor-pointer"
              aria-label={isPlaying ? "Pause video" : "Play video"}
            >
              {isPlaying ? (
                <Pause className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              ) : (
                <Play className="w-4 h-4 sm:w-5 sm:h-5 text-white fill-white" />
              )}
            </button>

            <button
              onClick={toggleFullscreen}
              className="flex items-center justify-center bg-black/70 hover:bg-black/90 text-white p-2.5 sm:p-3 rounded-full text-xs sm:text-sm backdrop-blur-md transition-all duration-200 hover:scale-105 active:scale-95 border border-white/15 cursor-pointer"
              aria-label="View fullscreen"
            >
              <Maximize2 className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
