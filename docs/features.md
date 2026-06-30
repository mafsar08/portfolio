# Portfolio Features — Content Reference

This document mirrors the content shown on the portfolio for each work entry. Source: `data/track-record.ts`. Update here when revising portfolio copy, then sync back to the data file.

Features are listed in CSV order.

---

## Writing guidelines — how this content is constructed

Use this as the style contract when adding new entries or rewriting existing ones, so every feature reads consistently.

### Voice

- **Third-person feature-description.** Designer is the implied subject — no explicit "I".
   - ✓ "Designed a governance dashboard…"
   - ✗ "I designed a governance dashboard…"
   - ✗ "The feature is a governance dashboard…"
- **Past tense, active verbs.** Each block opens with an action: *Designed, Led, Built, Researched, Mapped, Studied, Audited, Aligned*.
- **Designer's perspective, not engineering.** Talk about design decisions, user research, and rationale — not implementation or stack.

### Tone

- **Factual and direct.** No marketing language, no superlatives ("amazing", "revolutionary"), no claims that aren't specific.
- **Concrete over vague.** Name the modules, roles, filters, integrations. ("Process, Board, Dataset, Apps…" / "Azure AD, Okta, OneLogin" / "Critical vs. Suggestions").
- **Outcome-oriented.** When describing impact, name the user benefit or business outcome — not vanity metrics or generic gains.
- **Quiet confidence.** Decisions are stated as decisions, not pitched.

### Format — the three-block structure

Every detail page uses the same three blocks. Each maps to a heading users actually see.

| Block | UI label | What it covers |
|---|---|---|
| `what` | **Overview** | What shipped, in concrete terms. Names the audience (admins, super admins, business users) and the specific surface area / scope. |
| `how` | **Approach** | The design rationale and key moves. Usually opens with a research or analysis verb (*Studied, Interviewed, Shadowed, Audited, Mapped*) → then the design decision(s) that followed. |
| `impact` | **Outcome** | The benefit delivered — to users, admins, or the business. Tied back to the problem framed in Approach. |

### Length per block

- **Tagline / home row description:** one sentence, 15–25 words.
- **Overview:** 2–3 sentences, ~40–60 words.
- **Approach:** 2–3 sentences, ~50–70 words.
- **Outcome:** 1–2 sentences, ~30–50 words.

Aim to stay within these bands. If a block runs long, cut adjectives first, then split.

### Sentence-level conventions

- **Em dashes (—)** for parenthetical asides and rhythm: *"…activate, deactivate, delete — group assignments, role changes…"*
- **Single quotes** around in-product labels: *"Critical"*, *"Data shared with AI"*, *"Locate"*.
- **Sentence case** for prose; **Title Case** for product/feature names.
- **No exclamation marks. No emoji. No italics for emphasis** — let the verbs and specificity carry the weight.
- **Avoid** these words: *seamless, intuitive, robust, powerful, leverage, drive, unlock, enhance* (when used vaguely).

### Pattern by block — quick templates

Use as a starting point, not a fill-in-the-blank.

**Overview**
> Designed [feature] that [does X] for [audience]. Supports [specific capabilities / scope]. [Optional: notable detail that signals depth.]

**Approach**
> [Research verb] [stakeholders / users] to [understand problem]. [Key design decision] — [reasoning]. [Optional: secondary move that completes the system.]

**Outcome**
> [Primary benefit] for [audience]. [Secondary outcome / what this enabled.]

---

## File Preview Revamp

**Feature name (CSV):** File preview - Enhancement
**Modified feature name (portfolio):** File Preview Revamp
**Slug:** `file-preview-revamp`
**Route:** `/work/file-preview-revamp`
**Documentation:** https://community.kissflow.com/t/g9h4a2v/revamped-file-preview

### Metadata

| Field | Value |
|---|---|
| Year | 2023 |
| Type | Enhancement |
| Company | Kissflow |
| Date | 2023 |
| Highlighted | false |

### Home row description

> Multi-mode file preview — fullscreen, new-tab, picture-in-picture, and split-screen comparison.

### Detail page content

**Tagline (below title)**

> Multi-mode file preview — fullscreen, new-tab, picture-in-picture, and split-screen comparison.

**Overview** *(was: what)*

> Expanded the file preview experience with fullscreen, new-tab, picture-in-picture, and split-screen comparison modes for process and board form attachments.

