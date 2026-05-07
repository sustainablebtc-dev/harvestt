# Design Principles

> Source: Figma `FRYoDiBSYuje0Nk9fNedRp`  
> Cross-reference: [`tokens/colors.md`](./tokens/colors.md), [`tokens/typography.md`](./tokens/typography.md)

---

## 1. Visual Philosophy

**Institutional Minimalism.**

The Sustainable Bitcoin Protocol visual language is built on restraint. Every element earns its presence by serving information. Decoration exists only where it signals structure (accent dividers) or status (colour-coded badges). The aesthetic target is a Bloomberg terminal crossed with a premium asset management firm — trusted, dense, and precise.

| Principle | Implementation |
|---|---|
| **Precision** | Sharp corners, 1px borders, exact spacing from an 8pt grid |
| **Trust** | Near-black brand colour, no gradients, no rounded UI patterns |
| **Legibility** | High-contrast text, generous line heights in body copy |
| **Hierarchy** | Typography scale drives visual weight, not size alone |
| **Restraint** | Accent orange used only for structural punctuation (dividers) |

---

## 2. Density

**Airy at macro scale. Compact at micro scale.**

- Section-level spacing is generous: `96px` vertical padding for content sections, `64px` for footer blocks
- Component-level spacing is tight: badges use `px-8 py-4`, table rows use `h-72px`, nav uses `py-16`
- This contrast creates breathing room at page level while keeping data surfaces dense and scannable

---

## 3. Border Usage

**Structural, not decorative.**

| Context | Treatment |
|---|---|
| Section dividers | Bottom border `border-[#e5e5e5]` — separates logical regions |
| Component boundaries | `border border-[#e5e5e5]` on cards, inputs, tables |
| Primary buttons | `border border-[#1b1b1b]` — matches background for optical consistency |
| Ghost CTA links | Bottom border only: `border-b border-[#1b1b1b]` |
| Accent section markers | Top border `border-t border-[#ff6e00]` — high attention, used once |
| Inline dividers | `bg-[#e5e5e5] w-px self-stretch` — 1px vertical separator between columns |

**No decorative borders.** Every border carries semantic meaning: separation, state, or emphasis.

---

## 4. Shadow Philosophy

**Flat-first. Shadow as separator.**

The design uses a single shadow:

```css
drop-shadow(0px 1px 0px #a3a3a3)
```

Applied **only** to the navigation bar to separate it from page content. This is a separator shadow, not a depth shadow. There are no card shadows, panel shadows, or floating shadows anywhere in the design.

**Rule:** If an element needs elevation, use a border. Use shadow only to separate sticky/fixed elements from scrollable content below.

---

## 5. Motion Philosophy

**Functional transitions only.**

The design is static (Figma). Based on the visual language, the implied motion system is:

| Interaction | Behaviour |
|---|---|
| Button hover | Background opacity or border lightening — no scale transforms |
| Link hover | Underline reveal or colour shift to `#1b1b1b` |
| Nav transitions | Instant on scroll-triggered states |
| Page transitions | Fade-in, 150ms ease-in |
| Data loading | Skeleton shimmer using `bg-[#f5f5f5]` base tone |

**Easing:** `cubic-bezier(0.4, 0, 0.2, 1)` (standard ease-in-out)  
**Duration baseline:** 150ms for micro, 250ms for layout, 400ms for page-level

**No bounce, no spring, no exaggerated motion.** Institutional users interpret animation as noise.

---

## 6. Colour Intent

**Meaning, not decoration.**

| Colour | Role | Context |
|---|---|---|
| `#1b1b1b` | Brand authority | Primary buttons, body text, borders |
| `#ff6e00` | Structural accent | Section title underlines only |
| `#289e4b` | Positive status | Compliance badges, green metrics |
| `#a3a3a3` | De-emphasis | Labels, muted text, helper copy |
| `#e5e5e5` | Structure | All dividers, borders |
| `#f5f5f5` | Neutral surface | Tag backgrounds, section backgrounds |
| `#fff6f0` | Warm highlight | Stats strip — single attention break |

**Rule:** Never use `#ff6e00` for interactive elements. It is a structural colour, not an action colour.

---

## 7. Iconography Philosophy

- Icons are **line-based SVGs** at `14px` and `16px`
- Used inline with text (arrow-right on CTAs, chevron-down on dropdowns)
- No filled icons — line-only maintains the minimal aesthetic
- Icon colour inherits from parent text colour — no independent icon colours

---

## 8. Imagery Philosophy

- Photography is **full-bleed, desaturated-adjacent** (high contrast building imagery)
- Vectorized logos and partner marks are monochrome
- Images never have border radius — they are rectangular, full-bleed or cropped
- `object-cover` with aspect-ratio constraints — no image distortion
