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
