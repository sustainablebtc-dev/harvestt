# Grid System

> Source: Extracted from Figma `FRYoDiBSYuje0Nk9fNedRp`  
> Cross-reference: [`layout/breakpoints.md`](./breakpoints.md), [`tailwind/tailwind.config.ts`](../tailwind/tailwind.config.ts)

---

## Container

| Property | Value | Notes |
|---|---|---|
| Max width | `1440px` | Full page frame |
| Content width | `1280px` | `1440px − (2 × 80px gutter)` |
| Horizontal gutter | `80px` each side | `px-20` in Tailwind (80px) |
| Centering | `mx-auto` | Container is always centered |

---

## Grid Columns

The design uses **CSS Flexbox with fixed-gap column layouts**, not CSS Grid. All multi-column patterns are flex rows.

### 3-Column Layout (Cards / Insights)

```
[col] [1px divider] [col] [1px divider] [col]
```

| Property | Value |
|---|---|
| Columns | 3 equal-width |
| Column flex | `flex-[1_0_0]` |
| Gap | `gap-48` (48px) |
| Divider | `bg-[#e5e5e5] w-px self-stretch` |

### 2-Column Layout (Regulatory Infrastructure)

```
[576px col] [128px gap] [573px col]
```

| Property | Value |
|---|---|
| Left column | `w-[576px]` |
| Right column | `w-[573px]` |
| Gap | `128px` (`gap-32`) |

### Stat Strip (4-Column)

The stats bar uses `justify-between` on a single flex row — no fixed column width.

---

## Footer Grid

| Section | Layout |
|---|---|
| Brand column | `w-[394px]` fixed |
| Nav columns | 3× `flex-[1_0_0]` equal |
| Outer gap | `gap-80` (80px) |

---

## Tailwind Container Config

```typescript
container: {
  center: true,
  padding: {
    DEFAULT: '1.25rem',  // 20px on mobile
    sm: '2.5rem',        // 40px on sm
    lg: '5rem',          // 80px on lg+
  },
  screens: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1440px',
  },
},
```

---

## Column Gap Scale

| Context | Gap Value | Tailwind |
|---|---|---|
| Cards (3-col) | 48px | `gap-12` |
| Footer columns | 80px | `gap-20` |
| Two-column feature | 128px | `gap-32` |
| Logo ↔ Nav | 80px | `gap-20` |
| Nav items | 32px | `gap-8` |
| Button group | 16px | `gap-4` |

---

## Responsive Column Collapse

See [`layout/responsive.md`](./responsive.md) for full breakpoint grid behavior.

| Layout | Mobile | Tablet | Desktop |
|---|---|---|---|
| 3-col cards | 1 col | 2 col | 3 col |
| 2-col feature | 1 col | 1 col | 2 col |
| Stats strip | 2×2 grid | 2×2 grid | 1 row |
| Footer | stacked | 2-col | 4-col |
