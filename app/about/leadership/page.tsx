import type { Metadata } from 'next'
import Image from 'next/image'
import styles from './Leadership.module.scss'
import leadershipDataRaw from '@/data/team/team.json'
import type { LeadershipData } from '@/data/types'

const leadershipData = leadershipDataRaw as LeadershipData

export const metadata: Metadata = {
  title: leadershipData.metadata.title,
  description: leadershipData.metadata.description,
  openGraph: {
    title: leadershipData.metadata.ogTitle,
    description: leadershipData.metadata.ogDescription,
  },
}

function TeamCard({ member }: { member: (typeof leadershipData.coreTeam)[0] }) {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          src={member.image}
          alt={member.name}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
          className={styles.image}
        />
      </div>
      <div className={styles.cardContent}>
        <h3 className={styles.name}>{member.name}</h3>
        <p className={styles.title}>{member.title}</p>
      </div>
    </div>
  )
}

export default function LeadershipPage() {
  return (
    <main className={styles.page}>
      {/* Core Team Section */}
      <section className={styles.section} aria-labelledby="core-team-heading">
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h1 id="core-team-heading" className={styles.sectionTitle}>
              Core Team
            </h1>
            <div className={styles.accentLine} aria-hidden="true" />
          </div>
          <div className={styles.grid}>
            {leadershipData.coreTeam.map((member) => (
              <TeamCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Advisors Section */}
      <section className={styles.section} aria-labelledby="advisors-heading">
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 id="advisors-heading" className={styles.sectionTitle}>
              Advisors
            </h2>
            <div className={styles.accentLine} aria-hidden="true" />
          </div>
          <div className={styles.grid}>
            {leadershipData.advisors.map((member) => (
              <TeamCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
