import React, { useState } from 'react';
import { ArrowRight, Compass } from 'lucide-react';
import { TECHNICAL_EXPLORATIONS } from '../data/portfolioData';
import { TechnicalExplorationItem } from '../types';
import { ResearchModal } from './ResearchModal';

export function Research() {
  const [activeItem, setActiveItem] = useState<TechnicalExplorationItem | null>(null);

  // Focus strictly on the 3 coherent engineering exploration cards:
  // 01 — CLOUD-NATIVE ARCHITECTURE
  // 02 — AI-POWERED ENGINEERING
  // 03 — REAL-TIME DATA & TELEMETRY
  const explorationCards = TECHNICAL_EXPLORATIONS.slice(0, 3);

  return (
    <section
      id="research"
      className="relative py-24 px-6 lg:pl-44 xl:pl-56 lg:pr-12 xl:pr-20 border-t border-white/[0.06] bg-[#0A0F13]/50"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
          <div>
            <p className="text-[10px] tracking-[0.32em] font-mono font-semibold text-[#D4C5A0] uppercase mb-3 flex items-center gap-2">
              <Compass className="w-3.5 h-3.5 text-[#D4C5A0]" />
              <span>08 / TECHNICAL EXPLORATION</span>
            </p>
            <h2 className="text-3xl sm:text-5xl xl:text-6xl font-black tracking-tight text-[#EDEDE8] font-display leading-[1.02]">
              EXPLORING
            </h2>
            <p className="mt-2 text-sm sm:text-base font-mono text-[#D4C5A0]/90">
              "Things I'm learning, building and experimenting with."
            </p>
          </div>

          <div className="max-w-md">
            <p className="text-xs sm:text-sm text-[#8A959E] font-body leading-relaxed mb-3">
              Practical investigations into resilient cloud architecture, generative AI reasoning workflows, and high-throughput real-time telemetry processing.
            </p>
            <div className="text-[10px] font-mono tracking-wider text-[#D4C5A0] uppercase border-l-2 border-[#D4C5A0]/50 pl-3">
              ✦ Applied Engineering Focus & Architectural Concepts
            </div>
          </div>
        </div>

        {/* 3 Coherent Exploration Cards Grid */}
        <div
          id="research-cards-grid"
          className="grid grid-cols-1 md:grid-cols-3 gap-6 xl:gap-8 items-stretch"
        >
          {explorationCards.map((card) => (
            <button
              key={card.id}
              onClick={() => setActiveItem(card)}
              id={`research-card-${card.id}`}
              className="group relative flex flex-col justify-between rounded-sm border border-white/[0.08] bg-[#0A0F13] p-6 sm:p-8 text-left backdrop-blur-sm transition-all duration-300 hover:border-[#D4C5A0]/50 hover:bg-[#10161B] hover:shadow-[0_20px_50px_rgba(0,0,0,0.6),0_0_30px_rgba(212,197,160,0.08)] cursor-pointer h-full"
            >
              <div>
                {/* Visual Header */}
                <div className="relative mb-6 h-44 w-full overflow-hidden rounded-[2px] border border-white/[0.08] bg-[#05080B]">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="h-full w-full object-cover object-center filter brightness-[0.88] contrast-[1.08] transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F13] via-transparent to-transparent opacity-85 pointer-events-none" />

                  <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-[2px] border border-white/[0.1] bg-[#05080B]/85 text-[9px] font-mono tracking-widest text-[#D4C5A0] uppercase font-bold">
                    EXPLORATION / {card.number}
                  </div>
                </div>

                <div className="text-[9px] font-mono tracking-[0.22em] text-[#D4C5A0] uppercase font-semibold mb-2">
                  {card.tagline}
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-[#EDEDE8] font-display mb-3 group-hover:text-[#D4C5A0] transition-colors leading-snug min-h-[52px] flex items-center">
                  {card.title}
                </h3>

                <p className="text-xs text-[#8A959E] leading-relaxed font-body">
                  {card.summary}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono font-semibold tracking-wider text-[#D4C5A0] uppercase">
                <span>VIEW EXPLORATION →</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </button>
          ))}
        </div>

        {/* Closing Professional Note */}
        <div className="mt-14 rounded-[2px] border border-white/[0.08] bg-[#0A0F13] p-6 sm:p-8 text-center backdrop-blur-sm">
          <p className="text-sm sm:text-base text-[#EDEDE8] font-body leading-relaxed max-w-2xl mx-auto">
            “Building reliable software requires balancing foundational cloud principles, practical curiosity, and continuous hands-on experimentation.”
          </p>
          <span className="block mt-2.5 text-[11px] tracking-[0.25em] font-mono font-bold text-[#D4C5A0] uppercase">
            — JEETHU G · CLOUD & AI PRACTITIONER
          </span>
        </div>
      </div>

      <ResearchModal item={activeItem} onClose={() => setActiveItem(null)} />
    </section>
  );
}
