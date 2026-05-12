import type { Metadata } from 'next'
import MicaWhitepaper from '@/components/Legal/MicaWhitepaper'

export const metadata: Metadata = {
  title: 'MiCA Whitepaper | Sustainable Bitcoin Protocol',
  description: 'Download and review the Sustainable Bitcoin Protocol MiCA regulatory whitepaper, notified to the Central Bank of Ireland in accordance with Regulation (EU) 2023/1114.',
  keywords: ['MiCA', 'regulatory', 'whitepaper', 'Sustainable Bitcoin Protocol', 'Central Bank Ireland'],
  openGraph: {
    title: 'MiCA Whitepaper | Sustainable Bitcoin Protocol',
    description: 'Download and review the Sustainable Bitcoin Protocol MiCA regulatory whitepaper.',
    type: 'website',
  },
}

export default function MicaWhitepaperPage() {
  return <MicaWhitepaper />
}
