'use client'

import { useState } from 'react'
import type { PartnerPathwaysData, PartnerTab } from '@/data/types'
import styles from './PartnerPathways.module.scss'

interface PartnerPathwaysProps {
  data: PartnerPathwaysData
}

export default function PartnerPathways({ data }: PartnerPathwaysProps) {
  const [activeTabId, setActiveTabId] = useState<string>(data.tabs[0].id)

  const activeTab = data.tabs.find(tab => tab.id === activeTabId)

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>, tabId: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      setActiveTabId(tabId)
    }
  }

  return (
    <section className={styles.section} aria-labelledby="partner-pathways-heading">
      <div className={styles.inner}>
        {/* Header Block */}
        <div className={styles.headerBlock}>
          <p className={styles.sectionLabel}>{data.sectionLabel}</p>
          <h2 id="partner-pathways-heading" className={styles.heading}>
            {data.heading}
          </h2>
          <p className={styles.intro}>{data.intro}</p>
        </div>

        {/* Tab Interface */}
        <div className={styles.tabsContainer}>
          {/* Tab List */}
          <div className={styles.tabList} role="tablist">
            {data.tabs.map(tab => (
              <button
                key={tab.id}
                className={`${styles.tab} ${activeTabId === tab.id ? styles.tabActive : ''}`}
                role="tab"
                aria-selected={activeTabId === tab.id}
                aria-controls={`panel-${tab.id}`}
                onClick={() => setActiveTabId(tab.id)}
                onKeyDown={(e) => handleKeyDown(e, tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content Panel */}
          {activeTab && (
            <div className={styles.contentPanel} id={`panel-${activeTab.id}`}>
              <p className={styles.tabDescription}>{activeTab.description}</p>
              <div className={styles.benefitsGrid}>
                {activeTab.benefits.map(benefit => (
                  <div key={benefit.title} className={styles.benefitCard}>
                    <h3 className={styles.benefitTitle}>{benefit.title}</h3>
                    <ul className={styles.keyPointsList}>
                      {benefit.keyPoints.map((point) => (
                        <li key={point} className={styles.keyPoint}>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
