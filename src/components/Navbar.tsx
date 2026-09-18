import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Clock, Search, UserCheck } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { useIstClock } from '../hooks/useIstClock';

interface NavbarProps {
  activeSection: string;
  onOpenCommandPalette: () => void;
  onOpenRecruiter: () => void;
}

export function Navbar({ activeSection, onOpenCommandPalette, onOpenRecruiter }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const istTime = useIstClock();

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: '01 HOME' },
    { href: '#about', label: '02 ABOUT' },
    { href: '#how-i-build', label: '03 METHODOLOGY' },
    { href: '#technology-orbit', label: '04 TECH ORBIT' },
    { href: '#projects', label: '05 PROJECTS' },
    { href: '#experience', label: '06 EXPERIENCE' },
    { href: '#skills', label: '07 SKILLS' },
    { href: '#research', label: '08 IDEAS & ENG' },
    { href: '#contact', label: '09 CONTACT' },
  ];

  return (
    <>
      {/* Precision scroll progress indicator */}
      <div
        id="scroll-progress"
        className="fixed top-0 left-0 h-[1.5px] bg-[#D4C5A0] z-50 shadow-[0_0_8px_rgba(212,197,160,0.8)] transition-all duration-75"
        style={{ width: `${scrollProgress}%` }}
      />

      <header
        id="main-navbar"
        className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between border-b border-white/[0.06] bg-[#05080B]/90 px-6 py-3.5 backdrop-blur-md transition-all duration-300 lg:px-12"
      >
        {/* Top-Left: JG Monogram & Identity */}
        <a
          id="nav-logo"
          href="#home"
          className="group flex items-center gap-3.5 no-underline"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-[3px] border border-[#D4C5A0]/30 bg-[#10161B] text-xs font-bold tracking-wider text-[#D4C5A0] transition-colors group-hover:border-[#D4C5A0] group-hover:bg-[#D4C5A0]/10">
            {PERSONAL_INFO.monogram}
          </span>
          <div className="leading-tight">
            <div className="text-sm font-bold tracking-[0.15em] text-[#EDEDE8] font-display">
              {PERSONAL_INFO.name}
            </div>
            <div className="text-[9px] tracking-[0.2em] font-medium text-[#8A959E] uppercase">
              {PERSONAL_INFO.subHeadline}
            </div>
          </div>
        </a>

        {/* Top-Right: Location, Live IST Clock & Action CTAs */}
        <div className="flex items-center gap-3 sm:gap-4 lg:gap-5">
          {/* Command Palette Trigger */}
          <button
            id="nav-command-palette-btn"
            onClick={onOpenCommandPalette}
            className="flex items-center gap-2 rounded-[2px] border border-white/[0.1] bg-[#0A0F13] px-2.5 py-1.5 text-xs font-mono text-[#8A959E] hover:border-[#D4C5A0]/60 hover:text-[#EDEDE8] transition-colors cursor-pointer"
            title="Open Command Palette (Ctrl + K)"
          >
            <Search className="w-3.5 h-3.5 text-[#D4C5A0]" />
            <span className="hidden sm:inline text-[11px] text-[#EDEDE8]">SEARCH</span>
            <kbd className="hidden sm:inline text-[9px] bg-white/[0.08] px-1.5 py-0.5 rounded border border-white/[0.1] text-[#D4C5A0]">
              ⌘K
            </kbd>
          </button>

          {/* Quick Recruiter Profile Trigger */}
          <button
            id="nav-recruiter-brief-btn"
            onClick={onOpenRecruiter}
            className="hidden md:inline-flex items-center gap-1.5 rounded-[2px] border border-[#D4C5A0]/40 bg-[#D4C5A0]/10 px-3 py-1.5 text-xs font-mono font-semibold tracking-wider text-[#D4C5A0] hover:bg-[#D4C5A0]/20 hover:border-[#D4C5A0] transition-all cursor-pointer shadow-sm"
          >
            <UserCheck className="w-3.5 h-3.5" />
            <span>RECRUITER BRIEF</span>
          </button>

          <div
            id="nav-meta-location"
            className="hidden xl:flex flex-col text-right text-[10px] tracking-[0.16em] uppercase leading-tight text-[#8A959E]"
          >
            <div className="font-semibold text-[#EDEDE8] flex items-center justify-end gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#D4C5A0] animate-pulse" />
              <span>{istTime.location}</span>
            </div>
            <div className="text-[#D4C5A0] font-mono text-[10px] mt-0.5 font-medium flex items-center justify-end gap-1">
              <Clock className="w-2.5 h-2.5 text-[#D4C5A0]/80" />
              <span>{istTime.timeStringWithSeconds}</span>
              <span className="text-[#8A959E] text-[9px]">· {istTime.timezoneLabel}</span>
            </div>
          </div>

          <a
            id="nav-connect-button"
            href="#contact"
            className="group hidden sm:inline-flex items-center gap-2 rounded-[2px] border border-[#D4C5A0]/35 bg-[#10161B] px-3.5 py-1.5 text-xs font-semibold tracking-[0.18em] uppercase text-[#EDEDE8] transition-all duration-300 hover:border-[#D4C5A0] hover:bg-[#D4C5A0]/10 hover:text-white"
          >
            <span>CONNECT</span>
            <ArrowUpRight className="h-3.5 w-3.5 text-[#D4C5A0] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          {/* Mobile menu toggle */}
          <button
            id="mobile-menu-button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="flex h-9 w-9 items-center justify-center rounded-[2px] border border-white/[0.1] bg-[#0A0F13] text-[#EDEDE8] lg:hidden hover:border-[#D4C5A0]/50 hover:text-[#D4C5A0] cursor-pointer"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-drawer"
          className="fixed top-[61px] inset-x-0 z-40 border-b border-white/[0.08] bg-[#0A0F13]/98 px-6 py-6 backdrop-blur-xl lg:hidden flex flex-col gap-4 shadow-2xl max-h-[calc(100vh-61px)] overflow-y-auto"
        >
          {/* Mobile Quick Action Buttons */}
          <div className="grid grid-cols-2 gap-2 pb-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenRecruiter();
              }}
              className="flex items-center justify-center gap-1.5 rounded-[2px] border border-[#D4C5A0] bg-[#D4C5A0]/10 p-2.5 text-xs font-mono font-bold text-[#D4C5A0]"
            >
              <UserCheck className="w-3.5 h-3.5" />
              <span>RECRUITER BRIEF</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCommandPalette();
              }}
              className="flex items-center justify-center gap-1.5 rounded-[2px] border border-white/[0.15] bg-[#10161B] p-2.5 text-xs font-mono text-[#EDEDE8]"
            >
              <Search className="w-3.5 h-3.5 text-[#D4C5A0]" />
              <span>CTRL + K</span>
            </button>
          </div>

          <div className="text-[10px] tracking-[0.25em] text-[#D4C5A0] font-mono uppercase font-semibold">
            NAVIGATION
          </div>
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => {
              const secId = link.href.replace('#', '');
              const isActive = activeSection === secId;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm tracking-[0.16em] uppercase py-1.5 transition-colors ${
                    isActive
                      ? 'font-bold text-[#D4C5A0]'
                      : 'text-[#8A959E] hover:text-[#EDEDE8]'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>
          <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs text-[#8A959E]">
            <div className="flex flex-col">
              <span className="text-[#EDEDE8] font-medium">{istTime.location}</span>
              <span className="text-[10px] text-[#8A959E]">{istTime.dateString}</span>
            </div>
            <div className="text-right font-mono text-[#D4C5A0]">
              <div>{istTime.timeStringWithSeconds}</div>
              <div className="text-[9px] text-[#8A959E]">{istTime.timezoneLabel}</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
