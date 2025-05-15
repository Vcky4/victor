import React, { useState } from 'react';
import { projects } from '../data/projects';
import { useInView } from '../hooks/useInView';
import { ExternalLink, Github } from 'lucide-react';

const Projects: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section id="projects" className="bg-background-dark py-5">
       {/* @ts-ignore */}
      <div className="container-section" ref={ref}>
        <h2 className={`section-title transition-all duration-700 ${inView ? 'opacity-100' : 'opacity-0 -translate-y-8'}`}>
          Featured Projects
        </h2>
        
        <p className="text-text-secondary max-w-3xl mb-12 transition-all duration-700 delay-100 transform text-lg leading-relaxed
          ${inView ? 'opacity-100' : 'opacity-0'}">
          Here are some of the projects I've worked on. Each one presented unique challenges and opportunities 
          to implement creative solutions and expand my technical expertise.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className={`bg-background-light rounded-xl overflow-hidden transition-all duration-700 delay-${(index + 1) * 100} 
                shadow-lg hover:shadow-primary/20 transform hover:-translate-y-2 ${inView ? 'opacity-100' : 'opacity-0'}`}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative h-60 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 
                    transform hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark to-transparent opacity-80"></div>
                <h3 className="absolute bottom-4 left-6 text-2xl font-bold text-white">{project.title}</h3>
              </div>
              
              <div className="p-6">
                <p className="text-text-secondary mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech} 
                      className="bg-background-dark px-3 py-1 text-sm rounded-full text-text-secondary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  {project.demoLink && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-primary hover:text-primary-light transition-colors"
                    >
                      <ExternalLink size={16} />
                      <span>Live Demo</span>
                    </a>
                  )}
                  
                  {project.codeLink && (
                    <a
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-primary hover:text-primary-light transition-colors"
                    >
                      <Github size={16} />
                      <span>Code</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;