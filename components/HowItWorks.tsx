import FadeIn from "./FadeIn";

const steps = [
  {
    number: "01",
    title: "Verify",
    description:
      "Mining partners submit energy documentation\u2009\u2014\u2009utility bills, renewable energy certificates, power purchase agreements. Harvestt verifies energy source, quantity, and temporal matching at the facility level.",
  },
  {
    number: "02",
    title: "Attest",
    description:
      "Verified clean energy usage is recorded on-chain via SBP tokens. Each token represents a verified unit of clean energy used in Bitcoin mining, creating a permanent, auditable attestation.",
  },
  {
    number: "03",
    title: "Enable",
    description:
      "Institutional products reference SBP attestations to offer energy-verified Bitcoin exposure\u2009\u2014\u2009satisfying regulatory mandates, investment committee requirements, and client reporting obligations.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 md:py-32 bg-surface border-t border-border">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <FadeIn>
          <span className="text-accent text-[13px] tracking-[0.15em] uppercase block mb-6 font-semibold">
            How It Works
          </span>
        </FadeIn>
        <FadeIn delay={100}>
          <h2 className="text-navy text-3xl md:text-4xl lg:text-5xl font-semibold mb-20 tracking-[-0.02em] leading-[1.1]">
            The Verification Layer
          </h2>
        </FadeIn>
        <div className="grid md:grid-cols-3 gap-8 md:gap-10 relative">
          <div className="hidden md:block absolute top-7 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-border to-transparent" />

          {steps.map((step, i) => (
            <FadeIn key={step.title} delay={i * 150 + 200}>
              <div className="bg-white border border-border rounded-sm p-8 h-full transition-colors duration-300 hover:border-accent/30 hover:shadow-sm">
                <div className="w-14 h-14 rounded-sm border border-border flex items-center justify-center mb-8 text-accent text-sm font-mono font-medium bg-white">
                  {step.number}
                </div>
                <h3 className="text-navy text-xl md:text-2xl font-semibold mb-4 tracking-[-0.02em]">
                  {step.title}
                </h3>
                <p className="text-muted font-normal leading-[1.6]">
                  {step.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
