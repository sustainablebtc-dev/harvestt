# Page Section Patterns

> Source: Figma `FRYoDiBSYuje0Nk9fNedRp` — full Home Page  
> Cross-reference: [`layout/grid.md`](../layout/grid.md), [`components/`](../components/), [`tokens/spacing.md`](../tokens/spacing.md)

---

## Section Anatomy

Every content section follows this structure:

```
<section>
  └── [Container: max-w-[1440px] mx-auto px-20 py-24]
        ├── [Section Header]         ← label + heading + accent divider
        └── [Section Body]           ← varies by pattern
```

---

## Section Header Pattern

Used on: Market Insights, Regulatory Infrastructure, The Challenge, The Verification Layer, CTA

```html
<div class="flex flex-col gap-2">
  <!-- Section label -->
  <p class="
    font-geist font-medium text-[11px] text-text-muted
    tracking-[1.25px] uppercase leading-[1.4]
  ">
    Research & Intelligence
  </p>
  <!-- Section heading -->
  <h2 class="
    font-geist font-bold text-[22px] md:text-[28px] lg:text-[36px]
    text-black leading-[1.2] tracking-[-0.0278em]
  ">
    Market Insights
  </h2>
</div>
<!-- Accent divider — where used -->
<div class="h-px w-12 bg-accent mt-2" aria-hidden="true"></div>
```

> **Note:** The accent divider (`bg-accent`) appears on: Hero, Regulatory Infrastructure section, CTA section. It does **not** appear on the Market Insights section header (which uses a border-bottom on the header row instead). Only add the divider where it appears in Figma.

---

## Section Header with Row CTA

The Market Insights section uses a header row with the section title on the left and a ghost CTA on the right:

```html
<div class="
  flex items-end justify-between
  py-4 border-b border-border-default
">
  <div class="flex flex-col gap-2 w-[263px]">
    <p class="font-geist font-medium text-[11px] text-text-muted tracking-[1.25px] uppercase leading-[1.4]">
      Research & Intelligence
    </p>
    <h2 class="font-geist font-bold text-[22px] lg:text-[36px] text-black leading-[1.2] tracking-[-0.0278em]">
      Market Insights
    </h2>
  </div>
  <!-- Ghost CTA -->
  <button class="
    inline-flex items-center gap-[10px]
    pb-[9px] pt-[8px]
    border-b border-brand
    font-geist font-medium text-[13px] text-brand
    tracking-[0.75px] uppercase leading-[1.4]
    whitespace-nowrap rounded-none
  ">
    VIEW ALL RESEARCH
    <img src="/icons/arrow-right.svg" alt="" class="size-[14px]" aria-hidden="true" />
  </button>
</div>
```

---

## Background Section Variants

| Variant | Background | Usage |
|---|---|---|
| Default | `bg-white` | Most sections |
| Muted | `bg-bg-muted` (`#f5f5f5`) | Regulatory Infrastructure section |
| Warm strip | `bg-bg-warm` (`#fff6f0`) | Stats bar |
| Dark | `bg-brand` (`#1b1b1b`) | Footer |

---

## 1. Stats Strip Section

```html
<div class="
  flex flex-wrap lg:flex-nowrap items-start lg:items-center justify-between
  px-5 lg:px-20 py-8
  bg-bg-warm
">
  <div class="flex flex-col gap-2 w-1/2 lg:w-auto mb-6 lg:mb-0">
    <p class="font-geist font-bold text-[24px] text-black leading-[1.2] tracking-[-0.0417em]">
      780 EH/s
    </p>
    <p class="font-geist font-semibold text-[10px] text-text-muted tracking-[0.125px] uppercase leading-[1.4]">
      Network Hashrate
    </p>
  </div>
  <!-- Repeat for each stat -->
</div>
```

**Stats with semantic colour (green):**
```html
<p class="font-geist font-bold text-[24px] text-success leading-[1.2] tracking-[-0.0417em]">
  14.2 TWh
</p>
```

---

## 2. Two-Column Feature Section

Used in: Regulatory Infrastructure, The Challenge, The Verification Layer

```html
<section class="bg-bg-muted">
  <div class="max-w-[1440px] mx-auto px-5 lg:px-20 py-12 lg:py-24">
    <div class="flex flex-col lg:flex-row gap-8 lg:gap-32">

      <!-- Left: Prose -->
      <div class="flex flex-col gap-8 lg:max-w-[576px]">
        <div class="flex flex-col gap-2">
          <p class="font-geist font-medium text-[11px] text-text-muted tracking-[1.25px] uppercase leading-[1.4]">
            Compliance & Governance
          </p>
          <h2 class="font-geist font-bold text-[22px] lg:text-[36px] text-black leading-[1.2] tracking-[-0.0278em]">
            Regulatory Infrastructure
          </h2>
          <div class="h-px w-12 bg-accent mt-2" aria-hidden="true"></div>
        </div>
        <p class="font-geist font-normal text-[16px] text-text-body leading-[1.6]">
          Primary paragraph...
        </p>
        <p class="font-geist font-normal text-[16px] text-text-secondary leading-[1.6]">
          Secondary paragraph...
        </p>
      </div>

      <!-- Right: Table/Visual -->
      <div class="lg:max-w-[573px] w-full">
        <!-- Table card or visual content -->
      </div>

    </div>
  </div>
</section>
```

