import React from 'react';
import { motion } from 'framer-motion';

export default function Skills() {
  const tech = [
    { name:'Python', pct:90 }, { name:'Java', pct:80 }, { name:'C#', pct:75 }, { name:'C', pct:70 }, { name:'SQL', pct:85 },
    { name:'React', pct:85 }, { name:'Node.js', pct:75 }, { name:'TensorFlow', pct:78 }, { name:'Generative AI', pct:80 }
  ];

  return (
    <section 
      id="skills" 
      className="py-20 relative bg-gradient-to-r from-black via-purple-950 to-black animate-gradient"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center text-white">Skills & Expertise</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tech.map((s, i) => (
            <motion.div
              key={s.name}
              className="bg-black/60 p-6 rounded-xl shadow-lg border border-purple-900/40"
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              whileHover={{ scale: 1.05 }}
            >
              {/* Skill Name + % */}
              <div className="flex items-center justify-between mb-3">
                <div className="font-semibold text-white">{s.name}</div>
                <div className="text-sm text-gray-300">{s.pct}%</div>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${s.pct}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: "easeInOut" }}
                  className="h-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 shadow-[0_0_15px_rgba(168,85,247,0.6)]"
                />
              </div>
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
