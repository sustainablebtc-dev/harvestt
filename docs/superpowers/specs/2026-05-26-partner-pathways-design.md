# Partner Pathways Tabbed Interface Design

**Date:** 2026-05-26  
**Page:** `/partners` (after HowWeCreateValue section)  
**Status:** Design approved, ready for implementation planning

---

## Overview

The "Partner Pathways" section enables mining operators and institutional investors to explore benefits tailored to their specific roles through a minimalist tabbed interface. The design emphasizes clarity, accessibility, and institutional UX patterns inspired by BlackRock's minimalist approach.

---

## Data Structure

### New Types: `HowWeCreateValueData` in `/data/types.ts`

```typescript
export interface TabContent {
  title: string
  keyPoints: string[]  // 2-3 key points per benefit
}

export interface PartnerTab {
  id: string
  label: string
  description: string
  benefits: TabContent[]
}

export interface PartnerPathwaysData {
  sectionLabel: string
  heading: string
  intro: string
  tabs: PartnerTab[]
}
```

### New Data File: `/data/partners/partner-pathways.json`

Structure:
```json
{
  "sectionLabel": "[To be written by content agent]",
  "heading": "[To be written by content agent]",
  "intro": "[To be written by content agent]",
  "tabs": [
    {
      "id": "mining-partners",
      "label": "Mining Partners",
      "description": "[To be written by content agent]",
      "benefits": [
        {
          "title": "Growth Capital",
          "keyPoints": ["[point 1]", "[point 2]", "[point 3]"]
        },
        {
          "title": "Strategic Support",
          "keyPoints": ["[point 1]", "[point 2]", "[point 3]"]
        },
        {
          "title": "Long-Term Alignment",
          "keyPoints": ["[point 1]", "[point 2]", "[point 3]"]
        }
      ]
    },
    {
      "id": "investment-partners",
      "label": "Investment Partners",
      "description": "[To be written by content agent]",
      "benefits": [
        {
          "title": "Infrastructure Exposure",
          "keyPoints": ["[point 1]", "[point 2]", "[point 3]"]
        },
        {
          "title": "Governance",
          "keyPoints": ["[point 1]", "[point 2]", "[point 3]"]
        },
        {
          "title": "Reporting & Transparency",
          "keyPoints": ["[point 1]", "[point 2]", "[point 3]"]
        }
      ]
    }
  ]
}
```

---

## Component Architecture

### Main Component: `PartnerPathways`

**Location:** `/components/PartnerPathways/PartnerPathways.tsx`

**Type:** Client component (`use client` required for state management)

**Props:**
```typescript
interface PartnerPathwaysProps {
  data: PartnerPathwaysData
}
```

**Responsibilities:**
- Render section header (label, heading, intro)
- Render tab list with tab buttons
- Manage active tab state (`useState`)
- Render active tab's content panel
- Handle keyboard navigation (Tab, Enter/Space)
- Provide proper ARIA labels and roles

**State:**
```typescript
const [activeTabId, setActiveTabId] = useState<string>(data.tabs[0].id)
```

**Structure:**
```tsx
<section>
  <div className={styles.inner}>
    {/* Header Block */}
    <div className={styles.headerBlock}>
      <p className={styles.sectionLabel}>{data.sectionLabel}</p>
      <h2 className={styles.heading}>{data.heading}</h2>
      <p className={styles.intro}>{data.intro}</p>
    </div>

    {/* Tab Interface */}
    <div className={styles.tabsContainer}>
      {/* Tab List */}
      <div className={styles.tabList} role="tablist">
        {data.tabs.map(tab => (
          <button
            key={tab.id}
            className={`${styles.tab} ${activeTabId === tab.id ? styles.tabActive : ''}`}
            role="tab"
            aria-selected={activeTabId === tab.id}
            aria-controls={`panel-${tab.id}`}
            onClick={() => setActiveTabId(tab.id)}
            onKeyDown={handleKeyDown}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content Panel */}
      <div className={styles.contentPanel}>
        {activeTab && (
          <>
            <p className={styles.tabDescription}>{activeTab.description}</p>
            <div className={styles.benefitsGrid}>
              {activeTab.benefits.map(benefit => (
                <div key={benefit.title} className={styles.benefitCard}>
                  <h3 className={styles.benefitTitle}>{benefit.title}</h3>
                  <ul className={styles.keyPointsList}>
                    {benefit.keyPoints.map(point => (
                      <li key={point} className={styles.keyPoint}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  </div>
</section>
```

---

## Styling & Layout

### SCSS Module: `PartnerPathways.module.scss`

**Design Philosophy:**
- Minimalist aesthetic (clean underline indicator, no background)
- All colors/spacing use design tokens
- Mobile-first responsive approach
- Smooth transitions without specific animations

**Key Styles:**

**Section Container:**
- Background: white
- Full width, centered max-width 1440px
- Padding responsive to breakpoints

**Header Block:**
- Centered text alignment
- Max-width 820px
- Eyebrow label (uppercase, muted)
- H2 heading (responsive size: display-2 desktop, heading-3 mobile)
- Orange accent line below heading
- Intro text (body-lg, secondary color)

**Tab List:**
- `role="tablist"` for accessibility
- Horizontal flex layout
- Flex-wrap: wrap for mobile responsiveness
- Gap: design token spacing

