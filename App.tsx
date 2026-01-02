
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Trustpilot from './components/Trustpilot';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#050505] selection:bg-purple-500/30">
      <CustomCursor />
      
      <AnimatePresence>
        {loading ? (
          <motion.div
            key="loader"
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#050505]"
            exit={{ opacity: 0, transition: { duration: 0.8 } }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, repeat: Infinity, repeatType: 'reverse' }}
              className="text-2xl font-orbitron font-black tracking-widest text-white flex flex-col items-center"
            >
              <div className="w-16 h-1 bg-white mb-4 animate-pulse"></div>
              SKY NET SOLUTIONS
              <p className="text-[10px] mt-2 opacity-50 tracking-[0.5em]">SYSTEMS ONLINE</p>
            </motion.div>
          </motion.div>
        ) : (
          <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Navbar />
            <Hero />
            <Services />
            <Gallery />
            <Portfolio />
            <Trustpilot />
            <Footer />
          </motion.main>
        )}
      </AnimatePresence>

      {/* Global Background Elements */}
      <div className="gradient-blur w-[600px] h-[600px] bg-purple-900/10 top-[-150px] right-[-150px] pointer-events-none"></div>
      <div className="gradient-blur w-[500px] h-[500px] bg-blue-900/10 bottom-[-150px] left-[-150px] pointer-events-none"></div>
    </div>
  );
};

export default App;