**Approach** *(was: how)*

> Observed users juggling multiple browser windows to compare attachments side-by-side. Designed multiple viewing modes that match different workflow intents — fullscreen for focus, PiP for filling forms while referencing, split-screen for comparison. Let users pick the mode that fits the task.

**Outcome** *(was: impact)*

> Enhanced flexibility for viewing attachments and comparing data. Improved accessibility and matched the preview experience to diverse workflow needs.

### Images

- Hero: `/images/work/placeholder-1.svg`
- Inline after Overview: `/images/work/placeholder-2.svg`

---

## Role-Based Access Control (RBAC)

**Feature name (CSV):** RBAC
**Modified feature name (portfolio):** Role-Based Access Control (RBAC)
**Slug:** `rbac`
**Route:** `/work/rbac`
**Documentation:** https://community.kissflow.com/t/35h4ak0/user-roles-permissions

### Metadata

| Field | Value |
|---|---|
| Year | 2025 |
| Type | Major feature |
| Company | Kissflow |
| Date | 2025 |
| Highlighted | true |

### Home row description

> Five distinct admin roles — Super Admin, IAM, User, Billing, App Store — with granular scoped permissions and multi-role support.

### Detail page content

**Tagline (below title)**

> Five distinct admin roles — Super Admin, IAM, User, Billing, App Store — with granular scoped permissions and multi-role support.

**Overview** *(was: what)*

> Designed Kissflow's role-based access control system — five administrative roles (Super Admin, IAM Admin, User Admin, Billing Admin, App Store Admin) with distinct permission scopes. Supports combining multiple roles per user.

**Approach** *(was: how)*

> Modeled admin personas and their typical responsibilities to separate concerns — security, user provisioning, billing, app installation. Designed granular permission scopes per role so organizations can distribute admin duties securely without granting full access. Supported multi-role assignment to accommodate smaller teams.

**Outcome** *(was: impact)*

> Enabled granular access control for secure distribution of administrative responsibilities. Allowed teams to assign only necessary permissions (e.g., billing-only access) while supporting multi-role users for smaller orgs.

### Images

- Hero: `/images/work/placeholder-1.svg`
- Inline after Overview: `/images/work/placeholder-2.svg`

---

## Custom Columns in User Management

**Feature name (CSV):** User management - Custom column
**Modified feature name (portfolio):** Custom Columns in User Management
**Slug:** `custom-columns`
**Route:** `/work/custom-columns`
**Documentation:** https://community.kissflow.com/t/m1h4akn/user-management-overview

### Metadata

| Field | Value |
|---|---|
| Year | 2025 |
| Type | Enhancement |
| Company | Kissflow |
| Date | 2025 |
| Highlighted | false |

### Home row description

> Extended the user management table with custom columns — text, number, attachment, signature fields with validation rules.

### Detail page content

**Tagline (below title)**

> Extended the user management table with custom columns — text, number, attachment, signature fields with validation rules.

**Overview** *(was: what)*

> Designed the Custom Columns feature in user management — admins can extend the user table with text, number, attachment, signature fields and more, complete with validation rules and environment-aware behavior.

**Approach** *(was: how)*

> Spoke with admins storing user attributes in external systems to understand the gap. Built custom fields with validation rule configuration and environment-aware metadata sync (production-only creation, auto-synced to dev/test with metadata but not data values) to prevent cross-environment data leaks.

**Outcome** *(was: impact)*

> Tailored user management to organization-specific data needs. Reduced reliance on external systems to track user attributes and centralized user information in a single interface.

### Images

- Hero: `/images/work/placeholder-1.svg`
- Inline after Overview: `/images/work/placeholder-2.svg`

---

## Document Templates with AI Generation

**Feature name (CSV):** Document template
**Modified feature name (portfolio):** Document Templates with AI Generation
**Slug:** `document-templates`
**Route:** `/work/document-templates`
**Documentation:** https://community.kissflow.com/t/x2h9qtr/generating-document-templates

### Metadata

| Field | Value |
|---|---|
| Year | 2026 |
| Type | Major feature |
| Company | Kissflow |
| Date | 2026 |
| Highlighted | true |

### Home row description

> Automated PDF generation from process data with AI-assisted template creation across 18+ languages.

### Detail page content

**Tagline (below title)**

> Automated PDF generation from process data with AI-assisted template creation across 18+ languages.

