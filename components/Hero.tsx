
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px] animate-pulse delay-700"></div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="inline-block px-4 py-1.5 mb-6 glass rounded-full border border-cyan-500/30">
          <span className="text-cyan-400 text-xs font-bold tracking-widest uppercase">Expertos en Desarrollo Web y Sistemas</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black font-orbitron mb-6 leading-tight">
          PÁGINAS WEB QUE <br />
          <span className="gradient-text">DOMINAN EL MERCADO</span>
        </h1>
        
        <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
          En SkyNet Solutions creamos ecosistemas digitales de alto rendimiento. 
          Especializados en desarrollo web a medida, sistemas de soporte y plataformas escalables para empresas que buscan excelencia técnica.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-cyan-500 hover:bg-cyan-400 text-black px-10 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 cyan-glow">
            Empezar Proyecto
          </button>
          <a href="#services" className="glass hover:bg-white/10 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all border border-white/20 flex items-center justify-center">
            Nuestros Servicios
          </a>
        </div>

        <div className="mt-20 flex justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all">
          <i className="fab fa-react text-4xl hover:text-cyan-400"></i>
          <i className="fab fa-js text-4xl hover:text-yellow-400"></i>
          <i className="fab fa-node-js text-4xl hover:text-green-500"></i>
          <i className="fab fa-php text-4xl hover:text-indigo-400"></i>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <i className="fas fa-chevron-down text-gray-500"></i>
      </div>
    </div>
  );
};

export default Hero;
