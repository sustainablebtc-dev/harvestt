'use client'

import { useState } from 'react'
import type { FAQ } from '@/data/types'
import styles from './FAQsAccordion.module.scss'

interface FAQsAccordionProps {
  faqs: FAQ[]
}

export default function FAQsAccordion({ faqs }: FAQsAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      toggleAccordion(index)
    }
  }

  return (
    <div className={styles.accordion}>
      {faqs.map((faq, index) => (
        <div key={index} className={styles.accordionItem}>
          <button
            className={styles.accordionTrigger}
            onClick={() => toggleAccordion(index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            aria-expanded={openIndex === index}
            aria-controls={`faq-answer-${index}`}
          >
            <span className={styles.accordionQuestion}>{faq.question}</span>
            <i className={`bi bi-chevron-down ${styles.accordionChevron} ${openIndex === index ? styles.chevronOpen : ''}`} />
          </button>
          {openIndex === index && (
            <div id={`faq-answer-${index}`} className={styles.accordionAnswer}>
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
