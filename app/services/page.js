import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceList from "@/components/services/ServiceList";

export default function ServicesPage() {
  return (
    <main className="bg-white overflow-x-hidden scroll-smooth">
      <Navbar />
      <ServiceHero />
      <ServiceList />
      <Footer />
    </main>
  );
}