import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import styles from './SBPPage.module.scss'
import sbpPageDataRaw from '@/data/about/sbp.json'
import type { SBPAction, SBPPageData } from '@/data/types'

const sbpPageData = sbpPageDataRaw as SBPPageData

function isExternalHref(href: string) {
  return href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:')
}

function ActionLink({
  action,
  className,
}: {
  action: SBPAction
  className: string
}) {
  if (isExternalHref(action.href)) {
    return (
      <a href={action.href} className={className} target="_blank" rel="noopener noreferrer">
        {action.label}
      </a>
    )
  }

  return (
    <Link href={action.href} className={className}>
      {action.label}
    </Link>
  )
}

export const metadata: Metadata = {
  title: sbpPageData.metadata.title,
  description: sbpPageData.metadata.description,
  openGraph: {
    title: sbpPageData.metadata.ogTitle,
    description: sbpPageData.metadata.ogDescription,
  },
}

export default function SBPPage() {
  return (
    <main className={styles.page}>
      <section className={styles.heroSection} aria-labelledby="sbp-hero-heading">
        <div className={styles.container}>
          <div className={styles.heroGrid}>
            <div className={styles.heroImagePanel}>
              <div className={styles.heroMediaStack}>
                <div className={styles.heroImageFrame}>
                  <Image
                    src={sbpPageData.hero.image.src}
                    alt={sbpPageData.hero.image.alt}
                    fill
                    priority
                    sizes="(min-width: 1280px) 34rem, (min-width: 1024px) 42vw, 100vw"
                    className={styles.heroImage}
                  />
                </div>
                <div className={styles.heroImageRow}>
                  {sbpPageData.hero.imageOptions.slice(1, 3).map((image) => (
                    <div key={image.src} className={styles.heroImageSecondaryFrame}>
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        sizes="(min-width: 1280px) 16rem, (min-width: 1024px) 20vw, 50vw"
                        className={styles.heroImage}
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className={styles.heroProofRail} aria-label="SBP proof points">
                {sbpPageData.hero.proofRail.map((item) => (
                  <div key={item.label} className={styles.proofRailItem}>
                    <p className={styles.proofValue}>{item.value}</p>
                    <p className={styles.proofLabel}>{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.heroContent}>
              <div className={styles.heroIntro}>
                <p className={styles.sectionLabel}>{sbpPageData.hero.sectionLabel}</p>
                <h1 id="sbp-hero-heading" className={styles.heroTitle}>
                  {sbpPageData.hero.title}
                </h1>
                <div className={styles.accentLine} aria-hidden="true" />
                <p className={styles.heroLead}>{sbpPageData.hero.lead}</p>
              </div>

              <div className={styles.heroThesisBlock}>
                <p className={styles.asideLabel}>{sbpPageData.hero.asideLabel}</p>
                <p className={styles.heroThesis}>{sbpPageData.hero.thesis}</p>
                <p className={styles.heroSupportingText}>{sbpPageData.hero.supportingText}</p>
              </div>

              <div className={styles.heroNarrative}>
                <div className={styles.heroBody}>
                  {sbpPageData.hero.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>

                <aside className={styles.heroAside} aria-labelledby="sbp-why-heading">
                  <p id="sbp-why-heading" className={styles.asideLabel}>
                    {sbpPageData.hero.asideLabel}
                  </p>
                  <div className={styles.asideBody}>
                    {sbpPageData.hero.asideBody.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </aside>
              </div>

              <div className={styles.buttonRow}>
                {sbpPageData.hero.actions.map((action) => (
                  <ActionLink
                    key={action.href}
                    action={action}
                    className={action.variant === 'primary' ? styles.primaryButton : styles.secondaryButton}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="pillars-heading">
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <p className={styles.sectionLabel}>{sbpPageData.pillars.sectionLabel}</p>
            <h2 id="pillars-heading" className={styles.sectionTitle}>
              {sbpPageData.pillars.heading}
            </h2>
          </div>
          <div className={styles.pillarsGrid}>
            {sbpPageData.pillars.items.map((pillar) => (
              <article key={pillar.title} className={styles.pillarCard}>
                <div className={styles.cardHeader}>
                  <h3 className={styles.cardTitle}>{pillar.title}</h3>
                  <p className={styles.cardLabel}>{pillar.subtitle}</p>
                </div>
                <p className={styles.cardBody}>{pillar.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionMuted}`} aria-labelledby="overview-heading">
        <div className={styles.container}>
          <div className={styles.sectionShell}>
            <div className={styles.sectionIntro}>
              <p className={styles.sectionLabel}>{sbpPageData.overview.sectionLabel}</p>
              <h2 id="overview-heading" className={styles.sectionTitle}>
                {sbpPageData.overview.heading}
              </h2>
            </div>
            <p className={styles.sectionDescription}>{sbpPageData.overview.intro}</p>
          </div>

          <div className={styles.overviewGrid}>
            {sbpPageData.overview.cards.map((card) => (
              <article key={card.title} className={styles.overviewCard}>
                <h3 className={styles.subsectionTitle}>{card.title}</h3>
                <p className={styles.cardBody}>{card.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="proof-heading">
        <div className={styles.container}>
          <div className={styles.sectionShell}>
            <div className={styles.sectionIntro}>
              <p className={styles.sectionLabel}>{sbpPageData.proof.sectionLabel}</p>
              <h2 id="proof-heading" className={styles.sectionTitle}>
                {sbpPageData.proof.heading}
              </h2>
            </div>
            <p className={styles.sectionDescription}>{sbpPageData.proof.intro}</p>
          </div>

          <div className={styles.proofGrid}>
            {sbpPageData.proof.items.map((item) => (
              <article key={item.label} className={styles.proofCard}>
                <p className={styles.proofValue}>{item.value}</p>
                <p className={styles.proofLabel}>{item.label}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="operating-model-heading">
        <div className={styles.container}>
          <div className={styles.sectionShell}>
            <div className={styles.sectionIntro}>
              <p className={styles.sectionLabel}>{sbpPageData.operatingModel.sectionLabel}</p>
              <h2 id="operating-model-heading" className={styles.sectionTitle}>
                {sbpPageData.operatingModel.heading}
              </h2>
            </div>
            <p className={styles.sectionDescription}>{sbpPageData.operatingModel.intro}</p>
          </div>

          <div className={styles.stepsList}>
            {sbpPageData.operatingModel.steps.map((step) => (
              <article key={step.number} className={styles.stepCard}>
                <div className={styles.stepNumberWrap}>
                  <p className={styles.stepNumber}>{step.number}</p>
                </div>
                <div className={styles.stepContent}>
                  <div className={styles.stepHeader}>
                    <h3 className={styles.subsectionTitle}>{step.title}</h3>
                    <p className={styles.cardLabel}>{step.subtitle}</p>
                  </div>
                  <p className={styles.cardBody}>{step.body}</p>
                </div>
                <ul className={styles.stepBullets}>
                  {step.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionMuted}`} aria-labelledby="standards-heading">
        <div className={styles.container}>
          <div className={styles.sectionShell}>
            <div className={styles.sectionIntro}>
              <p className={styles.sectionLabel}>{sbpPageData.standards.sectionLabel}</p>
              <h2 id="standards-heading" className={styles.sectionTitle}>
                {sbpPageData.standards.heading}
              </h2>
            </div>
            <p className={styles.sectionDescription}>{sbpPageData.standards.intro}</p>
          </div>

          <div className={styles.standardsGrid}>
            {sbpPageData.standards.items.map((item) => (
              <article key={item.title} className={styles.standardCard}>
                <h3 className={styles.subsectionTitle}>{item.title}</h3>
                <p className={styles.cardBody}>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.marketSection}`} aria-labelledby="market-heading">
        <div className={styles.container}>
          <div className={styles.marketLayout}>
            <div className={styles.marketContent}>
              <div className={styles.marketIntro}>
                <p className={styles.sectionLabel}>{sbpPageData.market.sectionLabel}</p>
                <h2 id="market-heading" className={styles.sectionTitle}>
                  {sbpPageData.market.heading}
                </h2>
                <p className={styles.sectionDescription}>{sbpPageData.market.intro}</p>
              </div>

              <div className={styles.marketStats}>
                {sbpPageData.market.highlights.map((highlight) => (
                  <div key={highlight.label} className={styles.marketStat}>
                    <p className={styles.marketValue}>{highlight.value}</p>
                    <p className={styles.marketStatLabel}>{highlight.label}</p>
                    <p className={styles.marketStatBody}>{highlight.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}