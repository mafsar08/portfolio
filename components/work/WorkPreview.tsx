"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export type PreviewData = { title: string; images?: string[] };

const PREVIEW_ADVANCE_MS = 2500;
const PREVIEW_FADE_MS = 400;

export default function WorkPreview({
  entry,
  top,
  side = "right",
}: {
  entry: PreviewData | null;
  top: number;
  side?: "left" | "right";
}) {
  const [render, setRender] = useState<PreviewData | null>(entry);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (entry) {
      setRender(entry);
      setIndex(0);
    }
  }, [entry]);

  const images = render?.images ?? [];
  const multi = images.length > 1;

  useEffect(() => {
    if (!entry || !multi) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, PREVIEW_ADVANCE_MS);
    return () => clearInterval(id);
  }, [entry, multi, images.length]);

  if (!render) return null;

  const visible = !!entry;
  const viewportH = typeof window !== "undefined" ? window.innerHeight : 1000;
  const clampedTop = Math.max(24, Math.min(top, viewportH - 220));

  return (
    <div
      aria-hidden
      className={`hidden xl:block fixed z-40 w-[320px] pointer-events-none transition-all duration-200 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1"
      }`}
      style={{
        top: `${clampedTop}px`,
        left:
          side === "left"
            ? "max(calc(50% - 672px), 24px)"
            : "min(calc(50% + 352px), calc(100vw - 344px))",
        transitionProperty: "top, opacity, transform, left",
      }}
    >
      <div className="relative w-full aspect-[16/10] rounded-lg bg-[#EFEDE8] ring-1 ring-[#E8E5DE] shadow-[0_10px_40px_-12px_rgba(0,0,0,0.12)] overflow-hidden">
        {images.map((src, i) => (
          <div
            key={src}
            className="absolute inset-0 transition-opacity ease-out"
            style={{
              opacity: i === index ? 1 : 0,
              transitionDuration: `${PREVIEW_FADE_MS}ms`,
            }}
          >
            <Image
              src={src}
              alt=""
              fill
              className="object-cover"
              sizes="320px"
            />
          </div>
        ))}

        {multi && (
          <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5">
            {images.map((_, i) => {
              const active = i === index;
              return (
                <span
                  key={i}
                  className="block rounded-full overflow-hidden transition-all duration-300 relative"
                  style={{
                    width: active ? 22 : 5,
                    height: 4,
                    backgroundColor: active
                      ? "rgba(255,255,255,0.45)"
                      : "rgba(255,255,255,0.55)",
                    boxShadow: "0 0 0 0.5px rgba(0,0,0,0.08)",
                  }}
                >
                  {active && (
                    <span
                      key={`${render.title}-${i}`}
                      className="glimm-progress-fill absolute inset-0 bg-white"
                    />
                  )}
                </span>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
