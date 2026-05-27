import regulatoryDataRaw from '@/data/regulatory/regulatory.json'
import type { RegulatoryData } from '@/data/types'
import Image from 'next/image'
import styles from './RegulatoryInfrastructure.module.scss'

const data = regulatoryDataRaw as RegulatoryData

const badgeClass: Record<string, string> = {
  monitoring: styles.badgeMonitoring,
  compliant: styles.badgeCompliant,
  licensed: styles.badgeLicensed,
  aligned: styles.badgeAligned,
}

export default function RegulatoryInfrastructure() {
  return (
    <section className={styles.section} aria-labelledby="regulatory-heading">
      <div className={styles.inner}>
        {/* Top: two-column layout */}
        <div className={styles.topRow}>
          <div className={styles.leftCol}>
            <div className={styles.headingGroup}>
              <p className={styles.eyebrow}>{data.eyebrow}</p>
              <h2 id="regulatory-heading" className={styles.heading}>{data.heading}</h2>
              <div className={styles.accentLine} aria-hidden="true" />
            </div>
            {data.body.map((para, i) => (
              <p key={i} className={i === 0 ? styles.bodyPrimary : styles.bodySecondary}>{para}</p>
            ))}
          </div>
          <div className={styles.panel}>
            <div className={styles.panelHeader}>
              <p className={styles.panelHeaderText}>{data.panelHeading}</p>
            </div>
            {data.items.map((item) => (
              <div key={item.name} className={styles.panelRow}>
                <div className={styles.panelRowInfo}>
                  <p className={styles.itemName}>{item.name}</p>
                  <p className={styles.itemDesc}>{item.description}</p>
                </div>
                {item.badgeVariant && (
                  <span className={`${styles.badge} ${badgeClass[item.badgeVariant]}`}>
                     {item.badge}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom: ecosystem logos */}
        <div className={styles.ecosystem}>
          <p className={styles.ecosystemHeading}>{data.ecosystemHeading}</p>
          <div className={styles.logosRow}>
            {data.ecosystemLogos.map((logo) => (
              <Image
                key={logo.name}
                src={logo.logoSrc}
                alt={logo.name}
                width={logo.width}
                height={logo.height}
                className={styles.logo}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
