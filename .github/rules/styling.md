# Styling Rules

Applies to: all `.tsx`, `.scss` files in this repository.

## The Single Rule

**All styles live in SCSS. All Tailwind goes inside `@apply`. No exceptions.**

## What This Means

```scss
// ✅ Correct
.button {
  @apply inline-flex items-center justify-center font-semibold;
  padding: var(--space-button-y) var(--space-button-x);
  background: var(--color-bg-dark);
  color: var(--color-text-inverse);
  border: 1px solid var(--color-border-brand);
}

// ❌ Wrong — Tailwind in JSX
<button className="inline-flex items-center justify-center font-semibold px-8 py-4 bg-[#1b1b1b]">

// ❌ Wrong — arbitrary value in SCSS
.button {
  padding: 17px 33px;          // use var(--space-button-y) var(--space-button-x)
  background: #1b1b1b;         // use var(--color-bg-dark)
}
```

## File Structure

- Component styles: `ComponentName.module.scss` colocated with the component
- Global styles: `app/globals.scss`
- No inline `style={{}}` props unless driven by dynamic runtime values

## Token Usage

All values must come from CSS custom properties defined in `app/globals.scss`:

```scss
// Spacing
padding: var(--space-4);        // 16px
gap: var(--space-6);            // 24px

// Colors
color: var(--color-text-primary);
background: var(--color-bg-muted);
border-color: var(--color-border-default);

// Typography
font-size: var(--text-body-lg);
font-weight: var(--font-semibold);
```

## Tailwind Usage

Tailwind is allowed for layout, flex/grid utilities, and responsive modifiers — but only inside `@apply`:

```scss
.grid {
  @apply grid grid-cols-1 md:grid-cols-3 gap-8;
}
```

Do not use Tailwind for colors, spacing, or typography — those must use design tokens.

## Violations

The reviewer agent will flag as `high` severity:

- Any Tailwind class found directly in JSX/TSX `className`
- Any hardcoded hex color, pixel value, or magic number in SCSS
- Any `style={{}}` prop that duplicates a design token value

## Rationale

SCSS + tokens ensures the design system is the single source of truth. Inline Tailwind bypasses the system and creates inconsistency that scales poorly.