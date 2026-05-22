import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import Services from "@/components/Services";
import About from "@/components/About";
import Trusted from "@/components/Trusted";
import Insight from "@/components/Insight";
import Ascend from "@/components/Ascend";
import Footer from "@/components/Footer";

export default function Home() {

  return (

    <main className="bg-[#f5f5f5] text-[#111827] overflow-hidden">

      <Navbar />

      <Hero />

      <Work />

      <Services />

      <About />

      <Trusted />

      <Insight />

      <Ascend />

      <Footer />

    </main>

  );
}