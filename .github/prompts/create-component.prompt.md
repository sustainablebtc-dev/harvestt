# Create Component Prompt

## Purpose

Generate a reusable UI component specification or implementation plan that fits this repository's App Router, Tailwind, and SCSS conventions.

## Inputs

- component name
- purpose
- parent route or surface
- props
- states
- accessibility requirements
- whether it must be client-side

## Prompt Template

```md
Create a reusable component for this Next.js 16 project.

Component name: {{name}}
Purpose: {{purpose}}
Parent surface: {{surface}}
Props: {{props}}
States: {{states}}
Accessibility requirements: {{a11y}}
Client-side needed: {{client_side}}

Requirements:
- keep API minimal and composable
- state whether `use client` is required and why
- include exact file path
- include styling approach with Tailwind and SCSS compatibility

Return this exact structure:

## Component Contract
- File:
- Responsibility:
- Props:
- Client or server:

## States
- default:
- loading:
- empty:
- error:

## Accessibility
- semantics:
- keyboard behavior:

## Performance Notes
- bundle impact:
- memoization or streaming considerations:
```

## Example

Use for hero sections, feature grids, accordions, forms, testimonials, pricing cards, and nav elements.