---

## 3. Partner Logo Section

```html
<div class="flex flex-col gap-12 items-center">
  <p class="font-geist font-semibold text-[20px] text-black text-center leading-[1.2] tracking-[-0.0085em] max-w-[573px]">
    Built within sovereign-backed institutional ecosystem
  </p>
  <div class="flex flex-wrap justify-center items-center gap-20">
    <img src="/partners/adgm.svg" alt="ADGM" class="h-12 w-auto max-w-[136px] object-contain" />
    <img src="/partners/hub71.svg" alt="Hub71" class="h-[52px] w-auto max-w-[145px] object-contain" />
    <img src="/partners/partner3.svg" alt="Partner Name" class="h-9 w-auto max-w-[132px] object-contain" />
  </div>
</div>
```

---

## 4. CTA Section

```html
<section class="border-t-4 border-accent">
  <div class="max-w-[1440px] mx-auto px-5 lg:px-20 py-[92px] flex flex-col items-center gap-8 text-center">

    <div class="flex flex-col gap-4 items-center">
      <p class="font-geist font-medium text-[11px] text-text-muted tracking-[1.25px] uppercase leading-[1.4]">
        Institutional Inquiries
      </p>
      <h2 class="font-geist font-bold text-[32px] lg:text-[48px] text-black leading-[1.2] tracking-[-0.0208em]">
        Speak With<br />Our Team
      </h2>
    </div>

    <div class="h-px w-12 bg-accent" aria-hidden="true"></div>

    <p class="font-geist font-normal text-[16px] text-text-secondary leading-[1.6] max-w-[672px] text-center">
      We work exclusively with institutional counterparties — asset managers, sovereign wealth funds, mining operators, and regulated financial entities.
    </p>

    <div class="flex flex-col sm:flex-row gap-4 justify-center">
      <!-- Primary CTA -->
      <a href="/contact" class="inline-flex items-center justify-center px-[33px] py-[17px] bg-brand border border-brand font-geist font-medium text-[13px] text-white tracking-[0.75px] uppercase rounded-none hover:opacity-90 transition-opacity">
        SPEAK WITH OUR TEAM
      </a>
      <!-- Secondary CTA -->
      <a href="mailto:hello@harvestt.com" class="inline-flex items-center justify-center px-[33px] py-[17px] bg-white border border-border-default font-geist font-medium text-[13px] text-brand tracking-[0.75px] uppercase rounded-none hover:border-brand transition-colors">
        SEND AN EMAIL
      </a>
    </div>

    <a href="mailto:hello@harvestt.com" class="font-geist font-normal text-[16px] text-text-muted border-b border-border-default pb-1 hover:text-text-primary transition-colors">
      hello@harvestt.com
    </a>

    <div class="flex items-center gap-8 flex-wrap justify-center border-t border-border-default pt-[42px] w-full max-w-[672px]">
      <span class="font-geist font-normal text-[16px] text-text-secondary">Abu Dhabi, UAE</span>
      <span class="size-1.5 rounded-full bg-text-muted" aria-hidden="true"></span>
      <span class="font-geist font-normal text-[16px] text-text-secondary">New York</span>
      <span class="size-1.5 rounded-full bg-text-muted" aria-hidden="true"></span>
      <span class="font-geist font-normal text-[16px] text-text-secondary">Hong Kong</span>
      <span class="size-1.5 rounded-full bg-text-muted" aria-hidden="true"></span>
      <span class="font-geist font-normal text-[16px] text-text-secondary">Global</span>
    </div>

  </div>
</section>
```

> **Note:** The CTA section uses `border-t` with `border-accent` (`#ff6e00`) — this is the only place a coloured top border is used as a section-level accent. It signals high-importance content.

---

## Section Spacing Reference

| Section | py (desktop) | px (desktop) | Background |
|---|---|---|---|
| Hero | Custom (absolute positioned) | `px-20` | `bg-white` |
| Stats strip | `py-8` | `px-20` | `bg-bg-warm` |
| Market Insights | `py-24` | `px-20` | `bg-white` |
| Regulatory Infrastructure | `py-24` | `px-20` | `bg-bg-muted` |
| CTA Section | `py-[92px]` | `px-20` | `bg-white` |
| Footer | `py-16` | `px-20` | `bg-brand` |
