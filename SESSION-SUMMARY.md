# Portfolio Project — Session Summary

## Owner
**Mohammed Afsar** — Self-taught Senior Product Designer, ~5 years experience, based in Chennai, India. Currently at Kissflow (May 2022–Present), previously at Techfully (Mar 2021–Apr 2022). Mechanical Engineering graduate turned designer. Founding member of SAAS Design community (Chennai). Won Kissflow AI Hackathon (Jul 2025).

---

## Project Goal
Build a personal portfolio to showcase Afsar's journey from self-taught to senior product designer, highlight work across Kissflow and Techfully, and present a comprehensive track record of features/milestones. The site should appeal to **recruiters and hiring managers**.

---

## Design Decisions (from ideation)

### Why Code Over No-Code
- Full creative control over every pixel
- Zero recurring hosting cost (Vercel free tier + ~$10/yr domain)
- Shows cross-disciplinary skill (design + code)
- No platform lock-in
- Claude Code handles the build; Afsar focuses on design decisions

### Reference Portfolios Analyzed
7 portfolios were analyzed in detail to inform design choices:

| Portfolio | What we took |
|---|---|
| **hvpandya.com** | **PRIMARY UI reference** — serif editorial typography (Tiempos), narrow content column (41-47rem), muted warm palette, monospace labels/metadata, small-caps nav, sharp corners, Japanese-inspired color naming, literary/editorial feel |
| **yannglt.com** | **PRIMARY content reference** — track record section (table-like list of all professional achievements), multi-faceted content strategy, "Stuff / Type / Date" column structure |
| **yannglt.com/track-record** | Chronological log grouped by year, 8 entry types, featured records highlighted at top, searchable, ~180 entries spanning career |
| **brianlovin.com** | "Incrementally correct website" philosophy, dark mode with system detection + toggle + localStorage, typography-driven design |
| **kaushikmurali.com** | Metrics-first case study presentation (revenue numbers, user counts upfront), three tiers of work showcase |
| **aineshchhetri.com** | Stats strip pattern, metrics directly on homepage project cards |
| **divyanshhp.work** | NDA handling pattern ("open for discussion in interviews"), testimonial section, bracket notation nav |
| **batzorig.co** | Bento media grids per project, narrow text column (560px) + wider media, fade-up entrance animations, frosted glass header |

### Final Design Direction
- **Visual style:** hvpandya.com — serif editorial, narrow column, muted palette, monospace metadata
- **Content strategy:** yannglt.com — track record log, narrative about page
- **Layout:** Single page with all sections (no separate pages)
- **Light mode default, dark mode via toggle**
- **Simple, lightweight interactions only** — subtle fade-ups, hover states
- **No component library** — plain HTML elements + Tailwind CSS
- **No CMS** — content lives in code as data files (may add CMS later for blog)
- **No blog for now** — architecture ready to add one later with MDX

---

## Site Structure

```
HEADER — sticky, backdrop-blur, "Afsar" (serif small-caps) left, nav links (mono uppercase, dot-separated) right, dark/light toggle
│
├── HERO — placeholder photo, name, "Senior Product Designer" label, recruiter-optimized intro copy, Chennai + email
├── WORK HISTORY — vertical timeline with dot markers (Kissflow current → Techfully past), role + dates + description
├── TRACK RECORD — highlighted entries visible by default, "Show all records" expands full list grouped by year
├── ABOUT — 3 short paragraphs (self-taught designer, current role at Kissflow, SAAS Design community)
├── CONTACT — email + LinkedIn with icons
│
FOOTER — "© 2026 Mohammed Afsar · Designed & built by me"
```

---

## Track Record Section — Detailed Design

