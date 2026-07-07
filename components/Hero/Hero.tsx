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
            <h1 id="hero-heading" className={styles.headline}>Where Climate Mandated Capital Meets Bitcoin</h1>
            <div className={styles.accentLine} aria-hidden="true" />
          </div>
          <div className={styles.bodyGroup}>
            <p className={styles.bodyPrimary}>
              Institutional-grade energy verification for Bitcoin mining infrastructure. Enabling climate mandated capital to access Bitcoin with full energy transparency.
            </p>
            <p className={styles.bodySecondary}>
              The SBP token turns verified clean-energy mining into an investable environmental commodity - bridging the $15-16 trillion of climate mandated capital with Bitcoin.
            </p>
          </div>
          <div className={styles.ctaRow}>
            <Link href="/contact-us" className={styles.ctaPrimary}>
              SPEAK WITH OUR TEAM
            </Link>
            <Link href="/partners" className={styles.ctaSecondary}>
              EXPLORE INSIGHTS
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
