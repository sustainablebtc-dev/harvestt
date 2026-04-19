import FadeIn from "./FadeIn";

const metrics = [
  { value: "~24%", label: "of Global Bitcoin Hashrate Verified" },
  { value: "4", label: "Publicly-Listed Mining Partners" },
  { value: "2", label: "Sovereign Mining Partners" },
  { value: "ADGM", label: "Regulated & Registered" },
];

export default function Metrics() {
  return (
    <section className="relative z-10 py-16 md:py-20 border-t border-border">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {metrics.map((metric, i) => (
            <FadeIn key={metric.label} delay={i * 100}>
              <div className="text-center py-4">
                <div className="font-serif text-accent text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-3">
                  {metric.value}
                </div>
                <div className="text-muted text-[12px] tracking-[0.1em] uppercase leading-snug font-medium">
                  {metric.label}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
