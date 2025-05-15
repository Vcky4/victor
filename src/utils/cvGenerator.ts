import jsPDF from 'jspdf';
import { skills, certifications } from '../data/skills';
import { projects } from '../data/projects';

export const generateCV = async () => {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  let yPos = 20;
  const margin = 20;
  const contentWidth = pageWidth - (margin * 2);

  // Helper functions
  const addWrappedText = (text: string, x: number, y: number, maxWidth: number, lineHeight: number) => {
    const lines = doc.splitTextToSize(text, maxWidth);
    lines.forEach((line: string, i: number) => {
      doc.text(line, x, y + (i * lineHeight));
    });
    return lines.length * lineHeight;
  };

  const checkPageBreak = (requiredSpace: number) => {
    if (yPos + requiredSpace > doc.internal.pageSize.getHeight() - margin) {
      doc.addPage();
      yPos = margin;
    }
  };

  const addSection = (title: string, spacing: number = 15) => {
    checkPageBreak(spacing + 10);
    yPos += spacing;
    doc.setFontSize(16);
    doc.setTextColor(142, 68, 173); // Purple color
    doc.text(title, margin, yPos);
    doc.setTextColor(0, 0, 0);
    yPos += 6;
    // Add underline
    doc.setDrawColor(142, 68, 173);
    doc.line(margin, yPos, pageWidth - margin, yPos);
    yPos += 8;
  };

  // Personal Details
  doc.setFontSize(24);
  doc.setTextColor(142, 68, 173);
  doc.text('Victor Ubong Okon', margin, yPos);
  
  yPos += 10;
  doc.setFontSize(14);
  doc.setTextColor(100, 100, 100);
  doc.text('Development Practice Lead', margin, yPos);
  
  yPos += 8;
  doc.setFontSize(12);
  doc.text('Enbros Technologies', margin, yPos);
  
  yPos += 8;
  doc.text('Email: vicksoson@gmail.com', margin, yPos);
  yPos += 6;
  doc.text('LinkedIn: linkedin.com/in/vicksoson', margin, yPos);
  yPos += 6;
  doc.text('GitHub: github.com/vcky4', margin, yPos);

  // Professional Profile
  addSection('Professional Profile');
  doc.setFontSize(12);
  const profile = 'Highly accomplished Development Practice Lead with over 8 years of experience in full-stack development, specialising in React, React Native, and cloud technologies. Demonstrated expertise in leading development teams, architecting scalable solutions, and implementing DevOps practices. Proven track record of delivering innovative solutions while mentoring junior developers and maintaining high-quality standards.';
  yPos += addWrappedText(profile, margin, yPos, contentWidth, 6);

  // Key Skills
  addSection('Key Skills');
  doc.setFontSize(12);
  skills.forEach(category => {
    checkPageBreak(20);
    doc.setFontSize(13);
    doc.setTextColor(80, 80, 80);
    yPos += 8;
    doc.text(`${category.category}:`, margin, yPos);
    
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    const skillsList = category.items
      .map(skill => `${skill.name} (${skill.proficiency}/5)`)
      .join(', ');
    yPos += addWrappedText(skillsList, margin, yPos + 6, contentWidth, 6);
  });

  // Professional Experience
  addSection('Professional Experience');
  doc.setFontSize(13);
  doc.setTextColor(0, 0, 0);
  doc.text('Development Practice Lead - Enbros Technologies', margin, yPos);
  yPos += 6;
  doc.setFontSize(12);
  doc.setTextColor(100, 100, 100);
  doc.text('January 2022 - Present', margin, yPos);
  yPos += 8;
  doc.setTextColor(0, 0, 0);
  const responsibilities = [
    'Lead a team of 12+ developers across multiple projects and technologies',
    'Architect and implement scalable solutions using React, React Native, and cloud services',
    'Establish and maintain development best practices and coding standards',
    'Mentor junior developers and conduct regular code reviews',
    'Drive the adoption of DevOps practices and CI/CD pipelines'
  ];
  responsibilities.forEach(resp => {
    checkPageBreak(8);
    doc.text('•', margin, yPos);
    yPos += addWrappedText(resp, margin + 8, yPos, contentWidth - 8, 6);
    yPos += 2;
  });

  // Featured Projects
  addSection('Featured Projects');
  projects.forEach(project => {
    checkPageBreak(30);
    doc.setFontSize(13);
    doc.setTextColor(0, 0, 0);
    doc.text(project.title, margin, yPos);
    yPos += 6;
    
    doc.setFontSize(12);
    yPos += addWrappedText(project.description, margin, yPos, contentWidth, 6);
    yPos += 6;
    
    const techStack = `Technologies: ${project.technologies.join(', ')}`;
    yPos += addWrappedText(techStack, margin, yPos, contentWidth, 6);
    yPos += 8;
  });

  // Professional Certifications
  addSection('Professional Certifications');
  certifications.forEach(cert => {
    checkPageBreak(15);
    doc.setFontSize(12);
    doc.text(`${cert.title}`, margin, yPos);
    yPos += 6;
    doc.setTextColor(100, 100, 100);
    doc.text(`${cert.issuer} - ${cert.date}`, margin, yPos);
    doc.setTextColor(0, 0, 0);
    yPos += 8;
  });

  // Education
  addSection('Education');
  doc.setFontSize(13);
  doc.text('Bachelor of Science in Computer Science', margin, yPos);
  yPos += 6;
  doc.setFontSize(12);
  doc.setTextColor(100, 100, 100);
  doc.text('University Name, 2015-2019', margin, yPos);
  doc.setTextColor(0, 0, 0);

  // Save the PDF
  doc.save('Victor_Ubong_Okon_CV.pdf');
};