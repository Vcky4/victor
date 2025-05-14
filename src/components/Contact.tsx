import React, { useState } from 'react';
import { useInView } from '../hooks/useInView';
import { Mail, Linkedin, Github, ExternalLink } from 'lucide-react';

const Contact: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch(`mailto:vicksoson@gmail.com?subject=Portfolio Contact: ${formData.name}&body=${formData.message}%0D%0A%0D%0AFrom: ${formData.email}`);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  return (
    <section id="contact" className="bg-background-dark py-20">
      <div className="container-section" ref={ref}>
        <h2 className={`section-title transition-all duration-700 ${inView ? 'opacity-100' : 'opacity-0 -translate-y-8'}`}>
          Get In Touch
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className={`transition-all duration-700 delay-100 ${inView ? 'opacity-100' : 'opacity-0 -translate-x-8'}`}>
            <p className="text-lg mb-8 text-text-secondary leading-relaxed">
              I'm always open to discussing new projects, opportunities, or collaborations. 
              Whether you have a question or just want to say hello, feel free to reach out!
            </p>
            
            <div className="flex items-center mb-6">
              <Mail className="text-primary mr-4" size={24} />
              <a href="mailto:vicksoson@gmail.com" className="text-text-secondary hover:text-primary transition-colors">
                vicksoson@gmail.com
              </a>
            </div>
            
            <div className="flex items-center mb-6">
              <Linkedin className="text-primary mr-4" size={24} />
              <a 
                href="https://linkedin.com/in/vicksoson" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-primary transition-colors flex items-center"
              >
                LinkedIn Profile
                <ExternalLink className="ml-1" size={16} />
              </a>
            </div>
            
            <div className="flex items-center mb-6">
              <Github className="text-primary mr-4" size={24} />
              <a 
                href="https://github.com/vcky4" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-primary transition-colors flex items-center"
              >
                GitHub Profile
                <ExternalLink className="ml-1" size={16} />
              </a>
            </div>
          </div>
          
          <div className={`transition-all duration-700 delay-200 ${inView ? 'opacity-100' : 'opacity-0 translate-x-8'}`}>
            {submitted ? (
              <div className="bg-background-light p-8 rounded-xl border-2 border-primary/30 animate-fade-in">
                <h3 className="text-xl font-semibold text-primary mb-3">Thank You!</h3>
                <p className="text-text-secondary">
                  Your message has been received. I'll get back to you as soon as possible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-background-light p-8 rounded-xl">
                <div className="mb-6">
                  <label htmlFor="name" className="block text-text-secondary mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-background-dark border border-gray-700 rounded-md px-4 py-3 text-text-primary focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="email" className="block text-text-secondary mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-background-dark border border-gray-700 rounded-md px-4 py-3 text-text-primary focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-text-secondary mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full bg-background-dark border border-gray-700 rounded-md px-4 py-3 text-text-primary focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`btn btn-primary w-full flex justify-center items-center ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;