**Tab Button (`.tab`):**
- Background: transparent (no background, minimalist)
- Border: none (except bottom border on active)
- Bottom border: 2px solid transparent (inactive)
- Text color: body color
- Padding: responsive (smaller on mobile)
- Cursor: pointer
- Transition: `border-color 150ms` (smooth, no animation)
- Font: body-lg weight-medium

**Tab Active (`.tabActive`):**
- Bottom border: 2px solid `var(--color-accent)` (blue (#339DFF))
- Text color: text-dark (bold appearance via weight)

**Tab Hover (desktop only):**
- `@media (hover: hover)` wraps hover state
- Text color: text-dark (slightly darker on hover)

**Content Panel (`.contentPanel`):**
- Padding top: spacing token
- Smooth content rendering (no animation, just immediate switch)

**Tab Description:**
- body-lg size
- text-body color
- margin-bottom: spacing token

**Benefits Grid:**
- `display: grid`
- Desktop (1024px+): `grid-template-columns: repeat(3, 1fr)` (one benefit per column)
- Tablet (768px-1023px): `grid-template-columns: repeat(2, 1fr)` (two benefits per row)
- Mobile (<768px): `grid-template-columns: 1fr` (stacked)
- Gap: spacing token

**Benefit Card (`.benefitCard`):**
- Background: transparent or subtle muted
- Padding: spacing token
- Border: optional 1px light border
- No shadow, minimalist

**Benefit Title (`.benefitTitle`):**
- heading-4 size
- font-weight-semibold
- text-dark color
- margin-bottom: small spacing

**Key Points List (`.keyPointsList`):**
- `list-style: none`
- Margin: 0, padding: 0
- Gap between items: small spacing
- Custom bullet or dash marker (thin, minimal)

**Key Point (`.keyPoint`):**
- body-sm size
- text-body color
- Padding-left for custom bullet
- Line-height for readability

---

## Keyboard & Accessibility

### Keyboard Navigation

- **Tab key:** Move focus between tab buttons
- **Shift+Tab:** Move focus backward
- **Enter/Space:** Activate focused tab (change `activeTabId` state)
- Focus ring: Automatic (browser default, may add custom focus outline)

### ARIA Implementation

- **Tab List:** `role="tablist"`
- **Tab Button:** `role="tab"`, `aria-selected={true|false}`, `aria-controls="panel-{id}"`
- **Content Panel:** `id="panel-{id}"` (matches `aria-controls`)
- **Heading:** Proper `<h2>` nesting under main document hierarchy

### Semantic HTML

- Use `<button>` elements for tab triggers (not `<a>` or `<div>`)
- Proper heading hierarchy: `<h2>` for section, `<h3>` for benefit titles
- Use `<ul>` and `<li>` for key points list

---

## Responsive Breakpoints

| Breakpoint | Tab Layout | Benefits Grid | Font/Spacing |
|---|---|---|---|
| Mobile (<768px) | Horizontal, narrow | 1 column (stacked) | Smaller padding, body-sm for descriptions |
| Tablet (768px-1023px) | Horizontal | 2 columns | Medium padding |
| Desktop (1024px+) | Horizontal | 3 columns | Full padding, body-lg |

---

## Integration into `/partners` Page

### Update `/app/partners/page.tsx`

```typescript
import type { PartnerPathwaysData } from '@/data/types'
import PartnerPathways from '@/components/PartnerPathways/PartnerPathways'
import partnerPathwaysDataRaw from '@/data/partners/partner-pathways.json'

const partnerPathwaysData = partnerPathwaysDataRaw as PartnerPathwaysData

export default function PartnersPage() {
  return (
    <main>
      <PartnersHero />
      <PartnersEcosystem data={ecosystemData} />
      <HowWeCreateValue data={howWeCreateValueData} />
      <PartnerPathways data={partnerPathwaysData} />
    </main>
  )
}
```

**Order:** PartnersHero → PartnersEcosystem → HowWeCreateValue → **PartnerPathways**

---

## Content Delivery

Content for the following sections will be written by the **Content Agent**:
- `sectionLabel` - Section eyebrow label
- `heading` - Main section heading
- `intro` - Introductory paragraph
- Tab descriptions (mining partners and investment partners)
- Benefit titles and key points for all six benefits

The content agent will ensure:
- Production-grade institutional messaging
- Alignment with brand voice
- SEO optimization where applicable
- Factual accuracy of claims
- Compliance with accessibility standards

---

## Testing Checklist

- [ ] Tab switching works on click (desktop)
- [ ] Keyboard navigation works (Tab, Shift+Tab, Enter/Space)
- [ ] Active tab indicator (bottom border) visible
- [ ] Content updates when tab changes
- [ ] Mobile layout: tabs responsive, benefits stack correctly
- [ ] Tablet layout: 2 benefits per row
- [ ] Desktop layout: 3 benefits per row
- [ ] ARIA attributes present and correct
- [ ] Focus ring visible on tab buttons
- [ ] No keyboard traps
- [ ] Smooth transitions between tabs (no jarring changes)
- [ ] All typography uses design tokens
- [ ] All spacing uses design tokens
- [ ] Hover state works (desktop only)
- [ ] Responsive across all breakpoints
- [ ] TypeScript compilation passes
- [ ] Accessible to screen readers

---

## Notes

- Component uses `use client` for state management (required for `useState`)
- No external animations beyond smooth transitions (per requirements)
- Minimalist design aligns with BlackRock institutional UX inspiration
- All content is data-driven (no hardcoded copy)
- Follows existing agentic architecture: Data layer separate from component logic
- Future extensibility: Can easily add more tabs or benefits by updating data file
