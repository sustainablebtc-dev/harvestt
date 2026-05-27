# Legal Policy Pages Design Specification
**Date:** 2026-05-27  
**Pages:** Privacy Policy, Terms & Conditions, Disclaimer  
**Route:** `/legal/*`  
**Content Source:** Static HTML files  
**Navigation Placement:** Footer only

---

## 1. Overview

Three legal policy pages will be added to the website at `/legal/privacy-policy`, `/legal/terms-and-conditions`, and `/legal/disclaimer`. Each page will:
- Display static HTML content stored as files in `/public/legal/`
- Use a shared `PolicyPage` wrapper component for consistent rendering
- Apply sanitization for security using `DOMPurify`
- Follow a simple layout: heading + content section
- Be referenced only in the footer navigation (no main navbar)

---

## 2. Data Layer & File Structure

### Public Assets
```
/public/legal/
  ├── privacy-policy.html              (User-provided content)
  ├── terms-and-conditions.html        (To be provided)
  └── disclaimer.html                  (To be provided)
```

HTML files are stored as-is with no modifications. Each file contains only the `<body>` content (no `<html>` or `<head>` tags).

### Data Configuration
Update `/data/footer/footer-links.json` to include policy links in a "Legal" section:

```json
{
  "label": "Legal",
  "items": [
    { "label": "Privacy Policy", "href": "/legal/privacy-policy" },
    { "label": "Terms & Conditions", "href": "/legal/terms-and-conditions" },
    { "label": "Disclaimer", "href": "/legal/disclaimer" }
  ]
}
```

The footer component will iterate over this data to render the policy links.

---

## 3. Route Structure

```
/app/legal/
  ├── privacy-policy/
  │   └── page.tsx              (Server component, exports metadata)
  ├── terms-and-conditions/
  │   └── page.tsx              (Server component, exports metadata)
  └── disclaimer/
      └── page.tsx              (Server component, exports metadata)
```

Each route page is a simple server component that:
- Renders the shared `PolicyPage` component with a `policyName` prop
- Exports SEO metadata (title, description)
- Does not require any interactive state

---

## 4. Component Design

### PolicyPage Component
**Location:** `/components/Legal/PolicyPage.tsx`  
**Type:** Client component (uses `useEffect` for file loading)  
**Props:**
- `policyName: string` — slug name (e.g., "privacy-policy")

**Responsibilities:**
1. Fetch HTML file from `/public/legal/{policyName}.html`
2. Sanitize HTML content using `DOMPurify`
3. Render in styled container
4. Handle loading and error states
5. Apply responsive layout

**Implementation Details:**
- Uses `fetch()` in `useEffect` to load HTML file
- Sanitizes with `DOMPurify.sanitize()` to prevent XSS
- Renders content using `dangerouslySetInnerHTML` (safe after sanitization)
- Shows loading state while fetching
- Shows error state if file is missing or fetch fails
- Page heading derived from `policyName` (e.g., "privacy-policy" → "Privacy Policy")

### Styling
**Location:** `/components/Legal/PolicyPage.module.scss`

Styles include:
- **Container:** Max-width wrapper with horizontal padding (responsive)
- **Heading:** Uses design tokens for typography, margin-bottom
- **Content section:** 
  - Paragraph spacing (`margin-bottom`)
  - Heading hierarchy (h1, h2, h3 styling)
  - List styling (ul, ol, li)
  - Link styling (color, hover state)
  - Bold/strong text styling
  - Table styling (if present in content)
  - Code block styling (if present)
- **Responsive:** Mobile-first, adjust padding/font-size at tablet+ breakpoints
- **All values:** Use design system tokens (colors, spacing, fonts)

---

## 5. Route Page Implementation

Each route follows this pattern:

```typescript
// /app/legal/privacy-policy/page.tsx
import type { Metadata } from 'next'
import PolicyPage from '@/components/Legal/PolicyPage'

export const metadata: Metadata = {
  title: 'Privacy Policy | Sustainable Bitcoin Protocol',
  description: 'Read our privacy policy to understand how we collect, use, and protect your data.',
  openGraph: {
    title: 'Privacy Policy | Sustainable Bitcoin Protocol',
    description: 'Read our privacy policy to understand how we collect, use, and protect your data.',
    type: 'website',
  },
}

export default function PrivacyPolicyPage() {
  return <PolicyPage policyName="privacy-policy" />
}
```

