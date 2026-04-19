"use client";

import { useState } from "react";

type Pattern = "dots" | "grid" | "grain" | "cross" | "none";

const patterns: { key: Pattern; label: string }[] = [
  { key: "dots", label: "Dots" },
  { key: "grid", label: "Grid" },
  { key: "grain", label: "Grain" },
  { key: "cross", label: "Cross" },
  { key: "none", label: "None" },
];

const crossMaskSvg = `url("data:image/svg+xml,%3Csvg width='24' height='24' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='24' height='24' fill='black'/%3E%3Crect x='11.5' y='8' width='1' height='8' fill='white'/%3E%3Crect x='8' y='11.5' width='8' height='1' fill='white'/%3E%3C/svg%3E")`;

export default function BackgroundPattern() {
  const [pattern, setPattern] = useState<Pattern>("dots");

  return (
    <>
      {/* Dot grid */}
      {pattern === "dots" && (
        <div
          className="fixed inset-0 pointer-events-none -z-10"
          style={{
            backgroundImage:
              "radial-gradient(circle, var(--text-muted) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
            opacity: 0.5,
          }}
        />
      )}

      {/* Fine grid lines */}
      {pattern === "grid" && (
        <div
          className="fixed inset-0 pointer-events-none -z-10"
          style={{
            backgroundImage:
              "linear-gradient(to right, var(--text-muted) 1px, transparent 1px), linear-gradient(to bottom, var(--text-muted) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            opacity: 0.15,
          }}
        />
      )}

      {/* Cross / Plus marks — uses mask so color follows theme */}
      {pattern === "cross" && (
        <div
          className="fixed inset-0 pointer-events-none -z-10"
          style={
            {
              backgroundColor: "var(--text-muted)",
              maskImage: crossMaskSvg,
              WebkitMaskImage: crossMaskSvg,
              maskSize: "24px 24px",
              WebkitMaskSize: "24px 24px",
              maskRepeat: "repeat",
              WebkitMaskRepeat: "repeat",
              opacity: 0.25,
            } as React.CSSProperties
          }
        />
      )}

      {/* Grain / Film noise */}
      {pattern === "grain" && (
        <div
          className="fixed inset-0 pointer-events-none -z-10"
          style={{ opacity: 0.06 }}
        >
          <svg className="w-full h-full">
            <filter id="grain-noise">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.65"
                numOctaves="3"
                stitchTiles="stitch"
              />
              <feColorMatrix type="saturate" values="0" />
            </filter>
            <rect
              width="100%"
              height="100%"
              filter="url(#grain-noise)"
            />
          </svg>
        </div>
      )}

      {/* Floating switcher (temporary — for preview) */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-bg border border-border rounded-lg px-3 py-2 shadow-lg">
        <span className="font-mono text-[10px] uppercase tracking-wider text-text-muted mr-1">
          BG:
        </span>
        {patterns.map(({ key, label }) => (
          <button
            key={key}
            onClick={() => setPattern(key)}
            className={`font-mono text-[11px] px-2.5 py-1 rounded transition-colors ${
              pattern === key
                ? "bg-accent text-white"
                : "bg-border text-text-muted hover:text-text-primary"
            }`}
          >
            {label}
          </button>
        ))}
      </div>
    </>
  );
}
