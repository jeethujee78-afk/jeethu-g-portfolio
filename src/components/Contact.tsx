import React, { useState } from 'react';
import { Mail, Linkedin, Github, Download, ArrowRight, Check, MapPin, Clock, Send, Copy } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { useIstClock } from '../hooks/useIstClock';

export function Contact() {
  const [copied, setCopied] = useState(false);
  const istTime = useIstClock();

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      id="contact"
      className="relative py-28 px-6 lg:pl-44 xl:pl-56 lg:pr-12 xl:pr-20 border-t border-white/[0.06] bg-[#05080B] overflow-hidden"
    >
      {/* Background Subtle Atmosphere */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-radial from-[#D4C5A0]/[0.05] via-transparent to-transparent blur-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-5xl">
        {/* Main Architectural Showcase Card */}
        <div
          id="contact-cinematic-card"
          className="rounded-sm border border-[#D4C5A0]/25 bg-gradient-to-b from-[#0A0F13] via-[#080C10] to-[#05080B] p-8 sm:p-16 text-center shadow-[0_30px_90px_rgba(0,0,0,0.8),0_0_50px_rgba(212,197,160,0.06)]"
        >
          {/* Overline */}
          <p className="text-[10px] tracking-[0.35em] font-mono font-semibold text-[#D4C5A0] uppercase mb-4">
            09 / CONTACT & CONNECT
          </p>

          {/* Heading */}
          <h2 className="text-4xl sm:text-6xl xl:text-7xl font-black tracking-tight text-[#EDEDE8] font-display leading-[0.98] mb-6">
            LET'S BUILD
            <br />
            <span className="text-[#D4C5A0] font-light italic">SOMETHING MEANINGFUL.</span>
          </h2>

          {/* Text */}
          <p className="mx-auto max-w-xl text-sm sm:text-base leading-relaxed text-[#8A959E] font-body mb-6">
            Open to Cloud Engineering, AI Application, DevOps and SRE opportunities. Whether you have a specific role, a project collaboration, or just want to connect — feel free to reach out.
          </p>

          {/* Location & Live IST Status Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-10 text-[11px] font-mono text-[#EDEDE8]/80">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-[2px] border border-white/[0.1] bg-[#05080B]">
              <MapPin className="w-3.5 h-3.5 text-[#D4C5A0]" />
              <span>COIMBATORE, TAMIL NADU, INDIA</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-[2px] border border-[#D4C5A0]/30 bg-[#D4C5A0]/10 text-[#D4C5A0]">
              <Clock className="w-3.5 h-3.5" />
              <span>{istTime.time} IST · UTC +5:30</span>
            </span>
          </div>

          {/* Core Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
            <a
              id="contact-get-in-touch"
              href={`mailto:${PERSONAL_INFO.email}`}
              className="inline-flex items-center gap-3 rounded-[2px] border border-[#D4C5A0] bg-[#D4C5A0] px-7 py-3.5 text-xs font-bold tracking-[0.2em] uppercase text-[#05080B] transition-all duration-300 hover:bg-white hover:border-white hover:shadow-[0_0_30px_rgba(212,197,160,0.4)]"
            >
              <Send className="h-4 w-4" />
              <span>SEND EMAIL</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </a>

            <button
              id="contact-copy-email-btn"
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2.5 rounded-[2px] border border-white/[0.15] bg-[#0A0F13] px-6 py-3.5 text-xs font-mono tracking-[0.16em] uppercase text-[#EDEDE8] transition-all duration-300 hover:border-[#D4C5A0] hover:text-[#D4C5A0] cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="h-4 w-4 text-emerald-400" />
                  <span className="text-emerald-400">COPIED TO CLIPBOARD</span>
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4 text-[#D4C5A0]" />
                  <span>COPY EMAIL</span>
                </>
              )}
            </button>

            <a
              id="contact-download-resume"
              href={PERSONAL_INFO.resumeUrl}
              download="Jeethu_G_Resume.pdf"
              className="inline-flex items-center gap-3 rounded-[2px] border border-white/[0.15] bg-[#0A0F13] px-6 py-3.5 text-xs font-mono tracking-[0.16em] uppercase text-[#8A959E] transition-all duration-300 hover:border-white hover:text-white"
            >
              <Download className="h-4 w-4 text-[#D4C5A0]" />
              <span>DOWNLOAD RESUME</span>
            </a>
          </div>

          {/* Social Profiles Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-10 border-t border-white/[0.08]">
            {/* Direct Email */}
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="group flex flex-col items-center justify-center p-4 rounded-[2px] border border-white/[0.06] bg-[#05080B]/80 transition-all hover:border-[#D4C5A0]/50 hover:bg-[#10161B]"
            >
              <Mail className="h-5 w-5 text-[#D4C5A0] mb-2 transition-transform group-hover:scale-110" />
              <div className="text-xs font-mono font-bold text-[#EDEDE8] uppercase tracking-wider">
                EMAIL DIRECT
              </div>
              <div className="text-[11px] text-[#8A959E] mt-0.5 truncate max-w-full font-mono">
                {PERSONAL_INFO.email}
              </div>
            </a>

            {/* LinkedIn */}
            <a
              id="contact-link-linkedin"
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col items-center justify-center p-4 rounded-[2px] border border-white/[0.06] bg-[#05080B]/80 transition-all hover:border-[#D4C5A0]/50 hover:bg-[#10161B]"
            >
              <Linkedin className="h-5 w-5 text-[#D4C5A0] mb-2 transition-transform group-hover:scale-110" />
              <div className="text-xs font-mono font-bold text-[#EDEDE8] uppercase tracking-wider">
                LINKEDIN
              </div>
              <div className="text-[11px] text-[#8A959E] mt-0.5 font-mono">
                in/jeethu-g-b016a9224
              </div>
            </a>

            {/* GitHub */}
            <a
              id="contact-link-github"
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col items-center justify-center p-4 rounded-[2px] border border-white/[0.06] bg-[#05080B]/80 transition-all hover:border-[#D4C5A0]/50 hover:bg-[#10161B]"
            >
              <Github className="h-5 w-5 text-[#D4C5A0] mb-2 transition-transform group-hover:scale-110" />
              <div className="text-xs font-mono font-bold text-[#EDEDE8] uppercase tracking-wider">
                GITHUB
              </div>
              <div className="text-[11px] text-[#8A959E] mt-0.5 font-mono">
                jeethujee78-afk
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
