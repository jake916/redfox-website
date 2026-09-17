import React from "react";

interface ScallopedDividerProps {
  fillColor?: string;
  position?: "top" | "bottom";
  className?: string;
}

export default function ScallopedDivider({
  fillColor = "#F5F5F7",
  position = "top",
  className = "",
}: ScallopedDividerProps) {
  return (
    <div
      className={`w-full overflow-hidden leading-none pointer-events-none select-none z-10 ${
        position === "bottom" ? "rotate-180" : ""
      } ${className}`}
    >
      <svg
        viewBox="0 0 1200 40"
        preserveAspectRatio="none"
        className="w-full h-8 md:h-12 block"
        style={{ fill: fillColor }}
      >
        <path d="M0,40 C50,40 50,0 100,0 C150,0 150,40 200,40 C250,40 250,0 300,0 C350,0 350,40 400,40 C450,40 450,0 500,0 C550,0 550,40 600,40 C650,40 650,0 700,0 C750,0 750,40 800,40 C850,40 850,0 900,0 C950,0 950,40 1000,40 C1050,40 1050,0 1100,0 C1150,0 1150,40 1200,40 L1200,0 L0,0 Z" />
      </svg>
    </div>
  );
}
