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
