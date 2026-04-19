import FadeIn from "./FadeIn";

const insights = [
  {
    category: "Macro Outlook",
    title: "Energy Mandates Are Reshaping Institutional Bitcoin Allocation",
    href: "#",
  },
  {
    category: "Regulatory",
    title: "SFDR Article 8/9 Compliance and Digital Asset Exposure",
    href: "#",
  },
  {
    category: "Infrastructure",
    title: "Verified Hashrate: Building the Attestation Layer for Capital Markets",
    href: "#",
  },
];

function ArrowIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M4.5 10H15.5M15.5 10L10.5 5M15.5 10L10.5 15"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function MarketInsights() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeIn>
          <span className="text-accent text-[13px] tracking-[0.15em] uppercase block mb-6 font-semibold">
            Market Insights
          </span>
        </FadeIn>
        <FadeIn delay={100}>
          <h2 className="text-navy text-3xl md:text-4xl lg:text-5xl font-semibold mb-16 tracking-[-0.02em] leading-[1.1]">
            Latest Perspectives
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6">
          {insights.map((item, i) => (
            <FadeIn key={item.title} delay={i * 120 + 200}>
              <a
                href={item.href}
                className="group flex flex-col justify-between border border-border p-8 h-full transition-colors duration-300 hover:border-[#999999]"
              >
                <div>
                  <span className="text-accent text-[11px] tracking-[0.14em] uppercase font-semibold">
                    {item.category}
                  </span>
                  <h3 className="text-navy text-lg md:text-xl font-medium leading-[1.35] tracking-[-0.01em] mt-4 group-hover:underline group-hover:underline-offset-4 group-hover:decoration-1 transition-all duration-300">
                    {item.title}
                  </h3>
                </div>

                <div className="flex justify-end mt-10 text-muted-light group-hover:text-navy transition-colors duration-300">
                  <ArrowIcon />
                </div>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>

      <div className="h-px bg-border mt-24 md:mt-32" />
    </section>
  );
}
