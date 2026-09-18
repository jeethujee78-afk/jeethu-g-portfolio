import { ArrowRight, Award, Briefcase, Database, Zap } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export function About() {
  const stats = [
    {
      value: '6+',
      label: 'YEARS EXPERIENCE',
      sub: 'Production Operations & Cloud',
      icon: <Briefcase className="h-4 w-4 text-[#D4C5A0]" />,
    },
    {
      value: 'AWS',
      label: 'CERTIFIED SOLUTIONS ARCHITECT',
      sub: 'Associate Level Credential',
      icon: <Award className="h-4 w-4 text-[#D4C5A0]" />,
    },
    {
      value: '2+',
      label: 'MAJOR CLOUD PROJECTS',
      sub: 'Production & Live Architectures',
      icon: <Database className="h-4 w-4 text-[#D4C5A0]" />,
    },
    {
      value: 'HANDS-ON BUILDING',
      sub: 'Cloud + AI + Automation',
      icon: <Zap className="h-4 w-4 text-[#D4C5A0]" />,
    },
  ];

  return (
    <section
      id="about"
      className="relative py-28 px-6 lg:pl-44 xl:pl-56 lg:pr-12 xl:pr-20 border-t border-white/[0.06] bg-[#0A0F13]/50"
    >
      <div className="mx-auto max-w-7xl">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text Narrative (6 Cols) */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <p className="text-[10px] tracking-[0.32em] font-mono font-semibold text-[#D4C5A0] uppercase mb-3">
              02 / ABOUT ME
            </p>

            <h2 className="text-3xl sm:text-5xl xl:text-6xl font-black tracking-tight text-[#EDEDE8] font-display leading-[1.02] mb-8">
              FROM OPERATIONS
              <br />
              <span className="text-[#D4C5A0] font-light italic">TO CLOUD & AI</span>
            </h2>

            <div className="space-y-5 text-sm sm:text-base leading-relaxed text-[#EDEDE8]/85 font-body">
              <p>
                I'm Jeethu G, an AWS Certified Cloud Engineer with 6+ years of professional experience across production operations, SME support and process-driven environments.
              </p>
              <p>
                Alongside my professional experience, I have built practical cloud and AI projects to strengthen my engineering capabilities — from serverless AWS applications to an AI-powered F1 telemetry platform.
              </p>
              <p className="text-xs sm:text-sm text-[#8A959E] border-l-2 border-[#D4C5A0]/60 pl-4 py-1.5 leading-relaxed">
                My background in operations taught me the importance of reliability, monitoring, process efficiency and problem solving. Now I apply that same mindset to cloud architecture, infrastructure automation and AI integration.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                id="about-experience-link"
                href="#experience"
                className="inline-flex items-center gap-3 rounded-[2px] border border-[#D4C5A0]/35 bg-[#10161B] px-6 py-3 text-xs font-semibold tracking-[0.2em] uppercase text-[#EDEDE8] transition-all duration-300 hover:border-[#D4C5A0] hover:bg-[#D4C5A0]/10 hover:text-white cursor-pointer"
              >
                <span>EXPLORE EXPERIENCE</span>
                <ArrowRight className="h-3.5 w-3.5 text-[#D4C5A0]" />
              </a>

              <a
                id="about-resume-link"
                href={PERSONAL_INFO.resumeUrl}
                download="Jeethu_G_Resume.pdf"
                className="inline-flex items-center gap-2 rounded-[2px] border border-white/[0.1] bg-[#0A0F13] px-5 py-3 text-xs font-mono tracking-[0.16em] uppercase text-[#8A959E] hover:text-[#EDEDE8] hover:border-white/[0.2] transition-colors"
              >
                <span>VIEW RESUME</span>
              </a>
            </div>
          </div>

          {/* Right Cinematic Architectural Visual (6 Cols) */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-lg aspect-[16/11] rounded-sm border border-[#D4C5A0]/25 bg-[#05080B] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.7)] group">
              
              {/* Architectural Image */}
              <img
                id="about-cinematic-image"
                src={PERSONAL_INFO.aboutImage}
                alt="Architectural Cloud & Nature Environment"
                className="h-full w-full object-cover object-center filter contrast-[1.05] brightness-[0.9] transition-transform duration-1000 group-hover:scale-105"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (!target.src.endsWith('/images/about.jpg')) {
                    target.src = '/images/about.jpg';
                  } else {
                    target.style.display = 'none';
                  }
                }}
              />

              {/* Cinematic Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#05080B] via-transparent to-transparent opacity-80 pointer-events-none" />
              <div className="absolute inset-0 bg-radial from-transparent via-[#05080B]/20 to-[#05080B]/60 pointer-events-none" />

              {/* Bottom Architectural Caption */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between p-3 rounded-[2px] border border-white/[0.08] bg-[#05080B]/85 backdrop-blur-md">
                <div className="text-[10px] font-mono tracking-[0.2em] uppercase text-[#D4C5A0]">
                  ARCHITECTURAL DISCIPLINE
                </div>
                <div className="text-[9px] font-mono tracking-widest text-[#8A959E] uppercase">
                  OPERATIONS × CLOUD × RESILIENCE
                </div>
              </div>

              {/* Top Accent Badge */}
              <div className="absolute top-4 left-4 px-2.5 py-1 rounded-[2px] border border-white/[0.1] bg-[#05080B]/80 backdrop-blur-sm text-[9px] font-mono tracking-widest text-[#8A959E] uppercase">
                COIMBATORE, TAMIL NADU
              </div>
            </div>
          </div>
        </div>

        {/* Statistics Grid */}
        <div
          id="about-statistics-grid"
          className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col justify-between rounded-sm border border-white/[0.06] bg-[#0A0F13] p-6 transition-all duration-300 hover:border-[#D4C5A0]/40 hover:bg-[#10161B]"
            >
              <div className="flex items-start justify-between mb-4">
                <span
                  className={`${
                    stat.value.length > 5
                      ? 'text-lg sm:text-xl xl:text-2xl font-black text-[#EDEDE8] font-display leading-[1.12] tracking-tight'
                      : 'text-3xl sm:text-4xl font-black text-[#EDEDE8] font-display'
                  }`}
                >
                  {stat.value}
                </span>
                <div className="p-2 rounded-[2px] border border-[#D4C5A0]/20 bg-[#D4C5A0]/5 shrink-0 ml-2">
                  {stat.icon}
                </div>
              </div>
              <div>
                {stat.label && (
                  <div className="text-xs font-bold tracking-[0.14em] text-[#EDEDE8] font-mono uppercase mb-1">
                    {stat.label}
                  </div>
                )}
                <div className="text-[11px] text-[#8A959E] leading-normal">
                  {stat.sub}
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#D4C5A0] opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
