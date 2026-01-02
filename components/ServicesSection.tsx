
import React from 'react';

const services = [
  {
    icon: 'fa-globe',
    title: 'Desarrollo Web Premium',
    desc: 'Sitios web de alto rendimiento construidos con tecnologías modernas para asegurar velocidad, SEO y conversión.',
    color: 'text-cyan-400'
  },
  {
    icon: 'fa-headset',
    title: 'Sistemas de Soporte',
    desc: 'Infraestructuras completas para atención al cliente, integrando flujos de trabajo eficientes y personalizados.',
    color: 'text-indigo-400'
  },
  {
    icon: 'fa-ticket-alt',
    title: 'Gestión de Tickets',
    desc: 'Plataformas internas para el manejo de incidencias y solicitudes, optimizadas para la productividad empresarial.',
    color: 'text-purple-400'
  },
  {
    icon: 'fa-server',
    title: 'Hosting & Mantenimiento',
    desc: 'Servidores de alta disponibilidad y soporte técnico continuo para que tu web nunca deje de funcionar.',
    color: 'text-blue-400'
  },
  {
    icon: 'fa-lock',
    title: 'Seguridad Blindada',
    desc: 'Protección avanzada de datos y certificados SSL de alta seguridad para la tranquilidad de tu negocio.',
    color: 'text-red-400'
  },
  {
    icon: 'fa-chart-line',
    title: 'Optimización Continua',
    desc: 'Análisis de rendimiento y mejoras constantes para asegurar que tu presencia digital siempre esté a la vanguardia.',
    color: 'text-green-400'
  }
];

const ServicesSection: React.FC = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold font-orbitron mb-4">Capacidades Centrales</h2>
        <div className="h-1 w-20 bg-cyan-500 mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((s, idx) => (
          <div 
            key={idx} 
            className="group glass p-8 rounded-2xl transition-all hover:translate-y-[-8px] hover:border-cyan-500/50"
          >
            <div className={`text-4xl mb-6 ${s.color} transition-transform group-hover:scale-110`}>
              <i className={`fas ${s.icon}`}></i>
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">{s.title}</h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              {s.desc}
            </p>
            <span className="text-sm font-bold text-cyan-400 hover:text-cyan-300 flex items-center gap-2 cursor-pointer">
              Saber más <i className="fas fa-arrow-right text-xs"></i>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
