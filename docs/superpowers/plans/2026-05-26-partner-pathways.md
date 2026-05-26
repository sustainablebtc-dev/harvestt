# Partner Pathways Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Implement a responsive tabbed interface on the `/partners` page where users can toggle between "Mining Partners" and "Investment Partners" to explore tailored benefits with minimalist institutional UX.

**Architecture:** Data-driven component following the agentic pipeline: Planner decomposes tasks, Frontend implements UI/SCSS, Content writes copy, Reviewer audits. Component uses client-side state (`useState`) to manage active tab. Data layer completely separate from presentation. All styling uses design tokens and SCSS modules.

**Tech Stack:** Next.js, React (client component), TypeScript, SCSS modules, design tokens, JSON data files

---

## File Structure

**Files to Create:**
- `/data/partners/partner-pathways.json` — tabbed content structure
- `/components/PartnerPathways/PartnerPathways.tsx` — main tabbed interface component
- `/components/PartnerPathways/PartnerPathways.module.scss` — all styling

**Files to Modify:**
- `/data/types.ts` — add `PartnerPathwaysData`, `PartnerTab`, `TabContent` interfaces
- `/app/partners/page.tsx` — import and render new component

---

## Task Breakdown

### Task 1: Add Types to `/data/types.ts`

**Files:**
- Modify: `/data/types.ts` (end of file, before "Future Extensions" comment)

- [ ] **Step 1: Read the current types file**

Open `/data/types.ts` and locate the "Future Extensions" comment section (around line 128).

- [ ] **Step 2: Add new interfaces**

Insert these interfaces before the "Future Extensions" comment:

```typescript
// ─── Partner Pathways ───────────────────────────────────────────────────────

export interface TabContent {
  title: string
  keyPoints: string[]
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

- [ ] **Step 3: Verify TypeScript syntax**

Check that all interfaces are properly formatted with no missing commas or braces.

- [ ] **Step 4: Commit**

```bash
git add data/types.ts
git commit -m "types: add PartnerPathwaysData, PartnerTab, and TabContent interfaces"
```

---

### Task 2: Create Data File `/data/partners/partner-pathways.json`

**Files:**
- Create: `/data/partners/partner-pathways.json`

- [ ] **Step 1: Create the file with exact structure**

Create `/data/partners/partner-pathways.json` with this JSON structure (content placeholders to be filled by content agent):

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
          "keyPoints": [
            "[To be written by content agent]",
            "[To be written by content agent]",
            "[To be written by content agent]"
          ]
        },
        {
          "title": "Strategic Support",
          "keyPoints": [
            "[To be written by content agent]",
            "[To be written by content agent]",
            "[To be written by content agent]"
          ]
        },
        {
          "title": "Long-Term Alignment",
          "keyPoints": [
            "[To be written by content agent]",
            "[To be written by content agent]",
            "[To be written by content agent]"
          ]
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
          "keyPoints": [
            "[To be written by content agent]",
            "[To be written by content agent]",
            "[To be written by content agent]"
          ]
        },
        {
          "title": "Governance",
          "keyPoints": [
            "[To be written by content agent]",
            "[To be written by content agent]",
            "[To be written by content agent]"
          ]
        },
        {
          "title": "Reporting & Transparency",
          "keyPoints": [
            "[To be written by content agent]",
            "[To be written by content agent]",
            "[To be written by content agent]"
          ]
        }
      ]
    }
  ]
}
```

- [ ] **Step 2: Validate JSON syntax**

Use `jq` or a JSON validator to ensure the file is valid:
```bash
jq . data/partners/partner-pathways.json
```

Expected: Valid JSON output with no errors.

- [ ] **Step 3: Commit**

```bash
git add data/partners/partner-pathways.json
git commit -m "data: add partner-pathways structure with content placeholders"
```

---

### Task 3: Create PartnerPathways Component

**Files:**
- Create: `/components/PartnerPathways/PartnerPathways.tsx`

- [ ] **Step 1: Create the component file**

Create `/components/PartnerPathways/PartnerPathways.tsx`:

