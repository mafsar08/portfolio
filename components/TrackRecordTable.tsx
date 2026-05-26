"use client";

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
  entries: TrackRecordEntry[];
  onView?: (entry: TrackRecordEntry) => void;
};

export default function TrackRecordTable({ entries, onView }: Props) {
  return (
    <div>
      {/* Table header */}
      <div className="hidden sm:grid grid-cols-[1fr_auto_auto_auto] gap-4 px-4 pb-3 border-b border-border mb-1">
        <span className="font-mono text-[10px] uppercase tracking-[0.05em] text-text-muted">
          Feature
        </span>
        <span className="font-mono text-[10px] uppercase tracking-[0.05em] text-text-muted w-28">
          Type
        </span>
        <span className="font-mono text-[10px] uppercase tracking-[0.05em] text-text-muted w-16">
          Year
        </span>
        <span className="font-mono text-[10px] uppercase tracking-[0.05em] text-text-muted w-12">
          View
        </span>
      </div>

      {/* Rows */}
      {entries.map((entry) => {
        const hasImages = entry.images && entry.images.length > 0;

        return (
          <div
            key={`${entry.company}-${entry.title}-table`}
            className="grid grid-cols-1 sm:grid-cols-[1fr_auto_auto_auto] gap-2 sm:gap-4 px-4 py-3 border-b border-border hover:bg-highlight-bg transition-colors duration-150 items-start"
          >
            {/* Feature name + description (stacked) */}
            <div className="min-w-0">
              <span className="font-serif text-text-primary text-base font-medium leading-snug block">
                {entry.title}
              </span>
              {entry.description && (
                <span className="font-serif text-text-body text-sm leading-relaxed mt-0.5 block line-clamp-1">
                  {entry.description}
                </span>
              )}
            </div>

            {/* Type */}
            <span
              className={`inline-flex items-center self-start font-mono text-[10px] uppercase tracking-[0.04em] px-2 py-0.5 rounded-sm whitespace-nowrap w-28 ${tagStyles[entry.type] || ""}`}
            >
              {entry.type}
            </span>

            {/* Year */}
            <span className="font-mono text-xs text-text-muted self-start w-16">
              {entry.date}
            </span>

            {/* View */}
            <div className="w-12">
              {hasImages && onView && (
                <button
                  onClick={() => onView(entry)}
                  className="inline-flex items-center gap-1 font-mono text-xs text-accent hover:text-accent-hover transition-colors"
                >
                  <Eye size={14} />
                </button>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
