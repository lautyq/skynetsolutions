
import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-[#050505]">
      {/* Background elements for depth */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-900/30 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-900/30 blur-[120px] rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-4 py-1 mb-6 border border-white/10 bg-white/5 rounded-full backdrop-blur-md">
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-white">ESTABLECIENDO CONEXIÓN...</span>
          </div>
          <h1 className="text-6xl md:text-9xl font-black font-orbitron leading-[0.85] mb-8 tracking-tighter">
            SKY <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/50 to-white/5">NET</span><br />
            SYSTEMS.
          </h1>
          <p className="text-lg text-white/40 max-w-lg mb-12 leading-relaxed font-light">
            No desarrollamos páginas, construimos nodos de poder digital. Bienvenidos a la red.
          </p>
          
          <div className="flex flex-wrap gap-6">
            <button className="px-12 py-6 bg-white text-black font-black uppercase tracking-widest hover:bg-transparent hover:text-white border border-white transition-all duration-500 text-xs">
              ACCEDER AL CORE
            </button>
            <button className="px-12 py-6 border border-white/10 bg-white/5 hover:bg-white/10 transition-colors font-black uppercase tracking-widest text-xs">
               VER PROTOCOLOS
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotateY: 20 }}
          whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative perspective-1000"
        >
          {/* Epic Computer Vision Box */}
          <div className="relative z-10 p-[1px] bg-gradient-to-tr from-white/20 via-white/5 to-transparent rounded-2xl overflow-hidden shadow-[0_0_80px_rgba(147,51,234,0.1)]">
            <div className="bg-[#0a0a0a] rounded-2xl overflow-hidden">
                <div className="flex items-center justify-between p-4 bg-white/5 border-b border-white/5">
                    <div className="flex gap-2">
                        <div className="w-2 h-2 rounded-full bg-red-500/30"></div>
                        <div className="w-2 h-2 rounded-full bg-yellow-500/30"></div>
                        <div className="w-2 h-2 rounded-full bg-green-500/30"></div>
                    </div>
                    <span className="text-[8px] tracking-[0.5em] font-bold opacity-30 uppercase animate-pulse">LIVE_FEED_01</span>
                </div>
                
                <div className="relative aspect-video bg-black overflow-hidden group">
                    <img 
                        src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1200" 
                        alt="Sky Net Terminal" 
                        className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-[2000ms] grayscale"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                    
                    {/* Floating Data UI Overlay */}
                    <div className="absolute inset-0 p-6 flex flex-col justify-between pointer-events-none">
                        <div className="flex justify-end">
                            <div className="bg-white/10 backdrop-blur-md p-2 border border-white/10 text-[8px] font-mono">
                                UPLINK: STABLE <br/>
                                LATENCY: 4ms
                            </div>
                        </div>
                        <div className="flex flex-col gap-1">
                            <div className="w-1/2 h-[1px] bg-white/20"></div>
                            <div className="w-1/3 h-[1px] bg-white/10"></div>
                        </div>
                    </div>

                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 border border-white/5 rounded-full animate-spin-slow opacity-20"></div>
                </div>

                <div className="p-8 bg-gradient-to-b from-transparent to-purple-900/5">
                    <div className="font-mono text-[9px] text-purple-400 mb-4 tracking-tighter uppercase">
                        [ SYSTEM STATUS: OPERATIONAL ]
                    </div>
                    <div className="h-1 bg-white/5 rounded-full mb-6 relative overflow-hidden">
                        <motion.div 
                          className="absolute inset-0 bg-white"
                          initial={{ x: '-100%' }}
                          animate={{ x: '0%' }}
                          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        />
                    </div>
                    <div className="font-mono text-[10px] text-white/30 leading-relaxed uppercase tracking-widest">
                        > DESPLEGANDO INTERFAZ REBORN... <br/>
                        > OPTIMIZANDO NODOS DE RESPUESTA... <br/>
                        > OBJETIVO: DOMINACIÓN DIGITAL TOTAL.
                    </div>
                </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Hero Bottom Decor */}
      <div className="absolute bottom-10 left-0 w-full flex justify-center opacity-20">
         <div className="w-px h-20 bg-gradient-to-b from-white to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
