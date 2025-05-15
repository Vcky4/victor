import React from 'react';
import { useInView } from '../hooks/useInView';
import { certifications } from '../data/skills';
import { Award, ExternalLink } from 'lucide-react';

const Certifications: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section id="certifications" className="bg-background-dark py-20">
      <div className="container-section" ref={ref}>
        <h2 className={`section-title transition-all duration-700 ${inView ? 'opacity-100' : 'opacity-0 -translate-y-8'}`}>
          Certifications
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={cert.title}
              className={`bg-background-light p-6 rounded-xl transition-all duration-500 transform hover:-translate-y-2 hover:shadow-lg hover:shadow-primary/10 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <Award className="text-primary mb-4" size={32} />
              <h3 className="text-lg font-semibold mb-2">{cert.title}</h3>
              <p className="text-text-secondary text-sm mb-2">{cert.issuer}</p>
              <p className="text-text-secondary text-sm mb-4">{cert.date}</p>
              {cert.link && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary-light flex items-center gap-1 text-sm"
                >
                  View Certificate
                  <ExternalLink size={14} />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;