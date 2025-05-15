import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-background-light pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-800 pb-8 mb-8">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-2xl font-bold">
              <span className="text-primary">V</span>ictor
            </a>
            <p className="mt-2 text-text-secondary max-w-md">
              Development Practice Lead specializing in frontend and mobile engineering, creating exceptional digital experiences.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-12">
            <a href="#about" className="text-text-secondary hover:text-primary transition-colors">About</a>
            <a href="#projects" className="text-text-secondary hover:text-primary transition-colors">Projects</a>
            <a href="#skills" className="text-text-secondary hover:text-primary transition-colors">Skills</a>
            <a href="#contact" className="text-text-secondary hover:text-primary transition-colors">Contact</a>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <p className="text-text-secondary text-sm mb-4 sm:mb-0">
            &copy; {currentYear} Victor Ubong Okon. All rights reserved.
          </p>
          
          <div className="flex gap-6">
            <a href="mailto:vicksoson@gmail.com" className="text-text-secondary hover:text-primary transition-colors">
              <Mail size={20} />
            </a>
            <a href="https://github.com/vcky4" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-primary transition-colors">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com/in/vicksoson" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-primary transition-colors">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;