# How We Create Value Section Design

**Date:** 2026-05-26  
**Page:** `/partners` (after PartnersEcosystem/"The Network" section)  
**Status:** Design approved, ready for implementation planning

---

## Overview

The "How We Create Value" section is a responsive three-card layout that explains Harvestt's core value proposition through institutional pillars: Access, Transparency, and Sustainability. Each card combines a minimal blueprint-style geometric illustration with supporting copy, designed to serve all stakeholders in the ecosystem (mining partners, investors, platform).

---

## Data Structure

### New Type: `HowWeCreateValueData`

Add to `/data/types.ts`:

```typescript
export interface ValueCard {
  title: string
  description: string
  supportingStatement: string
}

export interface HowWeCreateValueData {
  sectionLabel: string
  heading: string
  intro: string
  cards: ValueCard[]
}
```

### New Data File: `/data/partners/how-we-create-value.json`

```json
{
  "sectionLabel": "Our Value Proposition",
  "heading": "How We Create Value",
  "intro": "Three pillars that drive institutional confidence and sustainable growth.",
  "cards": [
    {
      "title": "Access",
      "description": "Enable institutional capital and mining operators to connect through verified infrastructure, removing friction from sustainable Bitcoin deployment.",
      "supportingStatement": "Capital flows to credibility"
    },
    {
      "title": "Transparency",
      "description": "Provide cryptographic anchoring and audit-ready records that satisfy institutional disclosure mandates and compliance requirements.",
      "supportingStatement": "Trust through verification"
    },
    {
      "title": "Sustainability",
      "description": "Convert renewable energy commitments into auditable proof, creating a long-term competitive advantage for partners and institutional credibility.",
      "supportingStatement": "Impact at scale"
    }
  ]
}
```

---

## Component Architecture

### New Component: `HowWeCreateValue`

**Location:** `/components/HowWeCreateValue/HowWeCreateValue.tsx`

**Responsibilities:**
- Import and render data from `/data/partners/how-we-create-value.json`
- Render section wrapper with background image + overlay
- Render header block (sectionLabel, heading, intro)
- Render 3-column responsive grid of cards
- Handle accessibility (landmark, headings, semantic structure)

**Key Features:**
- Server component (no state, effects, or browser APIs required)
- Renders ValueCard child component for each card
- Proper ARIA labels and semantic HTML

### Child Component: `ValueCard`

**Location:** `/components/HowWeCreateValue/ValueCard.tsx`

**Props:**
```typescript
interface ValueCardProps {
  title: string
  description: string
  supportingStatement: string
}
```

**Responsibilities:**
- Render geometric blueprint illustration (SVG)
- Display title, description, and supporting statement
- Apply hover state (desktop only)
- Proper accessibility (no artificial barriers)

---

## Styling & Layout

### SCSS Module: `HowWeCreateValue.module.scss`

**Section Container:**
- Full width, background image + overlay pattern
- `background-image: url('/how-we-create-value-bg.jpg')` (geometric blueprint pattern)
- `::before` overlay with `var(--color-bg-muted-overlay)` (rgba(245, 245, 245, 0.95))
- Inner wrapper: max-width 1440px, centered, relative positioning for z-index

**Header Block:**
- Centered text, max-width 820px
- Section label: eyebrow style (uppercase, muted)
- Heading: `--text-heading-2-size` (responsive to heading-3 on mobile)
- Intro: body-lg, secondary text color
- Accent line below heading (12px wide, orange accent)

**Cards Grid:**
- **Mobile (< 768px):** 1 column, 16px gap, 4px left/right padding
- **Tablet (768px - 1023px):** 2 columns, 24px gap, 10px left/right padding
- **Desktop (≥ 1024px):** 3 columns, 32px gap, 80px left/right padding

**Individual Card Styling:**
- Background: `var(--color-bg-white)`
- Border: 1px solid `var(--color-border-default)`, 3px left-border accent
- Left border color: `var(--color-accent)` or `var(--color-brand)` (all cards consistent)
- Padding: 32px (mobile), 40px (desktop)
- Transition: `box-shadow 150ms, background-color 150ms` (cubic-bezier easing)
- Respect `@media (prefers-reduced-motion: reduce)`

