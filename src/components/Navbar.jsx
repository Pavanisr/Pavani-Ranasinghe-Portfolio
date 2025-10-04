import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const links = ['Home','About','Education','Skills','Projects','Services','Contact'];

  return (
    <header className="sticky top-0 z-50 bg-[#1E0D3A]/50 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-6 lg:px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <motion.a 
          href="#home" 
          className="w-10 h-10 rounded-full bg-gradient-to-br from-accent1 to-accent2 flex items-center justify-center font-bold text-white"
          whileHover={{ scale: 1.4, textShadow: '0 0 16px rgba(124,58,237,1)' }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          PR
        </motion.a>

        {/* Desktop / Tablet Links */}
        <nav className="hidden md:flex gap-6 text-sm text-gray-300">
          {links.map(link => (
            <motion.a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="transition-all duration-300"
              whileHover={{ scale: 1.2, textShadow: '0 0 12px rgba(124,58,237,1)', color: '#7C3AED' }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              {link}
            </motion.a>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes size={24} className="text-gray-300" /> 
                     : <FaBars size={24} className="text-gray-300" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.nav
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="md:hidden bg-[#1E0D3A]/80 backdrop-blur-md w-full"
        >
          <ul className="flex flex-col gap-4 px-6 py-4 text-gray-300">
            {links.map(link => (
              <li key={link}>
                <motion.a
                  href={`#${link.toLowerCase()}`}
                  className="block py-2 transition-all"
                  whileHover={{ scale: 1.2, textShadow: '0 0 12px rgba(124,58,237,1)', color: '#7C3AED' }}
                  onClick={() => setIsOpen(false)} // close menu when clicked
                >
                  {link}
                </motion.a>
              </li>
            ))}
          </ul>
        </motion.nav>
      )}
    </header>
  )
}
