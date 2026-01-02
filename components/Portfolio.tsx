
import React from 'react';
import { Project } from '../types';

const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Nexus Enterprise ERP',
    category: 'Sistemas Internos',
    description: 'Plataforma integral de gestión de recursos para corporaciones multinacionales con sincronización en tiempo real.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    tags: ['React', 'Node.js', 'PostgreSQL']
  },
  {
    id: '2',
    title: 'Aether Crypto Dashboard',
    category: 'Fintech',
    description: 'Visualización de datos complejos y trading de activos digitales con latencia ultrabaja.',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800',
    tags: ['Web3', 'TypeScript', 'Tailwind']
  },
  {
    id: '3',
    title: 'Titan E-commerce Engine',
    category: 'E-commerce',
    description: 'Infraestructura de venta masiva capaz de procesar 10k transacciones por minuto sin degradación.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800',
    tags: ['Next.js', 'AWS', 'Redis']
  },
  {
    id: '4',
    title: 'OmniSupport Portal',
    category: 'Sistemas de Tickets',
    description: 'Sistema de atención al cliente multicanal con automatización de flujos de trabajo.',
    image: 'https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=800',
    tags: ['PHP', 'MySQL', 'Socket.io']
  }
];

const Portfolio: React.FC = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold font-orbitron mb-4">Nuestro Portfolio</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Una selección de arquitecturas digitales diseñadas para escalar, rendir y convertir.
        </p>
        <div className="h-1 w-20 bg-cyan-500 mx-auto mt-4 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PROJECTS.map((project) => (
          <div 
            key={project.id} 
            className="group relative overflow-hidden rounded-3xl glass border border-white/5 transition-all hover:border-cyan-500/30"
          >
            <div className="aspect-video overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-70 group-hover:opacity-100"
              />
            </div>
            
            <div className="p-8 relative">
              <div className="absolute -top-6 right-8 bg-cyan-500 text-black text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-lg shadow-lg">
                {project.category}
              </div>
              
              <h3 className="text-2xl font-bold font-orbitron text-white mb-3">{project.title}</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 bg-white/5 border border-white/10 rounded-full text-gray-400">
                    {tag}
                  </span>
                ))}
              </div>

              <button className="flex items-center gap-2 text-cyan-400 font-bold text-sm group-hover:translate-x-2 transition-transform">
                Ver Caso de Estudio <i className="fas fa-chevron-right text-xs"></i>
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-16 text-center">
        <button className="glass border border-cyan-500/20 px-8 py-3 rounded-xl font-bold text-white hover:bg-cyan-500/10 transition-all">
          Ver todos los proyectos
        </button>
      </div>
    </div>
  );
};

export default Portfolio;
