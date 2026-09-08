# Portfolio — Project Instructions

@AGENTS.md

---

## 1. What this project is

A personal portfolio site for **Mohammed Afsar**, Senior Product Designer.

**Audience:** recruiters and hiring managers at B2B SaaS companies in India
(Freshworks, Zoho, Chargebee, Razorpay, and similar).

**The job it has to do:** get a recruiter from "who is this" to "let's talk"
in under two minutes. Every decision is measured against that. If something
doesn't help a recruiter decide, it doesn't belong on the page.

**Not** a design-showcase playground. Restraint beats cleverness here.

---

## 2. Who I am and how to work with me

I'm a **senior product designer, not a software engineer.** Default every
explanation to plain, designer-friendly language.

### Explaining things

- **Lead with the what and why** — behaviour, user impact, trade-offs.
  Not code internals, file names, or symbols.
- **Do the deep technical work, but don't surface it.** Read whatever you
  need to; then tell me only what it *means*. No technical inventory in chat.
  This is the rule you most often slip on — hold it.
- **Jargon only on request,** and always paired with "in plain terms: ...".
- **Frame choices as design decisions** — "Option A looks like X, Option B
  matches the rest of the page" — not as technical ones.

This governs how you *explain*, not the code you write. When I explicitly
ask for technical depth, give it fully.

### Formatting replies

Make replies scannable — I read structure faster than prose.

- Short paragraphs, clear headers, bullets over flat blocks. Answer first,
  support after.
- **Use a table** whenever comparing options, weighing trade-offs, or laying
  out a before/after.
- **Bold the key phrases** so I can skim and still get the point.
- Pull quotes and callouts out of the paragraph, don't bury them.
- No filler or preamble.

### Before building

- **Ask first, build second.** For anything non-trivial, ask until you
  genuinely understand what I want and why.
- **Match questions to risk.** Tiny and unambiguous? Just do it. Wide-reaching
  or easy to get wrong? Slow down and ask.
- **When there's a real choice, show options + your recommendation** and let
  me pick. Don't silently decide.
- **"Go ahead" does not mean the details are confirmed.**

### Things I've corrected before — don't repeat them

| Rule | Detail |
|---|---|
| **"Layout" means structure** | When I ask for layouts, I mean page composition — hero arrangement, content order, hierarchy, grid. **Not** interactive features like custom cursors, command palettes, or keyboard shortcuts. Never substitute interactivity for layout. |
| **No AI mentions in commits** | Never add a `Co-Authored-By: Claude` line or reference Claude/AI in commit text. Commits read as my own work. |
| **Don't re-analyse prior work** | Reference sites, research, and decisions already documented stay documented. Read `SESSION-SUMMARY.md` and the docs folder before fetching anything externally. |
| **Keep sessions lean** | Heavy reading or broad exploration goes to a subagent that returns a summary. Nudge me to `/compact` after long threads or lots of screenshots. |

---

## 3. Design rules — the non-negotiables

The site follows a **Swiss-minimalist editorial** direction, derived from
studying glimm.dev plus about a dozen designer-engineer portfolios
(emilkowal.ski, paco.me, leerob.com, delba.dev, brianlovin.com, rauchg.com,
anthonyhobday.com, frankchimero.com and others).

### The seven principles every reference shared

1. **Reductionism** — every element justifies its existence or comes out.
2. **Typography is the visual system** — hierarchy through size and weight,
   not colour.
3. **Near-monochrome** — colour lives in the *content*, never in the chrome.
4. **A single narrow centred column.**
5. **Whitespace is a design element,** not leftover space.
6. **One workhorse sans-serif.**
7. **Content sits flat** — no cards, borders, shadows, or rounded corners.

### What that means in practice

**Do:**
- One centred column, roughly 640px, generous top padding
- A year in the left gutter, content in the right — the same two-column
  rhythm across work, experience, achievements, and contact
- Lowercase, understated section headings that don't shout
- Muted grey for metadata, near-black for anything that matters
- Restrained hover moments only: an underline that wipes in from the left,
  an arrow that nudges diagonally
- Warm off-white ground, warm near-black text

**Don't:**
- Cards, panels, borders, drop shadows, or rounded corners on content
- Decorative gradients, background patterns, or texture
- Brand-colour accents in the chrome
- Big hero photography
- Multi-column grids or masonry
- Modal overlays
- Display or novelty fonts
- Anything that auto-cycles, rotates, or animates on a loop while I'm reading

**If a change adds visual weight, it needs to justify itself against
principle 1 before it goes in.**

---

## 4. Content rules

### Every work entry follows the same three-beat structure

| Beat | What it answers |
|---|---|
| **What** | What the feature is, in one plain sentence a recruiter understands |
| **How** | The design approach — the actual decision I made and why |
| **Impact** | The outcome. **Always reach for a number.** |

### Writing voice

- Plain and specific. No agency-speak, no "leveraged", no "spearheaded".
- Lead with the problem, not the solution.
- Name the constraint — constraints are what make the work interesting.
- Never inflate. If a number isn't known, say what changed qualitatively
  rather than inventing a metric.

### Source of truth for content

The written content lives in the docs folder and is mirrored into the data
file that the site reads. **Edit the doc first, then sync it across** — so the
prose stays reviewable outside of code.

---

## 5. Technical guardrails

- **This is Next.js 16 — it is not the Next.js you may remember.** Read the
  relevant guide in `node_modules/next/dist/docs/` before writing new code.
  Heed deprecation notices. (See `AGENTS.md`.)
- **Tailwind v4** inlines theme values at parse time, so overriding a font or
  colour variable in plain CSS won't reach the utility classes. Font scoping
  for the main layout is handled with an explicit scoped selector — leave that
  pattern alone unless you understand why it's there.
- **Fonts load through Next's font pipeline** and are exposed as CSS variables.
  Don't add a font without a reason that survives principle 6.
- **Dark mode** is wired up underneath but not exposed in the UI. Leave it
  wired; don't surface a toggle unless I ask.

---

## 6. Working agreements for this repo

- **Never commit raw internal product screenshots.** This repo is public and
  git history is permanent. The working screenshot library lives outside the
  repo, at `~/my-projects/portfolio/assets/`. Only the specific, cropped,
  reviewed images that actually appear on the site get committed.
- **Keep `SESSION-SUMMARY.md` current.** It's the living record of where the
  project stands. Update it at the end of any session that changes direction,
  ships something, or makes a decision worth remembering. My chat history gets
  auto-deleted after 30 days — **this doc is the memory, not the transcript.**
- **Commits** are written as my own work, present-tense, plain description of
  what changed.
- **Git accounts:** pushes use `mafsar08`. The other account on this machine
  (`mohammedafsar08`) lacks write access to this repo.
