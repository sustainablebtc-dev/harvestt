# Accessibility Skill

## Auto-Load When

Building any UI: forms, navigation, modals, accordions, cards, interactive content, or media.

## Rules

- Semantic HTML before ARIA — use the right element before adding roles
- All interactive controls need accessible names (via label, aria-label, or aria-labelledby)
- Keyboard navigation must be complete — no mouse-only interactions
- Focus must remain visible at all times — never suppress outline without a custom replacement
- Color contrast: minimum 4.5:1 for text, 3:1 for large text and UI components
- Motion must respect `prefers-reduced-motion` — provide a reduced or no-motion fallback

## Checklist

- [ ] Heading order is logical (H1 → H2 → H3, no skips)
- [ ] All form fields have associated labels
- [ ] Focus states are visible (not just browser default — verify against design tokens)
- [ ] Tab order follows visual reading order
- [ ] Error messages are visible and announced (not color-only)
- [ ] Status changes are communicated (aria-live or visible feedback)
- [ ] Interactive elements use native `button`, `a`, `input` — not `div` or `span` with onClick
- [ ] Images have meaningful alt text or empty `alt=""` if decorative
- [ ] Modals trap focus correctly and restore on close
- [ ] Animation pauses or is absent when `prefers-reduced-motion: reduce`

## Semantic HTML Priorities

```tsx
// ✅ Correct
<button onClick={handleClick}>Submit</button>
<nav aria-label="Main navigation">
<ul role="list">

// ❌ Wrong
<div onClick={handleClick}>Submit</div>
<div class="nav">
```

## Best Practices

- Test without a mouse — keyboard-only navigation reveals the most issues
- Test with a screen reader (VoiceOver on macOS, NVDA on Windows) for complex interactions
- Write microcopy (labels, errors, CTAs) that is understandable out of visual context
- Do not rely on placeholder text as the only label for form fields