**Overview** *(was: what)*

> Designed the Document Templates feature that automates PDF generation from process data — offer letters, purchase orders, and more. Templates can be built from scratch or generated by AI from a natural-language prompt, then connected to processes via connectors.

**Approach** *(was: how)*

> Researched admin document-creation workflows to identify repetitive steps in PDF generation. Built a visual editor with field insertion, image support, headers/footers, and formatting controls, then layered in AI-assisted generation with up to 10 regenerable drafts. Supports 18+ languages for global teams.

**Outcome** *(was: impact)*

> Streamlined document creation for process admins by automating PDF output tied to workflow instances. Reduced manual formatting effort and standardized organization-wide document output across languages.

### Images

- Hero: `/images/work/placeholder-1.svg`
- Inline after Overview: `/images/work/placeholder-2.svg`
- Inline after Approach: `/images/work/placeholder-3.svg`

---

## Data Backup Status & Notifications

**Feature name (CSV):** Data backup - Status and notification part
**Modified feature name (portfolio):** Data Backup Status & Notifications
**Slug:** `data-backup`
**Route:** `/work/data-backup`
**Documentation:** https://community.kissflow.com/t/83y3mfp/data-backup-overview

### Metadata

| Field | Value |
|---|---|
| Year | 2025 |
| Type | Enhancement |
| Company | Kissflow |
| Date | 2025 |
| Highlighted | false |

### Home row description

> Real-time backup status stages and proactive email/in-app alerts across the backup lifecycle for super admins.

### Detail page content

**Tagline (below title)**

> Real-time backup status stages and proactive email/in-app alerts across the backup lifecycle for super admins.

**Overview** *(was: what)*

> Designed the status and notification experience for Kissflow's data backup service. Super admins now see real-time backup status (started, in progress, completed, canceled) with email and in-app alerts at key milestones.

**Approach** *(was: how)*

> Interviewed super admins managing compliance audits to identify visibility gaps. Introduced status stages mirroring the backup lifecycle and layered notifications so admins don't have to monitor the UI actively. Added detailed backup history logs for audit trails.

**Outcome** *(was: impact)*

> Improved backup oversight for compliance tracking. Reduced admin burden by notifying at key milestones instead of requiring manual status checks.

### Images

- Hero: `/images/work/placeholder-1.svg`
- Inline after Overview: `/images/work/placeholder-2.svg`

---

## Homepage Redesign

**Feature name (CSV):** Kissflow homepage
**Modified feature name (portfolio):** Homepage Redesign
**Slug:** `homepage-redesign`
**Route:** `/work/homepage-redesign`
**Documentation:** https://community.kissflow.com/t/35yz0kl/introducing-the-new-kissflow-homepage

### Metadata

| Field | Value |
|---|---|
| Year | 2025 |
| Type | Major feature |
| Company | Kissflow |
| Date | 2025 |
| Highlighted | true |

### Home row description

> Centralized homepage giving users quick access to tasks, in-progress items, and recently used workflows.

### Detail page content

**Tagline (below title)**

> Centralized homepage giving users quick access to tasks, in-progress items, and recently used workflows.

**Overview** *(was: what)*

> Redesigned the Kissflow homepage to consolidate workflow management in one place — pending tasks, in-progress items, and recently used workflows all accessible without navigating through scattered sections.

**Approach** *(was: how)*

> Mapped fragmented task-switching patterns across 'Created By Me' and 'Assigned To Me' sections to identify pain points. Designed a unified hub with status-first visibility — prioritizing due dates, active workflows, and item-level statuses. Iterated the layout to surface the most actionable information at a glance.

**Outcome** *(was: impact)*

> Reduced friction for task monitoring by centralizing pending tasks, in-progress items, and workflow status in one view. Simplified daily navigation and improved visibility into account-wide activity.

### Images

- Hero: `/images/work/placeholder-1.svg`
- Inline after Overview: `/images/work/placeholder-2.svg`
- Inline after Approach: `/images/work/placeholder-3.svg`

---

## SAML Configuration Enhancement

**Feature name (CSV):** SAML enhancement
**Modified feature name (portfolio):** SAML Configuration Enhancement
**Slug:** `saml-configuration`
**Route:** `/work/saml-configuration`
**Documentation:** https://community.kissflow.com/t/60hvngl/introducing-enhancements-in-saml-configuration-for-smoother-setup-and-control

