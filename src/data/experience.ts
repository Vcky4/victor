export interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  responsibilities: string[];
  achievements?: string[];
}

export const experiences: Experience[] = [
  {
    id: 1,
    role: "Development Practice Lead",
    company: "Enbros Technologies",
    period: "January 2022 - Present",
    responsibilities: [
      "Lead and mentor a team of 12+ developers across multiple projects",
      "Architect and implement scalable solutions using React, React Native, and cloud services",
      "Drive the adoption of AI/ML technologies in development workflows",
      "Establish and maintain development best practices and coding standards",
      "Oversee the implementation of DevOps practices and CI/CD pipelines"
    ],
    achievements: [
      "Reduced deployment time by 60% through improved CI/CD practices",
      "Successfully delivered 15+ major projects with 100% client satisfaction",
      "Implemented AI-powered code review system, improving code quality by 40%",
      "Mentored 8 junior developers to senior positions"
    ]
  },
  {
    id: 2,
    role: "Senior Software Engineer",
    company: "Tech Solutions Inc.",
    period: "June 2019 - December 2021",
    responsibilities: [
      "Led development of cross-platform mobile applications using React Native",
      "Designed and implemented microservices architecture",
      "Integrated AI/ML models for enhanced user experience",
      "Collaborated with product teams to define technical specifications"
    ],
    achievements: [
      "Developed an AI-powered recommendation engine increasing user engagement by 45%",
      "Reduced app load time by 30% through performance optimizations",
      "Successfully migrated legacy systems to modern tech stack"
    ]
  },
  {
    id: 3,
    role: "Full Stack Developer",
    company: "Digital Innovations Ltd",
    period: "March 2017 - May 2019",
    responsibilities: [
      "Developed and maintained web applications using React and Node.js",
      "Implemented RESTful APIs and database solutions",
      "Collaborated with UX designers to implement responsive designs",
      "Participated in code reviews and technical planning"
    ],
    achievements: [
      "Built and deployed 5 major web applications",
      "Improved application performance by 50%",
      "Implemented automated testing reducing bugs by 35%"
    ]
  }
];