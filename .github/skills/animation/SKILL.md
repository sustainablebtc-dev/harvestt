# Animation Skill

## Auto-Load When

- introducing transitions, reveals, page motion, or interactive feedback

## Rules

- motion must support comprehension, not decorate everything
- preserve usability under reduced-motion preferences
- avoid blocking first paint with animation code
- do not animate layout properties if transform or opacity works

## Checklist

- motion has a purpose
- reduced-motion fallback exists
- no critical content hidden too long
- duration and easing are consistent

## Best Practices

- use motion sparingly on high-value surfaces
- stagger only where it clarifies content hierarchy