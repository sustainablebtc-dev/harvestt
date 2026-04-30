# Harvestt — Copilot Orchestration System

## Stack
'
| Layer | Technology |
|---|---|
| Framework | Next.js (App Router, latest) |
| Language | TypeScript — strict mode |
| Styling | SCSS modules + Tailwind via `@apply` only |
| Design system | `.github/instructions/design-system/` — tokens, components, patterns |
| Data layer | `/data` — single source of truth for all structured content |
| Fonts | Geist (primary) — loaded in `app/layout.tsx` |

## Agent Pipeline

Every feature or fix flows through this sequence. No step may be skipped silently.

```
planner → frontend → backend → content → reviewer
```

## Orchestrator Enforcement

> These rules govern the main Copilot session acting as coordinator.

1. **The orchestrator never writes product code.** Its only job is to read context, dispatch agents via `runSubagent`, and relay results to the user.
2. **Every Figma link, feature request, or bug fix MUST start by dispatching the `planner` agent.** No exceptions.
3. **Git safety check runs before the planner is dispatched** — not inside it. The orchestrator checks branch and working tree state first and stops if conditions are not met.
4. **No agent step may be skipped.** Even for "small" changes, the sequence is: `planner` → specialist(s) → `reviewer`. Skipping any step is a pipeline violation.
5. **Figma designs are not self-implementing.** A Figma URL in a request means: dispatch `planner` with the node context, let `frontend` implement, let `reviewer` audit.
6. **The orchestrator may not partially implement then hand off.** Either it delegates entirely or it does nothing.
7. **All inter-agent communication goes through the orchestrator.** Agents never call, invoke, or read from other agents directly. The orchestrator is the sole channel for task handoffs, outputs, and sequencing decisions.

| Agent | Owns | Does Not Own |
|---|---|---|
| [`planner`](agents/planner.agent.md) | task graph, sequencing, acceptance mapping | product code, copy, approvals |
| [`frontend`](agents/frontend.agent.md) | UI, pages, layouts, components, metadata wiring | server logic, API contracts, copy |
| [`backend`](agents/backend.agent.md) | route handlers, server actions, APIs, forms, validation | UI rendering, copy, approvals |
| [`content`](agents/content.agent.md) | page copy, metadata text, SEO/GEO content, schema inputs | implementation, design decisions |
| [`reviewer`](agents/reviewer.agent.md) | quality audit, PR gate, findings with remediation | rewriting other agents' work |

## Non-Negotiable Rules

1. Start from the issue or brief — not assumptions.
2. Change the smallest correct surface area.
3. Default to server components. Use `use client` only when state, effects, refs, or browser APIs are required.
4. **SCSS only for styling.** Use Tailwind exclusively via `@apply` inside `.scss` files. No inline Tailwind classes in JSX.
5. Use design system tokens exclusively. No arbitrary hex values, hardcoded sizes, or magic numbers in styles.
6. **Data layer first.** All structured and repeatable content lives in `/data`. No hardcoded nav links, footer links, social links, or config values inside components.
7. Keep business logic out of presentation layers.
8. Write deterministic outputs. Avoid vague advice.
9. No agent may silently expand scope.
10. If blocked, name the exact missing dependency, decision, or API contract.
11. Every task names its owner, dependencies, deliverables, and validation method.
12. **Responsiveness is non-negotiable.** Every UI surface must be mobile-first and pass the responsiveness checklist in [`skills/responsiveness/SKILL.md`](skills/responsiveness/SKILL.md) before delivery. A desktop-only implementation is an incomplete implementation.
13. **Accessibility is non-negotiable.** Every UI surface must pass the accessibility checklist in [`skills/accessibility/SKILL.md`](skills/accessibility/SKILL.md). Keyboard navigation, semantic HTML, and focus states are required, not optional.

## Data Layer (Hard Enforcement)

All structured content lives in `/data` — the single source of truth. Components map over data; they never hardcode it.

```
data/
  types.ts              ← TypeScript interfaces for all data shapes
  nav/navbar.json       ← Navigation links, login, CTA
  footer/
    footer-links.json   ← Footer link groups
    social.json         ← Social media links
  site/config.json      ← Site name, tagline, URL, default metadata
  content/faqs.md       ← Structured FAQ content (H2 per question)
```

**Rules:**
- JSON → navigation, footer, social, config, structured UI data
- Markdown → FAQs, long-form content, blog posts
- Every JSON file has a corresponding interface in `data/types.ts`
- JSON files are imported with type assertion — `resolveJsonModule` is enabled
- Markdown files are parsed server-side only — never in client components
- See [`instructions/data-layer.instructions.md`](instructions/data-layer.instructions.md) for full rules

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