### Data Model
```typescript
type TrackRecordEntry = {
  company: string | null;        // "Kissflow", "Techfully", or null
  title: string;                 // "Homepage Redesign"
  type: "Major feature" | "Enhancement" | "Design system" | "Career" | "Achievement" | "Community";
  date: string;                  // "May 2022" or "2023"
  year: number;                  // for grouping
  description?: string;          // 1-2 line summary
  highlighted: boolean;          // shown by default (user controls which)
  images?: string[];             // UI thumbnail paths (highlighted entries only)
  links?: {
    docs?: string;               // documentation URL
    caseStudy?: string;          // portfolio/Medium URL
  };
};
```

### Highlighted vs Regular Entries
| Aspect | Highlighted | Regular |
|---|---|---|
| Default visibility | Always visible | Hidden behind "Show all" |
| Left border | Accent colored | None |
| Background | Tinted | Transparent |
| UI thumbnails | Yes (click → lightbox) | No |
| Links (docs/case study) | Yes | No |

### Current Highlighted Entries (6)
1. Kissflow — AI Chatbot for Reports & Analytics (2024)
2. Kissflow — Homepage Redesign (2023) — 4x engagement, 31% faster
3. Kissflow — RBAC (2023)
4. Kissflow — Metadata Intelligence (2023)
5. Kissflow — Design System (2022–Present) — 250+ components, 180 tokens
6. Techfully — Online Assessment Platform (2021) — 10K+ students

### All entries span 2021–2025, grouped by year when expanded

---

## Hero Copy (recruiter-optimized, current state)

> Close to 5 years designing products that people actually use — across B2B SaaS, Low-code/No-code, and EdTech. I turn complex workflows into intuitive experiences and build design systems that scale across teams and platforms.
>
> Shipped 30+ features at Kissflow serving 10,000+ customers in 150+ countries. From AI-powered analytics to a 250+ component design system — I own problems end-to-end, from research to production.
>
> **Currently co-creating with Claude to push features and ideas to production faster.**

---

## Tech Stack

| Layer | Tool | Version |
|---|---|---|
| Framework | Next.js (App Router) | 16.2.3 |
| Language | TypeScript | 5.x |
| Styling | Tailwind CSS | v4 |
| Fonts | **Lora** (serif, headings + body) + **Geist Mono** (labels/tags/metadata) | Google Fonts |
| Theme | next-themes | 0.4.6 |
| Animations | Framer Motion (not yet wired — subtle fade-ups planned) | 12.38.0 |
| Icons | Lucide React | 1.8.0 |
| Hosting | Vercel (free tier, not yet deployed) | — |
| Analytics | Vercel Analytics (post-launch) | — |
| Domain | Undecided (will use free domain available) | — |

### Font Replaceability
All font references centralized in `tailwind.config.ts` (via `@theme inline` in globals.css) + `app/layout.tsx`. Swapping fonts = changing 2 files. **Lora is a placeholder** — user may replace with a different serif later based on visual feel.

---

## Color Palette (Pastel placeholders — will update later)

### Light Mode (default)
| Token | Value | Usage |
|---|---|---|
| `--bg` | `#FAFAF9` | Page background (warm off-white) |
| `--text-primary` | `#1C1917` | Headings |
| `--text-body` | `#44403C` | Body text |
| `--text-muted` | `#A8A29E` | Nav, captions, dates |
| `--accent` | `#7C9CB5` | Links, highlights (pastel steel blue) |
| `--accent-hover` | `#5B7D99` | Link hover |
| `--accent-bg` | `#EEF2F6` | Tag backgrounds |
| `--border` | `#E7E5E4` | Dividers |
| `--highlight-bg` | `#F5F0EB` | Highlighted track record rows |
| `--highlight-border` | `#7C9CB5` | Left border on highlighted rows |

### Dark Mode
| Token | Value |
|---|---|
| `--bg` | `#1C1917` |
| `--text-primary` | `#FAFAF9` |
| `--text-body` | `#D6D3D1` |
| `--text-muted` | `#78716C` |
| `--accent` | `#93B1C9` |
| `--border` | `#292524` |

