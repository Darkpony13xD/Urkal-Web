import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./index.css";
import "./App.css";

export default function App() {
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-15% 0px -55% 0px" },
    );
    document
      .querySelectorAll("main > section[id]")
      .forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="site-shell">
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>
      <Navbar activeSection={activeSection} />
      <main id="contenido">
        <section id="inicio" aria-labelledby="hero-title">
          <Hero />
        </section>
        <div
          className="style-ribbon"
          aria-label="Diseño personalizado, Blackwork, Realismo y New School"
        >
          <span>DISEÑO PERSONALIZADO</span>
          <b aria-hidden="true">✦</b>
          <span>BLACKWORK</span>
          <b aria-hidden="true">✦</b>
          <span>REALISMO</span>
          <b aria-hidden="true">✦</b>
          <span>NEW SCHOOL</span>
          <b aria-hidden="true">✦</b>
          <span>URKAL INK</span>
        </div>
        <section
          id="galeria"
          className="section gallery-section"
          aria-labelledby="gallery-title"
        >
          <Gallery />
        </section>
        <section
          id="nosotros"
          className="section studio-section"
          aria-labelledby="studio-title"
        >
          <About />
        </section>
        <section
          id="contacto"
          className="section contact-section"
          aria-labelledby="contact-title"
        >
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}
