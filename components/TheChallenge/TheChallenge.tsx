import challengeDataRaw from '@/data/challenge/challenge.json'
import type { ChallengeData } from '@/data/types'
import styles from './TheChallenge.module.scss'

const data = challengeDataRaw as ChallengeData

export default function TheChallenge() {
  return (
    <section className={styles.section} aria-labelledby="challenge-heading">
      <div className={styles.inner}>
        <div className={styles.sidebar}>
          <p className={styles.sidebarLabel}>{data.sidebarLabel}</p>
        </div>
        <div className={styles.main}>
          <h2 id="challenge-heading" className={styles.heading}>{data.heading}</h2>
          <div className={styles.bodyGrid}>
            {data.bodyColumns.map((col, i) => (
              <div key={i} className={styles.bodyCol}>
                {col.map((para, j) => (
                  <p key={j} className={styles.bodyText}>{para}</p>
                ))}
              </div>
            ))}
          </div>
          <blockquote className={styles.quote}>
            <p className={styles.quoteText}>{data.quote.text}</p>
            <cite className={styles.quoteAttribution}>{data.quote.attribution}</cite>
          </blockquote>
          <div className={styles.statsGrid}>
            {data.stats.map((stat) => (
              <div key={stat.value} className={styles.statCell}>
                <p className={styles.statValue}>{stat.value}</p>
                <p className={styles.statDesc}>{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
