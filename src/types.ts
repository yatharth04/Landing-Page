export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface Project {
  title: string;
  period: string;
  description: string[];
  technologies: string[];
  link?: string;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  gpa: string;
}

export interface Testimonial {
  name: string;
  title: string;
  company: string;
  content: string;
}

export interface Skill {
  name: string;
  description: string;
}

export interface ResumeData {
  name: string;
  title: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  education: Education[];
  experience: Experience[];
  projects: Project[];
  testimonials: Testimonial[];
  skills: {
    languages: Skill[];
    frameworks: Skill[];
    tools: Skill[];
    financial: Skill[];
  };
  resumeUrl: string;
  publications: {
    title: string;
    conference: string;
    link: string;
  }[];
  certifications: string[];
}
