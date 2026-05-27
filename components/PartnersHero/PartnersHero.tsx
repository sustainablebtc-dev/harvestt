import Link from 'next/link'
import Image from 'next/image'
import partnersHeroDataRaw from '@/data/partners/hero.json'
import institutionalPartnersDataRaw from '@/data/partners/institutional-partners.json'
import type { PartnersHeroData, MiningPartnersData } from '@/data/types'
import styles from './PartnersHero.module.scss'

const data = partnersHeroDataRaw as PartnersHeroData
const partnersData = institutionalPartnersDataRaw as MiningPartnersData

export default function PartnersHero() {
  return (
    <section className={styles.hero} aria-labelledby="partners-hero-heading">
      <div className={styles.heroInner}>
        {/* Top: headline and supporting copy */}
        <div className={styles.heroContent}>
          <div className={styles.titleGroup}>
            <p className={styles.eyebrow}>{data.eyebrow}</p>
            <h1 id="partners-hero-heading" className={styles.headline}>
              {data.headline}
            </h1>
            <div className={styles.accentLine} aria-hidden="true" />
          </div>

          <p className={styles.bodyPrimary}>{data.body}</p>

          {/* CTAs */}
          <div className={styles.ctaRow}>
            <Link href={data.primaryCta.href} className={styles.ctaPrimary}>
              {data.primaryCta.label}
            </Link>
            <Link href={data.secondaryCta.href} className={styles.ctaSecondary}>
              {data.secondaryCta.label}
              <i className="bi bi-arrow-right" aria-hidden="true" />
            </Link>
          </div>
        </div>

        {/* Institutional Partners Section */}
        <div className={styles.partnersSection}>
          <h2 className={styles.partnersHeading}>{partnersData.heading}</h2>
          <div className={styles.logosRow}>
            {partnersData.partners.map((partner) => (
              <Image
                key={partner.name}
                src={partner.logoSrc}
                alt={partner.name}
                width={partner.width}
                height={partner.height}
                className={styles.logo}
              />
            ))}
          </div>
          <Link href={partnersData.ctaHref} className={styles.partnersCta}>
            {partnersData.ctaLabel}
            <i className="bi bi-arrow-right" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}
