import Image from "next/image";
import FadeIn from "./FadeIn";

export default function Hero() {
  return (
    <section className="relative bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full pt-32 pb-20 md:pt-40 md:pb-28 lg:pt-44 lg:pb-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* ── Left column: headline + copy + CTA ── */}
          <div>
            <FadeIn delay={100}>
              <h1 className="text-navy text-4xl md:text-5xl lg:text-[3.5rem] font-semibold leading-[1.08] tracking-[-0.02em]">
                Navigating the New Era of Capital
              </h1>
            </FadeIn>
            <FadeIn delay={250}>
              <p className="text-muted text-lg font-normal leading-[1.6] max-w-[500px] mt-8">
                Institutional-grade energy verification and attestation for
                Bitcoin mining infrastructure — enabling compliant capital to
                access Bitcoin with full energy transparency.
              </p>
            </FadeIn>
            <FadeIn delay={400}>
              <a href="#ecosystem" className="btn btn-primary mt-10">
                Explore Insights
              </a>
            </FadeIn>
          </div>

          {/* ── Right column: financial district skyline ── */}
          <FadeIn delay={300} className="relative">
            <div className="relative aspect-[4/3] lg:aspect-[3/2] w-full overflow-hidden rounded-sm">
              <Image
                src="/images/hero-skyline.png"
                alt="New York Financial District skyline at dusk — corporate towers and harbor view, charcoal tones"
                fill
                priority
                className="object-cover grayscale-[35%] saturate-[55%] contrast-[1.05] brightness-[0.97]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-black/5" />
            </div>
          </FadeIn>
        </div>
      </div>

      <div className="h-px bg-border" />
    </section>
  );
}
