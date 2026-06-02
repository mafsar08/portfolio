# Portfolio — Thread Context Summary

**Last updated:** 2026-05-27
**Owner:** Mohammed Afsar (@mafsar08 on GitHub)
**Repo:** github.com/mafsar08/portfolio
**Live URL:** not yet deployed (planned: Vercel)

---

## 1. Owner & Project Goal

**Mohammed Afsar** — Self-taught Senior Product Designer (~5 years), based in Chennai, India. Currently at **Kissflow** (May 2022 → Present), previously at **Techfully** (Mar 2021 → Apr 2022). Mechanical Engineering grad turned designer. Founding member of SAAS Design community (Chennai).

**Portfolio targets:** recruiters and hiring managers at B2B SaaS companies in India (Freshworks, Zoho, Chargebee, Razorpay, etc.).

---

## 2. Tech Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 16.2.3 (App Router, Turbopack) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 (`@theme inline`) |
| Primary font | **Inter** (via `next/font/google`, scoped to `.glimm-layout`) |
| Secondary fonts | Lora + Geist Mono (loaded for `/case-studies` routes) |
| Theme | `next-themes` (light default; dark mode toggle kept for future use) |
| Animations | `framer-motion` (mostly unused after cleanup) |
| Icons | `lucide-react` |
| Hosting | Vercel (planned, not yet deployed) |
| Domain | Undecided |

**Notable:** AGENTS.md in repo root reminds future contributors that this Next.js version has breaking changes — check `node_modules/next/dist/docs/` before writing new code.

---

## 3. Design Journey (Chronological)

### Phase 1 — Editorial start (early thread)
Lora (serif) + Geist Mono (mono), warm off-white + steel-blue accent, narrow-column hvpandya/yannglt inspired layout. Built: Header, Hero, WorkHistory, TrackRecord (16 entries), About, Contact, Footer, plus FilePreviewModal with image carousel.

### Phase 2 — Multi-layout exploration
Added 5 layout variants behind a runtime switcher (Editorial, Workspace, Cinematic, Index, Split). Added BG pattern picker (Dots, Grid, Grain, Cross) + gradient picker (Aurora, Dawn, Mesh, Spotlight, Conic, Vignette). Multilingual welcome screen (Tamil → Hindi → Arabic → Spanish → English). Achievements carousel with progress-fill dots. Rotating cross-fade headline. AI Chatbot case study at `/case-studies/ai-chatbot` with editorial structure (problem layers, key decisions, pull quotes, timeline).

### Phase 3 — Track Record CSV ingestion
User provided 17 real Kissflow features via CSV. WebFetched help docs to generate `what / how / impact` for each. Replaced placeholder Kissflow entries with real ones.

