---
mode: agent
description: Generate a new feature end-to-end using the planner → frontend → backend → content → reviewer pipeline.
---

# Feature Generation Prompt

Use this prompt to build a new feature from scratch. Fill in all inputs before running.

## Inputs

```
Feature name: {{name}}
Description: {{description}}
User goal: {{user_goal}}
Route(s) affected: {{routes}}
UI sections required: {{ui_sections}}
Backend/API requirements: {{backend}}
Content requirements: {{content}}
Design reference (Figma link or description): {{design_ref}}
Acceptance criteria:
  - {{criterion_1}}
  - {{criterion_2}}
```

## Execution Pipeline

Run agents in this order:

### 1. Planner
Decompose the feature into a bounded task list. Assign each task to `frontend`, `backend`, or `content`. Output the full plan table with dependencies and validation methods.

### 2. Frontend
Implement UI using App Router, SCSS modules, and design tokens only. No inline Tailwind in JSX. Reference design tokens from `.github/instructions/design-system/tokens/`. Match component patterns from `.github/instructions/design-system/components/`.

### 3. Backend
Implement route handlers or server actions as needed. Validate all inputs. Keep secrets server-side. Document failure modes.

### 4. Content
Write production copy for all sections. No placeholders. Provide route-specific metadata (title + description). Include FAQ blocks when useful.

### 5. Reviewer
Audit against:
- Acceptance criteria
- SCSS-only styling (no inline Tailwind)
- Design token usage (no arbitrary values)
- Accessibility (keyboard, focus, semantics)
- Responsiveness (mobile + desktop)
- SEO (unique metadata, H1, crawlability)
- Security (validated inputs, no exposed secrets)

Return `approved` or `changes-requested` with a findings table.

## Hard Constraints

- SCSS only — all styles in `.module.scss` or `globals.scss`
- Tailwind via `@apply` inside SCSS only
- All values use `var(--token-name)` from design system
- Server components by default — `use client` only when required
- Metadata is route-local — no global duplication