```typescript
'use client'

import { useState } from 'react'
import type { PartnerPathwaysData, PartnerTab } from '@/data/types'
import styles from './PartnerPathways.module.scss'

interface PartnerPathwaysProps {
  data: PartnerPathwaysData
}

export default function PartnerPathways({ data }: PartnerPathwaysProps) {
  const [activeTabId, setActiveTabId] = useState<string>(data.tabs[0].id)

  const activeTab = data.tabs.find(tab => tab.id === activeTabId)

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
    }
  }

  return (
    <section className={styles.section} aria-labelledby="partner-pathways-heading">
      <div className={styles.inner}>
        {/* Header Block */}
        <div className={styles.headerBlock}>
          <p className={styles.sectionLabel}>{data.sectionLabel}</p>
          <h2 id="partner-pathways-heading" className={styles.heading}>
            {data.heading}
          </h2>
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
          {activeTab && (
            <div className={styles.contentPanel} id={`panel-${activeTab.id}`}>
              <p className={styles.tabDescription}>{activeTab.description}</p>
              <div className={styles.benefitsGrid}>
                {activeTab.benefits.map(benefit => (
                  <div key={benefit.title} className={styles.benefitCard}>
                    <h3 className={styles.benefitTitle}>{benefit.title}</h3>
                    <ul className={styles.keyPointsList}>
                      {benefit.keyPoints.map((point, index) => (
                        <li key={index} className={styles.keyPoint}>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Verify component structure**

Check that:
- `use client` directive is present (required for state)
- `useState` imported from React
- Types imported from `@/data/types`
- SCSS module imported correctly
- All class names reference SCSS module
- ARIA attributes present: `role="tablist"`, `role="tab"`, `aria-selected`, `aria-controls`
- Tab switching logic works via `onClick`
- Keyboard handler prevents default on Enter/Space
- Heading has proper `id` for `aria-labelledby`
- Content panel has matching `id` for `aria-controls`

- [ ] **Step 3: Commit**

```bash
git add components/PartnerPathways/PartnerPathways.tsx
git commit -m "feat: create PartnerPathways client component with tab state management"
```

---

### Task 4: Create SCSS Styling Module

**Files:**
- Create: `/components/PartnerPathways/PartnerPathways.module.scss`

- [ ] **Step 1: Create the SCSS file**

Create `/components/PartnerPathways/PartnerPathways.module.scss`:

```scss
@reference "tailwindcss";

// ─── Section Container ────────────────────────────────────────────────────────

.section {
  width: 100%;
  background-color: var(--color-bg-white);
}

// ─── Inner Container ──────────────────────────────────────────────────────────

.inner {
  max-width: 1440px;
  margin: 0 auto;
  padding: var(--space-24) var(--space-20);
  display: flex;
  flex-direction: column;
  gap: var(--space-20);

  @media (max-width: 1023px) {
    padding: var(--space-20) var(--space-10);
    gap: var(--space-16);
  }

  @media (max-width: 767px) {
    padding: var(--space-16) var(--space-4);
    gap: var(--space-12);
  }
}

// ─── Header Block ────────────────────────────────────────────────────────────

.headerBlock {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-6);
  max-width: 820px;
  margin: 0 auto;
  text-align: center;
}

// ─── Section Label ────────────────────────────────────────────────────────────

.sectionLabel {
  font-family: var(--font-geist);
  font-weight: var(--font-weight-medium);
  font-size: var(--text-eyebrow-size);
  line-height: var(--text-eyebrow-lh);
  letter-spacing: var(--text-eyebrow-ls);
  text-transform: uppercase;
  color: var(--color-text-muted);
  margin: 0;
}

// ─── Heading ──────────────────────────────────────────────────────────────────

.heading {
  font-family: var(--font-geist);
  font-weight: var(--font-weight-bold);
  font-size: var(--text-heading-2-size);
  line-height: var(--text-heading-2-lh);
  letter-spacing: var(--text-heading-2-ls);
  color: var(--color-text-dark);
  margin: 0;

  @media (max-width: 767px) {
    font-size: var(--text-heading-3-size);
    letter-spacing: -0.5px;
  }
}

// ─── Intro Paragraph ──────────────────────────────────────────────────────────

.intro {
  font-family: var(--font-geist);
  font-weight: var(--font-weight-regular);
  font-size: var(--text-body-lg-size);
  line-height: var(--text-body-lg-lh);
  color: var(--color-text-secondary);
  margin: 0;
  max-width: 680px;
}

// ─── Tabs Container ───────────────────────────────────────────────────────────

.tabsContainer {
  display: flex;
  flex-direction: column;
  gap: var(--space-12);
  width: 100%;
}

// ─── Tab List ─────────────────────────────────────────────────────────────────

.tabList {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-8);
  border-bottom: 1px solid var(--color-border-default);
  padding-bottom: var(--space-4);

  @media (max-width: 767px) {
    gap: var(--space-6);
  }
}

