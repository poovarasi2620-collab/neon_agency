// app/contact/page.js

import Navbar from "@/components/Navbar";
import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <main className="bg-white overflow-x-hidden">
      <Navbar />

      <ContactHero />

      <ContactForm />

      <Footer />
    </main>
  );
}