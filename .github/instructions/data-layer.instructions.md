---
description: Apply when touching any TypeScript or TSX file, or any file inside the data/ directory. Enforces the single source of truth for structured content.
applyTo: "**/*.tsx,**/*.ts,data/**"
---

# Data Layer Instructions

## Rule

All structured and repeatable content lives in `/data`. Components never hardcode content — they consume it from `/data`.

## Directory Structure

```
data/
  types.ts                  ← All TypeScript interfaces (single source)
  nav/
    navbar.json             ← Navigation links, login, CTA
  footer/
    footer-links.json       ← Footer link groups (array of FooterLinkGroup)
    social.json             ← Social media links (array of SocialLink)
  site/
    config.json             ← Site name, tagline, URL, default metadata
  content/
    faqs.md                 ← FAQ content (structured markdown, H2 per question)
```

## Format by Content Type

| Content Type | Format | Location |
|---|---|---|
| Navigation, footer, social | JSON | `data/nav/`, `data/footer/` |
| Site config, default metadata | JSON | `data/site/` |
| FAQs, long-form content, blog | Markdown | `data/content/` |

**Never mix formats.** Config and structured UI data → JSON. Human-readable long-form → Markdown.

## Importing JSON (TypeScript)

`resolveJsonModule` is enabled — JSON files are imported as typed modules. Always assert the type at the import site:

```ts
import navbarData from '@/data/nav/navbar.json'
import type { NavbarData } from '@/data/types'

const navbar = navbarData as NavbarData
```

Or use a typed loader function:

```ts
// lib/data.ts
import type { NavbarData } from '@/data/types'
import navbarRaw from '@/data/nav/navbar.json'

export const navbarData: NavbarData = navbarRaw
```

## Importing Markdown

Use `fs` and `path` in a server component or server utility. Never import markdown files directly in client components.

```ts
// lib/content.ts  (server-only)
import fs from 'fs'
import path from 'path'

export function getFaqsMarkdown(): string {
  return fs.readFileSync(path.join(process.cwd(), 'data/content/faqs.md'), 'utf-8')
}
```

Parse the markdown with a library such as `gray-matter` + `remark` when HTML output is needed.

## Adding New Data

1. Define the TypeScript interface in `data/types.ts` first.
2. Create the JSON or Markdown file in the correct subdirectory.
3. Add a typed import in the consuming component or utility.
4. Do not duplicate the data anywhere in the codebase.

### New JSON file checklist

- [ ] Interface defined in `data/types.ts`
- [ ] File placed in the correct `data/` subdirectory
- [ ] Imported with type assertion at the call site
- [ ] No equivalent hardcoded content remains in a component

### New Markdown file checklist

- [ ] H2 headings for each top-level item (maps to schema entry)
- [ ] Answers are self-contained — no cross-references required to understand them
- [ ] Parsed server-side only — never passed as raw markdown to a client component

## Component Consumption Pattern

```tsx
// ✅ Correct — data from /data, mapped in the component
import navbarData from '@/data/nav/navbar.json'
import type { NavbarData } from '@/data/types'

const { links, login, cta } = navbarData as NavbarData

export default function Navbar() {
  return (
    <nav>
      <ul>
        {links.map((link) => (
          <li key={link.href}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

// ❌ Wrong — hardcoded content inside a component
export default function Navbar() {
  return (
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
      </ul>
    </nav>
  )
}
```

## FAQ Markdown Format

Each question is an H2. Answers are plain paragraphs. This maps directly to JSON-LD FAQ schema with no transformation overhead.

```md
## What is Sustainable Bitcoin Protocol?

Sustainable Bitcoin Protocol is an institutional market infrastructure platform...

## Who does Sustainable Bitcoin Protocol serve?

Sustainable Bitcoin Protocol serves institutional partners...
```

## Future Extensions

- **CMS integration**: Replace JSON file imports with a CMS API call behind the same typed interface. Components do not change.
- **Localization**: Add a `locale` field to each JSON structure. Create a `lib/i18n.ts` loader that selects the correct locale at runtime. Data files become `navbar.en.json`, `navbar.fr.json`, etc.
- **Dynamic content**: When data becomes dynamic (database-driven), move the fetch into a server component or server action that returns the same typed shape. Components do not change.

## Violations

The reviewer agent will flag as `high` severity:

- Any navigation link hardcoded inside a component instead of sourced from `data/nav/navbar.json`
- Any footer link or social link hardcoded inside a component
- Any JSON data file without a corresponding interface in `data/types.ts`
- Any markdown file imported or parsed inside a client component