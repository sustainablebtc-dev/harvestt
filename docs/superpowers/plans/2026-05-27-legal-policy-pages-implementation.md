# Legal Policy Pages Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Implement three legal policy pages (Privacy Policy, Terms & Conditions, Disclaimer) under `/legal/` route with static HTML content, sanitized rendering, and footer navigation.

**Architecture:** PolicyPage reusable component loads HTML files from `/public/legal/`, sanitizes with DOMPurify, and renders in a styled wrapper. Each route page exports metadata and renders PolicyPage. Footer navigation links to all three pages from `/data/footer/footer-links.json`.

**Tech Stack:** Next.js App Router, TypeScript, SCSS modules, DOMPurify, isomorphic-dompurify

---

### Task 1: Install Dependencies

**Files:**
- Modify: `package.json`

- [ ] **Step 1: Install dompurify and isomorphic-dompurify**

```bash
npm install dompurify isomorphic-dompurify
npm install --save-dev @types/dompurify
```

Expected output: Both packages added to `package.json` with locked versions in `package-lock.json`

- [ ] **Step 2: Verify installation**

```bash
npm ls dompurify isomorphic-dompurify
```

Expected: Both packages listed with version numbers (no errors)

- [ ] **Step 3: Commit**

```bash
git add package.json package-lock.json
git commit -m "chore: add dompurify and isomorphic-dompurify for HTML sanitization"
```

---

### Task 2: Create PolicyPage Component

**Files:**
- Create: `/components/Legal/PolicyPage.tsx`

- [ ] **Step 1: Create Legal components directory**

```bash
mkdir -p "/Users/shubhamgujarathi/Website Vikreta/Projects/Clients/Harvestt/harvestt.com/components/Legal"
```

- [ ] **Step 2: Write PolicyPage component**

```typescript
'use client';

import { useEffect, useState } from 'react';
import DOMPurify from 'isomorphic-dompurify';
import styles from './PolicyPage.module.scss';

interface PolicyPageProps {
  policyName: string;
}

export default function PolicyPage({ policyName }: PolicyPageProps) {
  const [content, setContent] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPolicy = async () => {
      try {
        const response = await fetch(`/legal/${policyName}.html`);
        if (!response.ok) {
          throw new Error(`Failed to load ${policyName}`);
        }
        const html = await response.text();
        const sanitized = DOMPurify.sanitize(html, {
          ALLOWED_TAGS: [
            'p', 'br', 'strong', 'b', 'em', 'i', 'u', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
            'ul', 'ol', 'li', 'table', 'thead', 'tbody', 'tr', 'th', 'td',
            'a', 'blockquote', 'code', 'pre', 'section', 'article', 'div',
          ],
          ALLOWED_ATTR: ['href', 'title', 'target', 'rel', 'style'],
          ALLOW_DATA_ATTR: false,
        });
        setContent(sanitized);
        setError(null);
      } catch (err) {
        setError(
          err instanceof Error
            ? err.message
            : 'An error occurred while loading this policy'
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchPolicy();
  }, [policyName]);

  const formattedTitle = policyName
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>{formattedTitle}</h1>
        
        {isLoading && (
          <div className={styles.loading} role="status" aria-live="polite">
            <p>Loading policy...</p>
          </div>
        )}

        {error && (
          <div className={styles.error} role="alert">
            <p>
              <strong>Unable to load this policy:</strong> {error}
            </p>
            <p>Please try refreshing the page or contact us at info@sustainablebtc.org.</p>
          </div>
        )}

        {!isLoading && !error && (
          <div
            className={styles.content}
            dangerouslySetInnerHTML={{ __html: content }}
          />
        )}
      </div>
    </div>
  );
}
```

- [ ] **Step 3: Verify component syntax**

```bash
cd "/Users/shubhamgujarathi/Website Vikreta/Projects/Clients/Harvestt/harvestt.com"
npx tsc --noEmit components/Legal/PolicyPage.tsx
```

Expected: No TypeScript errors

- [ ] **Step 4: Commit**

```bash
git add components/Legal/PolicyPage.tsx
git commit -m "feat: create PolicyPage wrapper component for legal pages"
```

