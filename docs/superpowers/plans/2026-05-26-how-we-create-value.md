# How We Create Value Section Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Implement a responsive three-card "How We Create Value" section on the `/partners` page that explains core value pillars (Access, Transparency, Sustainability) with blueprint-style illustrations and subtle background pattern.

**Architecture:** Data-driven component with server-side rendering. Data layer (`types.ts` + JSON file) separate from presentation layer (components + SCSS). Background image + overlay pattern follows existing design system patterns. Cards use a three-column responsive grid with hover effects and left-border accents.

**Tech Stack:** Next.js, React (server components), TypeScript, SCSS modules, design tokens, JSON data files

---

## File Structure

**Files to Create:**
- `/data/partners/how-we-create-value.json` — content data
- `/components/HowWeCreateValue/HowWeCreateValue.tsx` — main section component
- `/components/HowWeCreateValue/ValueCard.tsx` — individual card component
- `/components/HowWeCreateValue/HowWeCreateValue.module.scss` — all styling
- `/public/how-we-create-value-bg.jpg` — geometric blueprint background pattern

**Files to Modify:**
- `/data/types.ts` — add `HowWeCreateValueData` and `ValueCard` interfaces
- `/app/partners/page.tsx` — import and render new component

---

## Task Breakdown

### Task 1: Add Types to `/data/types.ts`

**Files:**
- Modify: `/data/types.ts` (end of file, before comments)

- [ ] **Step 1: Read the current types file**

Open `/data/types.ts` and find the "Future Extensions" comment section near line 128.

- [ ] **Step 2: Add new interfaces**

Insert before the "Future Extensions" comment:

```typescript
// ─── How We Create Value ────────────────────────────────────────────────────

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

- [ ] **Step 3: Verify syntax**

Check that the TypeScript is valid (no missing commas, braces, semicolons).

- [ ] **Step 4: Commit**

```bash
git add data/types.ts
git commit -m "types: add HowWeCreateValueData and ValueCard interfaces"
```

---

### Task 2: Create Data File `/data/partners/how-we-create-value.json`

**Files:**
- Create: `/data/partners/how-we-create-value.json`

- [ ] **Step 1: Create the file**

Create `/data/partners/how-we-create-value.json` with this content:

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

- [ ] **Step 2: Verify JSON syntax**

Validate that the JSON is well-formed (use `jq` or a JSON linter if available).

- [ ] **Step 3: Commit**

```bash
git add data/partners/how-we-create-value.json
git commit -m "data: add how-we-create-value content for /partners page"
```

---

### Task 3: Create ValueCard Sub-Component

**Files:**
- Create: `/components/HowWeCreateValue/ValueCard.tsx`

- [ ] **Step 1: Create the component file**

Create `/components/HowWeCreateValue/ValueCard.tsx`:

```typescript
import styles from './HowWeCreateValue.module.scss'

interface ValueCardProps {
  title: string
  description: string
  supportingStatement: string
}

export default function ValueCard({
  title,
  description,
  supportingStatement,
}: ValueCardProps) {
  return (
    <div className={styles.card}>
      {/* Blueprint SVG Illustration */}
      <svg
        className={styles.illustration}
        viewBox="0 0 80 80"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path
              d="M 20 0 L 0 0 0 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              opacity="0.3"
            />
          </pattern>
        </defs>
        {/* Outer frame */}
        <rect x="10" y="10" width="60" height="60" fill="none" stroke="currentColor" strokeWidth="1.5" />
        {/* Grid background */}
        <rect x="10" y="10" width="60" height="60" fill="url(#grid)" />
        {/* Inner geometric accent */}
        <circle cx="40" cy="40" r="15" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.6" />
        {/* Corner details */}
        <line x1="10" y1="10" x2="20" y2="10" stroke="currentColor" strokeWidth="1.5" />
        <line x1="10" y1="10" x2="10" y2="20" stroke="currentColor" strokeWidth="1.5" />
        <line x1="70" y1="10" x2="60" y2="10" stroke="currentColor" strokeWidth="1.5" />
        <line x1="70" y1="10" x2="70" y2="20" stroke="currentColor" strokeWidth="1.5" />
      </svg>

      {/* Card Content */}
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDescription}>{description}</p>
      <p className={styles.supportingStatement}>{supportingStatement}</p>
    </div>
  )
}
```

- [ ] **Step 2: Verify component structure**

Check that:
- Props are correctly destructured
- SVG illustration is semantically marked as decorative (`aria-hidden="true"`)
- All required elements (title, description, supporting statement) are rendered
- Classes reference the SCSS module

- [ ] **Step 3: Commit**

```bash
git add components/HowWeCreateValue/ValueCard.tsx
git commit -m "feat: create ValueCard sub-component with blueprint SVG illustration"
```

---

### Task 4: Create Main HowWeCreateValue Component

**Files:**
- Create: `/components/HowWeCreateValue/HowWeCreateValue.tsx`

- [ ] **Step 1: Create the component file**

Create `/components/HowWeCreateValue/HowWeCreateValue.tsx`:

```typescript
import type { HowWeCreateValueData } from '@/data/types'
import ValueCard from './ValueCard'
import styles from './HowWeCreateValue.module.scss'

