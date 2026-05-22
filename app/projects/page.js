import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectHero from "@/components/projects/ProjectHero";
import ProjectList from "@/components/projects/ProjectList";

export default function ProjectsPage() {
  return (
    <main className="bg-white">
      <Navbar />
      <ProjectHero />
      <ProjectList />
      <Footer />
    </main>
  );
}