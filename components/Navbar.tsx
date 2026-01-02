
import React, { useState } from 'react';

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Inicio', href: '#home' },
    { name: 'Servicios', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Sistemas', href: '#demo' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'glass py-3 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-10 h-10 bg-cyan-500 rounded-lg flex items-center justify-center cyan-glow transition-transform group-hover:scale-110">
            <i className="fas fa-network-wired text-white text-xl"></i>
          </div>
          <span className="text-xl font-bold font-orbitron tracking-tighter text-white">SKY<span className="text-cyan-400">NET</span></span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-gray-300 hover:text-cyan-400 transition-colors font-medium text-sm tracking-wide"
            >
              {link.name}
            </a>
          ))}
          <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-full font-semibold transition-all shadow-md cyan-glow">
            Contacto
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden glass absolute top-full left-0 w-full p-4 flex flex-col gap-4 animate-fadeIn">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-gray-300 hover:text-cyan-400 py-2"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <button className="bg-cyan-500 text-white py-3 rounded-lg font-bold">
            Hablar con Soporte
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
