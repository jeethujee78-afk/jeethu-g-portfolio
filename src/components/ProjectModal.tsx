import React, { useState, useEffect } from 'react';
import {
  X,
  ArrowLeft,
  ArrowUpRight,
  Github,
  Server,
  Database,
  Cloud,
  Cpu,
  Brain,
  Layers,
  ShieldCheck,
  Zap,
  Activity,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
} from 'lucide-react';
import { Project, ArchitectureNode } from '../types';
import { AnivaCaseStudy } from './case-studies/AnivaCaseStudy';
import { JaiHindCaseStudy } from './case-studies/JaiHindCaseStudy';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [selectedNode, setSelectedNode] = useState<ArchitectureNode | null>(null);

  useEffect(() => {
    if (!project) return;

    // Lock body scroll
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';

    // Keyboard navigation
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    // Default select first architecture node if available
    if (project.caseStudy?.architectureNodes && project.caseStudy.architectureNodes.length > 0) {
      setSelectedNode(project.caseStudy.architectureNodes[0]);
    } else {
      setSelectedNode(null);
    }

    return () => {
      document.body.style.overflow = originalStyle;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const caseStudy = project.caseStudy;

  const getNodeIcon = (category: string) => {
    switch (category) {
      case 'frontend':
        return <Activity className="w-4 h-4 text-emerald-400" />;
      case 'compute':
        return <Cpu className="w-4 h-4 text-amber-400" />;
      case 'database':
        return <Database className="w-4 h-4 text-sky-400" />;
      case 'storage':
        return <Server className="w-4 h-4 text-purple-400" />;
      case 'ai':
        return <Brain className="w-4 h-4 text-rose-400" />;
      case 'external':
        return <Zap className="w-4 h-4 text-orange-400" />;
      default:
        return <Cloud className="w-4 h-4 text-[#D4C5A0]" />;
    }
  };

  return (
    <div
      id="project-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-xl p-3 sm:p-6 overflow-y-auto animate-fadeIn"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        id="project-modal-container"
        className="relative w-full max-w-5xl rounded-sm border border-white/[0.12] bg-[#0A0F13] text-[#EDEDE8] shadow-[0_25px_80px_rgba(0,0,0,0.9),0_0_50px_rgba(212,197,160,0.06)] my-8 overflow-hidden flex flex-col max-h-[92vh]"
      >
        {/* Modal Sticky Top Header */}
        <div className="sticky top-0 z-30 flex items-center justify-between border-b border-white/[0.08] bg-[#05080B]/95 px-6 py-4 backdrop-blur-md">
          <button
            id="modal-back-button"
            onClick={onClose}
            className="group flex items-center gap-2 text-xs font-mono tracking-[0.2em] uppercase text-[#8A959E] hover:text-[#D4C5A0] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1 text-[#D4C5A0]" />
            <span>BACK TO PROJECTS</span>
          </button>

          <div className="flex items-center gap-3">
            {project.live && (
              <a
                id="modal-live-link"
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 rounded-[2px] border border-[#D4C5A0] bg-[#D4C5A0] px-3.5 py-1.5 text-[11px] font-bold tracking-[0.15em] uppercase text-[#05080B] hover:bg-white hover:border-white transition-all shadow-sm"
              >
                <span>{project.status === 'ACTIVE BUILD' || project.status === 'IN DEVELOPMENT' ? 'LIVE PREVIEW →' : 'LIVE PROJECT'}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            )}

            {project.github && (
              <a
                id="modal-github-link"
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 rounded-[2px] border border-white/[0.15] bg-[#10161B] px-3.5 py-1.5 text-[11px] font-mono tracking-wider text-[#EDEDE8] hover:border-[#D4C5A0]/60 hover:text-white transition-colors"
              >
                <Github className="w-3.5 h-3.5 text-[#D4C5A0]" />
                <span>SOURCE CODE →</span>
              </a>
            )}

            <button
              id="modal-close-button"
              onClick={onClose}
              aria-label="Close project modal"
              className="flex h-8 w-8 items-center justify-center rounded-[2px] border border-white/[0.1] bg-[#10161B] text-[#8A959E] hover:border-[#D4C5A0] hover:text-[#D4C5A0] transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="overflow-y-auto px-6 py-8 sm:px-10 sm:py-10 space-y-12">
          {/* Hero Banner Section */}
          <div className="border-b border-white/[0.08] pb-8">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="font-mono text-xs font-bold text-[#D4C5A0] px-2.5 py-1 rounded-[2px] border border-[#D4C5A0]/30 bg-[#D4C5A0]/10">
                PROJECT {project.number}
              </span>
              {project.status === 'ACTIVE BUILD' ? (
                <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-amber-300 px-2.5 py-1 rounded-[2px] border border-amber-500/50 bg-[#05080B] font-bold flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse" />
                  ● ACTIVE BUILD
                </span>
              ) : project.status === 'IN DEVELOPMENT' ? (
                <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-amber-400 px-2.5 py-1 rounded-[2px] border border-amber-500/40 bg-[#05080B] font-semibold flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse" />
                  ◐ IN DEVELOPMENT
                </span>
              ) : project.badge && (
                <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#8A959E] px-2.5 py-1 rounded-[2px] border border-white/[0.08] bg-[#05080B]">
                  {project.badge}
                </span>
              )}
            </div>

            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-[#EDEDE8] font-display mb-3">
              {project.title}
            </h1>

            <p className="text-xs sm:text-sm font-mono tracking-[0.24em] text-[#D4C5A0] uppercase mb-6">
              {project.subtitle}
            </p>

            <p className="text-base sm:text-lg leading-relaxed text-[#EDEDE8]/90 font-body max-w-4xl mb-6">
              {project.description}
            </p>

            {/* Quick Action Links Bar */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              {project.live ? (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-[2px] border border-[#D4C5A0] bg-[#D4C5A0] px-5 py-2.5 text-xs font-bold tracking-[0.16em] uppercase text-[#05080B] hover:bg-white transition-all shadow-md"
                >
                  <span>{project.status === 'ACTIVE BUILD' || project.status === 'IN DEVELOPMENT' ? 'LIVE PREVIEW →' : 'VIEW LIVE PROJECT'}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              ) : (
                <span className="inline-flex items-center gap-2 rounded-[2px] border border-white/[0.1] bg-[#10161B] px-4 py-2 text-xs font-mono tracking-wider text-[#8A959E]">
                  ✦ LIVE DEPLOYMENT: {project.statusLabel === 'IN DEVELOPMENT' ? 'COMING SOON' : 'UPCOMING'}
                </span>
              )}

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-[2px] border border-white/[0.15] bg-[#10161B] px-5 py-2.5 text-xs font-mono tracking-[0.15em] uppercase text-[#EDEDE8] hover:border-[#D4C5A0]/60 hover:text-white transition-colors"
                >
                  <Github className="w-4 h-4 text-[#D4C5A0]" />
                  <span>SOURCE CODE →</span>
                </a>
              )}
            </div>
          </div>

          {/* Detailed Case Study Sections */}
          {project.id === 'aniva' ? (
            <AnivaCaseStudy project={project} onClose={onClose} />
          ) : project.id === 'jai-hind-sports' ? (
            <JaiHindCaseStudy project={project} onClose={onClose} />
          ) : caseStudy && (
            <div className="space-y-12 text-sm sm:text-base font-body leading-relaxed text-[#8A959E]">
              {/* 01 OVERVIEW */}
              <section id="cs-overview" className="border-b border-white/[0.06] pb-8">
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-mono text-xs text-[#D4C5A0] font-semibold">01</span>
                  <h2 className="text-lg font-bold tracking-wider text-[#EDEDE8] font-display uppercase">
                    OVERVIEW
                  </h2>
                </div>
                <p className="text-[#EDEDE8]/85">{caseStudy.overview}</p>
              </section>

              {/* 02 THE PROBLEM */}
              <section id="cs-problem" className="border-b border-white/[0.06] pb-8">
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-mono text-xs text-[#D4C5A0] font-semibold">02</span>
                  <h2 className="text-lg font-bold tracking-wider text-[#EDEDE8] font-display uppercase">
                    THE PROBLEM
                  </h2>
                </div>
                <div className="rounded-[2px] border-l-2 border-rose-500/70 bg-[#05080B] p-4 text-[#EDEDE8]/85">
                  <p>{caseStudy.problem}</p>
                </div>
              </section>

              {/* 03 THE IDEA */}
              <section id="cs-idea" className="border-b border-white/[0.06] pb-8">
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-mono text-xs text-[#D4C5A0] font-semibold">03</span>
                  <h2 className="text-lg font-bold tracking-wider text-[#EDEDE8] font-display uppercase">
                    THE IDEA & ARCHITECTURAL APPROACH
                  </h2>
                </div>
                <p className="text-[#EDEDE8]/85">{caseStudy.idea}</p>
              </section>

              {/* 04 ARCHITECTURE & INTERACTIVE ARCHITECTURE DIAGRAM */}
              <section id="cs-architecture" className="border-b border-white/[0.06] pb-8">
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-mono text-xs text-[#D4C5A0] font-semibold">04</span>
                  <h2 className="text-lg font-bold tracking-wider text-[#EDEDE8] font-display uppercase">
                    ARCHITECTURE
                  </h2>
                </div>
                <p className="text-[#EDEDE8]/85 mb-6">{caseStudy.architectureSummary}</p>

                {/* Interactive Architecture Map */}
                {caseStudy.architectureNodes && caseStudy.architectureNodes.length > 0 && (
                  <div className="rounded-sm border border-white/[0.1] bg-[#05080B] p-5 sm:p-6 shadow-inner">
                    <div className="flex items-center justify-between mb-4 border-b border-white/[0.06] pb-3">
                      <div className="text-[11px] font-mono tracking-[0.2em] text-[#D4C5A0] uppercase font-semibold flex items-center gap-2">
                        <Layers className="w-3.5 h-3.5" />
                        <span>INTERACTIVE SYSTEM COMPONENT INSPECTOR</span>
                      </div>
                      <span className="text-[10px] font-mono text-[#8A959E]">
                        Click or hover a node below
                      </span>
                    </div>

                    {/* Nodes Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5 mb-6">
                      {caseStudy.architectureNodes.map((node) => {
                        const isSelected = selectedNode?.id === node.id;
                        return (
                          <button
                            key={node.id}
                            onClick={() => setSelectedNode(node)}
                            onMouseEnter={() => setSelectedNode(node)}
                            className={`flex flex-col text-left p-3 rounded-[2px] border transition-all duration-200 cursor-pointer ${
                              isSelected
                                ? 'border-[#D4C5A0] bg-[#10161B] shadow-[0_0_15px_rgba(212,197,160,0.15)]'
                                : 'border-white/[0.08] bg-[#0A0F13] hover:border-white/[0.2] hover:bg-[#0E1419]'
                            }`}
                          >
                            <div className="flex items-center justify-between mb-1.5">
                              <span className="font-mono text-[10px] tracking-wider text-[#8A959E] uppercase">
                                {node.category}
                              </span>
                              {getNodeIcon(node.category)}
                            </div>
                            <span className="font-display font-bold text-xs text-[#EDEDE8] truncate">
                              {node.name}
                            </span>
                            <span className="font-mono text-[9px] text-[#D4C5A0]/80 mt-0.5 truncate">
                              {node.label}
                            </span>
                          </button>
                        );
                      })}
                    </div>

                    {/* Selected Node Details Card */}
                    {selectedNode && (
                      <div className="rounded-[2px] border border-[#D4C5A0]/30 bg-[#0A0F13] p-4.5 text-xs font-mono transition-all">
                        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/[0.06] pb-2 mb-3">
                          <div className="flex items-center gap-2">
                            {getNodeIcon(selectedNode.category)}
                            <span className="font-bold text-sm text-[#EDEDE8] font-display">
                              {selectedNode.name}
                            </span>
                            <span className="text-[10px] text-[#D4C5A0] bg-[#D4C5A0]/10 px-2 py-0.5 rounded-[2px] border border-[#D4C5A0]/20">
                              {selectedNode.tech}
                            </span>
                          </div>
                          <span className="text-[10px] tracking-widest text-[#8A959E] uppercase">
                            ROLE: {selectedNode.role}
                          </span>
                        </div>
                        <p className="text-xs text-[#EDEDE8]/90 leading-relaxed font-body">
                          {selectedNode.description}
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </section>

              {/* 05 AWS INFRASTRUCTURE */}
              <section id="cs-aws" className="border-b border-white/[0.06] pb-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-mono text-xs text-[#D4C5A0] font-semibold">05</span>
                  <h2 className="text-lg font-bold tracking-wider text-[#EDEDE8] font-display uppercase">
                    AWS INFRASTRUCTURE & CLOUD SERVICES
                  </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {caseStudy.awsInfrastructure.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 rounded-[2px] border border-white/[0.06] bg-[#05080B] p-3 text-xs"
                    >
                      <Cloud className="w-4 h-4 text-[#D4C5A0] flex-shrink-0 mt-0.5" />
                      <span className="text-[#EDEDE8]/90 font-mono">{item}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* 06 DATA FLOW */}
              <section id="cs-data-flow" className="border-b border-white/[0.06] pb-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-mono text-xs text-[#D4C5A0] font-semibold">06</span>
                  <h2 className="text-lg font-bold tracking-wider text-[#EDEDE8] font-display uppercase">
                    DATA FLOW & EXECUTION PIPELINE
                  </h2>
                </div>
                <div className="space-y-2">
                  {caseStudy.dataFlow.map((step, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 rounded-[2px] border border-white/[0.06] bg-[#05080B] p-3.5 text-xs text-[#EDEDE8]/85 font-mono"
                    >
                      <span className="h-5 w-5 rounded-full border border-[#D4C5A0]/40 bg-[#D4C5A0]/10 flex items-center justify-center text-[10px] text-[#D4C5A0] font-bold flex-shrink-0">
                        {idx + 1}
                      </span>
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* 07 AI INTEGRATION */}
              {caseStudy.aiIntegration && (
                <section id="cs-ai" className="border-b border-white/[0.06] pb-8">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-mono text-xs text-[#D4C5A0] font-semibold">07</span>
                    <h2 className="text-lg font-bold tracking-wider text-[#EDEDE8] font-display uppercase">
                      AI INTEGRATION (GOOGLE GEMINI)
                    </h2>
                  </div>
                  <div className="rounded-[2px] border-l-2 border-[#D4C5A0] bg-[#05080B] p-4 text-[#EDEDE8]/90">
                    <p>{caseStudy.aiIntegration}</p>
                  </div>
                </section>
              )}

              {/* 08 KEY FEATURES */}
              <section id="cs-features" className="border-b border-white/[0.06] pb-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-mono text-xs text-[#D4C5A0] font-semibold">08</span>
                  <h2 className="text-lg font-bold tracking-wider text-[#EDEDE8] font-display uppercase">
                    KEY FEATURES
                  </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {caseStudy.keyFeatures.map((feat, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 rounded-[2px] border border-white/[0.06] bg-[#05080B] p-3 text-xs"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#D4C5A0] flex-shrink-0 mt-0.5" />
                      <span className="text-[#EDEDE8]/90">{feat}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* 09 & 10 ENGINEERING CHALLENGES & SOLUTION */}
              <section id="cs-challenges" className="border-b border-white/[0.06] pb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="font-mono text-xs text-rose-400 font-semibold">09</span>
                      <h2 className="text-base font-bold tracking-wider text-[#EDEDE8] font-display uppercase">
                        ENGINEERING CHALLENGES
                      </h2>
                    </div>
                    <div className="space-y-2.5">
                      {caseStudy.engineeringChallenges.map((ch, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2.5 rounded-[2px] border border-rose-500/20 bg-rose-950/10 p-3 text-xs text-[#EDEDE8]/85 font-mono"
                        >
                          <AlertCircle className="w-3.5 h-3.5 text-rose-400 flex-shrink-0 mt-0.5" />
                          <span>{ch}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="font-mono text-xs text-[#D4C5A0] font-semibold">10</span>
                      <h2 className="text-base font-bold tracking-wider text-[#EDEDE8] font-display uppercase">
                        ARCHITECTURAL SOLUTIONS
                      </h2>
                    </div>
                    <div className="space-y-2.5">
                      {caseStudy.solution.map((sol, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2.5 rounded-[2px] border border-[#D4C5A0]/20 bg-[#D4C5A0]/5 p-3 text-xs text-[#EDEDE8]/85 font-mono"
                        >
                          <ShieldCheck className="w-3.5 h-3.5 text-[#D4C5A0] flex-shrink-0 mt-0.5" />
                          <span>{sol}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              {/* 11 TECHNOLOGY STACK */}
              <section id="cs-stack" className="border-b border-white/[0.06] pb-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-mono text-xs text-[#D4C5A0] font-semibold">11</span>
                  <h2 className="text-lg font-bold tracking-wider text-[#EDEDE8] font-display uppercase">
                    TECHNOLOGY STACK
                  </h2>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 font-mono text-xs">
                  <div className="rounded-[2px] border border-white/[0.06] bg-[#05080B] p-3">
                    <div className="text-[10px] text-[#D4C5A0] uppercase tracking-wider mb-2 font-semibold">
                      Frontend
                    </div>
                    <div className="space-y-1 text-[#8A959E]">
                      {caseStudy.technologyStack.frontend.map((t) => (
                        <div key={t}>{t}</div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-[2px] border border-white/[0.06] bg-[#05080B] p-3">
                    <div className="text-[10px] text-[#D4C5A0] uppercase tracking-wider mb-2 font-semibold">
                      Backend
                    </div>
                    <div className="space-y-1 text-[#8A959E]">
                      {caseStudy.technologyStack.backend.map((t) => (
                        <div key={t}>{t}</div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-[2px] border border-white/[0.06] bg-[#05080B] p-3">
                    <div className="text-[10px] text-[#D4C5A0] uppercase tracking-wider mb-2 font-semibold">
                      AWS Cloud
                    </div>
                    <div className="space-y-1 text-[#8A959E]">
                      {caseStudy.technologyStack.cloud.map((t) => (
                        <div key={t}>{t}</div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-[2px] border border-white/[0.06] bg-[#05080B] p-3">
                    <div className="text-[10px] text-[#D4C5A0] uppercase tracking-wider mb-2 font-semibold">
                      AI & Data
                    </div>
                    <div className="space-y-1 text-[#8A959E]">
                      {caseStudy.technologyStack.aiAndData.map((t) => (
                        <div key={t}>{t}</div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-[2px] border border-white/[0.06] bg-[#05080B] p-3">
                    <div className="text-[10px] text-[#D4C5A0] uppercase tracking-wider mb-2 font-semibold">
                      DevOps
                    </div>
                    <div className="space-y-1 text-[#8A959E]">
                      {caseStudy.technologyStack.devops.map((t) => (
                        <div key={t}>{t}</div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              {/* 12 & 13 LIVE PROJECT & SOURCE CODE */}
              <section id="cs-links" className="pt-2">
                <div className="flex flex-wrap items-center justify-between gap-4 p-5 rounded-[2px] border border-white/[0.1] bg-[#05080B]">
                  <div>
                    <div className="text-[11px] font-mono tracking-[0.2em] text-[#D4C5A0] uppercase font-semibold">
                      12 · 13 SYSTEM ACCESS & REPOSITORY
                    </div>
                    <div className="text-xs text-[#8A959E] mt-1">
                      Deployed on production cloud infrastructure with public GitHub repository.
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-[2px] border border-[#D4C5A0] bg-[#D4C5A0] px-4 py-2 text-xs font-bold tracking-[0.15em] uppercase text-[#05080B] hover:bg-white transition-all shadow-sm"
                      >
                        <span>VIEW LIVE SYSTEM</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    )}

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-[2px] border border-white/[0.15] bg-[#10161B] px-4 py-2 text-xs font-mono tracking-wider text-[#EDEDE8] hover:border-[#D4C5A0]/60 hover:text-white transition-colors"
                      >
                        <Github className="w-4 h-4 text-[#D4C5A0]" />
                        <span>SOURCE CODE</span>
                      </a>
                    )}
                  </div>
                </div>
              </section>
            </div>
          )}

          {/* Modal Bottom Footer */}
          <div className="pt-6 border-t border-white/[0.08] flex items-center justify-between">
            <button
              onClick={onClose}
              className="flex items-center gap-2 text-xs font-mono tracking-[0.2em] uppercase text-[#8A959E] hover:text-[#D4C5A0] transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 text-[#D4C5A0]" />
              <span>RETURN TO ALL PROJECTS</span>
            </button>

            <span className="text-[10px] font-mono tracking-widest text-[#8A959E]/60 uppercase">
              ESC TO CLOSE
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