### Phase 4 — Glimm focus (current direction)
Analyzed glimm.dev (https://glimm.dev/#glimm) as primary reference. Created GlimmLayout: pure monochrome (`#F8F8F8` bg / `#1A1A1A` text / `#7A7A7A` muted / `#E5E5E5` borders), sticky left sidebar with active-section indicator, horizontal achievements scroll, rounded thumbnail cards. **Verified glimm.dev uses Inter** (not system fonts).

### Phase 5 — Cleanup commit (commit `796ae34`)
Deleted multi-layout system, BG patterns/gradients, welcome screen, modals, all old section components. Only Glimm remains. **3,500 net line deletion.**

### Phase 6 — Glimm iteration (ongoing)
- Centered main content (was left-aligned)
- Flattened all cards (removed border / bg / rounded-xl chrome)
- Image-as-header pattern for work + achievements
- Removed achievement horizontal scroll → flat vertical stack
- Removed rotating headline → static "I'm Afsar, a designer who builds end-to-end."
- Added 112×112 portrait placeholder above name
- Removed "kissflow · major feature" meta subtext from work + expanded track record rows

---

## 4. Current State of the Codebase

### Files in the project (as of latest commit)

```
app/
├── case-studies/ai-chatbot/page.tsx    ← will be moved to /work/ai-chatbot
├── globals.css                          ← :root color tokens + .glimm-layout font scoping
├── layout.tsx                           ← loads Lora + Geist Mono + Inter
└── page.tsx                             ← renders <GlimmLayout />

components/
├── layouts/GlimmLayout.tsx              ← THE main layout (sidebar + main content)
├── case-study/                          ← reused blocks for AI Chatbot case study
│   ├── CaseStudyHero.tsx
│   ├── CaseStudyLayout.tsx              ← currently wraps case study; will be replaced by WorkPageLayout
│   └── blocks.tsx                       ← ProblemLayer, KeyDecision, PullQuote, Timeline, etc.
├── Header.tsx                           ← used by CaseStudyLayout (slated for deletion)
├── RotatingHeadline.tsx                 ← currently unused after Glimm iteration
├── FadeUp.tsx                           ← reusable utility
├── ThemeToggle.tsx                      ← kept for future dark mode
└── ThemeProvider.tsx                    ← kept for future dark mode

data/
├── track-record.ts                      ← 17 Kissflow + 4 Techfully + 1 Community entries
└── achievements.ts                      ← 4 achievement entries (mostly placeholder content)

public/
└── images/work/                         ← placeholder SVGs (placeholder-1/2/3.svg)

.gitignore                               ← excludes .claude/
AGENTS.md                                ← Next.js 16 reminder
CLAUDE.md                                ← currently empty/references AGENTS.md
SESSION-SUMMARY.md                       ← this file
```

### Git branch structure

| Branch | Commit | What it has |
|---|---|---|
| `main` | latest | Glimm-only, cleaned up, iteration-in-progress |
| `archive/multi-layout` | `dc3a9fb` | Full multi-layout system (Editorial + Workspace + Cinematic + Index + Split + Glimm), BG/gradient pickers, welcome screen, modal, carousel, everything |

### Recent commit history on main

```
[current]   In-progress Glimm iteration (uncommitted edits)
796ae34    Focus portfolio on Glimm layout — remove multi-layout system
dc3a9fb    Expand portfolio with multi-layout system, case study page, and Glimm direction
b0c922c    Build complete portfolio — all sections, dark mode, track record, modals, animations
84b0c8e    Initial commit from Create Next App
```

---

## 5. Current Design Language (Glimm)

**Swiss-minimalist editorial** — derived from analyzing glimm.dev + 12 reference sites (emilkowal.ski, paco.me, leerob.com, delba.dev, brianlovin.com, jhey.dev, rauchg.com, barvian.me, nikolovlazar.com, anthonyhobday.com, frankchimero.com, sonner.emilkowal.ski).

### 7 core principles all references share
1. **Reductionism** — every element must justify itself
2. **Typography is the visual system** (size + weight, no color contrast)
3. **Pure monochrome** — color lives in *content*, not chrome
4. **Single narrow centered column** (600–800px)
5. **Generous whitespace as a design element**
6. **System or workhorse sans-serif** (Inter, system-ui)
7. **Content sits flat** — no cards, borders, shadows, rounded corners (or extremely subtle)

### Current Glimm execution

| Token | Value |
|---|---|
| Background | `#F8F8F8` |
| Text primary | `#1A1A1A` |
| Text muted | `#7A7A7A` |
| Borders | `#E5E5E5` |
| Image bg | `#EEEEEE` |
| Font | Inter (scoped via `.glimm-layout` selector + `!important`) |
| Sidebar width | 260px sticky left |
| Main content | max-w-760px, centered |
| Card chrome | none (flat) — image is the visual anchor, text follows in plain typography |
| Rounded corners | only on images (`rounded-lg`) |
| Section spacing | `space-y-12` (48px between work/achievement entries) |
| Section dividers | thin `#E5E5E5` border-bottom between major sections |
| Headings | lowercase, bold/semibold |
| Mono labels | uppercase, `0.1em` tracking |

### Sidebar contents (homepage)
- `afsar` brand → `/`
- Divider
- Nav anchors with active state: `overview` / `work` / `achievements` / `about` / `contact`
- Divider
- `chennai, india` · `email →` · `linkedin →` · `resume ↗`
- Spacer
- `v0.3 · 2026` (mono, muted)

### Main content sections (homepage)
1. **Overview/Hero** — Portrait placeholder (112×112 rounded-lg) → eyebrow → name h1 → "I'm Afsar, a designer who builds end-to-end." → intro paragraph (ends with "Currently pushing what a designer can ship — with a little help from AI.")
2. **Work** — flat image+title+description groups, "Read case study →" link only when applicable, `+ Show all 16 entries` button at bottom
3. **Achievements** — flat image+title+description+testimonial groups (4 entries)
4. **About** — 3 paragraph blocks
5. **Get in touch** — 3 underlined arrow-prefixed links
6. **Footer** — none (version tag lives in sidebar)

---

## 6. Reference Sites Analyzed

### Primary reference
- **glimm.dev** — Inter, monochrome, top inline nav, single column, code-block aesthetic. Uses Inter + Geist Mono + IoskeleyMono + Caveat (loaded via next/font/google).

### 12 secondary references (synthesized)

**Family A — "Archive":** Lazar Nikolov, Anthony Hobday, Lee Robinson, Sonner docs. Date-prefixed entries, count badges, tab-separator nav.

**Family B — "Editorial / Personal":** Frank Chimero, Paco Coursey, Brian Lovin, Lee Robinson. Writing-first, "Now" sections, philosophical voice.

**Family C — "Designer-Engineer Minimal":** Emil Kowalski, Delba, Max Barvian, Jhey Tompkins. Project list + brief description, italic role identifier, embedded personal touches.

### What every reference avoids
- Sidebars (current Glimm has one — single deviation)
- Cards with chrome
- Rounded corners on content
- Decorative gradients/backgrounds
- Big hero photos
- Multi-column grids
- Modal overlays
- Display fonts
- Brand color accents in chrome
- Auto-cycling content

### What's worth borrowing later (not yet implemented)
- "Now" / "Currently" section (Paco, Lee)
- Date-prefixed entries (YYYY-MM-DD — Lazar)
- Count badges (Anthony Hobday: "Side projects 13")
- Spotify now-playing (Lee)
- Italic role identifier (Emil: "Design Engineer")

---

## 7. User Preferences & Feedback (Memory)

Stored at `/Users/afsar/.claude/projects/-Users-afsar-portfolio/memory/`:

| Preference | Detail |
|---|---|
| **No Claude in commits** | Never include "Co-Authored-By: Claude" or any AI mention in commit messages |
| **No re-analysis** | Use existing session context; don't re-fetch/re-analyze prior work |
| **"Layout" means structural** | When user says "layouts", they mean page composition/structure — NOT interactive features (cursors, command palettes, etc.) |
| **Portfolio review findings** | Recruiter-perspective insights — real profile photo and real screenshots are still missing |
| **GitHub accounts** | Active: `mafsar08`. Also has `mohammedafsar08`. Git pushes use `mafsar08` (had to switch active account during this thread) |

---

## 8. Hero Headline Decisions

- **Final form (static):** "I'm Afsar, a designer who builds end-to-end."
- **Considered phrases (rotating, removed):** ships end-to-end · codes alongside engineers · partners with AI · builds the systems behind the screens
- **Reasoning for static:** matches Swiss editorial principle of no animations competing with content

---

## 9. Track Record Data (`data/track-record.ts`)

22 entries total:
- 17 Kissflow features (generated from real help-docs via WebFetch, with what/how/impact stub content)
- 4 Techfully entries (placeholder content)
- 1 Community entry (SAAS Design)

6 currently `highlighted: true`:
1. Kissflow Intelligence (AI Chatbot) — 2026 — has `links.caseStudy: "/case-studies/ai-chatbot"`
2. AI Control Center — 2026
3. Document Templates with AI Generation — 2026
4. AI Solution Analyzer (Metadata Intelligence) — 2025
5. Homepage Redesign — 2025
6. RBAC — 2025
7. Service Accounts & Impersonation — 2023
8. Techfully Online Assessment Platform — 2021

Each entry has: `company`, `title`, `type`, `date`, `year`, `description`, `highlighted`, `images[]`, optional `links.docs` (real Kissflow help URLs), optional `links.caseStudy`, and `details.{ what, how, impact }`.

**Image placeholders:** `/images/work/placeholder-1.svg` through `placeholder-3.svg` (peach/warm tones — slightly off-brand for glimm aesthetic; consider replacing with monochrome placeholders or real screenshots).

---

## 10. Case Study Content (`/case-studies/ai-chatbot`)

Rich editorial structure with these blocks (in `components/case-study/blocks.tsx`):
- `Narrow` / `Wide` column wrappers
- `SectionDivider`
- `Eyebrow` (mono uppercase label)
- `EditorNote` (yellow draft annotation for user's headline alternates)
- `PullQuote` (italic + accent border)
- `KeyDecision` (accent border box)
- `Callout` (amber-tinted notice)
- `ProblemLayer` (numbered editorial section)
- `Timeline` (Phase 1 → Phase 2)
- `ImagePlaceholder` (dashed box with icon + label + desc)
- `ImageGrid` (2-up or 3-up)
- `ClosingLine`
- `Term` (italic emphasis)
- `CraftItem` (h3 with inline tag)

Content is in `app/case-studies/ai-chatbot/page.tsx` — 11 major sections covering: hero, context, problem (3 layers), why conversational, ambition & constraint, Phase 1, Phase 2, designing for trust, conversation & context model, building it (Claude Code mention), bigger picture & reflection, closing.

---

## 11. NEXT PLANNED TASK (in progress, awaiting user "go")

**Detail pages plan — Option C (minimal sidebar)** — approved by user but not yet implemented.

### Goal
Replace the (already-deleted) modal pattern with full-page detail routes. Every work entry with substantial content gets its own page at `/work/<slug>`.

### Approach summary
1. **URL pattern:** `/work/<slug>` for all detail pages
2. **Two templates:**
   - Template A (rich case study) — uses existing `components/case-study/*` blocks
   - Template B (simple feature page) — renders data: image, eyebrow, title, description, what/how/impact, images stack, docs link
3. **Minimal sidebar on detail pages** — same brand + contact + version, but section nav replaced by single `← back to work` link
4. **Slug strategy** — manual `slug?: string` field on `TrackRecordEntry`; populate for highlighted entries first
5. **Click behavior on homepage** — entire work card area becomes a `<Link href="/work/<slug>">` when slug exists
6. **SEO** — `generateMetadata` per entry
7. **Back link** — `/#glimm-work`
8. **URL migration** — `/case-studies/ai-chatbot` → `/work/ai-chatbot` with permanent redirect in `next.config.ts`

### Files to create/modify (next session)
| File | Action |
|---|---|
| `data/track-record.ts` | Add `slug?: string`; populate for ~6 highlighted entries |
| `app/work/[slug]/page.tsx` | New dynamic route; conditional Template A/B |
| `app/work/[slug]/case-studies/ai-chatbot.tsx` | Move from current `/case-studies/ai-chatbot/page.tsx` |
| `components/work/WorkPageLayout.tsx` | New — minimal sidebar wrapper |
| `components/work/FeaturePage.tsx` | New — Template B renderer |
| `next.config.ts` | Add redirect `/case-studies/ai-chatbot` → `/work/ai-chatbot` |
| `components/layouts/GlimmLayout.tsx` | Wrap work cards in `<Link>` when slug exists |
| `app/case-studies/ai-chatbot/page.tsx` | Delete after move |
| `components/Header.tsx` | Delete (no longer needed after case study moves) |

### What's still missing for production
- Real profile photo (placeholder is `<div className="w-28 h-28 bg-[#EEEEEE]" />`)
- Real product screenshots (currently all entries point to `/images/work/placeholder-1.svg` etc.)
- Resume PDF at `/public/resume.pdf` (referenced but file doesn't exist)
- Final case study content beyond AI Chatbot
- Achievement placeholders are pseudo-content (testimonial quotes, descriptions)

---

## 12. Key Open Decisions / Things to Revisit

1. **Profile photo** — biggest single trust gap; placeholder must be replaced soon
2. **Real screenshots** — placeholder SVGs are warm-toned, mildly clash with monochrome Glimm; ideally replace with actual project screenshots
3. **About section copy** — currently 3 sterile paragraphs; could benefit from "Now" section (per references)
4. **Dark mode** — ThemeToggle + ThemeProvider kept but no toggle UI currently rendered in Glimm; would need to add to sidebar if dark mode wanted
5. **Mobile sidebar** — currently collapses to a top bar; works but minimal
6. **404 / not-found** — using default; could customize for portfolio
7. **OG / sharing metadata** — not yet implemented per-route
8. **Analytics** — not yet added (Vercel Analytics planned)
9. **Domain** — undecided

---

## 13. Quick Resume Commands for Next Session

```bash
cd /Users/afsar/portfolio

# Check current state
git status
git log --oneline -5

# Run dev
npm run dev

# Build
npm run build

# View detail pages (when implemented)
# /                              → Glimm homepage
# /work/<slug>                   → detail page (TODO)
# /case-studies/ai-chatbot       → current AI Chatbot case study (to be moved to /work/ai-chatbot)
```

To revisit the multi-layout exploration phase:
```bash
git checkout archive/multi-layout   # view the snapshot
git checkout main                   # return to current Glimm work
```

---

## 14. Architectural Memory

- **CSS scoping pattern:** `.glimm-layout, .glimm-layout *` selector with `!important` to win against Tailwind v4's `@theme inline` (which inlines `--font-lora` etc. at parse time, meaning regular CSS variable override doesn't propagate to utility classes)
- **Next.js font loading:** All fonts go through `next/font/google` to set CSS variables (`--font-inter`, `--font-lora`, `--font-geist-mono`). Tailwind reads via `@theme inline` aliases.
- **Theme tokens:** `:root` defines light mode, `.dark` overrides for dark mode. `@theme inline` maps these to Tailwind utility classes (`bg-bg`, `text-text-primary`, etc.).
- **Active section detection:** `IntersectionObserver` with `rootMargin: "-30% 0px -60% 0px"` in sidebar nav useEffect.
- **Auth note:** `gh auth switch --user mafsar08` then `gh auth setup-git` was required during this thread to push to the correct repo (the other account `mohammedafsar08` was active by default and lacks write permission).

---

## End of summary