### Metadata

| Field | Value |
|---|---|
| Year | 2024 |
| Type | Enhancement |
| Company | Kissflow |
| Date | 2024 |
| Highlighted | false |

### Home row description

> Automated SAML setup with Azure AD metadata upload and auto-populated IdP fields — cut setup errors and friction.

### Detail page content

**Tagline (below title)**

> Automated SAML setup with Azure AD metadata upload and auto-populated IdP fields — cut setup errors and friction.

**Overview** *(was: what)*

> Streamlined SAML configuration for Azure AD SSO integration. Admins can now download Kissflow metadata with one click and upload Azure AD Federation Metadata XML — all IdP configuration fields auto-populate.

**Approach** *(was: how)*

> Identified the highest-friction steps in SSO setup from admin feedback. Replaced manual field entry with XML-driven auto-population to eliminate common errors like mismatched formatting, extra spaces, and incorrect slashes. Added Super Admin control over SSO notification emails for better governance.

**Outcome** *(was: impact)*

> Reduced setup errors from manual misconfiguration. Saved configuration time for returning admins via auto-populated data and improved admin control over SSO communications.

### Images

- Hero: `/images/work/placeholder-1.svg`
- Inline after Overview: `/images/work/placeholder-2.svg`

---

## Service Accounts & Impersonation

**Feature name (CSV):** Service account and impersonisation
**Modified feature name (portfolio):** Service Accounts & Impersonation
**Slug:** `service-accounts`
**Route:** `/work/service-accounts`
**Documentation:** https://community.kissflow.com/t/q6h4a73/introducing-service-accounts

### Metadata

| Field | Value |
|---|---|
| Year | 2023 |
| Type | Major feature |
| Company | Kissflow |
| Date | 2023 |
| Highlighted | true |

### Home row description

> Non-user identities for automated integrations with impersonation, scoped permissions, and dedicated audit logs.

### Detail page content

**Tagline (below title)**

> Non-user identities for automated integrations with impersonation, scoped permissions, and dedicated audit logs.

**Overview** *(was: what)*

> Designed Service Accounts — non-user identities that automate integrations and access shared resources. Supports user impersonation with all activities audited in dedicated logs for governance.

**Approach** *(was: how)*

> Studied integration failure patterns where users leaving the company broke automated flows. Designed Service Accounts as first-class non-user identities with access keys, scoped permissions, and impersonation capabilities — decoupling automation from individual user lifecycles. Added dedicated audit logging for governance oversight.

**Outcome** *(was: impact)*

> Integrations no longer fail when users are disabled or deleted. Maintained item ownership across connected processes and enabled programmatic resource access with full audit governance.

### Images

- Hero: `/images/work/placeholder-1.svg`
- Inline after Overview: `/images/work/placeholder-2.svg`
- Inline after Approach: `/images/work/placeholder-3.svg`

---

## App Items in Global My Items

**Feature name (CSV):** App items in global my items
**Modified feature name (portfolio):** App Items in Global My Items
**Slug:** `app-items`
**Route:** `/work/app-items`
**Documentation:** https://community.kissflow.com/t/q6yxlfg/introducing-kissflow-app-items-in-global-my-items

### Metadata

| Field | Value |
|---|---|
| Year | 2024 |
| Type | Enhancement |
| Company | Kissflow |
| Date | 2024 |
| Highlighted | false |

### Home row description

> Unified app items into Global My Items — one centralized hub for managing work across Kissflow apps.

### Detail page content

**Tagline (below title)**

> Unified app items into Global My Items — one centralized hub for managing work across Kissflow apps.

**Overview** *(was: what)*

> Integrated Kissflow App Items into the Global My Items view — users can now manage items from their Kissflow apps alongside Process, Board, and Dataset items in one centralized location.

**Approach** *(was: how)*

> Noticed users bouncing between apps and Global My Items to find active work. Unified the data source so app items surface in the global view without losing their app-specific metadata — single dashboard, multiple app contexts.

**Outcome** *(was: impact)*

> Centralized hub for managing all items across apps. Reduced time spent navigating between spaces and streamlined overall workflow efficiency.

### Images

- Hero: `/images/work/placeholder-1.svg`
- Inline after Overview: `/images/work/placeholder-2.svg`

---

## Deleted Users — *PENDING*

