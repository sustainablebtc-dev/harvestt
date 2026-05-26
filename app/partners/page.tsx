import type { Metadata } from 'next'
import siteConfigRaw from '@/data/site/config.json'
import type { SiteConfig, PartnersEcosystemData, HowWeCreateValueData } from '@/data/types'
import PartnersHero from '@/components/PartnersHero/PartnersHero'
import PartnersEcosystem from '@/components/PartnersEcosystem/PartnersEcosystem'
import HowWeCreateValue from '@/components/HowWeCreateValue/HowWeCreateValue'
import ecosystemDataRaw from '@/data/partners/ecosystem.json'
import howWeCreateValueDataRaw from '@/data/partners/how-we-create-value.json'

const siteConfig = siteConfigRaw as SiteConfig
const ecosystemData = ecosystemDataRaw as PartnersEcosystemData
const howWeCreateValueData = howWeCreateValueDataRaw as HowWeCreateValueData

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
      <PartnersEcosystem data={ecosystemData} />
      <HowWeCreateValue data={howWeCreateValueData} />
    </main>
  )
}
