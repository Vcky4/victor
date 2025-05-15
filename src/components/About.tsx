import React, { useEffect } from 'react';
import { useInView } from '../hooks/useInView';
import { Code, Smartphone, Layers, Users, Server, Cloud, Database } from 'lucide-react';

const About: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section id="about" className="bg-background-light py-5">
      {/* @ts-ignore */}
      <div className="container-section" ref={ref}>
        <h2 className={`section-title transition-all duration-700 ${inView ? 'opacity-100' : 'opacity-0 -translate-y-8'}`}>
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-700 delay-100 ${inView ? 'opacity-100' : 'opacity-0 -translate-x-8'}`}>
            <p className="text-lg mb-6 text-text-secondary leading-relaxed">
              I'm a passionate full-stack engineer with over 8 years of experience crafting beautiful,
              functional user interfaces and robust backend systems. Currently serving as the Development Practice Lead
              at Enbros Technologies, I lead a team of engineers in building innovative solutions for our clients.
            </p>
            <p className="text-lg mb-6 text-text-secondary leading-relaxed">
              My expertise spans across React, React Native, Node.js, and cloud technologies. I specialize in
              architecting scalable applications, implementing DevOps practices, and ensuring high-performance
              delivery through modern CI/CD pipelines. I'm dedicated to creating seamless experiences that merge
              cutting-edge technology with intuitive design.
            </p>
            <p className="text-lg text-text-secondary leading-relaxed">
              Outside of work, I contribute to open-source projects, mentor junior developers, and write technical
              articles sharing my knowledge with the broader development community.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 transition-all duration-700 delay-200 ${inView ? 'opacity-100' : 'opacity-0 translate-x-8'}">
            <div className="bg-background-dark p-6 rounded-xl hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group">
              <Code className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300" size={36} />
              <h3 className="text-xl font-semibold mb-2">Frontend Development</h3>
              <p className="text-text-secondary">Building responsive, performant interfaces with modern frameworks and best practices.</p>
            </div>

            <div className="bg-background-dark p-6 rounded-xl hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group">
              <Smartphone className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300" size={36} />
              <h3 className="text-xl font-semibold mb-2">Mobile Development</h3>
              <p className="text-text-secondary">Creating native-like experiences using React Native and native languages when needed.</p>
            </div>

            <div className="bg-background-dark p-6 rounded-xl hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group">
              <Server className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300" size={36} />
              <h3 className="text-xl font-semibold mb-2">Backend Development</h3>
              <p className="text-text-secondary">Building scalable APIs and microservices with Node.js, Express, and modern databases.</p>
            </div>

            <div className="bg-background-dark p-6 rounded-xl hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group">
              <Cloud className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300" size={36} />
              <h3 className="text-xl font-semibold mb-2">DevOps & Cloud</h3>
              <p className="text-text-secondary">Implementing CI/CD pipelines, container orchestration, and cloud infrastructure.</p>
            </div>

            <div className="bg-background-dark p-6 rounded-xl hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group">
              <Database className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300" size={36} />
              <h3 className="text-xl font-semibold mb-2">Database Architecture</h3>
              <p className="text-text-secondary">Designing and optimizing database schemas for scalable applications.</p>
            </div>

            <div className="bg-background-dark p-6 rounded-xl hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group">
              <Users className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300" size={36} />
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