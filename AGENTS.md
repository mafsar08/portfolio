# Portfolio — Codex working context

## Read before working

- Read `CLAUDE.md` for the full shared project brief, design rules, content rules,
  and working agreements. Its `@AGENTS.md` line points back here; read each file
  once, without recursively following that reference.
- Read `SESSION-SUMMARY.md` for current state, decisions, and pending work before
  planning. Read the relevant entries in `docs/features.md` and
  `docs/case-studies.md` before content changes. Follow
  `docs/case-study-process.md` when developing a case study.
- Existing research and decisions should be reused. Do not reopen reference-site
  research unless the task calls for it. Check current implementation before
  treating a historical status or documented claim as verified.

## Purpose and response style

- This is Mohammed Afsar's portfolio, aimed at recruiters and hiring managers at
  Indian B2B SaaS companies. Help them move from "who is this" to "let's talk"
  in under two minutes. Judge changes by clarity, credibility, and relevance.
- Explain behaviour, user impact, and trade-offs in plain designer-friendly
  language. Do the technical work, but keep code inventories, symbols, and file
  paths out of chat unless requested or necessary to deliver an artifact.
- Lead with the answer. Keep paragraphs short, bold key points, and use tables
  for comparisons. Distinguish evidence, assumptions, proposals, and decisions.
- Clarify meaningful ambiguity before non-trivial building or rewriting. Show
  design options with a recommendation when a real choice remains. A directional
  "go ahead" does not confirm missing details. Tiny, clear edits can proceed.
- Delegate broad exploration and heavy reading to a subagent for a concise
  summary; keep targeted reads local. Suggest compaction after long or
  screenshot-heavy sessions, preserving the goal, decisions, changes, and next steps.

## Design and content agreements

- Preserve the Swiss-minimalist editorial direction: a narrow centred column,
  year/label gutter, typography-led hierarchy, generous whitespace, warm
  near-monochrome colours, and flat content. Avoid decorative cards, borders,
  shadows, gradients, novelty fonts, grids, overlays, or looping animation.
- "Layout" means page composition, hierarchy, and content order, not added
  interactions. Keep dark mode hidden unless requested.
- Work entries explain what, how, and impact. Case studies lead with the problem
  and constraints, state the designer's actual contribution, and explain choices
  and their rationale in first-person, past-tense, plain language.
- Edit the written source in `docs/` first, then sync approved copy to the site.
  Verify the designer's rationale and ownership with the user; code proves
  behaviour, not personal contribution or business impact.
- Prefer measured outcomes when evidence exists. Never invent numbers, quotes,
  testimonials, research, or outcomes. Existing draft claims are not proof;
  preserve uncertainty and confirm unsupported claims before reusing them.

## Continuity and assets

- Keep `SESSION-SUMMARY.md` current after meaningful changes or decisions. It is
  the living project record; memory notes are pointers, not a replacement.
- This repository is public. Raw internal screenshots stay outside it, under
  `~/my-projects/portfolio/assets/` or the source product's working screenshot
  folder. In the case-study process, "project root" for working screenshots means
  the source product repository, not this public portfolio. Only specific,
  cropped, reviewed images used on the site may be committed here.
- Preserve existing uncommitted work. Commit messages use plain present-tense
  descriptions with no AI attribution. Pushes use `mafsar08`.
- Preserve the documented font scoping and font-loading approach unless the
  change calls for revisiting them. Consult the bundled Next.js documentation
  below before writing application code.

<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->