// ─── Tab Button ───────────────────────────────────────────────────────────────

.tab {
  background: none;
  border: none;
  border-bottom: 2px solid transparent;
  padding: var(--space-4) 0;
  font-family: var(--font-geist);
  font-size: var(--text-body-lg-size);
  font-weight: var(--font-weight-medium);
  color: var(--color-text-body);
  cursor: pointer;
  transition: border-color 150ms ease, color 150ms ease;
  margin-bottom: calc(var(--space-4) * -1);

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }

  @media (hover: hover) {
    &:hover {
      color: var(--color-text-dark);
    }
  }

  &:focus {
    outline: 2px solid var(--color-accent);
    outline-offset: 4px;
  }
}

// ─── Tab Active ───────────────────────────────────────────────────────────────

.tabActive {
  border-bottom-color: var(--color-accent);
  color: var(--color-text-dark);
  font-weight: var(--font-weight-semibold);
}

// ─── Content Panel ────────────────────────────────────────────────────────────

.contentPanel {
  padding: var(--space-12) 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-8);
}

// ─── Tab Description ──────────────────────────────────────────────────────────

.tabDescription {
  font-family: var(--font-geist);
  font-size: var(--text-body-lg-size);
  font-weight: var(--font-weight-regular);
  line-height: var(--text-body-lg-lh);
  color: var(--color-text-body);
  margin: 0;
  margin-bottom: var(--space-4);
}

// ─── Benefits Grid ────────────────────────────────────────────────────────────

.benefitsGrid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-8);
  width: 100%;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-6);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    gap: var(--space-8);
  }
}

// ─── Benefit Card ─────────────────────────────────────────────────────────────

.benefitCard {
  padding: var(--space-8);
  border: 1px solid var(--color-border-default);
  background-color: var(--color-bg-white);
  display: flex;
  flex-direction: column;
  gap: var(--space-4);

  @media (min-width: 1024px) {
    padding: var(--space-10);
  }
}

// ─── Benefit Title ────────────────────────────────────────────────────────────

.benefitTitle {
  font-family: var(--font-geist);
  font-size: var(--text-heading-4-size);
  font-weight: var(--font-weight-semibold);
  line-height: var(--text-heading-4-lh);
  letter-spacing: var(--text-heading-4-ls);
  color: var(--color-text-dark);
  margin: 0;
  margin-bottom: var(--space-2);
}

// ─── Key Points List ──────────────────────────────────────────────────────────

