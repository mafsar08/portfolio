"use client";

import { useState } from "react";
import { Eye, Mail, Download } from "lucide-react";
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

const chapters = [
  { roman: "I", id: "intro", label: "Introduction" },
  { roman: "II", id: "work", label: "Selected Works" },
  { roman: "III", id: "record", label: "Track Record" },
  { roman: "IV", id: "making", label: "The Making" },
  { roman: "V", id: "contact", label: "Get in Touch" },
];

export default function IndexLayout() {
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
      {/* Minimal header */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-bg/80 border-b border-border">
        <div className="max-w-[860px] mx-auto px-6 py-4 flex items-center justify-between">
          <a
            href="#"
            className="font-serif text-text-primary text-lg italic small-caps tracking-wide"
          >
            Afsar — Selected Works
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

      <main className="flex-1 max-w-[860px] mx-auto px-6 pb-24">
        {/* ── Cover page ── */}
        <section className="min-h-[88vh] flex flex-col justify-center items-center text-center py-24">
          <div className="font-mono text-xs uppercase tracking-[0.3em] text-text-muted mb-6">
            ✦ A Portfolio ✦
          </div>
          <h1 className="font-serif text-text-primary text-7xl sm:text-8xl font-normal leading-none tracking-tight mb-6">
            Afsar
          </h1>
          <p className="font-serif italic text-text-body text-2xl mb-2">
            Selected Works
          </p>
          <p className="font-mono text-xs uppercase tracking-wider text-text-muted mb-16">
            2021 — 2026
          </p>

          {/* Index / Table of Contents */}
          <div className="w-full max-w-[480px] border-y border-border py-8">
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-text-muted mb-6 text-center">
              ── Index ──
            </div>
            <ul className="space-y-3">
              {chapters.map((ch) => (
                <li key={ch.id}>
                  <a
                    href={`#${ch.id}`}
                    className="flex items-baseline gap-3 group"
                  >
                    <span className="font-serif italic text-text-muted text-sm w-8 text-right">
                      {ch.roman}
                    </span>
                    <span className="font-serif text-text-primary text-base group-hover:italic transition-all">
                      {ch.label}
                    </span>
                    <span className="flex-1 border-b border-dotted border-border" />
                    <span className="font-mono text-xs text-text-muted">
                      p. {String(chapters.indexOf(ch) + 1).padStart(2, "0")}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── Chapter I — Introduction ── */}
        <article id="intro" className="py-24 scroll-mt-20 border-t border-border">
          <ChapterHeader roman="I" label="Introduction" />
          <div className="font-serif text-text-body text-lg leading-loose space-y-6 max-w-[640px] mx-auto">
            <p>
              <span className="float-left font-serif text-7xl leading-none mr-3 mt-1 text-text-primary">
                F
              </span>
              or close to five years, I have been designing products that
              people actually use — across B2B SaaS, low-code platforms, and
              EdTech. I do not just hand off screens; I own problems, build
              design systems, and make sure what ships is what was designed.
            </p>
            <p>
              I am currently a Senior Product Designer at Kissflow, where I
              lead design for AI features and contribute to a 250-component
              design system serving 10,000+ customers in 150+ countries.
            </p>
            <p className="italic">
              — Currently pushing what a designer can ship, with a little help
              from AI.
            </p>
          </div>
        </article>

        {/* ── Chapter II — Selected Works ── */}
        <article id="work" className="py-24 scroll-mt-20 border-t border-border">
          <ChapterHeader roman="II" label="Selected Works" />
          <p className="font-serif italic text-text-muted text-center mb-12">
            A curated selection of features and projects.
          </p>
          <div className="space-y-12">
            {highlighted.map((entry, i) => {
              const hasImages = entry.images && entry.images.length > 0;
              return (
                <div
                  key={`${entry.company}-${entry.title}`}
                  className="grid grid-cols-[60px_1fr] gap-6 items-start border-b border-border pb-12"
                >
                  <div className="text-right">
                    <div className="font-serif italic text-text-muted text-sm">
                      No. {String(i + 1).padStart(2, "0")}
                    </div>
                    <div className="font-mono text-[10px] uppercase tracking-wider text-text-muted mt-1">
                      {entry.date}
                    </div>
                  </div>
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-wider text-text-muted mb-1">
                      {entry.company}
                    </div>
                    <h3 className="font-serif text-text-primary text-3xl font-normal leading-tight mb-3">
                      {entry.title}
                    </h3>
                    {entry.description && (
                      <p className="font-serif text-text-body text-base leading-relaxed mb-4 max-w-[560px]">
                        {entry.description}
                      </p>
                    )}
                    <div className="flex items-center gap-4">
                      <span
                        className={`inline-flex items-center font-mono text-[10px] uppercase tracking-[0.04em] px-2 py-0.5 rounded-sm ${tagStyles[entry.type] || ""}`}
                      >
                        {entry.type}
                      </span>
                      {hasImages && (
                        <button
                          onClick={() => handleView(entry)}
                          className="inline-flex items-center gap-1 font-mono text-xs italic text-accent hover:text-accent-hover transition-colors"
                        >
                          <Eye size={12} />
                          See plates
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </article>

        {/* ── Chapter III — Track Record ── */}
        <article id="record" className="py-24 scroll-mt-20 border-t border-border">
          <ChapterHeader roman="III" label="Track Record" />
          <p className="font-serif italic text-text-muted text-center mb-12">
            A complete log of features, milestones, and career notes.
          </p>
          <div className="space-y-8">
            {sortedYears.map((year) => (
              <div key={year}>
                <div className="flex items-center gap-4 mb-4">
                  <span className="font-serif italic text-text-primary text-2xl">
                    {year}
                  </span>
                  <div className="flex-1 h-px bg-border" />
                </div>
                <div className="space-y-3">
                  {groupedByYear[year].map((entry) => (
                    <div
                      key={`${entry.company}-${entry.title}-idx`}
                      className="flex items-baseline gap-4 py-2 border-b border-dotted border-border"
                    >
                      {entry.company && (
                        <span className="font-mono text-[10px] uppercase tracking-wider text-text-muted w-20 shrink-0">
                          {entry.company}
                        </span>
                      )}
                      <span className="font-serif text-text-primary text-base flex-1">
                        {entry.title}
                      </span>
                      <span
                        className={`hidden sm:inline-flex items-center font-mono text-[10px] uppercase tracking-[0.04em] px-2 py-0.5 rounded-sm shrink-0 ${tagStyles[entry.type] || ""}`}
                      >
                        {entry.type}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </article>

        {/* ── Chapter IV — The Making ── */}
        <article id="making" className="py-24 scroll-mt-20 border-t border-border">
          <ChapterHeader roman="IV" label="The Making" />
          <div className="font-serif text-text-body text-lg leading-loose space-y-6 max-w-[640px] mx-auto">
            <p>
              <span className="float-left font-serif text-7xl leading-none mr-3 mt-1 text-text-primary">
                S
              </span>
              elf-taught product designer based in Chennai. Mechanical
              Engineering graduate turned designer — close to 5 years across
              startups and B2B.
            </p>
            <p>
              Founding member of <em>SAAS Design</em>, a Chennai-based design
              community for designers across all levels.
            </p>
            <blockquote className="border-l-2 border-accent pl-6 my-8 font-serif italic text-text-muted">
              &ldquo;Design isn&rsquo;t finished when the file is shipped — it
              is finished when the user can do their job.&rdquo;
            </blockquote>
          </div>
        </article>

        {/* ── Chapter V — Get in Touch ── */}
        <article id="contact" className="py-24 scroll-mt-20 border-t border-border">
          <ChapterHeader roman="V" label="Get in Touch" />
          <div className="text-center max-w-[560px] mx-auto">
            <p className="font-serif italic text-2xl text-text-primary mb-8 leading-relaxed">
              Have an exciting opportunity, or just want to say hi?
            </p>
            <div className="flex flex-col items-center gap-3">
              <a
                href="mailto:mohammedafsar.des@gmail.com"
                className="inline-flex items-center gap-2 font-mono text-sm text-accent hover:text-accent-hover"
              >
                <Mail size={16} />
                mohammedafsar.des@gmail.com
              </a>
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 font-mono text-sm text-accent hover:text-accent-hover"
              >
                <Download size={16} />
                Download Resume
              </a>
            </div>
          </div>
        </article>

        {/* Colophon footer */}
        <footer className="py-8 border-t border-border text-center font-mono text-[10px] uppercase tracking-wider text-text-muted">
          ✦ Colophon ✦ Set in Lora &amp; Geist Mono · Designed &amp; built by
          Mohammed Afsar · 2026 ✦
        </footer>
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

function ChapterHeader({ roman, label }: { roman: string; label: string }) {
  return (
    <header className="text-center mb-12">
      <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-text-muted mb-3">
        Chapter {roman}
      </div>
      <h2 className="font-serif text-text-primary text-5xl font-normal italic leading-tight">
        {label}
      </h2>
      <div className="flex items-center justify-center gap-3 mt-6">
        <span className="w-12 h-px bg-border" />
        <span className="text-text-muted text-xs">✦</span>
        <span className="w-12 h-px bg-border" />
      </div>
    </header>
  );
}
