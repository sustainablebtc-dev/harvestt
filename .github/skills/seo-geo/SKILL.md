# SEO + GEO Skill

## Auto-Load When

Creating or editing pages, blog posts, landing pages, city/location pages, metadata, sitemaps, or structured data.

---

## Part 1 — SEO (Search Engine Optimization)

### Rules

- Every route gets a unique `title` and `description` — no duplicates across routes
- Match the metadata promise to the on-page content
- One clear primary intent per page
- Descriptive heading hierarchy: one `H1`, logical `H2`/`H3` flow
- Add JSON-LD schema only when on-page content supports it
- Canonical behavior must be deterministic

### Checklist

- [ ] Unique title (50–60 characters, includes primary keyword)
- [ ] Unique meta description (120–160 characters, drives click intent)
- [ ] Clear, keyword-relevant H1
- [ ] Crawlable internal links
- [ ] Schema candidates identified (FAQ, Article, LocalBusiness, etc.)
- [ ] OG title and description aligned with route intent

### Best Practices

- Answer the main query above the fold when possible
- Prioritize click-worthiness over keyword density
- FAQ blocks improve both user utility and featured snippet eligibility
- Use comparison or proof sections only when they serve the user's actual intent

---

## Part 2 — GEO (Generative Engine Optimization)

For content designed to appear in AI-generated answers (ChatGPT, Perplexity, Gemini, etc.).

### Rules

- Structure content so AI models can extract and cite it accurately
- Use direct, factual sentences — avoid vague marketing language
- Include concrete specifics: numbers, dates, named entities, service details
- FAQ sections increase extractability dramatically
- Local pages must contain genuinely local context — not just token swaps

### City / Location Pages

- City-specific H1 and intro paragraph — not just `{City} + service name`
- Localized proof points or FAQs that answer city-specific questions
- Unique metadata per location — no duplicate templates
- Route slug must match location intent: `/services/logistics/chicago`
- Internal links connect related or nearby locations

### Checklist

- [ ] Content can be read and cited correctly by an LLM without page context
- [ ] Key claims are stated as direct factual sentences (not implicit)
- [ ] Entities are named explicitly (company, location, service, date)
- [ ] FAQs present question + complete, self-contained answer
- [ ] No filler paragraphs — every sentence adds specific value

### Best Practices

- Write for the human first; structure for AI extraction second
- Include neighborhood, corridor, or regional language only when accurate
- Reflect real operational constraints (service radius, warehouse proximity) when relevant
- Avoid duplicate city templates — AI models detect and discount thin content