### Track Record Type Tag Colors (6 types, each with distinct pastel bg + text)
Major feature, Enhancement, Design system, Career, Achievement, Community — all defined in `globals.css` as CSS variables with light and dark variants.

---

## File Structure

```
portfolio/
├── app/
│   ├── layout.tsx              ← root layout, fonts (Lora + Geist Mono), ThemeProvider
│   ├── page.tsx                ← single page composing all sections
│   └── globals.css             ← CSS variables, color tokens (light + dark), Tailwind theme
├── components/
│   ├── Header.tsx              ← sticky nav + theme toggle
│   ├── Hero.tsx                ← name, title, recruiter-optimized intro
│   ├── WorkHistory.tsx         ← company timeline (Kissflow + Techfully)
│   ├── TrackRecord.tsx         ← track record section with show/hide
│   ├── TrackRecordEntry.tsx    ← individual entry row (highlighted vs regular)
│   ├── ImageLightbox.tsx       ← thumbnail click-to-expand overlay
│   ├── About.tsx               ← 3-paragraph bio
│   ├── Contact.tsx             ← email + LinkedIn (inline SVG for LinkedIn icon)
│   ├── Footer.tsx              ← copyright line
│   ├── ThemeToggle.tsx         ← sun/moon dark mode button
│   └── ThemeProvider.tsx       ← next-themes wrapper (client component)
├── data/
│   └── track-record.ts        ← all 16 track record entries, typed
├── public/
│   └── images/work/            ← for UI screenshots (empty, to be added)
├── package.json
├── next.config.ts
├── tsconfig.json
└── SESSION-SUMMARY.md          ← this file
```

---

## What's Done
- [x] Project scaffolded (Next.js 16 + Tailwind v4 + TypeScript)
- [x] All dependencies installed (next-themes, framer-motion, lucide-react)
- [x] Global styles with CSS variables (light + dark mode tokens)
- [x] Root layout with Lora + Geist Mono fonts
- [x] Sticky header with nav links, dot separators, dark mode toggle
- [x] Hero section with recruiter-optimized copy
- [x] Work History timeline (Kissflow + Techfully)
- [x] Track Record section (6 highlighted, 16 total, show/hide, year grouping)
- [x] About section (3 short paragraphs)
- [x] Contact section (email + LinkedIn)
- [x] Footer
- [x] Dark mode (next-themes, class-based, light default)
- [x] Build passes clean (`npm run build` — zero errors)
- [x] Dev server verified working at localhost:3000

## What's Remaining
- [ ] **Framer Motion animations** — subtle fade-up on scroll for each section (planned but not wired)
- [ ] **Responsive polish** — mobile layout fine-tuning (basic responsive works via Tailwind)
- [ ] **Profile photo** — replace placeholder circle with real photo
- [ ] **Typography** — may swap Lora for another serif based on visual feel
- [ ] **Colors** — replace pastel placeholders with final palette
- [ ] **Track record data** — add more entries, update `#` placeholder links with real URLs
- [ ] **UI screenshots** — add thumbnails to highlighted track record entries
- [ ] **Deploy to Vercel** — push to GitHub, connect Vercel, get live URL
- [ ] **Domain** — purchase and connect (undecided on name)
- [ ] **Analytics** — enable Vercel Analytics post-launch
- [ ] **Blog** — future addition (architecture supports MDX when ready)

---

## User Preferences (for future sessions)
- Prefers **simple, lightweight** interactions — no heavy animations
- Wants **full control** over the code — no component libraries (no shadcn)
- Typography must be **easily replaceable** (centralized font config)
- Colors are **temporary** — will finalize later
- Case studies will link **externally** (Medium or other platforms), not built as pages
- Track record highlighted entries are **manually controlled** by user (not auto-selected)
- Footer text stays as "Designed & built by me" (user rejected "built using Claude" for footer)
- About section should be **simple and straightforward** — no storytelling
- No education section in work history
- English only, no multi-language
