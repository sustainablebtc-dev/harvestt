import React from 'react'
import Link from 'next/link'
import marketDataRaw from '@/data/content/market-insights.json'
import type { MarketInsightsData } from '@/data/types'
import styles from './MarketInsights.module.scss'

const marketData = marketDataRaw as MarketInsightsData

export default function MarketInsights() {
  return (
    <section className={styles.marketInsights} aria-labelledby="market-insights-heading">
      <div className={styles.inner}>
        {/* Section header */}
        <div className={styles.sectionHeader}>
          <div className={styles.headingGroup}>
            <p className={styles.eyebrow}>{marketData.sectionLabel}</p>
            <h2 id="market-insights-heading" className={styles.heading}>
              {marketData.heading}
            </h2>
          </div>
          <Link href={marketData.viewAllHref} className={styles.viewAllLink}>
            {marketData.viewAllLabel}
            <i className="bi bi-arrow-right" aria-hidden="true" />
          </Link>
        </div>

        {/* Cards */}
        <div className={styles.cardsRow}>
          {marketData.articles.map((article, index) => (
            <React.Fragment key={article.href}>
              {index > 0 && <div className={styles.divider} aria-hidden="true" />}
              <article className={styles.card}>
                {/* Meta */}
                <div className={styles.cardMeta}>
                  <span className={styles.category}>{article.category}</span>
                  <span className={styles.date}>{article.date}</span>
                </div>
                {/* Body */}
                <div className={styles.cardBody}>
                  <h3 className={styles.cardTitle}>{article.title}</h3>
                  <p className={styles.cardText}>{article.body}</p>
                </div>
                {/* Tags */}
                <div className={styles.tags}>
                  {article.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>{tag}</span>
                  ))}
                </div>
                {/* Footer */}
                <div className={styles.cardFooter}>
                  <span className={styles.readTime}>{article.readTime}</span>
                  <Link
                    href={article.href}
                    className={styles.readMore}
                    aria-label={`Read more: ${article.title}`}
                  >
                    READ MORE
                    <i className="bi bi-arrow-right" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  )
}
