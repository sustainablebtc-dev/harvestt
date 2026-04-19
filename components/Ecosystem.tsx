"use client";

import Image from "next/image";
import FadeIn from "./FadeIn";

const logos = [
  { name: "ADGM", src: "/images/ecosystem/adgm.png", width: 400, height: 200, maxH: "max-h-60" },
  { name: "Hub71", src: "/images/ecosystem/hub71.svg", width: 420, height: 116, maxH: "max-h-[36px]" },
  { name: "Mubadala", src: "/images/ecosystem/mubadala.svg", width: 4400, height: 1600, maxH: "max-h-[280px]", extraClass: "translate-y-1" },
];

export default function Ecosystem() {
  return (
    <section id="ecosystem" className="py-24 md:py-32 bg-surface border-t border-border">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <FadeIn>
          <span className="text-accent text-[13px] tracking-[0.15em] uppercase block mb-6 font-semibold">
            Regulatory Framework
          </span>
        </FadeIn>
        <FadeIn delay={100}>
          <h2 className="text-navy text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 tracking-[-0.02em] leading-[1.1]">
            Regulated Infrastructure
          </h2>
          <p className="text-muted text-lg font-normal mb-20">
            Built within sovereign-backed institutional frameworks
          </p>
        </FadeIn>
        <FadeIn delay={250}>
          <div className="grid grid-cols-3 gap-4 md:gap-6 items-center max-w-3xl">
            {logos.map((logo) => (
              <div
                key={logo.name}
                className="bg-white border border-border rounded-sm h-24 md:h-28 flex items-center justify-center transition-all duration-300 hover:border-accent/30 px-4 overflow-hidden group"
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={logo.width}
                  height={logo.height}
                  className={`${logo.maxH} ${"extraClass" in logo ? logo.extraClass : ""} w-auto transition-all duration-300 grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100`}
                />
              </div>
            ))}
          </div>
        </FadeIn>
        <FadeIn delay={350}>
          <p className="text-muted text-sm font-normal mt-14 leading-relaxed max-w-3xl">
            Harvestt operates as Sustainable Digital Solutions, Limited (ADGM
            Reg. No. 26026) within Hub71, Abu Dhabi&rsquo;s sovereign-backed
            technology ecosystem.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
