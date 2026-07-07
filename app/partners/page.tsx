import type { Metadata } from 'next'
import siteConfigRaw from '@/data/site/config.json'
import type { SiteConfig } from '@/data/types'
import PartnersHero from '@/components/PartnersHero/PartnersHero'
import PartnerNetwork from '@/components/PartnerNetwork/PartnerNetwork'
import ValueExchange from '@/components/ValueExchange/ValueExchange'

const siteConfig = siteConfigRaw as SiteConfig

export const metadata: Metadata = {
  title: 'Partners | Sustainable Bitcoin Protocol — Miners, Institutions & Regulators',
  description: 'SBP works with public and sovereign-scale miners, institutional investors, and global regulators — verifying clean-energy Bitcoin mining representing ~24% of global hashrate.',
  openGraph: {
    title: 'Partners | Sustainable Bitcoin Protocol — Miners, Institutions & Regulators',
    description: 'SBP works with public and sovereign-scale miners, institutional investors, and global regulators — verifying clean-energy Bitcoin mining representing ~24% of global hashrate.',
    url: `${siteConfig.url}/partners`,
    type: 'website',
    images: [
      {
        url: siteConfig.defaultMetadata.ogImage,
        width: 1200,
        height: 630,
        alt: 'Sustainable Bitcoin Protocol Partners',
      },
    ],
  },
}

export default function PartnersPage() {
  return (
    <main>
      <PartnersHero />
      <PartnerNetwork />
      <ValueExchange />
    </main>
  )
}
