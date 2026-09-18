interface SideNavigationProps {
  activeSection: string;
}

export function SideNavigation({ activeSection }: SideNavigationProps) {
  const navItems = [
    { id: 'home', num: '01', label: 'HOME' },
    { id: 'about', num: '02', label: 'ABOUT' },
    { id: 'how-i-build', num: '03', label: 'METHOD' },
    { id: 'technology-orbit', num: '04', label: 'ORBIT' },
    { id: 'projects', num: '05', label: 'PROJECTS' },
    { id: 'experience', num: '06', label: 'EXP' },
    { id: 'skills', num: '07', label: 'SKILLS' },
    { id: 'research', num: '08', label: 'IDEAS' },
    { id: 'contact', num: '09', label: 'CONTACT' },
  ];

  return (
    <aside
      id="desktop-side-nav"
      aria-label="Section Navigation"
      className="hidden lg:flex fixed left-8 xl:left-12 top-36 z-30 flex-col gap-8 select-none"
    >
      <nav className="flex flex-col gap-4">
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              id={`side-nav-${item.id}`}
              className={`group flex items-center gap-3.5 text-[11px] tracking-[0.2em] uppercase transition-all duration-300 ${
                isActive
                  ? 'text-[#EDEDE8] font-semibold translate-x-1.5'
                  : 'text-[#8A959E]/70 hover:text-[#EDEDE8]'
              }`}
            >
              <span
                className={`flex h-5 w-5 items-center justify-center rounded-[2px] font-mono text-[9px] transition-all duration-300 ${
                  isActive
                    ? 'border border-[#D4C5A0] bg-[#D4C5A0]/15 text-[#D4C5A0]'
                    : 'border border-white/[0.08] bg-[#0A0F13]/60 text-[#8A959E]/60 group-hover:border-white/[0.2] group-hover:text-[#EDEDE8]'
                }`}
              >
                {item.num}
              </span>
              <span className="relative">
                {item.label}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 right-0 h-[1.5px] bg-[#D4C5A0] shadow-[0_0_8px_rgba(212,197,160,0.8)]" />
                )}
              </span>
            </a>
          );
        })}
      </nav>

      {/* Vertical Architectural Motto */}
      <div
        id="side-architectural-words"
        className="mt-6 border-l border-white/[0.08] pl-3.5 text-[9px] tracking-[0.3em] font-mono text-[#8A959E]/60 uppercase leading-loose"
      >
        BUILD<br />
        AUTOMATE<br />
        SOLVE<br />
        DELIVER
      </div>
    </aside>
  );
}
