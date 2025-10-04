import React from 'react';
import { motion } from 'framer-motion';
import aboutPic from '../assets/IMG_2048.png'; // ✅ Import your image correctly

export default function About() {
  return (
    <motion.section
      id="about"
      className="py-16 min-h-screen flex items-center"
      animate={{
        background: [
          'linear-gradient(135deg, #000000, #3B0A3B)',
          'linear-gradient(135deg, #3B0A3B, #1E0D3A)',
          'linear-gradient(135deg, #1E0D3A, #000000)'
        ]
      }}
      transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
    >
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Title */}
        <motion.h2 
          className="text-5xl md:text-6xl font-bold mb-6 text-white text-center md:text-left" 
          initial={{ y: 30, opacity: 0 }} 
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          About Me
        </motion.h2>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ x: -60, opacity: 0 }} 
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-gray-300 leading-relaxed text-lg">
              I'm Pavani Ranasinghe, a BICT undergraduate at University of Sri Jayewardenepura (2023–2027), specializing in Machine Learning, Web Development, and Software Engineering. <br/> District 1st and Island 64th in A/Ls, I bring strong skills in problem-solving, leadership, teamwork, and project management.
            </p>
            <a 
              href="https://www.canva.com/design/DAGj9nkRX08/yiNICDd5Lk8vwm3uVOMfuA/view?utm_content=DAGj9nkRX08&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h62ba052716" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block mt-4 px-6 py-3 bg-gradient-to-r from-accent1 to-accent2 rounded text-white font-[Poppins] text-lg"
            >
              View Resume
            </a>
          </motion.div>

          {/* Image with neon effect */}
          <motion.div 
            initial={{ x: 60, opacity: 0 }} 
            whileInView={{ x: 0, opacity: 1 }} 
            transition={{ duration: 0.8 }}
            className="flex justify-start"
          >
            <motion.div
              className="w-72 h-80 md:w-80 md:h-96 rounded-lg overflow-hidden relative"
              animate={{
                y: [0, -10, 0],      // floating up and down
                scale: [1, 1.03, 1], // subtle breathing effect
                boxShadow: [
                  '0 0 20px rgba(255,255,255,0.1)',
                  '0 0 40px rgba(255,255,255,0.4)',
                  '0 0 20px rgba(255,255,255,0.1)'
                ]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="absolute inset-0 rounded-lg overflow-hidden bg-gradient-to-br from-accent1 to-accent2 opacity-20"></div>
              <img 
                src={aboutPic} 
                alt="Pavani" 
                className="w-full h-full object-cover rounded-lg relative z-10"
              />
              {/* Neon overlay */}
              <motion.div
                className="absolute inset-0 rounded-lg border border-white/20"
                animate={{
                  boxShadow: [
                    '0 0 10px #fff',
                    '0 0 20px #fff',
                    '0 0 10px #fff'
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
          </motion.div>

        </div>
      </div>
    </motion.section>
  )
}
