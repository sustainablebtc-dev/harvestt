# Color System

> Source: Extracted from Figma `FRYoDiBSYuje0Nk9fNedRp` — node `5:1089`  
> Cross-reference: [`tokens.json`](../tokens.json), [`tailwind/tailwind.config.ts`](../tailwind/tailwind.config.ts)

---

## Color Palette

### Brand Colors

| Token Name | HEX | HSL | Usage |
|---|---|---|---|
| `brand` | `#1b1b1b` | `hsl(0, 0%, 11%)` | Primary buttons, key text, borders, nav background |
| `accent` | `#ff6e00` | `hsl(26, 100%, 50%)` | Divider lines under section titles only |

### Semantic Colors

| Token Name | HEX | HSL | Usage |
|---|---|---|---|
| `success` | `#289e4b` | `hsl(138, 58%, 40%)` | Compliance badges, positive metrics |
| `success-bg` | `rgba(40,158,75,0.1)` | `hsla(138, 58%, 40%, 0.1)` | Badge background for success status |

### Text Colors

| Token Name | HEX | HSL | Usage |
|---|---|---|---|
| `text-primary` | `#1b1b1b` | `hsl(0, 0%, 11%)` | Body text, nav items, headings |
| `text-dark` | `#000000` | `hsl(0, 0%, 0%)` | H1, key headings (pure black) |
| `text-body` | `#3a3a3a` | `hsl(0, 0%, 23%)` | Primary paragraph text |
| `text-secondary` | `#555555` | `hsl(0, 0%, 33%)` | Secondary body text, descriptions |
| `text-muted` | `#a3a3a3` | `hsl(0, 0%, 64%)` | Labels, timestamps, helper text |

### Background Colors

| Token Name | HEX | HSL | Usage |
|---|---|---|---|
| `bg-white` | `#ffffff` | `hsl(0, 0%, 100%)` | Default page background |
| `bg-muted` | `#f5f5f5` | `hsl(0, 0%, 96%)` | Section backgrounds, tag chips |
| `bg-warm` | `#fff6f0` | `hsl(21, 100%, 97%)` | Stats bar — warm highlight strip |
| `bg-dark` | `#1b1b1b` | `hsl(0, 0%, 11%)` | Footer background, primary buttons |

### Border Colors

| Token Name | HEX | HSL | Usage |
|---|---|---|---|
| `border-default` | `#e5e5e5` | `hsl(0, 0%, 90%)` | All dividers, card borders, row separators |
| `border-brand` | `#1b1b1b` | `hsl(0, 0%, 11%)` | Button borders, ghost CTA underlines |
| `border-accent` | `#ff6e00` | `hsl(26, 100%, 50%)` | Section top-border accent (CTA section) |
| `border-separator` | `#a3a3a3` | `hsl(0, 0%, 64%)` | Nav drop-shadow color |

---

## CSS Custom Properties

Add to `app/globals.scss` or a `:root` block:

```scss
:root {
  /* Brand */
  --color-brand:        #1b1b1b;
  --color-accent:       #ff6e00;

  /* Semantic */
  --color-success:      #289e4b;
  --color-success-bg:   rgba(40, 158, 75, 0.10);

  /* Text */
  --color-text-primary:   #1b1b1b;
  --color-text-dark:      #000000;
  --color-text-body:      #3a3a3a;
  --color-text-secondary: #555555;
  --color-text-muted:     #a3a3a3;

  /* Backgrounds */
  --color-bg-white:     #ffffff;
  --color-bg-muted:     #f5f5f5;
  --color-bg-warm:      #fff6f0;
  --color-bg-dark:      #1b1b1b;

  /* Borders */
  --color-border-default:   #e5e5e5;
  --color-border-brand:     #1b1b1b;
  --color-border-accent:    #ff6e00;
  --color-border-separator: #a3a3a3;
}
```

---

## Tailwind v4 Token Mapping

These are the `--color-*` values that map directly to Tailwind via `tailwind.config.ts`:

```typescript
colors: {
  brand:    '#1b1b1b',
  accent:   '#ff6e00',
  success:  '#289e4b',
  'success-bg': 'rgba(40,158,75,0.10)',

  text: {
    primary:   '#1b1b1b',
    dark:      '#000000',
    body:      '#3a3a3a',
    secondary: '#555555',
    muted:     '#a3a3a3',
  },

  bg: {
    white:  '#ffffff',
    muted:  '#f5f5f5',
    warm:   '#fff6f0',
    dark:   '#1b1b1b',
  },

  border: {
    default:   '#e5e5e5',
    brand:     '#1b1b1b',
    accent:    '#ff6e00',
    separator: '#a3a3a3',
  },
}
```

---

## Usage Rules

1. **Never use `#ff6e00` for interactive states** (hover, active, focus) — it is a structural accent only
2. **`bg-warm` (`#fff6f0`)** must only be used for the stats/metric strip pattern — not general backgrounds
3. **`text-dark` (`#000000`)** is reserved for display headings (H1, hero) only — body text uses `text-primary`
4. **Status colours** must always appear as a pair: `success` text on `success-bg` background
5. The `#555555` and `#3a3a3a` distinction: `#3a3a3a` is for primary prose under section headings, `#555555` for secondary/supporting prose

---

## Figma Inconsistencies

| ID | Issue |
|---|---|
| INC-04 | `#fff6f0` warm tint is used only in the stats bar. Promote to named token for consistent reuse. |
