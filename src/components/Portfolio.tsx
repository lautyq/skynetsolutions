
import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "CYBERPUNK HUD",
    category: "INTERACTIVE UI",
    img: "https://picsum.photos/seed/project1/1000/600"
  },
  {
    title: "NEXUS DASHBOARD",
    category: "FINTECH WEBAPP",
    img: "https://picsum.photos/seed/project2/1000/600"
  },
  {
    title: "AETHER STUDIO",
    category: "CREATIVE PORTFOLIO",
    img: "https://picsum.photos/seed/project3/1000/600"
  }
];

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-32">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <span className="text-xs uppercase tracking-[0.5em] text-white/30 mb-4 block">Selected Works</span>
            <h2 className="text-4xl md:text-7xl font-black font-orbitron">LEGADO DIGITAL.</h2>
          </div>
          <p className="max-w-xs text-white/40 text-sm border-l border-white/10 pl-6">
            Cada proyecto es una declaración de guerra contra la mediocridad visual y técnica.
          </p>
        </div>

        <div className="grid gap-20">
          {projects.map((p, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="group relative cursor-none"
            >
              <div className="relative overflow-hidden aspect-[21/9] rounded-sm">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>

                <div className="absolute bottom-10 left-10">
                  <span className="text-xs font-bold tracking-[0.3em] text-white/60 mb-2 block">{p.category}</span>
                  <h3 className="text-3xl md:text-5xl font-black font-orbitron">{p.title}</h3>
                </div>

                <div className="absolute top-10 right-10 w-20 h-20 border border-white/20 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-sm">
                    <span className="text-[10px] font-black tracking-widest -rotate-45">VIEW</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
