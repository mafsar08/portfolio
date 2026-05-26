"use client";

import { useState } from "react";
import Image from "next/image";
import { Eye, Mail, Download, MapPin } from "lucide-react";
import { trackRecordData } from "@/data/track-record";
import type { TrackRecordEntry } from "@/data/track-record";
import FilePreviewModal from "../FilePreviewModal";
import ThemeToggle from "../ThemeToggle";

const tagStyles: Record<string, string> = {
  "Major feature": "bg-[var(--tag-major-bg)] text-[var(--tag-major-text)]",
  Enhancement: "bg-[var(--tag-enhancement-bg)] text-[var(--tag-enhancement-text)]",
  "Design system": "bg-[var(--tag-design-system-bg)] text-[var(--tag-design-system-text)]",
  Career: "bg-[var(--tag-career-bg)] text-[var(--tag-career-text)]",
  Achievement: "bg-[var(--tag-achievement-bg)] text-[var(--tag-achievement-text)]",
  Community: "bg-[var(--tag-community-bg)] text-[var(--tag-community-text)]",
};

export default function SplitPersonaLayout() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const navigableEntries = trackRecordData.filter(
    (e) => e.images && e.images.length > 0
  );
  const highlighted = trackRecordData.filter((e) => e.highlighted);
  const allEntries = trackRecordData;

  const handleView = (entry: TrackRecordEntry) => {
    const idx = navigableEntries.findIndex(
      (e) => e.title === entry.title && e.company === entry.company
    );
    if (idx !== -1) setSelectedIndex(idx);
  };

  const groupedByYear = allEntries.reduce(
    (acc, entry) => {
      if (!acc[entry.year]) acc[entry.year] = [];
      acc[entry.year].push(entry);
      return acc;
    },
    {} as Record<number, TrackRecordEntry[]>
  );
  const sortedYears = Object.keys(groupedByYear)
    .map(Number)
    .sort((a, b) => b - a);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Minimal top bar */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-bg/80 border-b border-border">
        <div className="max-w-[1300px] mx-auto px-6 py-4 flex items-center justify-between">
          <a
            href="#"
            className="font-serif text-text-primary text-lg small-caps tracking-wide"
          >
            Afsar
          </a>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <a
              href="/resume.pdf"
              download
              className="hidden md:inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.05em] text-accent border border-accent rounded-md px-3 py-1.5 hover:bg-accent hover:text-white transition-colors duration-200"
            >
              <Download size={12} />
              Resume
            </a>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-[1300px] w-full mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-8 lg:gap-12 py-12">
          {/* ── LEFT COLUMN: PERSONAL (sticky on desktop) ── */}
          <aside className="lg:sticky lg:top-24 lg:self-start lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto pr-2">
            {/* Photo */}
            <div className="w-24 h-24 rounded-full bg-accent-bg border border-border mb-6 flex items-center justify-center">
              <span className="font-mono text-xs text-text-muted">Photo</span>
            </div>

            {/* Name */}
            <h1 className="font-serif text-text-primary text-4xl font-normal leading-tight mb-1">
              Mohammed Afsar
            </h1>
            <p className="font-mono text-xs uppercase tracking-[0.05em] text-text-muted mb-6">
              Senior Product Designer
            </p>

            {/* Bio paragraphs */}
            <div className="font-serif text-text-body text-base leading-relaxed space-y-4 mb-8 max-w-[420px]">
              <p>
                Hey, I&rsquo;m Afsar — a self-taught product designer based in
                Chennai. I turn messy workflows into clean experiences and
                build design systems that hold everything together.
              </p>
              <p>
                Currently leading design for AI features at Kissflow.
              </p>
            </div>

            {/* Quick facts */}
            <div className="space-y-2 mb-8 font-mono text-xs">
              <div className="flex items-center gap-2 text-text-muted">
                <MapPin size={12} />
                <span>Chennai, India</span>
              </div>
              <div className="flex items-center gap-2 text-text-muted">
                <span className="w-3 h-3 rounded-full bg-green-500/70 inline-block" />
                <span>Open to opportunities</span>
              </div>
            </div>

            {/* I like / I'm into */}
            <div className="border-t border-border pt-6 mb-8">
              <div className="font-mono text-[10px] uppercase tracking-wider text-text-muted mb-3">
                I&rsquo;m into
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  "Product design",
                  "Design systems",
                  "AI as creative partner",
                  "Football",
                  "Travel",
                  "Good docs",
                  "Self-taught path",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[10px] uppercase tracking-wider px-2 py-1 border border-border rounded-full text-text-body"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Where I've worked */}
            <div className="border-t border-border pt-6 mb-8">
              <div className="font-mono text-[10px] uppercase tracking-wider text-text-muted mb-3">
                Where I&rsquo;ve worked
              </div>
              <div className="space-y-3">
                <div>
                  <div className="font-serif text-text-primary text-base font-medium">
                    Kissflow
                  </div>
                  <div className="font-mono text-[10px] uppercase tracking-wider text-text-muted">
                    May 2022 → Present
                  </div>
                </div>
                <div>
                  <div className="font-serif text-text-primary text-base font-medium">
                    Techfully
                  </div>
                  <div className="font-mono text-[10px] uppercase tracking-wider text-text-muted">
                    Mar 2021 → Apr 2022
                  </div>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="border-t border-border pt-6">
              <div className="font-mono text-[10px] uppercase tracking-wider text-text-muted mb-3">
                Get in touch
              </div>
              <div className="flex flex-col gap-2">
                <a
                  href="mailto:mohammedafsar.des@gmail.com"
                  className="inline-flex items-center gap-2 font-mono text-xs text-accent hover:text-accent-hover"
                >
                  <Mail size={12} />
                  mohammedafsar.des@gmail.com
                </a>
                <a
                  href="/resume.pdf"
                  download
                  className="inline-flex items-center gap-2 font-mono text-xs text-accent hover:text-accent-hover"
                >
                  <Download size={12} />
                  Download Resume
                </a>
              </div>
            </div>
          </aside>

          {/* ── RIGHT COLUMN: WORK (scrolls) ── */}
          <section>
            {/* Currently designing */}
            <div className="mb-12">
              <div className="font-mono text-[10px] uppercase tracking-wider text-text-muted mb-3">
                Currently designing
              </div>
              {(() => {
                const current = highlighted[0];
                const hasImages = current?.images && current.images.length > 0;
                return (
                  <div className="border border-border rounded-lg overflow-hidden">
                    <div className="aspect-[16/9] relative bg-highlight-bg">
                      {hasImages && (
                        <Image
                          src={current.images![0]}
                          alt={current.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 1024px) 100vw, 60vw"
                        />
                      )}
                    </div>
                    <div className="p-4">
                      <div className="font-mono text-[10px] uppercase tracking-wider text-text-muted mb-1">
                        {current.company}
                      </div>
                      <h3 className="font-serif text-text-primary text-xl font-medium leading-snug mb-2">
                        {current.title}
                      </h3>
                      {current.description && (
                        <p className="font-serif text-text-body text-sm leading-relaxed mb-3">
                          {current.description}
                        </p>
                      )}
                      <div className="flex items-center justify-between">
                        <span
                          className={`inline-flex items-center font-mono text-[10px] uppercase tracking-[0.04em] px-2 py-0.5 rounded-sm ${tagStyles[current.type] || ""}`}
                        >
                          {current.type}
                        </span>
                        {hasImages && (
                          <button
                            onClick={() => handleView(current)}
                            className="inline-flex items-center gap-1 font-mono text-xs text-accent hover:text-accent-hover transition-colors"
                          >
                            <Eye size={12} /> View
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })()}
            </div>

            {/* Selected works */}
            <div className="mb-12">
              <div className="font-mono text-[10px] uppercase tracking-wider text-text-muted mb-3">
                Selected works
              </div>
              <div className="space-y-2">
                {highlighted.slice(1).map((entry) => {
                  const hasImages = entry.images && entry.images.length > 0;
                  return (
                    <button
                      key={`${entry.company}-${entry.title}-sel`}
                      onClick={() => hasImages && handleView(entry)}
                      className="w-full flex items-baseline justify-between gap-4 py-3 border-b border-border hover:bg-highlight-bg transition-colors px-3 -mx-3 rounded-md text-left group"
                    >
                      <div className="flex-1 min-w-0">
                        <div className="font-serif text-text-primary text-base font-medium leading-tight">
                          {entry.title}
                        </div>
                        {entry.description && (
                          <div className="font-serif text-text-body text-xs leading-relaxed mt-0.5 line-clamp-1">
                            {entry.description}
                          </div>
                        )}
                      </div>
                      <div className="flex items-center gap-3 shrink-0">
                        <span
                          className={`hidden sm:inline-flex items-center font-mono text-[10px] uppercase tracking-[0.04em] px-2 py-0.5 rounded-sm ${tagStyles[entry.type] || ""}`}
                        >
                          {entry.type}
                        </span>
                        <span className="font-mono text-xs text-text-muted">
                          {entry.date}
                        </span>
                        {hasImages && (
                          <span className="font-mono text-xs text-accent group-hover:text-accent-hover">
                            ↗
                          </span>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Full track record */}
            <div className="mb-12">
              <div className="font-mono text-[10px] uppercase tracking-wider text-text-muted mb-3">
                Full track record
              </div>
              <div className="space-y-6">
                {sortedYears.map((year) => (
                  <div key={year}>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-mono text-xs text-text-muted font-medium">
                        {year}
                      </span>
                      <div className="flex-1 h-px bg-border" />
                    </div>
                    <div className="space-y-1">
                      {groupedByYear[year].map((entry) => {
                        const hasImages =
                          entry.images && entry.images.length > 0;
                        return (
                          <button
                            key={`${entry.company}-${entry.title}-tr`}
                            onClick={() => hasImages && handleView(entry)}
                            className="w-full flex items-baseline justify-between gap-3 py-1.5 hover:text-text-primary transition-colors text-left"
                          >
                            <div className="flex items-baseline gap-2 min-w-0">
                              {entry.company && (
                                <span className="font-mono text-[10px] uppercase tracking-wider text-text-muted shrink-0">
                                  {entry.company}
                                </span>
                              )}
                              <span className="font-serif text-text-body text-sm truncate">
                                {entry.title}
                              </span>
                            </div>
                            <span className="font-mono text-[10px] text-text-muted shrink-0">
                              {entry.date}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>

      {selectedIndex !== null && (
        <FilePreviewModal
          entries={navigableEntries}
          currentIndex={selectedIndex}
          onNavigate={setSelectedIndex}
          onClose={() => setSelectedIndex(null)}
        />
      )}
    </div>
  );
}
