'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import navbarDataRaw from '@/data/nav/navbar.json'
import type { NavbarData, DropdownItem } from '@/data/types'
import styles from './Navbar.module.scss'

const navbarData = navbarDataRaw as NavbarData

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Close menu and restore scroll when viewport crosses desktop breakpoint
  useEffect(() => {
    const mql = window.matchMedia('(min-width: 1024px)')
    const handleBreakpoint = (e: MediaQueryListEvent) => {
      if (e.matches) {
        setIsMenuOpen(false)
        setOpenDropdown(null)
      }
    }
    mql.addEventListener('change', handleBreakpoint)
    return () => mql.removeEventListener('change', handleBreakpoint)
  }, [])

  // Escape key + body scroll lock
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false)
        setOpenDropdown(null)
      }
    }
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  const closeMenu = () => {
    setIsMenuOpen(false)
    setOpenDropdown(null)
  }
  const toggleMenu = () => setIsMenuOpen((prev) => !prev)

  // Desktop: handle hover
  const handleNavItemMouseEnter = (label: string) => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current)
    setOpenDropdown(label)
  }

  const handleNavItemMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null)
    }, 200)
  }

  // Mobile: toggle dropdown on click
  const handleMobileDropdownToggle = (
    e: React.MouseEvent,
    label: string,
    hasDropdown: boolean
  ) => {
    if (hasDropdown) {
      e.preventDefault()
      setOpenDropdown((prev) => (prev === label ? null : label))
    }
  }

  // Mobile: close dropdown when clicking on a dropdown item
  const handleDropdownItemClick = () => {
    setOpenDropdown(null)
  }

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
              <li key={link.href} className={styles.navLinkWrapper}>
                <button
                  className={styles.navLinkItem}
                  onMouseEnter={() => link.hasDropdown && handleNavItemMouseEnter(link.label)}
                  onMouseLeave={() => link.hasDropdown && handleNavItemMouseLeave()}
                  onClick={() => !link.hasDropdown && (window.location.href = link.href)}
                  type="button"
                >
                  <span className={styles.navLinkText}>{link.label}</span>
                  {link.hasDropdown && (
                    <i
                      className={`bi bi-chevron-down ${
                        openDropdown === link.label ? styles.chevronOpen : ''
                      }`}
                      aria-hidden="true"
                    />
                  )}
                </button>

                {/* Desktop Dropdown */}
                {link.hasDropdown && link.children && openDropdown === link.label && (
                  <div
                    className={styles.desktopDropdown}
                    onMouseEnter={() => handleNavItemMouseEnter(link.label)}
                    onMouseLeave={handleNavItemMouseLeave}
                    role="menu"
                    aria-label={`${link.label} submenu`}
                  >
                    {link.children.map((item: DropdownItem) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={styles.dropdownItem}
                        role="menuitem"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
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
      </div>
      {/* /navInner */}

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
              {link.hasDropdown ? (
                <div className={styles.mobileDropdownWrapper}>
                  <button
                    className={styles.mobileLinkItem}
                    onClick={(e) => handleMobileDropdownToggle(e, link.label, true)}
                    type="button"
                  >
                    <span>{link.label}</span>
                    <i
                      className={`bi bi-chevron-down ${
                        openDropdown === link.label ? styles.chevronOpen : ''
                      }`}
                      aria-hidden="true"
                    />
                  </button>

                  {/* Mobile Dropdown (Accordion) */}
                  {openDropdown === link.label && link.children && (
                    <div className={styles.mobileDropdown} role="menu" aria-label={`${link.label} submenu`}>
                      {link.children.map((item: DropdownItem) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className={styles.mobileDropdownItem}
                          onClick={handleDropdownItemClick}
                          role="menuitem"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  href={link.href}
                  className={styles.mobileLinkItem}
                  onClick={closeMenu}
                >
                  <span>{link.label}</span>
                </Link>
              )}
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
