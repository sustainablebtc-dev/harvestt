# Design System Rules

Applies to: all UI code in this repository.

## Source of Truth

All design decisions derive from Figma `FRYoDiBSYuje0Nk9fNedRp`. Tokens are documented in:

- `.github/instructions/design-system/tokens/colors.md`
- `.github/instructions/design-system/tokens/typography.md`
- `.github/instructions/design-system/tokens/spacing.md`
- `.github/instructions/design-system/tokens/radius.md`
- `.github/instructions/design-system/tokens/shadows.md`

Component patterns are documented in `.github/instructions/design-system/components/`.

## Color Rules

- Use only documented color tokens — no arbitrary hex values
- Brand primary: `var(--color-brand)` → `#1b1b1b`
- Accent (dividers only): `var(--color-accent)` → `#ff6e00`
- Never use accent on backgrounds, text, or interactive states

```scss
// ✅ Correct
color: var(--color-text-primary);
background: var(--color-bg-muted);

// ❌ Wrong
color: #1b1b1b;
background: #f5f5f5;
```

## Typography Rules

- Single typeface: Geist for all UI, headings, buttons, and body
- Inter permitted **only** for italic passages — never for headings or buttons
- Use documented type tokens: `display-1`, `heading-2`, `body-lg`, etc.

```scss
// ✅ Correct
font-size: var(--text-display-1);    // 64px
font-weight: var(--font-bold);       // 700
line-height: var(--leading-tight);   // 1.2

// ❌ Wrong
font-size: 64px;
font-weight: 700;
```

## Spacing Rules

- 8px base grid — all spacing multiples of 4px
- Use spacing tokens: `var(--space-4)`, `var(--space-6)`, `var(--space-24)`, etc.
- Non-standard values (`33px`, `17px`) exist only in the button component token

## Border Rules

- Default borders: `1px solid var(--color-border-default)` → `#e5e5e5`
- Brand borders: `var(--color-border-brand)` → `#1b1b1b`
- Accent border: top-border only, CTA section — `var(--color-border-accent)` → `#ff6e00`
- No decorative borders — every border must carry semantic meaning

## Shadow Rules

- Single shadow in the system: `drop-shadow(0px 1px 0px #a3a3a3)`
- Expressed as `var(--shadow-default)` — never hardcoded inline

## Component Patterns

Before building a new component, check:

1. Does a documented pattern exist in `.github/instructions/design-system/components/`?
2. If yes — follow it exactly. No creative reinterpretation.
3. If no — document the new pattern before implementing it.

## Requesting a New Token

If a design requires a value not in the token system:

1. Do not use an arbitrary value.
2. Flag it explicitly: `// TOKEN NEEDED: describe what this represents`
3. Request the token addition in the PR description.

## Violations

The reviewer agent will flag as `high` severity:

- Any hardcoded hex color in SCSS or TSX
- Any pixel value not from the spacing scale
- Any font-size or font-weight not from the type scale
- Any shadow not using `var(--shadow-default)`
- Any component that deviates from a documented pattern without explanation