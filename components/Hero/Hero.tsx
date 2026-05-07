import Link from 'next/link'
import Image from 'next/image'
import styles from './Hero.module.scss'

export default function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-heading">
      <div className={styles.heroInner}>
        {/* Left: copy */}
        <div className={styles.heroContent}>
          <div className={styles.titleGroup}>
            <p className={styles.eyebrow}>Institutional Energy Infrastructure — 2026</p>
            <h1 id="hero-heading" className={styles.headline}>Navigating the New Era of Capital</h1>
            <div className={styles.accentLine} aria-hidden="true" />
          </div>
          <div className={styles.bodyGroup}>
            <p className={styles.bodyPrimary}>
              Institutional-grade energy verification and attestation for Bitcoin mining infrastructure — enabling compliant capital to access Bitcoin with full energy transparency.
            </p>
            <p className={styles.bodySecondary}>
              Harvestt operates as the trust layer between renewable energy sources, Bitcoin mining operations, and institutional capital allocators — bridging a $15–16 trillion addressable market.
            </p>
          </div>
          <div className={styles.ctaRow}>
            <Link href="/contact" className={styles.ctaPrimary}>
              Speak With Our Team
            </Link>
            <Link href="/insights" className={styles.ctaSecondary}>
              Explore Insights
              <i className="bi bi-arrow-right" aria-hidden="true" />
            </Link>
          </div>
        </div>

        {/* Right: image stack */}
        <div className={styles.heroImageWrap}>
          <Image
            src="/hero-image.jpeg"
            alt="Modern institutional building"
            fill
            className={styles.heroImg}
            priority
          />
        </div>
      </div>
    </section>
  )
}
