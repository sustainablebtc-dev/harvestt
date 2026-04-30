# Typography System

> Source: Extracted from Figma `FRYoDiBSYuje0Nk9fNedRp`  
> Cross-reference: [`tokens.json`](../tokens.json), [`tailwind/tailwind.config.ts`](../tailwind/tailwind.config.ts)

---

## Font Families

| Family | Role | Weights Used |
|---|---|---|
| **Geist** | Sole typeface — all UI, headings, body, buttons, labels | 400 (Regular), 500 (Medium), 600 (SemiBold), 700 (Bold) |
| **Inter** | **Italic only** — use when Geist italic is unavailable or insufficient | 400i, 500i |

> **Rule:** All new code uses `font-geist`. Inter is permitted **only** for `italic` style (e.g. block-quotes, pull-quotes) and only when Geist's italic variant does not meet the design need. Never use Inter for headings, buttons, labels, or body text.

### Loading (Next.js App Router)

```typescript
// app/layout.tsx
import { Geist, Inter } from 'next/font/google'

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist',
  weight: ['400', '500', '600', '700'],
})

// Only load Inter if the project uses italic passages
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500'],
  style: ['italic'],   // italic only — do not load upright weights
})
```

---

## Type Scale

All sizes are extracted directly from Figma node styles. Tracking values are in `px` as shown in Figma (converted to `em` equivalents in Tailwind).

### Display / Heading Scale

| Token | Size | Weight | Line Height | Letter Spacing | Usage |
|---|---|---|---|---|---|
| `display-1` | 64px | 700 Bold | 1.2 | -2px (−0.03125em) | Hero H1 |
| `display-2` | 48px | 700 Bold | 1.2 | -1px (−0.0208em) | CTA section heading |
| `heading-2` | 36px | 700 Bold | 1.2 | -1px (−0.0278em) | Section H2 (Market Insights, Regulatory) |
| `heading-3` | 24px | 700 Bold | 1.2 | -1px (−0.0417em) | Stat numbers (780 EH/s, $15T+) |
| `heading-4` | 20px | 600 SemiBold | 1.2 | -0.17px (−0.0085em) | Card titles (H5 equivalent) |
| `heading-5` | 14px | 600 SemiBold | 1.2 | -0.17px (−0.0121em) | Table row titles, small headings |

### Body / Paragraph Scale

| Token | Size | Weight | Line Height | Letter Spacing | Usage |
|---|---|---|---|---|---|
| `body-lg` | 16px | 400 Regular | 1.6 | 0 | Primary paragraph text |
| `body-sm` | 14px | 400 Regular | 1.6 | 0 | Secondary body text, footer links |
| `body-xs` | 12px | 400 Regular | 1.6 | 0 | Fine print, addresses |

### Label / Functional Scale

| Token | Size | Weight | Line Height | Letter Spacing | Usage |
|---|---|---|---|---|---|
| `label-lg` | 13px | 500 Medium | 1.4 | 0.75px (0.0577em) | Button text — ALL CAPS |
| `label-md` | 11px | 500 Medium | 1.4 | 1.25px (0.1136em) | Section labels — ALL CAPS |
| `label-sm` | 10px | 600 SemiBold | 1.4 | 1px (0.1em) | Footer headings, stat labels — ALL CAPS |
| `label-xs` | 10px | 400 Regular | 1.4 | 1.25px (0.125em) | Timestamps, categories, read-time |
| `tag` | 11px | 500 Medium | — | 0.5px (0.0455em) | Tag chip text |

---

## Complete Type Tokens

### Figma Style → System Token Mapping

| Figma Style Name | System Token | Notes |
|---|---|---|
| `Heading/2` | `heading-2` | 36px Bold |
| `Heading/3` | `heading-4` | 20px SemiBold |
| `Heading/4` | `heading-5` | 14px SemiBold |
| `Heading/Label` | `label-md` | 11px Medium, uppercase |
| `Heading/Label Small` | `label-xs` | 10px Regular, uppercase |
| `Heading/Label Small Uppercase` | `label-xs` | Same as Label Small |
| `Heading/Footer heading` | `label-sm` | 10px SemiBold, uppercase |
| `Para/Regular` | `body-lg` | 16px Regular |
| `Para/Small` | `body-sm` | 14px Regular |
| `Para/Extra Small` | `body-xs` | 12px Regular |

> **Note:** `display-1` (64px) and `display-2` (48px) do not have named Figma styles — they are hardcoded. These should be promoted to named styles.

---

## Tailwind `fontSize` Config

```typescript
fontSize: {
  // Display
  'display-1': ['64px', { lineHeight: '1.2', letterSpacing: '-0.03125em', fontWeight: '700' }],
  'display-2': ['48px', { lineHeight: '1.2', letterSpacing: '-0.0208em', fontWeight: '700' }],

  // Headings
  'heading-2': ['36px', { lineHeight: '1.2', letterSpacing: '-0.0278em', fontWeight: '700' }],
  'heading-3': ['24px', { lineHeight: '1.2', letterSpacing: '-0.0417em', fontWeight: '700' }],
  'heading-4': ['20px', { lineHeight: '1.2', letterSpacing: '-0.0085em', fontWeight: '600' }],
  'heading-5': ['14px', { lineHeight: '1.2', letterSpacing: '-0.0121em', fontWeight: '600' }],

  // Body
  'body-lg': ['16px', { lineHeight: '1.6', letterSpacing: '0' }],
  'body-sm': ['14px', { lineHeight: '1.6', letterSpacing: '0' }],
  'body-xs': ['12px', { lineHeight: '1.6', letterSpacing: '0' }],

  // Labels
  'label-lg': ['13px', { lineHeight: '1.4', letterSpacing: '0.0577em' }],
  'label-md': ['11px', { lineHeight: '1.4', letterSpacing: '0.1136em' }],
  'label-sm': ['10px', { lineHeight: '1.4', letterSpacing: '0.1em' }],
  'label-xs': ['10px', { lineHeight: '1.4', letterSpacing: '0.125em' }],

  // Tags
  'tag': ['11px', { lineHeight: '1', letterSpacing: '0.0455em' }],
}
```

---

## Responsive Typography Rules

See [`layout/responsive.md`](../layout/responsive.md) for full breakpoint behavior.

| Token | Mobile (< md) | Tablet (md) | Desktop (lg+) |
|---|---|---|---|
| `display-1` | `36px` | `48px` | `64px` |
| `display-2` | `32px` | `40px` | `48px` |
| `heading-2` | `24px` | `32px` | `36px` |
| `heading-3` | `20px` | `20px` | `24px` |
| `body-lg` | `16px` | `16px` | `16px` |
| `label-md` | `11px` | `11px` | `11px` |

> Body and label sizes do not change across breakpoints. Only display/heading sizes scale.

---

## Typography Usage Rules

1. All headings, buttons, labels, and body text must use `font-geist`
2. `font-inter` is allowed **only** for italic style (e.g. `font-inter italic`) — never for upright text
3. `label-*` tokens are **always uppercase** — use `uppercase` utility class, never manual `text-transform` in CSS
4. Letter spacing for labels is intentionally wide — do not reduce it
5. Never mix `heading-4` (SemiBold) weight with `heading-2` or `heading-3` Bold — the weight contrast is intentional
6. Body text never uses tracking (letter spacing 0) — do not add `tracking-*` to body copy
7. Line height of headings is always `1.2`, body is always `1.6` — these are the only two line heights in the system
