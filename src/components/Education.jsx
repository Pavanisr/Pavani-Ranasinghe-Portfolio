import React from 'react';
import { motion } from 'framer-motion';
import { FaUniversity, FaSchool, FaBookOpen } from 'react-icons/fa';

export default function Education() {
  const items = [
    { 
      year: '2023 - 2027', 
      title: 'Bachelor of Information and Communication Technology', 
      org: 'University of Sri Jayewardenepura', 
      notes: 'Specializing in Software Engineering',
      icon: <FaUniversity className="text-accent1 text-2xl" />
    },
    { 
      year: '2021', 
      title: 'Advanced Level', 
      org: 'Mo/Dutugemunu Central College', 
      notes: 'Engineering Technology Stream, District 1st, Island 64th',
      icon: <FaSchool className="text-accent1 text-2xl" />
    },
    { 
      year: '2018', 
      title: 'Ordinary Level', 
      org: 'Mo/Dutugemunu Central College', 
      notes: 'Excellent results in Mathematics, Science, ICT, English, Business Studies',
      icon: <FaBookOpen className="text-accent1 text-2xl" />
    }
  ];

  return (
    <motion.section
      id="education"
      className="py-20"
      animate={{
        background: [
          'linear-gradient(135deg, #000000, #3B0A3B)',
          'linear-gradient(135deg, #3B0A3B, #1E0D3A)',
          'linear-gradient(135deg, #1E0D3A, #000000)'
        ]
      }}
      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-16 text-white text-center">Education</h2>
        <div className="space-y-12">
          {items.map((it, i) => (
            <motion.div 
              key={i} 
              className="flex justify-center"
              initial={{ x: i % 2 === 0 ? -150 : 150, opacity: 0 }} 
              whileInView={{ x: 0, opacity: 1 }}
              whileHover={{ scale: 1.03 }}
            >
              <motion.div
                className="bg-gradient-to-br from-[#1C0B2A] to-[#3B0A3B] rounded-2xl p-8 w-full max-w-2xl relative overflow-hidden transition-all duration-500 shadow-[10px_10px_40px_rgba(0,0,0,0.8),-5px_-5px_25px_rgba(255,255,255,0.05)] hover:shadow-[inset_5px_5px_20px_rgba(0,0,0,0.6),inset_-5px_-5px_15px_rgba(255,255,255,0.05)]"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                {/* Year Box */}
                <div className="absolute -top-3 right-6 bg-gradient-to-r from-accent1 to-accent2 text-black font-bold px-5 py-2 rounded-lg shadow-lg text-base md:text-lg">
                  {it.year}
                </div>

                <div className="flex items-center gap-4 mb-4">
                  {it.icon}
                  <div className="font-semibold text-white text-lg md:text-xl">{it.title}</div>
                </div>
                <div className="text-sm md:text-base text-gray-300">{it.org}</div>
                <div className="text-sm md:text-base text-gray-300 mt-2">{it.notes}</div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
