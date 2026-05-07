import type { Metadata } from 'next'
import faqsDataRaw from '@/data/faqs.json'
import type { FAQsData } from '@/data/types'
import FAQsAccordion from '@/components/FAQsAccordion/FAQsAccordion'
import styles from './FAQs.module.scss'

const faqsData = faqsDataRaw as FAQsData

export const metadata: Metadata = {
  title: 'FAQs | Harvestt',
  description: 'Answers to frequently asked questions about Bitcoin, clean energy, and Sustainable Bitcoin Protocol',
}

export default function FAQsPage() {
  return (
    <section className={styles.faqs}>
      <div className={styles.container}>
        <h1 className={styles.title}>{faqsData.title}</h1>
        <FAQsAccordion faqs={faqsData.faqs} />
      </div>
    </section>
  )
}
