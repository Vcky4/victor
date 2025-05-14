import React, { useEffect } from 'react';
import { useInView } from '../hooks/useInView';
import { Code, Smartphone, Layers, Users } from 'lucide-react';

const About: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section id="about" className="bg-background-light py-20">
      <div className="container-section" ref={ref}>
        <h2 className={`section-title transition-all duration-700 ${inView ? 'opacity-100' : 'opacity-0 -translate-y-8'}`}>
          About Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-700 delay-100 ${inView ? 'opacity-100' : 'opacity-0 -translate-x-8'}`}>
            <p className="text-lg mb-6 text-text-secondary leading-relaxed">
              I'm a passionate frontend and mobile engineer with over 8 years of experience crafting beautiful, 
              functional user interfaces. Currently serving as the Development Practice Lead at Enbros Technologies, 
              I lead a team of engineers in building innovative solutions for our clients.
            </p>
            <p className="text-lg mb-6 text-text-secondary leading-relaxed">
              My expertise spans across React, React Native, and mobile development ecosystems. I'm dedicated to creating 
              seamless experiences that merge cutting-edge technology with intuitive design. I believe in writing clean, 
              maintainable code and implementing best practices that scale.
            </p>
            <p className="text-lg text-text-secondary leading-relaxed">
              Outside of work, I contribute to open-source projects, mentor junior developers, and write technical 
              articles sharing my knowledge with the broader development community.
            </p>
          </div>
          
          <div className={`grid sm:grid-cols-2 gap-6 transition-all duration-700 delay-200 ${inView ? 'opacity-100' : 'opacity-0 translate-x-8'}`}>
            <div className="bg-background-dark p-6 rounded-xl hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 transform hover:-translate-y-1">
              <Code className="text-primary mb-4" size={36} />
              <h3 className="text-xl font-semibold mb-2">Frontend Development</h3>
              <p className="text-text-secondary">Building responsive, performant interfaces with modern frameworks and best practices.</p>
            </div>
            
            <div className="bg-background-dark p-6 rounded-xl hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 transform hover:-translate-y-1">
              <Smartphone className="text-primary mb-4" size={36} />
              <h3 className="text-xl font-semibold mb-2">Mobile Development</h3>
              <p className="text-text-secondary">Creating native-like experiences using React Native and native languages when needed.</p>
            </div>
            
            <div className="bg-background-dark p-6 rounded-xl hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 transform hover:-translate-y-1">
              <Layers className="text-primary mb-4" size={36} />
              <h3 className="text-xl font-semibold mb-2">UI/UX Design</h3>
              <p className="text-text-secondary">Designing intuitive user experiences with attention to detail and usability.</p>
            </div>
            
            <div className="bg-background-dark p-6 rounded-xl hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 transform hover:-translate-y-1">
              <Users className="text-primary mb-4" size={36} />
              <h3 className="text-xl font-semibold mb-2">Team Leadership</h3>
              <p className="text-text-secondary">Mentoring developers and leading teams to deliver high-quality products.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;