# Performance Skill

## Auto-Load When

Building routes, media-heavy sections, client components, data-fetching flows, or image/asset-heavy pages.

## Rules

- Keep client bundles minimal — every `use client` must earn its place
- Default to server rendering — defer client-side logic until necessary
- Lazy-load non-critical UI below the fold
- Fix image and container dimensions to prevent layout shift (CLS)
- Avoid unnecessary re-renders and duplicate data fetching

## Image Optimization

- Always provide `width` and `height` on `<Image>` components
- Use `priority` only for above-the-fold images (hero, LCP candidate)
- Set `alt` text that describes the image — empty string `""` for decorative images
- Compress source assets before import
- Prefer SVG for icons and simple graphics
- Reserve layout space to prevent shift — never rely on auto-sizing for critical images

## Checklist

- [ ] Client components justified — no unnecessary `use client`
- [ ] Images have explicit width and height
- [ ] Only above-the-fold images use `priority`
- [ ] Above-the-fold content is not hidden behind lazy loading
- [ ] Loading states are intentional (not spinners blocking content)
- [ ] Large third-party libraries evaluated before inclusion
- [ ] Network boundaries are cached or streamed deliberately
- [ ] No duplicate data fetching across components

## Best Practices

- Reduce hydration surface — small, isolated client islands
- Prefer CSS transitions over JavaScript animations for UI feedback
- Use `next/font` for zero-layout-shift font loading
- Stream large data surfaces with `Suspense` boundaries where it improves perceived performance
- Profile before optimizing — fix measured bottlenecks, not imagined ones