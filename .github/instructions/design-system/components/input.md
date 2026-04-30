# Input Component

> Source: No explicit input fields in Figma node `5:1089` (Home Page)  
> Derived from: Design system tokens + institutional UX standards consistent with the visual language  
> Cross-reference: [`tokens/colors.md`](../tokens/colors.md), [`tokens/typography.md`](../tokens/typography.md)

---

## Overview

The Home Page Figma does not include explicit form inputs. This spec is derived from the design system tokens and must be followed when inputs are introduced (e.g., contact forms, lead capture).

All inputs follow the same zero-radius, minimal-border philosophy as the button system.

---

## Base Input

```html
<div class="flex flex-col gap-2">
  <label class="
    font-geist font-medium text-[11px] text-text-muted
    tracking-[1.25px] uppercase leading-[1.4]
  ">
    Email Address
  </label>
  <input
    type="text"
    placeholder="you@institution.com"
    class="
      w-full
      px-4 py-3
      bg-white border border-border-default
      font-geist font-normal text-[16px] text-text-primary
      leading-[1.6] tracking-[0]
      rounded-none
      outline-none
      transition-colors duration-150
      placeholder:text-text-muted
      focus:border-brand
    "
  />
</div>
```

---

## States

### Default
```
border: border-border-default (#e5e5e5)
background: bg-white
text: text-text-primary (#1b1b1b)
```

### Focus
```
border: border-brand (#1b1b1b)
outline: none (border handles focus indicator)
```

### Error
```
border: border-[#dc2626]
text below: text-[#dc2626] text-[12px] font-normal leading-[1.4]
```

### Disabled
```
background: bg-bg-muted (#f5f5f5)
border: border-border-default
text: text-text-muted
cursor: cursor-not-allowed
opacity: opacity-60
```

### Success
```
border: border-success (#289e4b)
```

---

## Input with Error State

```html
<div class="flex flex-col gap-2">
  <label class="font-geist font-medium text-[11px] text-text-muted tracking-[1.25px] uppercase leading-[1.4]">
    Email Address
  </label>
  <input
    type="email"
    aria-invalid="true"
    aria-describedby="email-error"
    class="
      w-full px-4 py-3
      bg-white border border-[#dc2626]
      font-geist font-normal text-[16px] text-text-primary
      leading-[1.6] rounded-none outline-none
    "
  />
  <p id="email-error" class="font-geist font-normal text-[12px] text-[#dc2626] leading-[1.4]">
    Please enter a valid email address.
  </p>
</div>
```

---

## Textarea

```html
<textarea
  rows="4"
  class="
    w-full px-4 py-3
    bg-white border border-border-default
    font-geist font-normal text-[16px] text-text-primary
    leading-[1.6] rounded-none outline-none resize-none
    transition-colors duration-150
    focus:border-brand
    placeholder:text-text-muted
  "
  placeholder="Your message..."
></textarea>
```

---

## Sizing

| Property | Value |
|---|---|
| Horizontal padding | `16px` (`px-4`) |
| Vertical padding | `12px` (`py-3`) |
| Font size | `16px` (`body-lg`) |
| Label font | `11px` label-md, uppercase |
| Border width | `1px` |
| Border radius | `0px` |

---

## Accessibility

- Every input must have an associated `<label>` (visible or `sr-only`)
- Error messages must use `aria-describedby` pointing to the error element
- Invalid inputs must have `aria-invalid="true"`
- Focus must be visible — the `border-brand` change provides focus indication; supplement with `focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-1` if contrast is insufficient
- Placeholder text must not be the only label — always include a real label element
