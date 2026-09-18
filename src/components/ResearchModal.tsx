import React, { useEffect } from 'react';
import { X, Sparkles, ArrowRight, Lightbulb, Compass, Cpu, Link as LinkIcon } from 'lucide-react';
import { TechnicalExplorationItem } from '../types';

interface ResearchModalProps {
  item: TechnicalExplorationItem | null;
  onClose: () => void;
}

export function ResearchModal({ item, onClose }: ResearchModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (item) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [item, onClose]);

  if (!item) return null;

  return (
    <div
      id="research-modal-backdrop"
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#05080B]/90 p-4 sm:p-6 backdrop-blur-md"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl rounded-sm border border-[#D4C5A0]/30 bg-[#0A0F13] p-6 sm:p-10 shadow-[0_25px_80px_rgba(0,0,0,0.9),0_0_40px_rgba(212,197,160,0.1)] overflow-hidden max-h-[90vh] overflow-y-auto"
      >
        {/* Close Button */}
        <button
          id="modal-close-button"
          onClick={onClose}
          aria-label="Close modal"
          className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-[2px] border border-white/[0.1] text-[#8A959E] hover:border-[#D4C5A0] hover:text-[#EDEDE8] transition-colors cursor-pointer"
        >
          <X className="h-4 w-4" />
        </button>

        {/* Visual Header */}
        <div className="relative mb-6 h-48 w-full overflow-hidden rounded-[2px] border border-white/[0.08] bg-[#05080B]">
          <img
            src={item.image}
            alt={item.title}
            className="h-full w-full object-cover object-center filter brightness-[0.9] contrast-[1.08]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F13] via-transparent to-transparent opacity-80" />
          <div className="absolute top-3 left-3 px-2.5 py-1 rounded-[2px] border border-white/[0.12] bg-[#05080B]/85 text-[10px] font-mono tracking-widest text-[#D4C5A0] uppercase font-bold">
            EXPLORATION / {item.number}
          </div>
        </div>

        {/* Tagline */}
        <div className="flex items-center gap-2 text-[10px] font-mono font-semibold text-[#D4C5A0] uppercase tracking-[0.28em] mb-2">
          <Sparkles className="h-3 w-3" />
          <span>{item.tagline}</span>
        </div>

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl font-black text-[#EDEDE8] font-display mb-3">
          {item.title}
        </h2>

        {/* Engineering Exploration Badge */}
        <div className="mb-8 px-3.5 py-2 rounded-[2px] border border-[#D4C5A0]/25 bg-[#D4C5A0]/5 text-[10px] font-mono tracking-wider text-[#D4C5A0] uppercase">
          ✦ PRACTICAL ENGINEERING EXPLORATION & ARCHITECTURAL INVESTIGATION
        </div>

        {/* Narrative Sections */}
        <div className="space-y-6 text-sm sm:text-base leading-relaxed text-[#8A959E] font-body">
          {/* Summary */}
          <div className="rounded-[2px] border border-white/[0.06] bg-[#05080B] p-5">
            <h4 className="text-xs font-mono tracking-widest text-[#D4C5A0] uppercase mb-2 font-semibold flex items-center gap-2">
              <Compass className="w-3.5 h-3.5" />
              <span>CORE HYPOTHESIS & FOCUS</span>
            </h4>
            <p className="text-sm text-[#EDEDE8]/90">{item.summary}</p>
          </div>

          {/* Why It Matters */}
          {item.whyItMatters && (
            <div className="rounded-[2px] border-l-2 border-[#D4C5A0] bg-[#05080B]/80 p-4">
              <div className="text-xs font-mono tracking-wider text-[#D4C5A0] uppercase font-semibold mb-1">
                WHY IT MATTERS TO ME
              </div>
              <p className="text-xs sm:text-sm text-[#EDEDE8]/85">{item.whyItMatters}</p>
            </div>
          )}

          {/* What I'm Exploring */}
          {item.whatImExploring && (
            <div>
              <div className="text-xs font-mono tracking-wider text-[#EDEDE8] uppercase font-semibold mb-2 flex items-center gap-2">
                <Lightbulb className="w-3.5 h-3.5 text-[#D4C5A0]" />
                <span>WHAT I'M ACTIVELY INVESTIGATING</span>
              </div>
              <p className="text-xs sm:text-sm text-[#8A959E]">{item.whatImExploring}</p>
            </div>
          )}

          {/* Technologies / Conceptual Stack */}
          {item.technologies && item.technologies.length > 0 && (
            <div>
              <div className="text-[10px] font-mono tracking-wider text-[#EDEDE8] uppercase font-semibold mb-2.5 flex items-center gap-2">
                <Cpu className="w-3.5 h-3.5 text-[#D4C5A0]" />
                <span>RELEVANT TECHNOLOGIES & TOOLS</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {item.technologies.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-[2px] border border-white/[0.08] bg-[#05080B] text-xs font-mono text-[#D4C5A0]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Practical Application & Project Connection */}
          {item.practicalApplication && (
            <div className="rounded-[2px] border border-white/[0.06] bg-[#05080B] p-4 text-xs font-mono text-[#EDEDE8]/80">
              <div className="text-[10px] text-[#D4C5A0] uppercase font-bold tracking-wider mb-1 flex items-center gap-1.5">
                <LinkIcon className="w-3 h-3" />
                <span>PRACTICAL APPLICATION & LAB CONNECTION</span>
              </div>
              <p className="mb-2">{item.practicalApplication}</p>
              {item.projectConnection && (
                <p className="text-[#8A959E] italic">{item.projectConnection}</p>
              )}
            </div>
          )}
        </div>

        {/* Action Button */}
        <div className="mt-8 pt-4 border-t border-white/[0.08] flex justify-end">
          <button
            onClick={onClose}
            className="inline-flex items-center gap-2 rounded-[2px] border border-[#D4C5A0] bg-[#D4C5A0] px-5 py-2.5 text-xs font-bold tracking-widest uppercase text-[#05080B] hover:bg-white hover:border-white transition-colors cursor-pointer"
          >
            <span>CLOSE EXPLORATION</span>
            <ArrowRight className="h-3 w-3" />
          </button>
        </div>
      </div>
    </div>
  );
}
