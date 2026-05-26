"use client";

import { useState } from "react";
import { LayoutGrid, Table } from "lucide-react";
import { trackRecordData } from "@/data/track-record";
import type { TrackRecordEntry as EntryType } from "@/data/track-record";
import TrackRecordEntryRow from "./TrackRecordEntry";
import BentoCard from "./BentoCard";
import TrackRecordTable from "./TrackRecordTable";
import FilePreviewModal from "./FilePreviewModal";
import FadeUp from "./FadeUp";

type Tab = "selected" | "kissflow" | "techfully";
type CompanyView = "card" | "table";

const tabs: { key: Tab; label: string }[] = [
  { key: "selected", label: "Selected Works" },
  { key: "kissflow", label: "Kissflow" },
  { key: "techfully", label: "Techfully" },
];

export default function TrackRecord() {
  const [activeTab, setActiveTab] = useState<Tab>("selected");
  const [companyView, setCompanyView] = useState<CompanyView>("card");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Filtered data
  const highlighted = trackRecordData.filter((e) => e.highlighted);
  const kissflowEntries = trackRecordData.filter(
    (e) => e.company === "Kissflow"
  );
  const techfullyEntries = trackRecordData.filter(
    (e) => e.company === "Techfully"
  );

  // Navigable entries for modal (all with images)
  const navigableEntries = trackRecordData.filter(
    (e) => e.images && e.images.length > 0
  );

  const handleView = (entry: EntryType) => {
    const idx = navigableEntries.findIndex(
      (e) => e.title === entry.title && e.company === entry.company
    );
    if (idx !== -1) setSelectedIndex(idx);
  };

  // Group entries by year for card view
  const groupByYear = (entries: EntryType[]) => {
    const grouped = entries.reduce(
      (acc, entry) => {
        if (!acc[entry.year]) acc[entry.year] = [];
        acc[entry.year].push(entry);
        return acc;
      },
      {} as Record<number, EntryType[]>
    );
    const sortedYears = Object.keys(grouped)
      .map(Number)
      .sort((a, b) => b - a);
    return { grouped, sortedYears };
  };

  // Get entries for current company tab
  const currentCompanyEntries =
    activeTab === "kissflow" ? kissflowEntries : techfullyEntries;
  const { grouped, sortedYears } = groupByYear(currentCompanyEntries);

  return (
    <section
      id="track-record"
      className="max-w-[880px] mx-auto px-6 pt-16 pb-16 border-b border-border"
    >
      {/* Section label */}
      <FadeUp>
        <h2 className="font-mono text-xs uppercase tracking-[0.05em] text-text-body mb-2">
          Track Record
        </h2>
        <p className="font-serif text-base text-text-body mb-8">
          30+ features shipped across Kissflow and Techfully, serving 10,000+
          customers in 150+ countries. Here&rsquo;s everything I&rsquo;ve
          designed, built, and shipped.
        </p>
      </FadeUp>

      {/* Tab bar */}
      <div className="flex items-center gap-6 border-b border-border mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`font-mono text-xs uppercase tracking-[0.05em] pb-3 transition-colors duration-200 ${
              activeTab === tab.key
                ? "text-text-primary border-b-2 border-accent"
                : "text-text-muted hover:text-text-primary"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* ── Tab: Selected Works (Bento Grid) ── */}
      {activeTab === "selected" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {highlighted.map((entry, i) => (
            <FadeUp key={`${entry.company}-${entry.title}`} delay={i * 0.05}>
              <BentoCard entry={entry} onView={handleView} />
            </FadeUp>
          ))}
        </div>
      )}

      {/* ── Tab: Kissflow / Techfully ── */}
      {(activeTab === "kissflow" || activeTab === "techfully") && (
        <>
          {/* View toggle */}
          <div className="flex items-center gap-1 mb-4">
            <button
              onClick={() => setCompanyView("card")}
              className={`inline-flex items-center gap-1.5 font-mono text-xs px-3 py-1.5 rounded-md transition-colors duration-200 ${
                companyView === "card"
                  ? "bg-accent text-white"
                  : "text-text-muted hover:text-text-primary bg-border"
              }`}
            >
              <LayoutGrid size={12} />
              Card
            </button>
            <button
              onClick={() => setCompanyView("table")}
              className={`inline-flex items-center gap-1.5 font-mono text-xs px-3 py-1.5 rounded-md transition-colors duration-200 ${
                companyView === "table"
                  ? "bg-accent text-white"
                  : "text-text-muted hover:text-text-primary bg-border"
              }`}
            >
              <Table size={12} />
              Table
            </button>
          </div>

          {/* Card view (timeline grouped by year) */}
          {companyView === "card" && (
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
                    {grouped[year].map((entry) => (
                      <TrackRecordEntryRow
                        key={`${entry.company}-${entry.title}-card`}
                        entry={entry}
                        onView={handleView}
                        showCompany={false}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Table view */}
          {companyView === "table" && (
            <TrackRecordTable
              entries={currentCompanyEntries}
              onView={handleView}
            />
          )}
        </>
      )}

      {/* File preview modal */}
      {selectedIndex !== null && (
        <FilePreviewModal
          entries={navigableEntries}
          currentIndex={selectedIndex}
          onNavigate={setSelectedIndex}
          onClose={() => setSelectedIndex(null)}
        />
      )}
    </section>
  );
}
