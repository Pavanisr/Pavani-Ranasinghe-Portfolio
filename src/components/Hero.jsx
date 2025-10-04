import React from 'react';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import profilePic from '../assets/ppp.png';

export default function Hero() {
  return (
    <motion.section
      id="home"
      className="min-h-screen flex items-center justify-center"
      animate={{
        background: [
          'linear-gradient(135deg, #000000, #3B0A3B)',
          'linear-gradient(135deg, #3B0A3B, #1E0D3A)',
          'linear-gradient(135deg, #1E0D3A, #000000)'
        ]
      }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-16">
        
        {/* Left Side: Text */}
        <motion.div 
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl xl:text-8xl font-light tracking-wide">
            <span className="font-['Dancing_Script'] font-bold text-white">
              Hi, I'm
            </span>
            <br />
            <span className="font-[Lato] text-accent1 font-normal">
              Pavani Ranasinghe
            </span>
          </h1>
          
          <div className="mt-4 text-lg md:text-xl h-8">
            <Typewriter 
              options={{ 
                strings:[
                  "<span class='typewriter-glow'>BICT Undergraduate</span>",
                  "<span class='typewriter-glow'>Machine Learning Enthusiast</span>",
                  "<span class='typewriter-glow'>Web Developer</span>"
                ], 
                autoStart:true, 
                loop:true, 
                cursor:'_' 
              }} 
            />
          </div>

          <div className="mt-10 flex gap-6 justify-center md:justify-start">
            <motion.a 
              whileHover={{ translateY:-6, boxShadow:'0 20px 40px rgba(124,58,237,0.18)'}} 
              href="#projects" 
              className="px-8 py-4 rounded-full text-lg bg-gradient-to-r from-accent1 to-accent2 font-[Poppins]"
            >
              View My Work
            </motion.a>
            <motion.a 
              whileHover={{ translateY:-6 }} 
              href="#contact" 
              className="px-8 py-4 rounded-full text-lg border border-white/10 font-[Poppins]"
            >
              Hire Me
            </motion.a>
          </div>
        </motion.div>

        {/* Right Side: Profile Image */}
        <motion.div 
          className="flex-1 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.9 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.9 }}
        >
          <motion.div 
            className="w-[26rem] h-[26rem] md:w-[30rem] md:h-[30rem] rounded-full overflow-hidden relative cursor-pointer neon-profile"
            animate={{ y: [0, -15, 0], scale: [1, 1.04, 1] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ scale: 1.1 }}
          >
            <div className="relative w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-accent1 to-accent2">
              <img 
                src={profilePic} 
                alt="Pavani" 
                className="relative z-10 w-full h-full rounded-full object-cover object-top transform -translate-y-4 transition-transform duration-700 ease-in-out" 
              />
              <motion.div 
                className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Typewriter Glow & Neon Profile CSS */}
      <style>
        {`
          .typewriter-glow {
            font-family: monospace;
            color: #7C3AE5;
            text-shadow: 0 0 10px #7C3AE5, 0 0 20px #7C3AE5, 0 0 30px #7C3AE5;
            animation: glowPulse 2s ease-in-out infinite;
          }

          @keyframes glowPulse {
            0%, 100% { text-shadow: 0 0 5px #7C3AE5, 0 0 10px #7C3AE5, 0 0 15px #7C3AE5; }
            50% { text-shadow: 0 0 15px #7C3AE5, 0 0 30px #7C3AE5, 0 0 45px #7C3AE5; }
          }

          /* Neon Effect for Profile Image */
          .neon-profile {
            box-shadow:
              0 0 15px rgba(255,255,255,0.4),
              0 0 30px rgba(255,255,255,0.3),
              0 0 45px rgba(255,255,255,0.2),
              0 0 60px rgba(255,255,255,0.1);
            transition: box-shadow 0.3s ease-in-out;
          }

          .neon-profile:hover {
            box-shadow:
              0 0 25px rgba(255,255,255,0.6),
              0 0 50px rgba(255,255,255,0.5),
              0 0 75px rgba(255,255,255,0.4),
              0 0 100px rgba(255,255,255,0.3);
          }
        `}
      </style>
    </motion.section>
  )
}
