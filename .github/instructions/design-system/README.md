# Sustainable Bitcoin Protocol Design System

> Production-grade design language extracted from Figma: `FRYoDiBSYuje0Nk9fNedRp`  
> Node reference: `5:1089` — Home Page (Full)  
> Generated: 2026-04-30

---

## Overview

The Sustainable Bitcoin Protocol design system is an **institutional-grade, engineering-first design language** built for a financial infrastructure product targeting sovereign wealth funds, asset managers, and regulated capital allocators. Every decision prioritises trust, legibility, and systemic precision over decorative styling.

---

## File Structure

```
design-system/
├── README.md               ← This file
├── principles.md           ← Visual philosophy & design decisions
├── tokens/
│   ├── colors.md           ← Full color system (HEX, HSL, CSS vars, Tailwind)
│   ├── typography.md       ← Type scale, weights, line heights, tracking
│   ├── spacing.md          ← 8pt spacing system
│   ├── shadows.md          ← Shadow tokens
│   └── radius.md           ← Border radius tokens
├── layout/
│   ├── grid.md             ← Container, columns, gutters
│   ├── breakpoints.md      ← Screen breakpoints
│   └── responsive.md       ← Responsive behavior rules
├── components/
│   ├── button.md           ← Button variants, sizes, states
│   ├── input.md            ← Form input states
│   ├── card.md             ← Card layouts
│   ├── navbar.md           ← Navigation bar
│   └── hero.md             ← Hero section
├── patterns/
│   ├── sections.md         ← Page section patterns
│   └── marketing.md        ← Marketing/conversion patterns
├── tailwind/
│   ├── tailwind.config.ts  ← Full Tailwind v4 config
│   └── presets.md          ← Token→class mapping reference
└── tokens.json             ← Single source of truth (machine-readable)
```

---

## Quick Reference

| Token Category | Key Values |
|---|---|
| Brand color | `#1b1b1b` |
| Accent | `#ff6e00` |
| Success | `#289e4b` |
| Font family | Geist (all text); Inter (italic only) |
| Base unit | 8px |
| Container max-width | 1440px |
| Content width | 1280px |
| Horizontal gutter | 80px |
| Border radius | 0 (none) |

---

## Cross-References

- All token values are defined canonically in [`tokens.json`](./tokens.json)
- Tailwind config maps directly to token values — do not override in component files
- Typography scale is defined in [`tokens/typography.md`](./tokens/typography.md) and mirrored in `tailwind.config.ts`
- All component Tailwind classes use only tokens from this system

---

## Resolved Inconsistencies

All inconsistencies found during Figma extraction have been resolved in this design system. The table below documents each one for historical reference.

| ID | Surface | Original Issue | Resolution |
|---|---|---|---|
| INC-01 | CTA section | Secondary button used `font-['Inter:Medium']` | Standardised to Geist Medium. Inter is italic-only. |
| INC-02 | Footer | Column headings used `font-['Inter:Semi_Bold']` | Standardised to Geist SemiBold. |
| INC-03 | Type scale | Gap between 64px H1 and 36px section headings | Formalised `display-2` at 48px. |
| INC-04 | Stats bar | `#fff6f0` warm tint had no named token | Promoted to named `bg-warm` token. |
| INC-05 | Nav CTA button | Used `self-stretch` height instead of fixed padding | Fixed to explicit `px-[25px] py-[9px]`. |
| INC-06 | Two-column layout | Gap of 131px was off the 8pt grid | Normalised to 128px (`gap-32`). |
| INC-05 | Buttons | Nav CTA button height inherits parent stretch; hero CTA button has fixed `px-33 py-17` — inconsistency | Fix nav CTA to use fixed sizing |

---

## Usage Policy

- All product UI must derive token values from `tokens.json`
- New tokens require a PR to this system before use in product code
- Component Tailwind classes must not contain arbitrary values that are not in `tokens.json`
