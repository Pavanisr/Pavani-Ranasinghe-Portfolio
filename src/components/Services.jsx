import React from 'react';
import { motion } from 'framer-motion';

const services = [
  { title:'Web Development', desc:'Full-stack solutions with modern UI/UX' },
  { title:'Machine Learning Models', desc:'Custom ML/DL solutions for real-world problems' },
  { title:'AI & Generative AI', desc:'LLMOps, Deep Learning, Generative AI solutions' },
  { title:'Project Management', desc:'Consultation and technical guidance' }
];

export default function Services() {
  return (
    <section 
      id="services" 
      className="py-20 relative overflow-hidden bg-gradient-to-r from-black via-purple-950 to-black animate-gradient"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center text-white">Services</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div 
              key={s.title} 
              className="p-6 rounded-xl bg-black border border-purple-900/40 shadow-lg shadow-black/70 cursor-pointer"
              initial={{ y: 40, opacity: 0, scale: 0.95 }}
              whileInView={{ y: 0, opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.15, duration: 0.5, ease: "easeOut" }}
              whileHover={{ y: -8, scale: 1.05, rotateX: 4, rotateY: -4, transition: { duration: 0.3 } }}
            >
              <div className="text-lg font-semibold mb-2 text-white">{s.title}</div>
              <div className="text-sm text-gray-300">{s.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background Gradient Animation */}
      <style>
        {`
          .animate-gradient {
            background-size: 400% 400%;
            animation: gradientBG 12s ease infinite;
          }
          @keyframes gradientBG {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}
      </style>
    </section>
  );
}
