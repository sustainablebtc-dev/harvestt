# Spacing System

> Source: Extracted from Figma `FRYoDiBSYuje0Nk9fNedRp`  
> Cross-reference: [`tokens.json`](../tokens.json), [`tailwind/tailwind.config.ts`](../tailwind/tailwind.config.ts)

---

## Base Unit

**8px base grid.**

All spacing values are multiples of 4px, with the primary rhythm on 8px steps. Half-steps (4px) exist for tight micro-spacing only.

---

## Spacing Scale

| Token | Value | Tailwind Class | Usage Context |
|---|---|---|---|
| `space-0` | 0px | `p-0`, `m-0` | Resets |
| `space-1` | 4px | `p-1`, `gap-1` | Badge padding (y-axis), micro gaps |
| `space-2` | 8px | `p-2`, `gap-2` | Icon gaps, tag padding (x), small label gaps |
| `space-3` | 12px | `p-3`, `gap-3` | Footer link list gaps |
| `space-4` | 16px | `p-4`, `gap-4` | Standard component gaps, body text spacing |
| `space-5` | 20px | `p-5`, `gap-5` | Footer section internal gaps |
| `space-6` | 24px | `p-6`, `gap-6` | Card internal padding, heading-to-content gaps |
| `space-8` | 32px | `p-8`, `gap-8` | Section internal element groups |
| `space-9` | 33px | — | Button horizontal padding (non-standard — see note) |
| `space-10` | 40px | `p-10` | — |
| `space-12` | 48px | `p-12`, `gap-12` | Accent divider width, column gaps in cards |
| `space-16` | 64px | `p-16`, `gap-16` | Footer vertical padding, secondary section spacing |
| `space-17` | 17px | — | Button vertical padding (non-standard — see note) |
| `space-20` | 80px | `p-20`, `gap-20` | Horizontal page gutter, large section column gaps |
| `space-24` | 96px | `p-24` | Section vertical padding (top/bottom) |

> **Non-standard values: `33px` and `17px`**  
> Button padding (`px-33 py-17`) appears in Figma as hardcoded values not on the 8pt grid. These are intentional optical choices for the button component size. They do not belong in the general spacing scale and are contained within the button component token only. See [`components/button.md`](../components/button.md).

---

## Spacing Usage by Context

### Page / Section Level

| Context | Top | Right | Bottom | Left |
|---|---|---|---|---|
| Content sections | `96px` | `80px` | `96px` | `80px` |
| Footer block | `64px` | `80px` | `64px` | `80px` |
| CTA section | `92px` | `80px` | `92px` | `80px` |
| Stats bar | `32px` | `80px` | `32px` | `80px` |

### Component Level

| Component | Padding | Gap |
|---|---|---|
| Navbar | `py-16 px-80` | `gap-80` (logo↔nav), `gap-32` (nav items) |
| Primary button | `px-33 py-17` | — |
| Nav CTA button | `px-25 py-9` | — |
| Card | — | `gap-24` (internal), `gap-48` (between cards) |
| Badge/Tag | `px-8 py-4` | — |
| Table row | `px-20 py-16` | `gap-4` (title↔subtitle) |
| Section heading block | — | `gap-8` (label↔heading) |
| Content columns | — | `gap-131` (two-column layout) |

---

## Tailwind Spacing Extension

The default Tailwind spacing scale covers most values. Add only the non-standard values:

```typescript
spacing: {
  // Non-standard button padding — isolated to button component
  '8.5':  '33px',   // button px
  '4.25': '17px',   // button py

  // Large gutters
  '20':   '80px',   // horizontal page gutter (overrides Tailwind default 80=320px)
  '24':   '96px',   // section padding (overrides Tailwind default 96=384px)

  // Accent marker
  '12':   '48px',   // accent divider / column gap
}
```

> **Note on overrides:** Tailwind's default scale uses a 4px multiplier where `20` = `80px` already. Check the exact Tailwind version config to avoid double-overriding. In Tailwind v3+, `p-20` = `80px` natively. Verify against `tailwind.config.ts`.

---

## Spacing Rules

1. All spacing must come from the scale above — no arbitrary pixel values in component files
2. `33px` and `17px` are **button-only** values — do not use them elsewhere
3. Section vertical padding is always `96px` — do not deviate without a design token change
4. Horizontal page gutter is always `80px` — this creates the `1280px` content width within `1440px` container
5. Use `gap-*` for flex/grid gaps — do not simulate gaps with margins
