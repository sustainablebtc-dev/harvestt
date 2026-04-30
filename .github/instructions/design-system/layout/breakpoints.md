# Breakpoints

> Source: Inferred from Figma desktop-first layout (`1440px` canvas)  
> Cross-reference: [`layout/grid.md`](./grid.md), [`layout/responsive.md`](./responsive.md), [`tailwind/tailwind.config.ts`](../tailwind/tailwind.config.ts)

---

## Breakpoint System

**Mobile-first.** All base styles target mobile. Breakpoint modifiers add complexity as viewport grows.

| Token | Min Width | Intent |
|---|---|---|
| `sm` | 640px | Large phones, small tablets |
| `md` | 768px | Tablets, portrait iPad |
| `lg` | 1024px | Laptops, landscape tablets |
| `xl` | 1280px | Small desktops |
| `2xl` | 1440px | Primary design target — design was built at this width |

---

## Tailwind `screens` Config

```typescript
screens: {
  sm:  '640px',
  md:  '768px',
  lg:  '1024px',
  xl:  '1280px',
  '2xl': '1440px',
}
```

---

## Design Target

The Figma design was built at **1440px** viewport width. All desktop specifications in this system reference this width.

Content is constrained to `1280px` via horizontal padding (`px-20` = 80px each side), so layouts from `xl` (1280px) to `2xl` (1440px) appear visually identical.

---

## Breakpoint Usage Decision Tree

```
Mobile  → Single column, full width, compact padding
sm      → Minimal layout change, still single column
md      → Two-column layouts unlock (feature sections)
lg      → Navigation expands to full horizontal, three-column grids appear
xl      → Full desktop layout, content width reaches 1280px
2xl     → Page frame reaches 1440px, gutters expand
```

---

## Container Behaviour per Breakpoint

| Breakpoint | Container Width | Horizontal Padding | Content Area |
|---|---|---|---|
| Default (mobile) | 100% | 20px | `calc(100% - 40px)` |
| sm (640px) | 100% | 40px | `calc(100% - 80px)` |
| md (768px) | 100% | 40px | `calc(100% - 80px)` |
| lg (1024px) | 100% | 80px | `calc(100% - 160px)` |
| xl (1280px) | 1280px | 80px | 1280px |
| 2xl (1440px) | 1440px | 80px | 1280px |

---

## Key Layout Transitions

| Breakpoint | What Changes |
|---|---|
| `md` | Navbar collapses to hamburger menu below this |
| `md` | 2-column feature sections stack to 1-column below this |
| `lg` | Full navigation bar becomes visible |
| `lg` | 3-column card grids appear |
| `lg` | Hero text + image side-by-side layout activates |
| `xl` | Container width caps at 1280px |
| `2xl` | Outer page frame reaches 1440px |
