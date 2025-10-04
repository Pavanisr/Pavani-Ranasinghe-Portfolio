import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects3D from './components/Projects3D';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';


export default function App(){
return (
<div className="min-h-screen text-white antialiased">
<Navbar />
<main>
<Hero />
<About />
<Education />
<Skills />
<Projects3D />
<Services />
<Contact />
</main>
<Footer />
</div>
)
}