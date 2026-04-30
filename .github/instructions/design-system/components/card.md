# Card Component

> Source: Figma `FRYoDiBSYuje0Nk9fNedRp` — Market Insights section, node `5:1278`, `5:1294`, `5:1315`  
> Cross-reference: [`tokens/colors.md`](../tokens/colors.md), [`tokens/typography.md`](../tokens/typography.md), [`tokens/spacing.md`](../tokens/spacing.md)

---

## Overview

The primary card pattern is the **Insight Card** — used in the 3-column Market Insights section. Cards use no background, no border, and no shadow. They are **column dividers** that create card-like groupings via 1px vertical separator lines between them.

A secondary **Table Card** pattern exists for the Regulatory Compliance status panel.

---

## 1. Insight Card

### Structure

```
[Category Label + Date]
[Card Title (H4)]
[Body Text]
[Tag Chips]
[Footer: Read Time + CTA]
```

### Implementation

```html
<article class="flex flex-col gap-6 flex-[1_0_0] min-w-0">

  <!-- Meta row -->
  <div class="flex items-center justify-between h-[16.5px] whitespace-nowrap">
    <span class="
      font-geist font-semibold text-[10px] text-text-muted
      tracking-[0.125px] uppercase leading-[1.4]
    ">
      Macro Outlook
    </span>
    <span class="
      font-geist font-normal text-[10px] text-text-muted
      tracking-[0.125px] leading-[1.4]
    ">
      April 2025
    </span>
  </div>

  <!-- Content -->
  <div class="flex flex-col gap-4">
    <h3 class="
      font-geist font-semibold text-[20px] text-black
      leading-[1.2] tracking-[-0.17px]
    ">
      Bitcoin Mining Enters Institutional Phase
    </h3>
    <p class="
      font-geist font-normal text-[16px] text-[#555555]
      leading-[1.6] tracking-[0]
    ">
      Following the 2024 halving event...
    </p>
  </div>

  <!-- Tags -->
  <div class="flex gap-2 items-center">
    <span class="
      inline-flex items-center justify-center
      px-2 py-1
      bg-bg-muted
      font-geist font-medium text-[11px] text-text-secondary
      tracking-[0.5px] leading-[15px]
      rounded-none
    ">
      Bitcoin
    </span>
    <span class="inline-flex items-center justify-center px-2 py-1 bg-bg-muted font-geist font-medium text-[11px] text-text-secondary tracking-[0.5px] leading-[15px] rounded-none">
      Institutional Capital
    </span>
    <span class="inline-flex items-center justify-center px-2 py-1 bg-bg-muted font-geist font-medium text-[11px] text-text-secondary tracking-[0.5px] leading-[15px] rounded-none">
      ESG
    </span>
  </div>

  <!-- Footer -->
  <div class="flex items-center justify-between pt-[21px] border-t border-border-default">
    <span class="
      font-geist font-normal text-[10px] text-text-muted
      tracking-[0.125px] leading-[1.4] whitespace-nowrap
    ">
      4 min read
    </span>
    <!-- Ghost Small Button -->
    <button class="
      inline-flex items-center gap-[10px]
      pb-[3px] pt-[2px]
      border-b border-brand
      font-geist font-medium text-[12px] text-brand
      tracking-[0.75px] uppercase leading-[1.4]
      whitespace-nowrap rounded-none
    ">
      READ MORE
      <img src="..." alt="" class="size-[14px]" aria-hidden="true" />
    </button>
  </div>

</article>
```

---

## 2. Card Grid Layout (3-Column with Dividers)

The cards sit in a flex row with 1px vertical dividers. Dividers are NOT borders on cards — they are separate elements.

```html
<div class="flex flex-col lg:flex-row gap-6 lg:gap-0">

  <article class="flex flex-col gap-6 flex-1 min-w-0 lg:pr-12">
    <!-- Card 1 -->
  </article>

  <!-- Vertical divider — desktop only -->
  <div class="hidden lg:block w-px bg-border-default self-stretch mx-12" aria-hidden="true"></div>

  <article class="flex flex-col gap-6 flex-1 min-w-0 lg:px-12">
    <!-- Card 2 -->
  </article>

  <div class="hidden lg:block w-px bg-border-default self-stretch mx-12" aria-hidden="true"></div>

  <article class="flex flex-col gap-6 flex-1 min-w-0 lg:pl-12">
    <!-- Card 3 -->
  </article>

</div>
```

> **Note:** The Figma uses `gap-48` (48px) on the flex container with no padding on cards. The divider is placed as a sibling element. In the code above, padding is used instead to give space on each side of the divider — adjust to match exactly.

---

## 3. Table Card (Regulatory Status Panel)

**Figma node:** `8:1476`

```html
<div class="bg-white border border-border-default p-px rounded-none">

  <!-- Header -->
  <div class="h-12 bg-bg-muted border-b border-border-default relative">
    <span class="
      absolute left-5 top-1/2 -translate-y-1/2
      font-geist font-medium text-[11px] text-text-muted
      tracking-[1.25px] uppercase whitespace-nowrap
    ">
      Regulatory Alignment Status
    </span>
  </div>

  <!-- Row -->
  <div class="flex h-[72px] items-center justify-between px-5 py-4 border-b border-bg-muted">
    <div class="flex flex-col gap-1">
      <p class="font-geist font-semibold text-[14px] text-black leading-[1.2] tracking-[-0.17px] whitespace-nowrap">
        EU MiCA
      </p>
      <p class="font-geist font-normal text-[12px] text-text-muted leading-[1.4] whitespace-nowrap">
        Energy disclosure provisions under review
      </p>
    </div>
    <!-- Status badge: Monitoring -->
    <span class="inline-flex items-center justify-center px-2 py-1 bg-bg-muted font-geist font-medium text-[11px] text-text-muted tracking-[0.5px] uppercase leading-[15px] rounded-none">
      Monitoring
    </span>
  </div>

  <!-- Row: Compliant -->
  <div class="flex h-[72px] items-center justify-between px-5 py-4 border-b border-bg-muted">
    <div class="flex flex-col gap-1">
      <p class="font-geist font-semibold text-[14px] text-black leading-[1.2] tracking-[-0.17px] whitespace-nowrap">
        SEC Digital Asset Framework
      </p>
      <p class="font-geist font-normal text-[12px] text-text-muted leading-[1.4] whitespace-nowrap">
        Attestation documentation aligned
      </p>
    </div>
    <!-- Status badge: Compliant -->
    <span class="inline-flex items-center justify-center px-2 py-1 bg-success-bg font-geist font-medium text-[11px] text-success tracking-[0.5px] uppercase leading-[15px] rounded-none">
      Compliant
    </span>
  </div>

</div>
```

---

## Status Badge Variants

| Variant | Background | Text Color | Label |
|---|---|---|---|
| Monitoring | `bg-bg-muted` (`#f5f5f5`) | `text-text-muted` (`#a3a3a3`) | MONITORING |
| Compliant | `bg-success-bg` (`rgba(40,158,75,0.1)`) | `text-success` (`#289e4b`) | COMPLIANT |
| Licensed | `bg-success-bg` | `text-success` | LICENSED |
| Aligned | `bg-success-bg` | `text-success` | ALIGNED |

---

## Responsive Behavior

| Breakpoint | Insight Cards | Table Card |
|---|---|---|
| Mobile | Stacked, single column, no dividers | Full width |
| `md` | 2-col grid | Full width |
| `lg`+ | 3-col flex row with dividers | Constrained to 573px |
