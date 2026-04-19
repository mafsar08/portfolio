"use client";

import Image from "next/image";
import { Eye } from "lucide-react";
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

type Props = {
  entry: TrackRecordEntry;
  onView?: (entry: TrackRecordEntry) => void;
};

export default function BentoCard({ entry, onView }: Props) {
  const hasImages = entry.images && entry.images.length > 0;

  return (
    <div className="border border-border rounded-lg overflow-hidden hover:border-accent/40 transition-colors duration-200 bg-bg relative">
      {/* Thumbnail */}
      <div className="relative aspect-[16/10] bg-highlight-bg">
        {hasImages && (
          <Image
            src={entry.images![0]}
            alt={entry.title}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, 50vw"
          />
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Company tag */}
        {entry.company && (
          <span className="font-mono text-[10px] uppercase tracking-wider text-text-muted">
            {entry.company}
          </span>
        )}

        {/* Title */}
        <h3 className="font-serif text-text-primary text-sm font-medium mt-1 leading-snug">
          {entry.title}
        </h3>

        {/* Description */}
        {entry.description && (
          <p className="font-serif text-text-body text-xs leading-relaxed mt-1 line-clamp-2">
            {entry.description}
          </p>
        )}

        {/* Bottom row: type + date + view */}
        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center gap-2">
            <span
              className={`inline-flex items-center font-mono text-[10px] uppercase tracking-[0.04em] px-2 py-0.5 rounded-sm whitespace-nowrap ${tagStyles[entry.type] || ""}`}
            >
              {entry.type}
            </span>
            <span className="font-mono text-xs text-text-muted">
              {entry.date}
            </span>
          </div>

          {hasImages && onView && (
            <button
              onClick={() => onView(entry)}
              className="inline-flex items-center gap-1 font-mono text-xs text-accent hover:text-accent-hover transition-colors"
            >
              <Eye size={12} />
              View
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
