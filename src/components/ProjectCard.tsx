import React from 'react';
import { ExternalLink, Github, Layers, ArrowUpRight, BookOpen, Clock } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onSelectProject: (project: Project) => void;
  key?: React.Key;
}

export function ProjectCard({ project, onSelectProject }: ProjectCardProps) {
  if (project.isUpcoming) {
    return (
      <article
        id={`project-card-${project.id}`}
        className="group relative flex flex-col justify-between rounded-sm border border-white/[0.08] bg-[#0A0F13]/70 p-6 sm:p-8 backdrop-blur-sm transition-all duration-300 hover:border-[#D4C5A0]/40 hover:bg-[#0A0F13]"
      >
        <div>
          {/* Visual Header */}
          <div className="relative mb-6 h-48 w-full overflow-hidden rounded-[2px] border border-dashed border-white/[0.12] bg-[#05080B] p-6 flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-bold text-[#8A959E]">
                {project.number}
              </span>
              <span className="text-[10px] font-mono tracking-[0.2em] text-[#D4C5A0] uppercase font-semibold">
                COMING SOON
              </span>
            </div>

            <div className="flex items-center gap-3.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-[2px] border border-[#D4C5A0]/30 bg-[#D4C5A0]/10">
                <Layers className="h-5 w-5 text-[#D4C5A0]" />
              </div>
              <div>
                <div className="text-sm font-bold tracking-wider text-[#EDEDE8] font-display">
                  ACTIVE RESEARCH & LABS
                </div>
                <div className="text-[10px] text-[#8A959E] font-mono mt-0.5">
                  DISTRIBUTED SYSTEMS & K8S
                </div>
              </div>
            </div>
          </div>

          <div className="text-[10px] font-mono tracking-[0.25em] text-[#8A959E] uppercase mb-1">
            {project.subtitle}
          </div>

          <h3 className="text-2xl font-bold tracking-tight text-[#EDEDE8] font-display mb-3">
            {project.title}
          </h3>

          <p className="text-xs sm:text-sm text-[#8A959E] leading-relaxed font-body">
            {project.description}
          </p>
        </div>

        <div className="mt-8 pt-5 border-t border-white/[0.06]">
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-[2px] border border-white/[0.06] bg-[#10161B] px-2.5 py-1 text-[10px] font-mono text-[#8A959E]"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#D4C5A0]/80 uppercase">
            <Clock className="w-3.5 h-3.5 text-[#D4C5A0]" />
            <span>IN LAB DEVELOPMENT · 2026</span>
          </div>
        </div>
      </article>
    );
  }

  const isApex = project.id === 'apex-ctrl';

  return (
    <article
      id={`project-card-${project.id}`}
      className={`group relative flex flex-col justify-between rounded-sm border transition-all duration-400 backdrop-blur-sm ${
        isApex
          ? 'md:col-span-2 border-[#D4C5A0]/35 bg-[#0A0F13] p-6 sm:p-9 shadow-[0_20px_50px_rgba(0,0,0,0.7)] hover:border-[#D4C5A0]'
          : 'border-white/[0.08] bg-[#0A0F13] p-6 sm:p-8 hover:border-[#D4C5A0]/50 hover:bg-[#10161B]'
      }`}
    >
      <div>
        {/* Project Image Banner */}
        <div
          onClick={() => onSelectProject(project)}
          className={`relative mb-6 w-full overflow-hidden rounded-[2px] border border-white/[0.08] bg-[#05080B] group cursor-pointer ${
            isApex ? 'h-64 sm:h-72' : 'h-52'
          }`}
        >
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover object-center filter brightness-[0.88] contrast-[1.08] transition-transform duration-700 group-hover:scale-105"
            onError={(e) => {
              const target = e.currentTarget;
              target.style.display = 'none';
            }}
          />

          {/* Vignette Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F13] via-[#0A0F13]/30 to-transparent opacity-90 pointer-events-none" />

          {/* Top badges */}
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-2 rounded-[2px] border border-white/[0.12] bg-[#05080B]/90 px-2.5 py-1 backdrop-blur-md">
                <span className="font-mono text-xs font-bold text-[#D4C5A0]">
                  {project.number}
                </span>
              </div>

              {project.badge && (
                <span className="text-[9px] font-mono tracking-wider uppercase text-[#D4C5A0] border border-[#D4C5A0]/30 bg-[#05080B]/90 px-2 py-1 rounded-[2px] backdrop-blur-md font-semibold hidden sm:inline-block">
                  {project.badge}
                </span>
              )}
            </div>

            {/* Status Indicator */}
            {project.status === 'LIVE' ? (
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-[2px] border border-emerald-500/40 bg-[#05080B]/95 text-emerald-400 font-mono text-[9px] tracking-wider uppercase font-semibold backdrop-blur-md shadow-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>LIVE</span>
              </div>
            ) : project.status === 'ACTIVE BUILD' ? (
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-[2px] border border-amber-500/50 bg-[#05080B]/95 text-amber-300 font-mono text-[9px] tracking-wider uppercase font-bold backdrop-blur-md shadow-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse" />
                <span>● ACTIVE BUILD</span>
              </div>
            ) : project.status === 'IN DEVELOPMENT' ? (
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-[2px] border border-amber-500/40 bg-[#05080B]/95 text-amber-400 font-mono text-[9px] tracking-wider uppercase font-semibold backdrop-blur-md shadow-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse" />
                <span>◐ IN DEV</span>
              </div>
            ) : (
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-[2px] border border-sky-500/40 bg-[#05080B]/95 text-sky-400 font-mono text-[9px] tracking-wider uppercase font-semibold backdrop-blur-md shadow-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                <span>{project.isUpcoming ? 'COMING SOON' : 'CONCEPT'}</span>
              </div>
            )}
          </div>

          {/* Hover Case Study Trigger prompt */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-[2px]">
            <span className="inline-flex items-center gap-2 rounded-[2px] border border-[#D4C5A0] bg-[#05080B]/95 px-4 py-2 text-xs font-mono font-semibold tracking-[0.16em] uppercase text-[#D4C5A0] shadow-xl">
              <BookOpen className="w-3.5 h-3.5" />
              <span>EXPLORE CASE STUDY</span>
            </span>
          </div>

          {/* Bottom Title Overlay */}
          <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between pointer-events-none">
            <div>
              <div className="text-[9px] font-mono tracking-[0.25em] text-[#D4C5A0] uppercase font-semibold">
                {project.subtitle}
              </div>
              <div className={`font-bold tracking-tight text-[#EDEDE8] font-display ${isApex ? 'text-2xl sm:text-3xl' : 'text-xl'}`}>
                {project.title}
              </div>
            </div>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-[#8A959E] leading-relaxed font-body mb-4">
          {project.description}
        </p>
      </div>

      {/* Technologies and Action Links */}
      <div className="mt-6 pt-5 border-t border-white/[0.06]">
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.technologies.slice(0, isApex ? 10 : 7).map((tech) => (
            <span
              key={tech}
              className="rounded-[2px] border border-white/[0.08] bg-[#05080B] px-2.5 py-1 text-[10px] font-mono text-[#D4C5A0]/90"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > (isApex ? 10 : 7) && (
            <span className="rounded-[2px] border border-white/[0.08] bg-[#05080B] px-2 py-1 text-[10px] font-mono text-[#8A959E]">
              +{project.technologies.length - (isApex ? 10 : 7)} more
            </span>
          )}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <button
              id={`project-case-study-${project.id}`}
              onClick={() => onSelectProject(project)}
              className="inline-flex items-center gap-1.5 rounded-[2px] border border-[#D4C5A0]/50 bg-[#10161B] px-3.5 py-1.5 text-xs font-mono font-semibold tracking-wider uppercase text-[#EDEDE8] hover:border-[#D4C5A0] hover:text-[#D4C5A0] transition-colors cursor-pointer"
            >
              <BookOpen className="w-3.5 h-3.5 text-[#D4C5A0]" />
              <span>VIEW CASE STUDY →</span>
            </button>

            {project.live ? (
              <a
                id={`project-live-${project.id}`}
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-xs font-bold tracking-wider uppercase text-[#EDEDE8] hover:text-[#D4C5A0] transition-colors"
              >
                <span>{project.status === 'ACTIVE BUILD' || project.status === 'IN DEVELOPMENT' ? 'LIVE PREVIEW →' : 'LIVE DEMO →'}</span>
                <ArrowUpRight className="h-3.5 w-3.5 text-[#D4C5A0]" />
              </a>
            ) : null}
          </div>

          {project.github && (
            <a
              id={`project-github-${project.id}`}
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono tracking-wider uppercase text-[#8A959E] hover:text-[#EDEDE8] transition-colors"
            >
              <Github className="h-3.5 w-3.5 text-[#D4C5A0]" />
              <span>SOURCE CODE →</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
