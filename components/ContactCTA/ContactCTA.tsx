import React from 'react'
import contactDataRaw from '@/data/contact/contact-cta.json'
import type { ContactCTAData } from '@/data/types'
import Link from 'next/link'
import styles from './ContactCTA.module.scss'

const data = contactDataRaw as ContactCTAData

export default function ContactCTA() {
  return (
    <section className={styles.section} aria-labelledby="contact-cta-heading">
      <div className={styles.inner}>
        <div className={styles.headingGroup}>
          <p className={styles.eyebrow}>{data.eyebrow}</p>
          <h2 id="contact-cta-heading" className={styles.heading}>
            {data.heading.join(' ')}
          </h2>
        </div>
        <div className={styles.accentLine} aria-hidden="true" />
        <p className={styles.body}>{data.body}</p>
        <div className={styles.ctaRow}>
          <Link href={data.primaryCta.href} className={styles.ctaPrimary}>
            {data.primaryCta.label}
          </Link>
          <Link href={data.secondaryCta.href} className={styles.ctaSecondary}>
            {data.secondaryCta.label}
          </Link>
        </div>
        <Link href={`mailto:${data.email}`} className={styles.emailLink}>
          {data.email}
        </Link>
        <div className={styles.locationFooter}>
          {data.locations.map((loc, i) => (
            <React.Fragment key={loc.city}>
              {i > 0 && <span className={styles.locationDot} aria-hidden="true" />}
              <span className={styles.locationText}>{loc.city}</span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  )
}
