import React from 'react';
import { Award, Code2, Terminal, Cpu, Cloud, ArrowUpRight } from 'lucide-react';

interface SkillGroup {
  category: string;
  icon: React.ElementType;
  tagline: string;
  skills: string[];
}

const SKILL_GROUPS: SkillGroup[] = [
  {
    category: 'APPLICATION DEVELOPMENT',
    icon: Code2,
    tagline: 'Modern frontends, backend APIs, and systems scripting',
    skills: ['React', 'TypeScript', 'JavaScript', 'Node.js', 'Express.js', 'Python'],
  },
  {
    category: 'DEVOPS & AUTOMATION',
    icon: Terminal,
    tagline: 'Containers, automated pipelines, and infrastructure as code',
    skills: ['Docker', 'GitHub Actions', 'CI/CD', 'Terraform', 'Linux/Bash', 'Git'],
  },
  {
    category: 'AI, DATA & AUTOMATION',
    icon: Cpu,
    tagline: 'Generative workflows, reasoning systems, and automated data pipelines',
    skills: [
      'Prompt Engineering',
      'AI-Assisted Development',
      'AI-Assisted Testing & Debugging',
      'Agentic AI Workflows',
      'Context & Instruction Design',
      'AI Integration',
      'Data Processing',
      'Workflow Automation',
    ],
  },
  {
    category: 'CLOUD KNOWLEDGE',
    icon: Cloud,
    tagline: 'Architectural principles, security posture, and cloud economics',
    skills: ['AWS networking', 'Security', 'Cost Optimization', 'Serverless Architecture'],
  },
];

export function Skills() {
  return (
    <section
      id="skills"
      className="relative py-24 px-6 lg:pl-44 xl:pl-56 lg:pr-12 xl:pr-20 border-t border-white/[0.06] bg-[#05080B]"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <div>
            <p className="text-[10px] tracking-[0.32em] font-mono font-semibold text-[#D4C5A0] uppercase mb-3">
              07 / SUPPORTING CAPABILITIES
            </p>
            <h2 className="text-3xl sm:text-5xl xl:text-6xl font-black tracking-tight text-[#EDEDE8] font-display leading-[1.02]">
              SKILLS &{' '}
              <span className="text-[#D4C5A0] font-light italic">CAPABILITIES</span>
            </h2>
            <p className="mt-3 max-w-xl text-xs sm:text-sm text-[#8A959E] font-body leading-relaxed">
              Supporting engineering capabilities, development stacks, and architectural practices complementing the primary Technology Orbit.
            </p>
          </div>

          {/* AWS Certification Badge */}
          <div className="flex items-center gap-3.5 p-4 rounded-[2px] border border-[#D4C5A0]/40 bg-[#0A0F13] shadow-[0_0_20px_rgba(212,197,160,0.08)] max-w-md">
            <div className="p-2.5 rounded-[2px] border border-[#D4C5A0]/40 bg-[#D4C5A0]/10 shrink-0">
              <Award className="h-6 w-6 text-[#D4C5A0]" />
            </div>
            <div>
              <div className="text-xs font-mono tracking-widest text-[#D4C5A0] uppercase font-bold">
                AWS CERTIFIED SOLUTIONS ARCHITECT – ASSOCIATE
              </div>
              <div className="text-[11px] text-[#8A959E] font-mono mt-0.5">
                Verified Architectural Credential · Validation ID: 41b61c56f8f54ad8ae266858e77a28e7
              </div>
            </div>
          </div>
        </div>

        {/* Compact 4-Group Capabilities Grid */}
        <div
          id="compact-skills-grid"
          className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6"
        >
          {SKILL_GROUPS.map((group) => {
            const Icon = group.icon;
            return (
              <div
                key={group.category}
                id={`skill-group-${group.category.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                className="rounded-sm border border-white/[0.08] bg-[#0A0F13] p-6 sm:p-7 transition-all duration-300 hover:border-[#D4C5A0]/40 hover:bg-[#0E1419]"
              >
                {/* Group Title & Icon */}
                <div className="flex items-center justify-between gap-4 mb-2">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-7 w-7 items-center justify-center rounded-[2px] border border-white/[0.08] bg-[#05080B] text-[#D4C5A0]">
                      <Icon className="h-3.5 w-3.5" />
                    </div>
                    <h3 className="font-mono text-xs sm:text-sm font-bold tracking-wider text-[#EDEDE8] uppercase">
                      {group.category}
                    </h3>
                  </div>
                </div>

                {/* Subtitle / Context */}
                <p className="text-xs text-[#8A959E] font-body mb-4">
                  {group.tagline}
                </p>

                {/* Skills Line with Bullet Separators */}
                <div className="pt-3.5 border-t border-white/[0.06] flex flex-wrap items-center gap-x-2 gap-y-1.5 font-mono text-xs">
                  {group.skills.map((tech, i) => (
                    <React.Fragment key={tech}>
                      <span className="text-[#EDEDE8] bg-[#05080B] px-2.5 py-1 rounded-[2px] border border-white/[0.06] hover:border-[#D4C5A0]/40 hover:text-[#D4C5A0] transition-colors">
                        {tech}
                      </span>
                    </React.Fragment>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Orbit Bridge Callout */}
        <div className="mt-8 p-4 rounded-[2px] border border-white/[0.06] bg-[#0A0F13]/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs font-mono">
          <div className="text-[#8A959E]">
            Looking for AWS managed services, container workloads, and live infrastructure components?
          </div>
          <a
            href="#technology-orbit"
            className="inline-flex items-center gap-1.5 text-[#D4C5A0] hover:text-white font-semibold transition-colors shrink-0"
          >
            <span>EXPLORE TECHNOLOGY ORBIT</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
