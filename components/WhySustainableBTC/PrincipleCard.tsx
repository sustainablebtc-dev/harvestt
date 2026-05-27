import type { Principle } from '@/data/types'
import styles from './WhySustainableBTC.module.scss'

interface PrincipleCardProps {
  principle: Principle
  iconPath: string
}

export default function PrincipleCard({ principle, iconPath }: PrincipleCardProps) {
  return (
    <div className={styles.card}>
      <img
        src={iconPath}
        alt={`${principle.title} icon`}
        className={styles.icon}
        aria-hidden="true"
      />
      <h3 className={styles.cardTitle}>{principle.title}</h3>
      <p className={styles.cardDescription}>{principle.description}</p>
    </div>
  )
}
