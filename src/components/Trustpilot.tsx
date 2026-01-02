
import React from 'react';
import { motion } from 'framer-motion';

const Trustpilot: React.FC = () => {
  return (
    <section className="py-32 bg-[#050505] border-t border-white/5">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="flex justify-center items-center gap-2 mb-8">
            <span className="text-2xl font-black font-orbitron">Trustpilot</span>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((s) => (
                <div key={s} className="w-6 h-6 bg-[#00b67a] flex items-center justify-center text-white text-[10px]">★</div>
              ))}
            </div>
          </div>

          <h2 className="text-3xl md:text-5xl font-black font-orbitron mb-10 uppercase italic">RECONOCIMIENTO TOTAL.</h2>

          <p className="text-white/60 text-lg mb-12 italic">
            "Sky Net Solutions no solo construyó nuestra web, redefinió nuestra presencia digital completa con una arquitectura impecable."
          </p>

          <a
            href="https://es.trustpilot.com/review/skynet-solutions.xyz"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 text-xs font-black tracking-[0.5em] border-b border-white/20 pb-2 hover:border-white transition-all uppercase"
          >
            Ver todas las reseñas
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Trustpilot;
