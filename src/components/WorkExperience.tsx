import React from 'react';
import { useInView } from '../hooks/useInView';
import { Briefcase, Calendar } from 'lucide-react';
import { experiences } from '../data/experience';

const WorkExperience: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section id="experience" className="bg-background-light py-20">
      <div className="container-section" ref={ref}>
        <h2 className={`section-title transition-all duration-700 ${inView ? 'opacity-100' : 'opacity-0 -translate-y-8'}`}>
          Work Experience
        </h2>

        <div className="space-y-12">
          {experiences.map((experience, index) => (
            <div
              key={experience.id}
              className={`relative pl-8 transition-all duration-700 ${
                inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Timeline line */}
              <div className="absolute left-0 top-0 h-full w-px bg-primary/30"></div>
              
              {/* Timeline dot */}
              <div className="absolute left-[-8px] top-2 w-4 h-4 rounded-full bg-primary"></div>

              <div className="bg-background-dark p-6 rounded-xl">
                <div className="flex items-center gap-4 mb-4">
                  <Briefcase className="text-primary" size={24} />
                  <div>
                    <h3 className="text-xl font-semibold">{experience.role}</h3>
                    <p className="text-text-secondary">{experience.company}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-text-secondary mb-4">
                  <Calendar size={16} />
                  <span>{experience.period}</span>
                </div>

                <ul className="space-y-3">
                  {experience.responsibilities.map((responsibility, i) => (
                    <li key={i} className="text-text-secondary flex gap-2">
                      <span className="text-primary">•</span>
                      {responsibility}
                    </li>
                  ))}
                </ul>

                {experience.achievements && (
                  <div className="mt-4">
                    <h4 className="text-lg font-semibold mb-2 text-primary">Key Achievements</h4>
                    <ul className="space-y-2">
                      {experience.achievements.map((achievement, i) => (
                        <li key={i} className="text-text-secondary flex gap-2">
                          <span className="text-primary">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;