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
    period: "November 2024 - Present",
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
    company: "Cakkie Foods Ltd.",
    period: "June 2022 - January 2025",
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
    company: "Ukemy INC",
    period: "March 2021 - May 2022",
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
  },

  {
    id: 5,
    role: "Android Developer",
    company: "Azabox Finance",
    period: "March 2020 - June 2021",
    responsibilities: [
      "Developed and maintained Android applications",
      "Collaborated with cross-functional teams to define, design, and ship new features",
      "Ensured performance, quality, and responsiveness of applications"
    ],
    achievements: [
      "Increased app downloads by 200% through effective marketing strategies",
      "Implemented offline functionality improving user experience in low connectivity areas"
    ]
  },

  {
    id: 4,
    role: "Android Developer Intern",
    company: "Zuri Chat",
    period: "September 2018 - February 2019",
    responsibilities: [
      "Assisted in the development of mobile applications",
      "Conducted testing and debugging of applications",
      "Collaborated with senior developers on various projects"
    ],
    achievements: [
      "Contributed to the successful launch of a new feature in the Zuri Chat app",
      "Gained hands-on experience in mobile app development",
      "Learned best practices in software development and team collaboration"
    ]
  },


];