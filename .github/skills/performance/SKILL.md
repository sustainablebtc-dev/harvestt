# Performance Skill

## Auto-Load When

- building routes, media-heavy sections, client components, animations, or data-fetching flows

## Rules

- keep client bundles minimal
- default to server rendering
- lazy-load only meaningful non-critical UI
- fix layout dimensions to reduce shift
- avoid unnecessary re-renders and duplicate fetching

## Checklist

- client components justified
- images sized intentionally
- above-the-fold content prioritized
- loading states intentional
- large libraries challenged before inclusion
- network boundaries cached or streamed deliberately

## Best Practices

- reduce hydration scope
- choose CSS transitions over heavy JS animation when possible
- profile form and route bottlenecks before optimizing blindly