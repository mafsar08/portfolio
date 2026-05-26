"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Eye, Mail, Download, ArrowDown } from "lucide-react";
import { trackRecordData } from "@/data/track-record";
import type { TrackRecordEntry } from "@/data/track-record";
import FilePreviewModal from "../FilePreviewModal";
import ThemeToggle from "../ThemeToggle";

// Each highlighted project gets its own color identity
const projectPalettes: Record<
  string,
  { bg: string; accent: string; text: string }
> = {
  "AI Control Center": { bg: "#1A1530", accent: "#A78BFA", text: "#F5F3FF" },
  "Document Templates with AI Generation": {
    bg: "#1F1A2E",
    accent: "#C084FC",
    text: "#FAF5FF",
  },
  "AI Solution Analyzer (Metadata Intelligence)": {
    bg: "#0F1F2E",
    accent: "#60A5FA",
    text: "#EFF6FF",
  },
  "Homepage Redesign": { bg: "#2E1A0F", accent: "#FB923C", text: "#FFF7ED" },
  "Role-Based Access Control (RBAC)": {
    bg: "#0F2A2E",
    accent: "#22D3EE",
    text: "#ECFEFF",
  },
  "Service Accounts & Impersonation": {
    bg: "#1F2937",
    accent: "#9CA3AF",
    text: "#F9FAFB",
  },
  "Online Assessment Platform": {
    bg: "#1A2E1A",
    accent: "#34D399",
    text: "#ECFDF5",
  },
};

const defaultPalette = { bg: "#1C1917", accent: "#7C9CB5", text: "#FAFAF9" };

