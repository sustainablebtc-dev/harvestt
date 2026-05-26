import styles from './HowWeCreateValue.module.scss'

interface ValueCardProps {
  title: string
  description: string
  supportingStatement: string
  variant: 'access' | 'transparency' | 'sustainability'
}

export default function ValueCard({
  title,
  description,
  supportingStatement,
  variant,
}: ValueCardProps) {
  return (
    <div className={styles.card}>
      {/* Variant-specific SVG Illustration */}
      <svg
        className={styles.illustration}
        viewBox="0 0 80 80"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
      >
        {variant === 'access' && (
          <>
            <circle cx="25" cy="40" r="10" fill="none" stroke="currentColor" strokeWidth="1.2"/>
            <circle cx="55" cy="40" r="10" fill="none" stroke="currentColor" strokeWidth="1.2"/>
            <path d="M 35 38 Q 40 35, 45 38" fill="none" stroke="currentColor" strokeWidth="1"/>
            <path d="M 35 42 Q 40 45, 45 42" fill="none" stroke="currentColor" strokeWidth="1"/>
            <line x1="20" y1="60" x2="28" y2="55" stroke="currentColor" strokeWidth="0.8"/>
            <line x1="28" y1="60" x2="36" y2="55" stroke="currentColor" strokeWidth="0.8"/>
            <line x1="36" y1="60" x2="44" y2="55" stroke="currentColor" strokeWidth="0.8"/>
            <line x1="44" y1="60" x2="52" y2="55" stroke="currentColor" strokeWidth="0.8"/>
            <line x1="52" y1="60" x2="60" y2="55" stroke="currentColor" strokeWidth="0.8"/>
            <path d="M 60 28 L 65 33 L 60 38" fill="none" stroke="currentColor" strokeWidth="0.9" opacity="0.6"/>
          </>
        )}

        {variant === 'transparency' && (
          <>
            <rect x="15" y="20" width="50" height="12" fill="none" stroke="currentColor" strokeWidth="1.2"/>
            <rect x="12" y="35" width="56" height="12" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.7"/>
            <rect x="10" y="50" width="60" height="12" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.4"/>
            <line x1="40" y1="10" x2="40" y2="70" stroke="currentColor" strokeWidth="0.6" opacity="0.5"/>
            <line x1="30" y1="10" x2="35" y2="70" stroke="currentColor" strokeWidth="0.5" opacity="0.4"/>
            <line x1="50" y1="10" x2="45" y2="70" stroke="currentColor" strokeWidth="0.5" opacity="0.4"/>
          </>
        )}

        {variant === 'sustainability' && (
          <>
            <path d="M 40 15 Q 55 20, 60 35 Q 58 50, 45 55 Q 30 58, 25 45" fill="none" stroke="currentColor" strokeWidth="1.2"/>
            <path d="M 40 28 Q 50 32, 52 42 Q 50 50, 42 50" fill="none" stroke="currentColor" strokeWidth="0.9" opacity="0.7"/>
            <path d="M 38 50 Q 35 55, 38 62" fill="none" stroke="currentColor" strokeWidth="1"/>
            <path d="M 40 50 Q 43 56, 40 63" fill="none" stroke="currentColor" strokeWidth="1"/>
            <circle cx="45" cy="20" r="2" fill="currentColor" opacity="0.6"/>
            <circle cx="62" cy="35" r="2" fill="currentColor" opacity="0.6"/>
            <circle cx="40" cy="65" r="2" fill="currentColor" opacity="0.6"/>
          </>
        )}
      </svg>

      {/* Card Content */}
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDescription}>{description}</p>
      <p className={styles.supportingStatement}>{supportingStatement}</p>
    </div>
  )
}