---

### Task 3: Create PolicyPage Styles

**Files:**
- Create: `/components/Legal/PolicyPage.module.scss`

- [ ] **Step 1: Write PolicyPage styles**

```scss
.container {
  @apply min-h-screen bg-white;
  padding: var(--space-40) var(--space-24);

  @media (min-width: 768px) {
    padding: var(--space-60) var(--space-40);
  }

  @media (min-width: 1024px) {
    padding: var(--space-80) var(--space-24);
  }
}

.wrapper {
  max-width: 900px;
  margin: 0 auto;
  width: 100%;
}

.title {
  @apply text-3xl font-bold mb-8;
  color: var(--color-primary);
  font-family: var(--font-primary);

  @media (min-width: 768px) {
    @apply text-4xl;
    margin-bottom: var(--space-40);
  }
}

.content {
  font-size: 1rem;
  line-height: 1.6;
  color: var(--color-text-primary);

  p {
    margin-bottom: var(--space-16);

    @media (min-width: 768px) {
      margin-bottom: var(--space-20);
    }
  }

  h2 {
    @apply text-2xl font-bold mt-8 mb-4;
    color: var(--color-primary);
    font-family: var(--font-primary);

    @media (min-width: 768px) {
      margin-top: var(--space-32);
      margin-bottom: var(--space-16);
    }
  }

  h3 {
    @apply text-xl font-bold mt-6 mb-3;
    color: var(--color-secondary);
  }

  strong,
  b {
    font-weight: 700;
    color: var(--color-text-primary);
  }

  em,
  i {
    font-style: italic;
  }

  a {
    color: var(--color-accent);
    text-decoration: underline;
    transition: color 0.2s ease;

    &:hover {
      color: var(--color-accent-dark);
    }

    &:focus {
      outline: 2px solid var(--color-focus);
      outline-offset: 2px;
    }
  }

  ul,
  ol {
    margin-left: var(--space-24);
    margin-bottom: var(--space-16);

    li {
      margin-bottom: var(--space-8);
    }
  }

  ul li {
    list-style-type: disc;
  }

  ol li {
    list-style-type: decimal;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: var(--space-24);
    font-size: 0.95rem;

    th,
    td {
      border: 1px solid var(--color-border);
      padding: var(--space-12);
      text-align: left;
    }

    th {
      background-color: var(--color-background-secondary);
      font-weight: 700;
    }

    tbody tr:nth-child(even) {
      background-color: rgba(0, 0, 0, 0.02);
    }
  }

  code {
    background-color: var(--color-background-secondary);
    padding: 0.2em 0.4em;
    border-radius: 3px;
    font-family: 'Courier New', monospace;
    font-size: 0.9em;
  }

  pre {
    background-color: var(--color-background-secondary);
    padding: var(--space-16);
    border-radius: 4px;
    overflow-x: auto;
    margin-bottom: var(--space-16);

    code {
      background-color: transparent;
      padding: 0;
    }
  }

  blockquote {
    border-left: 4px solid var(--color-accent);
    padding-left: var(--space-16);
    margin-left: 0;
    margin-bottom: var(--space-16);
    font-style: italic;
    color: var(--color-text-secondary);
  }
}

.loading {
  @apply text-center py-8;
  color: var(--color-text-secondary);
}

.error {
  background-color: #fee;
  border: 1px solid #fcc;
  border-radius: 4px;
  padding: var(--space-16);
  margin-bottom: var(--space-24);
  color: #c00;

  p {
    margin: 0 0 var(--space-12) 0;

    &:last-child {
      margin-bottom: 0;
    }
  }

  strong {
    color: #900;
  }
}
```

- [ ] **Step 2: Verify SCSS syntax**

```bash
cd "/Users/shubhamgujarathi/Website Vikreta/Projects/Clients/Harvestt/harvestt.com"
npx sass components/Legal/PolicyPage.module.scss --check
```

Expected: No errors

- [ ] **Step 3: Commit**

```bash
git add components/Legal/PolicyPage.module.scss
git commit -m "feat: add PolicyPage component styles with responsive design"
```

---

