import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import CompanySection from "../components/CompanySection";
import Stats from "../components/Stats";
import Features from "../components/Features";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <Hero />
      <CompanySection />
      <Stats />
      <Features />
      <Footer />
    </div>
  );
}

export default Home;