Each route exports:
- **metadata:** Unique title and description for SEO
- **Default export:** Server component rendering `PolicyPage`

Metadata for each page:
- **Privacy Policy:** "Privacy Policy | Sustainable Bitcoin Protocol"
- **Terms & Conditions:** "Terms & Conditions | Sustainable Bitcoin Protocol"
- **Disclaimer:** "Disclaimer | Sustainable Bitcoin Protocol"

---

## 6. Security & Sanitization

### DOMPurify Integration
- Install `dompurify` and `isomorphic-dompurify` (for SSR compatibility)
- Configure default config: allow standard HTML tags (p, h1-h6, strong, em, a, ul, ol, li, table, etc.)
- Strip script tags, event handlers, and potentially harmful attributes
- Preserve links with `href` attributes
- Preserve table structure

### XSS Prevention
- All HTML content is sanitized before rendering
- `dangerouslySetInnerHTML` used only after sanitization
- No user input is processed (static files only)

---

## 7. Navigation Integration

### Footer Links
The footer component will:
- Read `/data/footer/footer-links.json`
- Render a "Legal" section with links to all three policy pages
- Links are styled consistently with other footer links

### Accessibility
- Links have descriptive text (not generic "click here")
- Links are keyboard accessible
- Links have proper focus states
- Proper heading hierarchy in policy content

---

## 8. Responsive Design

### Mobile (< 768px)
- Full-width content with padding on sides
- Font sizes readable on small screens
- Tables may scroll horizontally if needed
- Heading sizes reduced but maintain hierarchy

### Tablet (768px - 1024px)
- Content width optimized for reading
- Padding adjusted for larger screens

### Desktop (> 1024px)
- Max-width container (e.g., 900px)
- Centered with side padding
- Optimal line length for readability

---

## 9. Error Handling

### File Not Found
- If HTML file doesn't exist, show user-friendly error message
- Example: "Unable to load this policy page. Please try again later."
- Log error to console for debugging

### Network Errors
- Handle fetch failures gracefully
- Show error message instead of blank page
- Provide fallback or contact information

### Empty/Invalid Content
- If HTML file is empty, show error
- If HTML is malformed, sanitizer handles it gracefully

---

## 10. SEO & Metadata

- Each page has unique metadata (title, description)
- Open Graph tags for social sharing
- Keywords can be added (e.g., "privacy", "policy", "data protection")
- Pages are indexable (no `noindex`)
- Proper heading hierarchy for accessibility and SEO

---

## 11. Acceptance Criteria

- [ ] Three policy pages created at `/legal/privacy-policy`, `/legal/terms-and-conditions`, `/legal/disclaimer`
- [ ] HTML files stored in `/public/legal/` with correct content
- [ ] `PolicyPage` component created with sanitization and styling
- [ ] Route pages created with proper metadata
- [ ] Footer links added to `/data/footer/footer-links.json`
- [ ] Content displays correctly on mobile, tablet, and desktop
- [ ] XSS sanitization working (HTML is safe)
- [ ] Loading and error states working
- [ ] All links functional
- [ ] Accessibility standards met (keyboard nav, heading hierarchy, semantic HTML)
- [ ] No console errors or warnings

---

## 12. Dependencies

### New Packages
- `dompurify` — HTML sanitization
- `isomorphic-dompurify` — SSR-compatible sanitization

### Existing Dependencies
- Next.js (already in use)
- TypeScript (already in use)
- SCSS (already in use)

---

## 13. Implementation Notes

### Phased Rollout
1. **Phase 1:** Create `PolicyPage` component and route structure
2. **Phase 2:** Add Privacy Policy HTML file and route
3. **Phase 3:** Add Terms & Conditions and Disclaimer HTML files and routes
4. **Phase 4:** Update footer navigation with policy links
5. **Phase 5:** Test across devices and browsers

### Content Updates
- If policy content needs updates, edit the HTML file directly in `/public/legal/`
- No code changes required for content updates
- Changes are live after file is saved

### Styling Consistency
- Use existing design tokens from `.github/instructions/design-system/`
- Match typography and spacing of other pages (e.g., `/about`, `/faqs`)
- Ensure responsive behavior matches site-wide patterns

---

## 14. Success Metrics

- Pages load without errors
- Content is readable and properly formatted on all devices
- No XSS vulnerabilities
- Links work correctly
- SEO metadata is present
- Accessibility requirements met
- Footer links appear and navigate correctly
