import styles from './EcosystemDiagram.module.scss'
import type { EcosystemColumn } from '@/data/types'

interface EcosystemDiagramProps {
  columns: EcosystemColumn[]
}

// Node positions in SVG coordinate space (viewBox="0 0 900 260")
const NODE_POSITIONS = [
  { cx: 130, cy: 130 },
  { cx: 450, cy: 130 },
  { cx: 770, cy: 130 },
]

const NODE_RADIUS = 56

// Flow path: left → center → right (above center line)
const UPPER_PATH_1 = `M ${NODE_POSITIONS[0].cx + NODE_RADIUS} ${NODE_POSITIONS[0].cy - 18}
  Q 290 60 ${NODE_POSITIONS[1].cx - NODE_RADIUS} ${NODE_POSITIONS[1].cy - 18}`

const UPPER_PATH_2 = `M ${NODE_POSITIONS[1].cx + NODE_RADIUS} ${NODE_POSITIONS[1].cy - 18}
  Q 610 60 ${NODE_POSITIONS[2].cx - NODE_RADIUS} ${NODE_POSITIONS[2].cy - 18}`

// Return flow: right → center → left (below center line)
const LOWER_PATH_1 = `M ${NODE_POSITIONS[1].cx - NODE_RADIUS} ${NODE_POSITIONS[1].cy + 18}
  Q 290 200 ${NODE_POSITIONS[0].cx + NODE_RADIUS} ${NODE_POSITIONS[0].cy + 18}`

const LOWER_PATH_2 = `M ${NODE_POSITIONS[2].cx - NODE_RADIUS} ${NODE_POSITIONS[2].cy + 18}
  Q 610 200 ${NODE_POSITIONS[1].cx + NODE_RADIUS} ${NODE_POSITIONS[1].cy + 18}`

// Icons for each node — simple SVG path data (stroke-only, institutional)
const NODE_ICONS = [
  // Mining: pickaxe-style — simplified server/chip icon
  'M -10 4 L -10 -4 L 10 -4 L 10 4 Z M -6 -4 L -6 -8 M 0 -4 L 0 -8 M 6 -4 L 6 -8 M -6 4 L -6 8 M 0 4 L 0 8 M 6 4 L 6 8',
  // SBP: shield/attestation icon
  'M 0 -10 L 9 -5 L 9 3 Q 9 9 0 12 Q -9 9 -9 3 L -9 -5 Z M 0 -3 L 3 0 L -1 5',
  // Investment: chart/growth icon
  'M -9 6 L -3 0 L 2 4 L 9 -6 M 6 -6 L 9 -6 L 9 -3',
]

const NODE_ICON_STROKE_WIDTHS = [1.5, 1.5, 1.75]

// Mobile-friendly text summary — rendered in place of the SVG on screens < 768px.
// The `diagramFigure` is hidden via CSS at that breakpoint.
function DiagramMobileSummary({ columns }: EcosystemDiagramProps) {
  return (
    <div className={styles.mobileSummary} aria-label="Ecosystem summary">
      {columns.map((col, i) => (
        <div key={i} className={styles.mobileSummaryCard}>
          <p className={styles.mobileSummaryTitle}>{col.title}</p>
          <p className={styles.mobileSummaryBody}>{col.intro}</p>
        </div>
      ))}
    </div>
  )
}

