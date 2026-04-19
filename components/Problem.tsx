import FadeIn from "./FadeIn";

export default function Problem() {
  return (
    <section id="problem" className="py-24 md:py-32 bg-white border-t border-border">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <FadeIn>
          <span className="text-accent text-[13px] tracking-[0.15em] uppercase block mb-6 font-semibold">
            The Challenge
          </span>
        </FadeIn>
        <FadeIn delay={100}>
          <h2 className="text-navy text-3xl md:text-4xl lg:text-5xl font-semibold mb-14 tracking-[-0.02em] leading-[1.1]">
            Bitcoin&rsquo;s Primary Institutional Adoption Barrier
          </h2>
        </FadeIn>
        <div className="space-y-8 text-primary text-lg font-normal leading-[1.6]">
          <FadeIn delay={200}>
            <p>
              Energy consumption remains the single largest barrier preventing
              institutional capital from allocating to Bitcoin. Trillions of
              dollars in mandated capital&nbsp;&mdash; including EU SFDR Article
              8/9 funds, net-zero sovereign wealth funds, and U.S. public
              pension systems&nbsp;&mdash; are structurally restricted from
              Bitcoin exposure due to the absence of standardized energy
              verification.
            </p>
          </FadeIn>
          <FadeIn delay={300}>
            <p>
              Harvestt removes that barrier. Our protocol verifies the energy
              sources used by Bitcoin mining operations at the facility level,
              issuing on-chain attestation tokens (SBP tokens) that provide a
              transparent, auditable record of clean energy usage. This creates
              the verification layer that enables institutional
              products&nbsp;&mdash; including ETFs, separately managed accounts,
              and custody solutions&nbsp;&mdash; to offer energy-verified
              Bitcoin exposure.
            </p>
          </FadeIn>
          <FadeIn delay={400}>
            <p className="text-navy font-medium">
              We don&rsquo;t advocate for any single energy source. We verify
              and attest. The market decides what it values.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
