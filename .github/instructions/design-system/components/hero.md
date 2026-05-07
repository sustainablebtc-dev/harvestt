# Hero Section Component

> Source: Figma `FRYoDiBSYuje0Nk9fNedRp` — nodes `5:1129`, `5:1152`  
> Cross-reference: [`tokens/colors.md`](../tokens/colors.md), [`tokens/typography.md`](../tokens/typography.md), [`components/button.md`](./button.md)

---

## Structure

```
[Section]
  ├── [Image: Right side, absolute positioned]   ← 630px × 831px
  └── [Content: Left aligned]                    ← 573px wide
        ├── [Label]                              ← 11px, Medium, uppercase, muted
        ├── [H1]                                 ← 64px, Bold, -2px tracking
        ├── [Accent Divider]                     ← 48px × 1px, #ff6e00
        ├── [Primary Paragraph]                  ← 16px, 1.6 line-height
        ├── [Secondary Paragraph]                ← 14px muted
        └── [Button Group]                       ← Primary CTA + Secondary CTA
```

---

## Desktop Layout

- Section is `relative` — image is `absolute` positioned to the right
- Content begins at ~149px from top of viewport (after 116px nav offset + content padding)
- Left content width: `573px`
- Image occupies: `left: calc(50% + 10px)`, `top: 116px`, `w-630px h-831px`

---

## Implementation

```html
<section class="relative min-h-screen bg-white overflow-hidden">

  <!-- Hero image — right side, desktop only -->
  <div class="
    hidden lg:block
    absolute top-[116px] right-0
    w-[630px] h-[831px]
  " aria-hidden="true">
    <img
      src="/images/hero-building.jpg"
      alt=""
      class="absolute inset-0 w-full h-full object-cover"
    />
  </div>

  <!-- Hero content -->
  <div class="
    relative z-10
    px-5 lg:px-20
    pt-16 lg:pt-[265px]
    pb-16 lg:pb-0
    max-w-full lg:max-w-[573px]
    flex flex-col gap-8
  ">

    <!-- Content block -->
    <div class="flex flex-col gap-6">

      <!-- Label -->
      <p class="
        font-geist font-medium text-[11px] text-text-muted
        tracking-[1.25px] uppercase leading-[1.4]
      ">
        Institutional Energy Infrastructure — 2026
      </p>

      <!-- H1 -->
      <h1 class="
        font-geist font-bold
        text-[36px] md:text-[48px] lg:text-[64px]
        text-black
        leading-[1.2] tracking-[-0.03125em]
      ">
        Navigating the New Era of Capital
      </h1>

      <!-- Accent divider -->
      <div class="h-px w-12 bg-accent" aria-hidden="true"></div>

    </div>

    <!-- Body copy -->
    <div class="flex flex-col gap-4 max-w-[520px]">
      <p class="
        font-geist font-normal text-[16px] text-text-body
        leading-[1.6] tracking-[0]
      ">
        Institutional-grade energy verification and attestation for Bitcoin mining infrastructure — enabling compliant capital to access Bitcoin with full energy transparency.
      </p>
      <p class="
        font-geist font-normal text-[14px] text-text-muted
        leading-[1.6] tracking-[0]
        max-w-[480px]
      ">
        Sustainable Bitcoin Protocol operates as the trust layer between renewable energy sources, Bitcoin mining operations, and institutional capital allocators — bridging a $15–16 trillion addressable market.
      </p>
    </div>

    <!-- Button group -->
    <div class="flex flex-col sm:flex-row gap-4 items-start sm:items-center">

      <!-- Primary CTA -->
      <a href="/contact" class="
        inline-flex items-center justify-center
        w-full sm:w-auto
        px-[33px] py-[17px]
        bg-brand border border-brand
        font-geist font-medium text-[13px] text-white
        tracking-[0.75px] uppercase leading-[1.4]
        whitespace-nowrap rounded-none
        transition-opacity duration-150 hover:opacity-90
      ">
        SPEAK WITH OUR TEAM
      </a>

      <!-- Secondary CTA -->
      <a href="/insights" class="
        inline-flex items-center justify-center gap-[10px]
        w-full sm:w-auto
        px-[33px] py-[17px]
        bg-white border border-border-default
        font-geist font-medium text-[13px] text-brand
        tracking-[0.75px] uppercase leading-[1.4]
        whitespace-nowrap rounded-none
        transition-colors duration-150 hover:border-brand
      ">
        EXPLORE INSIGHTS
        <img src="/icons/arrow-right.svg" alt="" class="size-[14px]" aria-hidden="true" />
      </a>

    </div>

  </div>

  <!-- Mobile hero image — below content on mobile -->
  <div class="
    lg:hidden
    relative w-full h-[300px] sm:h-[400px] mt-8
  ">
    <img
      src="/images/hero-building.jpg"
      alt="Aerial view of modern institutional building"
      class="absolute inset-0 w-full h-full object-cover"
    />
  </div>

</section>
```

---

## Image Specification

| Property | Value |
|---|---|
| Desktop dimensions | `630px × 831px` |
| Object fit | `object-cover` |
| Position | Absolute right, from `top: 116px` |
| Aspect ratio (approx.) | `630:831` ≈ `3:4` |
| Mobile dimensions | Full width, fixed height `300–400px` |
| Alt text | Descriptive of actual image content |

---

## Accent Divider Pattern

The `48px × 1px` orange line (`bg-accent`) appears under every section heading in the design. It is a **structural motif**, not a decorative element. Always place it directly after the main heading:

```html
<h2 class="...">Section Title</h2>
<div class="h-px w-12 bg-accent" aria-hidden="true"></div>
```

---

## Responsive Behavior

| Breakpoint | Hero Layout |
|---|---|
| Mobile | Stacked: content (full width) → image below |
| `sm` | Button group becomes horizontal row |
| `md` | Typography scales up |
| `lg`+ | Side-by-side: content left (max 573px), image right (absolute, 630px) |

---

## Accessibility

- H1 is the only `<h1>` on the page
- Hero image has `alt=""` if purely decorative, or descriptive alt if it conveys content
- Accent divider: `aria-hidden="true"`
- Button group uses `<a href>` for navigation (not `<button>`) — these are links, not actions
- Sufficient colour contrast: `#3a3a3a` on white = 9.7:1 ✓, `#a3a3a3` on white = 2.5:1 ✗ — muted text is decorative/supplementary only
