# Button Component

> Source: Figma `FRYoDiBSYuje0Nk9fNedRp`  
> Cross-reference: [`tokens/colors.md`](../tokens/colors.md), [`tokens/typography.md`](../tokens/typography.md), [`tokens/spacing.md`](../tokens/spacing.md)

---

## Overview

Three button variants exist in the design system, extracted from repeated use across the page. All buttons use:
- Zero border radius (square corners)
- `Geist Medium 500` at `13px`
- Uppercase text with `tracking-[0.75px]`
- `1px` border on all sides (even transparent borders for layout stability)

---

## Variants

### 1. Primary Button

**Usage:** Main call-to-action — "Speak With Our Team", "View All Research"  
**Figma nodes:** `5:1101`, `5:1140`, `15:2004`

```html
<button class="
  inline-flex items-center justify-center
  px-[33px] py-[17px]
  bg-brand border border-brand
  font-geist font-medium text-[13px] text-white
  tracking-[0.75px] uppercase leading-[1.4]
  whitespace-nowrap
  rounded-none
  transition-opacity duration-150
  hover:opacity-90
">
  SPEAK WITH OUR TEAM
</button>
```

**Tokens used:**
| Property | Token | Value |
|---|---|---|
| Background | `bg-brand` | `#1b1b1b` |
| Border | `border-brand` | `#1b1b1b` |
| Text | `text-white` | `#ffffff` |
| Padding X | button-specific | `33px` |
| Padding Y | button-specific | `17px` |
| Font size | `label-lg` | `13px` |
| Tracking | label-lg | `0.75px` |

---

### 2. Secondary Button (Outlined)

**Usage:** Secondary CTA alongside primary — "Explore Insights", "Send an Email"  
**Figma nodes:** `5:1142`, `15:2006`

```html
<button class="
  inline-flex items-center justify-center gap-[10px]
  px-[33px] py-[17px]
  bg-white border border-border-default
  font-geist font-medium text-[13px] text-brand
  tracking-[0.75px] uppercase leading-[1.4]
  whitespace-nowrap
  rounded-none
  transition-colors duration-150
  hover:border-brand
">
  EXPLORE INSIGHTS
  <img src="..." alt="" class="size-[14px]" aria-hidden="true" />
</button>
```

**Tokens used:**
| Property | Token | Value |
|---|---|---|
| Background | `bg-white` | `#ffffff` |
| Border | `border-border-default` | `#e5e5e5` |
| Text | `text-brand` | `#1b1b1b` |
| Icon | Arrow Right SVG | `14×14px` |
| Hover border | `border-brand` | `#1b1b1b` |

---

### 3. Ghost / Underline Button

**Usage:** Inline CTAs within content — "View All Research", "Read More"  
**Figma nodes:** `5:1182`, `5:1281`

Two sub-types observed:

#### Ghost Large (section-level CTA)
```html
<button class="
  inline-flex items-center gap-[10px]
  pb-[9px] pt-[8px]
  bg-white border-b border-brand
  font-geist font-medium text-[13px] text-brand
  tracking-[0.75px] uppercase leading-[1.4]
  whitespace-nowrap
  rounded-none
">
  VIEW ALL RESEARCH
  <img src="..." alt="" class="size-[14px]" aria-hidden="true" />
</button>
```

#### Ghost Small (card-level inline)
```html
<button class="
  inline-flex items-center gap-[10px]
  pb-[3px] pt-[2px]
  border-b border-brand
  font-geist font-medium text-[12px] text-brand
  tracking-[0.75px] uppercase leading-[1.4]
  whitespace-nowrap
  rounded-none
">
  READ MORE
  <img src="..." alt="" class="size-[14px]" aria-hidden="true" />
</button>
```

**Difference:** Ghost Large uses `13px`, Ghost Small uses `12px`. Both share the same underline-border treatment.

---

## Nav CTA Button

A compact variant used only in the navigation bar:

```html
<button class="
  inline-flex items-center justify-center
  px-[25px] py-[9px]
  bg-brand border border-brand
  font-geist font-medium text-[13px] text-white
  tracking-[0.75px] uppercase leading-[1.4]
  whitespace-nowrap
  rounded-none
">
  SPEAK WITH OUR TEAM
</button>
```

> **Note:** Nav CTA uses compact `py-[9px]` (vs hero `py-[17px]`) to match nav bar density. Height is set by explicit padding — not `self-stretch`. Do not add `self-stretch` to this button.

---

## Sizes

| Size | Padding | Font | Usage |
|---|---|---|---|
| `lg` (hero/section) | `px-[33px] py-[17px]` | `13px` | Primary and secondary CTAs |
| `sm` (nav) | `px-[25px] py-[9px]` | `13px` | Navigation bar CTA only |
| `xs` (ghost-small) | `pb-[3px] pt-[2px]` | `12px` | Inline card CTAs |

---

## States

| State | Primary | Secondary | Ghost |
|---|---|---|---|
| Default | `bg-brand text-white` | `bg-white border-border-default` | `border-b border-brand` |
| Hover | `opacity-90` | `border-brand` | `opacity-70` |
| Active | `opacity-80` | `bg-bg-muted` | `opacity-60` |
| Disabled | `opacity-40 cursor-not-allowed` | `opacity-40 cursor-not-allowed` | `opacity-40 cursor-not-allowed` |
| Focus visible | `outline-2 outline-offset-2 outline-brand` | same | same |

---

## Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| Mobile | Buttons can be `w-full` in hero/CTA sections |
| `lg`+ | Auto-width, fixed padding |

```html
<!-- Full-width on mobile, auto on desktop -->
<button class="w-full lg:w-auto px-[33px] py-[17px] ...">
```

---

## Accessibility

- All buttons must have accessible text (not icon-only without `aria-label`)
- Icon-only buttons: `aria-label="..."` required
- Focus ring: `focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand`
- Disabled: `aria-disabled="true"` + `disabled` attribute
- Do not use `<div>` or `<a>` for action buttons — use `<button>` or `<a href>` appropriately
