# Security Skill

## Auto-Load When

- handling user input, auth-sensitive logic, webhooks, route handlers, third-party APIs, or file uploads

## Rules

- validate and sanitize untrusted input
- keep secrets server-side only
- reject unexpected methods or payload shapes
- minimize sensitive logging
- defend public forms against abuse

## Checklist

- input validation present
- error responses do not leak internals
- secrets not exposed to client code
- webhook or origin verification considered
- rate-limit or abuse mitigation considered

## Best Practices

- align controls to OWASP-style risk reduction
- document trust boundaries explicitly
- prefer allowlists over broad acceptance when practical