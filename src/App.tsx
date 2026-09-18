/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { ThreeBackground } from './components/ThreeBackground';
import { Navbar } from './components/Navbar';
import { SideNavigation } from './components/SideNavigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { HowIBuild } from './components/HowIBuild';
import { TechnologyOrbit } from './components/TechnologyOrbit';
import { ProjectSection } from './components/ProjectSection';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Research } from './components/Research';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { RecruiterDrawer } from './components/RecruiterDrawer';
import { CommandPalette } from './components/CommandPalette';
import { NotFound } from './components/NotFound';
import { ProjectModal } from './components/ProjectModal';
import { PROJECTS_DATA } from './data/portfolioData';
import { Project } from './types';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isRecruiterOpen, setIsRecruiterOpen] = useState<boolean>(false);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState<boolean>(false);
  const [selectedProjectForModal, setSelectedProjectForModal] = useState<Project | null>(null);
  const [is404, setIs404] = useState<boolean>(() => {
    return window.location.pathname === '/404' || window.location.hash === '#404';
  });

  // Subtle ambient mouse light tracker
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Sync active section based on scroll position
  useEffect(() => {
    if (is404) return;

    const sections = document.querySelectorAll('section[id]');
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-25% 0px -45% 0px',
        threshold: 0.1,
      }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, [is404]);

  // Global keyboard shortcut: Ctrl+K / Cmd+K for Command Palette
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsCommandPaletteOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Handle hash changes for 404 routing or project deep linking
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#404' || window.location.pathname === '/404') {
        setIs404(true);
        setSelectedProjectForModal(null);
      } else if (hash.startsWith('#project-')) {
        setIs404(false);
        const projectId = hash.replace('#project-', '');
        const found = PROJECTS_DATA.find((p) => p.id === projectId);
        if (found) {
          setSelectedProjectForModal(found);
        }
      } else {
        setIs404(false);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('popstate', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('popstate', handleHashChange);
    };
  }, []);

  const handleOpenProject = (project: Project) => {
    setSelectedProjectForModal(project);
    window.history.pushState(null, '', `#project-${project.id}`);
  };

  const handleOpenProjectById = (projectId: string) => {
    const proj = PROJECTS_DATA.find((p) => p.id === projectId);
    if (proj) {
      handleOpenProject(proj);
    }
  };

  const handleCloseProjectModal = () => {
    setSelectedProjectForModal(null);
    if (window.location.hash.startsWith('#project-')) {
      window.history.pushState(null, '', '#projects');
    }
  };

  if (is404) {
    return (
      <>
        <NotFound
          onReturnHome={() => {
            window.location.hash = '#home';
            setIs404(false);
          }}
          onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
        />
        <CommandPalette
          isOpen={isCommandPaletteOpen}
          onClose={() => setIsCommandPaletteOpen(false)}
          onOpenRecruiter={() => {
            setIs404(false);
            setIsRecruiterOpen(true);
          }}
          onSelectProject={(id) => {
            setIs404(false);
            handleOpenProjectById(id);
          }}
        />
      </>
    );
  }

  return (
    <div className="relative min-h-screen bg-[#05080B] text-[#EDEDE8] selection:bg-[#D4C5A0]/25 selection:text-[#FFFFFF] overflow-x-hidden">
      
      {/* 3D Atmospheric Particle Depth */}
      <ThreeBackground />

      {/* Dynamic Cursor Ambient Radial Lighting */}
      <div
        className="pointer-events-none fixed inset-0 z-10 transition-opacity duration-300"
        style={{
          background: `radial-gradient(700px circle at ${mousePos.x}px ${mousePos.y}px, rgba(212, 197, 160, 0.035), transparent 75%)`,
        }}
      />

      {/* Subtle Background Architectural Gradients */}
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_85%_15%,rgba(212,197,160,0.04),transparent_40%),radial-gradient(circle_at_15%_85%,rgba(16,22,27,0.8),transparent_50%)]" />

      {/* Sticky Top Navigation Bar */}
      <Navbar
        activeSection={activeSection}
        onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
        onOpenRecruiter={() => setIsRecruiterOpen(true)}
      />

      {/* Desktop Left Fixed Navigation Dock (01 - 09) */}
      <SideNavigation activeSection={activeSection} />

      {/* Main Single-Page Content */}
      <main className="relative z-10">
        {/* 01 HOME */}
        <Hero onOpenRecruiter={() => setIsRecruiterOpen(true)} />

        {/* 02 ABOUT */}
        <About />

        {/* 03 HOW I BUILD: ENGINEERING METHODOLOGY */}
        <HowIBuild />

        {/* 04 TECHNOLOGY ORBIT: INTERACTIVE VISUALIZATION */}
        <TechnologyOrbit />

        {/* 05 PROJECTS */}
        <ProjectSection onSelectProject={handleOpenProject} />

        {/* 06 EXPERIENCE */}
        <Experience />

        {/* 07 SKILLS */}
        <Skills />

        {/* 08 RESEARCH */}
        <Research />

        {/* 09 CONTACT */}
        <Contact />
      </main>

      {/* Minimal Editorial Footer */}
      <Footer />

      {/* Recruiter Quick Profile Slide-Over Drawer */}
      <RecruiterDrawer
        isOpen={isRecruiterOpen}
        onClose={() => setIsRecruiterOpen(false)}
        onOpenProject={handleOpenProjectById}
      />

      {/* System Command Palette (Ctrl + K / Cmd + K) */}
      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        onOpenRecruiter={() => setIsRecruiterOpen(true)}
        onSelectProject={handleOpenProjectById}
      />

      {/* Global Project Modal (Single authoritative instance) */}
      {selectedProjectForModal && (
        <ProjectModal
          project={selectedProjectForModal}
          onClose={handleCloseProjectModal}
        />
      )}
    </div>
  );
}