**Card Typography:**
- **Title:** heading-4 (20px), bold, text-dark
- **Description:** body-sm (14px), regular, text-body
- **Supporting Statement:** label-md (12px), medium weight, text-muted

**Hover State (desktop only):**
- `@media (hover: hover)` query wraps all hover styles
- `background-color: var(--color-bg-muted)` on hover
- `box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06)` on hover
- Smooth 150ms transition

**Illustration:**
- Positioned at top of card
- Responsive sizing: ~64px height (mobile), ~80px height (desktop)
- SVG blueprint pattern with clean geometric lines
- Abstract institutional aesthetic (no Bitcoin, charts, or literal energy imagery)
- Color: subtle gray or brand accent, maintains contrast

---

## Responsive Breakpoints

| Breakpoint | Columns | Gap | Padding (H) | Card Padding |
|---|---|---|---|---|
| Mobile (< 768px) | 1 | 16px | 4px | 32px |
| Tablet (768px - 1023px) | 2 | 24px | 10px | 32px |
| Desktop (≥ 1024px) | 3 | 32px | 80px | 40px |

---

## Accessibility Requirements

- Section uses semantic `<section>` with `aria-labelledby`
- Heading uses `<h2>` (h1 is page title in hero)
- Cards are not interactive — no keyboard traps
- Color contrast meets WCAG AA (text on white background, borders)
- No hover-only information (supporting statement visible at all viewport sizes)
- Illustration SVGs have `aria-hidden="true"` (decorative)
- Reduced-motion respected in all transitions

---

## Integration into /partners Page

### Update `/app/partners/page.tsx`

```tsx
import type { Metadata } from 'next'
import siteConfigRaw from '@/data/site/config.json'
import type { SiteConfig, PartnersEcosystemData, HowWeCreateValueData } from '@/data/types'
import PartnersHero from '@/components/PartnersHero/PartnersHero'
import PartnersEcosystem from '@/components/PartnersEcosystem/PartnersEcosystem'
import HowWeCreateValue from '@/components/HowWeCreateValue/HowWeCreateValue'
import ecosystemDataRaw from '@/data/partners/ecosystem.json'
import howWeCreateValueDataRaw from '@/data/partners/how-we-create-value.json'

const siteConfig = siteConfigRaw as SiteConfig
const ecosystemData = ecosystemDataRaw as PartnersEcosystemData
const howWeCreateValueData = howWeCreateValueDataRaw as HowWeCreateValueData

export default function PartnersPage() {
  return (
    <main>
      <PartnersHero />
      <PartnersEcosystem data={ecosystemData} />
      <HowWeCreateValue data={howWeCreateValueData} />
    </main>
  )
}
```

---

## Background Pattern Asset

**File:** `/public/how-we-create-value-bg.jpg`

**Description:** Subtle geometric blueprint pattern with clean architectural lines. Should evoke institutional trust and structural integrity without being busy or distracting.

**Style Guidelines:**
- Soft gray or neutral tones
- Grid-like or architectural blueprint aesthetic
- Low contrast (muted, subtle)
- Will be overlaid with `rgba(245, 245, 245, 0.95)` for light background
- Recommended dimensions: 1920x1080px or vector-friendly aspect ratio

---

## Testing Checklist

- [ ] Cards display in 3-column layout on desktop (1440px+)
- [ ] Cards display in 2-column layout on tablet (768px - 1023px)
- [ ] Cards display in 1-column layout on mobile (< 768px)
- [ ] Hover state appears on desktop (shadow + background shift)
- [ ] Hover state does NOT appear on mobile/touch
- [ ] Reduced-motion preference respected (no transitions if enabled)
- [ ] Text contrast meets WCAG AA
- [ ] Responsive padding and gaps align with design tokens
- [ ] SVG illustrations render correctly and scale responsively
- [ ] Focus outline visible on interactive elements (if any added later)
- [ ] Page layout flows correctly (PartnersHero → PartnersEcosystem → HowWeCreateValue → Footer)

---

## Notes

- The component follows the agentic architecture: data layer separate from presentation
- Styling uses SCSS modules with design tokens only — no arbitrary values
- All spacing, colors, typography use existing tokens from globals.scss
- Component is a server component by default; no `use client` needed
- Blueprint illustration style aligns with institutional brand aesthetic established on other pages
