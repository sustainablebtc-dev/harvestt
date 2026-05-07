# Border Radius System

> Source: Extracted from Figma `FRYoDiBSYuje0Nk9fNedRp`  
> Cross-reference: [`tokens.json`](../tokens.json), [`tailwind/tailwind.config.ts`](../tailwind/tailwind.config.ts)

---

## System: Zero Radius

**The Sustainable Bitcoin Protocol design system uses zero border radius everywhere.**

Every container, button, card, badge, input, and table cell is **square-cornered**. This is a deliberate, non-negotiable design choice that communicates institutional precision and authority. Rounded corners are associated with consumer products — this system deliberately rejects that aesthetic.

---

## Radius Tokens

| Token | Value | Tailwind Class | Usage |
|---|---|---|---|
| `radius-none` | `0px` | `rounded-none` | All components — universal |

No other radius values exist in the design system.

---

## CSS Custom Property

```scss
:root {
  --radius-none: 0px;
}
```

---

## Tailwind Config

```typescript
borderRadius: {
  none: '0px',
  DEFAULT: '0px',
}
```

> Setting `DEFAULT` to `0px` ensures that the base `rounded` class produces square corners, preventing accidental rounding from utility classes.

---

## Enforcement Rules

1. **Never use `rounded`, `rounded-md`, `rounded-lg`, or any other radius class** — all are replaced by `rounded-none`
2. Images must also be `rounded-none` — `overflow-hidden rounded-none` if a containing element needs clipping
3. Badges and tags are square: `px-2 py-1 rounded-none`
4. Status badges, dropdowns, modals, tooltips — all use `rounded-none`
5. Third-party component libraries must override their default border-radius to match this token

---

## Future Consideration

If a secondary product or consumer-facing surface is introduced, a `radius-sm: 2px` token may be added. Any deviation from zero radius requires explicit design approval and a new token — it must never be an arbitrary inline override.
