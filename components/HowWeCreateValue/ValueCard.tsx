import styles from './HowWeCreateValue.module.scss'

interface ValueCardProps {
  title: string
  description: string
  supportingStatement: string
}

export default function ValueCard({
  title,
  description,
  supportingStatement,
}: ValueCardProps) {
  return (
    <div className={styles.card}>
      {/* Blueprint SVG Illustration */}
      <svg
        className={styles.illustration}
        viewBox="0 0 80 80"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path
              d="M 20 0 L 0 0 0 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              opacity="0.3"
            />
          </pattern>
        </defs>
        {/* Outer frame */}
        <rect x="10" y="10" width="60" height="60" fill="none" stroke="currentColor" strokeWidth="1.5" />
        {/* Grid background */}
        <rect x="10" y="10" width="60" height="60" fill="url(#grid)" />
        {/* Inner geometric accent */}
        <circle cx="40" cy="40" r="15" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.6" />
        {/* Corner details */}
        <line x1="10" y1="10" x2="20" y2="10" stroke="currentColor" strokeWidth="1.5" />
        <line x1="10" y1="10" x2="10" y2="20" stroke="currentColor" strokeWidth="1.5" />
        <line x1="70" y1="10" x2="60" y2="10" stroke="currentColor" strokeWidth="1.5" />
        <line x1="70" y1="10" x2="70" y2="20" stroke="currentColor" strokeWidth="1.5" />
      </svg>

      {/* Card Content */}
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDescription}>{description}</p>
      <p className={styles.supportingStatement}>{supportingStatement}</p>
    </div>
  )
}