.keyPointsList {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

// ─── Key Point ────────────────────────────────────────────────────────────────

.keyPoint {
  font-family: var(--font-geist);
  font-size: var(--text-body-sm-size);
  font-weight: var(--font-weight-regular);
  line-height: var(--text-body-sm-lh);
  color: var(--color-text-body);
  margin: 0;
  padding-left: var(--space-4);
  position: relative;

  &::before {
    content: '−';
    position: absolute;
    left: 0;
    color: var(--color-text-muted);
    font-weight: var(--font-weight-regular);
  }
}
```

- [ ] **Step 2: Verify SCSS structure**

Check that:
- All class names match component usage
- All tokens reference design system (no arbitrary values)
- Responsive breakpoints: mobile (<768px), tablet (768px-1023px), desktop (≥1024px)
- Hover state wrapped in `@media (hover: hover)`
- Reduced motion respected with `@media (prefers-reduced-motion: reduce)`
- Tab indicator uses bottom border (minimalist style)
- Benefits grid responsive: 1 col mobile, 2 col tablet, 3 col desktop
- Focus styles visible on tab buttons

- [ ] **Step 3: Commit**

```bash
git add components/PartnerPathways/PartnerPathways.module.scss
git commit -m "style: add minimalist tabbed interface styling for Partner Pathways"
```

---

### Task 5: Integrate Component into `/partners` Page

**Files:**
- Modify: `/app/partners/page.tsx`

- [ ] **Step 1: Read the current page file**

Open `/app/partners/page.tsx` and review the current structure (should have PartnersHero, PartnersEcosystem, HowWeCreateValue).

- [ ] **Step 2: Add import statements**

Add these imports after existing imports:

```typescript
import type { PartnerPathwaysData } from '@/data/types'
import PartnerPathways from '@/components/PartnerPathways/PartnerPathways'
import partnerPathwaysDataRaw from '@/data/partners/partner-pathways.json'
```

- [ ] **Step 3: Add data casting**

Add this line after existing data declarations (after `const howWeCreateValueData = ...`):

```typescript
const partnerPathwaysData = partnerPathwaysDataRaw as PartnerPathwaysData
```

- [ ] **Step 4: Add component to JSX**

Update the return statement to include PartnerPathways after HowWeCreateValue:

```typescript
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

- [ ] **Step 5: Verify integration**

Check that:
- All imports are present
- Data casting is correct
- Component is rendered in correct order (after HowWeCreateValue)
- No syntax errors
- TypeScript compilation passes

Run:
```bash
npx tsc --noEmit
```

Expected: No TypeScript errors.

- [ ] **Step 6: Commit**

```bash
git add app/partners/page.tsx
git commit -m "feat: integrate PartnerPathways component into /partners page"
```

---

### Task 6: Manual Testing & Verification

**Files:**
- Test: `/app/partners/page.tsx` (visual testing)

- [ ] **Step 1: Start development server**

```bash
npm run dev
```

Expected: Server starts on http://localhost:3000

- [ ] **Step 2: Navigate to /partners page**

Open http://localhost:3000/partners in your browser.

- [ ] **Step 3: Verify page structure**

Check that the page displays in order:
1. PartnersHero
2. PartnersEcosystem
3. HowWeCreateValue
4. **PartnerPathways** (new section)

- [ ] **Step 4: Test tab switching (click)**

- Click "Mining Partners" tab — verify content updates
- Click "Investment Partners" tab — verify content updates
- Verify bottom border indicator moves to active tab
- Verify text color changes on active tab

- [ ] **Step 5: Test keyboard navigation**

- Press Tab multiple times to focus on tab buttons
- Verify focus ring visible on each button
- With focus on a tab, press Enter or Space
- Verify tab becomes active and content updates

- [ ] **Step 6: Test desktop layout (1024px+)**

- Three benefit cards in a row
- Equal spacing and alignment
- Tab buttons horizontal
- Content readable

- [ ] **Step 7: Test tablet layout (768px-1023px)**

- Two benefit cards per row
- Tab buttons horizontal
- Responsive padding

- [ ] **Step 8: Test mobile layout (<768px)**

- One benefit card per row (stacked)
- Tab buttons horizontal (narrower)
- Text wraps appropriately
- Content readable

- [ ] **Step 9: Verify accessibility**

- Open DevTools → Accessibility tab
- Check ARIA attributes: `role="tablist"`, `role="tab"`, `aria-selected`, `aria-controls`
- Verify heading is `<h2>` (not h1)
- Check text contrast is WCAG AA compliant

- [ ] **Step 10: TypeScript compilation**

```bash
npx tsc --noEmit
```

Expected: No errors.

- [ ] **Step 11: Commit any fixes (if needed)**

If issues found during testing, fix them and commit:

```bash
git add .
git commit -m "fix: [describe issue and resolution]"
```

---

## Spec Coverage Verification

✅ **Data Types** — Task 1 adds PartnerPathwaysData, PartnerTab, TabContent to types.ts
✅ **Data File** — Task 2 creates JSON with two tabs and benefit structure
✅ **Component** — Task 3 implements PartnerPathways with state management and keyboard support
✅ **Styling** — Task 4 provides SCSS with minimalist tabs and responsive layout
✅ **Integration** — Task 5 adds component to /partners page
✅ **Testing** — Task 6 verifies all functionality and responsiveness
✅ **Keyboard Navigation** — Task 3 & 6 verify Tab/Enter/Space support
✅ **Accessibility** — Task 3 & 6 verify ARIA, focus states, semantics
✅ **Responsive Design** — Task 4 & 6 verify mobile/tablet/desktop layouts
✅ **Design Tokens** — Task 4 uses only design tokens, no arbitrary values
✅ **Content Placeholders** — Task 2 marks all copy for content agent to write

---

## Notes

- Component uses `use client` for state management (required for `useState`)
- All content is marked as placeholder — content agent will write production copy later
- Minimalist tab design (bottom border indicator, no background)
- Keyboard navigation follows standard accessibility patterns
- Mobile-first responsive approach
- Follows agentic architecture: data layer separate from presentation
- All styling uses design tokens only

---

## Ready for Content Agent Handoff

After frontend implementation is complete, the Content Agent will receive:
- Data file structure from Task 2
- Information architecture from design spec
- Target audience and tone guidelines
- Copy requirements for:
  - sectionLabel, heading, intro
  - Tab descriptions (mining partners, investment partners)
  - Benefit titles and key points (6 benefits total × 3 key points each)

Content agent will write production-grade institutional copy aligned with brand voice.
