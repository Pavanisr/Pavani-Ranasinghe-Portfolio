import React from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-[#1E0D3A]/50 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <motion.a 
          href="#home" 
          className="w-10 h-10 rounded-full bg-gradient-to-br from-accent1 to-accent2 flex items-center justify-center font-bold"
          whileHover={{ scale: 1.4, textShadow: '0 0 16px rgba(124,58,237,1)' }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          PR
        </motion.a>

        {/* Navbar Links */}
        <nav className="hidden md:flex gap-6 text-sm text-gray-300">
          {['Home','About','Education','Skills','Projects','Services','Contact'].map((link) => (
            <motion.a 
              key={link}
              href={`#${link.toLowerCase()}`} 
              className="transition-all duration-300"
              whileHover={{ scale: 1.3, textShadow: '0 0 12px rgba(124,58,237,1)', color: '#7C3AED' }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              {link}
            </motion.a>
          ))}
        </nav>

      </div>
    </header>
  )
}
