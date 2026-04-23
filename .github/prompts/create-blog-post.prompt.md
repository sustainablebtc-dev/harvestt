# Create Blog Post Prompt

## Purpose

Generate a long-form, SEO-optimized article that is structured for editorial clarity, discoverability, and future schema enrichment.

## Inputs

- target keyword
- article angle
- audience
- funnel stage
- brand tone
- desired CTA
- optional internal links

## Prompt Template

```md
Create a production-ready blog post for this repository.

Target keyword: {{keyword}}
Article angle: {{angle}}
Audience: {{audience}}
Funnel stage: {{funnel_stage}}
Brand tone: {{tone}}
Desired CTA: {{cta}}
Internal links to include: {{internal_links}}

Requirements:
- write an original article, not an outline only
- include title, description, slug suggestion, H2/H3 structure, FAQ section, and CTA block
- keep formatting friendly for markdown and future JSON-LD extraction
- avoid filler and keyword stuffing

Return this exact structure:

## Metadata
- Title:
- Description:
- Suggested slug:

## Article
...full markdown article...

## Structured Assets
- FAQ pairs:
- Suggested internal links:
- CTA copy:
```

## Example

Use for resource-center articles, comparison posts, operational guides, or location-specific logistics explainers.