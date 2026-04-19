"use client";

import { useState, useEffect } from "react";
import { Download } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { label: "Track Record", href: "#track-record" },
  { label: "Work History", href: "#work-history" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sectionIds = navLinks.map((link) => link.href.slice(1));
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-bg/80 border-b border-border">
      <div className="max-w-[720px] mx-auto px-6 py-4 flex items-center justify-between">
        {/* Site name */}
        <a
          href="#"
          className="font-serif text-text-primary text-lg small-caps tracking-wide"
        >
          Afsar
        </a>

        {/* Nav + Theme toggle */}
        <div className="flex items-center gap-4">
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`font-mono text-xs uppercase tracking-[0.05em] transition-colors duration-200 ${
                    isActive
                      ? "text-text-primary"
                      : "text-text-muted hover:text-text-primary"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>
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
  );
}
