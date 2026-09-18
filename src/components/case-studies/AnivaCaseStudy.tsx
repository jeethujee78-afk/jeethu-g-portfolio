import React, { useState } from 'react';
import {
  ArrowLeft,
  ArrowUpRight,
  Github,
  CheckCircle2,
  Clock,
  Sparkles,
  ShoppingBag,
  Palette,
  Tag,
  ShieldCheck,
  Layers,
  Cpu,
  RefreshCw,
  ExternalLink,
} from 'lucide-react';
import { Project } from '../../types';

interface AnivaCaseStudyProps {
  project: Project;
  onClose: () => void;
}

export function AnivaCaseStudy({ project, onClose }: AnivaCaseStudyProps) {
  const [activeGarmentSide, setActiveGarmentSide] = useState<'front' | 'back'>('front');
  const [selectedColor, setSelectedColor] = useState<string>('#10161B');
  const [customText, setCustomText] = useState<string>('AETHEL GARD');
  const [selectedCondition, setSelectedCondition] = useState<'S' | 'A' | 'B' | 'C'>('S');

  const conditionTiers = [
    {
      grade: 'S',
      title: 'Like New / Flawless',
      desc: 'Unworn with original tags or pristine condition without any wear or blemishes.',
      color: 'border-emerald-500/40 text-emerald-400 bg-emerald-500/10',
    },
    {
      grade: 'A',
      title: 'Excellent Condition',
      desc: 'Minimal gentle wear, no structural defects, original seams intact.',
      color: 'border-[#D4C5A0]/40 text-[#D4C5A0] bg-[#D4C5A0]/10',
    },
    {
      grade: 'B',
      title: 'Good Condition',
      desc: 'Minor signs of regular wear, minor fading, perfectly wearable daily.',
      color: 'border-amber-500/40 text-amber-400 bg-amber-500/10',
    },
    {
      grade: 'C',
      title: 'Fair Condition',
      desc: 'Visible distressing or surface character, priced for accessible circular wear.',
      color: 'border-sky-500/40 text-sky-400 bg-sky-500/10',
    },
  ];

  return (
    <div className="space-y-12 text-sm sm:text-base font-body leading-relaxed text-[#8A959E]">
      {/* 01 OVERVIEW */}
      <section id="aniva-overview" className="border-b border-white/[0.08] pb-8">
        <div className="flex items-center gap-3 mb-3">
          <span className="font-mono text-xs text-[#D4C5A0] font-semibold">01</span>
          <h2 className="text-lg font-bold tracking-wider text-[#EDEDE8] font-display uppercase">
            OVERVIEW
          </h2>
        </div>
        <p className="text-[#EDEDE8]/90 mb-4 leading-relaxed">
          ANIVA is an ongoing modern commerce platform exploring fashion discovery, custom apparel, pre-owned products, and a broader digital commerce experience. It is being developed as more than a traditional online storefront, evaluating distinct commerce paradigms—brand retail discovery, custom personalized apparel design, and circular fashion verification—within a unified architecture.
        </p>
        <div className="flex items-center gap-2.5 p-3.5 rounded-[2px] border border-amber-500/30 bg-amber-500/[0.05] text-amber-200/90 font-mono text-xs">
          <Clock className="w-4 h-4 text-amber-400 flex-shrink-0" />
          <span>
            ACTIVE BUILD · Status: Continuously evolving. Client-side prototypes deployed to Vercel with structured contracts for ongoing backend integration.
          </span>
        </div>
      </section>

      {/* 02 WHY I BUILT IT */}
      <section id="aniva-why-built" className="border-b border-white/[0.08] pb-8">
        <div className="flex items-center gap-3 mb-3">
          <span className="font-mono text-xs text-[#D4C5A0] font-semibold">02</span>
          <h2 className="text-lg font-bold tracking-wider text-[#EDEDE8] font-display uppercase">
            WHY I BUILT IT
          </h2>
        </div>
        <div className="space-y-3 text-[#EDEDE8]/85">
          <p>
            Standard digital commerce systems are almost universally partitioned: retail stores sell standard off-the-shelf SKUs, custom print-on-demand businesses operate through disjointed configurator widgets, and circular resale marketplaces exist in separate peer-to-peer applications.
          </p>
          <p>
            I architected ANIVA to explore how a modern high-performance web system can unify three distinct commerce interactions—curated fashion discovery, custom apparel personalization, and condition-verified circular resale—under a single, cohesive user experience without architectural bloat.
          </p>
        </div>
      </section>

      {/* 03 CURRENT EXPERIENCE */}
      <section id="aniva-experience" className="border-b border-white/[0.08] pb-8">
        <div className="flex items-center gap-3 mb-3">
          <span className="font-mono text-xs text-[#D4C5A0] font-semibold">03</span>
          <h2 className="text-lg font-bold tracking-wider text-[#EDEDE8] font-display uppercase">
            CURRENT EXPERIENCE
          </h2>
        </div>
        <p className="text-[#EDEDE8]/85 mb-4">
          The currently deployed build offers an interactive exploration of the frontend commerce layer:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          <div className="rounded-[2px] border border-white/[0.08] bg-[#05080B] p-4">
            <div className="text-xs font-mono text-[#D4C5A0] uppercase tracking-wider font-semibold mb-1">
              Curated Fashion Discovery
            </div>
            <p className="text-xs text-[#8A959E]">
              Editorial catalog layout with dynamic multi-attribute filtering (category, price, sizing, color variants) and instant search.
            </p>
          </div>
          <div className="rounded-[2px] border border-white/[0.08] bg-[#05080B] p-4">
            <div className="text-xs font-mono text-[#D4C5A0] uppercase tracking-wider font-semibold mb-1">
              Interactive Custom Print Studio
            </div>
            <p className="text-xs text-[#8A959E]">
              Real-time canvas engine rendering live front and back garment vector graphics, custom text styling, and artwork emblems.
            </p>
          </div>
          <div className="rounded-[2px] border border-white/[0.08] bg-[#05080B] p-4">
            <div className="text-xs font-mono text-[#D4C5A0] uppercase tracking-wider font-semibold mb-1">
              Pre-Owned Circular Catalog
            </div>
            <p className="text-xs text-[#8A959E]">
              Visual marketplace showcasing verified pre-owned luxury garments with condition grading badges and transparency reports.
            </p>
          </div>
          <div className="rounded-[2px] border border-white/[0.08] bg-[#05080B] p-4">
            <div className="text-xs font-mono text-[#D4C5A0] uppercase tracking-wider font-semibold mb-1">
              Reactive Cart &amp; Wishlist
            </div>
            <p className="text-xs text-[#8A959E]">
              Persistent client state bundling customized garment coordinate payloads and standard retail items into a unified cart.
            </p>
          </div>
        </div>
      </section>

      {/* 04 COMMERCE FEATURES */}
      <section id="aniva-features" className="border-b border-white/[0.08] pb-8">
        <div className="flex items-center gap-3 mb-3">
          <span className="font-mono text-xs text-[#D4C5A0] font-semibold">04</span>
          <h2 className="text-lg font-bold tracking-wider text-[#EDEDE8] font-display uppercase">
            COMMERCE FEATURES (IMPLEMENTED VS PLANNED)
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Implemented */}
          <div className="rounded-[2px] border border-emerald-500/30 bg-[#05080B] p-5">
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 font-bold tracking-wider uppercase mb-3">
              <CheckCircle2 className="w-4 h-4" />
              <span>CURRENTLY IMPLEMENTED</span>
            </div>
            <ul className="space-y-2 text-xs text-[#EDEDE8]/80">
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 font-bold">•</span>
                <span>Fashion product discovery with high-contrast editorial photography</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 font-bold">•</span>
                <span>Full product search and multi-facet filtering (category, price, sizing)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 font-bold">•</span>
                <span>Interactive shopping cart with item quantity modifiers &amp; price totals</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 font-bold">•</span>
                <span>Customer wishlist state toggle with persistent storage</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 font-bold">•</span>
                <span>Custom print studio with real-time text and emblem canvas placement</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 font-bold">•</span>
                <span>Condition grading UI display (S, A, B, C) for pre-owned items</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 font-bold">•</span>
                <span>Fully responsive desktop, tablet, and mobile interface scaling</span>
              </li>
            </ul>
          </div>

          {/* Planned / In Development */}
          <div className="rounded-[2px] border border-amber-500/30 bg-[#05080B] p-5">
            <div className="flex items-center gap-2 text-xs font-mono text-amber-400 font-bold tracking-wider uppercase mb-3">
              <Clock className="w-4 h-4" />
              <span>IN ACTIVE DEVELOPMENT / PLANNED</span>
            </div>
            <ul className="space-y-2 text-xs text-[#EDEDE8]/80">
              <li className="flex items-start gap-2">
                <span className="text-amber-400 font-bold">◐</span>
                <span>Multi-step checkout flows with Stripe payment intent integration</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400 font-bold">◐</span>
                <span>Customer profiles and authenticated order history persistence</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400 font-bold">◐</span>
                <span>Boutique retailer portals and multi-vendor inventory workflows</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400 font-bold">◐</span>
                <span>End-to-end seller garment submission, inspection &amp; verification pipeline</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400 font-bold">◐</span>
                <span>Automated order lifecycle tracking, dispatch updates &amp; returns</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400 font-bold">◐</span>
                <span>AI-assisted conversational styling prompts &amp; outfit recommendations</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400 font-bold">◐</span>
                <span>High-resolution print-ready SVG vector export for fulfillment APIs</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 05 CUSTOM PRINT STUDIO */}
      <section id="aniva-studio" className="border-b border-white/[0.08] pb-8">
        <div className="flex items-center gap-3 mb-3">
          <span className="font-mono text-xs text-[#D4C5A0] font-semibold">05</span>
          <h2 className="text-lg font-bold tracking-wider text-[#EDEDE8] font-display uppercase">
            CUSTOM PRINT STUDIO
          </h2>
        </div>
        <p className="text-[#EDEDE8]/85 mb-5">
          The studio provides an interactive client-side personalization workshop where users configure garment attributes and inspect real-time canvas overlays:
        </p>

        {/* Interactive Studio Preview Widget */}
        <div className="rounded-[2px] border border-white/[0.1] bg-[#05080B] p-5 sm:p-6 mb-4">
          <div className="flex items-center justify-between border-b border-white/[0.06] pb-3 mb-5">
            <div className="flex items-center gap-2">
              <Palette className="w-4 h-4 text-[#D4C5A0]" />
              <span className="font-mono text-xs font-bold text-[#EDEDE8] uppercase tracking-wider">
                Interactive Studio Simulation
              </span>
            </div>
            <span className="font-mono text-[10px] text-emerald-400 font-semibold border border-emerald-500/30 px-2 py-0.5 rounded-[2px] bg-emerald-500/10">
              ● CLIENT ENGINE ACTIVE
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            {/* Visual Garment Mockup */}
            <div
              className="relative h-64 rounded-[2px] border border-white/[0.08] flex flex-col items-center justify-center p-6 overflow-hidden transition-colors duration-300"
              style={{ backgroundColor: selectedColor }}
            >
              <div className="absolute top-2 left-2 text-[9px] font-mono text-[#D4C5A0] uppercase tracking-wider bg-black/60 px-2 py-0.5 rounded-[2px]">
                VIEW: {activeGarmentSide.toUpperCase()}
              </div>

              {/* Garment Mockup Shape */}
              <div className="relative w-40 h-44 rounded-t-2xl border border-white/20 flex flex-col items-center justify-center shadow-inner">
                <div className="absolute -top-3 w-12 h-6 border-b border-white/30 rounded-b-full" />
                <div className="text-center px-2 py-2">
                  <div className="text-xs tracking-[0.25em] font-mono text-[#D4C5A0] font-black uppercase drop-shadow">
                    {customText || 'ANIVA APPAREL'}
                  </div>
                  <div className="text-[8px] tracking-widest font-mono text-white/70 mt-1 uppercase">
                    EST. 2026 · {activeGarmentSide} PRINT
                  </div>
                </div>
              </div>
            </div>

            {/* Studio Controls */}
            <div className="space-y-4 text-xs font-mono">
              <div>
                <label className="text-[#8A959E] uppercase tracking-wider block mb-1.5">
                  GARMENT VIEW
                </label>
                <div className="flex gap-2">
                  <button
                    onClick={() => setActiveGarmentSide('front')}
                    className={`px-3 py-1.5 rounded-[2px] cursor-pointer transition-colors ${
                      activeGarmentSide === 'front'
                        ? 'border border-[#D4C5A0] bg-[#D4C5A0]/20 text-[#D4C5A0] font-bold'
                        : 'border border-white/[0.08] text-[#8A959E] hover:text-[#EDEDE8]'
                    }`}
                  >
                    FRONT PROFILE
                  </button>
                  <button
                    onClick={() => setActiveGarmentSide('back')}
                    className={`px-3 py-1.5 rounded-[2px] cursor-pointer transition-colors ${
                      activeGarmentSide === 'back'
                        ? 'border border-[#D4C5A0] bg-[#D4C5A0]/20 text-[#D4C5A0] font-bold'
                        : 'border border-white/[0.08] text-[#8A959E] hover:text-[#EDEDE8]'
                    }`}
                  >
                    BACK PROFILE
                  </button>
                </div>
              </div>

              <div>
                <label className="text-[#8A959E] uppercase tracking-wider block mb-1.5">
                  GARMENT FABRIC SHADE
                </label>
                <div className="flex gap-2">
                  {[
                    { color: '#0A0F13', label: 'Obsidian' },
                    { color: '#1B242C', label: 'Deep Navy' },
                    { color: '#2B1E1E', label: 'Charcoal Plum' },
                    { color: '#14231E', label: 'Forest' },
                  ].map((item) => (
                    <button
                      key={item.color}
                      onClick={() => setSelectedColor(item.color)}
                      style={{ backgroundColor: item.color }}
                      className={`h-7 w-7 rounded-[2px] border cursor-pointer ${
                        selectedColor === item.color
                          ? 'border-[#D4C5A0] ring-2 ring-[#D4C5A0]/30'
                          : 'border-white/20'
                      }`}
                      title={item.label}
                    />
                  ))}
                </div>
              </div>

              <div>
                <label className="text-[#8A959E] uppercase tracking-wider block mb-1.5">
                  CUSTOM GRAPHIC TYPOGRAPHY
                </label>
                <input
                  type="text"
                  value={customText}
                  onChange={(e) => setCustomText(e.target.value)}
                  maxLength={18}
                  className="w-full rounded-[2px] border border-white/[0.12] bg-[#0A0F13] px-3 py-1.5 text-xs text-[#EDEDE8] focus:border-[#D4C5A0] focus:outline-none font-mono"
                  placeholder="Enter custom text..."
                />
              </div>
            </div>
          </div>
        </div>

        <p className="text-xs text-[#8A959E]">
          <strong className="text-[#D4C5A0]">Architecture Distinction:</strong> The interactive HTML5 canvas rendering engine operates 100% client-side for zero latency. Automated vector export and print-on-demand fulfillment API integrations are scheduled for the next backend milestone.
        </p>
      </section>

      {/* 06 PRE-OWNED MARKETPLACE */}
      <section id="aniva-marketplace" className="border-b border-white/[0.08] pb-8">
        <div className="flex items-center gap-3 mb-3">
          <span className="font-mono text-xs text-[#D4C5A0] font-semibold">06</span>
          <h2 className="text-lg font-bold tracking-wider text-[#EDEDE8] font-display uppercase">
            PRE-OWNED MARKETPLACE &amp; CONDITION GRADING
          </h2>
        </div>
        <p className="text-[#EDEDE8]/85 mb-4">
          To power sustainable circular fashion, ANIVA defines a strict 4-tier inspection schema for pre-owned items:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-5">
          {conditionTiers.map((tier) => (
            <div
              key={tier.grade}
              onClick={() => setSelectedCondition(tier.grade as any)}
              className={`p-4 rounded-[2px] border cursor-pointer transition-all ${
                selectedCondition === tier.grade
                  ? `${tier.color} shadow-sm`
                  : 'border-white/[0.08] bg-[#05080B] hover:border-white/[0.2]'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-lg font-bold">{tier.grade} GRADE</span>
                {selectedCondition === tier.grade && (
                  <CheckCircle2 className="w-3.5 h-3.5" />
                )}
              </div>
              <div className="text-xs font-semibold text-[#EDEDE8] mb-1">
                {tier.title}
              </div>
              <p className="text-[11px] text-[#8A959E] leading-relaxed">
                {tier.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="p-4 rounded-[2px] border border-white/[0.08] bg-[#05080B] text-xs text-[#8A959E] leading-relaxed">
          <strong className="text-[#EDEDE8]">Marketplace Verification Pipeline:</strong> Sellers submit garment provenance, condition photography, and receipts. Submissions undergo algorithmic image checking before assigning verification badges to prevent counterfeit or degraded items from entering customer feeds.
        </div>
      </section>

      {/* 07 ARCHITECTURE */}
      <section id="aniva-architecture" className="border-b border-white/[0.08] pb-8">
        <div className="flex items-center gap-3 mb-3">
          <span className="font-mono text-xs text-[#D4C5A0] font-semibold">07</span>
          <h2 className="text-lg font-bold tracking-wider text-[#EDEDE8] font-display uppercase">
            ARCHITECTURE &amp; SUBSYSTEMS
          </h2>
        </div>
        <p className="text-[#EDEDE8]/85 mb-5">
          The platform decouples user interaction surfaces from commerce execution:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono">
          <div className="border border-white/[0.08] bg-[#05080B] p-4 rounded-[2px]">
            <div className="text-[#D4C5A0] font-bold uppercase mb-2">1. Discovery Layer</div>
            <p className="text-[#8A959E] font-body text-[12px]">
              Vite + React single-page application with modular component routing, catalog search indexing, and collection filters.
            </p>
          </div>
          <div className="border border-white/[0.08] bg-[#05080B] p-4 rounded-[2px]">
            <div className="text-[#D4C5A0] font-bold uppercase mb-2">2. Configurator Engine</div>
            <p className="text-[#8A959E] font-body text-[12px]">
              HTML5 Canvas state engine tracking front/back vector coordinates, typography sizing, color matrices, and print exports.
            </p>
          </div>
          <div className="border border-white/[0.08] bg-[#05080B] p-4 rounded-[2px]">
            <div className="text-[#D4C5A0] font-bold uppercase mb-2">3. Modular API Contracts</div>
            <p className="text-[#8A959E] font-body text-[12px]">
              Structured schemas prepared for AWS DynamoDB single-table catalog queries and AWS Lambda verification workers.
            </p>
          </div>
        </div>
      </section>

      {/* 08 AI-ASSISTED FEATURES */}
      <section id="aniva-ai" className="border-b border-white/[0.08] pb-8">
        <div className="flex items-center gap-3 mb-3">
          <span className="font-mono text-xs text-[#D4C5A0] font-semibold">08</span>
          <h2 className="text-lg font-bold tracking-wider text-[#EDEDE8] font-display uppercase">
            AI-ASSISTED FEATURES (CONCEPT &amp; ROADMAP)
          </h2>
        </div>
        <p className="text-[#EDEDE8]/85 mb-4">
          Exploring intelligent styling and discovery capabilities that go beyond rigid attribute matching:
        </p>
        <div className="space-y-3">
          <div className="p-3.5 rounded-[2px] border border-white/[0.08] bg-[#05080B] flex items-start gap-3">
            <Sparkles className="w-4 h-4 text-[#D4C5A0] flex-shrink-0 mt-0.5" />
            <div>
              <div className="text-xs font-mono text-[#EDEDE8] font-bold uppercase">
                Conversational Style Discovery (In Design)
              </div>
              <p className="text-xs text-[#8A959E] mt-1 font-body">
                Allows shoppers to query aesthetics in natural language (e.g., &ldquo;minimalist Japanese streetwear for autumnal weather&rdquo;) and maps semantic intent into catalog filters.
              </p>
            </div>
          </div>
          <div className="p-3.5 rounded-[2px] border border-white/[0.08] bg-[#05080B] flex items-start gap-3">
            <Tag className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
            <div>
              <div className="text-xs font-mono text-[#EDEDE8] font-bold uppercase">
                Automated Condition Tagging &amp; Verification (Prototype Stage)
              </div>
              <p className="text-xs text-[#8A959E] mt-1 font-body">
                Computer-vision assisted inspection of pre-owned garment uploads to detect fraying, color loss, or fabric blemishes and suggest an objective condition grade.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 09 CURRENT PROGRESS */}
      <section id="aniva-progress" className="border-b border-white/[0.08] pb-8">
        <div className="flex items-center gap-3 mb-3">
          <span className="font-mono text-xs text-[#D4C5A0] font-semibold">09</span>
          <h2 className="text-lg font-bold tracking-wider text-[#EDEDE8] font-display uppercase">
            CURRENT PROGRESS
          </h2>
        </div>
        <div className="p-4 rounded-[2px] border border-amber-500/40 bg-amber-500/[0.06] text-amber-200">
          <div className="font-mono text-xs font-bold uppercase tracking-wider mb-1 flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-amber-400 animate-pulse" />
            <span>ACTIVE BUILD: CONTINUOUSLY EVOLVING</span>
          </div>
          <p className="text-xs font-body leading-relaxed text-[#EDEDE8]/90">
            &ldquo;Expanding the commerce experience, marketplace workflows and intelligent product experiences. Continuously evolving.&rdquo;
          </p>
        </div>
      </section>

      {/* 10 CHALLENGES */}
      <section id="aniva-challenges" className="border-b border-white/[0.08] pb-8">
        <div className="flex items-center gap-3 mb-3">
          <span className="font-mono text-xs text-[#D4C5A0] font-semibold">10</span>
          <h2 className="text-lg font-bold tracking-wider text-[#EDEDE8] font-display uppercase">
            ENGINEERING CHALLENGES &amp; SOLUTIONS
          </h2>
        </div>
        <div className="space-y-3 text-xs">
          <div className="p-3.5 rounded-[2px] border border-white/[0.08] bg-[#05080B]">
            <div className="font-mono text-[#D4C5A0] uppercase font-bold mb-1">
              Challenge: Bidirectional Canvas State Synchronization
            </div>
            <p className="text-[#8A959E] font-body leading-relaxed">
              When toggling between front and back garment perspectives, coordinate transformations must be preserved across window resizing and device rotations without re-rendering delays.
            </p>
            <div className="mt-2 text-[#EDEDE8] font-mono text-[11px]">
              <strong>Solution:</strong> Normalized coordinate vectors (0.0 to 1.0) stored independently from viewport pixels, enabling resolution-independent canvas redraws.
            </div>
          </div>
          <div className="p-3.5 rounded-[2px] border border-white/[0.08] bg-[#05080B]">
            <div className="font-mono text-[#D4C5A0] uppercase font-bold mb-1">
              Challenge: Pre-Owned Condition Grading Ambiguity
            </div>
            <p className="text-[#8A959E] font-body leading-relaxed">
              Peer-to-peer sellers tend to overstate garment conditions, eroding buyer confidence in online vintage and resale transactions.
            </p>
            <div className="mt-2 text-[#EDEDE8] font-mono text-[11px]">
              <strong>Solution:</strong> Established rigid rubrics (S, A, B, C) paired with mandatory defect disclosure inputs before listings can be published.
            </div>
          </div>
        </div>
      </section>

      {/* 11 WHAT I'M BUILDING NEXT */}
      <section id="aniva-next" className="border-b border-white/[0.08] pb-8">
        <div className="flex items-center gap-3 mb-3">
          <span className="font-mono text-xs text-[#D4C5A0] font-semibold">11</span>
          <h2 className="text-lg font-bold tracking-wider text-[#EDEDE8] font-display uppercase">
            WHAT I&rsquo;M BUILDING NEXT
          </h2>
        </div>
        <div className="rounded-[2px] border border-[#D4C5A0]/30 bg-[#05080B] p-4">
          <div className="text-xs font-mono text-[#D4C5A0] uppercase tracking-wider font-semibold mb-3">
            NEXT / CURRENT FOCUS:
          </div>
          <ul className="space-y-2 text-xs font-mono text-[#EDEDE8]/90">
            <li className="flex items-center gap-2">
              <span className="text-[#D4C5A0]">→</span>
              <span>Commerce workflow refinement (multi-stage checkout, tax, and order confirmation)</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#D4C5A0]">→</span>
              <span>Marketplace development (seller verification queues and payout state models)</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#D4C5A0]">→</span>
              <span>Custom apparel experience expansion (embroidery textures and Pantone matching)</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#D4C5A0]">→</span>
              <span>AI-assisted experiences (conversational style advisor prototype)</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#D4C5A0]">→</span>
              <span>Backend refinement (migrating mock contracts to AWS Lambda + DynamoDB)</span>
            </li>
          </ul>
        </div>
      </section>

      {/* 12 TECHNOLOGY */}
      <section id="aniva-technology" className="border-b border-white/[0.08] pb-8">
        <div className="flex items-center gap-3 mb-3">
          <span className="font-mono text-xs text-[#D4C5A0] font-semibold">12</span>
          <h2 className="text-lg font-bold tracking-wider text-[#EDEDE8] font-display uppercase">
            TECHNOLOGY STACK
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs font-mono">
          <div className="rounded-[2px] border border-white/[0.08] bg-[#05080B] p-3.5">
            <div className="text-[11px] text-[#D4C5A0] uppercase font-bold mb-2">
              Current Stack (Implemented)
            </div>
            <ul className="space-y-1 text-[#EDEDE8]/90 text-[11px]">
              <li>• React 18/19</li>
              <li>• TypeScript</li>
              <li>• Vite</li>
              <li>• Tailwind CSS</li>
              <li>• Lucide React</li>
              <li>• HTML5 Canvas Engine</li>
            </ul>
          </div>
          <div className="rounded-[2px] border border-white/[0.08] bg-[#05080B] p-3.5">
            <div className="text-[11px] text-amber-400 uppercase font-bold mb-2">
              Planned / In Design
            </div>
            <ul className="space-y-1 text-[#8A959E] text-[11px]">
              <li>• Modular Node.js Backend</li>
              <li>• Stripe Payment API</li>
              <li>• DynamoDB Catalog Table</li>
              <li>• S3 Garment Asset Bucket</li>
              <li>• Gemini AI Style Models</li>
            </ul>
          </div>
          <div className="rounded-[2px] border border-white/[0.08] bg-[#05080B] p-3.5">
            <div className="text-[11px] text-sky-400 uppercase font-bold mb-2">
              Infrastructure
            </div>
            <ul className="space-y-1 text-[#8A959E] text-[11px]">
              <li>• Vercel Edge (Live Preview)</li>
              <li>• GitHub CI / Automated Deploy</li>
              <li>• Target: AWS ECS Fargate</li>
              <li>• Target: AWS CloudFront CDN</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 13 & 14 LIVE PREVIEW & SOURCE CODE */}
      <section id="aniva-links" className="pt-2">
        <div className="flex flex-wrap items-center justify-between gap-4 p-5 rounded-[2px] border border-[#D4C5A0]/30 bg-[#05080B]">
          <div>
            <div className="text-xs font-mono tracking-[0.2em] text-[#D4C5A0] uppercase font-bold">
              13 · 14 LIVE PREVIEW &amp; SOURCE CODE
            </div>
            <div className="text-xs text-[#8A959E] mt-1 font-body">
              Active build deployed on Vercel with open source development repository on GitHub.
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              id="aniva-case-study-live"
              href="https://aniva-ecommerce.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-[2px] border border-[#D4C5A0] bg-[#D4C5A0] px-4 py-2 text-xs font-bold tracking-[0.15em] uppercase text-[#05080B] hover:bg-white transition-all shadow-sm"
            >
              <span>LIVE PREVIEW →</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            <a
              id="aniva-case-study-github"
              href="https://github.com/jeethujee78-afk/Aniva-ecommerce"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-[2px] border border-white/[0.15] bg-[#10161B] px-4 py-2 text-xs font-mono tracking-wider text-[#EDEDE8] hover:border-[#D4C5A0]/60 hover:text-white transition-colors"
            >
              <Github className="w-4 h-4 text-[#D4C5A0]" />
              <span>SOURCE CODE →</span>
            </a>
          </div>
        </div>
      </section>

      {/* Back to Projects Action */}
      <div className="pt-6 border-t border-white/[0.08] flex items-center justify-between">
        <button
          onClick={onClose}
          className="inline-flex items-center gap-2 text-xs font-mono tracking-[0.2em] uppercase text-[#8A959E] hover:text-[#D4C5A0] transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 text-[#D4C5A0]" />
          <span>← BACK TO PROJECTS</span>
        </button>
        <span className="text-[10px] font-mono tracking-widest text-[#8A959E]/60 uppercase">
          ESC TO CLOSE
        </span>
      </div>
    </div>
  );
}
