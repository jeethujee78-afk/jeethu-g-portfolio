import React, { useState } from 'react';
import { 
  Cloud, 
  Layers, 
  Cpu, 
  GitBranch, 
  Zap, 
  Database, 
  ExternalLink,
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import { TECHNOLOGY_ORBIT_NODES } from '../data/portfolioData';
import { TechnologyOrbitNode } from '../types';

const CATEGORY_ICONS: Record<string, React.ElementType> = {
  AWS: Cloud,
  Cloud: Layers,
  AI: Cpu,
  DevOps: GitBranch,
  Automation: Zap,
  Data: Database,
};

export function TechnologyOrbit() {
  const [selectedNodeId, setSelectedNodeId] = useState<string>('aws');
  const [hoveredNodeId, setHoveredNodeId] = useState<string | null>(null);

  const activeNode: TechnologyOrbitNode =
    TECHNOLOGY_ORBIT_NODES.find((n) => n.id === (hoveredNodeId || selectedNodeId)) ||
    TECHNOLOGY_ORBIT_NODES[0];

  const ActiveIcon = CATEGORY_ICONS[activeNode.category] || Cloud;

  return (
    <section
      id="technology-orbit"
      className="relative py-28 px-6 lg:pl-44 xl:pl-56 lg:pr-12 xl:pr-20 border-t border-white/[0.06] bg-[#05080B] overflow-hidden"
    >
      {/* Background Atmosphere */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-radial from-[#D4C5A0]/[0.035] via-transparent to-transparent blur-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-[2px] border border-[#D4C5A0]/25 bg-[#D4C5A0]/10 text-[#D4C5A0] font-mono text-[10px] tracking-[0.25em] uppercase mb-4">
            <Sparkles className="h-3 w-3 text-[#D4C5A0]" />
            INTERACTIVE SYSTEM EXPLORER
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#EDEDE8] font-display">
            TECHNOLOGY <span className="text-[#D4C5A0] font-light italic">ORBIT</span>
          </h2>
          <p className="mt-4 max-w-2xl text-sm sm:text-base text-[#8A959E] font-body leading-relaxed">
            An interactive visualization mapping the six interconnected pillars of my engineering practice: AWS, Cloud Architecture, Applied AI, DevOps & SRE, Process Automation, and Telemetry Data.
          </p>
        </div>

        {/* Orbit Canvas & Active Inspector Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left: Interactive Orbital System (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-center justify-center relative min-h-[440px] sm:min-h-[500px]">
            {/* Concentric Orbital Rings */}
            <div className="relative w-[340px] h-[340px] sm:w-[460px] sm:h-[460px] flex items-center justify-center">
              
              {/* Outer Ring */}
              <div className="absolute inset-0 rounded-full border border-white/[0.08] pointer-events-none" />
              {/* Mid Ring */}
              <div className="absolute inset-12 sm:inset-16 rounded-full border border-dashed border-[#D4C5A0]/20 pointer-events-none" />
              {/* Inner Ring */}
              <div className="absolute inset-24 sm:inset-32 rounded-full border border-white/[0.05] pointer-events-none" />

              {/* Central Core: JEETHU G */}
              <div className="relative z-10 flex flex-col items-center justify-center w-28 h-28 sm:w-36 sm:h-36 rounded-full border border-[#D4C5A0]/50 bg-[#0A0F13] shadow-[0_0_50px_rgba(212,197,160,0.15)] text-center p-3">
                <div className="w-2 h-2 rounded-full bg-[#D4C5A0] animate-ping mb-1.5" />
                <div className="text-[11px] sm:text-xs font-bold tracking-[0.2em] text-[#EDEDE8] font-display uppercase">
                  JEETHU G
                </div>
                <div className="text-[8px] sm:text-[9px] font-mono tracking-widest text-[#D4C5A0] uppercase mt-0.5">
                  CLOUD CORE
                </div>
              </div>

              {/* 6 Orbital Satellites */}
              {TECHNOLOGY_ORBIT_NODES.map((node, index) => {
                const totalNodes = TECHNOLOGY_ORBIT_NODES.length;
                const angle = (index * (360 / totalNodes) - 90) * (Math.PI / 180);
                // Radius in percentage of container half-width
                const radius = 42; // percent
                const x = 50 + radius * Math.cos(angle);
                const y = 50 + radius * Math.sin(angle);

                const isSelected = activeNode.id === node.id;
                const NodeIcon = CATEGORY_ICONS[node.category] || Cloud;

                return (
                  <div
                    key={node.id}
                    style={{
                      left: `${x}%`,
                      top: `${y}%`,
                      transform: 'translate(-50%, -50%)',
                    }}
                    className="absolute z-20"
                  >
                    <button
                      id={`orbit-node-${node.id}`}
                      onClick={() => setSelectedNodeId(node.id)}
                      onMouseEnter={() => setHoveredNodeId(node.id)}
                      onMouseLeave={() => setHoveredNodeId(null)}
                      className={`group flex items-center gap-2 p-2.5 sm:p-3 rounded-full border transition-all duration-300 cursor-pointer ${
                        isSelected
                          ? 'border-[#D4C5A0] bg-[#10161B] text-[#D4C5A0] shadow-[0_0_30px_rgba(212,197,160,0.35)] scale-110'
                          : 'border-white/[0.12] bg-[#0A0F13]/90 text-[#8A959E] hover:border-[#D4C5A0]/60 hover:text-[#EDEDE8] hover:scale-105'
                      }`}
                      aria-label={`Select ${node.name}`}
                    >
                      <NodeIcon className={`h-4 w-4 sm:h-5 sm:w-5 transition-transform ${isSelected ? 'scale-110' : ''}`} />
                      <span className="hidden sm:inline-block text-[10px] font-mono font-bold tracking-wider uppercase pr-1">
                        {node.category}
                      </span>
                    </button>
                  </div>
                );
              })}
            </div>

            {/* Quick selector buttons below orbit */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
              {TECHNOLOGY_ORBIT_NODES.map((node) => {
                const isSelected = activeNode.id === node.id;
                return (
                  <button
                    key={node.id}
                    onClick={() => {
                      setSelectedNodeId(node.id);
                      setHoveredNodeId(null);
                    }}
                    className={`px-3 py-1.5 rounded-[2px] text-[10px] font-mono tracking-wider uppercase transition-all duration-200 cursor-pointer ${
                      isSelected
                        ? 'border border-[#D4C5A0] bg-[#D4C5A0]/15 text-[#D4C5A0] font-bold'
                        : 'border border-white/[0.08] bg-[#0A0F13] text-[#8A959E] hover:text-[#EDEDE8]'
                    }`}
                  >
                    {node.name}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: Detailed Node Inspector (5 cols) */}
          <div className="lg:col-span-5">
            <div
              id="orbit-inspector-panel"
              className="rounded-sm border border-[#D4C5A0]/30 bg-gradient-to-b from-[#0B1015] via-[#080C10] to-[#05080B] p-6 sm:p-8 shadow-2xl relative overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-4 mb-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-[2px] border border-[#D4C5A0]/40 bg-[#D4C5A0]/10 text-[#D4C5A0]">
                    <ActiveIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono tracking-[0.25em] text-[#D4C5A0] uppercase">
                      ORBIT PILLAR
                    </div>
                    <h3 className="text-xl font-bold tracking-tight text-[#EDEDE8] font-display">
                      {activeNode.name}
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 px-2 py-1 rounded-[2px] border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 font-mono text-[9px] tracking-wider uppercase">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  ACTIVE NODE
                </div>
              </div>

              {/* Tagline & Description */}
              <p className="text-xs font-mono text-[#D4C5A0] tracking-wide uppercase mb-3">
                {activeNode.tagline}
              </p>

              <p className="text-sm leading-relaxed text-[#94A3B8] font-body mb-6">
                {activeNode.description}
              </p>

              {/* Technologies List */}
              <div className="mb-6">
                <div className="text-[10px] font-mono tracking-[0.2em] text-[#8A959E] uppercase mb-2.5">
                  CORE TECHNOLOGIES & PRIMITIVES
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {activeNode.coreTech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-[2px] border border-white/[0.08] bg-[#05080B] text-xs font-mono text-[#EDEDE8]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Related Projects */}
              <div className="mb-6">
                <div className="text-[10px] font-mono tracking-[0.2em] text-[#8A959E] uppercase mb-2">
                  APPLIED IN PRODUCTION PROJECTS
                </div>
                <div className="flex flex-wrap gap-2">
                  {activeNode.relatedProjects.map((proj) => (
                    <a
                      key={proj}
                      href="#projects"
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-[#D4C5A0] hover:underline"
                    >
                      <ExternalLink className="h-3 w-3" />
                      <span>{proj}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Verified Experience Banner */}
              <div className="pt-4 border-t border-white/[0.08] flex items-start gap-2.5 text-xs text-[#8A959E] font-body">
                <ShieldCheck className="h-4 w-4 text-[#D4C5A0] shrink-0 mt-0.5" />
                <span className="leading-snug">{activeNode.verifiedExperience}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
