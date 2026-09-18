import React from 'react';
import { Compass, Terminal, RefreshCw, ArrowUpRight } from 'lucide-react';

interface MethodologyStage {
  number: string;
  phase: string;
  headline: string;
  description: string;
  icon: React.ElementType;
  keyPractices: string[];
}

const STAGES: MethodologyStage[] = [
  {
    number: '01',
    phase: 'UNDERSTAND',
    headline: 'Understand the problem before choosing the technology.',
    description:
      'Understand the problem, requirements, constraints and expected outcome. Deeply analyze user workflows, operational bottlenecks, latency targets, and economic boundaries before designing architecture.',
    icon: Compass,
    keyPractices: ['Problem Decomposition', 'Requirements & Constraints', 'Outcome Definition'],
  },
  {
    number: '02',
    phase: 'BUILD',
    headline: 'Turn ideas into working cloud and AI applications.',
    description:
      'Design the right architecture and turn the idea into a working cloud/AI application. Leverage proven AWS managed primitives, containerized microservices, and practical generative AI reasoning.',
    icon: Terminal,
    keyPractices: ['Cloud Architecture', 'AWS Managed Primitives', 'Practical AI Integration'],
  },
  {
    number: '03',
    phase: 'IMPROVE',
    headline: 'Test, automate and continuously improve.',
    description:
      'Test, automate, monitor and continuously refine the system. Enforce CI/CD pipelines, validate system behavior under real load, track telemetry, and iteratively optimize cost and performance.',
    icon: RefreshCw,
    keyPractices: ['Automated Testing', 'CI/CD Pipelines', 'Telemetry & Optimization'],
  },
];

export function HowIBuild() {
  return (
    <section
      id="how-i-build"
      className="relative py-24 px-6 lg:pl-44 xl:pl-56 lg:pr-12 xl:pr-20 border-t border-white/[0.06] bg-[#05080B] overflow-hidden"
    >
      {/* Subtle Background Atmosphere */}
      <div className="absolute top-1/2 -right-32 w-80 h-80 rounded-full bg-[#D4C5A0]/[0.02] blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-72 h-72 rounded-full bg-cyan-900/[0.02] blur-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-[2px] border border-[#D4C5A0]/25 bg-[#D4C5A0]/10 text-[#D4C5A0] font-mono text-[10px] tracking-[0.25em] uppercase mb-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[#D4C5A0]" />
              ENGINEERING METHODOLOGY
            </div>

            <h2 className="text-3xl sm:text-5xl xl:text-6xl font-black tracking-tight text-[#EDEDE8] font-display leading-[1.02]">
              HOW I <span className="text-[#D4C5A0] font-light italic">BUILD</span>
            </h2>
          </div>

          <p className="max-w-md text-xs sm:text-sm text-[#8A959E] font-body leading-relaxed">
            A disciplined, three-stage engineering approach focused on solving real problems through sound architecture, practical implementation, and continuous refinement.
          </p>
        </div>

        {/* 3 Simple Stages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 xl:gap-8">
          {STAGES.map((stage) => {
            const Icon = stage.icon;
            return (
              <div
                key={stage.number}
                id={`how-i-build-stage-${stage.number}`}
                className="group relative flex flex-col justify-between rounded-sm border border-white/[0.08] bg-[#0A0F13] p-7 sm:p-8 text-left transition-all duration-300 hover:border-[#D4C5A0]/50 hover:bg-[#0E1419] hover:shadow-[0_15px_45px_rgba(0,0,0,0.6),0_0_25px_rgba(212,197,160,0.06)]"
              >
                <div>
                  {/* Top Bar: Stage Number & Icon */}
                  <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/[0.06]">
                    <span className="font-mono text-xs font-bold text-[#D4C5A0] tracking-widest">
                      STAGE / {stage.number}
                    </span>
                    <div className="flex h-8 w-8 items-center justify-center rounded-[2px] border border-white/[0.08] bg-[#05080B] text-[#D4C5A0]/80 group-hover:border-[#D4C5A0]/40 group-hover:text-[#D4C5A0] transition-colors">
                      <Icon className="h-4 w-4" />
                    </div>
                  </div>

                  {/* Stage Name */}
                  <h3 className="text-xl sm:text-2xl font-black tracking-tight text-[#EDEDE8] font-display mb-2 group-hover:text-[#D4C5A0] transition-colors">
                    {stage.phase}
                  </h3>

                  {/* Headline */}
                  <p className="text-xs font-mono text-[#D4C5A0]/90 uppercase tracking-wide mb-4 leading-relaxed">
                    {stage.headline}
                  </p>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#8A959E] font-body leading-relaxed mb-6">
                    {stage.description}
                  </p>
                </div>

                {/* Key Practices Pills */}
                <div className="pt-4 border-t border-white/[0.06]">
                  <div className="text-[9px] font-mono tracking-widest text-[#8A959E]/60 uppercase mb-2.5">
                    CORE FOCUS:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {stage.keyPractices.map((item, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded-[2px] border border-white/[0.06] bg-[#05080B] text-[#EDEDE8]/80 group-hover:border-[#D4C5A0]/20 transition-colors"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
