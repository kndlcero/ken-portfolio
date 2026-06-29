export interface Project {
  slug: string;
  title: string;
  role: string;
  stack: string[];
  description: string[];
  overview: string;
  contributions: string[];
  gallery: ProjectImage[];
  facts: ProjectFact[];
  github?: string;
  featured?: boolean;
  tag?: string;
  image?: string;
}

export interface ProjectImage {
  src: string;
  alt: string;
  caption: string;
}

export interface ProjectFact {
  label: string;
  value: string;
}

export interface SkillGroup {
  category: string;
  icon: string;
  skills: string[];
}

export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  email: string;
  phone: string;
  location: string;
  github: string;
  linkedin: string;
  summary: string;
}

export interface Publication {
  title: string;
  role: string;
  event: string;
  date: string;
  description: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  url?: string;
}
