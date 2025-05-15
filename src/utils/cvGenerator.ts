import jsPDF from 'jspdf';

export const generateCV = async () => {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 20;
  let y = margin;

  const addTextBlock = (text: string, fontSize = 11, lineHeight = 6, color = [0, 0, 0]) => {
    doc.setFontSize(fontSize);
    //@ts-ignore
    doc.setTextColor(...color);
    const lines = doc.splitTextToSize(text, pageWidth - margin * 2);
    lines.forEach((line: any) => {
      if (y > pageHeight - margin) {
        doc.addPage();
        y = margin;
      }
      doc.text(line, margin, y);
      y += lineHeight;
    });
  };

  const addSectionHeader = (title: string) => {
    y += 8;
    doc.setFontSize(13);
    doc.setTextColor(142, 68, 173); // Purple
    doc.text(title, margin, y);
    y += 4;
    doc.setDrawColor(142, 68, 173);
    doc.line(margin, y, pageWidth - margin, y);
    y += 6;
    doc.setTextColor(0, 0, 0);
  };

  // Header
  doc.setFontSize(22);
  doc.setTextColor(0, 0, 0);
  doc.text('Victor Okon', margin, y);
  y += 8;
  doc.setFontSize(11);
  doc.setTextColor(80, 80, 80);
  doc.text('Uyo, Akwa Ibom, Nigeria', margin, y);
  y += 6;
  doc.text('+234 704 622 4471', margin, y);
  y += 6;
  doc.text('okon.victor.u@gmail.com', margin, y);
  y += 8;

  // Professional Summary
  addSectionHeader('Professional Summary');
  addTextBlock(
    `Strategic and delivery-focused Senior Engineering Manager with over 5 years of experience building and scaling engineering teams across mobile and back-end platforms. Adept at leading managers and senior engineers, shaping technical direction, and fostering a culture of engineering excellence. Proven success in managing high-impact squads in cross-functional, mission-driven environments. Skilled in stakeholder engagement, delivery management, and mentoring engineering leaders to build resilient, innovative teams that deliver business value at scale.`
  );

  // Work History
  addSectionHeader('Work History');

  const jobs = [
    {
      role: 'Development Practice Lead',
      company: 'Enbros Technologies, Uyo, Nigeria - Onsite',
      date: '11/2024 to Current',
      bullets: [
        'Led a cross-functional organisation of 20+ engineers and managers across mobile, backend, and no-code/low-code platforms.',
        'Directly manage Tech Leads, Senior Engineers, and Engineering Managers, coaching them on technical growth, delivery ownership, and leadership.',
        'Partner with stakeholders to structure new squads in alignment with business priorities, building delivery capacity while maintaining operational efficiency.',
        'Act as a principal advisor on architecture and tooling, aligning solutions with both immediate and long-term product goals'
      ]
    },
    {
      role: 'Founder & CEO / Engineering Lead',
      company: 'Cakkie Foods Ltd',
      date: '03/2022 – 01/2025',
      bullets: [
        'Founded and scaled Cakkie into a 40+ person organisation, overseeing all departments including Engineering, Product, Marketing, and Community.',
        'Held sustained responsibility as a manager-of-managers, directly leading multiple senior leaders (EMs, PMs, Designers, Marketers).',
        'Built the company’s organisational structure, squad systems, and leadership development processes from scratch.',
        'Mentored engineering talent and team leads, contributing to a 50% increase in team productivity.'
      ]
    },
    {
      role: 'Fullstack Software Developer',
      company: 'Ukemy INC, Canada - Remote',
      date: '09/2023 - 01/2024',
      bullets: [
        'Spearheaded infrastructure improvements using Docker and Kubernetes.',
        'Reduced production incidents and downtime by enforcing preventive maintenance protocols.'
      ]
    },
    {
      role: 'Android Developer',
      company: 'Azabox Finance, Uyo, Nigeria',
      date: '03/2021 - 06/2023',
      bullets: [
        'Delivered core mobile experiences that improved retention by 20%.',
        'Designed immersive user flows and integrated offline functionality.'
      ]
    },
    {
      role: 'Android Developer Intern',
      company: 'Zuri Chat, Lagos, Nigeria',
      date: '09/2020 - 02/2021',
      bullets: [
        'Conducted pre-release testing and fixed 150+ issues, ensuring smooth deployments.'
      ]
    }
  ];

  jobs.forEach(job => {
    addTextBlock(`${job.role}, ${job.date}`, 12, 6);
    addTextBlock(`${job.company}`, 11, 6, [100, 100, 100]);

    job.bullets.forEach(bullet => addTextBlock(`• ${bullet}`));
    y += 5;
  });

  // Education
  addSectionHeader('Education');
  addTextBlock(`Bachelor's Degree, Engineering, 05/2018 - 09/2024`);
  addTextBlock(`University of Uyo - Nigeria, Nigeria - Second Class Honours (Upper) Division`);

  // Certifications
  addSectionHeader('Certifications and Licenses');
  addTextBlock(`• Fullstack software engineer, ALX, Nairobi, Kenya - 2023`);
  addTextBlock(`• Agile Project Management (Scrum and Kanban) - In-view`);

  // References
  addSectionHeader('References');
  addTextBlock(`References available upon request.`);


  // Skills
  addSectionHeader('Skills');
  addTextBlock('Core Skills:', 13);
  addTextBlock(`Engineering Leadership, People Management, Squad Structuring, Agile Delivery, Cross-functional Team Coordination, Stakeholder Engagement, Problem Solving, Strategic Planning, Adaptability`);

  y += 4;
  addTextBlock('Project Management & Organisational Skills:', 13);
  addTextBlock(`Project Coordination, Risk/Issue/Change Management, Project Documentation, Attention to Detail, Communication, Collaboration, MS Office, Microsoft Project, Oral communication, problem-solving, analytical mindset and adaptability`);

  y += 4;
  addTextBlock('Tools & Technologies', 13);
  addTextBlock(`Languages & Frameworks: React Native, Flutter, Kotlin, Swift, JavaScript, TypeScript, Vue.js, Next.js, Express, NestJS, Solidity, Java`);
  addTextBlock(`Tools & Platforms: Docker, Kubernetes, Firebase, Android Studio, CI/CD, REST APIs, Jira, Confluence, Microsoft Project, Microsoft Office Suite, Microsoft Visio, Vs code`);
  addTextBlock(`Design & Documentation: BPMN, UML`);

  // Projects
  // addSectionHeader('Projects');
  // addTextBlock(`• Palkeeper - App | Site`);
  // addTextBlock(`• Cakkie - Cakkie Platform | Landing Page | Web App`);
  // addTextBlock(`• Azabox - Azabox App`);
  // addTextBlock(`• Zuri - Zuri Chat`);

  // Save
  doc.save('Victor_Okon_Senior_Engineering_Manager.pdf');
};