**Feature name (CSV):** Deleted users
**Modified feature name (portfolio):** *(not yet added)*
**Slug:** *(not yet assigned)*
**Route:** *(none)*
**Documentation:** *(no link in CSV)*

> ⚠ This entry exists in the CSV but is not yet in `data/track-record.ts`. No documentation link was provided. Content needs to be drafted from external context before adding.

---

## Print Attachments in File Preview

**Feature name (CSV):** File preview - Print
**Modified feature name (portfolio):** Print Attachments in File Preview
**Slug:** `print-attachments`
**Route:** `/work/print-attachments`
**Documentation:** https://community.kissflow.com/t/h7y3ldz/introducing-print-attachments-in-preview-mode-on-kissflow

### Metadata

| Field | Value |
|---|---|
| Year | 2024 |
| Type | Enhancement |
| Company | Kissflow |
| Date | 2024 |
| Highlighted | false |

### Home row description

> One-click print for form attachments from preview mode — PDFs, images, and text files, no downloads required.

### Detail page content

**Tagline (below title)**

> One-click print for form attachments from preview mode — PDFs, images, and text files, no downloads required.

**Overview** *(was: what)*

> Added direct print capability for form attachments from within preview mode — users can print PDFs, images, and text files (CSV, TXT) without downloading locally first.

**Approach** *(was: how)*

> Observed users downloading → opening → printing attachments repeatedly. Added a one-click print action directly in the preview overlay, cutting out the download step entirely. Scoped supported formats to the most common attachment types.

**Outcome** *(was: impact)*

> Eliminated time spent downloading files to print. Reduced device storage consumption and improved end-user workflow efficiency.

### Images

- Hero: `/images/work/placeholder-1.svg`
- Inline after Overview: `/images/work/placeholder-2.svg`

---

## User Management Overhaul

**Feature name (CSV):** User management - Managing users
**Modified feature name (portfolio):** User Management Overhaul
**Slug:** `user-management`
**Route:** `/work/user-management`
**Documentation:** https://community.kissflow.com/t/y4h4aks/add-manage-users

### Metadata

| Field | Value |
|---|---|
| Year | 2025 |
| Type | Major feature |
| Company | Kissflow |
| Date | 2025 |
| Highlighted | false |

### Home row description

> End-to-end user administration — lifecycle, roles, 2FA levels, bulk actions, and SCIM provisioning with Azure AD / Okta / OneLogin.

### Detail page content

**Tagline (below title)**

> End-to-end user administration — lifecycle, roles, 2FA levels, bulk actions, and SCIM provisioning with Azure AD / Okta / OneLogin.

**Overview** *(was: what)*

> Redesigned the end-to-end user management experience — covering lifecycle actions (add, activate, deactivate, delete), group assignments, role changes, 2FA enrollment levels, and SCIM integration with Azure AD, Okta, and OneLogin.

**Approach** *(was: how)*

> Audited every admin flow to identify repetition and bulk-action gaps. Introduced batch operations across all key actions — role changes, group assignment, password resets, verification emails. Designed the delete flow with automatic flow-reassignment notifications to prevent orphaned workflows.

**Outcome** *(was: impact)*

> Streamlined onboarding through manual or SCIM-based addition. Reduced administrative overhead via efficient bulk actions and improved license optimization through clearer activation/deactivation flows.

### Images

- Hero: `/images/work/placeholder-1.svg`
- Inline after Overview: `/images/work/placeholder-2.svg`

---

## Audit Log Enhancements with AI Summaries

**Feature name (CSV):** Audit log enhancement
**Modified feature name (portfolio):** Audit Log Enhancements with AI Summaries
**Slug:** `audit-log-enhancements`
**Route:** `/work/audit-log-enhancements`
**Documentation:** https://community.kissflow.com/t/60y1fga/now-live-refinements-to-audit-logs

### Metadata

| Field | Value |
|---|---|
| Year | 2025 |
| Type | Enhancement |
| Company | Kissflow |
| Date | 2025 |
| Highlighted | false |

### Home row description

> Extended audit logs with AI summaries, 90-day tracking, advanced filters, and navigation between entries.

### Detail page content

**Tagline (below title)**

> Extended audit logs with AI summaries, 90-day tracking, advanced filters, and navigation between entries.

**Overview** *(was: what)*

