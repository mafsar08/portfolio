"use client";

import { useState } from "react";
import Image from "next/image";
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

export default function WorkspaceLayout() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const navigableEntries = trackRecordData.filter(
    (e) => e.images && e.images.length > 0
  );
  const highlighted = trackRecordData.filter((e) => e.highlighted);

  const handleView = (entry: TrackRecordEntry) => {
    const idx = navigableEntries.findIndex(
      (e) => e.title === entry.title && e.company === entry.company
    );
    if (idx !== -1) setSelectedIndex(idx);
  };

  const dockItems = [
    { label: "Work", href: "#workspace-work", icon: "□" },
    { label: "About", href: "#workspace-about", icon: "○" },
    { label: "Contact", href: "#workspace-contact", icon: "◇" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* ── Menubar (sticky top, macOS-style) ── */}
      <div className="sticky top-0 z-40 bg-bg/85 backdrop-blur-md border-b border-border">
        <div className="flex items-center justify-between px-4 py-2 max-w-[1100px] mx-auto">
          {/* Traffic lights */}
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
            <span className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
            <span className="w-3 h-3 rounded-full bg-[#28C840]" />
          </div>

          {/* Title */}
          <div className="font-mono text-xs text-text-muted">
            <span className="text-text-primary font-medium">Portfolio</span>
            <span className="mx-2">/</span>
            <span>Mohammed Afsar</span>
          </div>

          {/* Right cluster */}
          <div className="flex items-center gap-3">
            <ThemeToggle />
          </div>
        </div>
      </div>

      {/* ── Desktop area ── */}
      <main className="flex-1 max-w-[1100px] w-full mx-auto px-6 pt-16 pb-32">
        {/* Hero */}
        <section className="mb-16">
          <div className="font-mono text-[10px] uppercase tracking-wider text-text-muted mb-3">
            ~/portfolio/about
          </div>
          <h1 className="font-serif text-text-primary text-5xl sm:text-6xl font-normal leading-tight mb-6 max-w-[820px]">
            Hey, I&rsquo;m Afsar.
            <br />
            <span className="text-text-muted">A designer who ships end-to-end.</span>
          </h1>
          <p className="font-serif text-text-body text-lg leading-relaxed max-w-[600px] mb-8">
            From research to production — across B2B SaaS, low-code platforms,
            and EdTech. I own problems, build design systems, and make sure
            what ships is what was designed.
          </p>
          <div className="flex flex-wrap items-center gap-4 font-mono text-xs text-text-muted">
            <span>Chennai, India</span>
            <span>•</span>
            <a
              href="mailto:mohammedafsar.des@gmail.com"
              className="text-accent hover:text-accent-hover"
            >
              mohammedafsar.des@gmail.com
            </a>
          </div>
        </section>

        {/* Selected work as windows */}
        <section id="workspace-work" className="mb-20 scroll-mt-20">
          <div className="flex items-center gap-2 mb-6">
            <span className="font-mono text-[10px] uppercase tracking-wider text-text-muted">
              ~/portfolio/work
            </span>
            <span className="text-text-muted">·</span>
            <span className="font-mono text-[10px] text-text-muted">
              {highlighted.length} windows
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {highlighted.map((entry) => {
              const hasImages = entry.images && entry.images.length > 0;
              return (
                <div
                  key={`${entry.company}-${entry.title}`}
                  className="bg-bg border border-border rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                >
                  {/* Window chrome */}
                  <div className="flex items-center gap-2 px-3 py-2 border-b border-border bg-highlight-bg/50">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
                    </div>
                    <span className="flex-1 text-center font-mono text-[10px] text-text-muted truncate">
                      {entry.title.toLowerCase().replace(/\s+/g, "-")}.app
                    </span>
                  </div>

                  {/* Window content */}
                  <div className="aspect-[16/9] relative bg-highlight-bg">
                    {hasImages && (
                      <Image
                        src={entry.images![0]}
                        alt={entry.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    )}
                  </div>

                  <div className="p-4">
                    <div className="font-mono text-[10px] uppercase tracking-wider text-text-muted mb-1">
                      {entry.company}
                    </div>
                    <h3 className="font-serif text-text-primary text-lg font-medium leading-snug mb-1">
                      {entry.title}
                    </h3>
                    {entry.description && (
                      <p className="font-serif text-text-body text-sm leading-relaxed mb-3 line-clamp-2">
                        {entry.description}
                      </p>
                    )}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span
                          className={`inline-flex items-center font-mono text-[10px] uppercase tracking-[0.04em] px-2 py-0.5 rounded-sm ${tagStyles[entry.type] || ""}`}
                        >
                          {entry.type}
                        </span>
                        <span className="font-mono text-xs text-text-muted">
                          {entry.date}
                        </span>
                      </div>
                      {hasImages && (
                        <button
                          onClick={() => handleView(entry)}
                          className="inline-flex items-center gap-1 font-mono text-xs text-accent hover:text-accent-hover transition-colors"
                        >
                          <Eye size={12} /> Open
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* About terminal-style */}
        <section
          id="workspace-about"
          className="mb-20 scroll-mt-20 max-w-[700px]"
        >
          <div className="font-mono text-[10px] uppercase tracking-wider text-text-muted mb-3">
            ~/portfolio/about
          </div>
          <div className="bg-highlight-bg/40 border border-border rounded-lg p-6 font-mono text-sm leading-relaxed text-text-body space-y-2">
            <div>
              <span className="text-text-muted">$</span>{" "}
              <span className="text-accent">whoami</span>
            </div>
            <div className="pl-4 text-text-primary">
              Mohammed Afsar — Senior Product Designer
            </div>
            <div>
              <span className="text-text-muted">$</span>{" "}
              <span className="text-accent">cat about.txt</span>
            </div>
            <div className="pl-4">
              Self-taught product designer based in Chennai. Close to 5 years
              across startups and B2B — strong in research, visual design, and
              scalable design systems.
            </div>
            <div className="pl-4">
              Currently Senior Product Designer at Kissflow, leading design
              for AI features and serving 10,000+ customers in 150+ countries.
            </div>
            <div className="pl-4">
              Founding member of SAAS Design — a Chennai-based design
              community.
            </div>
          </div>
        </section>

        {/* Contact */}
        <section
          id="workspace-contact"
          className="mb-12 scroll-mt-20 max-w-[700px]"
        >
          <div className="font-mono text-[10px] uppercase tracking-wider text-text-muted mb-3">
            ~/portfolio/contact
          </div>
          <h2 className="font-serif text-text-primary text-2xl font-medium mb-4">
            Have an exciting opportunity? Let&rsquo;s connect.
          </h2>
          <div className="flex flex-col gap-3 mb-4">
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
        </section>
      </main>

      {/* ── Dock (bottom, macOS-style) ── */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 flex items-center gap-2 bg-bg/90 backdrop-blur-md border border-border rounded-2xl px-3 py-2 shadow-xl">
        {dockItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-lg hover:bg-highlight-bg transition-colors group"
          >
            <span className="text-text-primary text-lg leading-none group-hover:scale-110 transition-transform">
              {item.icon}
            </span>
            <span className="font-mono text-[9px] uppercase tracking-wider text-text-muted">
              {item.label}
            </span>
          </a>
        ))}
      </div>

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