export default function EcosystemDiagram({ columns }: EcosystemDiagramProps) {
  const labels = columns.map((c) => c.title)

  return (
    <>
    <figure
      className={styles.diagramFigure}
      role="img"
      aria-label={`Ecosystem flow diagram: ${labels.join(' → ')}`}
    >
      <svg
        className={styles.svg}
        viewBox="0 0 900 260"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
        focusable="false"
      >
        <defs>
          {/* Arrow marker for forward flow */}
          <marker
            id="arrowhead-forward"
            markerWidth="8"
            markerHeight="6"
            refX="7"
            refY="3"
            orient="auto"
          >
            <polygon
              points="0 0, 8 3, 0 6"
              fill="#a3a3a3"
            />
          </marker>
          {/* Arrow marker for return flow */}
          <marker
            id="arrowhead-return"
            markerWidth="8"
            markerHeight="6"
            refX="7"
            refY="3"
            orient="auto"
          >
            <polygon
              points="0 0, 8 3, 0 6"
              fill="#e5e5e5"
            />
          </marker>
          {/* Node drop shadow filter */}
          <filter id="node-shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#000000" floodOpacity="0.06" />
          </filter>
        </defs>

        {/* ── Return flow paths (behind nodes, drawn first) ───────────────── */}
        <path
          d={LOWER_PATH_1}
          fill="none"
          stroke="#e5e5e5"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          markerEnd="url(#arrowhead-return)"
          className={styles.flowReturn}
        />
        <path
          d={LOWER_PATH_2}
          fill="none"
          stroke="#e5e5e5"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          markerEnd="url(#arrowhead-return)"
          className={styles.flowReturn}
        />

        {/* ── Forward flow paths ──────────────────────────────────────────── */}
        <path
          d={UPPER_PATH_1}
          fill="none"
          stroke="#a3a3a3"
          strokeWidth="1.5"
          markerEnd="url(#arrowhead-forward)"
          className={styles.flowForward}
        />
        <path
          d={UPPER_PATH_2}
          fill="none"
          stroke="#a3a3a3"
          strokeWidth="1.5"
          markerEnd="url(#arrowhead-forward)"
          className={styles.flowForward}
        />

        {/* ── Flow labels ─────────────────────────────────────────────────── */}
        <text x="290" y="52" textAnchor="middle" className={styles.flowLabel}>
          Verified Energy Data
        </text>
        <text x="610" y="52" textAnchor="middle" className={styles.flowLabel}>
          Attested Compliance
        </text>
        <text x="290" y="215" textAnchor="middle" className={styles.flowLabelReturn}>
          Capital Access
        </text>
        <text x="610" y="215" textAnchor="middle" className={styles.flowLabelReturn}>
          ESG Mandate Fulfilment
        </text>

        {/* ── Nodes ───────────────────────────────────────────────────────── */}
        {NODE_POSITIONS.map((pos, i) => (
          <g key={labels[i]} className={styles.node}>
            {/* Node circle */}
            <circle
              cx={pos.cx}
              cy={pos.cy}
              r={NODE_RADIUS}
              className={styles.nodeCircle}
              filter="url(#node-shadow)"
            />
            {/* Accent ring on center node (SBP) */}
            {i === 1 && (
              <circle
                cx={pos.cx}
                cy={pos.cy}
                r={NODE_RADIUS + 6}
                fill="none"
                stroke="#1b1b1b"
                strokeWidth="1"
                opacity="0.12"
              />
            )}
            {/* Icon */}
            <g
              transform={`translate(${pos.cx}, ${pos.cy - 12})`}
              className={i === 1 ? styles.nodeIconCenter : styles.nodeIcon}
            >
              <path
                d={NODE_ICONS[i]}
                fill="none"
                stroke="currentColor"
                strokeWidth={NODE_ICON_STROKE_WIDTHS[i]}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            {/* Label */}
            <text
              x={pos.cx}
              y={pos.cy + 26}
              textAnchor="middle"
              className={i === 1 ? styles.nodeLabelCenter : styles.nodeLabel}
            >
              {labels[i]}
            </text>
          </g>
        ))}
      </svg>

      {/* Visually hidden caption for screen readers */}
      <figcaption className={styles.caption}>
        Ecosystem flow: {labels[0]} sends verified energy data to {labels[1]},
        which issues attested compliance to {labels[2]}.
        Capital access flows back through the chain.
      </figcaption>
    </figure>
    <DiagramMobileSummary columns={columns} />
    </>
  )
}
