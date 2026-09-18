import React, { useState, useEffect, useRef } from 'react';
import { 
  Search, 
  CornerDownLeft, 
  Home, 
  User, 
  Layers, 
  Briefcase, 
  Wrench, 
  Sparkles, 
  Mail, 
  Download, 
  Github, 
  FileCode, 
  ExternalLink,
  Compass,
  Cpu,
  ArrowRight
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export interface CommandItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'NAVIGATION' | 'PROJECTS' | 'SYSTEM' | 'ACTIONS';
  icon: React.ElementType;
  shortcut?: string;
  action: () => void;
}

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenRecruiter: () => void;
  onSelectProject: (projectId: string) => void;
}

export function CommandPalette({
  isOpen,
  onClose,
  onOpenRecruiter,
  onSelectProject,
}: CommandPaletteProps) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const commands: CommandItem[] = [
    {
      id: 'nav-home',
      title: 'Home / Mission Control',
      subtitle: 'Hero overview and live Indian Standard Time status',
      category: 'NAVIGATION',
      icon: Home,
      action: () => {
        window.location.hash = '#home';
        onClose();
      },
    },
    {
      id: 'nav-about',
      title: 'About Jeethu G',
      subtitle: 'Background, 6+ years operations context, and credentials',
      category: 'NAVIGATION',
      icon: User,
      action: () => {
        window.location.hash = '#about';
        onClose();
      },
    },
    {
      id: 'nav-methodology',
      title: 'How I Build (Engineering Methodology)',
      subtitle: '3-stage approach: Understand → Build → Improve',
      category: 'NAVIGATION',
      icon: Compass,
      action: () => {
        window.location.hash = '#how-i-build';
        onClose();
      },
    },
    {
      id: 'nav-orbit',
      title: 'Technology Orbit Visualization',
      subtitle: 'Interactive map: AWS, Cloud, AI, DevOps, Automation, Data',
      category: 'NAVIGATION',
      icon: Cpu,
      action: () => {
        window.location.hash = '#technology-orbit';
        onClose();
      },
    },
    {
      id: 'nav-projects',
      title: 'All Projects',
      subtitle: 'Engineered cloud systems, AI platforms, and web deployments',
      category: 'NAVIGATION',
      icon: Layers,
      action: () => {
        window.location.hash = '#projects';
        onClose();
      },
    },
    {
      id: 'proj-apex',
      title: 'APEX CTRL — Flagship Case Study',
      subtitle: 'F1 telemetry platform, AWS ECS Fargate, DynamoDB & Gemini AI',
      category: 'PROJECTS',
      icon: FileCode,
      shortcut: '★ FLAGSHIP',
      action: () => {
        onSelectProject('apex-ctrl');
        onClose();
      },
    },
    {
      id: 'proj-serverless',
      title: 'Serverless File Platform',
      subtitle: 'API Gateway, Lambda, S3 Pre-Signed URLs, DynamoDB indexing',
      category: 'PROJECTS',
      icon: FileCode,
      action: () => {
        onSelectProject('serverless-file-platform');
        onClose();
      },
    },
    {
      id: 'proj-aniva',
      title: 'ANIVA',
      subtitle: '● ACTIVE BUILD · E-commerce platform, custom apparel & circular marketplace',
      category: 'PROJECTS',
      icon: FileCode,
      shortcut: '● ACTIVE',
      action: () => {
        onSelectProject('aniva');
        onClose();
      },
    },
    {
      id: 'proj-jaihind',
      title: 'Jai Hind Sports',
      subtitle: '● ACTIVE BUILD · Digital showroom & sports discovery platform (Coimbatore)',
      category: 'PROJECTS',
      icon: FileCode,
      shortcut: '● ACTIVE',
      action: () => {
        onSelectProject('jai-hind-sports');
        onClose();
      },
    },
    {
      id: 'nav-experience',
      title: 'Professional Experience Timeline',
      subtitle: 'Aceolution India (15,000+ files daily), Technosoft, Justdial',
      category: 'NAVIGATION',
      icon: Briefcase,
      action: () => {
        window.location.hash = '#experience';
        onClose();
      },
    },
    {
      id: 'nav-skills',
      title: 'Skills & Capabilities',
      subtitle: 'App Dev, DevOps, AI, Data & Automation, Cloud Knowledge',
      category: 'NAVIGATION',
      icon: Wrench,
      action: () => {
        window.location.hash = '#skills';
        onClose();
      },
    },
    {
      id: 'nav-research',
      title: 'Exploring',
      subtitle: 'Things I\'m learning, building and experimenting with',
      category: 'NAVIGATION',
      icon: Sparkles,
      action: () => {
        window.location.hash = '#research';
        onClose();
      },
    },
    {
      id: 'action-recruiter',
      title: 'Recruiter Quick Profile',
      subtitle: 'One-click candidate summary, credentials, and ATS blurb',
      category: 'ACTIONS',
      icon: User,
      shortcut: 'QUICK VIEW',
      action: () => {
        onClose();
        setTimeout(onOpenRecruiter, 150);
      },
    },
    {
      id: 'action-resume',
      title: 'Download Resume (PDF)',
      subtitle: 'Verified single-page resume with professional history and cloud credentials',
      category: 'ACTIONS',
      icon: Download,
      action: () => {
        const link = document.createElement('a');
        link.href = PERSONAL_INFO.resumeUrl;
        link.download = 'Jeethu_G_Resume.pdf';
        link.target = '_blank';
        link.rel = 'noreferrer';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        onClose();
      },
    },
    {
      id: 'action-github',
      title: 'View GitHub Profile',
      subtitle: 'jeethujee78-afk source repositories and commit logs',
      category: 'ACTIONS',
      icon: Github,
      action: () => {
        const link = document.createElement('a');
        link.href = PERSONAL_INFO.github;
        link.target = '_blank';
        link.rel = 'noreferrer';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        onClose();
      },
    },
    {
      id: 'nav-contact',
      title: 'Contact & Connect',
      subtitle: 'Direct email, LinkedIn, location, and collaboration inquiries',
      category: 'NAVIGATION',
      icon: Mail,
      action: () => {
        window.location.hash = '#contact';
        onClose();
      },
    },
  ];

  // Filter commands by search query
  const filteredCommands = commands.filter((cmd) => {
    const q = query.toLowerCase().trim();
    if (!q) return true;
    return (
      cmd.title.toLowerCase().includes(q) ||
      cmd.subtitle.toLowerCase().includes(q) ||
      cmd.category.toLowerCase().includes(q)
    );
  });

  // Reset selected index when filtered list changes
  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
      setQuery('');
      setSelectedIndex(0);
    }
  }, [isOpen]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) =>
          prev < filteredCommands.length - 1 ? prev + 1 : 0
        );
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) =>
          prev > 0 ? prev - 1 : filteredCommands.length - 1
        );
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filteredCommands[selectedIndex]) {
          filteredCommands[selectedIndex].action();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, selectedIndex, filteredCommands, onClose]);

  // Scroll active item into view
  useEffect(() => {
    if (listRef.current) {
      const activeEl = listRef.current.querySelector(
        `[data-command-index="${selectedIndex}"]`
      ) as HTMLElement | null;
      if (activeEl) {
        activeEl.scrollIntoView({ block: 'nearest' });
      }
    }
  }, [selectedIndex]);

  if (!isOpen) return null;

  return (
    <div
      id="command-palette-backdrop"
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/85 backdrop-blur-md transition-opacity duration-200"
      onClick={onClose}
    >
      <div
        id="command-palette-container"
        className="w-full max-w-2xl rounded-sm border border-[#D4C5A0]/40 bg-[#090D11] shadow-[0_20px_70px_rgba(0,0,0,0.9),0_0_50px_rgba(212,197,160,0.1)] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="relative flex items-center border-b border-white/[0.08] px-4 py-3.5 bg-[#05080B]">
          <Search className="h-4 w-4 text-[#D4C5A0] shrink-0 mr-3" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command or jump to section (e.g. APEX, Resume, Skills)..."
            className="w-full bg-transparent text-sm text-[#EDEDE8] placeholder-[#8A959E] focus:outline-none font-body"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-xs font-mono text-[#8A959E] hover:text-[#EDEDE8] px-2 py-0.5"
            >
              Clear
            </button>
          )}
          <kbd className="hidden sm:inline-block px-2 py-0.5 rounded-[2px] border border-white/[0.1] bg-[#0A0F13] text-[10px] font-mono text-[#8A959E] ml-2">
            ESC
          </kbd>
        </div>

        {/* Command List */}
        <div
          ref={listRef}
          className="max-h-[380px] overflow-y-auto p-2 divide-y divide-white/[0.04]"
        >
          {filteredCommands.length === 0 ? (
            <div className="p-8 text-center text-xs font-mono text-[#8A959E]">
              No matching architectural command found for "{query}"
            </div>
          ) : (
            filteredCommands.map((cmd, idx) => {
              const isSelected = selectedIndex === idx;
              const Icon = cmd.icon;

              return (
                <button
                  key={cmd.id}
                  data-command-index={idx}
                  onClick={cmd.action}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`w-full flex items-center justify-between p-3 rounded-[2px] text-left transition-all duration-150 cursor-pointer ${
                    isSelected
                      ? 'bg-[#D4C5A0]/15 text-white border border-[#D4C5A0]/50'
                      : 'text-[#8A959E] hover:bg-[#0E141A]'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0 pr-4">
                    <div
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-[2px] border ${
                        isSelected
                          ? 'border-[#D4C5A0] bg-[#D4C5A0]/20 text-[#D4C5A0]'
                          : 'border-white/[0.08] bg-[#05080B] text-[#8A959E]'
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                    </div>

                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span
                          className={`text-xs font-bold font-display uppercase tracking-wide truncate ${
                            isSelected ? 'text-[#EDEDE8]' : 'text-[#EDEDE8]/90'
                          }`}
                        >
                          {cmd.title}
                        </span>
                        {cmd.shortcut && (
                          <span className="px-1.5 py-0.2 rounded-[2px] border border-[#D4C5A0]/40 bg-[#D4C5A0]/10 text-[9px] font-mono text-[#D4C5A0]">
                            {cmd.shortcut}
                          </span>
                        )}
                      </div>
                      <div className="text-[11px] text-[#8A959E] truncate font-body">
                        {cmd.subtitle}
                      </div>
                    </div>
                  </div>

                  <div className="shrink-0 flex items-center gap-2">
                    <span className="text-[9px] font-mono tracking-widest text-[#8A959E]/60 uppercase hidden sm:inline">
                      {cmd.category}
                    </span>
                    {isSelected && (
                      <CornerDownLeft className="h-3.5 w-3.5 text-[#D4C5A0]" />
                    )}
                  </div>
                </button>
              );
            })
          )}
        </div>

        {/* Footer Shortcut Legend */}
        <div className="flex items-center justify-between border-t border-white/[0.08] bg-[#05080B] px-4 py-2.5 text-[10px] font-mono text-[#8A959E]">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 rounded border border-white/[0.1] bg-[#0A0F13]">↑</kbd>
              <kbd className="px-1.5 py-0.5 rounded border border-white/[0.1] bg-[#0A0F13]">↓</kbd>
              <span>Navigate</span>
            </span>
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 rounded border border-white/[0.1] bg-[#0A0F13]">↵</kbd>
              <span>Select</span>
            </span>
          </div>
          <span className="text-[#D4C5A0]">Press ESC to dismiss</span>
        </div>
      </div>
    </div>
  );
}
