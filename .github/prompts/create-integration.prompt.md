# Create Integration Prompt

## Purpose

Generate a robust integration plan for forms, APIs, webhooks, CRMs, or server-side automation in this Next.js 16 project.

## Inputs

- integration name
- external system
- trigger surface
- payload shape
- validation rules
- auth model
- success and failure behavior

## Prompt Template

```md
Design an integration for this Next.js 16 App Router project.

Integration name: {{name}}
External system: {{system}}
Trigger surface: {{trigger_surface}}
Payload shape: {{payload}}
Validation rules: {{validation}}
Auth model: {{auth}}
Success behavior: {{success_behavior}}
Failure behavior: {{failure_behavior}}

Requirements:
- choose between server action and route handler with justification
- include exact files to create or update
- define validation, timeout, retry, and error-mapping strategy
- include security notes and testing requirements

Return this exact structure:

## Integration Plan
- Boundary choice:
- File map:
- Validation:
- Error handling:
- Security:

## Test Matrix
- happy path:
- validation failure:
- upstream failure:
- abuse cases:
```

## Example

Use for lead capture, newsletter sync, webhook receivers, payment callbacks, or CRM submissions.