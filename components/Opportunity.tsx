import FadeIn from "./FadeIn";

export default function Opportunity() {
  return (
    <section id="opportunity" className="py-24 md:py-32 bg-surface border-t border-border">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <FadeIn>
          <span className="text-accent text-[13px] tracking-[0.15em] uppercase block mb-6 font-semibold">
            The Opportunity
          </span>
        </FadeIn>
        <FadeIn delay={100}>
          <h2 className="text-navy text-3xl md:text-4xl lg:text-5xl font-semibold mb-16 tracking-[-0.02em] leading-[1.1]">
            Unlocking Institutional Capital
          </h2>
        </FadeIn>
        <FadeIn delay={200}>
          <div className="bg-white border border-border rounded-sm p-10 md:p-14 inline-block mb-12">
            <span className="text-accent text-6xl md:text-7xl lg:text-8xl font-semibold tracking-[-0.02em]">
              $15&ndash;16T
            </span>
          </div>
        </FadeIn>
        <FadeIn delay={300}>
          <p className="text-primary text-lg font-normal leading-[1.6] max-w-3xl">
            An estimated $15&ndash;16 trillion in global institutional capital
            is currently restricted from Bitcoin exposure due to climate
            investment mandates. These funds&nbsp;&mdash; including EU SFDR
            Article 8/9 vehicles, net-zero sovereign wealth funds, and U.S.
            public pension systems&nbsp;&mdash; cannot allocate to Bitcoin
            without a credible energy verification layer. Harvestt provides
            that layer, enabling compliant institutional access to Bitcoin for
            the first time.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
