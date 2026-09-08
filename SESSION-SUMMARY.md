# Portfolio — Project State

**Last updated:** 2026-09-07
**Owner:** Mohammed Afsar
**Repo:** github.com/mafsar08/portfolio — **public**
**Live URL:** not deployed yet (Vercel planned)
**Working assets:** `~/my-projects/portfolio/assets/` (outside the repo)

> **This document is the project's memory.** Chat history is auto-deleted after
> 30 days, so anything worth remembering between sessions belongs here — not in
> a transcript. Update it whenever direction changes, something ships, or a
> decision is made.

---

## 1. Goal

A portfolio that gets a **recruiter or hiring manager at an Indian B2B SaaS
company** from "who is this" to "let's talk" in under two minutes.

Everything is measured against that. Restraint over cleverness.

---

## 2. What the site is today

### Homepage

A **single centred column, ~640px wide**, on a warm off-white ground. No
sidebar, no navigation bar, no hero image. You scroll once and you're done.

The whole page runs on one rhythm: **a small muted year or label in the left
gutter, the content in the right.** Work, experience, achievements and contact
all share it, which is what makes the page feel like one object rather than a
stack of sections.

| Section | What's in it |
|---|---|
| **Header** | Small round portrait, name, "Senior Product Designer at Kissflow", a short intro paragraph, and a line showing Chennai plus the **live local time** (ticks every 30s) |
| **Work** | 4 featured entries — year, title, one-line description. Entries with a detail page show a small diagonal arrow. A "Show all 23 entries" toggle reveals the rest as a compact muted list |
| **Experience** | 2 roles — Kissflow (2022–present), Techfully (2021–2022) |
| **Achievements** | 4 entries, same gutter rhythm |
| **About** | 2 short paragraphs |
| **Contact** | Email, LinkedIn, resume — as labelled rows |
| **Footer** | A single copyright line |

**Hover behaviour:** hovering a work row or an achievement floats a **preview
image** alongside it, tracking the row's position. Links reveal an underline
that wipes in from the left; arrows nudge diagonally. That's the entire
interaction vocabulary — deliberately.

### Detail pages

Every substantial entry has its own page at `/work/<slug>` — **19 of them**.
They open with a plain "← back" link and nothing else of the homepage chrome.

Two templates run behind those pages:

- **A rich case study** — currently only the AI Chatbot piece. Editorial
  structure with layered problem framing, key-decision callouts, pull quotes,
  and a phase timeline.
- **A generic feature page** — everything else. Renders the entry's what / how
  / impact, images, and a link to the public product docs where one exists.

Each page carries its own title and description for search and sharing.

---

## 3. Design language (as built)

**Swiss-minimalist editorial.** Derived from glimm.dev plus roughly a dozen
designer-engineer portfolios — emilkowal.ski, paco.me, leerob.com, delba.dev,
brianlovin.com, jhey.dev, rauchg.com, barvian.me, nikolovlazar.com,
anthonyhobday.com, frankchimero.com, sonner.emilkowal.ski.

### Palette in use

Warm, not cool. Off-white ground, warm near-black text, three greys of
descending weight for body copy, metadata, and separators. **No accent colour
appears anywhere in the chrome.**

### Type

**Inter throughout**, scoped so the main layout wins over everything else.
Numbers render tabular so the year gutter stays optically aligned. Headings are
small and quiet — hierarchy comes from weight and colour, not size jumps.

### Known inconsistency

There are effectively **two colour systems in the project**: a warm stone
palette with a steel-blue accent defined as proper design tokens (a leftover
from the earlier editorial direction, still driving the page's base styles and
dark mode), and the current warm-white values written directly into the main
layout. **The layout ignores the tokens.**

It works, but it means the tokens are no longer the source of truth. Worth
consolidating before the site is deployed — right now a token change wouldn't
visibly do anything.

---

## 4. Content inventory

**23 track-record entries** — 19 Kissflow, 4 Techfully.
**8 marked as highlighted**, but the homepage shows only the **first 4**.
**19 have detail pages.** **4 achievements.**

Each entry carries: company, title, type, date, year, description, images,
optional links to public docs, and a what / how / impact breakdown.

Written content is drafted in the docs folder first, then mirrored into the
data the site reads — so prose stays reviewable outside of code.

### Featured work (currently on the homepage)

Kissflow Intelligence (AI Chatbot) · AI Control Center · Analytics Query
Builder · Document Templates with AI Generation

Behind the toggle: Audit Log Enhancements with AI Summaries, AI Solution
Analyzer, Password Policy, Homepage Redesign, User Management Overhaul, Custom
Columns, Data Backup Status, RBAC, Global Search, App Items in My Items, SAML
Configuration, Print Attachments, Service Accounts & Impersonation, File
Preview Revamp, plus the Techfully work — Online Assessment Platform, LMS,
Design System & Brand System.

---

## 5. The journey so far

| Phase | What happened |
|---|---|
| **1 — Editorial start** | Serif + mono type, warm off-white with a steel-blue accent, narrow column. Full section set built plus a file-preview modal |
| **2 — Multi-layout exploration** | Five switchable layouts, background pattern and gradient pickers, a multilingual welcome screen, achievements carousel, rotating headline, first case study |
| **3 — Real content** | 17 real Kissflow features imported from a CSV, with what / how / impact written from the public product docs |
| **4 — Glimm direction** | glimm.dev adopted as the primary reference. Monochrome, sticky left sidebar, flat cards |
| **5 — The big cut** | Deleted the entire multi-layout system, pickers, welcome screen and modals. **~3,500 net lines removed.** One direction survived |
| **6 — Simplification** | Sidebar removed, everything centred, all card chrome flattened, rotating headline made static |
| **7 — Single column** | Collapsed to today's 640px column with the year-gutter rhythm |
| **8 — Detail pages** | Every substantial entry got its own route; 19 slugs, two templates, the case study moved under `/work` |

