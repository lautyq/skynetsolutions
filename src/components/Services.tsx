
import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    title: "Web Apps de Élite",
    desc: "Desarrollamos aplicaciones robustas, escalables y visualmente impactantes usando el stack más moderno del mercado.",
    icon: "⚡"
  },
  {
    title: "AI Integration",
    desc: "Inyectamos inteligencia artificial real en tu flujo de trabajo, desde chatbots avanzados hasta automatización inteligente.",
    icon: "🧠"
  },
  {
    title: "E-Commerce Brutalista",
    desc: "Tiendas online diseñadas para convertir, con una estética disruptiva y una velocidad de carga instantánea.",
    icon: "💎"
  },
  {
    title: "Arquitectura Cloud",
    desc: "Infraestructura invisible y poderosa. Tu web siempre online, sin importar el volumen de tráfico.",
    icon: "☁️"
  }
];

const Services: React.FC = () => {
  return (
    <section id="servicios" className="py-32 bg-black relative">
      <div className="container mx-auto px-6">
        <div className="mb-20">
          <h2 className="text-4xl md:text-6xl font-black font-orbitron mb-6">NUESTRAS <br/> ARMAS.</h2>
          <div className="w-20 h-1 bg-white"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-10 bg-[#0a0a0a] border border-white/5 group hover:border-white/20 transition-all duration-500 relative overflow-hidden"
            >
              <div className="text-4xl mb-6 grayscale group-hover:grayscale-0 transition-all duration-500">{s.icon}</div>
              <h3 className="text-xl font-orbitron font-bold mb-4">{s.title}</h3>
              <p className="text-white/40 leading-relaxed text-sm">{s.desc}</p>

              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-500 group-hover:w-full"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
