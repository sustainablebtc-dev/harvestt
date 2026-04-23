# Testing Instructions

## Scope

Apply to feature validation, route behavior, form handling, integrations, and PR-quality review.

## Rules

1. Test the highest-risk behavior, not just trivial branches.
2. Match tests to the surface changed: UI, route handler, server action, or integration adapter.
3. Prefer deterministic assertions over snapshot-heavy coverage.
4. If automated tests are unavailable, specify manual checks precisely.

## What To Validate

- acceptance criteria coverage
- happy path behavior
- expected failure states
- accessibility-sensitive interactions
- metadata or SEO behavior when routes are involved
- security-sensitive validation on public inputs

## UI Validation Guidance

- test keyboard interaction for forms and menus
- verify mobile and desktop layout behavior
- verify loading, empty, and error states when applicable

## Integration Validation Guidance

- validate payload shaping
- validate server-side schema failures
- validate upstream timeout or non-200 mapping
- verify secrets are not referenced from client code

## QA Output Guidance

- cite exact failure surface
- separate blocker findings from suggestions
- record residual risks explicitly

## Delivery Checklist

- tests or manual checks listed
- edge cases called out
- issue acceptance criteria re-checked