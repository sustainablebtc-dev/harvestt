# Navbar Component

> Source: Figma `FRYoDiBSYuje0Nk9fNedRp` — node `5:1120`  
> Cross-reference: [`tokens/colors.md`](../tokens/colors.md), [`tokens/shadows.md`](../tokens/shadows.md), [`components/button.md`](./button.md)

---

## Structure

```
[Logo] ←——— 80px gap ———→ [Nav Links] ←—— flex-grow ——→ [Login] [CTA Button]
```

**Full width:** 1440px  
**Horizontal padding:** 80px each side  
**Vertical padding:** 16px top and bottom  
**Position:** Fixed or sticky, top-aligned  
**Shadow:** `shadow-nav` — `0 1px 0 #a3a3a3`

---

## Navigation Items

| Item | Behavior |
|---|---|
| Home | Plain link — no dropdown |
| About | Dropdown indicator (ChevronDown icon `16×9.14px`) |
| Partners | Plain link |
| Regulatory | Plain link |
| News | Dropdown indicator (ChevronDown icon) |
| Login | Plain text link (right side) |
| Speak With Our Team | Primary CTA button (Nav size) |

---

## Implementation

```html
<header class="
  fixed top-0 left-0 right-0 z-50
  bg-white shadow-nav
">
  <nav class="
    max-w-[1440px] mx-auto
    flex items-center justify-between
    px-20 py-4
  " aria-label="Main navigation">

    <!-- Left: Logo + Nav Links -->
    <div class="flex items-center gap-20">

      <!-- Logo -->
      <a href="/" class="block h-6 w-[126px] shrink-0" aria-label="Sustainable Bitcoin Protocol home">
        <img src="/logo.svg" alt="Sustainable Bitcoin Protocol" class="h-full w-full object-contain" />
      </a>

      <!-- Nav Links -->
      <ul class="hidden lg:flex items-center gap-8 list-none m-0 p-0" role="list">

        <li>
          <a href="/" class="
            flex items-center justify-center py-2
            font-geist font-normal text-[16px] text-text-primary
            leading-[1.22] whitespace-nowrap
            hover:opacity-70 transition-opacity duration-150
          ">
            Home
          </a>
        </li>

        <li class="relative">
          <button class="
            flex items-center gap-2 py-2
            font-geist font-normal text-[16px] text-text-primary
            leading-[1.22] whitespace-nowrap
            hover:opacity-70 transition-opacity duration-150
          " aria-expanded="false" aria-haspopup="true">
            About
            <img src="/icons/chevron-down.svg" alt="" aria-hidden="true" class="w-4 h-[9px]" />
          </button>
          <!-- Dropdown would render here -->
        </li>

        <li>
          <a href="/partners" class="flex items-center justify-center py-2 font-geist font-normal text-[16px] text-text-primary leading-[1.22] whitespace-nowrap hover:opacity-70 transition-opacity duration-150">
            Partners
          </a>
        </li>

        <li>
          <a href="/regulatory" class="flex items-center justify-center py-2 font-geist font-normal text-[16px] text-text-primary leading-[1.22] whitespace-nowrap hover:opacity-70 transition-opacity duration-150">
            Regulatory
          </a>
        </li>

        <li class="relative">
          <button class="flex items-center gap-2 py-2 font-geist font-normal text-[16px] text-text-primary leading-[1.22] whitespace-nowrap hover:opacity-70 transition-opacity duration-150" aria-expanded="false" aria-haspopup="true">
            News
            <img src="/icons/chevron-down.svg" alt="" aria-hidden="true" class="w-4 h-[9px]" />
          </button>
        </li>

      </ul>
    </div>

    <!-- Right: Login + CTA -->
    <div class="hidden lg:flex items-center gap-8">
      <a href="/login" class="
        flex items-center justify-center py-2
        font-geist font-normal text-[16px] text-text-primary
        leading-[1.22] whitespace-nowrap
        hover:opacity-70 transition-opacity duration-150
      ">
        Login
      </a>
      <a href="/contact" class="
        inline-flex items-center justify-center
        px-[25px] py-[9px]
        bg-brand border border-brand
        font-geist font-medium text-[13px] text-white
        tracking-[0.75px] uppercase leading-[1.4]
        whitespace-nowrap rounded-none
        hover:opacity-90 transition-opacity duration-150
      ">
        SPEAK WITH OUR TEAM
      </a>
    </div>

    <!-- Mobile: Hamburger -->
    <button class="
      flex lg:hidden items-center justify-center
      p-2
      text-text-primary
    " aria-label="Open menu" aria-expanded="false" aria-controls="mobile-menu">
      <!-- Hamburger icon -->
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
        <line x1="3" y1="6" x2="21" y2="6" />
        <line x1="3" y1="12" x2="21" y2="12" />
        <line x1="3" y1="18" x2="21" y2="18" />
      </svg>
    </button>

  </nav>
</header>
```

---

## Scroll Behavior

The nav sits at `top: 47px` in Figma (accounting for a potential top announcement bar). In production:
- Use `position: fixed` with `top: 0`
- If an announcement banner is added, offset with CSS variable: `top: var(--banner-height, 0px)`
- On scroll, the shadow is always present (`shadow-nav` is static)

---

## Mobile Menu

The mobile menu is not in Figma scope. Implement as:
- Full-screen overlay or slide-in from right
- Background: `bg-white`
- Links: same typography as desktop nav
- Close button: top-right corner

---

## Responsive Behavior

| Breakpoint | State |
|---|---|
| Mobile → `md` | Logo + Hamburger only |
| `lg`+ | Full horizontal nav |

---

## Accessibility

- `<header>` landmark element wraps the nav
- `<nav aria-label="Main navigation">` for landmark identification
- Dropdowns: `aria-expanded`, `aria-haspopup="true"`, `aria-controls`
- Skip navigation link before the header: `<a href="#main" class="sr-only focus:not-sr-only">Skip to main content</a>`
- Active page: `aria-current="page"` on current nav link
- Mobile toggle: `aria-label`, `aria-expanded`, `aria-controls`
