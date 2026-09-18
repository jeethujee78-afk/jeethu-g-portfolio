import React, { useState } from 'react';
import {
  Calendar,
  MapPin,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  Briefcase,
  Layers,
  Sparkles,
  Award,
} from 'lucide-react';
import { EXPERIENCE_DATA } from '../data/portfolioData';

export function Experience() {
  // Store expanded item IDs; default to expanding the first item (current active)
  const [expandedIds, setExpandedIds] = useState<Record<string, boolean>>({
    'independent-cloud-ai': true,
    'aceolution-sme': true,
  });

  const toggleItem = (id: string) => {
    setExpandedIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const expandAll = () => {
    const allExpanded: Record<string, boolean> = {};
    EXPERIENCE_DATA.forEach((item) => {
      allExpanded[item.id] = true;
    });
    setExpandedIds(allExpanded);
  };

  const collapseAll = () => {
    setExpandedIds({});
  };

  return (
    <section
      id="experience"
      className="relative py-28 px-6 lg:pl-44 xl:pl-56 lg:pr-12 xl:pr-20 border-t border-white/[0.06] bg-[#0A0F13]/40"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <div>
            <p className="text-[10px] tracking-[0.32em] font-mono font-semibold text-[#D4C5A0] uppercase mb-3 flex items-center gap-2">
              <Briefcase className="w-3.5 h-3.5 text-[#D4C5A0]" />
              <span>06 / EXPERIENCE & CAREER PROGRESSION</span>
            </p>
            <h2 className="text-3xl sm:text-5xl xl:text-6xl font-black tracking-tight text-[#EDEDE8] font-display leading-[1.02]">
              FACTUAL TIMELINE.
              <br />
              <span className="text-[#D4C5A0] font-light italic">OPERATIONS & CLOUD.</span>
            </h2>
          </div>

          {/* Expand/Collapse All Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={expandAll}
              className="text-[11px] font-mono tracking-wider uppercase text-[#8A959E] hover:text-[#D4C5A0] transition-colors border border-white/[0.08] px-3 py-1.5 rounded-[2px] bg-[#05080B] cursor-pointer"
            >
              Expand All
            </button>
            <button
              onClick={collapseAll}
              className="text-[11px] font-mono tracking-wider uppercase text-[#8A959E] hover:text-[#D4C5A0] transition-colors border border-white/[0.08] px-3 py-1.5 rounded-[2px] bg-[#05080B] cursor-pointer"
            >
              Collapse All
            </button>
          </div>
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l border-white/[0.12] pl-6 sm:pl-10 space-y-10 ml-2 sm:ml-4">
          {EXPERIENCE_DATA.map((item) => {
            const isExpanded = !!expandedIds[item.id];
            const isCloudProjects = item.type === 'PERSONAL CLOUD / AI PROJECTS';

            return (
              <article
                key={item.id}
                id={`experience-item-${item.id}`}
                className="relative group transition-all duration-300"
              >
                {/* Timeline Node */}
                <div
                  className={`absolute -left-[31px] sm:-left-[47px] top-4 flex h-5 w-5 items-center justify-center rounded-[2px] border transition-colors ${
                    item.current
                      ? 'border-[#D4C5A0] bg-[#D4C5A0]/20 shadow-[0_0_12px_rgba(212,197,160,0.6)]'
                      : 'border-white/[0.2] bg-[#05080B] group-hover:border-[#D4C5A0]'
                  }`}
                >
                  <div
                    className={`h-2 w-2 rounded-[1px] ${
                      item.current ? 'bg-[#D4C5A0]' : 'bg-white/[0.3] group-hover:bg-[#D4C5A0]'
                    }`}
                  />
                </div>

                {/* Experience Card with Expand / Collapse Accordion */}
                <div
                  className={`rounded-sm border transition-all duration-300 backdrop-blur-sm ${
                    isCloudProjects
                      ? 'border-[#D4C5A0]/35 bg-[#0F151B] shadow-[0_10px_30px_rgba(0,0,0,0.5)]'
                      : 'border-white/[0.08] bg-[#0A0F13] hover:border-white/[0.2]'
                  }`}
                >
                  {/* Clickable Header for Expand/Collapse */}
                  <div
                    onClick={() => toggleItem(item.id)}
                    className="p-6 sm:p-7 cursor-pointer select-none flex flex-col gap-3"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div className="flex flex-wrap items-center gap-2.5">
                        <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#D4C5A0]">
                          <Calendar className="h-3.5 w-3.5 text-[#D4C5A0]" />
                          {item.period}
                        </span>

                        {/* Category Badge */}
                        <span
                          className={`text-[9px] font-mono tracking-wider uppercase px-2 py-0.5 rounded-[2px] font-semibold border ${
                            isCloudProjects
                              ? 'border-[#D4C5A0]/40 bg-[#D4C5A0]/15 text-[#D4C5A0]'
                              : 'border-white/[0.1] bg-[#05080B] text-[#8A959E]'
                          }`}
                        >
                          {item.type}
                        </span>

                        {item.current && (
                          <span className="px-2 py-0.5 rounded-[2px] border border-emerald-500/30 bg-emerald-950/20 text-[9px] font-mono tracking-wider text-emerald-400 uppercase font-semibold">
                            ACTIVE
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-4">
                        <span className="text-[11px] font-mono tracking-wider text-[#8A959E] uppercase flex items-center gap-1.5">
                          <MapPin className="h-3 w-3 text-[#D4C5A0]" />
                          {item.location}
                        </span>

                        <div className="flex h-7 w-7 items-center justify-center rounded-[2px] border border-white/[0.1] bg-[#05080B] text-[#D4C5A0] transition-transform duration-200">
                          {isExpanded ? (
                            <ChevronUp className="h-4 w-4" />
                          ) : (
                            <ChevronDown className="h-4 w-4" />
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Role Title & Company */}
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-[#EDEDE8] font-display">
                        {item.role}
                      </h3>
                      <div className="text-xs sm:text-sm font-mono tracking-wider text-[#D4C5A0] mt-0.5">
                        {item.company}
                      </div>
                    </div>

                    {/* Summary line */}
                    <p className="text-xs sm:text-sm text-[#8A959E] font-body leading-relaxed">
                      {item.summary}
                    </p>
                  </div>

                  {/* Expanded Accordion Content */}
                  {isExpanded && (
                    <div className="px-6 pb-7 sm:px-7 sm:pb-8 pt-0 border-t border-white/[0.06] space-y-6">
                      <div className="pt-5">
                        <p className="text-xs sm:text-sm text-[#EDEDE8]/85 font-body leading-relaxed mb-5">
                          {item.description}
                        </p>

                        {/* Responsibilities Checklist */}
                        <div className="space-y-2.5 mb-6">
                          <div className="text-[10px] font-mono tracking-[0.2em] text-[#D4C5A0] uppercase font-semibold">
                            KEY RESPONSIBILITIES & WORKFLOWS
                          </div>
                          {item.responsibilities.map((resp, rIdx) => (
                            <div
                              key={rIdx}
                              className="flex items-start gap-2.5 text-xs text-[#EDEDE8]/90 font-body leading-relaxed"
                            >
                              <CheckCircle2 className="h-3.5 w-3.5 text-[#D4C5A0] flex-shrink-0 mt-0.5" />
                              <span>{resp}</span>
                            </div>
                          ))}
                        </div>

                        {/* Key Contributions Pill Box */}
                        {item.keyContributions && item.keyContributions.length > 0 && (
                          <div className="rounded-[2px] border border-white/[0.08] bg-[#05080B] p-4">
                            <div className="text-[10px] font-mono tracking-[0.2em] text-[#8A959E] uppercase font-semibold mb-2 flex items-center gap-1.5">
                              <Award className="w-3.5 h-3.5 text-[#D4C5A0]" />
                              <span>VERIFIED CONTRIBUTIONS & HIGHLIGHTS</span>
                            </div>
                            <div className="space-y-1.5">
                              {item.keyContributions.map((contrib, cIdx) => (
                                <div
                                  key={cIdx}
                                  className="text-xs font-mono text-[#EDEDE8]/90 flex items-start gap-2"
                                >
                                  <span className="text-[#D4C5A0]">◈</span>
                                  <span>{contrib}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Technical Initiative Subsection */}
                        {item.technicalInitiative && (
                          <div className="rounded-[2px] border border-[#D4C5A0]/25 bg-[#080D11] p-4 sm:p-5 mt-5">
                            <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5 pb-2.5 border-b border-white/[0.06]">
                              <span className="text-[10px] font-mono tracking-[0.2em] text-[#D4C5A0] uppercase font-bold">
                                {item.technicalInitiative.badge}
                              </span>
                              <div className="flex flex-wrap items-center gap-1.5">
                                {item.technicalInitiative.technologies.map((tech) => (
                                  <span
                                    key={tech}
                                    className="text-[9px] font-mono px-2 py-0.5 rounded-[2px] border border-[#D4C5A0]/20 bg-[#05080B] text-[#D4C5A0]"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>

                            <h4 className="text-sm sm:text-base font-bold text-[#EDEDE8] font-display mb-1.5">
                              {item.technicalInitiative.title}
                            </h4>

                            <p className="text-xs text-[#8A959E] font-body leading-relaxed mb-3">
                              {item.technicalInitiative.description}
                            </p>

                            <div className="space-y-1.5">
                              {item.technicalInitiative.points.map((pt, pIdx) => (
                                <div
                                  key={pIdx}
                                  className="flex items-start gap-2 text-xs text-[#EDEDE8]/90 font-body leading-relaxed"
                                >
                                  <span className="text-[#D4C5A0] mt-0.5">•</span>
                                  <span>{pt}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
