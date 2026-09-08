# Document Templates with AI Generation — Case Study

**Feature name:** Document Templates with AI Generation
**Slug:** `document-templates`
**Route:** `/work/document-templates`
**Year:** 2026
**Type:** Major feature
**Company:** Kissflow
**Highlighted:** true

---

### Home row description

> AI-powered document template generation that reads process fields and produces a ready-to-edit first draft in seconds.

### Tagline (below title)

> AI-powered document template generation that reads process fields, understands the document purpose, and produces a structured first draft with dynamic field placeholders — ready to edit, customize, and connect to workflows.

---

### Context

Kissflow already had a manual document template editor — rich text formatting, field insertion, headers/footers, page setup, and connector-based PDF generation. Process admins could build templates from scratch and connect them to workflows for automated PDF output. But starting from a blank canvas was the bottleneck. Admins had to structure the document, write section content, figure out which process fields to insert and where, and format everything manually. For a standard document like an offer letter or purchase order, this was repetitive work that followed predictable patterns.

### What I designed

I designed the AI generation path for document templates. The admin enters a template name (e.g., "Employee Offer Letter"), selects a language from 18+ options, and clicks Generate. The AI reads the process metadata — field names, types, and structure — and produces a complete first draft with the correct dynamic field placeholders already inserted. The admin can refine by adding additional information and regenerating, compare up to 10 drafts side by side, then click "Use this draft" to hand off to the existing manual editor for final customization.

### Key decisions

**Template name as the generation prompt.** The name field ("Employee Offer Letter", "Purchase Order") doubles as the AI's primary instruction. The hint text guides admins to be descriptive about the document's purpose. I deliberately kept this simple — no detailed prompt field upfront. The AI generates a structured first draft from just the name and language, then the admin refines progressively using the additional information field.

**Progressive refinement, not a detailed upfront prompt.** After the first draft, a separate "Additional information" field appears for the admin to guide regeneration. This is intentional — the first draft gives the admin something concrete to react to, rather than asking them to describe what they want in the abstract. Each refinement produces a new numbered draft, not an overwrite.

**Draft comparison over replacement.** Each regeneration creates a new draft (Draft 1 of 3, Draft 2 of 3...) instead of replacing the previous one. Admins can navigate between drafts with prev/next arrows to compare different approaches. This matters because the AI might structure the same document differently across attempts — one draft might use a table layout for employee details, another might use inline paragraphs.

**10-draft cap — cost and signal.** Each generation costs AI tokens. But the cap also serves as a signal: if the AI hasn't produced something usable in 10 attempts, the admin is better off switching to manual creation. The counter ("9 attempts left") keeps the budget visible without being restrictive. When the limit is reached, an info banner appears — not an error.

**Clean handoff to the existing editor.** Clicking "Use this draft" creates the document, maps the AI content into the editor's header/footer/body structure, and opens the manual editor pre-populated. From that point, the admin has full control — formatting, page setup, additional field insertion, preview. My work ends at the handoff; the editor was pre-existing.

**Transient drafts, no persistence.** AI drafts exist only within the generation session. The admin either picks a draft and moves forward, or loses them on exit. An exit confirmation warns about this. No draft management, no orphaned AI content — keeps the system simple.

**Collapsible prompt panel.** The split layout (prompt panel left, document preview right) gives the admin control over how much screen space the preview gets. Once they have a draft they're evaluating, collapsing the prompt panel maximizes the document view.

### Outcome

- Eliminates the blank-canvas problem — admins get a structured first draft with correct field placeholders in seconds
- AI reads the process schema and maps fields automatically, removing the guesswork of which fields to insert where
- Supports 18+ languages for global enterprise teams — AI generates in the selected language natively, not via translation
- Progressive refinement model lets admins react to concrete output rather than describe what they want upfront
- Hands off cleanly to the existing editor — AI generation is the starting point, manual customization is the finish

---

### Screenshots

| # | File | Description |
|---|---|---|
| 01 | `screenshots/document-templates/01-document-list.png` | Empty state with "Create from scratch" and "Generate using AI" action cards |
| 02 | `screenshots/document-templates/02-ai-builder-initial.png` | AI builder — prompt panel with name/language fields, empty document preview |
| 03 | `screenshots/document-templates/03-ai-builder-filled.png` | AI builder with "Performance Review Letter" name entered |
| 04 | `screenshots/document-templates/04-ai-generating-loading.png` | Generated template with field placeholders, draft navigation, refinement prompt, "9 attempts left" |
| 05 | `screenshots/document-templates/05-ai-generated-scrolled.png` | Generated template continued view |
| 06 | `screenshots/document-templates/06-document-editor.png` | Manual editor with AI content loaded — fields panel, rich text toolbar, formatting tabs |
| 07 | `screenshots/document-templates/07-document-list-with-template.png` | Document list with created template card |

---
