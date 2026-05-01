import React from 'react'
import marketDataRaw from '@/data/addressable-market/addressable-market.json'
import type { AddressableMarketData } from '@/data/types'
import styles from './AddressableMarket.module.scss'

const data = marketDataRaw as AddressableMarketData

export default function AddressableMarket() {
  return (
    <section className={styles.section} aria-labelledby="addressable-market-heading">
      <div className={styles.inner}>
        <div className={styles.headerGroup}>
          <h2 id="addressable-market-heading" className={styles.eyebrow}>{data.eyebrow}</h2>
          <div className={styles.displayRow}>
            <p className={styles.displayValue}>{data.displayValue}</p>
            <div className={styles.suffixGroup} aria-hidden="true">
              <p className={styles.displaySuffix}>{data.displaySuffix}</p>
              <div className={styles.suffixDesc}>
                {data.displaySuffixDescription.map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.accentLine} aria-hidden="true" />
        <p className={styles.body}>{data.body}</p>
        <div className={styles.statsRow}>
          {data.breakdownStats.map((stat, index) => (
            <React.Fragment key={stat.value}>
              {index > 0 && <div className={styles.separator} aria-hidden="true" />}
              <div className={styles.statItem}>
                <p className={styles.statValue}>{stat.value}</p>
                <p className={styles.statLabel}>{stat.label}</p>
                <p className={styles.statSublabel}>{stat.sublabel}</p>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  )
}
