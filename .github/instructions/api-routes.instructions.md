---
description: Apply when implementing route handlers, server actions, form submissions, validation, or any third-party API integration.
applyTo: "app/api/**,lib/actions/**,lib/integrations/**"
---

# API Routes & Server Actions Instructions

## When to Use What

| Surface | Use Case |
|---|---|
| Server action | Form mutations, user-triggered data writes from UI |
| Route handler | Webhooks, external API callbacks, public endpoints |

## Route Handler Pattern

```ts
// app/api/leads/route.ts
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const body = await req.json()

  // 1. Validate input at the boundary
  const parsed = LeadSchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json({ error: 'Invalid payload' }, { status: 400 })
  }

  // 2. Business logic
  await submitLead(parsed.data)

  // 3. Return minimal response
  return NextResponse.json({ ok: true })
}
```

## Server Action Pattern

```ts
// lib/actions/submit-lead.ts
'use server'

import { z } from 'zod'

const Schema = z.object({ email: z.string().email(), name: z.string().min(1) })

export async function submitLead(formData: FormData) {
  const parsed = Schema.safeParse(Object.fromEntries(formData))
  if (!parsed.success) throw new Error('Invalid form data')

  await sendToCRM(parsed.data)
}
```

## Rules

1. **Validate all inputs** at the boundary — never trust incoming data.
2. **Never expose secrets** to client code or client payloads.
3. **Error responses must not leak internals** — user-safe messages only.
4. **Document failure modes**: timeout, upstream failure, validation failure.
5. **Prefer idempotent submissions** — handle duplicate requests gracefully.
6. **Rate limiting**: document assumptions; implement where abuse risk exists.

## Validation

Use a schema library (Zod recommended). Validate shape, type, and constraints before any processing:

```ts
const Schema = z.object({
  email: z.string().email(),
  message: z.string().min(10).max(2000),
})
```

## Error Handling

```ts
try {
  await externalService(data)
} catch (err) {
  console.error('[submit-lead] upstream failure', err)
  return NextResponse.json({ error: 'Submission failed. Try again.' }, { status: 502 })
}
```

## Security Checklist

- [ ] Input validated with schema before use
- [ ] Secrets accessed via `process.env` — not hardcoded
- [ ] Error messages do not reveal stack traces or internal paths
- [ ] Webhook origin verified (signature check)
- [ ] Methods restricted — reject unexpected HTTP methods explicitly