### Task 4: Create Privacy Policy HTML File

**Files:**
- Create: `/public/legal/privacy-policy.html`

- [ ] **Step 1: Create legal directory in public**

```bash
mkdir -p "/Users/shubhamgujarathi/Website Vikreta/Projects/Clients/Harvestt/harvestt.com/public/legal"
```

- [ ] **Step 2: Create privacy-policy.html with provided content**

Create file at `/public/legal/privacy-policy.html` with the exact HTML content you provided earlier (the full privacy policy content starting with `<h2>PRIVACY POLICY</h2>` through the final paragraph).

The file should contain only the body content (no `<html>`, `<head>`, or `<body>` tags).

- [ ] **Step 3: Verify file was created**

```bash
ls -lh "/Users/shubhamgujarathi/Website Vikreta/Projects/Clients/Harvestt/harvestt.com/public/legal/privacy-policy.html"
```

Expected: File exists and is readable

- [ ] **Step 4: Commit**

```bash
git add public/legal/privacy-policy.html
git commit -m "content: add privacy policy HTML content"
```

---

### Task 5: Create Privacy Policy Route

**Files:**
- Create: `/app/legal/privacy-policy/page.tsx`

- [ ] **Step 1: Create privacy-policy directory**

```bash
mkdir -p "/Users/shubhamgujarathi/Website Vikreta/Projects/Clients/Harvestt/harvestt.com/app/legal/privacy-policy"
```

- [ ] **Step 2: Write privacy-policy page component**

```typescript
import type { Metadata } from 'next';
import PolicyPage from '@/components/Legal/PolicyPage';

export const metadata: Metadata = {
  title: 'Privacy Policy | Sustainable Bitcoin Protocol',
  description:
    'Read our privacy policy to understand how we collect, use, and protect your data.',
  openGraph: {
    title: 'Privacy Policy | Sustainable Bitcoin Protocol',
    description:
      'Read our privacy policy to understand how we collect, use, and protect your data.',
    type: 'website',
  },
};

export default function PrivacyPolicyPage() {
  return <PolicyPage policyName="privacy-policy" />;
}
```

- [ ] **Step 3: Verify TypeScript**

```bash
cd "/Users/shubhamgujarathi/Website Vikreta/Projects/Clients/Harvestt/harvestt.com"
npx tsc --noEmit app/legal/privacy-policy/page.tsx
```

Expected: No errors

- [ ] **Step 4: Commit**

```bash
git add app/legal/privacy-policy/page.tsx
git commit -m "feat: create privacy policy route with metadata"
```

---

### Task 6: Create Placeholder HTML Files for Other Policies

**Files:**
- Create: `/public/legal/terms-and-conditions.html`
- Create: `/public/legal/disclaimer.html`

- [ ] **Step 1: Create terms-and-conditions.html placeholder**

Create file at `/public/legal/terms-and-conditions.html` with placeholder content:

```html
<h2><b>TERMS AND CONDITIONS</b></h2>
<p>Effective date: 2026-05-27</p>
<p><b>Coming soon.</b> Terms and Conditions content will be added here.</p>
```

- [ ] **Step 2: Create disclaimer.html placeholder**

Create file at `/public/legal/disclaimer.html` with placeholder content:

```html
<h2><b>DISCLAIMER</b></h2>
<p>Effective date: 2026-05-27</p>
<p><b>Coming soon.</b> Disclaimer content will be added here.</p>
```

- [ ] **Step 3: Verify files were created**

```bash
ls -lh "/Users/shubhamgujarathi/Website Vikreta/Projects/Clients/Harvestt/harvestt.com/public/legal/"
```

Expected: All three HTML files listed

- [ ] **Step 4: Commit**

```bash
git add public/legal/terms-and-conditions.html public/legal/disclaimer.html
git commit -m "content: add placeholder content for terms and disclaimer"
```

---

### Task 7: Create Terms & Conditions Route

**Files:**
- Create: `/app/legal/terms-and-conditions/page.tsx`

- [ ] **Step 1: Create terms-and-conditions directory**

```bash
mkdir -p "/Users/shubhamgujarathi/Website Vikreta/Projects/Clients/Harvestt/harvestt.com/app/legal/terms-and-conditions"
```

