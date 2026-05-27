import type { WhySustainableBTCData } from '@/data/types'
import PrincipleCard from './PrincipleCard'
import styles from './WhySustainableBTC.module.scss'

interface WhySustainableBTCProps {
  data: WhySustainableBTCData
}

export default function WhySustainableBTC({ data }: WhySustainableBTCProps) {
  return (
    <section className={styles.section} aria-labelledby="why-sustainable-btc-heading">
      <div className={styles.inner}>
        {/* Header Block */}
        <div className={styles.headerBlock}>
          <p className={styles.sectionLabel}>{data.sectionLabel}</p>
          <h2 id="why-sustainable-btc-heading" className={styles.heading}>
            {data.heading}
          </h2>
          <div className={styles.accentLine} aria-hidden="true" />
          <p className={styles.intro}>{data.intro}</p>
        </div>

        {/* Principles Grid */}
        <div className={styles.principlesGrid}>
          {data.principles.map((principle, index) => (
            <PrincipleCard
              key={`${principle.id}-${index}`}
              principle={principle}
              iconPath={`/icons/principles/${principle.id}.svg`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
