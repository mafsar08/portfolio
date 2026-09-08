# Case study content

One Markdown file per case study, named by slug. The slug must match the
entry's slug in the site data — that's how a file finds its page at
`/work/<slug>`.

**These files are the source of truth.** Write and edit here; the site reads
from here. Don't edit case study prose in code.

## Structure of a file

Metadata block at the top (feature name, slug, route, year, type, company),
then the body:

| Section | What it does |
|---|---|
| **Home row description** | One sentence. Must fit two lines on the homepage |
| **Tagline** | Sits under the title on the detail page. Can be longer |
| **Context** | The problem. What existed before, what was broken, why this needed to exist |
| **What I designed** | Concrete scope. What shipped, and what was already there |
| **Key decisions** | 3–6 decisions, each with its reasoning. The core of the piece |
| **Outcome** | Concrete benefits tied back to Context. Reach for numbers |
| **Screenshots** | Which image goes where |

Writing rules — voice, banned words, sentence rhythm — are in
`docs/case-study-process.md`. Follow them.

## Images

Working screenshots live outside this repo, at
`~/my-projects/portfolio/assets/screenshots/<slug>/`. **This repo is public.**
Only the specific, cropped, reviewed images that appear on the site get
committed here.
