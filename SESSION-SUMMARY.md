# Portfolio — Project State

**Last updated:** 2026-09-08
**Owner:** Mohammed Afsar
**Repo:** github.com/mafsar08/portfolio — **public**
**Status:** local only. **Nothing is deployed and nothing is confirmed.**
**Working files:** `~/my-projects/portfolio/assets/` (outside this repo)

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

## 2. Current phase — case studies, not design

The visual design is **still being explored. Nothing about it is settled**, and
design work is deliberately on hold.

**The active work is the case study content**, starting with the AI Chatbot.

### Decisions made (2026-09-07/08)

| Decision | Detail |
|---|---|
| **Rework before adding** | Sharpen the case studies that already exist before writing new ones |
| **One Markdown file per case study** | Written in `content/case-studies/`, rendered into its own page. Prose stays editable without touching code |
| **Only 2–3 get the full treatment** | Depth on a few beats thin coverage of nineteen |
| **Fill the empty image slots** | Method undecided — interactive GIFs, screenshots on device mockups, or flat screenshots. **To decide later** |
| **Rewrite the prose with a humanize skill** | The skill isn't installed yet; link to follow. Until then, the voice rules in `docs/case-study-process.md` apply |

### Proposed set of three — **not yet confirmed**

| Case study | Why it earns a slot |
|---|---|
| **AI Chatbot** | The flagship. Strategy through to shipping own code |
| **AI Solution Analyzer** | Deep interaction craft — the 'Locate' decision |
| **Service Accounts** | The differentiator. Non-AI, governance, 2023. Proves range beyond AI work |

---

## 3. The AI Chatbot case study — assessment

The long draft still lives in code rather than as a content file. It is the
only case study with rich structure, and it needs work before it moves.

### What's strong
- **Decision boxes** — considered / chosen / why / trade-off, on every major
  call. The most senior thing on the site
- **The query-tab passage** — arguing a backend capability onto the roadmap
  because a technical user needs proof. Influence, not pixels
- **Honest about the line** between own work and the engineering team's
- **Specific**: named accuracy bar, the field-ambiguity example, the database
  migration that lifted the constraint

### What needs fixing
| Problem | Detail |
|---|---|
| **Roughly twice as long as it should be** | ~20-minute read. The best passage sits in the back half where nobody reaches |
| **Draft notes are still in the body** | Headline options ("my pick, swap freely") appear in ~5 places and would render on the page |
| **~20 empty image slots** | Every one captioned with what should be there |
| **No screenshots captured** | The only highlighted feature with none |
| **Breaks the project's own voice rules** | Em dashes far over the cap; uses at least one banned word |
| **Different shape from the other four** | Eleven sections against their four |

**Verdict: the thinking is excellent, the packaging isn't finished.** It needs
cutting and pictures, not re-thinking.

---

## 4. Metrics — pulled 2026-09-07

Usage data now exists for the AI Chatbot. **Full numbers and the queries are in
`~/my-projects/portfolio/assets/files/` — kept out of this repo because they
name customers and this repo is public.**

**Never name customers in the portfolio.** Describe them by type — "a global
energy customer" — not by name.

### What the data supports

| Claim in the case study | Verdict |
|---|---|
| Conversation beats a one-way generator | **Supported** — ~38% of requests aren't about reports at all |
| Trust should be available, not imposed | **Supported** — sources inspected on ~1 in 10 responses |
| The waiting experience mattered | **Strongly supported** — median response ~10s, 1 in 10 over 22s |
| Built for business users, not just admins | **Supported** — 56% of messages, and twice as many business users as admins |
| The assistant drafts, the builder refines | **Supported** — 27% of AI-generated reports get saved into Report Builder |
| Mandatory context was an acceptable trade-off | **Challenged** — only ~22% of people who opened it ever sent a message |
| 80–95% accuracy | **Unproven** — not in product analytics. Being chased internally |

### Headline figures (customer accounts only, 120 days)
- **423 reports generated**, by 131 people across 84 accounts
- **116 of those saved** into Report Builder — 27%
- **2,207 messages** from 523 people across 166 accounts
- **39% sent exactly one message ever**; 20% returned on another day
- Customer usage **began June 2026** — March–May was internal only

### The finding that should change the writing

**Only about a fifth of people who opened the assistant ever sent a message,
and 39% of those who did never came back.** This sits exactly where the case
study flags the mandatory context step as an accepted trade-off. It suggests
the trade-off was expensive.

**This belongs in the case study, not hidden.** Designing a gate knowingly,
shipping it honestly, and reporting what it cost is a stronger story than
claiming the trade-off was free.

