import { Linkedin, Github, Cloud, Mail, ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="main-footer"
      className="relative border-t border-white/[0.06] bg-[#05080B] py-14 px-6 lg:pl-44 xl:pl-56 lg:pr-12 xl:pr-20"
    >
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
        
        {/* Left Brand Identity */}
        <div className="flex items-center gap-4">
          <span className="flex h-10 w-10 items-center justify-center rounded-[2px] border border-[#D4C5A0]/30 bg-[#10161B] text-xs font-bold text-[#D4C5A0]">
            {PERSONAL_INFO.monogram}
          </span>
          <div>
            <div className="text-base font-bold tracking-[0.16em] text-[#EDEDE8] font-display">
              {PERSONAL_INFO.name}
            </div>
            <div className="text-[9px] font-mono tracking-[0.22em] text-[#8A959E] uppercase">
              AWS CLOUD | AI | DEVOPS | SRE
            </div>
          </div>
        </div>

        {/* Center Tagline */}
        <p className="text-xs text-[#8A959E] font-body max-w-sm text-center">
          Open to opportunities, collaborations and technical engineering conversations.
        </p>

        {/* Right Social Icons & Back to Top */}
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-3">
            <a
              id="footer-social-linkedin"
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn Profile"
              className="flex h-8 w-8 items-center justify-center rounded-[2px] border border-white/[0.08] bg-[#0A0F13] text-[#8A959E] hover:border-[#D4C5A0] hover:text-[#D4C5A0] transition-colors"
            >
              <Linkedin className="h-4 w-4" />
            </a>

            <a
              id="footer-social-github"
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub Profile"
              className="flex h-8 w-8 items-center justify-center rounded-[2px] border border-white/[0.08] bg-[#0A0F13] text-[#8A959E] hover:border-[#D4C5A0] hover:text-[#D4C5A0] transition-colors"
            >
              <Github className="h-4 w-4" />
            </a>

            <a
              id="footer-social-email"
              href={`mailto:${PERSONAL_INFO.email}`}
              aria-label="Send Email"
              className="flex h-8 w-8 items-center justify-center rounded-[2px] border border-white/[0.08] bg-[#0A0F13] text-[#8A959E] hover:border-[#D4C5A0] hover:text-[#D4C5A0] transition-colors"
            >
              <Mail className="h-4 w-4" />
            </a>

            <a
              id="footer-social-aws"
              href="#about"
              aria-label="AWS Architecture Credential"
              className="flex h-8 w-8 items-center justify-center rounded-[2px] border border-white/[0.08] bg-[#0A0F13] text-[#8A959E] hover:border-[#D4C5A0] hover:text-[#D4C5A0] transition-colors"
            >
              <Cloud className="h-4 w-4" />
            </a>
          </div>

          <button
            id="footer-back-to-top"
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="flex h-8 w-8 items-center justify-center rounded-[2px] border border-[#D4C5A0]/30 bg-[#D4C5A0]/10 text-[#D4C5A0] hover:bg-[#D4C5A0]/20 transition-colors cursor-pointer"
          >
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Copyright Line */}
      <div className="mx-auto max-w-7xl mt-8 pt-6 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between text-[10px] font-mono tracking-widest text-[#8A959E]/70 uppercase gap-2">
        <div>© 2026 JEETHU G. ALL RIGHTS RESERVED.</div>
        <div className="text-center sm:text-right text-[#D4C5A0]/80">
          BUILT INDEPENDENTLY WITH AI-ASSISTED DEVELOPMENT WORKFLOWS
        </div>
      </div>
    </footer>
  );
}
