import { ArrowRight, Download, Award, Compass, Sparkles, Clock, UserCheck } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { useIstClock } from '../hooks/useIstClock';

interface HeroProps {
  onOpenRecruiter?: () => void;
}

export function Hero({ onOpenRecruiter }: HeroProps) {
  const istTime = useIstClock();

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center pt-28 pb-20 px-6 lg:pl-44 xl:pl-56 lg:pr-12 xl:pr-20 overflow-hidden"
    >
      <div className="mx-auto w-full max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* Left Editorial Copy (7 Cols) */}
        <div className="lg:col-span-7 flex flex-col items-start text-left z-20">
          
          {/* Overline */}
          <div className="inline-flex items-center gap-2.5 rounded-[2px] border border-[#D4C5A0]/25 bg-[#D4C5A0]/5 px-3 py-1 text-[10px] font-mono font-semibold tracking-[0.3em] text-[#D4C5A0] uppercase mb-5">
            <Sparkles className="h-3 w-3 text-[#D4C5A0]" />
            <span>HELLO, I'M</span>
          </div>

          {/* Large Name */}
          <h1
            id="hero-name"
            className="text-5xl sm:text-7xl xl:text-8xl font-black tracking-tight text-[#EDEDE8] leading-[0.94] mb-4 font-display"
          >
            JEETHU <span className="text-[#D4C5A0] font-light">G</span>
          </h1>

          {/* Medium Headline */}
          <h2
            id="hero-title"
            className="text-lg sm:text-xl xl:text-2xl font-bold tracking-[0.12em] text-[#EDEDE8] uppercase leading-snug mb-2 font-display"
          >
            {PERSONAL_INFO.headline}
          </h2>

          {/* Small Sub-headline with gold highlight */}
          <p
            id="hero-specialties"
            className="text-xs sm:text-sm font-semibold tracking-[0.24em] text-[#D4C5A0] uppercase mb-6 font-mono"
          >
            {PERSONAL_INFO.subHeadline}
          </p>

          {/* Short Description */}
          <p
            id="hero-description"
            className="text-sm sm:text-base xl:text-lg leading-relaxed text-[#EDEDE8]/90 max-w-xl mb-3 font-body"
          >
            {PERSONAL_INFO.description}
          </p>

          {/* Supporting line */}
          <p
            id="hero-supporting-line"
            className="text-xs sm:text-sm leading-relaxed text-[#8A959E] max-w-xl mb-8 font-body"
          >
            {PERSONAL_INFO.supportingLine}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-10">
            <a
              id="hero-explore-work"
              href="#projects"
              className="group inline-flex items-center gap-3 rounded-[2px] border border-[#D4C5A0] bg-[#D4C5A0] px-7 py-3.5 text-xs font-bold tracking-[0.18em] uppercase text-[#05080B] transition-all duration-300 hover:bg-white hover:border-white hover:shadow-[0_0_24px_rgba(212,197,160,0.35)]"
            >
              <span>EXPLORE MY WORK</span>
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            {onOpenRecruiter && (
              <button
                id="hero-recruiter-btn"
                onClick={onOpenRecruiter}
                className="group inline-flex items-center gap-2.5 rounded-[2px] border border-[#D4C5A0]/40 bg-[#D4C5A0]/10 px-6 py-3.5 text-xs font-mono font-semibold tracking-[0.18em] uppercase text-[#D4C5A0] transition-all duration-300 hover:bg-[#D4C5A0]/20 hover:border-[#D4C5A0] cursor-pointer"
              >
                <UserCheck className="h-3.5 w-3.5" />
                <span>RECRUITER BRIEF</span>
              </button>
            )}

            <a
              id="hero-download-resume"
              href={PERSONAL_INFO.resumeUrl}
              download="Jeethu_G_Resume.pdf"
              className="group inline-flex items-center gap-3 rounded-[2px] border border-white/[0.15] bg-[#0A0F13]/90 px-6 py-3.5 text-xs font-semibold tracking-[0.18em] uppercase text-[#EDEDE8] transition-all duration-300 hover:border-[#D4C5A0]/60 hover:bg-[#D4C5A0]/10 hover:text-white"
            >
              <Download className="h-3.5 w-3.5 text-[#D4C5A0] transition-transform duration-300 group-hover:-translate-y-0.5" />
              <span>DOWNLOAD RESUME</span>
            </a>
          </div>

          {/* Personal Statement Quote Block */}
          <div
            id="hero-philosophy"
            className="w-full max-w-xl rounded-[3px] border-l-2 border-[#D4C5A0] bg-[#0A0F13]/70 pl-5 pr-4 py-4 backdrop-blur-sm"
          >
            <blockquote className="text-xs sm:text-sm text-[#EDEDE8]/95 italic font-body leading-relaxed whitespace-pre-line">
              "{PERSONAL_INFO.personalStatement.quote}"
            </blockquote>
            <cite className="block mt-2.5 text-[10px] tracking-[0.24em] font-mono uppercase not-italic text-[#D4C5A0] font-semibold">
              — {PERSONAL_INFO.personalStatement.author}
            </cite>
          </div>
        </div>

        {/* Right Cinematic Architectural Visual & Portrait (5 Cols) */}
        <div className="lg:col-span-5 relative flex justify-center items-center py-6">
          <div className="relative w-[310px] h-[390px] sm:w-[380px] sm:h-[480px] xl:w-[420px] xl:h-[520px]">
            
            {/* Dark Architectural Framing & Subtle Ambient Glow */}
            <div className="absolute -inset-4 rounded-xl bg-radial from-[#D4C5A0]/[0.08] via-transparent to-transparent blur-2xl pointer-events-none" />
            
            {/* Geometric architectural backdrop planes */}
            <div className="absolute -top-3 -right-3 h-full w-full rounded-md border border-white/[0.05] bg-[#0A0F13]/50 pointer-events-none" />
            <div className="absolute -bottom-3 -left-3 h-full w-full rounded-md border border-[#D4C5A0]/15 bg-[#10161B]/30 pointer-events-none" />

            {/* Main Portrait Frame with Luxury Rim Lighting */}
            <div
              id="hero-portrait-container"
              className="relative h-full w-full overflow-hidden rounded-sm border border-[#D4C5A0]/30 bg-[#0A0F13] shadow-[0_20px_60px_rgba(0,0,0,0.8),0_0_40px_rgba(212,197,160,0.06)]"
            >
              {/* The Hero Image (Easily replaceable at /public/images/hero.jpg) */}
              <img
                id="hero-image"
                src={PERSONAL_INFO.heroImage}
                alt="Jeethu G - Cloud Engineering Specialist"
                className="h-full w-full object-cover object-center filter contrast-[1.06] brightness-[0.96] transition-all duration-700 hover:scale-105"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (!target.src.includes('profile.jpg')) {
                    target.src = '/assets/profile.jpg';
                  }
                }}
              />

              {/* Seamless environmental vignette gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#05080B] via-[#05080B]/20 to-transparent opacity-85 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#05080B]/50 via-transparent to-[#05080B]/40 pointer-events-none" />

              {/* Bottom Integrated Meta Badge */}
              <div className="absolute bottom-4 inset-x-4 flex items-center justify-between p-3 rounded-[2px] border border-white/[0.08] bg-[#05080B]/85 backdrop-blur-md">
                <div>
                  <div className="text-[10px] font-mono tracking-[0.2em] text-[#D4C5A0] uppercase font-semibold">
                    AWS CERTIFIED
                  </div>
                  <div className="text-[9px] tracking-wider text-[#8A959E] uppercase">
                    Solutions Architect – Associate
                  </div>
                </div>
                <Award className="h-5 w-5 text-[#D4C5A0]" />
              </div>
            </div>

            {/* Architectural Signature Tag */}
            <div
              id="hero-signature"
              className="absolute -top-3 left-4 z-20 rounded-[2px] border border-[#D4C5A0]/40 bg-[#05080B]/95 px-3 py-1 shadow-lg backdrop-blur-md flex items-center gap-2"
            >
              <span className="text-[10px] font-mono tracking-[0.2em] font-semibold text-[#D4C5A0] uppercase">
                ✦ JEETHU G
              </span>
            </div>

            {/* Live IST Floating Pill on Top Right of Card */}
            <div
              id="hero-ist-clock-badge"
              className="absolute -bottom-3 right-4 z-20 rounded-[2px] border border-white/[0.12] bg-[#05080B]/95 px-3 py-1 shadow-lg backdrop-blur-md flex items-center gap-2 text-[9px] font-mono tracking-wider text-[#EDEDE8]"
            >
              <Clock className="w-3 h-3 text-[#D4C5A0]" />
              <span>{istTime.timeStringWithSeconds}</span>
              <span className="text-[#8A959E]">· IST</span>
            </div>

            {/* Subtle Vertical Slogan Markers */}
            <div className="hidden xl:block absolute -left-12 top-16 text-[8px] tracking-[0.35em] font-mono text-[#8A959E]/50 uppercase leading-relaxed select-none">
              BUILD<br />WITH<br />PURPOSE<br />& CARE
            </div>

            <div className="hidden xl:block absolute -right-12 bottom-20 text-[8px] tracking-[0.35em] font-mono text-[#D4C5A0]/60 uppercase leading-relaxed text-right select-none">
              CLOUD<br />CODE<br />AUTOMATE<br />IMPACT
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Horizontal Architectural Separator */}
      <div className="mx-auto w-full max-w-7xl mt-16 pt-8 border-t border-white/[0.06] flex flex-wrap justify-between items-center gap-4 text-[9px] sm:text-[10px] tracking-[0.24em] font-mono text-[#8A959E]/80 uppercase">
        <div className="flex items-center gap-2">
          <Compass className="h-3.5 w-3.5 text-[#D4C5A0]" />
          <span>COIMBATORE, TAMIL NADU, INDIA · {PERSONAL_INFO.coordinates} · IST (UTC +5:30)</span>
        </div>
        <div className="flex items-center gap-6">
          <span>AWS ARCHITECTURES</span>
          <span>•</span>
          <span>GENERATIVE AI</span>
          <span>•</span>
          <span>SRE RELIABILITY</span>
        </div>
      </div>
    </section>
  );
}
