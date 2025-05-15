import jsPDF from 'jspdf';
import { skills, certifications } from '../data/skills';
import { projects } from '../data/projects';

export const generateCV = async () => {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  let yPos = 20;

  // Helper function for text wrapping
  const addWrappedText = (text: string, x: number, y: number, maxWidth: number, lineHeight: number) => {
    const lines = doc.splitTextToSize(text, maxWidth);
    lines.forEach((line: string, i: number) => {
      doc.text(line, x, y + (i * lineHeight));
    });
    return lines.length * lineHeight;
  };

  // Header
  doc.setFontSize(24);
  doc.setTextColor(142, 68, 173); // Purple color
  doc.text('Victor Ubong Okon', 20, yPos);
  
  yPos += 10;
  doc.setFontSize(14);
  doc.setTextColor(100, 100, 100);
  doc.text('Development Practice Lead @ Enbros Technologies', 20, yPos);
  
  yPos += 10;
  doc.setFontSize(12);
  doc.text('vicksoson@gmail.com | linkedin.com/in/vicksoson | github.com/vcky4', 20, yPos);

  // Professional Summary
  yPos += 20;
  doc.setFontSize(16);
  doc.setTextColor(0, 0, 0);
  doc.text('Professional Summary', 20, yPos);
  
  yPos += 10;
  doc.setFontSize(12);
  const summary = 'Full-stack engineer with over 8 years of experience specializing in React, React Native, and cloud technologies. Currently leading development teams at Enbros Technologies, focusing on delivering innovative solutions and mentoring junior developers.';
  yPos += addWrappedText(summary, 20, yPos, pageWidth - 40, 6);

  // Skills
  yPos += 15;
  doc.setFontSize(16);
  doc.text('Technical Skills', 20, yPos);
  
  yPos += 10;
  doc.setFontSize(12);
  skills.forEach(category => {
    doc.setFontSize(14);
    yPos += 8;
    doc.text(`${category.category}:`, 20, yPos);
    
    doc.setFontSize(12);
    const skillsList = category.items.map(skill => skill.name).join(', ');
    yPos += addWrappedText(skillsList, 20, yPos + 6, pageWidth - 40, 6);
  });

  // Certifications
  yPos += 15;
  doc.setFontSize(16);
  doc.text('Certifications', 20, yPos);
  
  yPos += 10;
  doc.setFontSize(12);
  certifications.forEach(cert => {
    yPos += 8;
    doc.text(`${cert.title} - ${cert.issuer} (${cert.date})`, 20, yPos);
  });

  // Featured Projects
  if (yPos > doc.internal.pageSize.getHeight() - 40) {
    doc.addPage();
    yPos = 20;
  }

  yPos += 15;
  doc.setFontSize(16);
  doc.text('Featured Projects', 20, yPos);
  
  yPos += 10;
  doc.setFontSize(12);
  projects.slice(0, 3).forEach(project => {
    yPos += 8;
    doc.setFontSize(14);
    doc.text(project.title, 20, yPos);
    
    yPos += 6;
    doc.setFontSize(12);
    yPos += addWrappedText(project.description, 20, yPos, pageWidth - 40, 6);
    
    yPos += 6;
    doc.setFontSize(12);
    doc.text(`Technologies: ${project.technologies.join(', ')}`, 20, yPos);
    yPos += 6;
  });

  // Save the PDF
  doc.save('Victor_Ubong_Okon_CV.pdf');
};