> Led refinements to Kissflow's audit log system — adding AI-generated event summaries, extending tracking up to 90 days, and layering in advanced filters (field name, user, object, event category, platform, IP). Added previous/next navigation and column pinning for investigation workflows.

**Approach** *(was: how)*

> Shadowed admins during compliance reviews to identify friction in log scanning. Introduced AI summaries to compress dense event entries, and added navigation + column pinning so context isn't lost while drilling into individual events. Added full-history vs. filtered export to support both spot-checks and formal audits.

**Outcome** *(was: impact)*

> Reduced time spent on security investigations and compliance auditing. Preserved context during log navigation and gave admins flexibility to export exactly what's needed — filtered subsets or complete history.

### Images

- Hero: `/images/work/placeholder-1.svg`
- Inline after Overview: `/images/work/placeholder-2.svg`

---

## Global Search Enhancement

**Feature name (CSV):** Search results page - Enhancement
**Modified feature name (portfolio):** Global Search Enhancement
**Slug:** `global-search`
**Route:** `/work/global-search`
**Documentation:** https://community.kissflow.com/t/60yz57a/upcoming-enhancements-to-global-search

### Metadata

| Field | Value |
|---|---|
| Year | 2024 |
| Type | Enhancement |
| Company | Kissflow |
| Date | Nov 2024 |
| Highlighted | false |

### Home row description

> Recency-first search default showing the last 90 days, with quick filters for broader time ranges.

### Detail page content

**Tagline (below title)**

> Recency-first search default showing the last 90 days, with quick filters for broader time ranges.

**Overview** *(was: what)*

> Enhanced the platform-wide global search to default to the last 90 days of results, with filters for All time, Last 30 days, Last 6 months, and Last year.

**Approach** *(was: how)*

> Analyzed search behavior and saw that most queries target recent content, while older results added noise. Set 90 days as the default to reduce noise, but kept the time-range filter one click away so users can go broader when needed.

**Outcome** *(was: impact)*

> Faster access to relevant, timely information. Reduced noise from older content while maintaining backward compatibility for historical searches.

### Images

- Hero: `/images/work/placeholder-1.svg`
- Inline after Overview: `/images/work/placeholder-2.svg`

---

## Password Policy Configuration

**Feature name (CSV):** Password policy
**Modified feature name (portfolio):** Password Policy Configuration
**Slug:** `password-policy`
**Route:** `/work/password-policy`
**Documentation:** https://community.kissflow.com/t/35y175k/admin-alert-password-policy-configuration-now-available

### Metadata

| Field | Value |
|---|---|
| Year | 2025 |
| Type | Enhancement |
| Company | Kissflow |
| Date | 2025 |
| Highlighted | false |

### Home row description

> Customizable password policies — length, complexity, history restrictions, and expiry timelines.

### Detail page content

**Tagline (below title)**

> Customizable password policies — length, complexity, history restrictions, and expiry timelines.

**Overview** *(was: what)*

> Designed the password policy configuration experience — account admins can now customize minimum length, complexity rules (uppercase/lowercase/numbers/special chars), password history restrictions, and expiry timelines.

**Approach** *(was: how)*

> Balanced organizational flexibility with secure defaults. Gave admins a choice between Kissflow's default policy or custom configuration, with each rule independently configurable. Used sensible defaults and inline validation to prevent over-restrictive policies that would frustrate end users.

**Outcome** *(was: impact)*

> Gave admins control to tailor security policies to their organization's specific requirements. Enhanced account security through customizable password governance while maintaining usability for end users.

### Images

- Hero: `/images/work/placeholder-1.svg`
- Inline after Overview: `/images/work/placeholder-2.svg`

---

## AI Solution Analyzer (Metadata Intelligence)

**Feature name (CSV):** Process Solution analyser - Metadata analyser
**Modified feature name (portfolio):** AI Solution Analyzer (Metadata Intelligence)
**Slug:** `ai-solution-analyzer`
**Route:** `/work/ai-solution-analyzer`
**Documentation:** https://community.kissflow.com/t/q6y1jx0/ai-solution-analyzer

### Metadata

| Field | Value |
|---|---|
| Year | 2025 |
| Type | Major feature |
| Company | Kissflow |
| Date | 2025 |
| Highlighted | true |

### Home row description

> AI-powered pre-deployment validator that catches misconfigurations in process design, forms, and permissions before going live.

### Detail page content

**Tagline (below title)**

