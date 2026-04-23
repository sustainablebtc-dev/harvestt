# Styling Instructions

## Scope

Apply to Tailwind utility usage, SCSS globals, reusable UI patterns, and design-system level styling decisions.

## Rules

1. Use Tailwind for most component and layout styling.
2. Use SCSS for globals, shared variables, structural patterns, or cases where utilities alone reduce clarity.
3. Keep visual patterns consistent across routes.
4. Prefer semantic class composition over long, duplicated utility strings.
5. Build mobile-first.

## Tailwind Guidance

- keep utilities readable and grouped by purpose
- extract repeated patterns into components before utility duplication spreads
- avoid arbitrary values unless design intent requires them
- preserve strong focus and hover states without relying on color alone

## SCSS Guidance

- reserve SCSS for globals and cross-cutting primitives
- do not hide component logic in deep selector nesting
- keep globals stable and low-specificity
- use CSS variables for shared design tokens when needed

## UX Quality Bar

- spacing must remain consistent
- text should be readable across breakpoints
- color contrast must support accessibility
- motion should be meaningful and optional for reduced-motion users

## Delivery Checklist

- responsive layout verified
- focus states visible
- no unnecessary style duplication
- SCSS usage remains structural, not ad hoc