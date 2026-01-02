
import React from 'react';
import { motion } from 'framer-motion';

const images = [
  "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800"
];

const Gallery: React.FC = () => {
  return (
    <section id="galeria" className="py-20 bg-black overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative aspect-square overflow-hidden group"
            >
              <img
                src={img}
                alt="Tech Visual"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                 <div className="w-px h-12 bg-white scale-y-0 group-hover:scale-y-100 transition-transform duration-500"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
