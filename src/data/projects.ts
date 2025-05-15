export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoLink?: string;
  codeLink?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Cakkie",
    description: "A mobile application for cake ordering and delivery with real-time tracking, customization options, and secure payment processing.",
    image: "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["React Native", "Expo", "Firebase", "Stripe", "Redux"],
    demoLink: "#",
    codeLink: "#"
  },
  {
    id: 2,
    title: "ProTraveller",
    description: "Travel companion app for professional travelers with itinerary management, expense tracking, and local recommendations.",
    image: "https://images.pexels.com/photos/3769138/pexels-photo-3769138.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["React Native", "TypeScript", "GraphQL", "Apollo", "AWS Amplify"],
    demoLink: "#",
    codeLink: "#"
  },
  {
    id: 3,
    title: "Palkeeper",
    description: "A comprehensive password management solution with end-to-end encryption, secure sharing, and cross-platform synchronization.",
    image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["React", "Node.js", "PostgreSQL", "WebCrypto API", "Docker"],
    demoLink: "#",
    codeLink: "#"
  },
  {
    id: 4,
    title: "Polly Glot",
    description: "AI-powered language learning platform with real-time translation, pronunciation feedback, and personalized lesson plans.",
    image: "https://images.pexels.com/photos/267669/pexels-photo-267669.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["React Native", "Python", "TensorFlow", "OpenAI API", "MongoDB"],
    demoLink: "#",
    codeLink: "#"
  },
  {
    id: 5,
    title: "TwikkL",
    description: "Social media dashboard for content creators with analytics, scheduling, and engagement tracking across multiple platforms.",
    image: "https://images.pexels.com/photos/3184356/pexels-photo-3184356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Chart.js"],
    demoLink: "#",
    codeLink: "#"
  },
  {
    id: 6,
    title: "HealthTrack",
    description: "Health monitoring application with fitness tracking, meal planning, and integration with various health wearables.",
    image: "https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["React Native", "Kotlin", "HealthKit", "Google Fit API", "Firebase"],
    demoLink: "#",
    codeLink: "#"
  }
];