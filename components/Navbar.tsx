
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'py-4 bg-black/80 backdrop-blur-xl border-b border-white/5' : 'py-8 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-8 h-8 bg-white flex items-center justify-center transform group-hover:rotate-90 transition-transform duration-700">
            <div className="w-4 h-4 bg-black"></div>
          </div>
          <span className="font-orbitron font-black text-xl tracking-tighter">SKY NET</span>
        </div>

        <div className="hidden md:flex items-center gap-10">
          {['Servicios', 'Galería', 'Portfolio', 'Contacto'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace('í', 'i')}`}
              className="text-xs uppercase tracking-[0.2em] font-bold opacity-60 hover:opacity-100 transition-opacity relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <button className="px-6 py-2 bg-white text-black font-black text-[10px] uppercase tracking-widest hover:bg-transparent hover:text-white border border-white transition-all duration-300">
            INICIAR PROYECTO
          </button>
        </div>

        <div className="md:hidden">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
