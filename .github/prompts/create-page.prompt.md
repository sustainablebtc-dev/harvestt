# Create Page Prompt

## Purpose

Generate a production-ready Next.js 16 App Router page with layout structure, route-local metadata, responsive UI requirements, and SEO-ready content slots.

## Inputs

- route path
- page objective
- audience
- primary CTA
- required sections
- data dependencies
- whether interactivity is needed

## Prompt Template

```md
Create a production-ready page for this Next.js 16 App Router project.

Route: {{route}}
Objective: {{objective}}
Audience: {{audience}}
Primary CTA: {{cta}}
Required sections: {{sections}}
Data dependencies: {{data_dependencies}}
Interactivity needed: {{interactivity}}

Requirements:
- prefer server components unless a client boundary is required
- include route-local metadata strategy
- include exact files to create or update
- include accessibility and responsive considerations
- include SEO notes

Return this exact structure:

## Build Plan
- Route structure:
- Components:
- Metadata:
- Client boundaries:

## Files
- path:
- purpose:

## Implementation Notes
- loading and error states:
- performance notes:
- content requirements:
```

## Example

Use for requests like a city landing page, campaign page, pricing page, or industry solution page.