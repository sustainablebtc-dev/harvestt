# Responsiveness Skill

## Auto-Load When

Building any page, layout, grid, form, navigation, or interactive surface.

## Rules

- Mobile-first layout decisions — design for small screens first, enhance for larger
- Content must remain usable at all major breakpoints: mobile (< 768px), tablet (768–1024px), desktop (> 1024px)
- Tap targets must be practical on touch devices (minimum 44×44px)
- Never rely on hover-only interactions for critical functionality
- Overflow must be intentional — no unintended horizontal scroll

## Breakpoints (from design system)

Align to breakpoints documented in `.github/instructions/design-system/layout/breakpoints.md`.

## Checklist

- [ ] Small-screen spacing holds — no elements bleeding off-screen
- [ ] Text does not overflow or truncate unintentionally
- [ ] Grid collapses cleanly at each breakpoint
- [ ] Forms remain usable on narrow viewports
- [ ] Navigation collapses to a mobile pattern
- [ ] Sticky or fixed UI does not obscure content
- [ ] No hover-only interactions on critical CTAs or navigation

## SCSS Pattern

Use design tokens for responsive spacing. Use `@apply` with Tailwind responsive modifiers inside SCSS:

```scss
.grid {
  @apply grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3;
  gap: var(--space-6);
}

.section {
  padding: var(--space-12) var(--space-4);

  @media (min-width: 768px) {
    padding: var(--space-24) var(--space-20);
  }
}
```

## Best Practices

- Test at 375px (iPhone SE), 768px (tablet), and 1440px (desktop) at minimum
- Prioritize content order on small screens over desktop symmetry
- Do not hide content on mobile unless it is genuinely not needed