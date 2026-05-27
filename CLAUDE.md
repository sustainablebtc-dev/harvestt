# Claude Code Agent Instructions

This is the agentic architecture for the Sustainable Bitcoin Protocol project. All work flows through a structured pipeline with clear role separation and responsibilities.

## Agent Pipeline

Every feature or fix flows through this sequence. No step may be skipped:

```
planner → frontend → backend → content → reviewer
```

- **Planner:** Decomposes requests into bounded tasks with dependencies, validation, and acceptance criteria
- **Frontend:** Implements UI/UX using SCSS + design tokens, responsive mobile-first design, accessibility
- **Backend:** Implements server logic, APIs, routes, and data fetching
- **Content:** Writes production copy, metadata, SEO content
- **Reviewer:** Quality audit, PR gate, findings with remediation steps

## Claude Code Role: Orchestrator

I am the orchestrator coordinator, not a specialist agent. My job:

1. **Read context** — brief, issue, Figma link, or code request
2. **Dispatch agents** — route work through the pipeline via skilled agents or implement directly
3. **Relay results** — summarize output, confirm with user before proceeding
4. **Never write product code directly** unless explicitly isolated testing. The pipeline handles implementation.

## Non-Negotiable Rules

All of these apply to any code I write or any agents I dispatch:

1. **Start from the issue, not assumptions.**
2. **Change the smallest correct surface area.**
3. **Default to server components.** Use `use client` only when state, effects, refs, or browser APIs are required.
4. **SCSS only for styling.** Use Tailwind exclusively via `@apply` inside `.scss` files. No inline Tailwind classes in JSX.
5. **Use design system tokens exclusively.** No arbitrary hex values, hardcoded sizes, or magic numbers in styles.
6. **Data layer first.** All structured content lives in `/data`. No hardcoded nav links, config values, or repeatable content inside components.
7. **Keep business logic out of presentation layers.**
8. **Write deterministic outputs.** Avoid vague advice.
9. **No silent scope expansion.** Flag out-of-scope work.
10. **If blocked, name the exact missing dependency, decision, or API contract.**
11. **Every task names its owner, dependencies, deliverables, and validation method.**
12. **Responsiveness is non-negotiable.** Mobile-first, responsive across all breakpoints.
13. **Accessibility is non-negotiable.** Keyboard navigation, semantic HTML, focus states are required.

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js (App Router, latest) |
| Language | TypeScript — strict mode |
| Styling | SCSS modules + Tailwind via `@apply` only |
| Design system | `.github/instructions/design-system/` — tokens, components, patterns |
| Data layer | `/data` — single source of truth for all structured content |
| Fonts | Geist (primary) — loaded in `app/layout.tsx` |

## Data Layer (Hard Enforcement)

All structured content lives in `/data` — the single source of truth.

```
data/
  types.ts              ← TypeScript interfaces for all data shapes
  nav/navbar.json       ← Navigation links
  footer/
    footer-links.json   ← Footer link groups
    social.json         ← Social media links
  site/config.json      ← Site name, tagline, URL, metadata
  partners/
    ecosystem.json      ← Partner ecosystem data
    how-we-create-value.json
    partner-pathways.json
```

**Rules:**
- JSON → navigation, footer, social, config, structured UI data
- Markdown → FAQs, long-form content, blog posts
- Every JSON file has a corresponding interface in `data/types.ts`
- Components map over data; they never hardcode it
- See `.github/instructions/data-layer.instructions.md` for full rules

## Styling Rules (Hard Enforcement)

```scss
// ✅ Correct — Tailwind via @apply inside SCSS
.hero {
  @apply flex flex-col items-center;
  padding: var(--space-24);
}

// ❌ Wrong — inline Tailwind in JSX
<div className="flex flex-col items-center p-24">
```

- All class names defined in `.module.scss` files or `globals.scss`
- All spacing, color, radius, shadow values come from design tokens (`var(--token-name)`)
- Tailwind utility classes allowed **only** inside `@apply` rules
- See `.github/rules/styling.md` for full rule set

## File and Naming Conventions

- Route segments: `lowercase-kebab-case`
- React components: `PascalCase.tsx`
- SCSS modules: `ComponentName.module.scss`
- Utility modules: `lowercase-kebab-case.ts`
- Server-only modules stay off the client bundle
- Metadata is route-local — no global duplication

## Git Workflow

### Branch Strategy

| Branch | Role |
|---|---|
| `main` | Production — protected |
| `dev` | Staging — integration target |
| `feature/<slug>` | All work — branched from `dev` |

**Never work directly on `main` or `dev`.** All development happens on a `feature/` branch.

### Pre-Work Safety Check

Before starting any work:

1. Current branch is a `feature/` branch (not `main` or `dev`)
2. Working tree is clean (`git status`)

If uncommitted changes exist — **stop and ask the user**: commit, stash, or discard. Do not proceed without confirmation.

### Commit Prefixes

- `feat:` — new feature
- `fix:` — bug fix
- `refactor:` — code refactoring
- `docs:` — documentation
- `chore:` — build, deps, tooling
- `content:` — copy/content updates

### Git Action Restrictions

**Never auto-commit. Never auto-push. Never auto-merge.**

Every git action requires explicit user request and confirmation — including within the same session. No implicit permission carries forward.

### PR Requirements

- Issue link
- Scope summary
- Affected routes or APIs
- Screenshots when UI changed
- Risk notes
- **Target branch: `dev`** — never directly to `main`

## Definition of Done

All of these must be true before work is considered complete:

1. Acceptance criteria map to implemented outputs
2. Files are in the correct route, component, or server boundary
3. Styling uses SCSS + design system tokens — no inline Tailwind, no arbitrary values
4. Accessibility, performance, and SEO constraints are addressed
5. No placeholder copy, empty TODOs, or stub integrations remain unlabeled
6. Tests pass (if applicable)
7. TypeScript compilation passes

## When to Escalate

Escalate instead of guessing when:

- API contract is missing
- Issue requirements conflict
- Credentials or secrets are required
- Design token is missing or ambiguous
- Schema or migration impact exists beyond issue scope

## Reference

- **Copilot Instructions:** `.github/copilot-instructions.md`
- **Agent Definitions:** `.github/agents/` (planner, frontend, backend, content, reviewer)
- **Design System:** `.github/instructions/design-system/`
- **Rules:** `.github/rules/` (styling, design-system, repo-hygiene)
- **Skills:** `.github/skills/` (accessibility, responsiveness, performance, SEO)
