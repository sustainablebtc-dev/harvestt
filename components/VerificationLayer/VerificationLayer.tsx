import React from 'react'
import verificationDataRaw from '@/data/verification/verification-steps.json'
import type { VerificationLayerData } from '@/data/types'
import styles from './VerificationLayer.module.scss'

const data = verificationDataRaw as VerificationLayerData

const subtitleColorClass: Record<string, string> = {
  yellow: styles.subtitleYellow,
  green: styles.subtitleGreen,
  blue: styles.subtitleBlue,
}

export default function VerificationLayer() {
  return (
    <section className={styles.section} aria-labelledby="verification-heading">
      <div className={styles.inner}>
        <div className={styles.sectionHeader}>
          <div className={styles.headingGroup}>
            <p className={styles.eyebrow}>{data.eyebrow}</p>
            <h2 id="verification-heading" className={styles.heading}>{data.heading}</h2>
          </div>
          <p className={styles.description}>{data.description}</p>
        </div>
        <div className={styles.stepsRow}>
          {data.steps.map((step, index) => (
            <React.Fragment key={step.number}>
              {index > 0 && <div className={styles.stepDivider} aria-hidden="true" />}
              <article className={styles.step}>
                <div className={styles.stepHeader}>
                  <p className={styles.stepNumber}>{step.number}</p>
                  <div className={styles.stepTitleGroup}>
                    <p className={styles.stepTitle}>{step.title}</p>
                    <p className={`${styles.stepSubtitle} ${subtitleColorClass[step.subtitleColor]}`}>
                      {step.subtitle}
                    </p>
                  </div>
                </div>
                <p className={styles.stepBody}>{step.body}</p>
                <div className={styles.capabilities}>
                  <p className={styles.capabilitiesLabel}>{data.capabilitiesLabel}</p>
                  <ul className={styles.capabilityList}>
                    {step.capabilities.map((cap) => (
                      <li key={cap} className={styles.capabilityItem}>
                        <span className={styles.bullet} aria-hidden="true" />
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  )
}
