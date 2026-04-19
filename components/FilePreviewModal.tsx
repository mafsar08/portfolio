"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import {
  X,
  ChevronLeft,
  ChevronRight,
  FileText,
  ExternalLink,
} from "lucide-react";
import type { TrackRecordEntry } from "@/data/track-record";

const tagStyles: Record<string, string> = {
  "Major feature":
    "bg-[var(--tag-major-bg)] text-[var(--tag-major-text)]",
  Enhancement:
    "bg-[var(--tag-enhancement-bg)] text-[var(--tag-enhancement-text)]",
  "Design system":
    "bg-[var(--tag-design-system-bg)] text-[var(--tag-design-system-text)]",
  Career:
    "bg-[var(--tag-career-bg)] text-[var(--tag-career-text)]",
  Achievement:
    "bg-[var(--tag-achievement-bg)] text-[var(--tag-achievement-text)]",
  Community:
    "bg-[var(--tag-community-bg)] text-[var(--tag-community-text)]",
};

type LayoutOption = "A" | "B" | "C";

type Props = {
  entries: TrackRecordEntry[];
  currentIndex: number;
  onNavigate: (index: number) => void;
  onClose: () => void;
};

export default function FilePreviewModal({
  entries,
  currentIndex,
  onNavigate,
  onClose,
}: Props) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [layout, setLayout] = useState<LayoutOption>("A");

  const entry = entries[currentIndex];
  const images = entry.images || [];

  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex < entries.length - 1;
  const prevEntry = hasPrev ? entries[currentIndex - 1] : null;
  const nextEntry = hasNext ? entries[currentIndex + 1] : null;

  // Reset image index when switching features
  useEffect(() => {
    setActiveImageIndex(0);
  }, [currentIndex]);

  // Image navigation
  const prevImage = useCallback(() => {
    setActiveImageIndex((i) => (i > 0 ? i - 1 : images.length - 1));
  }, [images.length]);

  const nextImage = useCallback(() => {
    setActiveImageIndex((i) => (i < images.length - 1 ? i + 1 : 0));
  }, [images.length]);

  // Feature navigation
  const goToPrevFeature = useCallback(() => {
    if (hasPrev) onNavigate(currentIndex - 1);
  }, [hasPrev, currentIndex, onNavigate]);

  const goToNextFeature = useCallback(() => {
    if (hasNext) onNavigate(currentIndex + 1);
  }, [hasNext, currentIndex, onNavigate]);

  // Keyboard: Escape close, arrows images, Shift+arrows features
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.shiftKey && e.key === "ArrowLeft") {
        e.preventDefault();
        goToPrevFeature();
      } else if (e.shiftKey && e.key === "ArrowRight") {
        e.preventDefault();
        goToNextFeature();
      } else if (e.key === "ArrowLeft") {
        prevImage();
      } else if (e.key === "ArrowRight") {
        nextImage();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose, prevImage, nextImage, goToPrevFeature, goToNextFeature]);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  /* ── Shared sub-components ── */

  const header = (
    <div className="p-6 border-b border-border">
      {entry.company && (
        <span className="font-mono text-xs text-text-muted">
          {entry.company}
        </span>
      )}

      <h3 className="font-serif text-text-primary text-lg font-medium mt-1">
        {entry.title}
      </h3>

      <div className="flex items-center gap-3 mt-2">
        <span
          className={`inline-flex items-center font-mono text-[10px] uppercase tracking-[0.04em] px-2 py-0.5 rounded-sm whitespace-nowrap ${tagStyles[entry.type] || ""}`}
        >
          {entry.type}
        </span>
        <span className="font-mono text-xs text-text-muted">
          {entry.date}
        </span>
      </div>

      {entry.description && (
        <p className="font-serif text-text-body text-sm leading-relaxed mt-3">
          {entry.description}
        </p>
      )}

      {/* What / How / Impact */}
      {entry.details &&
        (entry.details.what || entry.details.how || entry.details.impact) && (
          <div className="mt-4 space-y-3">
            {entry.details.what && (
              <div>
                <span className="font-mono text-[10px] uppercase tracking-wider text-text-muted">
                  What
                </span>
                <p className="font-serif text-text-body text-sm leading-relaxed mt-0.5">
                  {entry.details.what}
                </p>
              </div>
            )}
            {entry.details.how && (
              <div>
                <span className="font-mono text-[10px] uppercase tracking-wider text-text-muted">
                  How
                </span>
                <p className="font-serif text-text-body text-sm leading-relaxed mt-0.5">
                  {entry.details.how}
                </p>
              </div>
            )}
            {entry.details.impact && (
              <div>
                <span className="font-mono text-[10px] uppercase tracking-wider text-text-muted">
                  Impact
                </span>
                <p className="font-serif text-text-body text-sm leading-relaxed mt-0.5">
                  {entry.details.impact}
                </p>
              </div>
            )}
          </div>
        )}

      {entry.links && (entry.links.docs || entry.links.caseStudy) && (
        <div className="flex gap-4 mt-3">
          {entry.links.docs && (
            <a
              href={entry.links.docs}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-mono text-xs text-accent hover:text-accent-hover transition-colors"
            >
              <FileText size={12} />
              Docs
            </a>
          )}
          {entry.links.caseStudy && (
            <a
              href={entry.links.caseStudy}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-mono text-xs text-accent hover:text-accent-hover transition-colors"
            >
              <ExternalLink size={12} />
              Case Study
            </a>
          )}
        </div>
      )}
    </div>
  );

  const carousel = (
    <div className="p-6">
      <div className="relative">
        <div className="relative aspect-[16/10] rounded-md overflow-hidden bg-highlight-bg">
          <Image
            src={images[activeImageIndex]}
            alt={`${entry.title} screenshot ${activeImageIndex + 1}`}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 768px"
          />
        </div>

        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-bg border border-border text-text-muted hover:text-text-primary transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-bg border border-border text-text-muted hover:text-text-primary transition-colors"
              aria-label="Next image"
            >
              <ChevronRight size={16} />
            </button>
          </>
        )}
      </div>

      {images.length > 1 && (
        <div className="flex justify-center gap-2 mt-4">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveImageIndex(i)}
              className={`w-2 h-2 rounded-full transition-colors ${
                i === activeImageIndex ? "bg-accent" : "bg-border"
              }`}
              aria-label={`Go to image ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );

  const featureNav = (
    <div className="flex items-center justify-between px-6 py-3">
      {hasPrev ? (
        <button
          onClick={goToPrevFeature}
          className="inline-flex items-center gap-1.5 font-mono text-xs text-text-muted hover:text-text-primary transition-colors min-w-0"
        >
          <ChevronLeft size={14} className="shrink-0" />
          <span className="truncate max-w-[200px]">{prevEntry!.title}</span>
        </button>
      ) : (
        <div />
      )}
      {hasNext ? (
        <button
          onClick={goToNextFeature}
          className="inline-flex items-center gap-1.5 font-mono text-xs text-text-muted hover:text-text-primary transition-colors min-w-0"
        >
          <span className="truncate max-w-[200px]">{nextEntry!.title}</span>
          <ChevronRight size={14} className="shrink-0" />
        </button>
      ) : (
        <div />
      )}
    </div>
  );

  /* ── Layout switcher (temporary — for preview) ── */

  const layoutSwitcher = (
    <div className="flex items-center gap-2 px-6 py-2.5 border-b border-border bg-accent-bg">
      <span className="font-mono text-[10px] uppercase tracking-wider text-text-muted mr-1">
        Layout:
      </span>
      {(["A", "B", "C"] as LayoutOption[]).map((opt) => (
        <button
          key={opt}
          onClick={() => setLayout(opt)}
          className={`font-mono text-[11px] px-2.5 py-1 rounded transition-colors ${
            layout === opt
              ? "bg-accent text-white"
              : "bg-border text-text-muted hover:text-text-primary"
          }`}
        >
          {opt}
        </button>
      ))}
      <span className="font-mono text-[10px] text-text-muted ml-2">
        {layout === "A"
          ? "Below carousel"
          : layout === "B"
            ? "Above header"
            : "Sticky bottom"}
      </span>
    </div>
  );

  /* ── Render ── */

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm p-6"
      onClick={onClose}
    >
      <div
        className="relative max-w-3xl w-full bg-bg border border-border rounded-lg shadow-xl max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button (always top-right) */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 text-text-muted hover:text-text-primary transition-colors"
          aria-label="Close preview"
        >
          <X size={20} />
        </button>

        {/* Layout switcher (temporary) */}
        {layoutSwitcher}

        {/* ── Option B: feature nav above header ── */}
        {layout === "B" && (
          <div className="border-b border-border">{featureNav}</div>
        )}

        {/* Scrollable content area */}
        <div className="flex-1 overflow-y-auto">
          {header}
          {carousel}

          {/* ── Option A: feature nav below carousel ── */}
          {layout === "A" && (
            <div className="border-t border-border">{featureNav}</div>
          )}
        </div>

        {/* ── Option C: sticky bottom bar ── */}
        {layout === "C" && (
          <div className="border-t border-border shrink-0">{featureNav}</div>
        )}
      </div>
    </div>
  );
}
