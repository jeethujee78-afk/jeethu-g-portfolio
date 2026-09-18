export interface ArchitectureNode {
  id: string;
  name: string;
  label: string;
  category: 'frontend' | 'compute' | 'database' | 'storage' | 'ai' | 'external';
  description: string;
  role: string;
  tech: string;
}

export interface ProjectCaseStudy {
  overview: string;
  problem: string;
  idea: string;
  architectureSummary: string;
  architectureNodes?: ArchitectureNode[];
  awsInfrastructure: string[];
  dataFlow: string[];
  aiIntegration?: string;
  keyFeatures: string[];
  engineeringChallenges: string[];
  solution: string[];
  technologyStack: {
    frontend: string[];
    backend: string[];
    cloud: string[];
    aiAndData: string[];
    devops: string[];
  };
}

export type ProjectStatus = 'LIVE' | 'ACTIVE BUILD' | 'IN DEVELOPMENT' | 'CONCEPT';
export type ProjectFilterCategory =
  | 'ALL'
  | 'CLOUD'
  | 'AI'
  | 'AWS'
  | 'WEB'
  | 'E-COMMERCE'
  | 'SPORTS'
  | 'AUTOMATION';

export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  badge?: string;
  status: ProjectStatus;
  statusLabel?: string;
  filterCategories: ProjectFilterCategory[];
  description: string;
  technologies: string[];
  github?: string;
  live?: string;
  image: string;
  featured?: boolean;
  isUpcoming?: boolean;
  currentProgress?: string;
  nextFocus?: string[];
  caseStudy?: ProjectCaseStudy;
}

export interface TechnicalExplorationItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  summary: string;
  topics: string[];
  image: string;
  whyItMatters: string;
  whatImExploring: string;
  technologies: string[];
  practicalApplication: string;
  projectConnection: string;
}

// Retain ResearchItem as an alias for backwards compatibility
export type ResearchItem = TechnicalExplorationItem;

export interface TechnicalInitiative {
  badge: string;
  title: string;
  description: string;
  points: string[];
  technologies: string[];
}

export interface ExperienceItem {
  id: string;
  period: string;
  role: string;
  company: string;
  location?: string;
  type: 'PROFESSIONAL EXPERIENCE' | 'PERSONAL CLOUD / AI PROJECTS';
  employmentCategory?: 'FULL-TIME PROFESSIONAL EMPLOYMENT' | 'INDEPENDENT ENGINEERING & LABS';
  summary: string;
  description: string;
  responsibilities: string[];
  keyContributions: string[];
  technicalInitiative?: TechnicalInitiative;
  current?: boolean;
}

export type SkillCategory =
  | 'AWS CLOUD'
  | 'DEVOPS & INFRASTRUCTURE'
  | 'AI & AUTOMATION'
  | 'APPLICATION DEVELOPMENT'
  | 'DATA & ANALYTICS';

export interface SkillItem {
  name: string;
  exposure: 'Hands-on project experience' | 'Working knowledge' | 'Technical exposure';
  detail?: string;
}

export interface EngineeringMethodologyStep {
  number: string;
  phase: 'Understand' | 'Architect' | 'Build' | 'Automate' | 'Test' | 'Improve';
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  mindset: string;
}

export interface TechnologyOrbitNode {
  id: string;
  name: string;
  category: 'AWS' | 'Cloud' | 'AI' | 'DevOps' | 'Automation' | 'Data';
  tagline: string;
  description: string;
  coreTech: string[];
  relatedProjects: string[];
  verifiedExperience: string;
}
