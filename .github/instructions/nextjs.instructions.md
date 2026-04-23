# Next.js 16 Instructions

## Scope

Apply to App Router routes, layouts, loading states, metadata, route handlers, server actions, and component boundaries.

## Rules

1. Use App Router patterns only.
2. Prefer server components.
3. Add `use client` only when browser-only behavior is necessary.
4. Keep route segments meaningful and stable.
5. Use route-local metadata exports where possible.
6. Treat route handlers and server actions as explicit server boundaries.
7. Avoid mixing server-only modules into client components.

## Routing Guidance

- place route files under `app/`
- colocate route-specific components only when they are not broadly reusable
- use nested layouts to share structure intentionally
- add `loading.tsx`, `error.tsx`, or `not-found.tsx` only when the route behavior warrants them

## Data and Rendering Guidance

- fetch on the server by default
- stream or defer only when it improves user experience
- avoid converting whole routes to client components because one widget needs interactivity
- keep cache strategy intentional and documented for data-bound surfaces

## Metadata Guidance

- set titles and descriptions per route
- keep metadata aligned with actual on-page content
- use structured data only when supported by visible content

## Boundary Checks

- no secrets in client code
- no unnecessary browser hooks in server components
- no server imports leaking into client bundles

## Delivery Checklist

- route structure correct
- server/client boundaries justified
- metadata included or explicitly deferred
- loading and error behavior considered
- no outdated Pages Router patterns introduced