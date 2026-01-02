
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contacto" className="pt-32 pb-10 bg-black border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="col-span-2">
            <h2 className="text-4xl md:text-7xl font-black font-orbitron mb-10 tracking-tighter">SKY NET <br/> SOLUTIONS <br/> SYSTEMS.</h2>
            <div className="flex gap-6">
              <a href="#" className="text-xs font-bold tracking-[0.3em] opacity-40 hover:opacity-100 transition-opacity">INSTAGRAM</a>
              <a href="#" className="text-xs font-bold tracking-[0.3em] opacity-40 hover:opacity-100 transition-opacity">LINKEDIN</a>
              <a href="#" className="text-xs font-bold tracking-[0.3em] opacity-40 hover:opacity-100 transition-opacity">X.COM</a>
            </div>
          </div>

          <div>
            <h4 className="font-orbitron font-bold text-[10px] uppercase tracking-[0.5em] mb-8 opacity-30">Secciones</h4>
            <ul className="space-y-4">
              <li><a href="#servicios" className="text-xs font-bold tracking-widest text-white/50 hover:text-white transition-colors uppercase">Capacidades</a></li>
              <li><a href="#galeria" className="text-xs font-bold tracking-widest text-white/50 hover:text-white transition-colors uppercase">Visuales</a></li>
              <li><a href="#portfolio" className="text-xs font-bold tracking-widest text-white/50 hover:text-white transition-colors uppercase">Despliegues</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-orbitron font-bold text-[10px] uppercase tracking-[0.5em] mb-8 opacity-30">Oficina Central</h4>
            <p className="text-xs font-bold tracking-widest text-white/50 mb-2 uppercase hover:text-white transition-colors cursor-pointer">ventas@skynet-solutions.xyz</p>
            <p className="text-xs font-bold tracking-widest text-white/50 mb-6 uppercase">+34 900 SKY NET</p>
            <p className="text-xs font-bold tracking-widest text-white/30 uppercase leading-relaxed">
              Distrito Tecnológico <br/> Neo Madrid, España
            </p>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between gap-6 text-[10px] uppercase tracking-[0.3em] font-bold opacity-30">
          <span>&copy; 2025 SKY NET SOLUTIONS - ARCHITECTURE REBORN.</span>
          <div className="flex gap-10">
            <a href="https://es.trustpilot.com/review/skynet-solutions.xyz" target="_blank" rel="noopener noreferrer">TRUSTPILOT VERIFIED</a>
            <a href="#">SECURITY PROTOCOLS</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
