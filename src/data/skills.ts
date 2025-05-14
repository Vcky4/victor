export interface SkillCategory {
  category: string;
  items: Skill[];
}

export interface Skill {
  name: string;
  icon?: string;
  proficiency: number; // 1-5
}

export const skills: SkillCategory[] = [
  {
    category: "Frontend",
    items: [
      { name: "React", proficiency: 5 },
      { name: "React Native", proficiency: 5 },
      { name: "TypeScript", proficiency: 4 },
      { name: "JavaScript", proficiency: 5 },
      { name: "HTML/CSS", proficiency: 5 },
      { name: "Redux", proficiency: 4 },
    ]
  },
  {
    category: "Mobile",
    items: [
      { name: "Expo", proficiency: 5 },
      { name: "Kotlin", proficiency: 3 },
      { name: "Swift", proficiency: 3 },
      { name: "React Navigation", proficiency: 5 },
      { name: "Native APIs", proficiency: 4 },
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