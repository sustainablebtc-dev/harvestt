# Marketing & Conversion Patterns

> Source: Figma `FRYoDiBSYuje0Nk9fNedRp`  
> Cross-reference: [`patterns/sections.md`](./sections.md), [`components/button.md`](../components/button.md)

---

## 1. Stat / Metric Display

**Purpose:** Establish credibility and scale. Used in stats strip and throughout.

### Pattern: Large Metric + Label

```html
<div class="flex flex-col gap-2">
  <p class="font-geist font-bold text-[24px] text-black leading-[1.2] tracking-[-0.0417em]">
    $15T+
  </p>
  <p class="font-geist font-semibold text-[10px] text-text-muted tracking-[0.125px] uppercase leading-[1.4]">
    Addressable Market
  </p>
</div>
```

**Semantic metric (positive/green):**
```html
<p class="font-geist font-bold text-[24px] text-success leading-[1.2] tracking-[-0.0417em]">
  14.2 TWh
</p>
```

**Usage rules:**
- Metrics are `heading-3` size (24px Bold)
- Labels are `label-xs` (10px SemiBold, uppercase)
- Green (`text-success`) only for positive, desirable metrics (verified energy, growth indicators)
- All other metrics use `text-black`

---

## 2. Article / Insight Card Pattern

**Purpose:** Scannable content cards that drive to long-form reads.

Key conversion elements:
1. **Category + date meta** — establishes recency and relevance
2. **Strong headline** — H4 weight with tight tracking
3. **Body preview** — enough to create need-to-know
4. **Tags** — scannable topic categorisation
5. **Read time + CTA** — removes friction ("4 min read")

See full implementation in [`components/card.md`](../components/card.md).

---

## 3. Compliance Status Table

**Purpose:** Build institutional trust via regulatory proof. Converts sceptical institutional visitors.

The table pattern makes compliance visible at a glance — licensed/compliant/monitoring statuses signal that Harvestt is operating within regulated frameworks.

| Design choice | Marketing intent |
|---|---|
| White card on muted background | Creates visual lift — draws eye |
| Muted header row | Reduces cognitive load — focuses on data |
| Status badges (green/grey) | Traffic light metaphor — instant legibility |
| Uppercase status labels | Signals official, certified language |

See implementation in [`components/card.md`](../components/card.md#3-table-card-regulatory-status-panel).

---

## 4. Social Proof / Partner Logos

**Purpose:** Borrow institutional credibility from ADGM, Hub71, and other sovereign partners.

```html
<div class="flex flex-col items-center gap-12">
  <p class="font-geist font-semibold text-[20px] text-black text-center leading-[1.2] tracking-[-0.0085em] max-w-[573px]">
    Built within sovereign-backed institutional ecosystem
  </p>
  <div class="flex flex-wrap gap-20 items-center justify-center">
    <img src="/partners/adgm.svg" alt="ADGM — Abu Dhabi Global Market" class="h-12 object-contain" />
    <img src="/partners/hub71.svg" alt="Hub71" class="h-[52px] object-contain" />
    <img src="/partners/logo3.svg" alt="Partner name" class="h-9 object-contain" />
  </div>
</div>
```

**Rules:**
- Logo images must be SVG or high-DPI assets — no raster logos at small sizes
- `alt` text must name the organisation
- All logos monochrome/greyscale if possible — maintains visual neutrality

---

## 5. CTA Section Pattern

**Purpose:** Convert bottom-of-funnel institutional visitors. This is the primary conversion surface.

Conversion elements:
1. **Orange top border** — signals importance, breaks page rhythm
2. **"Institutional Inquiries" label** — pre-qualifies the right audience
3. **"Speak With Our Team" heading** — personal, not transactional
4. **Exclusivity copy** — "We work exclusively with institutional counterparties" — creates aspiration
5. **Dual CTA** — phone-based (Speak) + email (Send) — reduces friction by offering two channels
6. **Locations** — Abu Dhabi, New York, Hong Kong, Global — signals scale and legitimacy

See full implementation in [`patterns/sections.md`](./sections.md#4-cta-section).

---

## 6. Blockquote / Pull Quote

Not in Figma scope but implied by the "The Challenge" section quote styling. Pattern for institutional quotes:

```html
<blockquote class="
  border-l-2 border-brand pl-6
  font-geist font-normal text-[16px] text-text-primary
  leading-[1.6] tracking-[0]
">
  "We don't advocate for any single energy source. We certify what's real, and what's auditable."
</blockquote>
```

---

## 7. Inline Metric with Footnote

Used in "The Challenge" section where `70%+`, `$15–$16` and `120 TWh` appear as large stats with sub-labels:

```html
<div class="flex flex-col gap-1">
  <p class="font-geist font-bold text-[36px] text-black leading-[1.2] tracking-[-0.0278em]">
    70%+
  </p>
  <p class="font-geist font-normal text-[14px] text-text-secondary leading-[1.6]">
    Of miners make unverified energy claims
  </p>
</div>
```

---

## Conversion Flow Map

```
Hero (awareness)
  ↓ "Explore Insights" CTA
Market Insights (education)
  ↓ "Read More" card CTAs
Regulatory Infrastructure (trust)
  ↓ scroll
Partner Logos (social proof)
  ↓ scroll
The Challenge + Verification Layer (problem/solution)
  ↓ scroll
Stats: $15–16T, 70%+, 120 TWh (market framing)
  ↓ scroll
Team Section (CTA — conversion)
  → "Speak With Our Team" or "Send an Email"
```

This is a linear, top-to-bottom conversion funnel. Every section is designed to build on the last.

---

## Copy Patterns

| Pattern | Usage | Example |
|---|---|---|
| Metric + context | Stats, challenge | "70%+ of publicly listed mining operators..." |
| Institutional qualifier | Labels, headers | "Institutional Inquiries", "Institutional Energy Infrastructure" |
| Exclusivity signal | CTA copy | "We work exclusively with institutional counterparties" |
| Authority citation | Regulatory table | "ISO 14064", "FSRA ADGM Category 3C" |
| Action labels | Button text | "SPEAK WITH OUR TEAM" (never "Contact Us") |
