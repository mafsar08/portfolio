# AI Control Center — Case Study

**Feature name:** AI Control Center
**Slug:** `ai-control-center`
**Route:** `/work/ai-control-center`
**Year:** 2026
**Type:** Major feature
**Company:** Kissflow
**Highlighted:** true

---

### Home row description

> Governance dashboard for super admins to control 30+ AI features across six module categories — with transparency tags, state preservation, and a master kill switch.

### Tagline (below title)

> Governance dashboard for super admins to control 30+ AI features across six module categories — with transparency tags, state preservation, and a master kill switch.

---

### Context

Before this feature, Kissflow's engineering team manually toggled AI feature flags for each customer account. Every enable or disable request meant a back-and-forth between customer-facing teams and engineers. As Kissflow shipped more AI capabilities — 30+ features across Process, Board, Dataset, Apps, Integrations, and Account — this approach didn't scale. Enterprise customers needed direct control over which AI features were active in their accounts, especially those sharing data with external AI models.

### What I designed

I designed a centralized AI governance dashboard inside Account Governance, accessible only to super admins. The page has two layers: a master toggle that acts as an account-wide kill switch for all AI features, and a per-feature list organized by six module categories — Account, Process, Board, Dataset, Apps and Portals, and Integration. Each feature shows its name, description, a documentation link, and a 'Data shared with AI' tag where applicable. The entire feature catalog is backend-driven, so new AI features appear automatically without any frontend changes.

### Key decisions

**Two-tier control, not a flat list.** The master toggle is separate from individual feature toggles. Turning off the master disables all AI features instantly — a kill switch for compliance scenarios. But when it's on, admins configure each feature independently. This gives enterprises both the broad control they need for policy compliance and the granularity to keep specific features active.

**State preservation on disable.** When the master toggle is turned off, individual feature states are preserved behind the scenes. Re-enabling the master restores the previous configuration instead of resetting everything to defaults. The enable confirmation reflects this — it says "restore access to selected AI features," not "enable all." This avoids forcing admins to reconfigure 30+ toggles after a temporary shutdown.

**Disabled overlay as a discovery surface.** When the master is off, I chose to show all features behind a frosted overlay with a lock icon, rather than hiding or collapsing them. This way, admins can still browse the full AI feature catalog and understand what's available in Kissflow before deciding to enable anything. The page serves double duty — governance tool and feature discovery.

**Dynamic confirmation modals.** Disabling shows a red "Disable all" button with "This action will remove access to all AI features" messaging. Enabling shows a blue "Enable" button with "restore" language. The severity of the action is reflected in the visual treatment — destructive actions feel destructive, constructive ones don't carry false alarm.

**'Data shared with AI' transparency tags.** Features that send account data to AI models are tagged with a yellow 'Data shared with AI' chip — visible inline, not hidden behind a tooltip. This was a design decision, not a compliance requirement. Admins should see data-sharing implications at a glance before toggling a feature on.

### Outcome

- Shifted AI governance from engineering-gated to self-serve for super admins
- Enterprises control AI adoption within their own policy constraints — no requests to Kissflow's team
- Backend-driven architecture scales automatically as new AI features ship, no redesign needed

---

### Screenshots

| # | File | Description |
|---|---|---|
| 01 | `screenshots/ai-control-center/01-full-page.png` | Full page, master ON, Account category visible |
| 02 | `screenshots/ai-control-center/02-full-page-all-features.png` | Full scrollable page with all 6 categories |
| 03 | `screenshots/ai-control-center/03-master-control-active.png` | Viewport with master toggle Active (green chip + toggle ON) |
| 04 | `screenshots/ai-control-center/04-disable-confirmation-modal.png` | "Disable AI access" modal with red "Disable all" CTA |
| 05 | `screenshots/ai-control-center/05-disabled-overlay-state.png` | Master OFF — frosted overlay, lock icon, "AI features disabled" message |
| 06 | `screenshots/ai-control-center/06-disabled-full-page.png` | Full page in disabled state |
| 07 | `screenshots/ai-control-center/07-enable-confirmation-modal.png` | "Enable AI access" modal with blue "Enable" CTA |
| 08 | `screenshots/ai-control-center/08-data-shared-with-ai-tag.png` | Account category with "Data shared with AI" yellow tag |
| 09 | `screenshots/ai-control-center/09-process-category.png` | Process category — Smart attachment, Solution analyzer |
| 10 | `screenshots/ai-control-center/10-board-category.png` | Board category — Subitem creation, Notes summary |
| 11 | `screenshots/ai-control-center/11-dataset-integration-category.png` | Dataset + Integration categories |
| 12 | `screenshots/ai-control-center/12-apps-portals-category.png` | Apps and Portals category |

---

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

# Service Accounts & Impersonation — Case Study

