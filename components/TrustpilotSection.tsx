
import React from 'react';

const TrustpilotSection: React.FC = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 py-4">
        <div className="flex items-center gap-4">
          <img 
            src="https://cdn.trustpilot.net/brand-assets/4.3.0/logo-white.svg" 
            alt="Trustpilot Logo" 
            className="h-8 md:h-10"
          />
          <div className="h-8 w-[1px] bg-white/20 hidden md:block"></div>
          <div className="flex flex-col">
            <div className="flex gap-1 text-[#00b67a]">
              {[1, 2, 3, 4, 5].map(i => <i key={i} className="fas fa-star"></i>)}
            </div>
            <span className="text-white text-xs font-bold uppercase tracking-widest mt-1">Excelente</span>
          </div>
        </div>

        <div className="text-center md:text-left">
          <p className="text-gray-400 text-sm">Nuestros clientes nos avalan como líderes en soluciones web.</p>
        </div>

        <a 
          href="https://es.trustpilot.com/review/skynet-solutions.xyz" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-[#00b67a] hover:bg-[#00d68a] text-white px-6 py-2.5 rounded font-bold text-sm transition-all flex items-center gap-2"
        >
          Ver Reseñas en Trustpilot <i className="fas fa-external-link-alt text-xs"></i>
        </a>
      </div>
    </div>
  );
};

export default TrustpilotSection;
