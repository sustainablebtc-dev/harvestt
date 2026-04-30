# Repository Hygiene Rules

## File Placement

| Type | Location |
|---|---|
| App Router routes | `app/**/page.tsx` |
| Layouts | `app/**/layout.tsx` |
| Reusable components | `components/` |
| Route-specific components | colocated under `app/**/` only if not reusable |
| SCSS modules | `ComponentName.module.scss` alongside the component |
| Global styles | `app/globals.scss` |
| Server actions | `lib/actions/` or colocated in the route |
| API integrations | `lib/integrations/` |
| Utility functions | `lib/utils/` |

## Naming Conventions

- Route segments: `lowercase-kebab-case`
- React components: `PascalCase.tsx`
- SCSS modules: `ComponentName.module.scss`
- Utility modules: `lowercase-kebab-case.ts`
- Server actions: `lowercase-kebab-case.ts` in `lib/actions/`

## What Not to Commit

- Unused files — remove before PR
- Duplicate components — consolidate before PR
- Placeholder copy or lorem ipsum — flag as blocked or complete
- Empty TODOs — resolve or convert to GitHub issues
- Debug logs (`console.log`, unused `console.error`) in production code
- Commented-out code — delete it

---

## Git Workflow (Non-Negotiable)

### Branch Strategy

| Branch | Purpose |
|---|---|
| `main` | Production — protected, never worked on directly |
| `dev` | Staging — integration target, never worked on directly |
| `feature/<slug>` | All development work, branched from `dev` |

Feature branches use the naming scheme: `feat/<issue-number>-<slug>`, `fix/<issue-number>-<slug>`, `chore/<issue-number>-<slug>`

Slug: lowercase kebab-case, under 40 characters, describes the user-visible outcome.

### Pre-Development Safety Check (Mandatory)

Before starting any task, verify:

```bash
git branch          # confirm current branch
git status          # confirm clean working tree
```

**If uncommitted changes exist — stop and ask the user:**

- Commit the changes?
- Stash them?
- Discard them?

Do not proceed until the working tree is clean and the intent is confirmed.

### Branch Preparation Flow

```bash
# 1. Ensure working tree is clean (see above)
# 2. Switch to dev and pull latest
git checkout dev
git pull origin dev

# 3. Create feature branch from dev
git checkout -b feature/<slug>
```

Never branch from `main` directly. Never start work on a stale `dev` branch without pulling first.

### Commit Rules

- One logical change per commit — no mega-commits
- Prefix: `feat:` `fix:` `refactor:` `docs:` `chore:`
- Message body: what changed and why, not how

### Merge Restrictions

**Never auto-commit. Never auto-push. Never auto-merge.**

Git actions (commit, push, merge, rebase) are performed **only when explicitly requested by the user** and confirmed each time — even within the same session. Prior permission in a session does not carry forward.

### Failure Handling

Stop immediately and inform the user if any of these conditions exist:

| Condition | Action |
|---|---|
| On `main` or `dev` directly | Stop — do not proceed. Ask user to create a feature branch. |
| Uncommitted changes on wrong branch | Stop — present options: commit, stash, discard. |
| `dev` branch is behind `origin/dev` | Stop — instruct user to pull latest before branching. |
| Feature branch diverged unexpectedly | Stop — surface the divergence. Ask user to resolve. |

### PR Rules

- Link the issue
- Scope summary
- Affected routes or APIs listed
- Screenshots when UI changed
- No TODOs left open without a linked issue
- Target branch is `dev`, not `main`
- `dev` → `main` merges are a separate deployment decision made by the team

---

## Dependency Hygiene

- Do not add a package without justification in the PR
- Check bundle impact before adding a client-side library
- Prefer native browser APIs and Next.js built-ins over third-party packages when practical