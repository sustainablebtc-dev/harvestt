import Link from 'next/link'
import Image from 'next/image'
import partnerNetworkDataRaw from '@/data/partners/partner-network.json'
import type { PartnerNetworkData } from '@/data/types'
import styles from './PartnerNetwork.module.scss'

const data = partnerNetworkDataRaw as PartnerNetworkData

export default function PartnerNetwork() {
  return (
    <section className={styles.section} aria-labelledby="partner-network-heading">
      <div className={styles.inner}>
        <div className={styles.headerBlock}>
          <p className={styles.sectionLabel}>{data.sectionLabel}</p>
          <h2 id="partner-network-heading" className={styles.heading}>{data.heading}</h2>
          <p className={styles.intro}>{data.intro}</p>
        </div>

        <div className={styles.categories}>
          {data.categories.map((category) => (
            <div key={category.id} className={styles.category}>
              <h3 className={styles.categoryTitle}>{category.title}</h3>
              <div className={styles.logosRow}>
                {category.partners.map((partner) => (
                  <figure key={partner.name} className={styles.partner}>
                    <Image
                      src={partner.logoSrc}
                      alt={partner.name}
                      width={partner.width}
                      height={partner.height}
                      className={styles.logo}
                    />
                    {partner.credential && (
                      <figcaption className={styles.credential}>{partner.credential}</figcaption>
                    )}
                  </figure>
                ))}
              </div>
              {category.additionalNames.length > 0 && (
                <ul className={styles.namesList}>
                  {category.additionalNames.map((name) => (
                    <li key={name} className={styles.nameItem}>{name}</li>
                  ))}
                </ul>
              )}
              {category.footnote && (
                <p className={styles.footnote}>{category.footnote}</p>
              )}
            </div>
          ))}
        </div>

        <Link href={data.ctaHref} className={styles.cta}>
          {data.ctaLabel}
          <i className="bi bi-arrow-right" aria-hidden="true" />
        </Link>
      </div>
    </section>
  )
}
