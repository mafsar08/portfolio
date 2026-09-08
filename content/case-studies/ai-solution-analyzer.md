# AI Solution Analyzer (Metadata Intelligence) — Case Study

**Feature name:** AI Solution Analyzer (Metadata Intelligence)
**Slug:** `ai-solution-analyzer`
**Route:** `/work/ai-solution-analyzer`
**Year:** 2025
**Type:** Major feature
**Company:** Kissflow
**Highlighted:** true

---

### Home row description

> Pre-deployment AI validator that catches anomalies and misconfigurations in forms, workflow, and permissions before going live.

### Tagline (below title)

> Pre-deployment AI validator inside Process Builder that catches misconfigurations in forms, workflow steps, and permissions — with in-context 'Locate' to navigate directly to the problem.

---

### Context

Process admins in Kissflow build enterprise approval workflows with multi-step approvals, parallel branches, and field-level permissions per step. Misconfigurations often surface only after deployment — by then, live items are stuck, users are filing tickets, and admins are debugging in production. The stakes are real: a high-value purchase order accidentally assigned to "Everyone" instead of the finance director creates a compliance risk. A compensation field left editable by employees in an acknowledgement step opens the door to payroll fraud. There was no pre-deployment check to catch these before hitting 'Go live.' The feature is available on Enterprise plans for no-code processes.

### What I designed

I designed an AI-powered analysis tool embedded inside Process Builder that reviews forms, workflow steps, and permissions before a process goes live. It classifies findings into two severity tiers — 'Critical' for serious issues that can lead to compliance risks, workflow breakdowns, or data exposure, and 'Suggestions' for best-practice improvements. Each finding includes a problem statement, a suggested fix, and a 'Locate' action that navigates directly to the problematic element across the Form, Workflow, or Permissions tabs.

### Key decisions

**'Locate' as the core interaction.** Clicking 'Locate' on any finding closes the results modal, switches to the correct builder tab, scrolls to the exact field or step, highlights it briefly, and positions a draggable floating panel nearby with the problem statement and suggested fix. The admin sees the issue description right next to the problematic element — no memorizing, no hunting. This also lays the groundwork for a future 'Fix' action: we already know the problem, its location, and the resolution, so with the admin's acknowledgement, AI can apply the fix in a single click.

**Draggable floating panel, not a fixed sidebar.** The builder already has a tight layout — field panel on the left, canvas in the center, properties on the right. A fixed sidebar would compress the workspace further. The floating panel (320x450px) stays out of the way, can be dragged freely, and lets admins paginate through issues (1 of 9, 2 of 9...) or jump back to the full results list.

**Two severity tiers, not a gradient.** I kept it to 'Critical' and 'Suggestions' — no medium, no scores. Adding more tiers creates ambiguity about what blocks deployment. Two tiers make it binary: Critical means must fix before go live, Suggestions means it works but could be better. Simple for admins to prioritize.

**Optional, not mandatory.** The analyzer lives as a small icon in the builder header, next to 'Review changes' — adjacent to the publish flow without being part of it. Making it a mandatory pre-publish step would add friction and make the go-live process harder for admins. Keeping it optional respects their judgment on when to run it.

**Background analysis with badge notification.** Analysis time scales with process complexity and metadata size. Instead of blocking the admin, I let them close the modal and keep working — a toast and a badge dot on the Analyze button notify them when results are ready. The close button tooltip reinforces this: "The analysis will continue to run in the background."

**Rerun gated on actual changes.** Rerunning is disabled until the admin modifies the process at the metadata level. Analysis is expensive in terms of AI token costs and backend resources. The gate prevents wasted reruns and sets the right expectation — the analyzer reviews what you've built, not what you hope to build. When rerun is available, a confirmation warns that current observations will be replaced, protecting admins from accidentally losing findings they haven't acted on.

### Outcome

- Pre-deployment safety net that catches permission misconfigurations, hardcoded assignments, and workflow design flaws before they reach production
- 'Locate' eliminates the gap between identifying an issue and finding it in the builder — one click, zero navigation
- Foundations for a future AI 'Fix' action — problem, location, and resolution are already known
- Background analysis keeps the admin productive while the AI works
- Findings are actionable — each one names the specific field, step, or permission and tells the admin exactly what to change

---

### Screenshots

| # | File | Description |
|---|---|---|
| 01 | `screenshots/ai-solution-analyzer/01-studio-overview.png` | Process Builder with Form tab, showing Analyze button in header |
| 02 | `screenshots/ai-solution-analyzer/02-analyzer-modal-opened.png` | Initial state — "Ready for a quick quality check?" with AI Run analysis button |
| 03 | `screenshots/ai-solution-analyzer/03-loading-state.png` | Loading — "Our AI is analyzing your process" with step-by-step progress |
| 04 | `screenshots/ai-solution-analyzer/04-results-view.png` | Results — 9 observations, filters sidebar, Critical/Suggestions cards with Locate buttons |
| 05 | `screenshots/ai-solution-analyzer/05-draggable-modal-locate.png` | Locate on Permission issue — Permissions tab with field highlighted, draggable modal with Problem Statement + Suggested Fix |
| 06 | `screenshots/ai-solution-analyzer/06-draggable-workflow-issue.png` | Locate on Workflow issue — Workflow tab with canvas, draggable modal showing 2 of 9 |

---
