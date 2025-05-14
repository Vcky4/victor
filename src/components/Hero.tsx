import React, { useEffect, useState } from 'react';
import { Github, Linkedin, ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-background-dark via-background-dark to-background-light"></div>
        <div 
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full filter blur-3xl transition-transform duration-300"
          style={{ 
            transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`,
          }}
        ></div>
        <div 
          className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl transition-transform duration-300"
          style={{ 
            transform: `translate(${mousePosition.x * -30}px, ${mousePosition.y * -30}px)`,
          }}
        ></div>
      </div>
      
      <div className="container-section relative z-10">
        <div className={`transition-all duration-1000 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          <p className="text-lg md:text-xl text-primary font-medium mb-2">Hello, I'm</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight hover:text-primary transition-colors duration-300">
            Victor Ubong Okon
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-text-secondary font-light mb-8">
            Development Practice Lead @ Enbros Technologies
          </h2>
          <p className="text-lg max-w-2xl mb-10 text-text-secondary">
            Creating exceptional digital experiences through clean code, innovative designs, and cutting-edge technologies.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a 
              href="#contact" 
              className="btn btn-primary transform hover:scale-105 transition-all duration-300"
            >
              Get in Touch
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-outline transform hover:scale-105 transition-all duration-300"
            >
              <Linkedin className="inline-block mr-2" size={18} />
              LinkedIn
            </a>
          </div>

          <div className="flex mt-12 gap-6">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-text-secondary hover:text-primary transition-colors transform hover:scale-110 duration-300"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-text-secondary hover:text-primary transition-colors transform hover:scale-110 duration-300"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </div>
      
      <a 
        href="#about" 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-text-secondary hover:text-primary transition-colors"
      >
        <ArrowDown size={32} />
      </a>
    </section>
  );
};

export default Hero;