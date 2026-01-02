
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const menuItems = ['Servicios', 'Galería', 'Portfolio', 'Contacto'];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || isMenuOpen ? 'py-4 bg-black/80 backdrop-blur-xl border-b border-white/5' : 'py-8 bg-transparent'
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
            {menuItems.map((item) => (
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
            <button onClick={toggleMenu} className="z-70 relative">
              {isMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden fixed top-0 left-0 w-full h-screen bg-black/90 pt-24 z-60 flex flex-col items-center"
          >
            <div className="flex flex-col items-center gap-8">
              {menuItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace('í', 'i')}`}
                  className="text-lg uppercase tracking-[0.2em] font-bold opacity-80 hover:opacity-100 transition-opacity"
                  onClick={toggleMenu} // Close menu on click
                >
                  {item}
                </a>
              ))}
              <button className="mt-8 px-8 py-3 bg-white text-black font-black text-sm uppercase tracking-widest hover:bg-transparent hover:text-white border border-white transition-all duration-300">
                INICIAR PROYECTO
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