interface HowWeCreateValueProps {
  data: HowWeCreateValueData
}

export default function HowWeCreateValue({ data }: HowWeCreateValueProps) {
  return (
    <section className={styles.section} aria-labelledby="how-we-create-value-heading">
      <div className={styles.section__overlay} />
      <div className={styles.inner}>
        {/* Header Block */}
        <div className={styles.headerBlock}>
          <p className={styles.sectionLabel}>{data.sectionLabel}</p>
          <h2 id="how-we-create-value-heading" className={styles.heading}>
            {data.heading}
          </h2>
          <div className={styles.accentLine} aria-hidden="true" />
          <p className={styles.intro}>{data.intro}</p>
        </div>

        {/* Cards Grid */}
        <div className={styles.cardsGrid}>
          {data.cards.map((card, index) => (
            <ValueCard
              key={`${card.title}-${index}`}
              title={card.title}
              description={card.description}
              supportingStatement={card.supportingStatement}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Verify component structure**

Check that:
- Data prop is correctly typed
- Section has proper `aria-labelledby` linking to heading
- Heading is `<h2>` (h1 is in hero)
- Cards are mapped from data array
- Keys are stable (not array index alone, but combined with card title)
- All SCSS classes exist (will verify in next task)

- [ ] **Step 3: Commit**

```bash
git add components/HowWeCreateValue/HowWeCreateValue.tsx
git commit -m "feat: create HowWeCreateValue main component with card grid"
```

---

### Task 5: Create SCSS Module with All Styling

**Files:**
- Create: `/components/HowWeCreateValue/HowWeCreateValue.module.scss`

- [ ] **Step 1: Create the SCSS file**

Create `/components/HowWeCreateValue/HowWeCreateValue.module.scss`:

```scss
@reference "tailwindcss";

// ─── Section Container ────────────────────────────────────────────────────────

.section {
  position: relative;
  width: 100%;
  background-color: var(--color-bg-white);
  background-image: url('/how-we-create-value-bg.jpg');
  background-size: cover;
  background-position: center;
}

.section__overlay {
  content: '';
  position: absolute;
  inset: 0;
  background-color: var(--color-bg-muted-overlay);
  pointer-events: none;
}

// ─── Inner Container ──────────────────────────────────────────────────────────

.inner {
  position: relative;
  z-index: 1;
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

// ─── Accent Line ──────────────────────────────────────────────────────────────

.accentLine {
  width: var(--space-12);
  height: 1px;
  background-color: var(--color-accent);
  flex-shrink: 0;
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

// ─── Cards Grid ───────────────────────────────────────────────────────────────

.cardsGrid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-4);
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

// ─── Card Container ───────────────────────────────────────────────────────────

.card {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  background-color: var(--color-bg-white);
  border: 1px solid var(--color-border-default);
  border-left: 3px solid var(--color-accent);
  padding: var(--space-8);
  transition: box-shadow 150ms cubic-bezier(0.4, 0, 0.2, 1),
              background-color 150ms cubic-bezier(0.4, 0, 0.2, 1);

  @media (min-width: 1024px) {
    padding: var(--space-10);
  }

  @media (hover: hover) {
    &:hover {
      background-color: var(--color-bg-muted);
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
}

// ─── Card Illustration ────────────────────────────────────────────────────────

.illustration {
  width: 64px;
  height: 64px;
  color: var(--color-text-muted);
  flex-shrink: 0;

  @media (min-width: 1024px) {
    width: 80px;
    height: 80px;
  }
}

// ─── Card Title ───────────────────────────────────────────────────────────────

.cardTitle {
  font-family: var(--font-geist);
  font-weight: var(--font-weight-semibold);
  font-size: var(--text-heading-4-size);
  line-height: var(--text-heading-4-lh);
  letter-spacing: var(--text-heading-4-ls);
  color: var(--color-text-dark);
  margin: 0;
}

// ─── Card Description ─────────────────────────────────────────────────────────

.cardDescription {
  font-family: var(--font-geist);
  font-weight: var(--font-weight-regular);
  font-size: var(--text-body-sm-size);
  line-height: var(--text-body-sm-lh);
  color: var(--color-text-body);
  margin: 0;
}

// ─── Supporting Statement ─────────────────────────────────────────────────────

.supportingStatement {
  font-family: var(--font-geist);
  font-weight: var(--font-weight-medium);
  font-size: var(--text-label-md-size);
  line-height: var(--text-label-md-lh);
  letter-spacing: var(--text-label-md-ls);
  color: var(--color-text-muted);
  margin: 0;
  margin-top: auto;
}
```

- [ ] **Step 2: Verify SCSS structure**

Check that:
- All class names match those referenced in `.tsx` files (`.section`, `.inner`, `.headerBlock`, `.sectionLabel`, `.heading`, `.accentLine`, `.intro`, `.cardsGrid`, `.card`, `.illustration`, `.cardTitle`, `.cardDescription`, `.supportingStatement`)
- All tokens used exist in `globals.scss` (e.g., `--color-accent`, `--space-8`, `--font-geist`)
- Responsive breakpoints align with design spec (mobile < 768px, tablet 768px-1023px, desktop ≥ 1024px)
- Hover state uses `@media (hover: hover)` (only on devices that support hover)
- Reduced motion is respected with `@media (prefers-reduced-motion: reduce)`

- [ ] **Step 3: Commit**

```bash
git add components/HowWeCreateValue/HowWeCreateValue.module.scss
git commit -m "style: add complete styling for HowWeCreateValue component"
```

---

### Task 6: Create Background Pattern Asset

**Files:**
- Create: `/public/how-we-create-value-bg.jpg`

- [ ] **Step 1: Create or obtain background pattern**

You need to create a subtle geometric blueprint pattern image and save it as `/public/how-we-create-value-bg.jpg`.

**Specifications:**
- Format: JPG (for compression efficiency)
- Dimensions: 1920x1080px minimum (or use a vector tool to generate at higher resolution)
- Color scheme: Soft gray or neutral tones
- Pattern: Grid-like architectural blueprint aesthetic
- Subtlety: Low contrast, muted appearance (will be overlaid with 95% opacity white)
- Style: Clean lines, no Bitcoin imagery, no charts, no generic business photos

**Options for creation:**
- Use a design tool (Figma, Illustrator) to create geometric blueprint pattern
- Generate using CSS or SVG and export as image
- Use an AI image generator with specific prompt: "Subtle geometric blueprint pattern with clean architectural lines, soft gray tones, minimal contrast, institutional feel"

Save the file to `/public/how-we-create-value-bg.jpg`.

- [ ] **Step 2: Test image visibility**

After creating the file, the SCSS will reference it via `background-image: url('/how-we-create-value-bg.jpg')`. The image will be overlaid with `var(--color-bg-muted-overlay)` (rgba(245, 245, 245, 0.95)) for readability.

- [ ] **Step 3: Commit**

```bash
git add public/how-we-create-value-bg.jpg
git commit -m "assets: add how-we-create-value background pattern"
```

---

### Task 7: Integrate Component into `/partners` Page

**Files:**
- Modify: `/app/partners/page.tsx`

- [ ] **Step 1: Read the current page file**

Open `/app/partners/page.tsx` and review the current structure (should have PartnersHero and PartnersEcosystem).

- [ ] **Step 2: Add import statement**

Add these imports at the top of the file (after existing imports):

```typescript
import type { HowWeCreateValueData } from '@/data/types'
import HowWeCreateValue from '@/components/HowWeCreateValue/HowWeCreateValue'
import howWeCreateValueDataRaw from '@/data/partners/how-we-create-value.json'
```

- [ ] **Step 3: Cast data variable**

Add this line after the existing data variable declarations (after `const ecosystemData = ...`):

```typescript
const howWeCreateValueData = howWeCreateValueDataRaw as HowWeCreateValueData
```

- [ ] **Step 4: Add component to JSX**

In the `return` statement, add the new component after `<PartnersEcosystem>`:

```typescript
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

The complete modified section should look like:

```typescript
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

- [ ] **Step 5: Verify integration**

Check that:
- All imports are present
- Data casting is correct
- Component is rendered in the correct order (after PartnersEcosystem)
- No syntax errors

- [ ] **Step 6: Commit**

```bash
git add app/partners/page.tsx
git commit -m "feat: integrate HowWeCreateValue component into /partners page"
```

---

### Task 8: Manual Testing & Verification

**Files:**
- Test: `/app/partners/page.tsx` (visual testing)

- [ ] **Step 1: Start development server**

```bash
npm run dev
```

Expected: Next.js dev server starts on `http://localhost:3000`

- [ ] **Step 2: Navigate to /partners page**

Open `http://localhost:3000/partners` in your browser.

- [ ] **Step 3: Verify page structure**

Check that the page has, in order:
1. PartnersHero (headline, body, CTAs, ecosystem diagram)
2. PartnersEcosystem (the network section with three columns)
3. **HowWeCreateValue** (new section with heading, intro, and three cards)

- [ ] **Step 4: Test desktop layout (1440px+)**

- Resize browser to desktop width (1440px)
- Verify:
  - Three cards appear in a single row
  - Cards have equal width
  - Header block (sectionLabel, heading, accentLine, intro) is centered
  - Each card shows: illustration (blueprint SVG), title, description, supporting statement
  - Left border on each card is visible (orange/accent color)
  - Spacing between cards matches `var(--space-8)` (32px)
  - Background pattern is visible behind content (muted by overlay)

- [ ] **Step 5: Test tablet layout (768px - 1023px)**

- Resize browser to tablet width (e.g., 800px)
- Verify:
  - Two cards appear per row
  - Third card appears on second row, centered
  - Spacing between cards matches `var(--space-6)` (24px)
  - Padding matches `var(--space-10)` (40px)

- [ ] **Step 6: Test mobile layout (< 768px)**

- Resize browser to mobile width (e.g., 375px)
- Verify:
  - One card per row
  - Cards are stacked vertically
  - Spacing between cards matches `var(--space-4)` (16px)
  - Padding matches `var(--space-4)` (16px)
  - Text remains readable
  - Illustration scales appropriately (64px on mobile)

- [ ] **Step 7: Test hover state (desktop only)**

- On desktop width (1440px), hover over a card
- Verify:
  - Background color changes to `var(--color-bg-muted)` (light gray)
  - Subtle shadow appears: `0 4px 16px rgba(0, 0, 0, 0.06)`
  - Transition is smooth (150ms)
  - Hover state does NOT appear on mobile/tablet

- [ ] **Step 8: Test reduced motion preference**

- Open DevTools → Rendering → Emulate CSS media feature prefers-reduced-motion: reduce
- Hover over a card on desktop
- Verify:
  - Hover state applies instantly (no transition)
  - No animation occurs

- [ ] **Step 9: Verify accessibility**

- Open DevTools → Accessibility inspector
- Check that:
  - Section has proper `aria-labelledby` linking to heading
  - Heading is `<h2>` (nested under `<h1>` from hero)
  - SVG illustration has `aria-hidden="true"`
  - Text contrast is WCAG AA compliant (especially supporting statement vs. white background)
  - No keyboard traps exist
  - Tab order is logical

- [ ] **Step 10: Check TypeScript compilation**

```bash
npx tsc --noEmit
```

Expected: No TypeScript errors.

- [ ] **Step 11: Commit verification notes (optional)**

If any adjustments were made during testing, commit them separately:

```bash
git add .
git commit -m "fix: [describe any visual/layout fixes made during testing]"
```

---

## Spec Coverage Verification

✅ **Data Types** — Task 1 adds `HowWeCreateValueData` and `ValueCard` to types.ts  
✅ **Data File** — Task 2 creates JSON with three cards (Access, Transparency, Sustainability)  
✅ **Components** — Tasks 3-4 implement `ValueCard` and `HowWeCreateValue`  
✅ **Styling** — Task 5 provides SCSS with responsive breakpoints, hover effects, tokens  
✅ **Background Pattern** — Task 6 creates/adds background image asset  
✅ **Integration** — Task 7 adds component to /partners page  
✅ **Testing** — Task 8 verifies layout, interactions, accessibility  
✅ **Responsive Design** — Covered in Tasks 5 & 8 (mobile/tablet/desktop)  
✅ **Hover Interactions** — Task 5 (SCSS) & Task 8 (testing)  
✅ **Accessibility** — Task 5 (semantic HTML, ARIA), Task 8 (verification)  
✅ **Design Tokens** — All tasks use `var(--token-name)` exclusively  
