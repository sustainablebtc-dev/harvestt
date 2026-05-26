import type { HowWeCreateValueData } from '@/data/types'
import ValueCard from './ValueCard'
import styles from './HowWeCreateValue.module.scss'

interface HowWeCreateValueProps {
  data: HowWeCreateValueData
}

export default function HowWeCreateValue({ data }: HowWeCreateValueProps) {
  return (
    <section className={styles.section} aria-labelledby="how-we-create-value-heading">
      <div className={styles.section__overlay} />
      <div className={styles.inner}>
        {/* Header Block */}
        <div className={styles.headerBlock}>
          <p className={styles.sectionLabel}>{data.sectionLabel}</p>
          <h2 id="how-we-create-value-heading" className={styles.heading}>
            {data.heading}
          </h2>
          <div className={styles.accentLine} aria-hidden="true" />
          <p className={styles.intro}>{data.intro}</p>
        </div>

        {/* Cards Grid */}
        <div className={styles.cardsGrid}>
          {data.cards.map((card, index) => {
            const variant = card.title.toLowerCase() as 'access' | 'transparency' | 'sustainability'
            return (
              <ValueCard
                key={`${card.title}-${index}`}
                title={card.title}
                description={card.description}
                supportingStatement={card.supportingStatement}
                variant={variant}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}
