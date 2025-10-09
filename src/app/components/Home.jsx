import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main className="min-h-screen transition-colors duration-500">
      <Hero />
      <Navbar />
    </main>
  );
}
