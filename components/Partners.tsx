import FadeIn from "./FadeIn";

const partners = ["CleanSpark", "Bitfarms", "Bitdeer", "Zero Two"];

export default function Partners() {
  return (
    <section className="py-24 md:py-32 bg-white border-t border-border">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <FadeIn>
          <span className="text-accent text-[13px] tracking-[0.15em] uppercase block mb-6 font-semibold">
            Mining Partners
          </span>
        </FadeIn>
        <FadeIn delay={100}>
          <h2 className="text-navy text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 tracking-[-0.02em] leading-[1.1]">
            Our Mining Partners
          </h2>
          <p className="text-muted text-lg font-normal mb-20">
            Representing approximately 24% of global Bitcoin hashrate
          </p>
        </FadeIn>
        <FadeIn delay={250}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 items-center">
            {partners.map((partner) => (
              <div
                key={partner}
                className="bg-white border border-border rounded-sm h-24 md:h-28 flex items-center justify-center transition-all duration-300 hover:border-accent/30 hover:shadow-sm"
              >
                <span className="text-muted font-mono text-xs tracking-widest uppercase">
                  {partner}
                </span>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
