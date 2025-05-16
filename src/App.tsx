import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import WorkExperience from './components/WorkExperience';
import CVGenerator from './components/CVGenerator';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background-dark text-text-primary font-sans">
      <Navbar />
      <main>
        <Hero />
        <About />
        <WorkExperience />
        <Projects />
        <Skills />
        <Certifications />
        <CVGenerator />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App