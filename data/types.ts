/**
 * Data layer types — single source of truth for all structured content interfaces.
 *
 * Import from '@/data/types' in any component or server function that consumes /data files.
 */

// ─── Navigation ────────────────────────────────────────────────────────────────

export interface DropdownItem {
  label: string
  href: string
}

export interface NavLink {
  label: string
  href: string
  /** When true, the item renders a dropdown indicator and expects children. */
  hasDropdown?: boolean
  /** Optional dropdown items — present only when hasDropdown is true. */
  children?: DropdownItem[]
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

export interface FooterBarLink {
  label: string
  href: string
}

export interface RegisteredOffice {
  label: string
  lines: string[]
}

export interface FooterConfig {
  tagline: string
  registeredOffice: RegisteredOffice
  copyright: string
  bottomLinks: FooterBarLink[]
}

export interface RegulatoryDisclaimerData {
  heading: string
  paragraphs: string[]
  signature: string
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

// ─── Stats Bar ──────────────────────────────────────────────────────────────────

export interface Stat {
  value: string
  label: string
  /** When true, the value renders in --color-success (green). */
  accent: boolean
}

export interface StatsData {
  stats: Stat[]
}

// ─── Market Insights ────────────────────────────────────────────────────────────

export interface ArticleCard {
  category: string
  date: string
  title: string
  body: string
  tags: string[]
  readTime: string
  href: string
}

export interface MarketInsightsData {
  sectionLabel: string
  heading: string
  viewAllLabel: string
  viewAllHref: string
  articles: ArticleCard[]
}

// ─── Future Extensions ──────────────────────────────────────────────────────────
//
// When adding new data files, define their interfaces here first.

// ─── The Challenge ──────────────────────────────────────────────────────────────

export interface ChallengeQuote {
  text: string
  attribution: string
}

export interface ChallengeStat {
  value: string
  description: string
}

export interface ChallengeData {
  sidebarLabel: string
  heading: string
  bodyColumns: string[][]
  quote: ChallengeQuote
  stats: ChallengeStat[]
}

// ─── Addressable Market ─────────────────────────────────────────────────────────

export interface MarketStat {
  value: string
  label: string
  sublabel: string
}

export interface AddressableMarketData {
  eyebrow: string
  displayValue: string
  displaySuffix: string
  displaySuffixDescription: string[]
  body: string
  breakdownStats: MarketStat[]
}

// ─── Verification Layer ─────────────────────────────────────────────────────────

export interface VerificationStep {
  number: string
  title: string
  subtitleColor: 'yellow' | 'green' | 'blue'
  subtitle: string
  body: string
  capabilities: string[]
}

export interface VerificationLayerData {
  eyebrow: string
  heading: string
  description: string
  capabilitiesLabel: string
  steps: VerificationStep[]
}

// ─── Mining Partners ────────────────────────────────────────────────────────────

export interface MiningPartner {
  name: string
  logoSrc: string
  width: number
  height: number
}

export interface MiningPartnersData {
  heading: string
  partners: MiningPartner[]
  ctaLabel: string
  ctaHref: string
}

// ─── Regulatory Infrastructure ──────────────────────────────────────────────────

export type BadgeVariant = 'monitoring' | 'compliant' | 'licensed' | 'aligned'

export interface RegulatoryItem {
  name: string
  description: string
  badge: string
  badgeVariant: BadgeVariant
}

export interface EcosystemLogo {
  name: string
  logoSrc: string
  width: number
  height: number
}

export interface RegulatoryData {
  eyebrow: string
  heading: string
  body: string[]
  panelHeading: string
  items: RegulatoryItem[]
  ecosystemHeading: string
  ecosystemLogos: EcosystemLogo[]
}

// ─── Contact CTA ────────────────────────────────────────────────────────────────

export interface ContactLocation {
  city: string
}

export interface ContactCTAData {
  eyebrow: string
  heading: string[]
  body: string
  primaryCta: { label: string; href: string }
  secondaryCta: { label: string; href: string }
  email: string
  locations: ContactLocation[]
}

// ─── FAQs ───────────────────────────────────────────────────────────────────────

export interface FAQ {
  question: string
  answer: string
}

export interface FAQsData {
  title: string
  faqs: FAQ[]
}

// Naming: use PascalCase, suffix with the domain (e.g. PricingTier, TeamMember).
//
// i18n: extend each interface with an optional `locale?: string` field when
// localization is introduced — do not create parallel type files per locale.
