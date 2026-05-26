"use client";

import { useEffect, useRef } from "react";

export type Pattern =
  | "none"
  | "dots"
  | "grid"
  | "grain"
  | "cross"
  | "aurora"
  | "dawn"
  | "mesh"
  | "spotlight"
  | "conic"
  | "vignette";

const crossMaskSvg = `url("data:image/svg+xml,%3Csvg width='24' height='24' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='24' height='24' fill='black'/%3E%3Crect x='11.5' y='8' width='1' height='8' fill='white'/%3E%3Crect x='8' y='11.5' width='8' height='1' fill='white'/%3E%3C/svg%3E")`;

export default function BackgroundPattern({ pattern }: { pattern: Pattern }) {
  const spotlightRef = useRef<HTMLDivElement>(null);

  // Mouse tracking for Spotlight gradient
  useEffect(() => {
    if (pattern !== "spotlight") return;

    const handleMouseMove = (e: MouseEvent) => {
      if (spotlightRef.current) {
        spotlightRef.current.style.setProperty("--mx", `${e.clientX}px`);
        spotlightRef.current.style.setProperty("--my", `${e.clientY}px`);
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, [pattern]);

  return (
    <>
      {/* ── Patterns ── */}
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

      {/* ── Gradients ── */}
      {pattern === "aurora" && (
        <div className="fixed inset-0 pointer-events-none -z-10 gradient-aurora overflow-hidden" />
      )}

      {pattern === "dawn" && (
        <div className="fixed inset-0 pointer-events-none -z-10 gradient-dawn" />
      )}

      {pattern === "mesh" && (
        <div className="fixed inset-0 pointer-events-none -z-10 gradient-mesh overflow-hidden" />
      )}

      {pattern === "spotlight" && (
        <div
          ref={spotlightRef}
          className="fixed inset-0 pointer-events-none -z-10 gradient-spotlight"
        />
      )}

      {pattern === "conic" && (
        <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
          <div className="absolute inset-0 gradient-conic" />
        </div>
      )}

      {pattern === "vignette" && (
        <div className="fixed inset-0 pointer-events-none -z-10 gradient-vignette" />
      )}
    </>
  );
}
