# Shadow System

> Source: Extracted from Figma `FRYoDiBSYuje0Nk9fNedRp`  
> Cross-reference: [`tokens.json`](../tokens.json), [`tailwind/tailwind.config.ts`](../tailwind/tailwind.config.ts)

---

## Philosophy

The design system uses **one shadow** — applied to the navigation bar only. The shadow functions as a **separator**, not a depth indicator. No other elevation shadows exist in the design.

See [`principles.md`](../principles.md#4-shadow-philosophy) for philosophy rationale.

---

## Shadow Tokens

| Token | Value | CSS Equivalent | Tailwind Token | Usage |
|---|---|---|---|---|
| `shadow-nav` | `0px 1px 0px #a3a3a3` | `box-shadow: 0 1px 0 #a3a3a3` | `shadow-nav` | Navigation bar bottom separator |
| `shadow-none` | `none` | `box-shadow: none` | `shadow-none` | Default — no shadow |

> **Note:** Figma outputs this as `drop-shadow(0px 1px 0px #a3a3a3)` on the nav element. This is a filter drop-shadow in Figma but should be implemented as `box-shadow` in CSS for performance and predictability.

---

## CSS Custom Properties

```scss
:root {
  --shadow-nav:  0 1px 0 #a3a3a3;
  --shadow-none: none;
}
```

---

## Tailwind Config

```typescript
boxShadow: {
  nav:  '0 1px 0 #a3a3a3',
  none: 'none',
}
```

---

## Usage Rules

1. **`shadow-nav` is exclusively for the fixed/sticky navigation bar** — do not repurpose it
2. Cards use `border border-[#e5e5e5]` for definition — not shadow
3. Modals and overlays (if introduced) must use a `rgba(0,0,0,0.5)` overlay backdrop — not box-shadow
4. Do not introduce new elevation shadows without a design token addition

---

## Future Shadow Scale (If Needed)

If the system evolves to require elevation levels, follow this naming pattern and add to `tokens.json`:

```json
"shadow-sm":   "0 1px 2px rgba(0,0,0,0.06)",
"shadow-md":   "0 4px 12px rgba(0,0,0,0.08)",
"shadow-lg":   "0 8px 24px rgba(0,0,0,0.12)",
"shadow-xl":   "0 16px 48px rgba(0,0,0,0.16)"
```

Do not implement these until a concrete design need is confirmed.
