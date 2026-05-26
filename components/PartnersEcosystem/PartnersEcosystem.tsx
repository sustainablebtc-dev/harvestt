import type { PartnersEcosystemData } from '@/data/types'
import EcosystemDiagram from '@/components/EcosystemDiagram/EcosystemDiagram'
import styles from './PartnersEcosystem.module.scss'

interface PartnersEcosystemProps {
  data: PartnersEcosystemData
}

// Column accent colors — institutional, not decorative
// Drawn from the design system's structured accent palette
const COLUMN_ACCENTS = ['brand', 'separator', 'accent'] as const
type ColumnAccent = (typeof COLUMN_ACCENTS)[number]

const accentClass: Record<ColumnAccent, string> = {
  brand:     styles.columnAccentBrand,
  separator: styles.columnAccentSeparator,
  accent:    styles.columnAccentAccent,
}

// Strip placeholder brackets from bullet copy
// e.g. "[Institutional credibility: ...]" → "Institutional credibility: ..."
function stripBrackets(text: string): string {
  return text.replace(/^\[/, '').replace(/\]$/, '')
}

// Split "Key: value" bullets into a bold key and plain-text value
function parseBullet(text: string): { key: string; value: string } | null {
  const clean = stripBrackets(text)
  const colonIdx = clean.indexOf(':')
  if (colonIdx === -1) return null
  return {
    key:   clean.slice(0, colonIdx).trim(),
    value: clean.slice(colonIdx + 1).trim(),
  }
}

export default function PartnersEcosystem({ data }: PartnersEcosystemProps) {
  return (
    <section className={styles.ecosystem} aria-labelledby="ecosystem-heading">
      <div className={styles.ecosystemInner}>

        {/* ── Header block ──────────────────────────────────────────────── */}
        <div className={styles.headerBlock}>
          {data.sectionLabel && (
            <p className={styles.sectionLabel} aria-hidden="true">
              {data.sectionLabel}
            </p>
          )}
          <h2 id="ecosystem-heading" className={styles.heading}>
            {data.heading}
          </h2>
          <div className={styles.accentLine} aria-hidden="true" />
          <p className={styles.intro}>{data.intro}</p>
        </div>

        {/* ── Ecosystem Diagram ─────────────────────────────────────────── */}
        <div className={styles.diagramContainer}>
          <EcosystemDiagram columns={data.columns} />
        </div>

        {/* ── Three-Column Grid ─────────────────────────────────────────── */}
        <div className={styles.columnsGrid}>
          {data.columns.map((column, index) => {
            const accent = COLUMN_ACCENTS[index] ?? COLUMN_ACCENTS[0]
            return (
              <article
                key={index}
                className={`${styles.column} ${accentClass[accent]}`}
                aria-labelledby={`ecosystem-col-${index}`}
              >
                {/* Column header */}
                <header className={styles.columnHeader}>
                  <span className={styles.columnIndex} aria-hidden="true">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3
                    id={`ecosystem-col-${index}`}
                    className={styles.columnTitle}
                  >
                    {column.title}
                  </h3>
                </header>

                {/* Column intro */}
                <p className={styles.columnIntro}>{column.intro}</p>

                {/* Divider */}
                <div className={styles.columnDivider} aria-hidden="true" />

                {/* Bullet list */}
                <ul className={styles.bulletList} role="list">
                  {column.bullets.map((bullet, bulletIndex) => {
                    const parsed = parseBullet(bullet)
                    return (
                      <li key={bulletIndex} className={styles.bulletItem}>
                        {parsed ? (
                          <>
                            <span className={styles.bulletKey}>
                              {parsed.key}
                            </span>
                            <span className={styles.bulletSep} aria-hidden="true">
                              {' — '}
                            </span>
                            <span className={styles.bulletValue}>
                              {parsed.value}
                            </span>
                          </>
                        ) : (
                          stripBrackets(bullet)
                        )}
                      </li>
                    )
                  })}
                </ul>
              </article>
            )
          })}
        </div>

      </div>
    </section>
  )
}
