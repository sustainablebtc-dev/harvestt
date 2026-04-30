---
mode: agent
description: Iterate on existing work — fix, polish, or adjust a delivered feature with minimal diffs.
---

# Refine Prompt

Use this prompt to iterate on already-delivered work. This enforces minimal, focused changes only.

## Inputs

```
What needs changing: {{change_description}}
File(s) affected: {{files}}
Current behavior: {{current_behavior}}
Expected behavior: {{expected_behavior}}
Is this a bug fix or a design/copy change: {{type}}
```

## Rules for This Prompt

1. **Minimal diff only.** Change the smallest correct surface area. Do not refactor surrounding code.
2. **Do not add features** beyond what is explicitly described.
3. **Do not convert working patterns** to different approaches unless the existing one is broken.
4. **Preserve SCSS structure** — edit the SCSS file, not the JSX.
5. **Preserve token usage** — if a value needs changing, update the token reference, not the raw value.

## Execution

### If the change is a bug fix:
1. Identify the root cause in the smallest possible scope.
2. Fix only the defect — do not clean up unrelated code.
3. Confirm the fix does not break adjacent behavior.

### If the change is a UI/styling adjustment:
1. Locate the relevant `.module.scss` file.
2. Update the SCSS — not the JSX `className`.
3. Use design tokens for any new values.
4. Verify the change at mobile and desktop breakpoints.

### If the change is copy or content:
1. Update only the affected text nodes.
2. Update metadata if the copy change affects the page title or description.
3. Do not rewrite surrounding copy.

### If the change is a backend/API adjustment:
1. Update only the affected handler or action.
2. Re-validate inputs if the payload shape changed.
3. Confirm error paths still work.

## Output

After applying the change:

```md
## Refinement Delivery
- Change applied:
- File(s) modified:
- Lines changed (approximate):
- Diff rationale:

## Validation
- Behavior confirmed:
- Adjacent behavior unaffected:
- Risks:
```

## What Not to Do

- Do not add new components unless the fix requires one.
- Do not update unrelated styles because they look like they need cleaning.
- Do not change copy outside the specified scope.
- Do not introduce new dependencies.