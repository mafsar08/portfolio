"use client";

import { useState } from "react";
import Link from "next/link";
import WorkPreview, { type PreviewData } from "./WorkPreview";
import type { TrackRecordEntry } from "@/data/track-record";

export default function PrevNextNav({
  prev,
  next,
}: {
  prev: TrackRecordEntry | null;
  next: TrackRecordEntry | null;
}) {
  const [hoverEntry, setHoverEntry] = useState<PreviewData | null>(null);
  const [hoverTop, setHoverTop] = useState(0);
  const [hoverSide, setHoverSide] = useState<"left" | "right">("right");

  const handleEnter =
    (entry: TrackRecordEntry, side: "left" | "right") =>
    (e: React.MouseEvent<HTMLElement>) => {
      setHoverEntry({ title: entry.title, images: entry.images });
      setHoverTop(e.currentTarget.getBoundingClientRect().top);
      setHoverSide(side);
    };

  const handleLeave = () => setHoverEntry(null);

  return (
    <>
      <WorkPreview entry={hoverEntry} top={hoverTop} side={hoverSide} />
      <nav className="mt-4 pt-10 border-t border-[#ECE9E2] grid grid-cols-2 gap-6">
        {prev ? (
          <Link
            href={`/work/${prev.slug}`}
            className="group block"
            onMouseEnter={handleEnter(prev, "left")}
            onMouseLeave={handleLeave}
          >
            <div className="font-mono-tabular text-[10.5px] uppercase tracking-[0.14em] text-[#9A968F] mb-1.5 flex items-center gap-2">
              <span className="inline-block transition-transform duration-200 group-hover:-translate-x-0.5">
                ←
              </span>
              <span>Previous</span>
            </div>
            <div className="text-[15px] text-[#1A1A1A] group-hover:underline underline-offset-4 decoration-1">
              {prev.title}
            </div>
          </Link>
        ) : (
          <span />
        )}

        {next ? (
          <Link
            href={`/work/${next.slug}`}
            className="group block text-right"
            onMouseEnter={handleEnter(next, "right")}
            onMouseLeave={handleLeave}
          >
            <div className="font-mono-tabular text-[10.5px] uppercase tracking-[0.14em] text-[#9A968F] mb-1.5 flex items-center justify-end gap-2">
              <span>Next</span>
              <span className="inline-block transition-transform duration-200 group-hover:translate-x-0.5">
                →
              </span>
            </div>
            <div className="text-[15px] text-[#1A1A1A] group-hover:underline underline-offset-4 decoration-1">
              {next.title}
            </div>
          </Link>
        ) : (
          <span />
        )}
      </nav>
    </>
  );
}
