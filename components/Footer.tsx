import Logo from "./Logo";

const columns = [
  {
    heading: "Products",
    links: [
      { label: "SBP Tokens", href: "#" },
      { label: "Verification Protocol", href: "#" },
      { label: "Attestation API", href: "#" },
      { label: "Institutional Custody", href: "#" },
    ],
  },
  {
    heading: "Insights",
    links: [
      { label: "Market Outlook", href: "#" },
      { label: "Research & Reports", href: "#" },
      { label: "Energy Data", href: "#" },
      { label: "Case Studies", href: "#" },
    ],
  },
  {
    heading: "About Us",
    links: [
      { label: "Our Mission", href: "#" },
      { label: "Leadership", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Press", href: "#" },
      { label: "Contact", href: "mailto:hello@harvestt.com" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Cookie Policy", href: "#" },
      { label: "Regulatory Disclosures", href: "#" },
      { label: "Accessibility", href: "#" },
    ],
  },
];

function IconLinkedIn() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6ZM2 9h4v12H2ZM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
        fill="currentColor"
      />
    </svg>
  );
}

function IconX() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-surface">
      <div className="h-px bg-border" />

      {/* ── Main footer grid ─────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-12 lg:gap-16">
          {/* Logo column */}
          <div className="col-span-2">
            <Logo
              width={180}
              className="w-[160px] md:w-[180px] opacity-40 grayscale"
              variant="dark"
            />
            <p className="text-muted-light text-xs leading-relaxed mt-6 max-w-[260px]">
              Institutional-grade clean energy verification for Bitcoin mining
              infrastructure.
            </p>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.heading}>
              <h4 className="text-navy text-[11px] tracking-[0.12em] uppercase font-semibold mb-5">
                {col.heading}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-muted text-[13px] hover:text-accent transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* ── Bottom bar ───────────────────────────────────────── */}
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-muted-light text-xs">
            &copy; {new Date().getFullYear()} Sustainable Digital Solutions,
            Limited (ADGM Reg.&nbsp;No.&nbsp;26026). All rights reserved.
          </span>

          <div className="flex items-center gap-5">
            <a
              href="#"
              aria-label="LinkedIn"
              className="text-muted-light hover:text-navy transition-colors duration-200"
            >
              <IconLinkedIn />
            </a>
            <a
              href="#"
              aria-label="X (formerly Twitter)"
              className="text-muted-light hover:text-navy transition-colors duration-200"
            >
              <IconX />
            </a>
          </div>
        </div>
      </div>

      {/* ── Regulatory Disclosure ────────────────────────────── */}
      <div className="border-t border-border-dim">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10">
          <h5 className="text-muted-light text-[10px] tracking-[0.12em] uppercase font-semibold mb-4">
            Important Regulatory Disclosure
          </h5>
          <div className="text-muted-light/70 text-[11px] leading-[1.7] space-y-3 max-w-5xl">
            <p>
              Harvestt operates as Sustainable Digital Solutions, Limited, a
              company registered in the Abu Dhabi Global Market (ADGM Reg.
              No.&nbsp;26026) within Hub71, Abu Dhabi&rsquo;s sovereign-backed
              technology ecosystem supported by Mubadala Investment Company.
              Harvestt is not a registered investment adviser, broker-dealer, or
              financial institution in any jurisdiction.
            </p>
            <p>
              The information provided on this website and through Harvestt
              products is for informational purposes only and does not
              constitute investment advice, financial advice, trading advice, or
              any other form of advice. SBP tokens are attestation instruments
              representing verified clean energy usage in Bitcoin mining
              operations; they are not securities, commodities, or financial
              instruments. Nothing on this website should be construed as a
              solicitation, recommendation, endorsement, or offer to buy or sell
              any security, financial product, or digital asset.
            </p>
            <p>
              Past performance of any verified mining operation is not
              indicative of future results. Energy verification attestations are
              based on documentation submitted by mining partners and validated
              through Harvestt&rsquo;s proprietary protocol; Harvestt does not
              guarantee the accuracy, completeness, or timeliness of
              third-party data. Institutional investors should conduct their own
              due diligence and consult qualified legal, tax, and financial
              advisors before making any investment decisions.
            </p>
            <p>
              Harvestt products and services may not be available in all
              jurisdictions. Users are responsible for compliance with
              applicable local laws and regulations. By accessing this website,
              you acknowledge that you have read and understood these
              disclosures.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
