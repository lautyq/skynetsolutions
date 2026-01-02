
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-20 border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-cyan-500 rounded flex items-center justify-center">
                <i className="fas fa-network-wired text-white text-sm"></i>
              </div>
              <span className="text-xl font-bold font-orbitron text-white">SKY<span className="text-cyan-400">NET</span></span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Liderando la próxima generación de infraestructura digital. No solo creamos webs; construimos ecosistemas que perduran.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-[0.2em]">Navegación</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="text-gray-500 hover:text-cyan-400 transition-colors text-sm">Inicio</a></li>
              <li><a href="#services" className="text-gray-500 hover:text-cyan-400 transition-colors text-sm">Servicios</a></li>
              <li><a href="#portfolio" className="text-gray-500 hover:text-cyan-400 transition-colors text-sm">Portfolio</a></li>
              <li><a href="#demo" className="text-gray-500 hover:text-cyan-400 transition-colors text-sm">Demostración</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-[0.2em]">Legal</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-500 hover:text-cyan-400 transition-colors text-sm">Privacidad</a></li>
              <li><a href="#" className="text-gray-500 hover:text-cyan-400 transition-colors text-sm">Términos</a></li>
              <li><a href="#" className="text-gray-500 hover:text-cyan-400 transition-colors text-sm">Acuerdos SLA</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-[0.2em]">Contacto</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li className="flex items-center gap-3"><i className="fas fa-envelope text-cyan-400"></i> soporte@skynet-solutions.xyz</li>
              <li className="flex items-center gap-3"><i className="fas fa-headset text-cyan-400"></i> Atención 24/7</li>
              <li className="flex items-center gap-3"><i className="fas fa-globe text-cyan-400"></i> Presencia Global</li>
            </ul>
            <div className="flex gap-4 mt-8">
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-400 hover:text-white transition-all hover:bg-cyan-500"><i className="fab fa-twitter"></i></a>
              <a href="https://es.trustpilot.com/review/skynet-solutions.xyz" target="_blank" className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-400 hover:text-white transition-all hover:bg-[#00b67a]"><i className="fas fa-star"></i></a>
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-400 hover:text-white transition-all hover:bg-cyan-500"><i className="fab fa-github"></i></a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-xs uppercase tracking-widest">© 2024 SkyNet Solutions. Todos los derechos reservados.</p>
          <div className="flex items-center gap-2">
            <span className="text-[10px] text-gray-600 uppercase tracking-widest">Estado Global:</span>
            <div className="flex items-center gap-2 px-3 py-1 bg-green-500/10 rounded-full">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-[10px] font-bold text-green-500 uppercase tracking-widest">Operativo</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
