import React, { useState, useEffect } from 'react';
import { 
  X, 
  Download, 
  Mail, 
  Linkedin, 
  Github, 
  Check, 
  Copy, 
  Award, 
  Briefcase, 
  Clock, 
  ExternalLink,
  MapPin,
  Sparkles,
  FileText
} from 'lucide-react';
import { RECRUITER_PROFILE, PERSONAL_INFO } from '../data/portfolioData';

interface RecruiterDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenProject?: (projectId: string) => void;
}

export function RecruiterDrawer({ isOpen, onClose, onOpenProject }: RecruiterDrawerProps) {
  const [copiedBio, setCopiedBio] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCopyBio = () => {
    navigator.clipboard.writeText(RECRUITER_PROFILE.recruiterBlurb);
    setCopiedBio(true);
    setTimeout(() => setCopiedBio(false), 2500);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(RECRUITER_PROFILE.contactEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <div
      id="recruiter-quick-profile-modal"
      className="fixed inset-0 z-50 flex items-center justify-end bg-black/80 backdrop-blur-md transition-opacity duration-300"
      onClick={onClose}
    >
      <div
        className="relative h-full w-full max-w-xl bg-[#080C10] border-l border-[#D4C5A0]/30 shadow-[0_0_80px_rgba(0,0,0,0.9)] flex flex-col justify-between overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between border-b border-white/[0.08] bg-[#0A0F13]/95 p-6 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-[2px] border border-[#D4C5A0]/40 bg-[#D4C5A0]/10 text-xs font-bold font-mono text-[#D4C5A0]">
              JG
            </span>
            <div>
              <div className="text-[10px] font-mono tracking-[0.25em] text-[#D4C5A0] uppercase">
                RECRUITER & HIRING MANAGER BRIEF
              </div>
              <h2 className="text-lg font-bold tracking-tight text-[#EDEDE8] font-display">
                QUICK CANDIDATE PROFILE
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Close recruiter drawer"
            className="flex h-8 w-8 items-center justify-center rounded-[2px] border border-white/[0.1] bg-[#05080B] text-[#8A959E] hover:border-[#D4C5A0] hover:text-[#EDEDE8] transition-colors cursor-pointer"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-6">
          
          {/* Candidate Primary Identity Card */}
          <div className="p-5 rounded-[2px] border border-white/[0.08] bg-[#05080B]">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
              <div>
                <h3 className="text-xl font-bold tracking-tight text-[#EDEDE8] font-display">
                  {RECRUITER_PROFILE.name}
                </h3>
                <p className="text-xs font-mono font-semibold text-[#D4C5A0] uppercase tracking-wider">
                  {RECRUITER_PROFILE.title}
                </p>
              </div>

              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-[2px] border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-[10px] font-mono uppercase">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                AVAILABLE / SHORT NOTICE
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-xs text-[#8A959E] font-body pt-3 border-t border-white/[0.06]">
              <div className="flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 text-[#D4C5A0]" />
                <span>{RECRUITER_PROFILE.location}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Briefcase className="h-3.5 w-3.5 text-[#D4C5A0]" />
                <span>6+ Years Experience</span>
              </div>
            </div>
          </div>

          {/* Verified Certification Badge */}
          <div className="p-4 rounded-[2px] border border-[#D4C5A0]/30 bg-[#D4C5A0]/[0.04] flex items-start gap-3">
            <Award className="h-5 w-5 text-[#D4C5A0] shrink-0 mt-0.5" />
            <div>
              <div className="text-[10px] font-mono tracking-wider text-[#D4C5A0] uppercase font-semibold">
                VERIFIED CREDENTIAL
              </div>
              <div className="text-sm font-bold text-[#EDEDE8]">
                {RECRUITER_PROFILE.certification}
              </div>
              <div className="text-[11px] text-[#8A959E] mt-0.5">
                Validation of compute, VPC networking, DynamoDB NoSQL, IAM zero-trust, and high-availability design.
              </div>
            </div>
          </div>

          {/* Quick 1-Click Resume Download & Bio Copy */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <a
              id="recruiter-drawer-download-resume"
              href={RECRUITER_PROFILE.resumeDownloadUrl}
              download="Jeethu_G_Resume.pdf"
              className="inline-flex items-center justify-center gap-2 rounded-[2px] border border-[#D4C5A0] bg-[#D4C5A0] py-3 text-xs font-bold tracking-wider uppercase text-[#05080B] hover:bg-white hover:border-white transition-all shadow-[0_0_20px_rgba(212,197,160,0.3)]"
            >
              <Download className="h-4 w-4" />
              <span>DOWNLOAD RESUME (PDF)</span>
            </a>

            <button
              id="recruiter-drawer-copy-bio"
              onClick={handleCopyBio}
              className="inline-flex items-center justify-center gap-2 rounded-[2px] border border-white/[0.12] bg-[#0A0F13] py-3 text-xs font-mono tracking-wider uppercase text-[#EDEDE8] hover:border-[#D4C5A0] hover:text-[#D4C5A0] transition-colors cursor-pointer"
            >
              {copiedBio ? (
                <>
                  <Check className="h-4 w-4 text-emerald-400" />
                  <span className="text-emerald-400">COPIED CANDIDATE SUMMARY</span>
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4 text-[#D4C5A0]" />
                  <span>COPY ATS SUMMARY BLURB</span>
                </>
              )}
            </button>
          </div>

          {/* Core Skills Checklist */}
          <div>
            <div className="text-[10px] font-mono tracking-[0.2em] text-[#8A959E] uppercase mb-2.5">
              CORE TECHNICAL COMPETENCIES
            </div>
            <div className="space-y-2">
              {RECRUITER_PROFILE.coreCompetencies.map((comp, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-2.5 rounded-[2px] border border-white/[0.05] bg-[#05080B] text-xs text-[#EDEDE8]"
                >
                  <span className="text-[#D4C5A0] font-mono font-bold mt-0.5">✓</span>
                  <span className="leading-tight">{comp}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Top Live Projects */}
          <div>
            <div className="text-[10px] font-mono tracking-[0.2em] text-[#8A959E] uppercase mb-2.5">
              KEY PRODUCTION DELIVERABLES
            </div>
            <div className="space-y-3">
              {RECRUITER_PROFILE.topProjects.map((proj) => (
                <div
                  key={proj.name}
                  className="p-3.5 rounded-[2px] border border-white/[0.08] bg-[#05080B] hover:border-[#D4C5A0]/40 transition-colors"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-bold text-[#EDEDE8]">{proj.name}</span>
                    <span className="px-2 py-0.5 rounded-[2px] border border-[#D4C5A0]/30 bg-[#D4C5A0]/10 text-[#D4C5A0] font-mono text-[9px]">
                      {proj.badge}
                    </span>
                  </div>
                  <p className="text-xs text-[#8A959E] mb-2 leading-relaxed">{proj.summary}</p>
                  <div className="flex items-center justify-between pt-2 border-t border-white/[0.04]">
                    <span className="text-[10px] font-mono text-[#8A959E]/80">{proj.tech}</span>
                    <a
                      href={proj.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-mono text-[#D4C5A0] hover:underline"
                    >
                      <span>LAUNCH</span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Direct */}
          <div className="p-4 rounded-[2px] border border-white/[0.08] bg-[#05080B] space-y-3">
            <div className="text-[10px] font-mono tracking-[0.2em] text-[#8A959E] uppercase">
              DIRECT REACHOUT
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <a
                href={`mailto:${RECRUITER_PROFILE.contactEmail}`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[2px] border border-white/[0.1] bg-[#0A0F13] text-xs font-mono text-[#EDEDE8] hover:border-[#D4C5A0]"
              >
                <Mail className="h-3.5 w-3.5 text-[#D4C5A0]" />
                <span>{RECRUITER_PROFILE.contactEmail}</span>
              </a>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-[2px] border border-white/[0.1] bg-[#0A0F13] text-xs font-mono text-[#8A959E] hover:text-[#EDEDE8] cursor-pointer"
              >
                {copiedEmail ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
                <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
              </button>

              <a
                href={RECRUITER_PROFILE.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[2px] border border-white/[0.1] bg-[#0A0F13] text-xs font-mono text-[#EDEDE8] hover:border-[#D4C5A0]"
              >
                <Linkedin className="h-3.5 w-3.5 text-[#D4C5A0]" />
                <span>LinkedIn</span>
              </a>

              <a
                href={RECRUITER_PROFILE.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[2px] border border-white/[0.1] bg-[#0A0F13] text-xs font-mono text-[#EDEDE8] hover:border-[#D4C5A0]"
              >
                <Github className="h-3.5 w-3.5 text-[#D4C5A0]" />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>

        {/* Footer info */}
        <div className="p-4 border-t border-white/[0.08] bg-[#0A0F13] text-center text-[10px] font-mono text-[#8A959E]/70 uppercase">
          Coimbatore, India · IST (UTC +5:30) · Ready for Technical Interviews
        </div>
      </div>
    </div>
  );
}