### What can't be measured
Turns per conversation · where the user was when they opened it · success and
failure rate · accuracy · anything before March 2026.

**Why:** the analytics is a log of server requests, not a record of clicks.
Anything that happens entirely in the browser leaves no trace.

---

## 5. What the site is today

A **single centred column, ~640px**, warm off-white ground, no sidebar and no
nav bar. One rhythm throughout: a muted year or label in the left gutter,
content in the right.

| Section | What's in it |
|---|---|
| **Header** | Portrait, name, role, short intro, Chennai plus live local time |
| **Work** | 4 featured entries; a toggle reveals all 23 |
| **Experience** | 2 roles |
| **Achievements** | 4 entries |
| **About** | 2 paragraphs |
| **Contact** | Email, LinkedIn, resume |

Hovering a work row floats a preview image beside it. Links underline from the
left; arrows nudge diagonally. That is the entire interaction vocabulary.

**Detail pages** live at `/work/<slug>` — 19 of them. Two templates: a rich
case study (AI Chatbot only) and a generic feature page for the rest.

**Content inventory:** 23 entries — 19 Kissflow, 4 Techfully. 8 highlighted,
4 shown. 19 with detail pages. 4 achievements.

---

## 6. Project structure

| Folder | Holds |
|---|---|
| `content/case-studies/` | **Case study prose — the source of truth.** One file per slug |
| `docs/` | The writing process, voice rules, and short feature summaries |
| `data/` | Entries the site renders |
| `components/` | Grouped by purpose — home, work, case-study, ui |

**Working assets** live outside the repo at `~/my-projects/portfolio/assets/`
— `screenshots/` (38 raw files across 5 features), `files/` (metrics, source
documents), `exports/`.

**Never commit raw internal screenshots.** This repo is public and git history
is permanent. Only cropped, reviewed images that appear on the site.

---

## 7. Design direction — provisional

Swiss-minimalist editorial, derived from glimm.dev plus a dozen
designer-engineer portfolios. Single narrow column, typography-led hierarchy,
near-monochrome, flat content, generous whitespace.

**Treat this as the current direction, not a settled one.** The design rules in
`CLAUDE.md` are guardrails for consistency while the exploration continues.

**Known inconsistency:** two colour systems coexist — a token set from the
earlier editorial direction, and the values written directly into the layout.
The layout ignores the tokens, so changing a token does nothing visible. Worth
consolidating before launch.

---

## 8. What's still missing

**Blocking a launch:**
1. **Real profile photo** — still a placeholder. Biggest trust gap
2. **Real screenshots on the page** — every entry points at the same three
   placeholder graphics. The real ones exist, unused, in the assets folder
3. **Resume PDF** — linked in Contact, file doesn't exist. Broken link
4. **Deployment** — not deployed, no domain chosen

**Content:**
5. Only one entry has a real case study; the rest are generic feature pages
6. Achievements are largely placeholder copy, **including invented testimonials**
7. Audit Log Enhancements has screenshots but no case study written

**Polish:**
8. Consolidate the two colour systems
9. Custom 404, per-page sharing images, analytics
10. 8 entries are flagged highlighted but only 4 render — decide if that's intended
11. **Commit author is "Your Name <you@example.com>" on past commits** and the
    current identity uses a work email. Worth setting properly on a public
    personal repo

---

## 9. Open decisions

| Question | Status |
|---|---|
| Which 2–3 case studies get full depth | Proposed, **not confirmed** |
| How to fill the empty image slots | GIF, mockup, or flat — **undecided** |
| Humanize skill | Link pending |
| Accuracy number for the AI Chatbot | Being chased internally |
| Domain name | Undecided |
| Dark mode | Wired underneath, no toggle. Leave hidden unless asked |

---

## 10. Next steps

1. **Rewrite the AI Chatbot case study** — cut to roughly half, strip the draft
   notes, open with the funnel and handoff numbers, move it into a content file
2. Decide how images get treated, then capture what's needed
3. Rework the other two chosen case studies to match
4. Build the renderer so content files drive the detail pages
5. Return to the visual design once content is settled

---

## 11. Technical notes

- **Next.js 16** — significantly changed from earlier versions. Check the
  bundled docs before writing new code
- **Tailwind v4** inlines theme values at parse time, which is why the layout's
  fonts go through an explicit scoped selector. Don't unpick that casually
- **Detail pages are pre-rendered** from the entry list, so a new entry with a
  slug automatically gets a page
- **Git:** push as `mafsar08`. The other account on this machine
  (`mohammedafsar08`) has no write access
