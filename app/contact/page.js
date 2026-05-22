// app/contact/page.js

import Navbar from "@/components/Navbar";
import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <main className="bg-white overflow-x-hidden">
      <Navbar />

      <section className="min-h-[calc(100vh-72px)] flex items-center">
        <ContactHero />
      </section>

      <section className="min-h-screen flex items-center">
        <ContactForm />
      </section>

      <section className="min-h-[55vh] flex items-center">
        <Footer />
      </section>
    </main>
  );
}