
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['inicio', 'galeria', 'nosotros', 'contacto'];
      const scrollPos = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && scrollPos >= element.offsetTop && scrollPos < element.offsetTop + element.offsetHeight) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Navbar activeSection={activeSection} />
      
      <main className="flex-grow">
        <section id="inicio">
          <Hero />
        </section>

        <section id="galeria" className="py-20 bg-zinc-950">
          <Gallery />
        </section>

        <section id="nosotros" className="py-20 bg-black">
          <About />
        </section>

        <section id="contacto" className="py-20 bg-zinc-950">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
