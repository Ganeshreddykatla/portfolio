export type ProjectCategory =
  | 'all'
  | 'nutrition'
  | 'hyperlocal'
  | 'fintech'
  | 'ai-platform'
  | 'ai'
  | 'product'
  | 'platform'
  | 'enterprise';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  organization: string;
  period: string;
  category: ProjectCategory;
  featured?: boolean;
  summary: string;
  highlights: string[];
  metrics?: { label: string; value: string }[];
  tags: string[];
  architectureNotes?: string;
  keyInnovations?: string[];
  links?: { label: string; url: string; external?: boolean }[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  duration?: string;
  type: string;
  description: string;
  responsibilities: string[];
  achievements: string[];
  skills: string[];
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level: 'Core' | 'Advanced' | 'Proficient';
    highlight?: boolean;
  }[];
}

export interface ContactInfo {
  name: string;
  role: string;
  company: string;
  primaryEmail: string;
  personalEmail?: string;
  phone: string;
  location: string;
  github?: string;
  linkedin?: string;
  availableForWork: boolean;
  statusMessage: string;
}