- [ ] **Step 2: Write terms-and-conditions page component**

```typescript
import type { Metadata } from 'next';
import PolicyPage from '@/components/Legal/PolicyPage';

export const metadata: Metadata = {
  title: 'Terms & Conditions | Sustainable Bitcoin Protocol',
  description:
    'Read our terms and conditions to understand the rules and policies governing your use of our services.',
  openGraph: {
    title: 'Terms & Conditions | Sustainable Bitcoin Protocol',
    description:
      'Read our terms and conditions to understand the rules and policies governing your use of our services.',
    type: 'website',
  },
};

export default function TermsAndConditionsPage() {
  return <PolicyPage policyName="terms-and-conditions" />;
}
```

- [ ] **Step 3: Verify TypeScript**

```bash
cd "/Users/shubhamgujarathi/Website Vikreta/Projects/Clients/Harvestt/harvestt.com"
npx tsc --noEmit app/legal/terms-and-conditions/page.tsx
```

Expected: No errors

- [ ] **Step 4: Commit**

```bash
git add app/legal/terms-and-conditions/page.tsx
git commit -m "feat: create terms and conditions route with metadata"
```

---

### Task 8: Create Disclaimer Route

**Files:**
- Create: `/app/legal/disclaimer/page.tsx`

- [ ] **Step 1: Create disclaimer directory**

```bash
mkdir -p "/Users/shubhamgujarathi/Website Vikreta/Projects/Clients/Harvestt/harvestt.com/app/legal/disclaimer"
```

- [ ] **Step 2: Write disclaimer page component**

```typescript
import type { Metadata } from 'next';
import PolicyPage from '@/components/Legal/PolicyPage';

export const metadata: Metadata = {
  title: 'Disclaimer | Sustainable Bitcoin Protocol',
  description:
    'Read our disclaimer for important information about the use of our website and services.',
  openGraph: {
    title: 'Disclaimer | Sustainable Bitcoin Protocol',
    description:
      'Read our disclaimer for important information about the use of our website and services.',
    type: 'website',
  },
};

export default function DisclaimerPage() {
  return <PolicyPage policyName="disclaimer" />;
}
```

- [ ] **Step 3: Verify TypeScript**

```bash
cd "/Users/shubhamgujarathi/Website Vikreta/Projects/Clients/Harvestt/harvestt.com"
npx tsc --noEmit app/legal/disclaimer/page.tsx
```

Expected: No errors

- [ ] **Step 4: Commit**

```bash
git add app/legal/disclaimer/page.tsx
git commit -m "feat: create disclaimer route with metadata"
```

---

### Task 9: Update Footer Navigation Data

**Files:**
- Modify: `/data/footer/footer-links.json`

- [ ] **Step 1: Read current footer-links.json**

```bash
cat "/Users/shubhamgujarathi/Website Vikreta/Projects/Clients/Harvestt/harvestt.com/data/footer/footer-links.json"
```

- [ ] **Step 2: Update footer-links.json to include policy links**

Locate the existing `footer-links.json` structure and add a new "Legal" section at the appropriate place in the links array. The updated file should look similar to this structure:

```json
{
  "links": [
    // ... existing links ...
  ],
  "legal": {
    "label": "Legal",
    "items": [
      { "label": "Privacy Policy", "href": "/legal/privacy-policy" },
      { "label": "Terms & Conditions", "href": "/legal/terms-and-conditions" },
      { "label": "Disclaimer", "href": "/legal/disclaimer" }
    ]
  }
}
```

Or if the footer structure is different, add the legal section in the appropriate location that matches the existing JSON structure.

- [ ] **Step 3: Verify JSON syntax**

```bash
cat "/Users/shubhamgujarathi/Website Vikreta/Projects/Clients/Harvestt/harvestt.com/data/footer/footer-links.json" | jq .
```

Expected: Valid JSON output with no syntax errors

- [ ] **Step 4: Commit**

```bash
git add data/footer/footer-links.json
git commit -m "feat: add legal policy links to footer navigation"
```

---

