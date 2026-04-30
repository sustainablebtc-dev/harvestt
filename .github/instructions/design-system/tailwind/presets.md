# Tailwind Presets Reference

> Cross-reference: [`tailwind.config.ts`](./tailwind.config.ts), [`tokens.json`](../tokens.json)

---

## Token → Tailwind Class Mapping

This file is the canonical reference for which Tailwind utility class maps to which design token.

---

## Colors

| Design Token | CSS Variable | Tailwind Class |
|---|---|---|
| Brand | `--color-brand` | `bg-brand`, `text-brand`, `border-brand` |
| Accent | `--color-accent` | `bg-accent`, `border-accent` |
| Success | `--color-success` | `text-success` |
| Success BG | `--color-success-bg` | `bg-success-bg` |
| Text Primary | — | `text-text-primary` |
| Text Dark | — | `text-text-dark` |
| Text Body | — | `text-text-body` |
| Text Secondary | — | `text-text-secondary` |
| Text Muted | — | `text-text-muted` |
| BG White | — | `bg-bg-white` or `bg-white` |
| BG Muted | — | `bg-bg-muted` |
| BG Warm | — | `bg-bg-warm` |
| BG Dark | — | `bg-bg-dark` or `bg-brand` |
| Border Default | — | `border-border-default` |
| Border Brand | — | `border-border-brand` |
| Border Accent | — | `border-border-accent` |

---

## Typography

| Design Token | Tailwind Class |
|---|---|
| `display-1` (64px Bold) | `text-display-1 font-bold` |
| `display-2` (48px Bold) | `text-display-2 font-bold` |
| `heading-2` (36px Bold) | `text-heading-2 font-bold` |
| `heading-3` (24px Bold) | `text-heading-3 font-bold` |
| `heading-4` (20px SemiBold) | `text-heading-4 font-semibold` |
| `heading-5` (14px SemiBold) | `text-heading-5 font-semibold` |
| `body-lg` (16px Regular) | `text-body-lg font-normal` |
| `body-sm` (14px Regular) | `text-body-sm font-normal` |
| `body-xs` (12px Regular) | `text-body-xs font-normal` |
| `label-lg` (13px Medium) | `text-label-lg font-medium uppercase` |
| `label-md` (11px Medium) | `text-label-md font-medium uppercase` |
| `label-sm` (10px SemiBold) | `text-label-sm font-semibold uppercase` |
| `label-xs` (10px Regular) | `text-label-xs font-normal uppercase` |
| `tag` (11px Medium) | `text-tag font-medium` |

---

## Spacing

| Token | Value | Tailwind |
|---|---|---|
| Section py | 96px | `py-24` |
| Section px | 80px | `px-20` |
| Card gap | 48px | `gap-12` |
| Section heading gap | 32px | `gap-8` |
| Component gap | 24px | `gap-6` |
| Element gap | 16px | `gap-4` |
| Micro gap | 8px | `gap-2` |
| Accent divider width | 48px | `w-12` |
| Accent divider height | 1px | `h-px` |

---

## Shadows

| Token | Tailwind |
|---|---|
| Nav separator | `shadow-nav` |
| None | `shadow-none` |

---

## Border Radius

| Token | Tailwind |
|---|---|
| None (all) | `rounded-none` |

---

## Screens (Breakpoints)

| Token | Tailwind prefix |
|---|---|
| 640px | `sm:` |
| 768px | `md:` |
| 1024px | `lg:` |
| 1280px | `xl:` |
| 1440px | `2xl:` |

---

## Quick Composition Examples

### Section Label
```html
<p class="text-label-md font-medium text-text-muted uppercase tracking-[1.25px] leading-[1.4]">
```

### Section Heading
```html
<h2 class="text-heading-2 font-bold text-black leading-[1.2]">
```

### Accent Divider
```html
<div class="h-px w-12 bg-accent" aria-hidden="true">
```

### Primary Button
```html
<button class="inline-flex items-center justify-center px-[33px] py-[17px] bg-brand border border-brand text-label-lg font-medium text-white uppercase tracking-[0.75px] rounded-none">
```

### Tag Chip
```html
<span class="inline-flex items-center justify-center px-2 py-1 bg-bg-muted text-tag font-medium text-text-secondary tracking-[0.5px] rounded-none">
```
