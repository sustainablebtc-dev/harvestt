import Hero from '@/components/Hero/Hero'
import StatsBar from '@/components/StatsBar/StatsBar'
import TheChallenge from '@/components/TheChallenge/TheChallenge'
import VerificationLayer from '@/components/VerificationLayer/VerificationLayer'
import MiningPartners from '@/components/MiningPartners/MiningPartners'
import RegulatoryInfrastructure from '@/components/RegulatoryInfrastructure/RegulatoryInfrastructure'

export default function Home() {
  return (
    <main>
      <Hero />
      <StatsBar />
      <TheChallenge />
      <VerificationLayer />
      <RegulatoryInfrastructure />
      <MiningPartners />
    </main>
  )
}
