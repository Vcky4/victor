export interface SkillCategory {
  category: string;
  items: Skill[];
}

export interface Skill {
  name: string;
  icon?: string;
  proficiency: number;
}

export const skills: SkillCategory[] = [
  {
    category: "Programming Languages",
    items: [
      { name: "JavaScript", proficiency: 5 },
      { name: "TypeScript", proficiency: 4 },
      { name: "Python", proficiency: 4 },
      { name: "Kotlin", proficiency: 5 },
      { name: "Swift", proficiency: 3 },
      { name: "Java", proficiency: 4 },
    ]
  },
  {
    category: "Frontend",
    items: [
      { name: "React", proficiency: 5 },
      { name: "React Native", proficiency: 5 },
      { name: "HTML/CSS", proficiency: 5 },
      { name: "Redux", proficiency: 4 },
      { name: "Next.js", proficiency: 4 },
      { name: "Vue.js", proficiency: 3 },
    ]
  },
  {
    category: "Mobile",
    items: [
      { name: "Expo", proficiency: 5 },
      { name: "React Navigation", proficiency: 5 },
      { name: "Native APIs", proficiency: 4 },
      { name: "Android SDK", proficiency: 4 },
      { name: "iOS Development", proficiency: 3 },
    ]
  },
  {
    category: "AI Engineering",
    items: [
      { name: "AI System Architecture", proficiency: 4 },
      { name: "ML Model Deployment", proficiency: 4 },
      { name: "AI API Integration", proficiency: 5 },
      { name: "MLOps", proficiency: 4 },
      { name: "AI Solution Design", proficiency: 4 },
    ]
  },
  {
    category: "Backend Development",
    items: [
      { name: "Node.js", proficiency: 4 },
      { name: "Express.js", proficiency: 4 },
      { name: "PostgreSQL", proficiency: 4 },
      { name: "MongoDB", proficiency: 3 },
      { name: "GraphQL", proficiency: 4 },
      { name: "REST APIs", proficiency: 5 },
    ]
  },
  {
    category: "DevOps & Cloud",
    items: [
      { name: "Docker", proficiency: 4 },
      { name: "Kubernetes", proficiency: 3 },
      { name: "AWS", proficiency: 4 },
      { name: "CI/CD", proficiency: 4 },
      { name: "Terraform", proficiency: 3 },
      { name: "Monitoring", proficiency: 4 },
    ]
  },
  {
    category: "Design",
    items: [
      { name: "Figma", proficiency: 4 },
      { name: "Adobe XD", proficiency: 3 },
      { name: "UI/UX", proficiency: 4 },
      { name: "Responsive Design", proficiency: 5 },
    ]
  }
];

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  link?: string;
}

export const certifications: Certification[] = [
  {
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2023",
    link: "#"
  },
  {
    title: "Google Cloud Professional Developer",
    issuer: "Google Cloud",
    date: "2023",
    link: "#"
  },
  {
    title: "Certified Kubernetes Administrator",
    issuer: "Cloud Native Computing Foundation",
    date: "2022",
    link: "#"
  },
  {
    title: "Meta React Native Specialist",
    issuer: "Meta",
    date: "2022",
    link: "#"
  }
];