**Archived:** the full multi-layout exploration still exists on the
`archive/multi-layout` branch if any of it is ever wanted back.

---

## 6. Where assets live

Working files are kept **outside the repo**, at `~/my-projects/portfolio/assets/`:

| Folder | Holds |
|---|---|
| `screenshots/` | Raw product screenshots — 38 files across AI Control Center, AI Solution Analyzer, Audit Log Enhancements, Document Templates, Service Accounts |
| `files/` | Source documents, CSVs, resume drafts |
| `exports/` | Anything rendered or handed off |

**Why outside:** the repo is public and git history is permanent. Raw internal
screenshots — including in-progress and unreleased product states — shouldn't
be published wholesale and can't easily be unpublished. Only the specific
images that appear on the site get cropped, reviewed, and committed.

---

## 7. What's still missing

**Blocking a real launch:**

1. **Real profile photo** — the header still shows a placeholder graphic. The
   single biggest trust gap on the page.
2. **Real product screenshots on the page** — every entry and the hover preview
   still point at the same three placeholder graphics. The actual screenshots
   exist and are sitting in the assets folder, unused. **This is the highest-value
   pending task.**
3. **Resume PDF** — linked in Contact, but the file doesn't exist. The link is
   currently broken.
4. **Deployment** — not deployed; no domain chosen.

**Content depth:**

5. Only one entry has a real case study. The rest render generic feature pages.
6. Achievements are largely placeholder copy, including invented testimonials.
7. Not every entry's impact line carries a number.

**Polish:**

8. Consolidate the two colour systems (see §3).
9. Custom 404, per-page sharing images, analytics.
10. 8 entries are flagged highlighted but only 4 render — decide whether that
    slice is intentional.

---

## 8. Open decisions

| Question | Status |
|---|---|
| Domain name | Undecided |
| Dark mode | Wired underneath, no toggle exposed. Leave hidden unless asked |
| "Now" / "Currently" section | Considered, borrowed from the reference sites, not built |
| Case study depth | Do more entries deserve the rich treatment, or is one enough? |

---

## 9. Picking the work back up

```bash
cd ~/portfolio
npm run dev          # http://localhost:3000
npm run build
git log --oneline -5
```

- `/` — homepage
- `/work/<slug>` — detail pages, 19 of them

To look back at the multi-layout exploration:
`git checkout archive/multi-layout`, then `git checkout main` to return.

---

## 10. Technical notes worth keeping

- **Next.js 16** — significantly changed from earlier versions. Check the
  bundled docs before writing new code.
- **Tailwind v4** inlines theme values at parse time, which is why the main
  layout's fonts are forced through an explicit scoped selector rather than a
  variable override. Don't unpick that without understanding it.
- **Detail pages are pre-rendered** from the entry list at build time, so a new
  entry with a slug automatically gets a page.
- **Git accounts:** push as `mafsar08`. The other account on this machine
  (`mohammedafsar08`) has no write access here.

---

## 11. Codex onboarding — 2026-09-07

- Added portfolio-specific Codex guidance in `AGENTS.md`, connected to the full
  brief in `CLAUDE.md`, this living record, and the case-study sources/process.
  Preserved the existing Next.js instructions and personal response preferences.
- Saved a project-scoped Codex memory update note at the user's explicit request.
  This document remains the source of current project state.
- Reviewed the written content and implementation. No site code or public-facing
  copy changed during onboarding; no commit, push, deployment, or visual QA ran.

**Current implementation corrections to earlier sections:**

- Four featured homepage entries: Kissflow Intelligence, AI Control Center,
  Document Templates with AI Generation, and AI Solution Analyzer. Dataviews is
  not highlighted. Eight entries remain highlighted overall; only four display.
- There are three achievement entries, not four.
- There are four detailed written case studies in `docs/case-studies.md`: AI
  Control Center, AI Solution Analyzer, Document Templates, and Service Accounts
  & Impersonation. Their detail pages still use the older short feature copy.
  AI Chatbot is the only rich rendered case study, with draft annotations and
  image placeholders still present.

**Evidence and ownership to resolve before substantive content work:**

- Document Templates: older source/site copy claims the visual editor was built
  as part of this work; the newer study explicitly limits ownership to the AI
  generation path and calls the manual editor pre-existing. Asked the user which
  scope is correct; confirmation is pending. Do not silently combine the claims.
- The four detailed written studies do not record explicit user sign-off or
  sources for measured outcomes. Their status is unverified, not rejected.
  Confirm missing rationale, contribution, quotes, and impact before reuse.
- Chatbot's 80–95% accuracy is a target, not a measured result. Automatic fixing
  in Solution Analyzer is future direction, not shipped functionality.
- Existing testimonial placeholders and unsupported research/impact statements
  must not be promoted to evidence. Profile/work imagery and the missing resume
  remain launch gaps; deployment status was not independently checked.

Next work remains for the user to choose. Preserve the established visual
direction and clarify the requested scope before building or rewriting.
