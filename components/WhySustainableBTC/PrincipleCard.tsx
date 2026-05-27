import type { Principle } from '@/data/types'
import styles from './WhySustainableBTC.module.scss'

interface PrincipleCardProps {
  principle: Principle
}

export default function PrincipleCard({ principle }: PrincipleCardProps) {
  return (
    <div className={styles.card}>
      <svg
        className={styles.icon}
        viewBox="0 0 80 80"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
      >
        {principle.id === 'institutional-framework' && (
          <>
            <rect x="15" y="20" width="50" height="12" fill="none" stroke="currentColor" strokeWidth="1.2" />
            <rect x="15" y="38" width="50" height="12" fill="none" stroke="currentColor" strokeWidth="1.2" />
            <rect x="15" y="56" width="50" height="8" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.7" />
            <line x1="22" y1="18" x2="22" y2="68" stroke="currentColor" strokeWidth="0.8" opacity="0.5" />
            <line x1="58" y1="18" x2="58" y2="68" stroke="currentColor" strokeWidth="0.8" opacity="0.5" />
          </>
        )}

        {principle.id === 'transparent-reporting' && (
          <>
            <circle cx="40" cy="40" r="28" fill="none" stroke="currentColor" strokeWidth="1.2" />
            <circle cx="40" cy="40" r="18" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.7" />
            <path d="M 40 25 L 48 38 L 40 50 L 32 38 Z" fill="none" stroke="currentColor" strokeWidth="0.9" />
            <line x1="40" y1="12" x2="40" y2="20" stroke="currentColor" strokeWidth="0.9" />
            <line x1="40" y1="60" x2="40" y2="68" stroke="currentColor" strokeWidth="0.9" />
          </>
        )}

        {principle.id === 'governance-standards' && (
          <>
            <path d="M 25 35 Q 25 20, 40 15 Q 55 20, 55 35" fill="none" stroke="currentColor" strokeWidth="1.2" />
            <rect x="25" y="35" width="30" height="28" fill="none" stroke="currentColor" strokeWidth="1.2" />
            <line x1="25" y1="48" x2="55" y2="48" stroke="currentColor" strokeWidth="0.9" opacity="0.6" />
            <line x1="25" y1="61" x2="55" y2="61" stroke="currentColor" strokeWidth="0.9" opacity="0.6" />
            <circle cx="30" cy="42" r="2" fill="currentColor" opacity="0.6" />
            <circle cx="30" cy="55" r="2" fill="currentColor" opacity="0.6" />
          </>
        )}

        {principle.id === 'responsible-mining' && (
          <>
            <path d="M 40 15 Q 55 25, 55 40 Q 55 55, 40 65 Q 25 55, 25 40 Q 25 25, 40 15" fill="none" stroke="currentColor" strokeWidth="1.2" />
            <path d="M 40 28 L 48 38 L 48 52 L 32 52 L 32 38 Z" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.8" />
            <circle cx="40" cy="60" r="2" fill="currentColor" opacity="0.7" />
            <circle cx="35" cy="68" r="1.5" fill="currentColor" opacity="0.5" />
            <circle cx="45" cy="68" r="1.5" fill="currentColor" opacity="0.5" />
          </>
        )}

        {principle.id === 'industry-expertise' && (
          <>
            <path d="M 20 60 L 40 20 L 60 60 Z" fill="none" stroke="currentColor" strokeWidth="1.2" />
            <line x1="40" y1="20" x2="40" y2="60" stroke="currentColor" strokeWidth="0.9" opacity="0.7" />
            <line x1="30" y1="42" x2="50" y2="42" stroke="currentColor" strokeWidth="0.9" opacity="0.6" />
            <circle cx="40" cy="42" r="2" fill="currentColor" opacity="0.5" />
            <line x1="20" y1="60" x2="60" y2="60" stroke="currentColor" strokeWidth="1" />
          </>
        )}

        {principle.id === 'long-term-vision' && (
          <>
            <path d="M 15 50 Q 20 35, 30 30 Q 40 25, 50 30 Q 60 35, 65 50" fill="none" stroke="currentColor" strokeWidth="1.2" />
            <path d="M 18 50 Q 22 42, 30 40 Q 40 38, 50 40 Q 58 42, 62 50" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.7" />
            <path d="M 22 50 Q 25 45, 30 43 Q 40 42, 50 43 Q 55 45, 58 50" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.5" />
            <line x1="25" y1="52" x2="25" y2="62" stroke="currentColor" strokeWidth="0.8" opacity="0.6" />
            <line x1="55" y1="52" x2="55" y2="62" stroke="currentColor" strokeWidth="0.8" opacity="0.6" />
          </>
        )}
      </svg>
      <h3 className={styles.cardTitle}>{principle.title}</h3>
      <p className={styles.cardDescription}>{principle.description}</p>
    </div>
  )
}
