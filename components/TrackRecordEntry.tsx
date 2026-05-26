"use client";

import Link from "next/link";
import { FileText, ExternalLink, Eye } from "lucide-react";
import ImageLightbox from "./ImageLightbox";
import type { TrackRecordEntry as EntryType } from "@/data/track-record";

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

export default function TrackRecordEntryRow({
  entry,
  onView,
  showCompany = true,
}: {
  entry: EntryType;
  onView?: (entry: EntryType) => void;
  showCompany?: boolean;
}) {
  const isHighlighted = entry.highlighted;
  const hasImages = entry.images && entry.images.length > 0;
  const caseStudyRoute = entry.links?.caseStudy?.startsWith("/")
    ? entry.links.caseStudy
    : null;

  return (
    <div
      className={`py-4 px-4 rounded-md transition-colors ${
        isHighlighted
          ? "bg-highlight-bg border-l-2 border-highlight-border"
          : ""
      }`}
    >
      {/* Main row: Stuff | Type | Date */}
      <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4">
        {/* Stuff column */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            {showCompany && entry.company && (
              <span className="font-mono text-xs text-text-muted">
                {entry.company}
              </span>
            )}
            <span className="font-serif text-text-primary text-base font-medium">
              {entry.title}
            </span>
          </div>

          {/* Description */}
          {entry.description && (
            <p className="font-serif text-text-body text-sm leading-relaxed mt-1">
              {entry.description}
            </p>
          )}

          {/* UI Thumbnails (keep on card when images exist) */}
          {isHighlighted && hasImages && (
            <ImageLightbox images={entry.images!} alt={entry.title} />
          )}

          {/* View — links to case study route if present, otherwise opens modal */}
          {caseStudyRoute ? (
            <Link
              href={caseStudyRoute}
              className="inline-flex items-center gap-1.5 font-mono text-xs text-accent hover:text-accent-hover transition-colors mt-3"
            >
              <Eye size={12} />
              Read case study
            </Link>
          ) : (
            hasImages &&
            onView && (
              <button
                onClick={() => onView(entry)}
                className="inline-flex items-center gap-1.5 font-mono text-xs text-accent hover:text-accent-hover transition-colors mt-3"
              >
                <Eye size={12} />
                View
              </button>
            )
          )}

          {/* Links — shown directly on card only when NO images */}
          {!hasImages &&
            entry.links &&
            (entry.links.docs || entry.links.caseStudy) && (
              <div className="flex gap-4 mt-3">
                {entry.links.docs && (
                  <a
                    href={entry.links.docs}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.05em] text-accent border border-accent rounded-md px-3 py-1.5 hover:bg-accent hover:text-white transition-colors duration-200"
                  >
                    <FileText size={12} />
                    Product documentation
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

        {/* Type column */}
        <span
          className={`inline-flex items-center self-start font-mono text-[10px] uppercase tracking-[0.04em] px-2 py-0.5 rounded-sm whitespace-nowrap ${tagStyles[entry.type] || ""}`}
        >
          {entry.type}
        </span>

        {/* Date column */}
        <span className="font-mono text-xs text-text-muted whitespace-nowrap self-start">
          {entry.date}
        </span>
      </div>
    </div>
  );
}
