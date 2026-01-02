
import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-4 py-1 mb-6 border border-white/10 bg-white/5 rounded-full backdrop-blur-md">
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-white">THE FUTURE IS NOW</span>
          </div>
          <h1 className="text-6xl md:text-9xl font-black font-orbitron leading-[0.9] mb-8 tracking-tighter">
            SKY <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/40 to-white/10">NET</span><br />
            SYSTEMS.
          </h1>
          <p className="text-lg text-white/50 max-w-lg mb-12 leading-relaxed font-light">
            Expertos en arquitectura digital disruptiva. Desarrollamos la infraestructura que dominará la web del mañana.
          </p>
          
          <div className="flex flex-wrap gap-6">
            <button className="px-12 py-6 bg-white text-black font-black uppercase tracking-widest hover:scale-105 transition-transform duration-300 text-xs">
              EXPLORAR NODOS
            </button>
            <button className="px-12 py-6 border border-white/20 hover:bg-white/5 transition-colors font-black uppercase tracking-widest text-xs">
               PROTOCOLOS
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: 10 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative group"
        >
          {/* Epic Computer Vision Box */}
          <div className="relative z-10 p-[1px] bg-gradient-to-tr from-white/20 via-white/5 to-transparent rounded-2xl overflow-hidden shadow-[0_0_100px_rgba(255,255,255,0.05)]">
            <div className="bg-[#0a0a0a] rounded-2xl overflow-hidden">
                <div className="flex items-center justify-between p-4 bg-white/5 border-b border-white/5">
                    <div className="flex gap-2">
                        <div className="w-2 h-2 rounded-full bg-white/20"></div>
                        <div className="w-2 h-2 rounded-full bg-white/20"></div>
                        <div className="w-2 h-2 rounded-full bg-white/20"></div>
                    </div>
                    <span className="text-[8px] tracking-[0.4em] font-bold opacity-30 uppercase">SYSTEMS_ACTIVE</span>
                </div>
                
                <div className="relative aspect-video bg-black overflow-hidden">
                    <img 
                        src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1200" 
                        alt="High Tech Visual" 
                        className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000 grayscale group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                    
                    {/* Floating HUD elements */}
                    <div className="absolute top-4 right-4 flex flex-col gap-2 pointer-events-none">
                        <div className="px-2 py-1 bg-white/10 backdrop-blur-md text-[8px] font-mono border border-white/10">CORE_TEMP: 32.4°C</div>
                        <div className="px-2 py-1 bg-white/10 backdrop-blur-md text-[8px] font-mono border border-white/10">THROUGHPUT: 1.2 GB/S</div>
                    </div>

                    <div className="absolute inset-0 border border-white/5 pointer-events-none"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-white/10 rounded-full animate-ping opacity-20"></div>
                </div>

                <div className="p-8">
                    <div className="grid grid-cols-3 gap-4 mb-6">
                        <div className="h-1 bg-white/20 rounded-full overflow-hidden"><div className="h-full bg-white w-2/3 animate-pulse"></div></div>
                        <div className="h-1 bg-white/20 rounded-full overflow-hidden"><div className="h-full bg-white w-1/2 animate-pulse"></div></div>
                        <div className="h-1 bg-white/20 rounded-full overflow-hidden"><div className="h-full bg-white w-3/4 animate-pulse"></div></div>
                    </div>
                    <div className="font-mono text-[10px] text-white/40 leading-relaxed uppercase tracking-tighter">
                        > INITIALIZING LINK... <br/>
                        > ESTABLISHING SECURE PROTOCOL... <br/>
                        > DOMAIN ANALYSIS: COMPLETE <br/>
                        > READY TO DEPLOY NEXT_GEN_WEB
                    </div>
                </div>
            </div>
          </div>
          
          {/* Decorative Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-500/10 blur-[150px] -z-10 animate-pulse"></div>
          <div className="absolute -bottom-10 -left-10 w-32 h-32 border-l border-b border-white/20 rounded-bl-3xl"></div>
          <div className="absolute -top-10 -right-10 w-32 h-32 border-r border-t border-white/20 rounded-tr-3xl"></div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
