"use client";

import { useState } from "react";
import Header from "../Header";
import Hero from "../Hero";
import WorkHistory from "../WorkHistory";
import TrackRecord from "../TrackRecord";
import AchievementsCarousel from "../AchievementsCarousel";
import About from "../About";
import Contact from "../Contact";
import Footer from "../Footer";
import BackgroundPattern, { type Pattern } from "../BackgroundPattern";
import WorkspaceLayout from "./WorkspaceLayout";
import CinematicLayout from "./CinematicLayout";
import IndexLayout from "./IndexLayout";
import SplitPersonaLayout from "./SplitPersonaLayout";
import GlimmLayout from "./GlimmLayout";

type Layout =
  | "editorial"
  | "workspace"
  | "cinematic"
  | "index"
  | "split"
  | "glimm";

const layouts: { key: Layout; label: string }[] = [
  { key: "editorial", label: "Editorial" },
  { key: "workspace", label: "Workspace" },
  { key: "cinematic", label: "Cinematic" },
  { key: "index", label: "Index" },
  { key: "split", label: "Split" },
  { key: "glimm", label: "Glimm" },
];

const patternGroup: { key: Pattern; label: string }[] = [
  { key: "none", label: "None" },
  { key: "dots", label: "Dots" },
  { key: "grid", label: "Grid" },
  { key: "grain", label: "Grain" },
  { key: "cross", label: "Cross" },
];

const gradientGroup: { key: Pattern; label: string; behavior: string }[] = [
  { key: "aurora", label: "Aurora", behavior: "Slow drift" },
  { key: "dawn", label: "Dawn", behavior: "Static" },
  { key: "mesh", label: "Mesh", behavior: "Slow drift" },
  { key: "spotlight", label: "Spotlight", behavior: "Mouse-reactive" },
  { key: "conic", label: "Conic", behavior: "Slow rotate" },
  { key: "vignette", label: "Vignette", behavior: "Static" },
];

const layoutDescription: Record<Layout, string> = {
  editorial: "Current default",
  workspace: "OS metaphor",
  cinematic: "Apple-style scroll",
  index: "Book chapters",
  split: "Sticky two-column",
  glimm: "Glimm — monochrome docs",
};

function EditorialLayout() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <TrackRecord />
        <WorkHistory />
        <AchievementsCarousel />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default function LayoutManager() {
  const [layout, setLayout] = useState<Layout>("editorial");
  const [pattern, setPattern] = useState<Pattern>("none");

  const isGradient = gradientGroup.some((g) => g.key === pattern);
  const currentBehavior = gradientGroup.find((g) => g.key === pattern)?.behavior;

  return (
    <>
      {/* Background visuals */}
      <BackgroundPattern pattern={pattern} />

      {/* Active layout */}
      {layout === "editorial" && <EditorialLayout />}
      {layout === "workspace" && <WorkspaceLayout />}
      {layout === "cinematic" && <CinematicLayout />}
      {layout === "index" && <IndexLayout />}
      {layout === "split" && <SplitPersonaLayout />}
      {layout === "glimm" && <GlimmLayout />}

      {/* ── Unified switcher (3 rows: Layout, BG, Gradient) ── */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-1.5 bg-bg border border-border rounded-lg px-3 py-2 shadow-lg max-w-[calc(100vw-3rem)]">
        {/* Layout row */}
        <div className="flex items-center gap-2 flex-wrap">
          <span className="font-mono text-[10px] uppercase tracking-wider text-text-muted w-12 shrink-0">
            Layout:
          </span>
          {layouts.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setLayout(key)}
              className={`font-mono text-[11px] px-2 py-0.5 rounded transition-colors ${
                layout === key
                  ? "bg-accent text-white"
                  : "bg-border text-text-muted hover:text-text-primary"
              }`}
            >
              {label}
            </button>
          ))}
          <span className="font-mono text-[10px] text-text-muted ml-1 hidden md:inline">
            {layoutDescription[layout]}
          </span>
        </div>

        {/* BG patterns row */}
        <div className="flex items-center gap-2 flex-wrap border-t border-border pt-1.5">
          <span className="font-mono text-[10px] uppercase tracking-wider text-text-muted w-12 shrink-0">
            BG:
          </span>
          {patternGroup.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setPattern(key)}
              className={`font-mono text-[11px] px-2 py-0.5 rounded transition-colors ${
                pattern === key
                  ? "bg-accent text-white"
                  : "bg-border text-text-muted hover:text-text-primary"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Gradients row */}
        <div className="flex items-center gap-2 flex-wrap">
          <span className="font-mono text-[10px] uppercase tracking-wider text-text-muted w-12 shrink-0">
            Grad:
          </span>
          {gradientGroup.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setPattern(key)}
              className={`font-mono text-[11px] px-2 py-0.5 rounded transition-colors ${
                pattern === key
                  ? "bg-accent text-white"
                  : "bg-border text-text-muted hover:text-text-primary"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Helper text for gradient behavior */}
        {isGradient && currentBehavior && (
          <span className="font-mono text-[10px] text-text-muted">
            ↳ {currentBehavior}
          </span>
        )}
      </div>
    </>
  );
}
