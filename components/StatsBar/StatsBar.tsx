import statsDataRaw from '@/data/stats/stats.json'
import type { StatsData } from '@/data/types'
import styles from './StatsBar.module.scss'

const statsData = statsDataRaw as StatsData

export default function StatsBar() {
  return (
    <section className={styles.statsBar} aria-label="Key statistics">
      <div className={styles.statsInner}>
        {statsData.stats.map((stat) => (
          <div key={stat.label} className={styles.statItem}>
            <span
              className={`${styles.statValue}${stat.accent ? ` ${styles.statValueAccent}` : ''}`}
            >
              {stat.value}
            </span>
            <span className={styles.statLabel}>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