### Task 10: Test Privacy Policy Page

**Files:**
- Test: `/app/legal/privacy-policy/page.tsx` (via browser)

- [ ] **Step 1: Start development server**

```bash
cd "/Users/shubhamgujarathi/Website Vikreta/Projects/Clients/Harvestt/harvestt.com"
npm run dev
```

Wait for the server to start. Expected output should show the dev server is running on `localhost:3000` (or similar).

- [ ] **Step 2: Open Privacy Policy page in browser**

Navigate to `http://localhost:3000/legal/privacy-policy`

Expected results:
- Page loads without errors
- "Privacy Policy" heading is visible
- "Effective date: 2021-06-01" is visible
- All policy content is displayed
- Links are clickable and styled correctly
- Page is responsive on mobile/tablet/desktop
- No console errors in browser DevTools

- [ ] **Step 3: Test error state (optional)**

Temporarily rename `/public/legal/privacy-policy.html` to trigger an error:

```bash
mv "/Users/shubhamgujarathi/Website Vikreta/Projects/Clients/Harvestt/harvestt.com/public/legal/privacy-policy.html" \
   "/Users/shubhamgujarathi/Website Vikreta/Projects/Clients/Harvestt/harvestt.com/public/legal/privacy-policy.html.bak"
```

Refresh page in browser. Expected: Error message displays.

Then restore the file:

```bash
mv "/Users/shubhamgujarathi/Website Vikreta/Projects/Clients/Harvestt/harvestt.com/public/legal/privacy-policy.html.bak" \
   "/Users/shubhamgujarathi/Website Vikreta/Projects/Clients/Harvestt/harvestt.com/public/legal/privacy-policy.html"
```

- [ ] **Step 4: Test Other Policy Pages**

Navigate to:
- `http://localhost:3000/legal/terms-and-conditions` — should display placeholder
- `http://localhost:3000/legal/disclaimer` — should display placeholder

Expected: Both pages load with placeholder content

- [ ] **Step 5: Test Footer Links**

Scroll to footer on any page. Expected:
- "Legal" section is visible
- Three links are present (Privacy Policy, Terms & Conditions, Disclaimer)
- Links navigate to correct routes

- [ ] **Step 6: Test Responsiveness**

Use browser DevTools to test on different screen sizes:
- Mobile (375px): Content readable, no overflow
- Tablet (768px): Proper spacing and sizing
- Desktop (1024px+): Content centered with appropriate max-width

- [ ] **Step 7: Verify TypeScript compilation**

```bash
cd "/Users/shubhamgujarathi/Website Vikreta/Projects/Clients/Harvestt/harvestt.com"
npx tsc --noEmit
```

Expected: No TypeScript errors

---

### Task 11: Final Verification and Cleanup

**Files:**
- All policy-related files

- [ ] **Step 1: Check build succeeds**

```bash
cd "/Users/shubhamgujarathi/Website Vikreta/Projects/Clients/Harvestt/harvestt.com"
npm run build
```

Expected: Build completes successfully with no errors

- [ ] **Step 2: Verify all routes exist**

```bash
grep -r "privacy-policy\|terms-and-conditions\|disclaimer" \
  "/Users/shubhamgujarathi/Website Vikreta/Projects/Clients/Harvestt/harvestt.com/app/legal/" \
  "/Users/shubhamgujarathi/Website Vikreta/Projects/Clients/Harvestt/harvestt.com/data/footer/" \
  --include="*.tsx" --include="*.json" | wc -l
```

Expected: Multiple matches showing routes and data are properly connected

- [ ] **Step 3: Check for console warnings/errors**

Open DevTools on each policy page and verify console is clean (no errors, no warnings related to the policy pages)

- [ ] **Step 4: Final commit summary**

```bash
cd "/Users/shubhamgujarathi/Website Vikreta/Projects/Clients/Harvestt/harvestt.com"
git log --oneline | head -10
```

Should show recent commits for all policy-related work

- [ ] **Step 5: Documentation note**

The implementation is complete. Content for Terms & Conditions and Disclaimer can be updated by replacing the placeholder HTML files in `/public/legal/` with actual content. No code changes needed.
