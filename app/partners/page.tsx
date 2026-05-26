import type { Metadata } from 'next'
import siteConfigRaw from '@/data/site/config.json'
import type { SiteConfig } from '@/data/types'
import PartnersHero from '@/components/PartnersHero/PartnersHero'

const siteConfig = siteConfigRaw as SiteConfig

export const metadata: Metadata = {
  title: 'Bitcoin Mining Partnerships | Sustainable BTC',
  description: 'Partner with leading institutional capital and mining operators to access Bitcoin through verified sustainable energy infrastructure.',
  openGraph: {
    title: 'Bitcoin Mining Partnerships | Sustainable BTC',
    description: 'Partner with leading institutional capital and mining operators to access Bitcoin through verified sustainable energy infrastructure.',
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
    </main>
  )
}
