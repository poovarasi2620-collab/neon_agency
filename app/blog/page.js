import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogHero from "@/components/blog/BlogHero";
import BlogList from "@/components/blog/BlogList";

export default function BlogPage() {
  return (
    <main className="bg-white">
      <Navbar />
      <BlogHero />
      <BlogList />
      <Footer />
    </main>
  );
}