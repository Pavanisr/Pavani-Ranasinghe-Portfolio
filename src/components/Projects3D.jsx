import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// ✅ Import your project images
import hospitalImg from "../assets/Hospital.png";
import foodImg from "../assets/FOOD.png";
import stressImg from "../assets/stress.png";
import aslAlphaImg from "../assets/ASL_Alph.png";
import aslGesturesImg from "../assets/ASL_gestures.png";
import doctorRecImg from "../assets/doctor_reccomand.png";
import mediImg from "../assets/medibot6.jpg"; 
import potato from "../assets/p1.jpg";
import empImg from "../assets/home.jpg";
import gymImg from "../assets/gym1.jpg";
import aifitnessImg from "../assets/aifitness1.jpg";
import potatobotImg from "../assets/p6.jpg";// New project image


const Projects = () => {
  const projects = useMemo(
    () => [
      {
        id: 1,
        title: "MERN-Stack Hospital Website",
        desc: "Dual interfaces for patients and staff with ML-based doctor recommendations.",
        tech: "MERN, ML, Node.js",
        code: "https://github.com/Pavanisr/MERN-STACK-hospital-Website.git",
        img: hospitalImg
      },
      
      {
        id: 2,
        title: "Food Recipe Sharing App",
        desc: "Recipe uploads, authentication, and favorites feature.",
        tech: "MERN Stack",
        code: "https://github.com/Pavanisr/Food-Recipe-Sharing-app.git",
        img: foodImg
      },
      {
        id: 3,
        title: "Stress Level Predictor",
        desc: "Predicts stress levels (low/medium/high) using ML.",
        tech: "Python, Sklearn, Pandas",
        code: "https://github.com/Pavanisr/Stress-Level-Predictor.git",
        img: stressImg
      },
      {
        id: 4,
        title: "ASL Alphabet Recognizer",
        desc: "Deep learning + MediaPipe to recognize ASL alphabet with ~98% accuracy.",
        tech: "TensorFlow, MediaPipe, OpenCV",
        code: "https://github.com/Pavanisr/American-Sign-Langauge-Alphabet-Recognizer-Using-Deep-Learning.git",
        img: aslAlphaImg
      },
      {
        id: 5,
        title: "ASL Gesture Recognition System",
        desc: "CNN-based system with 99.37% accuracy using augmentation & hand landmarks.",
        tech: "TensorFlow, MediaPipe, Data Augmentation",
        code: "https://github.com/Pavanisr/Real-Time-Recognition-of-Sign-Language-Greetings-Using-MediaPipe-and-Deep-Learning.git",
        img: aslGesturesImg
      },
      {
        id: 6,
        title: "Doctor Recommendation using ML",
        desc: "ML model recommending doctors based on patient data and symptoms.",
        tech: "Python, Sklearn, Pandas",
        code: "https://github.com/Pavanisr/Doctor-Recommendation-machine-learning-model.git",
        img: doctorRecImg
      },
      {
        id: 7,
        title: "MediPal",
        desc: "AI-powered healthcare assistant using Python, Streamlit, and Hugging Face GenAI for interactive medical guidance.",
        tech: "Python, GenAI, Streamlit,HuggingFace",
        code: "https://github.com/Pavanisr/Medipal.git",
        img: mediImg
      },
      {
        id: 8,
        title: "PotatoBuddy",
        desc: "Fun and interactive AI companion built with Python, Streamlit, and Hugging Face GenAI.",
        tech: "Python, GenAI, Streamlit, HuggineFace",
        code: "https://github.com/Pavanisr/Potato-Disease-Identifier-and-PotatoBuddy-chatbot/tree/af9e99210cc79750d14bfc2e48335ebf5a74e058/potatoBot",
        img: potatobotImg
      },
      {
        id: 9,
        title: "AI Fitness Coach",
        desc: "Personalized fitness assistant using Python, Flask, and Gemini Flash model for smart diet and workout guidance.",
        tech: "Python, GenAI, Flask",
        code: "https://github.com/Pavanisr/AI-Fitness-Coach.git",
        img: aifitnessImg
      },
      {
        id: 10,
        title: "Employee Management & Face Recognition Attendance System",
        desc: "Full-stack employee management with React, Node.js, PostgreSQL, and automated face recognition attendance using Python, Flask, and MediaPipe.",
        tech: "Python, Mediapipe, Flask,React js,Node.js,PostgreSQL",
        code: "https://github.com/Pavanisr/Employee-Management-System-with-Face-Recognition.git",
        img: empImg
      },
      {
        id: 11,
        title: "Potato Disease Identifier",
        desc: "DL-powered system using Python, Flask, and Computer Vision to detect and identify potato plant diseases automatically.",
        tech: "Python, DeepLearning, Flask,Computer Vision",
        code: "https://github.com/Pavanisr/Potato-Disease-Identifier-and-PotatoBuddy-chatbot.git",
        img: potato
      },
      {
        id: 12,
        title: "Gym Management System",
        desc: "Full-stack app using React, Node.js, Bootstrap, and PostgreSQL for efficient management of gym memberships, trainers, and schedules.",
        tech: "React, Node.js, Bootstrap,PostgreSQL",
        code: "https://github.com/Pavanisr/Gym-Management-System-with-AI-fitness-chatbot.git",
        img: gymImg
      },
    ],
    []
  );

  const count = projects.length;
  const [startIdx, setStartIdx] = useState(0);

  const visibleItems = useMemo(() => {
    return [
      projects[(startIdx + count - 1) % count],
      projects[startIdx],
      projects[(startIdx + 1) % count],
    ];
  }, [startIdx, count, projects]);

  const next = () => setStartIdx((s) => (s + 1) % count);
  const prev = () => setStartIdx((s) => (s - 1 + count) % count);

  return (
    <section 
      className="py-20 relative bg-gradient-to-r from-black via-purple-950 to-black animate-gradient overflow-hidden" 
      id="projects"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-6"
      >
        <h2 className="text-4xl font-bold mb-12 text-center text-white">Projects</h2>

        {/* Carousel */}
        <div className="relative">
          <div className="perspective">
            <div className="relative h-[32rem] flex items-center justify-center">
              <AnimatePresence initial={false} mode="popLayout">
                {visibleItems.map((p, i) => {
                  const pos = i - 1; // left(-1), center(0), right(1)
                  const scale = pos === 0 ? 1 : 0.86;
                  const xOffset = pos * 300;

                  return (
                    <motion.div
                      key={p.id}
                      initial={{ x: xOffset + 60, y: 30, opacity: 0, rotateY: pos * 10, scale }}
                      animate={{ x: xOffset, y: pos === 0 ? 0 : 20, opacity: 1, rotateY: pos * 6, scale }}
                      exit={{ x: -xOffset - 60, opacity: 0, scale: 0.8 }}
                      transition={{ type: "spring", stiffness: 150, damping: 18 }}
                      className="absolute w-72 md:w-96 h-[28rem] md:h-[30rem] 
                                 rounded-xl bg-black p-4 shadow-lg shadow-black/70 
                                 border border-purple-900/40"
                      style={{ transformStyle: "preserve-3d", zIndex: pos === 0 ? 10 : 1 }}
                      whileHover={{ y: -12, rotateX: -5, rotateY: 6, scale: 1.03 }}
                    >
                      <div className="flex flex-col h-full">
                        {/* Project Image */}
                        <div className="w-full h-56 rounded-md overflow-hidden mb-3">
                          <img src={p.img} alt={p.title} className="w-full h-full object-cover" />
                        </div>

                        {/* Text */}
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                          <p className="text-sm text-gray-300 mt-2">{p.desc}</p>
                        </div>

                        {/* Footer */}
                        <div className="mt-3 flex items-center justify-between">
                          <div className="text-xs text-gray-400">{p.tech}</div>
                          <div className="flex gap-2">
                            <a href={p.code} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition">
                              <FaGithub size={18} />
                            </a>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>

          {/* Navigation buttons */}
          <div className="flex items-center justify-center gap-6 mt-10">
            <button onClick={prev} className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition">
              <FaArrowLeft size={20} />
            </button>
            <button onClick={next} className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition">
              <FaArrowRight size={20} />
            </button>
          </div>
        </div>
      </motion.div>

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
};

export default Projects;
