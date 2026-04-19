import FadeIn from "./FadeIn";

const ACCENT = "#00E676";

const dataPoints = [
  [0, 0.35],
  [0.12, 0.38],
  [0.24, 0.32],
  [0.36, 0.45],
  [0.48, 0.42],
  [0.6, 0.55],
  [0.72, 0.52],
  [0.84, 0.68],
  [1.0, 0.78],
] as const;

const capabilities = [
  "Facility-level energy source classification",
  "Temporal matching of generation to consumption",
  "On-chain attestation via SBP token issuance",
  "Continuous monitoring with anomaly detection",
];

/* ── Small sub-components ────────────────────────────────── */

function LivePulse() {
  return (
    <div className="flex items-center gap-2">
      <span className="relative flex h-2.5 w-2.5">
        <span
          className="absolute inline-flex h-full w-full rounded-full opacity-75 animate-ping"
          style={{ backgroundColor: ACCENT }}
        />
        <span
          className="relative inline-flex h-2.5 w-2.5 rounded-full"
          style={{ backgroundColor: ACCENT }}
        />
      </span>
      <span
        className="text-[11px] tracking-[0.15em] uppercase font-semibold"
        style={{ color: ACCENT }}
      >
        Live
      </span>
    </div>
  );
}

function RiskMeter() {
  const filled = 7;
  const total = 20;

  return (
    <div>
      <div className="flex items-baseline justify-between mb-3">
        <span className="text-white/50 text-xs tracking-[0.1em] uppercase font-medium">
          Current Risk
        </span>
        <span className="text-sm font-semibold" style={{ color: ACCENT }}>
          Low&ndash;Moderate
        </span>
      </div>
      <div className="flex gap-[3px]">
        {Array.from({ length: total }, (_, i) => (
          <div
            key={i}
            className="h-2 flex-1 rounded-[1px]"
            style={{
              backgroundColor:
                i < filled ? ACCENT : "rgba(255,255,255,0.06)",
              opacity: i < filled ? 1 - (i / total) * 0.35 : 1,
            }}
          />
        ))}
      </div>
    </div>
  );
}

function GrowthChart() {
  const W = 400;
  const H = 180;
  const pad = { t: 10, r: 10, b: 25, l: 35 };
  const cw = W - pad.l - pad.r;
  const ch = H - pad.t - pad.b;

  const pts = dataPoints.map(([x, y]) => ({
    x: pad.l + x * cw,
    y: pad.t + ch - y * ch,
  }));

  const line = pts.map((p, i) => `${i ? "L" : "M"}${p.x},${p.y}`).join(" ");
  const area = `${line} L${pts.at(-1)!.x},${pad.t + ch} L${pts[0].x},${pad.t + ch} Z`;

  const yLabels = ["0%", "25%", "50%", "75%"];
  const xLabels = ["Q1", "Q2", "Q3", "Q4"];

  return (
    <div>
      <div className="flex items-baseline justify-between mb-3">
        <span className="text-white/50 text-xs tracking-[0.1em] uppercase font-medium">
          Growth Projection
        </span>
        <span className="text-sm font-semibold" style={{ color: ACCENT }}>
          +78%
        </span>
      </div>

      <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto">
        {yLabels.map((label, i) => {
          const y = pad.t + ch - (i / (yLabels.length - 1)) * ch;
          return (
            <g key={label}>
              <line
                x1={pad.l}
                y1={y}
                x2={W - pad.r}
                y2={y}
                stroke="rgba(255,255,255,0.06)"
                strokeWidth="1"
              />
              <text
                x={pad.l - 8}
                y={y + 4}
                textAnchor="end"
                fill="rgba(255,255,255,0.3)"
                fontSize="10"
                fontFamily="inherit"
              >
                {label}
              </text>
            </g>
          );
        })}

        {xLabels.map((label, i) => (
          <text
            key={label}
            x={pad.l + (i / (xLabels.length - 1)) * cw}
            y={H - 4}
            textAnchor="middle"
            fill="rgba(255,255,255,0.3)"
            fontSize="10"
            fontFamily="inherit"
          >
            {label}
          </text>
        ))}

        <defs>
          <linearGradient id="growth-fill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={ACCENT} stopOpacity="0.18" />
            <stop offset="100%" stopColor={ACCENT} stopOpacity="0" />
          </linearGradient>
        </defs>

        <path d={area} fill="url(#growth-fill)" />
        <path
          d={line}
          fill="none"
          stroke={ACCENT}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <circle
          cx={pts.at(-1)!.x}
          cy={pts.at(-1)!.y}
          r="7"
          fill={ACCENT}
          fillOpacity="0.15"
        />
        <circle
          cx={pts.at(-1)!.x}
          cy={pts.at(-1)!.y}
          r="3.5"
          fill={ACCENT}
        />
      </svg>
    </div>
  );
}

/* ── Section ─────────────────────────────────────────────── */

export default function Technology() {
  return (
    <section className="py-24 md:py-32 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          {/* ── Left: Harvestt Engine ── */}
          <div>
            <FadeIn>
              <span
                className="text-[13px] tracking-[0.15em] uppercase block mb-6 font-semibold"
                style={{ color: ACCENT }}
              >
                Proprietary Technology
              </span>
            </FadeIn>
            <FadeIn delay={100}>
              <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-semibold tracking-[-0.02em] leading-[1.1]">
                The Harvestt Engine
              </h2>
            </FadeIn>
            <FadeIn delay={200}>
              <p className="text-white/55 text-lg leading-[1.6] mt-8 max-w-lg">
                Our proprietary analytics platform ingests facility-level energy
                data, validates renewable energy certificates, and produces
                real-time attestation scoring across the global mining network.
              </p>
            </FadeIn>
            <FadeIn delay={300}>
              <div className="mt-10 space-y-5">
                {capabilities.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span
                      className="mt-[7px] h-1.5 w-1.5 rounded-full shrink-0"
                      style={{ backgroundColor: ACCENT }}
                    />
                    <span className="text-white/45 text-sm leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* ── Right: Mock Risk Dashboard ── */}
          <FadeIn delay={250}>
            <div className="border border-white/10 rounded-sm bg-[#1A1A1A] p-6 md:p-8">
              <div className="flex items-center justify-between mb-8">
                <span className="text-white/70 text-sm font-semibold tracking-[-0.01em]">
                  Risk Dashboard
                </span>
                <LivePulse />
              </div>

              <RiskMeter />

              <div className="h-px bg-white/[0.06] my-6" />

              <GrowthChart />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
