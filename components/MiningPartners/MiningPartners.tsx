import partnersDataRaw from '@/data/partners/mining-partners.json'
import type { MiningPartnersData } from '@/data/types'
import Image from 'next/image'
import Link from 'next/link'
import styles from './MiningPartners.module.scss'

const data = partnersDataRaw as MiningPartnersData

export default function MiningPartners() {
  return (
    <section className={styles.section} aria-labelledby="mining-partners-heading">
      <div className={styles.inner}>
        <h2 id="mining-partners-heading" className={styles.heading}>{data.heading}</h2>
        <div className={styles.logosRow}>
          {data.partners.map((partner) => (
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
        <Link href={data.ctaHref} className={styles.cta}>
          {data.ctaLabel}
          <i className="bi bi-arrow-right" aria-hidden="true" />
        </Link>
      </div>
    </section>
  )
}
