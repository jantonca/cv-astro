export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  phone?: string;
  location?: string;
  website?: string;
  portfolio?: string;
  github?: string;
  linkedin?: string;
  workRights?: string;
}

export interface Project {
  name: string;
  role: string;
  meta?: string;
  highlights: string[];
}

export interface Experience {
  title: string;
  company: string;
  duration: string;
  highlights: string[];
}

export interface Education {
  degree: string;
  school: string;
  year: string;
  details?: string;
}

export interface Language {
  language: string;
  level: string;
}

export interface CVData {
  personal: PersonalInfo;
  summary: string;
  experience: Experience[];
  education: Education[];
  skills: Record<string, string[]>;
  languages: Language[];
  projects?: Project[];
}

// --- Component Prop Types ---

export interface CVHeaderProps {
  data: PersonalInfo;
}

export interface ContactProps {
  data: PersonalInfo;
}

export interface SkillsProps {
  data: Record<string, string[]>;
}

export interface LanguagesProps {
  data: Language[];
}

export interface ProfileProps {
  summary: string;
}

export interface ExperienceProps {
  experience: Experience[];
}

export interface EducationProps {
  education: Education[];
}
