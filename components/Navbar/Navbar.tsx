'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import navbarDataRaw from '@/data/nav/navbar.json'
import type { NavbarData } from '@/data/types'
import styles from './Navbar.module.scss'

const navbarData = navbarDataRaw as NavbarData

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Close menu and restore scroll when viewport crosses desktop breakpoint
  useEffect(() => {
    const mql = window.matchMedia('(min-width: 1024px)')
    const handleBreakpoint = (e: MediaQueryListEvent) => {
      if (e.matches) setIsMenuOpen(false)
    }
    mql.addEventListener('change', handleBreakpoint)
    return () => mql.removeEventListener('change', handleBreakpoint)
  }, [])

  // Escape key + body scroll lock
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMenuOpen(false)
    }
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  const closeMenu = () => setIsMenuOpen(false)
  const toggleMenu = () => setIsMenuOpen((prev) => !prev)

  return (
    <nav className={styles.navbar} aria-label="Main navigation">
      <div className={styles.navInner}>
      {/* Left group: Logo + nav links */}
      <div className={styles.navLeft}>
        <Link href="/" aria-label="Harvestt home" onClick={closeMenu}>
          <Image
            src="/logo.svg"
            alt="Harvestt"
            width={127}
            height={24}
            priority
          />
        </Link>

        <ul className={styles.navLinks} role="list">
          {navbarData.links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className={styles.navLinkItem}>
                <span className={styles.navLinkText}>{link.label}</span>
                {link.hasDropdown && (
                  <i className="bi bi-chevron-down" aria-hidden="true" />
                )}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Right group: Login + CTA + hamburger (unified) */}
      <div className={styles.navActions}>
        <Link href={navbarData.login.href} className={styles.loginLink}>
          {navbarData.login.label}
        </Link>
        <Link href={navbarData.cta.href} className={styles.ctaButton}>
          {navbarData.cta.label}
        </Link>
        <button
          className={styles.hamburgerBtn}
          onClick={toggleMenu}
          aria-controls="mobile-menu"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          type="button"
        >
          {isMenuOpen ? (
            <i className="bi bi-x" aria-hidden="true" />
          ) : (
            <i className="bi bi-list" aria-hidden="true" />
          )}
        </button>
      </div>
      </div>{/* /navInner */}

      {/* Mobile menu overlay */}
      <div
        id="mobile-menu"
        className={`${styles.mobileMenu}${isMenuOpen ? ` ${styles.mobileMenuOpen}` : ''}`}
        role={isMenuOpen ? 'dialog' : undefined}
        aria-label={isMenuOpen ? 'Navigation menu' : undefined}
        aria-hidden={!isMenuOpen}
      >
        <ul className={styles.mobileNavLinks} role="list">
          {navbarData.links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={styles.mobileLinkItem}
                onClick={closeMenu}
              >
                <span>{link.label}</span>
                {link.hasDropdown && (
                  <i className="bi bi-chevron-down" aria-hidden="true" />
                )}
              </Link>
            </li>
          ))}
        </ul>

        <div className={styles.mobileActions}>
          <Link
            href={navbarData.login.href}
            className={styles.loginLink}
            onClick={closeMenu}
          >
            {navbarData.login.label}
          </Link>
          <Link
            href={navbarData.cta.href}
            className={styles.mobileCtaButton}
            onClick={closeMenu}
          >
            {navbarData.cta.label}
          </Link>
        </div>
      </div>
    </nav>
  )
}
