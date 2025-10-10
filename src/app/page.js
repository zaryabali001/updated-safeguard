// src/app/page.js

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MissionSection from "./components/MissionSection";
import Footer from "./components/Footer";
import OurTeam from "./components/OurTeam";
import HumanSteering from "./components/HumanSteering";
import HowItWorks from "./components/HowItWorks";
import AgentPlanComponent from "./components/AgentPlanComponent";
export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black dark:bg-[#0f0f10] dark:text-white transition-colors duration-500">
      <Navbar />
      <Hero />
      <MissionSection />
      <HowItWorks />
      <AgentPlanComponent />
      <HumanSteering />
      <OurTeam />
      <Footer></Footer>
    </main>
  );
}
