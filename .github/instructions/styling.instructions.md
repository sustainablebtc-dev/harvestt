---
applyTo: "**/*.tsx,**/*.scss"
---

# Styling Instructions

## The Rule

All styles live in SCSS. Tailwind utilities are allowed only inside `@apply` in `.scss` files. No Tailwind classes in JSX `className` props.

## SCSS Module Pattern

Every component gets a colocated `.module.scss` file:

```
components/
  Hero/
    Hero.tsx
    Hero.module.scss
```

Import and use:

```tsx
import styles from './Hero.module.scss'

export default function Hero() {
  return <section className={styles.hero}>...</section>
}
```

## Tailwind via @apply

```scss
// ✅ Correct
.hero {
  @apply flex flex-col items-center text-center;
  padding: var(--space-24) var(--space-20);
  background: var(--color-bg-white);
}

// ❌ Wrong
<section className="flex flex-col items-center text-center py-24 px-20 bg-white">
```

## Design Token Usage

```scss
// ✅ Correct
.card {
  gap: var(--space-6);
  border: 1px solid var(--color-border-default);
  color: var(--color-text-primary);
}

// ❌ Wrong
.card {
  gap: 24px;
  border: 1px solid #e5e5e5;
  color: #1b1b1b;
}
```

## Responsive Styles

Use `@media` or Tailwind responsive modifiers inside `@apply`:

```scss
.section {
  padding: var(--space-12) var(--space-4);

  @media (min-width: 768px) {
    padding: var(--space-24) var(--space-20);
  }
}
```

## Forbidden Patterns

- Tailwind classes in JSX `className`
- Hardcoded hex colors in SCSS
- Hardcoded pixel values not from the spacing scale
- `style={{}}` props for values that have design tokens
- Global style mutations inside component SCSS modules