- All class names are defined in `.module.scss` files or `globals.scss`.
- All spacing, color, radius, shadow values come from design tokens (`var(--token-name)`).
- Tailwind utility classes are allowed **only** inside `@apply` rules.
- See [`rules/styling.md`](rules/styling.md) for the full rule set.

## Design System (Hard Enforcement)

- Design tokens live in [`instructions/design-system/tokens/`](instructions/design-system/tokens/).
- Component patterns are documented in [`instructions/design-system/components/`](instructions/design-system/components/).
- All new UI must trace to a documented token or request a new one explicitly.
- See [`rules/design-system.md`](rules/design-system.md) for enforcement rules.

## Delegation Protocol

1. [`planner`](agents/planner.agent.md) reads the brief and produces a bounded task graph.
2. [`frontend`](agents/frontend.agent.md) implements UI tasks once planner output exists.
3. [`backend`](agents/backend.agent.md) implements data, forms, and API tasks — can run in parallel with `frontend` after planning.
4. [`content`](agents/content.agent.md) supplies production copy after information architecture is clear.
5. [`reviewer`](agents/reviewer.agent.md) validates assembled output and either approves or returns findings with exact remediation steps.

No specialist agent may re-plan the issue unless the issue is malformed or dependencies are impossible.

## Handoff Format

Every task handoff must include:

- **Context**: brief summary and constraints
- **Scope**: what is in and out
- **Inputs**: files, routes, APIs, designs, content sources
- **Deliverables**: exact files or outputs expected
- **Validation**: checks to run
- **Risks**: open assumptions or missing dependencies

## Output Contracts

### Planner

```md
## Plan Summary
- Objective:
- User impact:
- Non-goals:
- Risks:

## Task List
| Task ID | Summary | Agent | Depends On | Deliverables | Validation |
| --- | --- | --- | --- | --- | --- |

## Execution Order
1. ...

## Open Questions
- ...
```

### Specialist (frontend / backend / content)

```md
## Delivery
- Scope completed:
- Files changed or created:
- Constraints respected:

## Validation
- Checks run:
- Remaining risks:
```

### Reviewer

```md
## Review Decision
Status: approved | changes-requested | blocked

## Findings
| Severity | Area | File | Issue | Required Action |
| --- | --- | --- | --- | --- |

## Verification
- Acceptance criteria coverage:
- Checks performed:
- Residual risk:
```

## File and Naming Conventions

- Route segments: `lowercase-kebab-case`
- React components: `PascalCase.tsx`
- SCSS modules: `ComponentName.module.scss`
- Utility modules: `lowercase-kebab-case.ts`
- Server-only modules stay off the client bundle
- Metadata is route-local — no global duplication

## GitHub Workflow

### Branch Strategy

| Branch | Role |
|---|---|
| `main` | Production — protected |
| `dev` | Staging — integration target |
| `feature/<slug>` | All work — branched from `dev` |

**Never work directly on `main` or `dev`.** All development happens on a `feature/` branch created from an up-to-date `dev`.

### Branch Naming

- `feat/<issue-number>-<slug>`
- `fix/<issue-number>-<slug>`
- `chore/<issue-number>-<slug>`

Slug: lowercase kebab-case, under 40 characters, describes user-visible outcome.

### Pre-Development Safety Check

Before starting any work, confirm:

1. Current branch is a `feature/` branch — not `main` or `dev`
2. Working tree is clean (`git status`)

If uncommitted changes exist — **stop and ask the user**: commit, stash, or discard. Do not proceed without confirmation.

### Commit Prefixes

`feat:` `fix:` `refactor:` `docs:` `chore:`

### Git Action Restrictions

**Never auto-commit. Never auto-push. Never auto-merge.**

Every git action requires explicit user request and confirmation — including within the same session. No implicit permission carries forward.

### PR Requirements

- Issue link
- Scope summary
- Affected routes or APIs
- Screenshots when UI changed
- Risk notes
- **Target branch: `dev`** — never open a PR directly to `main`

See [`rules/repo-hygiene.md`](rules/repo-hygiene.md) for the full Git workflow including branch preparation flow and failure handling.

## Definition of Done

All must be true:

1. Acceptance criteria map to implemented outputs.
2. Files are in the correct route, component, or server boundary.
3. Styling uses SCSS + design system tokens — no inline Tailwind, no arbitrary values.
4. Accessibility, performance, and SEO constraints are addressed.
5. No placeholder copy, empty TODOs, or stub integrations remain unlabeled.
6. Reviewer output is `approved` or has a bounded findings list with remediation steps.

## Escalation

Escalate instead of guessing when:

- API contract is missing
- Issue requirements conflict
- Credentials or secrets are required
- Design token is missing or ambiguous
- Schema or migration impact exists beyond issue scope