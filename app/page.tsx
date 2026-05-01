import Hero from '@/components/Hero/Hero'
import StatsBar from '@/components/StatsBar/StatsBar'
import TheChallenge from '@/components/TheChallenge/TheChallenge'
import AddressableMarket from '@/components/AddressableMarket/AddressableMarket'
import VerificationLayer from '@/components/VerificationLayer/VerificationLayer'
import MiningPartners from '@/components/MiningPartners/MiningPartners'
import RegulatoryInfrastructure from '@/components/RegulatoryInfrastructure/RegulatoryInfrastructure'
import MarketInsights from '@/components/MarketInsights/MarketInsights'

export default function Home() {
  return (
    <main>
      <Hero />
      <StatsBar />
      <MarketInsights />
      <RegulatoryInfrastructure />
      <TheChallenge />
      <VerificationLayer />
      <MiningPartners />
      <AddressableMarket />
    </main>
  )
}
