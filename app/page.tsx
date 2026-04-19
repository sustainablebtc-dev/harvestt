import Header from "../components/Header";
import Hero from "../components/Hero";
import MarketInsights from "../components/MarketInsights";
import Ecosystem from "../components/Ecosystem";
import Problem from "../components/Problem";
import HowItWorks from "../components/HowItWorks";
import Technology from "../components/Technology";
import Partners from "../components/Partners";
import Opportunity from "../components/Opportunity";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <MarketInsights />
        <Ecosystem />
        <Problem />
        <HowItWorks />
        <Technology />
        <Partners />
        <Opportunity />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
