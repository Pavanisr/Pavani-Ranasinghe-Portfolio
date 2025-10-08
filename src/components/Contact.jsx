import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs.sendForm(
      'YOUR_SERVICE_ID', // replace with your EmailJS service ID
      'YOUR_TEMPLATE_ID', // replace with your EmailJS template ID
      form.current,
      'YOUR_PUBLIC_KEY'   // replace with your EmailJS public key
    ).then(
      (result) => {
        setLoading(false);
        setSuccess('Message sent successfully!');
        e.target.reset();
      },
      (error) => {
        setLoading(false);
        setSuccess('Failed to send message, try again later.');
      }
    );
  };

  return (
    <section 
      id="contact" 
      className="py-20 relative bg-gradient-to-r from-black via-purple-950 to-black animate-gradient"
    >
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-10 text-center text-white">Contact</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <form 
            ref={form} 
            onSubmit={sendEmail} 
            className="space-y-4 bg-black p-6 rounded-xl shadow-lg shadow-black/70 border border-purple-900/40"
          >
            <motion.input 
              whileFocus={{ boxShadow:'0 6px 20px rgba(124,58,237,0.16)'}} 
              placeholder="Name" 
              name="user_name"
              className="w-full p-3 rounded bg-black border border-white/10 text-white placeholder-gray-400" 
              required
            />
            <motion.input 
              whileFocus={{ boxShadow:'0 6px 20px rgba(124,58,237,0.16)'}} 
              placeholder="Email" 
              name="user_email"
              defaultValue="pavaniranasinghe425@gmail.com"
              className="w-full p-3 rounded bg-black border border-white/10 text-white placeholder-gray-400" 
              required
            />
            <motion.textarea 
              whileFocus={{ boxShadow:'0 6px 20px rgba(124,58,237,0.16)'}} 
              placeholder="Message" 
              name="message"
              className="w-full p-3 rounded bg-black border border-white/10 text-white placeholder-gray-400" 
              rows={5} 
              required
            />
            <motion.button 
              type="submit"
              whileHover={{ scale:1.05, boxShadow:'0 0 25px rgba(124,58,237,0.6)' }} 
              className="px-5 py-3 rounded-lg text-white font-semibold 
                         bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600"
            >
              {loading ? 'Sending...' : 'Send Message'}
            </motion.button>
            {success && <p className="text-green-400 mt-2">{success}</p>}
          </form>

          {/* Contact Info */}
          <div className="bg-black p-6 rounded-xl shadow-lg shadow-black/70 border border-purple-900/40 flex flex-col justify-between">
            <div>
              <div className="font-semibold text-white text-lg">Contact Details</div>
              <div className="text-sm text-gray-400 mt-3">
                Email: <a href="mailto:pavaniranasinghe425@gmail.com" className="text-purple-400 hover:underline">pavaniranasinghe425@gmail.com</a>
              </div>
              
              <div className="text-sm text-gray-400 mt-2">Location: Buttala, Sri Lanka</div>
            </div>
            <div className="mt-6 flex gap-5 text-2xl text-white">
              <a href="https://github.com/Pavanisr" target="_blank" rel="noopener noreferrer">
                <FaGithub className="hover:text-purple-400 transition" />
              </a>
              <a href="https://www.linkedin.com/in/pavani-ranasinghe-98485524b/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="hover:text-purple-400 transition" />
              </a>
              <a href="mailto:pavaniranasinghe425@gmail.com">
                <FaEnvelope className="hover:text-purple-400 transition" />
              </a>
             
            </div>
          </div>
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
