# Responsive Design System

> Cross-reference: [`layout/breakpoints.md`](./breakpoints.md), [`layout/grid.md`](./grid.md), [`components/`](../components/)

---

## System Philosophy

**Mobile-first progression.** Base styles are written for mobile. Each breakpoint layer adds layout complexity, spacing expansion, and type scaling as space permits.

The Figma design represents the **desktop target** (1440px). Every rule below describes how that target degrades gracefully to mobile.

---

## Responsive Typography

All heading sizes scale down at smaller viewports. Body and label sizes are fixed.

| Token | Default (mobile) | `md` (768px) | `lg` (1024px) | `2xl` (1440px) |
|---|---|---|---|---|
| `display-1` | `text-[36px]` | `text-[48px]` | `text-[56px]` | `text-[64px]` |
| `display-2` | `text-[28px]` | `text-[36px]` | `text-[44px]` | `text-[48px]` |
| `heading-2` | `text-[22px]` | `text-[28px]` | `text-[32px]` | `text-[36px]` |
| `heading-3` | `text-[18px]` | `text-[20px]` | `text-[24px]` | `text-[24px]` |
| `heading-4` | `text-[18px]` | `text-[20px]` | `text-[20px]` | `text-[20px]` |
| `body-lg` | `text-[16px]` | `text-[16px]` | `text-[16px]` | `text-[16px]` |
| `label-md` | `text-[11px]` | `text-[11px]` | `text-[11px]` | `text-[11px]` |

Tailwind implementation pattern:
```html
<h1 class="text-[36px] md:text-[48px] lg:text-[56px] 2xl:text-[64px] font-bold leading-tight tracking-tight">
```

---

## Responsive Spacing

Section padding scales from compact (mobile) to generous (desktop):

| Context | Mobile | `md` | `lg` | `2xl` |
|---|---|---|---|---|
| Section vertical padding | `py-12` (48px) | `py-16` (64px) | `py-20` (80px) | `py-24` (96px) |
| Horizontal gutter | `px-5` (20px) | `px-10` (40px) | `px-20` (80px) | `px-20` (80px) |
| Card gap | `gap-6` (24px) | `gap-8` (32px) | `gap-12` (48px) | `gap-12` (48px) |
| Section title gap | `gap-4` (16px) | `gap-6` (24px) | `gap-8` (32px) | `gap-8` (32px) |

---

## Layout Behavior by Section

### Navigation

| Breakpoint | Behavior |
|---|---|
| Mobile → `md` | Collapsed — hamburger toggle, slide-in menu |
| `lg`+ | Full horizontal bar: logo + nav links + CTA button |

```html
<nav class="flex items-center justify-between px-5 lg:px-20 py-4">
  <Logo />
  <NavLinks class="hidden lg:flex gap-8" />
  <HamburgerMenu class="flex lg:hidden" />
  <CTAButton class="hidden lg:flex" />
</nav>
```

### Hero Section

| Breakpoint | Behavior |
|---|---|
| Mobile | Single column, text stacked above image |
| `md` | Text fills full width, image becomes background |
| `lg`+ | Side-by-side: text left (573px), image right (630px) |

```html
<section class="relative">
  <div class="lg:absolute lg:right-0 lg:top-0 lg:w-[630px] lg:h-[831px]">
    <img class="object-cover w-full h-full" />
  </div>
  <div class="relative z-10 px-5 lg:px-20 py-16 lg:py-0 lg:pt-[265px] max-w-[573px]">
    <!-- Hero content -->
  </div>
</section>
```

### Stats Strip

| Breakpoint | Behavior |
|---|---|
| Mobile | 2×2 grid |
| `lg`+ | Single horizontal row, `justify-between` |

```html
<div class="grid grid-cols-2 lg:flex lg:justify-between gap-8 px-5 lg:px-20 py-8 bg-bg-warm">
```

### Market Insights (3-col cards)

| Breakpoint | Behavior |
|---|---|
| Mobile | Single column, stacked |
| `md` | 2 columns |
| `lg`+ | 3 equal columns with 1px dividers |

```html
<div class="flex flex-col md:grid md:grid-cols-2 lg:flex lg:flex-row gap-6 lg:gap-12">
  <!-- Cards with dividers only at lg+ -->
</div>
```

### Regulatory Infrastructure (2-col feature)

| Breakpoint | Behavior |
|---|---|
| Mobile | Single column — content then table |
| `lg`+ | Side-by-side: prose left, compliance table right |

```html
<div class="flex flex-col lg:flex-row gap-8 lg:gap-32">
  <div class="lg:w-[576px]"><!-- prose --></div>
  <div class="lg:w-[573px]"><!-- table --></div>
</div>
```

### Footer

| Breakpoint | Behavior |
|---|---|
| Mobile | Stacked — brand block, then nav columns 1-by-1 |
| `md` | Brand block + 2 nav columns per row |
| `lg`+ | Brand block (394px) + 3 nav columns side-by-side |

---

## Image Responsiveness

| Rule | Implementation |
|---|---|
| Hero image | `object-cover w-full h-full` — fills container |
| Partner logos | Fixed aspect ratio, scale down with `max-w-full` |
| No image stretching | Always pair with `object-cover` or `object-contain` |
| Aspect ratios | Hero: approx 1:1.32 (630×831). No explicit `aspect-ratio` in Figma — infer and lock in code |

```html
<!-- Hero image container -->
<div class="relative w-full lg:w-[630px] aspect-[630/831]">
  <img src="..." class="absolute inset-0 w-full h-full object-cover" alt="" />
</div>
```

---

## Interaction Changes (Hover → Touch)

| Interaction | Desktop | Mobile |
|---|---|---|
| Button hover | `hover:opacity-90` or `hover:bg-[#333]` | Native tap — no hover state |
| Link underline | `hover:border-b hover:border-brand` | Active state only |
| Nav dropdown | Hover-triggered | Tap-triggered with toggle |
| Card hover | Optional: subtle `hover:shadow-nav` border effect | Tap to navigate |

All hover effects should be wrapped with `@media (hover: hover)` to prevent sticky hover states on touch devices:
```css
@media (hover: hover) {
  .btn-primary:hover { opacity: 0.9; }
}
```

In Tailwind, use the `[@media(hover:hover)]:hover:` variant or configure a custom variant.

---

## Component Responsive Summary

| Component | Mobile | Tablet | Desktop |
|---|---|---|---|
| Button | Full-width `w-full` | Auto width | Fixed padding (`px-[33px] py-[17px]`) |
| Card | Single column | 2-col grid | 3-col flex row |
| Navbar | Collapsed (hamburger) | Collapsed | Full horizontal |
| Hero | Text-over-image, stacked | Text full-width, image bg | Side-by-side |
| Stats | 2×2 grid | 2×2 grid | Horizontal row |
| Footer | Stacked list | 2-col | 4-col (1 brand + 3 nav) |
