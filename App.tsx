
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesSection from './components/ServicesSection';
import TicketDemo from './components/TicketDemo';
import TrustpilotSection from './components/TrustpilotSection';
import StatsSection from './components/StatsSection';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col selection:bg-cyan-500 selection:text-white">
      <Navbar isScrolled={scrolled} />
      
      <main className="flex-grow">
        <section id="home">
          <Hero />
        </section>

        <section id="trustpilot" className="py-12 bg-black border-y border-white/5">
          <TrustpilotSection />
        </section>

        <section id="stats" className="py-20 bg-gray-950">
          <StatsSection />
        </section>

        <section id="services" className="py-24 bg-gray-900/50">
          <ServicesSection />
        </section>

        <section id="portfolio" className="py-24 bg-black">
          <Portfolio />
        </section>

        <section id="demo" className="py-24 bg-gray-950">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold font-orbitron mb-4 gradient-text">Sistemas a Medida</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                No solo hacemos webs, creamos infraestructuras digitales completas. Desde paneles de administración hasta sistemas de tickets avanzados.
              </p>
            </div>
            <TicketDemo />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
