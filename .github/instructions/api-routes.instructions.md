# API Routes Instructions

## Scope

Apply to `app/api/**/route.ts`, server actions, webhook handlers, and server-side integration adapters.

## Rules

1. Validate all untrusted input.
2. Keep request parsing, validation, business logic, and upstream calls clearly separated.
3. Return stable HTTP status codes and safe response bodies.
4. Reject unsupported methods or malformed payloads deterministically.
5. Keep secrets and tokens server-side only.

## Route Handler Conventions

- define the supported methods explicitly
- parse input once
- validate before side effects
- map upstream failures into bounded responses
- avoid leaking stack traces or vendor internals

## Server Action Conventions

- use only when tightly coupled to a form or route interaction
- validate submitted fields server-side
- keep action results typed and predictable
- avoid embedding unrelated network orchestration inside UI components

## Operational Guidance

- define timeout expectations
- define retry policy only for idempotent operations
- log enough for debugging without exposing sensitive values
- document required environment variables

## Delivery Checklist

- validation present
- success and failure paths covered
- abuse or spam mitigation considered
- boundary choice justified