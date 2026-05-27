import type { FooterLinkGroup, SocialLink, FooterConfig } from "@/data/types";
import footerLinksRaw from "@/data/footer/footer-links.json";
import socialRaw from "@/data/footer/social.json";
import footerConfigRaw from "@/data/footer/footer-config.json";
import styles from "./Footer.module.scss";
import ContactCTA from '@/components/ContactCTA/ContactCTA'

const footerLinks = footerLinksRaw as FooterLinkGroup[];
const social = socialRaw as SocialLink[];
const footerConfig = footerConfigRaw as FooterConfig;

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* ──────── Contact CTA ──────── */}
      <ContactCTA />

      {/* ──────── Main Content ──────── */}
      <section className={styles.footerMain} aria-label="Footer main content">
        <div className={styles.footerMainInner}>
          {/* Left column: branding, office, social */}
          <section className={styles.brandingZone} aria-label="Company information">
            <img src="/logo-light.svg" alt="Sustainable Bitcoin Protocol logo" width={126} height={24} />

            <p className={styles.tagline}>{footerConfig.tagline}</p>

            <div className={styles.officeBlock}>
              <h3 className={styles.blockLabel}>
                {footerConfig.registeredOffice.label}
              </h3>
              <address className={styles.addressLines}>
                {footerConfig.registeredOffice.lines.map((line) => (
                  <span key={line} className={styles.addressLine}>
                    {line}
                  </span>
                ))}
              </address>
            </div>

            <div className={styles.socialBlock}>
              <h3 className={styles.blockLabel}>Follow</h3>
              <ul className={styles.socialList} role="list">
                {social.map((s) => (
                  <li key={s.platform}>
                    <a
                      href={s.href}
                      aria-label={s.label}
                      className={styles.socialLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {s.platform}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Right column: link groups */}
          <nav aria-label="Footer navigation" className={styles.navigationZone}>
            {footerLinks.map((group) => (
              <section key={group.heading} className={styles.linkGroup}>
                <h3 className={styles.groupHeading}>{group.heading}</h3>
                <ul className={styles.linkList} role="list">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <a href={link.href} className={styles.footerLink}>
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </nav>
        </div>
      </section>

      {/* ──────── Footer Bottom Bar ──────── */}
      <section className={styles.footerBar} aria-label="Footer legal">
        <div className={styles.footerBarInner}>
          <small className={styles.copyright}>{footerConfig.copyright}</small>
          <nav aria-label="Footer legal links" className={styles.bottomNav}>
            {footerConfig.bottomLinks.map((link) => (
              <a key={link.label} href={link.href} className={styles.bottomLink}>
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </section>
    </footer>
  );
}
