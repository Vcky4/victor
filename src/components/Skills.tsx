import React from 'react';
import { skills } from '../data/skills';
import { useInView } from '../hooks/useInView';

const Skills: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });

  const renderProficiencyBar = (proficiency: number) => {
    const bars = [];
    for (let i = 1; i <= 5; i++) {
      bars.push(
        <div 
          key={i}
          className={`h-2 w-full ${i <= proficiency ? 'bg-primary' : 'bg-gray-600'} 
            rounded transition-all duration-500 ${inView ? 'opacity-100' : 'opacity-0'}`}
          style={{ transitionDelay: `${i * 100}ms` }}
        ></div>
      );
    }
    return (
      <div className="grid grid-cols-5 gap-1 w-full">
        {bars}
      </div>
    );
  };

  return (
    <section id="skills" className="bg-background-light py-5">
      <div className="container-section" ref={ref}>
        <h2 className={`section-title transition-all duration-700 ${inView ? 'opacity-100' : 'opacity-0 -translate-y-8'}`}>
          Skills & Expertise
        </h2>
        
        <p className="text-text-secondary max-w-3xl mb-12 text-lg leading-relaxed transition-all duration-700 delay-100">
          My technical toolkit spans the entire development lifecycle, from frontend and mobile development 
          to backend systems and DevOps practices. This full-stack expertise enables me to architect and 
          deliver comprehensive solutions.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {skills.map((category, categoryIndex) => (
            <div 
              key={category.category}
              className={`transition-all duration-700 transform ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${categoryIndex * 100}ms` }}
            >
              <h3 className="text-xl font-semibold mb-6 text-primary">{category.category}</h3>
              
              <div className="space-y-6">
                {category.items.map((skill, skillIndex) => (
                  <div 
                    key={skill.name}
                    className="relative transition-all duration-500"
                    style={{ transitionDelay: `${(categoryIndex + skillIndex) * 50}ms` }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-text-secondary text-sm">{skill.proficiency}/5</span>
                    </div>
                    {renderProficiencyBar(skill.proficiency)}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;