**Feature name:** Service Accounts & Impersonation
**Slug:** `service-accounts`
**Route:** `/work/service-accounts`
**Year:** 2023
**Type:** Major feature
**Company:** Kissflow
**Highlighted:** true

---

### Home row description

> Non-user identities for automated integrations and on-behalf-of actions, with access keys, impersonation, and dedicated audit logs.

### Tagline (below title)

> Non-user identities that decouple automation from individual user lifecycles, with scoped access keys, multi-level impersonation, and per-account audit trails for full governance.

---

### Context

Integrations in Kissflow were authenticated using individual user accounts. When that user left the company, got deactivated, or changed roles, every integration tied to them broke. Customer-facing teams escalated, engineers rewired integrations to a different user's credentials. Beyond integrations, recurring tasks like initiating appraisal forms or quarterly feedback required a human user as the initiator. Assignees would see the HR person's name instead of a system identity. There was no concept of a non-human identity in Kissflow — every automated action was tied to a person.

### What I designed

I designed Service Accounts as first-class non-human identities inside Kissflow. Each service account has its own bot avatar (from 16 predefined icons), name, description, access keys with configurable expiry, and a dedicated audit log. The detail view has three tabs — 'Access keys' for authentication credentials, 'Associated resources' for visibility into what the SA can access, and 'Audit log' for tracking every action the SA performs.

Impersonation is configured at two levels. At the account level, admins choose which service accounts can impersonate users across three common resources — 'Global my items', 'User and Group management', and 'All flows and integrations'. At the process level, process admins configure impersonation access for their specific flow. Each impersonation configuration includes a warning banner and a confirmation step that spells out the security implications.

### Key decisions

**Decoupled identity from user lifecycle.** The core problem was that automation identity was coupled to a person. I designed service accounts as independent entities — they don't consume a user license, they can't be "on vacation," and deactivating a user doesn't break them. Super admins create service accounts and integration admins or other users consume them.

**Bot avatars, not blank icons.** Each service account gets a distinct robot avatar from 16 predefined options (randomly assigned on creation, changeable later). This makes service accounts instantly recognizable in lists, audit logs, and assignment dropdowns. You never confuse a service account with a real person.

**Access keys with visible expiry.** Keys can be set to never expire, or expire in 7, 30, 90 days, or a custom date. The list view shows an orange "Nearing expiry" warning when a key is close to expiration. I didn't force expiry on all keys because some integrations run for years without changes. But the warning nudges admins to be aware of key hygiene without creating maintenance overhead.

**Impersonation separated from SA management.** Impersonation configuration lives under Account Security, not inside the service account detail page. This is deliberate. Impersonation is the highest-risk capability — a service account acting as a user can access that user's data and perform actions on their behalf. Centralizing it in Account Security alongside password policy, SAML, and session timeout makes it a visible governance decision. The admin sees the full impersonation picture in one place, not scattered across individual SA pages.

**Two-level confirmation for impersonation.** Configuring impersonation shows a warning banner ("Selected service accounts will have impersonation access to global my items") and a second confirmation alert with resource-specific impact messaging before saving. This friction is intentional — the security and authorization impact of impersonation needs to be unavoidable, not dismissible.

**Dedicated per-SA audit log.** Each service account has its own audit log tab with Flow-level and Item-level views, filterable by period, object, acted by, and event category. When a service account acts via impersonation, the audit trail shows who the SA impersonated and what it did. This sits alongside the global audit log but scoped to a single SA for focused investigation.

### Outcome

- Integrations no longer break when users are deactivated or leave the company
- Recurring on-behalf-of actions (appraisal initiations, automated approvals) use a system identity instead of a personal one
- Account-level and process-level impersonation give admins granular control over what service accounts can do and where
- Dedicated audit logs per service account enable focused governance without sifting through the global log
- Access key expiry warnings surface credential hygiene proactively
- Super admins create, other admins consume — sharing model allows delegation without full admin access

---

### Screenshots

| # | File | Description |
|---|---|---|
| 01 | `screenshots/service-accounts/01-service-account-page.png` | Admin page with Service account nav item |
| 02 | `screenshots/service-accounts/02-service-account-list.png` | List with bot avatars, last accessed, admins, access keys with expiry warning, status |
| 03 | `screenshots/service-accounts/03-service-account-detail-access-keys.png` | Detail — Access keys tab with key ID, masked secret, expiry, status toggle |
| 04 | `screenshots/service-accounts/04-associated-resources.png` | Associated resources tab with search and filter |
| 05 | `screenshots/service-accounts/05-audit-log-tab.png` | Dedicated audit log — Flow-level/Item-level, filters, event entries |
| 06 | `screenshots/service-accounts/06-impersonation-security.png` | Account Security — Impersonation section with 3 resource cards |
| 07 | `screenshots/service-accounts/07-impersonation-configure-modal.png` | Configure impersonation modal — warning banner, SA multi-select, bot avatars |
