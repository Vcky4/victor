import React, { useState } from 'react';
import { FileDown, Loader2 } from 'lucide-react';

const CVGenerator: React.FC = () => {
  const [jobDescription, setJobDescription] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [recommendations, setRecommendations] = useState<string[]>([]);

  const handleGenerate = async () => {
    if (!jobDescription.trim()) return;
    
    setIsGenerating(true);
    try {
      const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/generate-cv`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify({ jobDescription }),
      });

      const data = await response.json();
      setRecommendations(data.recommendations);
      
      // Generate and download the CV
      await generateCV(data.cvData);
    } catch (error) {
      console.error('Error generating CV:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <section id="cv-generator" className="bg-background-light py-5">
      <div className="container-section">
        <h2 className="section-title">AI CV Generator</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-lg mb-6 text-text-secondary leading-relaxed">
              Paste a job description below to generate a tailored CV and receive personalized recommendations
              for the position.
            </p>
            
            <div className="space-y-6">
              <div>
                <label htmlFor="jobDescription" className="block text-text-secondary mb-2">
                  Job Description
                </label>
                <textarea
                  id="jobDescription"
                  value={jobDescription}
                  onChange={(e) => setJobDescription(e.target.value)}
                  className="w-full h-64 bg-background-dark border border-gray-700 rounded-md px-4 py-3 
                    text-text-primary focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                  placeholder="Paste the job description here..."
                />
              </div>
              
              <button
                onClick={handleGenerate}
                disabled={isGenerating || !jobDescription.trim()}
                className={`btn btn-primary w-full flex justify-center items-center gap-2
                  ${isGenerating ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isGenerating ? (
                  <>
                    <Loader2 className="animate-spin" size={18} />
                    Generating...
                  </>
                ) : (
                  <>
                    <FileDown size={18} />
                    Generate CV
                  </>
                )}
              </button>
            </div>
          </div>
          
          <div className="bg-background-dark p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-4 text-primary">Recommendations</h3>
            {recommendations.length > 0 ? (
              <ul className="space-y-4">
                {recommendations.map((rec, index) => (
                  <li key={index} className="flex gap-2 text-text-secondary">
                    <span className="text-primary">•</span>
                    {rec}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-text-secondary">
                Generate a CV to receive personalized recommendations for the position.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CVGenerator;