# Case Study Generation Process

Reference document for generating portfolio case studies from Kissflow features. Follow these steps in order for every feature.

---

## Step 1: Read existing portfolio content

Read the feature entry from `/Users/afsar/portfolio/docs/features.md` to understand what's already drafted — the current tagline, overview, approach, and outcome. Note what's generic and what needs depth.

## Step 2: Read the product documentation + Explore the codebase (parallel)

Run these two in parallel to save time:

**2a. Product documentation** — Fetch the feature's community documentation link (from features.md) using WebFetch. Extract every detail — who it's for, how it works, step-by-step flows, capabilities, limitations, constraints, and examples. This fills gaps that code alone won't reveal (e.g., plan eligibility, use case examples, connector integrations).

**2b. Codebase exploration** — Launch an Explore agent simultaneously (see Step 3 below for what to look for).

Both feed into Step 4 (screenshots) and Step 5 (questions). Neither depends on the other, so always run them together.

## Step 3: Explore the codebase (runs parallel with Step 2a)

Launch an Explore agent to find all files related to the feature. Search by directory names, file names, feature flags, constants, and content references. Get the full directory tree and file list.

Then read the key files in detail:
- Main component (entry point, states, props)
- Sub-components (modals, panels, lists, cards)
- Constants (severity levels, labels, icons, messages)
- Hooks (state management, API calls, real-time sync)
- Service layer (API endpoints, data models)
- CSS (layout patterns, design token usage)
- Route/navigation integration (where the feature lives, access control)

From the code, extract:
- All UI states (initial, loading, results, empty, error)
- User interactions and flows
- Design system components used
- Feature flags and access control
- Data model and API contracts
- Real-time behavior (RTDB, polling)
- Confirmation dialogs and their messaging
- Toast/notification patterns
- Edge cases and error handling

## Step 4: Capture screenshots using Playwright

Navigate to the feature in the browser. For each feature, capture:
- Entry point / how the user accesses the feature
- Empty/initial state
- Primary active state (the main view with data)
- Key interactions (modals, confirmations, toggles, filters)
- Different states (enabled/disabled, loading, success, error)
- Detail views (expanded items, secondary panels)

Save screenshots to: `screenshots/{feature-slug}/` (inside the project root for Playwright access).
Copy to: `/Users/afsar/portfolio/screenshots/{feature-slug}/` for portfolio use.

Naming convention: `{##}-{description}.png` (e.g., `01-full-page.png`, `04-disable-confirmation-modal.png`).

## Step 5: Ask questions with assumptions

After code + screenshots + documentation, compile questions organized by:
- **Product context** — what triggered the feature, who uses it, what existed before
- **Design context** — key design decisions, alternatives explored, constraints
- **Interaction details** — specific behaviors, edge cases, messaging choices

Under each question, write an assumption based on findings. The user corrects or confirms. This surfaces context that only the designer knows — the "why" behind decisions, rejected alternatives, and constraints that shaped the design.

## Step 6: Write the case study

Use first person voice. Structure:

### Home row description
One sentence, fits in 2 lines on the portfolio homepage. Simple and concrete.

### Tagline (below title)
Can be longer than home row. More specific about what was designed.

### Context
The problem or situation. What existed before, what was broken or missing, why this feature needed to exist. Include real-world examples where available (from documentation or user's input). Mention audience and plan eligibility if relevant.

### What I designed
Concrete scope of what shipped. Name the specific surfaces, states, and capabilities. Distinguish what you designed vs. what already existed (if the feature extends an existing system).

### Key decisions
3-6 specific design decisions with rationale. Each decision is a bold heading followed by 2-4 sentences explaining the choice and its reasoning. These are the core of the case study — they show design thinking, not just output.

### Outcome
Bullet points. Concrete benefits tied back to the problem from Context. No vague claims — name the specific improvement.

### Screenshots
Table mapping screenshot files to descriptions.

## Writing rules

- **First person.** "I designed..." not "Designed..."
- **Past tense, active verbs.** "I designed", "I kept", "I chose"
- **No buzzwords.** No "seamless", "robust", "leverage", "empower", "intuitive"
- **Concrete over vague.** Name modules, roles, field types, specific counts
- **Em dashes sparingly.** 1-2 per section max
- **Varying sentence length.** Mix short punchy sentences with longer ones
- **Single quotes** for in-product labels: 'Critical', 'Locate', 'Data shared with AI'
- **No emoji, no exclamation marks**
- **State decisions as decisions.** "I chose X because Y" not "X was implemented"

## Step 7: Tone and quality check

Before presenting the case study to the user, run a self-review pass.

### Tone check
- [ ] No buzzwords: scan for "seamless", "robust", "leverage", "empower", "intuitive", "powerful", "unlock", "drive", "enhance"
- [ ] First person throughout: no "Designed..." without "I", no passive "was implemented"
- [ ] Em dash count: max 1-2 per section. If more, rewrite with commas or periods
- [ ] Sentence length variation: no more than 3 consecutive sentences of similar length. Mix short (5-10 words) with longer (20-30 words)
- [ ] No hedging language: "helps to potentially", "aims to", "seeks to" — replace with direct statements
- [ ] No AI-tell patterns: "Moreover", "Furthermore", "It's worth noting", "In conclusion" — remove entirely
- [ ] Single quotes around in-product labels: 'Critical', 'Locate', not "Critical", "Locate"

### Content check
- [ ] Context: Would someone outside Kissflow understand the problem?
- [ ] What I designed: Is scope clear — what YOU did vs. what already existed?
- [ ] Key decisions: Does each one answer "why this choice and not the alternative"?
- [ ] Outcomes: Are they tied back to the problem in Context? No vague claims?
- [ ] Home row description: Under 2 lines at portfolio width?
- [ ] Documentation cross-check: Did the product docs reveal anything missing from the case study?
- [ ] Assumptions verified: Did the user confirm or correct all assumptions before writing?

---

## File locations

| Item | Path |
|---|---|
| Feature list (source) | `/Users/afsar/portfolio/docs/features.md` |
| Case studies (output) | `/Users/afsar/portfolio/docs/case-studies.md` |
| Process reference | `/Users/afsar/portfolio/docs/case-study-process.md` |
| Screenshots (working) | `/Users/afsar/Downloads/kf-xg-frontend/screenshots/{feature-slug}/` |
| Screenshots (portfolio) | `/Users/afsar/portfolio/screenshots/{feature-slug}/` |
| Codebase | `/Users/afsar/Downloads/kf-xg-frontend/` |
