export interface PersonalInfo {
  name: string;
  titles: string[];
  location: string;
  email: string;
  phone: string;
  linkedin: string;
}

export interface StatCard {
  value: string;
  label: string;
  description: string;
  icon: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  duration: string;
  location: string;
  description: string;
  highlights: string[];
  technologies: string[];
  isCurrent?: boolean;
}

export interface ArchitectureNode {
  id: string;
  title: string;
  subtitle: string;
  type: 'client' | 'api' | 'middleware' | 'business' | 'database' | 'external';
  details: string[];
}

export interface ProjectCaseStudy {
  id: string;
  title: string;
  subtitle: string;
  organization: string;
  period: string;
  description: string;
  category: 'Financial Tech' | 'Payment Gateway' | 'Telecom & LBS' | 'Identity Verification';
  responsibilities: string[];
  technologies: string[];
  architectureFlow: {
    steps: {
      step: number;
      name: string;
      desc: string;
      tech?: string;
    }[];
    externalIntegrations?: string[];
    diagramType: 'amc' | 'raast' | 'zong' | 'pvs';
  };
}

export interface SkillGroup {
  category: string;
  skills: string[];
  icon: string;
}

export interface ServiceCard {
  id: string;
  title: string;
  description: string;
  icon: string;
  tags: string[];
}

export interface EngineeringPrinciple {
  id: string;
  title: string;
  description: string;
  icon: string;
}