> AI-powered pre-deployment validator that catches misconfigurations in process design, forms, and permissions before going live.

**Overview** *(was: what)*

> Designed an AI-powered pre-deployment validator that reviews process design, forms, workflow steps, and permissions to surface misconfigurations before a process goes live. Classifies findings as 'Critical' (compliance/security risks) or 'Suggestions' (best practices).

**Approach** *(was: how)*

> Studied process admin failure modes to understand where production defects most commonly originated. Designed a severity-tiered issue classification (Critical vs. Suggestions) with in-context 'Locate' actions that deep-link to the exact problem element. Added background analysis runs so admins aren't blocked while the analyzer works.

**Outcome** *(was: impact)*

> Prevents compliance violations and security breaches by catching misassignments before live deployment. Reduces human error in permission configurations and offers actionable, in-context recommendations — making it a safety net for complex approval workflows.

### Images

- Hero: `/images/work/placeholder-1.svg`
- Inline after Overview: `/images/work/placeholder-2.svg`
- Inline after Approach: `/images/work/placeholder-3.svg`

---

## Analytics Query Builder (Dataviews)

**Feature name (CSV):** Analytics query builder - Enhancement
**Modified feature name (portfolio):** Analytics Query Builder (Dataviews)
**Slug:** `dataviews`
**Route:** `/work/dataviews`
**Documentation:** https://community.kissflow.com/t/83h9qzn/understanding-dataviews

### Metadata

| Field | Value |
|---|---|
| Year | 2026 |
| Type | Major feature |
| Company | Kissflow |
| Date | 2026 |
| Highlighted | false |

### Home row description

> SQL-based data composition tool letting users join multiple data sources to build unified analytics datasets.

### Detail page content

**Tagline (below title)**

> SQL-based data composition tool letting users join multiple data sources to build unified analytics datasets.

**Overview** *(was: what)*

> Designed Dataviews — a SQL-based data composition tool that lets users join multiple data sources via a visual query editor to build unified analytics datasets. Supports joins, unions, aggregates, and a drag-and-drop schema browser.

**Approach** *(was: how)*

> Partnered with analytics-power users to understand data consolidation pain points. Combined a familiar SQL editor with a visual schema browser for discoverability — SQL-literate users get full power, others can explore tables before writing queries. Added beautification, preview, and CSV/JSON export for a complete workflow.

**Outcome** *(was: impact)*

> Eliminated manual data consolidation workflows and reduced IT dependency for report building. Supports complex analytical scenarios without leaving Kissflow, feeding directly into the reporting layer.

### Images

- Hero: `/images/work/placeholder-1.svg`
- Inline after Overview: `/images/work/placeholder-2.svg`

---

## AI Control Center

**Feature name (CSV):** AI control center
**Modified feature name (portfolio):** AI Control Center
**Slug:** `ai-control-center`
**Route:** `/work/ai-control-center`
**Documentation:** https://community.kissflow.com/t/y4ypvcj/ai-control-center

### Metadata

| Field | Value |
|---|---|
| Year | 2026 |
| Type | Major feature |
| Company | Kissflow |
| Date | 2026 |
| Highlighted | true |

### Home row description

> Governance dashboard for super admins to enable/disable AI features across the entire Kissflow account or per-module.

### Detail page content

**Tagline (below title)**

> Governance dashboard for super admins to enable/disable AI features across the entire Kissflow account or per-module.

**Overview** *(was: what)*

> Designed a governance dashboard for super admins to enable/disable AI features across the entire Kissflow account or per-module (Process, Board, Dataset, Apps, Portals, Integrations, Account). Includes transparency tags showing which features share data with AI models.

**Approach** *(was: how)*

> Aligned with internal AI policy and compliance stakeholders to understand governance requirements. Prioritized a simple on/off paradigm at the account level, backed by granular module-level toggles. Added 'Data shared with AI' indicators for transparency, with a state-preservation pattern so previously configured settings restore on re-enable.

**Outcome** *(was: impact)*

> Centralized AI governance in a single place for super admins. Improved compliance alignment and transparency over which AI features process account data, enabling enterprises to confidently adopt AI within their own policy constraints.

### Images

- Hero: `/images/work/placeholder-1.svg`
- Inline after Overview: `/images/work/placeholder-2.svg`
- Inline after Approach: `/images/work/placeholder-3.svg`
