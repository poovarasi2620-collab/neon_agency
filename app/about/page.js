import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import AboutHero from "@/components/about/AboutHero";
import AboutContent from "@/components/about/AboutContent";
import WorkWithUs from "@/components/about/WorkWithUs";
import AboutVideo from "@/components/about/AboutVideo";

export default function AboutPage() {

  return (

    <main className="bg-white">

      <Navbar />

      <AboutHero />

      <AboutContent />

      <WorkWithUs />

      <AboutVideo />

      <Footer />

    </main>

  );
}