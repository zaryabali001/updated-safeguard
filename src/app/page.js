import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MissionSection from "./components/MissionSection";
import Footer from "./components/Footer";
export default function Home() {
  return (
   <main className="min-h-screen bg-white text-black dark:bg-[#0f0f10] dark:text-white transition-colors duration-500">
      <Navbar />
      <Hero />
      <MissionSection />
      <Footer></Footer>
    </main>
  );
}
