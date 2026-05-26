"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Download, Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { label: "Track Record", href: "/#track-record" },
  { label: "Work History", href: "/#work-history" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export default function Header() {
  const [activeSection, setActiveSection] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Track active section via IntersectionObserver
  useEffect(() => {
    const sectionIds = navLinks.map((link) =>
      link.href.replace(/^\/?#/, "")
    );
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

  // Close mobile menu on click outside or Escape
  useEffect(() => {
    if (!mobileMenuOpen) return;

    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest("[data-mobile-menu]")) {
        setMobileMenuOpen(false);
      }
    };

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };

    document.addEventListener("click", handleClick);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("click", handleClick);
      document.removeEventListener("keydown", handleKey);
    };
  }, [mobileMenuOpen]);

  const handleNavClick = () => setMobileMenuOpen(false);

  return (
    <>
      {/* ── Single floating pill ── */}
      <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-3rem)] max-w-[880px]">
        <div className="bg-bg/90 backdrop-blur-md border border-border rounded-2xl shadow-xl flex items-center justify-between gap-4 pl-5 pr-2 py-1.5">
          {/* Brand */}
          <Link
            href="/"
            className="font-serif text-text-primary text-base small-caps tracking-wide shrink-0"
          >
            Afsar
          </Link>

          {/* Divider */}
          <span className="hidden md:inline-block w-px h-5 bg-border shrink-0" />

          {/* Nav (desktop only) */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => {
              const slug = link.href.replace(/^\/?#/, "");
              const isActive = activeSection === slug;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-mono text-xs uppercase tracking-[0.05em] transition-colors duration-200 whitespace-nowrap ${
                    isActive
                      ? "text-text-primary"
                      : "text-text-muted hover:text-text-primary"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Divider before actions (desktop) */}
          <span className="hidden md:inline-block w-px h-5 bg-border shrink-0" />

          {/* Actions (desktop only) */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <ThemeToggle />
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.05em] text-accent hover:text-accent-hover transition-colors px-2 py-1"
            >
              <Download size={12} />
              Resume
            </a>
          </div>

          {/* Mobile hamburger button */}
          <button
            data-mobile-menu
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className="md:hidden text-text-primary hover:text-accent transition-colors px-2 py-1"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </header>

      {/* ── Mobile dropdown menu ── */}
      {mobileMenuOpen && (
        <div
          data-mobile-menu
          className="md:hidden fixed top-20 right-6 z-50 bg-bg/95 backdrop-blur-md border border-border rounded-2xl shadow-xl p-4 min-w-[220px]"
        >
          <nav className="flex flex-col gap-3 mb-4">
            {navLinks.map((link) => {
              const slug = link.href.replace(/^\/?#/, "");
              const isActive = activeSection === slug;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={handleNavClick}
                  className={`font-mono text-xs uppercase tracking-[0.05em] transition-colors ${
                    isActive
                      ? "text-text-primary"
                      : "text-text-muted hover:text-text-primary"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
          <div className="border-t border-border pt-4 flex items-center justify-between">
            <ThemeToggle />
            <a
              href="/resume.pdf"
              download
              onClick={handleNavClick}
              className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.05em] text-accent border border-accent rounded-md px-3 py-1.5 hover:bg-accent hover:text-white transition-colors"
            >
              <Download size={12} />
              Resume
            </a>
          </div>
        </div>
      )}
    </>
  );
}
