import styles from './EcosystemDiagram.module.scss'
import type { EcosystemNode } from '@/data/types'

interface EcosystemDiagramProps {
  nodes: EcosystemNode[]
}

export default function EcosystemDiagram({ nodes }: EcosystemDiagramProps) {
  return (
    <div className={styles.diagram} role="img" aria-label="Bitcoin ecosystem flow: Mining Operators → Sustainable BTC → Institutional Capital">
      <svg
        className={styles.svg}
        viewBox="0 0 1200 200"
        preserveAspectRatio="xMidYMid meet"
        role="presentation"
      >
        {/* Nodes */}
        <g className={styles.nodesGroup}>
          {nodes.map((node, index) => {
            const xPos = index === 0 ? 100 : index === 1 ? 600 : 1100
            return (
              <g key={node.label}>
                <circle
                  className={styles.node}
                  cx={xPos}
                  cy="100"
                  r="60"
                />
                <text
                  className={styles.nodeLabel}
                  x={xPos}
                  y="105"
                  textAnchor="middle"
                >
                  {node.label}
                </text>
              </g>
            )
          })}
        </g>

        {/* Arrows */}
        <g className={styles.arrowsGroup} strokeLinecap="round" fill="none">
          {/* Arrow 1: left → center */}
          <line
            className={styles.arrow}
            x1="160"
            y1="100"
            x2="540"
            y2="100"
          />
          <polygon
            className={styles.arrowhead}
            points="560,100 540,95 545,100 540,105"
          />

          {/* Arrow 2: center → right */}
          <line
            className={styles.arrow}
            x1="660"
            y1="100"
            x2="1040"
            y2="100"
          />
          <polygon
            className={styles.arrowhead}
            points="1060,100 1040,95 1045,100 1040,105"
          />
        </g>
      </svg>

      {/* Accessible text descriptions */}
      <div className={styles.descriptions}>
        {nodes.map((node) => (
          <div key={node.label} className={styles.description}>
            <p className={styles.nodeLabelText}>{node.label}</p>
            <p className={styles.nodeDescription}>{node.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
