import Link from 'next/link'
import valueExchangeDataRaw from '@/data/partners/value-exchange.json'
import type { ValueExchangeData } from '@/data/types'
import styles from './ValueExchange.module.scss'

const data = valueExchangeDataRaw as ValueExchangeData

export default function ValueExchange() {
  return (
    <section className={styles.section} aria-labelledby="value-exchange-heading">
      <div className={styles.inner}>
        <div className={styles.headerBlock}>
          <p className={styles.sectionLabel}>{data.sectionLabel}</p>
          <h2 id="value-exchange-heading" className={styles.heading}>{data.heading}</h2>
        </div>

        <div className={styles.paths}>
          {data.paths.map((path) => (
            <article key={path.id} className={styles.pathCard}>
              <p className={styles.pathLabel}>{path.label}</p>
              <h3 className={styles.pathTitle}>{path.title}</h3>
              <p className={styles.pathBody}>{path.body}</p>
            </article>
          ))}
        </div>

        <Link href={data.cta.href} className={styles.cta}>
          {data.cta.label}
          <i className="bi bi-arrow-right" aria-hidden="true" />
        </Link>
      </div>
    </section>
  )
}
