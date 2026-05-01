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
    <footer>
      {/* —— Contact Us —— */}
      <ContactCTA />

      {/* ── FooterMain ── */}
      <div className={styles.footerMain}>
        <div className={styles.footerMainInner}>
          {/* Left column */}
          <div className={styles.leftCol}>
            <img src="/logo-white.svg" alt="Harvestt" width={126} height={24} />

            <p className={styles.tagline}>{footerConfig.tagline}</p>

            <div className={styles.officeBlock}>
              <span className={styles.blockLabel}>
                {footerConfig.registeredOffice.label}
              </span>
              <div className={styles.addressLines}>
                {footerConfig.registeredOffice.lines.map((line) => (
                  <span key={line} className={styles.addressLine}>
                    {line}
                  </span>
                ))}
              </div>
            </div>

            <div className={styles.socialBlock}>
              <span className={styles.blockLabel}>Social</span>
              <ul className={styles.socialList}>
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
          </div>

          {/* Right column — link groups */}
          <nav aria-label="Footer navigation" className={styles.rightCol}>
            {footerLinks.map((group) => (
              <div key={group.heading} className={styles.linkGroup}>
                <span className={styles.groupHeading}>{group.heading}</span>
                <ul className={styles.linkList}>
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <a href={link.href} className={styles.footerLink}>
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>
      </div>

      {/* ── FooterBar ── */}
      <div className={styles.footerBar}>
        <div className={styles.footerBarInner}>
          <span className={styles.copyright}>{footerConfig.copyright}</span>
          <nav aria-label="Footer bottom links" className={styles.bottomNav}>
            {footerConfig.bottomLinks.map((link) => (
              <a key={link.label} href={link.href} className={styles.bottomLink}>
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