export default function CinematicLayout() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [activeProjectIdx, setActiveProjectIdx] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

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

  // Scroll progress for pinned section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Background color cycles through palettes as you scroll
  const bgColor = useTransform(
    scrollYProgress,
    highlighted.map((_, i) => i / Math.max(highlighted.length - 1, 1)),
    highlighted.map(
      (entry) =>
        projectPalettes[entry.title]?.bg || defaultPalette.bg
    )
  );

  // Track which project is "active" based on scroll
  scrollYProgress.on("change", (latest) => {
    const idx = Math.min(
      Math.floor(latest * highlighted.length),
      highlighted.length - 1
    );
    setActiveProjectIdx(idx);
  });

  const activePalette =
    projectPalettes[highlighted[activeProjectIdx]?.title || ""] ||
    defaultPalette;

  return (
    <div className="min-h-screen flex flex-col">
      {/* Minimal sticky header */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-bg/80 border-b border-border">
        <div className="max-w-[1200px] mx-auto px-6 py-4 flex items-center justify-between">
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

      <main className="flex-1">
        {/* ── Hero — massive typography ── */}
        <section className="min-h-[90vh] flex flex-col justify-center max-w-[1200px] mx-auto px-6 py-20">
          <div className="font-mono text-xs uppercase tracking-wider text-text-muted mb-6">
            Selected Works · 2021–2026
          </div>
          <h1 className="font-serif text-text-primary text-[clamp(3rem,10vw,8rem)] font-normal leading-[0.95] tracking-tight mb-8">
            A designer
            <br />
            who ships
            <br />
            <span className="italic text-text-muted">end-to-end.</span>
          </h1>
          <p className="font-serif text-text-body text-xl leading-relaxed max-w-[600px] mb-8">
            Mohammed Afsar — Senior Product Designer at Kissflow.
            From research to production across B2B SaaS, low-code, and EdTech.
          </p>
          <div className="flex items-center gap-3 font-mono text-xs text-text-muted">
            <ArrowDown size={14} className="animate-bounce" />
            <span>Scroll to explore selected works</span>
          </div>
        </section>

        {/* ── Pinned story section — color shifts per project ── */}
        <section
          ref={sectionRef}
          className="relative"
          style={{ height: `${highlighted.length * 100}vh` }}
        >
          <motion.div
            className="sticky top-0 h-screen flex items-center transition-colors duration-700"
            style={{ backgroundColor: bgColor }}
          >
            <div className="max-w-[1200px] w-full mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Left: text (changes per active project) */}
              <div>
                <motion.div
                  key={activeProjectIdx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <div
                    className="font-mono text-[10px] uppercase tracking-wider mb-4 opacity-60"
                    style={{ color: activePalette.text }}
                  >
                    0{activeProjectIdx + 1} / 0{highlighted.length}
                  </div>
                  <div
                    className="font-mono text-xs uppercase tracking-wider mb-2 opacity-70"
                    style={{ color: activePalette.text }}
                  >
                    {highlighted[activeProjectIdx]?.company}
                  </div>
                  <h2
                    className="font-serif text-4xl md:text-5xl font-normal leading-tight mb-4"
                    style={{ color: activePalette.text }}
                  >
                    {highlighted[activeProjectIdx]?.title}
                  </h2>
                  <p
                    className="font-serif text-lg leading-relaxed opacity-80 mb-6"
                    style={{ color: activePalette.text }}
                  >
                    {highlighted[activeProjectIdx]?.description}
                  </p>
                  <div className="flex items-center gap-4">
                    <span
                      className="font-mono text-[10px] uppercase tracking-wider px-3 py-1 rounded-full border opacity-90"
                      style={{
                        color: activePalette.accent,
                        borderColor: activePalette.accent,
                      }}
                    >
                      {highlighted[activeProjectIdx]?.type}
                    </span>
                    <span
                      className="font-mono text-xs opacity-70"
                      style={{ color: activePalette.text }}
                    >
                      {highlighted[activeProjectIdx]?.date}
                    </span>
                    {highlighted[activeProjectIdx] &&
                      highlighted[activeProjectIdx].images &&
                      highlighted[activeProjectIdx].images!.length > 0 && (
                        <button
                          onClick={() =>
                            handleView(highlighted[activeProjectIdx])
                          }
                          className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider hover:opacity-70 transition-opacity"
                          style={{ color: activePalette.accent }}
                        >
                          <Eye size={14} /> View
                        </button>
                      )}
                  </div>
                </motion.div>
              </div>

              {/* Right: visual */}
              <motion.div
                key={`vis-${activeProjectIdx}`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-2xl"
              >
                {highlighted[activeProjectIdx]?.images?.[0] && (
                  <Image
                    src={highlighted[activeProjectIdx].images![0]}
                    alt={highlighted[activeProjectIdx].title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                )}
              </motion.div>
            </div>

            {/* Progress dots */}
            <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-2">
              {highlighted.map((_, i) => (
                <span
                  key={i}
                  className="w-1 rounded-full transition-all duration-300"
                  style={{
                    height: i === activeProjectIdx ? "20px" : "6px",
                    backgroundColor: activePalette.accent,
                    opacity: i === activeProjectIdx ? 1 : 0.3,
                  }}
                />
              ))}
            </div>
          </motion.div>
        </section>

        {/* ── About + Contact ── */}
        <section className="max-w-[800px] mx-auto px-6 py-24">
          <div className="font-mono text-xs uppercase tracking-wider text-text-muted mb-4">
            About
          </div>
          <h2 className="font-serif text-text-primary text-3xl font-normal leading-tight mb-6">
            Self-taught. Chennai-based. Designing for ten thousand customers
            and counting.
          </h2>
          <div className="font-serif text-text-body text-lg leading-relaxed space-y-4 mb-12">
            <p>
              Close to 5 years across startups and B2B — strong in research,
              visual design, and scalable design systems.
            </p>
            <p>
              Currently leading design for AI features at Kissflow, serving
              10,000+ customers in 150+ countries.
            </p>
          </div>

          <div className="font-mono text-xs uppercase tracking-wider text-text-muted mb-4">
            Get in Touch
          </div>
          <h3 className="font-serif text-text-primary text-2xl font-normal leading-tight mb-6">
            Have an exciting opportunity? Let&rsquo;s talk.
          </h3>
          <div className="flex flex-wrap gap-6">
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
