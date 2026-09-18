import React, { useState, useEffect } from 'react';
import { ArrowDown, Layers, Sparkles } from 'lucide-react';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';
import { PROJECTS_DATA } from '../data/portfolioData';
import { Project } from '../types';

interface ProjectSectionProps {
  onSelectProject?: (project: Project) => void;
}

export function ProjectSection({ onSelectProject }: ProjectSectionProps = {}) {
  const [internalSelectedProject, setInternalSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('ALL');

  const filterCategories = [
    'ALL',
    'CLOUD',
    'AI',
    'AWS',
    'WEB',
    'E-COMMERCE',
    'SPORTS',
    'AUTOMATION',
  ];

  const filteredProjects = PROJECTS_DATA.filter((project) => {
    if (activeFilter === 'ALL') return true;
    return project.filterCategories?.includes(activeFilter as any);
  });

  // Deep linking and browser back button support if not externally controlled
  useEffect(() => {
    if (onSelectProject) return;

    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#project-')) {
        const projectId = hash.replace('#project-', '');
        const found = PROJECTS_DATA.find((p) => p.id === projectId);
        if (found) {
          setInternalSelectedProject(found);
        }
      } else if (internalSelectedProject && !hash.startsWith('#project-')) {
        setInternalSelectedProject(null);
      }
    };

    // Check initial hash on mount
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('popstate', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('popstate', handleHashChange);
    };
  }, [internalSelectedProject, onSelectProject]);

  const handleOpenProject = (project: Project) => {
    if (onSelectProject) {
      onSelectProject(project);
    } else {
      setInternalSelectedProject(project);
      window.history.pushState(null, '', `#project-${project.id}`);
    }
  };

  const handleCloseProject = () => {
    setInternalSelectedProject(null);
    if (window.location.hash.startsWith('#project-')) {
      window.history.pushState(null, '', '#projects');
    }
  };

  return (
    <>
      <section
        id="projects"
        className="relative py-28 px-6 lg:pl-44 xl:pl-56 lg:pr-12 xl:pr-20 border-t border-white/[0.06] bg-[#05080B]"
      >
        <div className="mx-auto max-w-7xl">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div>
              <p className="text-[10px] tracking-[0.32em] font-mono font-semibold text-[#D4C5A0] uppercase mb-3 flex items-center gap-2">
                <Sparkles className="w-3 h-3 text-[#D4C5A0]" />
                <span>05 / FEATURED PROJECTS</span>
              </p>
              <h2 className="text-3xl sm:text-5xl xl:text-6xl font-black tracking-tight text-[#EDEDE8] font-display leading-[1.02]">
                PRACTICAL ENGINEERING.
                <br />
                <span className="text-[#D4C5A0] font-light italic">CLOUD & INTELLIGENCE.</span>
              </h2>
            </div>

            <div className="flex items-center gap-6 text-[#8A959E] max-w-md">
              <p className="text-xs sm:text-sm leading-relaxed font-body">
                Hands-on architectures deployed with AWS managed services, containerized workloads, serverless workflows, and real generative AI integrations.
              </p>
              <a
                href="#projects-grid"
                aria-label="Scroll to project grid"
                className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-[2px] border border-white/[0.1] text-[#D4C5A0] hover:border-[#D4C5A0] hover:bg-[#D4C5A0]/10 transition-colors"
              >
                <ArrowDown className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Filter Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-6 border-b border-white/[0.06]">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[10px] font-mono tracking-widest text-[#8A959E] uppercase mr-2 hidden sm:inline">
                FILTER BY DOMAIN:
              </span>
              {filterCategories.map((cat) => {
                const isActive = activeFilter === cat;
                return (
                  <button
                    key={cat}
                    id={`project-filter-${cat.toLowerCase()}`}
                    onClick={() => setActiveFilter(cat)}
                    className={`px-3 py-1.5 rounded-[2px] text-xs font-mono tracking-wider transition-all duration-200 cursor-pointer ${
                      isActive
                        ? 'border border-[#D4C5A0] bg-[#D4C5A0]/20 text-[#D4C5A0] font-bold shadow-[0_0_15px_rgba(212,197,160,0.15)]'
                        : 'border border-white/[0.08] bg-[#0A0F13] text-[#8A959E] hover:border-white/[0.2] hover:text-[#EDEDE8]'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            <div className="text-xs font-mono text-[#8A959E]">
              SHOWING <span className="text-[#D4C5A0] font-bold">{filteredProjects.length}</span> OF {PROJECTS_DATA.length} PROJECTS
            </div>
          </div>

          {/* Projects Grid */}
          <div
            id="projects-grid"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8 items-start"
          >
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onSelectProject={handleOpenProject}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Project Detail Modal if not externally managed */}
      {!onSelectProject && internalSelectedProject && (
        <ProjectModal
          project={internalSelectedProject}
          onClose={handleCloseProject}
        />
      )}
    </>
  );
}
