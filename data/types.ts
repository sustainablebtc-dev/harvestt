/**
 * Data layer types — single source of truth for all structured content interfaces.
 *
 * Import from '@/data/types' in any component or server function that consumes /data files.
 */

// ─── Navigation ────────────────────────────────────────────────────────────────

export interface NavLink {
  label: string
  href: string
  /** When true, the item renders a dropdown indicator and expects children. */
  hasDropdown?: boolean
}

export interface NavbarData {
  links: NavLink[]
  login: {
    label: string
    href: string
  }
  cta: {
    label: string
    href: string
  }
}

// ─── Footer ─────────────────────────────────────────────────────────────────────

export interface FooterLink {
  label: string
  href: string
}

export interface FooterLinkGroup {
  heading: string
  links: FooterLink[]
}

export interface SocialLink {
  /** Platform name — e.g. "LinkedIn", "X", "GitHub" */
  platform: string
  href: string
  /** Accessible label for screen readers — e.g. "Harvestt on LinkedIn" */
  label: string
}

// ─── Site Config ────────────────────────────────────────────────────────────────

export interface DefaultMetadata {
  title: string
  description: string
  /** Absolute URL to the default Open Graph image. */
  ogImage: string
}

export interface SiteConfig {
  name: string
  tagline: string
  /** Canonical base URL — no trailing slash. */
  url: string
  defaultMetadata: DefaultMetadata
}

// ─── Future Extensions ──────────────────────────────────────────────────────────
//
// When adding new data files, define their interfaces here first.
// Naming: use PascalCase, suffix with the domain (e.g. PricingTier, TeamMember).
//
// i18n: extend each interface with an optional `locale?: string` field when
// localization is introduced — do not create parallel type files per locale.
