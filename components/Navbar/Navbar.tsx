import Link from 'next/link'
import Image from 'next/image'
import navbarDataRaw from '@/data/nav/navbar.json'
import type { NavbarData } from '@/data/types'
import styles from './Navbar.module.scss'

const navbarData = navbarDataRaw as NavbarData

/**
 * Navbar — Main navigation component
 *
 * Server component that consumes navbar data from /data/nav/navbar.json
 * and renders semantic HTML with full keyboard accessibility and focus indicators.
 * Responsive mobile-first layout with design system tokens and Bootstrap icons.
 */
export default function Navbar() {
  return (
    <nav
      className={styles.navbar}
      aria-label="Main navigation"
    >
      <div className={styles.container}>
        {/* Left section: Logo + Nav Links */}
        <div className={styles.leftSection}>
          {/* Logo with responsive sizing */}
          <Link href="/" className={styles.logoLink} aria-label="Harvestt Home">
            <Image
              src="/logo.svg"
              alt="Harvestt"
              width={127}
              height={24}
              priority
              className={styles.logo}
            />
          </Link>

          {/* Navigation links */}
          <ul className={styles.navList} role="list">
            {navbarData.links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={styles.navLink}>
                  {link.label}
                  {link.hasDropdown && (
                    <i
                      className={`bi bi-chevron-down ${styles.chevron}`}
                      aria-hidden="true"
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Right section: Login + CTA */}
        <div className={styles.rightSection}>
          <Link href={navbarData.login.href} className={styles.loginLink}>
            {navbarData.login.label}
          </Link>

          <Link href={navbarData.cta.href} className={styles.ctaButton}>
            {navbarData.cta.label}
          </Link>
        </div>
      </div>
    </nav>
  )
}
