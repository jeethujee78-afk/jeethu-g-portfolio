import React, { useState } from 'react';
import {
  ArrowLeft,
  ArrowUpRight,
  Github,
  CheckCircle2,
  Clock,
  MapPin,
  Phone,
  MessageCircle,
  Search,
  SlidersHorizontal,
  ChevronDown,
  Layers,
  Sparkles,
  Award,
  Shield,
  Info,
} from 'lucide-react';
import { Project } from '../../types';

interface JaiHindCaseStudyProps {
  project: Project;
  onClose: () => void;
}

export function JaiHindCaseStudy({ project, onClose }: JaiHindCaseStudyProps) {
  const [activeZone, setActiveZone] = useState<string>('cricket');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const showroomZones = [
    {
      id: 'cricket',
      name: 'Cricket Zone',
      icon: '🏏',
      highlight: 'English & Kashmir Willow Bats, Protective Gear, Leather Balls',
      brands: ['SG', 'SS Sunridges', 'MRF'],
      details: 'Full rack selection featuring seasoned English willow, club match balls, batting pads, and custom knocking services.',
    },
    {
      id: 'badminton',
      name: 'Badminton Zone',
      icon: '🏸',
      highlight: 'Astrox & Nanoflare Rackets, Live Electronic Gutting, Shuttles',
      brands: ['YONEX', 'Li-Ning'],
      details: 'Authorized Yonex dealer showcase equipped with certified electronic stringing machine offering 24-30 lbs custom tensioning.',
    },
    {
      id: 'football',
      name: 'Football Zone',
      icon: '⚽',
      highlight: 'FIFA-Quality Match Balls, Molded & Metal Studs, Shin Guards',
      brands: ['Nivia', 'Cosco', 'Nike', 'Puma'],
      details: 'Multi-ground football studs, tournament size 5 balls, goal keeper gloves, and team training bibs.',
    },
    {
      id: 'fitness',
      name: 'Fitness & Gym Zone',
      icon: '🏋️',
      highlight: 'Cast Iron Kettlebells, Hex Dumbbells, Resistance Bands, Benches',
      brands: ['Vector X', 'Cosco'],
      details: 'Commercial and home fitness hardware, rubber-coated plates, pull-up bars, and ergonomic lifting accessories.',
    },
    {
      id: 'accessories',
      name: 'Accessories & Team Wear',
      icon: '🎽',
      highlight: 'Dry-Fit Team Jerseys, Sports Shoes, Grip Tapes, School Kits',
      brands: ['Cosco', 'Vector X', 'Nivia'],
      details: 'Complete school and club sports supplies, trophies, athletic footwear, and specialized hydration gear.',
    },
  ];

  const brandList = [
    { name: 'YONEX', origin: 'Authorized Badminton Specialist' },
    { name: 'SG', origin: 'Cricket Legend Brand' },
    { name: 'SS', origin: 'Sunridges Cricket Heritage' },
    { name: 'COSCO', origin: 'All-India Official Match Gear' },
    { name: 'NIVIA', origin: 'Official ISL & National Football' },
    { name: 'VECTOR X', origin: 'Fitness & Multi-Sport Hardware' },
    { name: 'MRF', origin: 'Pace & Batting Heritage' },
    { name: 'NIKE', origin: 'Performance Footwear & Apparel' },
    { name: 'ADIDAS', origin: 'Footwear & Sporting Goods' },
    { name: 'PUMA', origin: 'Footwear & High-Speed Gear' },
  ];

  const faqs = [
    {
      q: 'Do you offer live racket stringing / gutting in the showroom?',
      a: 'Yes, our showroom operates an authorized Yonex electronic stringing machine with certified technicians providing custom tensioning between 22 lbs and 30 lbs with Yonex BG-65, Nanogy, and Aerobite strings.',
    },
    {
      q: 'Can institutions and schools order sports equipment in bulk?',
      a: 'Yes, we supply registered schools, colleges, and athletic academies throughout Coimbatore with wholesale equipment packages, tournament balls, and custom jersey printing.',
    },
    {
      q: 'How does the digital enquiry system work on this website?',
      a: 'Currently, enquiries submitted on the website are validated and persisted locally in your browser storage (localStorage) with an immediate confirmation ID. Integration with store WhatsApp and SMS notification APIs is in active development.',
    },
  ];

  const activeZoneData = showroomZones.find((z) => z.id === activeZone) || showroomZones[0];

  return (
    <div className="space-y-12 text-sm sm:text-base font-body leading-relaxed text-[#8A959E]">
      {/* 01 OVERVIEW */}
      <section id="jh-overview" className="border-b border-white/[0.08] pb-8">
        <div className="flex items-center gap-3 mb-3">
          <span className="font-mono text-xs text-[#D4C5A0] font-semibold">01</span>
          <h2 className="text-lg font-bold tracking-wider text-[#EDEDE8] font-display uppercase">
            OVERVIEW
          </h2>
        </div>
        <p className="text-[#EDEDE8]/90 mb-4 leading-relaxed">
          Jai Hind Sports is an ongoing premium digital showroom experience designed to bring an established physical sports business in Coimbatore, Tamil Nadu, India into a modern online environment. The project bridges physical retail expertise with digital discovery, enabling athletes, coaches, and sports enthusiasts to browse high-grade equipment, verify authorized brand availability, and initiate direct business enquiries.
        </p>

        <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-[2px] border border-white/[0.1] bg-[#05080B] text-[#EDEDE8]">
            <MapPin className="w-3.5 h-3.5 text-[#D4C5A0]" />
            <span>Coimbatore, Tamil Nadu, India</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-[2px] border border-amber-500/40 bg-amber-500/10 text-amber-300">
            <Clock className="w-3.5 h-3.5 text-amber-400" />
            <span>● ACTIVE BUILD · In Continuous Refinement</span>
          </div>
        </div>
      </section>

      {/* 02 BUSINESS PROBLEM */}
      <section id="jh-problem" className="border-b border-white/[0.08] pb-8">
        <div className="flex items-center gap-3 mb-3">
          <span className="font-mono text-xs text-[#D4C5A0] font-semibold">02</span>
          <h2 className="text-lg font-bold tracking-wider text-[#EDEDE8] font-display uppercase">
            BUSINESS PROBLEM
          </h2>
        </div>
        <div className="rounded-[2px] border-l-2 border-amber-500/80 bg-[#05080B] p-4 text-[#EDEDE8]/85 space-y-2">
          <p>
            Local sports showrooms often command deep authentic expertise, offering equipment selection advice, live racket gutting, and authorized gear from top manufacturers. However, they lack a dedicated digital presence.
          </p>
          <p>
            Customers looking for specific equipment—such as an English willow bat profile, authentic Yonex badminton strings, or tournament-spec footballs—cannot check catalog depth, brand stock, or store operating hours before making the trip across Coimbatore.
          </p>
        </div>
      </section>

      {/* 03 DIGITAL EXPERIENCE */}
      <section id="jh-experience" className="border-b border-white/[0.08] pb-8">
        <div className="flex items-center gap-3 mb-3">
          <span className="font-mono text-xs text-[#D4C5A0] font-semibold">03</span>
          <h2 className="text-lg font-bold tracking-wider text-[#EDEDE8] font-display uppercase">
            DIGITAL EXPERIENCE &amp; SHOWROOM PHILOSOPHY
          </h2>
        </div>
        <p className="text-[#EDEDE8]/85 mb-4">
          Rather than building a generic corporate website, the platform was conceived as an interactive digital showroom. It mirrors the tactile atmosphere of a premium sports shop: high-contrast dark visual tones, zone-based spatial organization, and direct access to store staff.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono">
          <div className="border border-white/[0.08] bg-[#05080B] p-3.5 rounded-[2px]">
            <div className="text-[#D4C5A0] font-bold uppercase mb-1">Tactile Aesthetics</div>
            <p className="text-[#8A959E] font-body text-[11px]">
              Cinematic dark UI inspired by high-end athletics, providing photographic focus on technical equipment.
            </p>
          </div>
          <div className="border border-white/[0.08] bg-[#05080B] p-3.5 rounded-[2px]">
            <div className="text-[#D4C5A0] font-bold uppercase mb-1">Local Business Focus</div>
            <p className="text-[#8A959E] font-body text-[11px]">
              Real-time open/closed showroom badge, direct WhatsApp ordering, and interactive Google Maps direction links.
            </p>
          </div>
          <div className="border border-white/[0.08] bg-[#05080B] p-3.5 rounded-[2px]">
            <div className="text-[#D4C5A0] font-bold uppercase mb-1">Zero-Friction Discovery</div>
            <p className="text-[#8A959E] font-body text-[11px]">
              Instant client-side multi-category search with zero network latency, quick-view inspection sheets, and brand filters.
            </p>
          </div>
        </div>
      </section>

      {/* 04 PRODUCT CATALOGUE */}
      <section id="jh-catalogue" className="border-b border-white/[0.08] pb-8">
        <div className="flex items-center gap-3 mb-3">
          <span className="font-mono text-xs text-[#D4C5A0] font-semibold">04</span>
          <h2 className="text-lg font-bold tracking-wider text-[#EDEDE8] font-display uppercase">
            PRODUCT CATALOGUE (27 CURATED PRODUCTS)
          </h2>
        </div>
        <p className="text-[#EDEDE8]/85 mb-4">
          The platform features 27 hand-curated sporting products across multiple disciplines, each modeled with granular specifications:
        </p>
        <div className="p-4 rounded-[2px] border border-white/[0.08] bg-[#05080B] text-xs font-mono text-[#EDEDE8]/90 grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div>
            <span className="text-[#D4C5A0]">CRICKET (6)</span>
            <div className="text-[#8A959E] text-[11px] mt-0.5">SG, SS, MRF Bats &amp; Pads</div>
          </div>
          <div>
            <span className="text-[#D4C5A0]">BADMINTON (6)</span>
            <div className="text-[#8A959E] text-[11px] mt-0.5">Yonex Astrox, BG65, Mavis</div>
          </div>
          <div>
            <span className="text-[#D4C5A0]">FOOTBALL (5)</span>
            <div className="text-[#8A959E] text-[11px] mt-0.5">Nivia Antrix, Cosco, Studs</div>
          </div>
          <div>
            <span className="text-[#D4C5A0]">FITNESS &amp; GYM (5)</span>
            <div className="text-[#8A959E] text-[11px] mt-0.5">Kettlebells, Benches, Bands</div>
          </div>
          <div>
            <span className="text-[#D4C5A0]">BASKETBALL (2)</span>
            <div className="text-[#8A959E] text-[11px] mt-0.5">Cosco Tournament Grip</div>
          </div>
          <div>
            <span className="text-[#D4C5A0]">VOLLEYBALL (2)</span>
            <div className="text-[#8A959E] text-[11px] mt-0.5">Cosco Super Volley Pro</div>
          </div>
          <div>
            <span className="text-[#D4C5A0]">RUNNING (3)</span>
            <div className="text-[#8A959E] text-[11px] mt-0.5">Spikes, Speed Ropes</div>
          </div>
          <div>
            <span className="text-[#D4C5A0]">ACCESSORIES (5)</span>
            <div className="text-[#8A959E] text-[11px] mt-0.5">Grip Tapes, Bags, Kitbags</div>
          </div>
        </div>
      </section>

      {/* 05 PRODUCT DISCOVERY */}
      <section id="jh-discovery" className="border-b border-white/[0.08] pb-8">
        <div className="flex items-center gap-3 mb-3">
          <span className="font-mono text-xs text-[#D4C5A0] font-semibold">05</span>
          <h2 className="text-lg font-bold tracking-wider text-[#EDEDE8] font-display uppercase">
            PRODUCT DISCOVERY &amp; FILTERING
          </h2>
        </div>
        <p className="text-[#EDEDE8]/85 mb-4">
          Engineered with full client-side discovery patterns to give shoppers instantaneous response times:
        </p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-[#EDEDE8]/80 font-mono">
          <li className="flex items-center gap-2 border border-white/[0.06] bg-[#05080B] p-2.5 rounded-[2px]">
            <span className="text-[#D4C5A0]">✓</span>
            <span>Real-time keyword search across titles and descriptions</span>
          </li>
          <li className="flex items-center gap-2 border border-white/[0.06] bg-[#05080B] p-2.5 rounded-[2px]">
            <span className="text-[#D4C5A0]">✓</span>
            <span>Multi-category filtering across 12 sports disciplines</span>
          </li>
          <li className="flex items-center gap-2 border border-white/[0.06] bg-[#05080B] p-2.5 rounded-[2px]">
            <span className="text-[#D4C5A0]">✓</span>
            <span>Brand-level filtration (Yonex, SG, SS, Cosco, Nivia)</span>
          </li>
          <li className="flex items-center gap-2 border border-white/[0.06] bg-[#05080B] p-2.5 rounded-[2px]">
            <span className="text-[#D4C5A0]">✓</span>
            <span>Quick-view modal with granular technical specs</span>
          </li>
          <li className="flex items-center gap-2 border border-white/[0.06] bg-[#05080B] p-2.5 rounded-[2px]">
            <span className="text-[#D4C5A0]">✓</span>
            <span>Availability filter toggles (In Stock, Pre-Order, Studio Demo)</span>
          </li>
          <li className="flex items-center gap-2 border border-white/[0.06] bg-[#05080B] p-2.5 rounded-[2px]">
            <span className="text-[#D4C5A0]">✓</span>
            <span>Touch-optimized mobile drawer navigation for small screens</span>
          </li>
        </ul>
      </section>

      {/* 06 SPORTS CATEGORIES */}
      <section id="jh-categories" className="border-b border-white/[0.08] pb-8">
        <div className="flex items-center gap-3 mb-3">
          <span className="font-mono text-xs text-[#D4C5A0] font-semibold">06</span>
          <h2 className="text-lg font-bold tracking-wider text-[#EDEDE8] font-display uppercase">
            12 SPORTS DISCIPLINES &amp; CATEGORIES
          </h2>
        </div>
        <div className="flex flex-wrap gap-2 text-xs font-mono">
          {[
            'Cricket',
            'Badminton',
            'Football',
            'Basketball',
            'Volleyball',
            'Gym Equipment',
            'Fitness',
            'Running',
            'Sports Shoes',
            'Sports Wear',
            'Accessories',
            'School Sports Equipment',
          ].map((cat) => (
            <span
              key={cat}
              className="px-3 py-1.5 rounded-[2px] border border-white/[0.08] bg-[#05080B] text-[#EDEDE8]"
            >
              {cat}
            </span>
          ))}
        </div>
      </section>

      {/* 07 BRAND SHOWCASE */}
      <section id="jh-brands" className="border-b border-white/[0.08] pb-8">
        <div className="flex items-center gap-3 mb-3">
          <span className="font-mono text-xs text-[#D4C5A0] font-semibold">07</span>
          <h2 className="text-lg font-bold tracking-wider text-[#EDEDE8] font-display uppercase">
            AUTHENTIC BRAND SHOWCASE (10+ AUTHORIZED BRANDS)
          </h2>
        </div>
        <p className="text-[#EDEDE8]/85 mb-4">
          Highlighting official brand authorizations to establish high customer trust:
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 text-xs font-mono">
          {brandList.map((b) => (
            <div
              key={b.name}
              className="p-3 rounded-[2px] border border-white/[0.08] bg-[#05080B] text-center"
            >
              <div className="text-[#D4C5A0] font-black text-sm">{b.name}</div>
              <div className="text-[10px] text-[#8A959E] mt-1 line-clamp-1">{b.origin}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 08 INTERACTIVE SHOWROOM (5 ZONES) */}
      <section id="jh-showroom" className="border-b border-white/[0.08] pb-8">
        <div className="flex items-center gap-3 mb-3">
          <span className="font-mono text-xs text-[#D4C5A0] font-semibold">08</span>
          <h2 className="text-lg font-bold tracking-wider text-[#EDEDE8] font-display uppercase">
            INTERACTIVE SHOWROOM (5 DESIGNATED ZONES)
          </h2>
        </div>
        <p className="text-[#EDEDE8]/85 mb-5">
          Explore the simulated virtual showroom zones matching the Coimbatore store layout:
        </p>

        {/* Zone Selector Buttons */}
        <div className="flex flex-wrap gap-2 mb-4">
          {showroomZones.map((zone) => (
            <button
              key={zone.id}
              onClick={() => setActiveZone(zone.id)}
              className={`px-3.5 py-1.5 rounded-[2px] font-mono text-xs transition-all cursor-pointer flex items-center gap-1.5 ${
                activeZone === zone.id
                  ? 'border border-[#D4C5A0] bg-[#D4C5A0]/20 text-[#D4C5A0] font-bold'
                  : 'border border-white/[0.08] bg-[#05080B] text-[#8A959E] hover:text-[#EDEDE8]'
              }`}
            >
              <span>{zone.icon}</span>
              <span>{zone.name}</span>
            </button>
          ))}
        </div>

        {/* Zone Card */}
        <div className="p-5 rounded-[2px] border border-[#D4C5A0]/40 bg-[#05080B]">
          <div className="flex items-center justify-between border-b border-white/[0.06] pb-3 mb-3">
            <div className="flex items-center gap-2">
              <span className="text-xl">{activeZoneData.icon}</span>
              <div className="font-mono text-sm font-bold text-[#EDEDE8] uppercase">
                {activeZoneData.name}
              </div>
            </div>
            <div className="flex gap-1 text-[10px] font-mono text-[#D4C5A0]">
              {activeZoneData.brands.map((b) => (
                <span key={b} className="border border-[#D4C5A0]/30 px-2 py-0.5 rounded-[2px]">
                  {b}
                </span>
              ))}
            </div>
          </div>
          <div className="text-xs text-[#D4C5A0] font-mono mb-2">
            KEY EQUIPMENT: {activeZoneData.highlight}
          </div>
          <p className="text-xs text-[#8A959E] font-body leading-relaxed">
            {activeZoneData.details}
          </p>
        </div>
      </section>

      {/* 09 BRAND IDENTITY */}
      <section id="jh-identity" className="border-b border-white/[0.08] pb-8">
        <div className="flex items-center gap-3 mb-3">
          <span className="font-mono text-xs text-[#D4C5A0] font-semibold">09</span>
          <h2 className="text-lg font-bold tracking-wider text-[#EDEDE8] font-display uppercase">
            BRAND IDENTITY &amp; COLOR SYSTEM
          </h2>
        </div>
        <p className="text-[#EDEDE8]/85 mb-4">
          A bespoke visual identity combining Indian heritage with sleek athletic precision:
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 text-xs font-mono mb-4">
          <div className="p-3 rounded-[2px] border border-[#FF9933]/40 bg-[#05080B]">
            <div className="h-6 w-full rounded-[2px] bg-[#FF9933] mb-2" />
            <div className="text-[#EDEDE8] font-bold">SAFFRON</div>
            <div className="text-[#8A959E] text-[10px]">#FF9933 · Energy</div>
          </div>
          <div className="p-3 rounded-[2px] border border-white/20 bg-[#05080B]">
            <div className="h-6 w-full rounded-[2px] bg-[#FFFFFF] mb-2" />
            <div className="text-[#EDEDE8] font-bold">WHITE</div>
            <div className="text-[#8A959E] text-[10px]">#FFFFFF · Clarity</div>
          </div>
          <div className="p-3 rounded-[2px] border border-[#138808]/40 bg-[#05080B]">
            <div className="h-6 w-full rounded-[2px] bg-[#138808] mb-2" />
            <div className="text-[#EDEDE8] font-bold">INDIAN GREEN</div>
            <div className="text-[#8A959E] text-[10px]">#138808 · Turf</div>
          </div>
          <div className="p-3 rounded-[2px] border border-white/10 bg-[#05080B]">
            <div className="h-6 w-full rounded-[2px] bg-[#1F2428] mb-2" />
            <div className="text-[#EDEDE8] font-bold">CHARCOAL</div>
            <div className="text-[#8A959E] text-[10px]">#1F2428 · Structure</div>
          </div>
          <div className="p-3 rounded-[2px] border border-white/10 bg-[#05080B]">
            <div className="h-6 w-full rounded-[2px] bg-[#05080B] border border-white/20 mb-2" />
            <div className="text-[#EDEDE8] font-bold">OBSIDIAN</div>
            <div className="text-[#8A959E] text-[10px]">#05080B · Canvas</div>
          </div>
        </div>
      </section>

      {/* 10 CONTACT & ENQUIRY (CRITICAL CALLOUT) */}
      <section id="jh-enquiry" className="border-b border-white/[0.08] pb-8">
        <div className="flex items-center gap-3 mb-3">
          <span className="font-mono text-xs text-[#D4C5A0] font-semibold">10</span>
          <h2 className="text-lg font-bold tracking-wider text-[#EDEDE8] font-display uppercase">
            CONTACT &amp; ENQUIRY WORKFLOW
          </h2>
        </div>

        {/* CRITICAL CALLOUT BANNER MANDATED BY USER */}
        <div className="p-4 rounded-[2px] border-2 border-amber-500/60 bg-amber-500/[0.08] text-amber-200 mb-6 shadow-sm">
          <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider mb-1">
            <Info className="w-4 h-4 text-amber-400 flex-shrink-0" />
            <span>CRITICAL INFRASTRUCTURE TRANSPARENCY</span>
          </div>
          <p className="text-xs font-body text-[#EDEDE8]/95 leading-relaxed">
            <strong>CURRENT IMPLEMENTATION:</strong> Client-side enquiry persistence using browser localStorage. Form submissions validate Indian mobile numbers (+91), email syntax, and equipment queries, generate an Enquiry ID (e.g. JHS-2026-XXXX), and store records locally. There is currently no remote CRM or cloud database connected.
          </p>
        </div>

        {/* Features list */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono mb-5">
          <div className="border border-white/[0.06] bg-[#05080B] p-3 rounded-[2px]">
            <div className="text-[#D4C5A0] font-bold mb-1">Validation Rules</div>
            <p className="text-[#8A959E] font-body text-[11px]">
              Mandatory name, 10-digit Indian mobile (+91), RFC-compliant email, and minimum query character lengths.
            </p>
          </div>
          <div className="border border-white/[0.06] bg-[#05080B] p-3 rounded-[2px]">
            <div className="text-[#D4C5A0] font-bold mb-1">Live Store Status</div>
            <p className="text-[#8A959E] font-body text-[11px]">
              Calculates current operating hours (10:00 AM – 9:30 PM IST) and displays real-time OPEN / CLOSED indicator.
            </p>
          </div>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-2">
          <div className="text-xs font-mono text-[#D4C5A0] uppercase font-bold tracking-wider mb-2">
            FREQUENTLY ASKED QUESTIONS (FAQ)
          </div>
          {faqs.map((faq, idx) => (
            <div key={faq.q} className="rounded-[2px] border border-white/[0.08] bg-[#05080B]">
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full text-left p-3 flex items-center justify-between text-xs font-semibold text-[#EDEDE8] cursor-pointer"
              >
                <span>{faq.q}</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 text-[#D4C5A0] transition-transform ${
                    openFaq === idx ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openFaq === idx && (
                <div className="px-3 pb-3 text-xs text-[#8A959E] font-body border-t border-white/[0.04] pt-2">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 11 RESPONSIVE DESIGN */}
      <section id="jh-responsive" className="border-b border-white/[0.08] pb-8">
        <div className="flex items-center gap-3 mb-3">
          <span className="font-mono text-xs text-[#D4C5A0] font-semibold">11</span>
          <h2 className="text-lg font-bold tracking-wider text-[#EDEDE8] font-display uppercase">
            RESPONSIVE DESIGN &amp; MOBILE PRECISION
          </h2>
        </div>
        <p className="text-[#EDEDE8]/85 text-xs sm:text-sm">
          Designed with desktop-first visual balance and mobile-first touch optimization. Features 48px minimum touch targets, collapsible bottom-sheet filter drawers on viewports under 640px, and horizontal-safe container padding math.
        </p>
      </section>

      {/* 12 MOTION & INTERACTION */}
      <section id="jh-motion" className="border-b border-white/[0.08] pb-8">
        <div className="flex items-center gap-3 mb-3">
          <span className="font-mono text-xs text-[#D4C5A0] font-semibold">12</span>
          <h2 className="text-lg font-bold tracking-wider text-[#EDEDE8] font-display uppercase">
            MOTION &amp; TACTILE INTERACTION
          </h2>
        </div>
        <p className="text-[#EDEDE8]/85 text-xs sm:text-sm">
          Uses the modern Motion library for layout transitions, tab switching animations, subtle hover elevation on equipment cards, and spring-physics modal reveals that never drop frame rates on low-power mobile devices.
        </p>
      </section>

      {/* 13 SEO */}
      <section id="jh-seo" className="border-b border-white/[0.08] pb-8">
        <div className="flex items-center gap-3 mb-3">
          <span className="font-mono text-xs text-[#D4C5A0] font-semibold">13</span>
          <h2 className="text-lg font-bold tracking-wider text-[#EDEDE8] font-display uppercase">
            SEO &amp; JSON-LD STRUCTURED METADATA
          </h2>
        </div>
        <div className="p-4 rounded-[2px] border border-white/[0.08] bg-[#05080B] text-xs font-mono text-[#8A959E]">
          <div className="text-[#D4C5A0] font-bold mb-2 uppercase">Verified Search Engine Assets:</div>
          <ul className="space-y-1 text-[#EDEDE8]/90 text-[11px]">
            <li>• JSON-LD LocalBusiness / SportingGoodsStore schema markup</li>
            <li>• Canonical URL metadata tags &amp; OpenGraph tags</li>
            <li>• Dedicated robots.txt crawl permissions &amp; sitemap.xml</li>
            <li>• Semantic HTML5 landmark structure for accessibility (WCAG AA)</li>
          </ul>
        </div>
      </section>

      {/* 14 CURRENT PROGRESS */}
      <section id="jh-progress" className="border-b border-white/[0.08] pb-8">
        <div className="flex items-center gap-3 mb-3">
          <span className="font-mono text-xs text-[#D4C5A0] font-semibold">14</span>
          <h2 className="text-lg font-bold tracking-wider text-[#EDEDE8] font-display uppercase">
            CURRENT PROGRESS
          </h2>
        </div>
        <div className="p-4 rounded-[2px] border border-amber-500/40 bg-amber-500/[0.06] text-amber-200">
          <div className="font-mono text-xs font-bold uppercase tracking-wider mb-1 flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-amber-400 animate-pulse" />
            <span>ACTIVE BUILD: CONTINUOUS REFINEMENT</span>
          </div>
          <p className="text-xs font-body leading-relaxed text-[#EDEDE8]/90">
            &ldquo;Refining the digital showroom, product discovery and business enquiry experience.&rdquo;
          </p>
        </div>
      </section>

      {/* 15 WHAT I'M BUILDING NEXT */}
      <section id="jh-next" className="border-b border-white/[0.08] pb-8">
        <div className="flex items-center gap-3 mb-3">
          <span className="font-mono text-xs text-[#D4C5A0] font-semibold">15</span>
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
              <span>Catalogue refinement (expanding technical bat profile dimensions and string tension charts)</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#D4C5A0]">→</span>
              <span>Showroom experience (360-degree panoramic virtual inspection of Coimbatore zones)</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#D4C5A0]">→</span>
              <span>Enquiry workflow improvements (automated WhatsApp Business and SMS enquiry forwarding)</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#D4C5A0]">→</span>
              <span>Business integration with daily store inventory and supplier ordering</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#D4C5A0]">→</span>
              <span>Production-readiness improvements (headless CMS migration and edge CDN asset caching)</span>
            </li>
          </ul>
        </div>
      </section>

      {/* 16 TECHNOLOGY */}
      <section id="jh-technology" className="border-b border-white/[0.08] pb-8">
        <div className="flex items-center gap-3 mb-3">
          <span className="font-mono text-xs text-[#D4C5A0] font-semibold">16</span>
          <h2 className="text-lg font-bold tracking-wider text-[#EDEDE8] font-display uppercase">
            TECHNOLOGY STACK
          </h2>
        </div>
        <p className="text-xs text-[#8A959E] mb-3">
          Verified stack directly implemented in the repository:
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-mono">
          {[
            'React 19',
            'TypeScript',
            'Vite',
            'React Router',
            'Tailwind CSS',
            'Motion',
            'Lucide React',
            'JSON-LD SEO',
          ].map((t) => (
            <div
              key={t}
              className="p-2.5 rounded-[2px] border border-white/[0.08] bg-[#05080B] text-[#EDEDE8] text-center"
            >
              {t}
            </div>
          ))}
        </div>
      </section>

      {/* 17 & 18 LIVE PREVIEW & SOURCE CODE */}
      <section id="jh-links" className="pt-2">
        <div className="flex flex-wrap items-center justify-between gap-4 p-5 rounded-[2px] border border-[#D4C5A0]/30 bg-[#05080B]">
          <div>
            <div className="text-xs font-mono tracking-[0.2em] text-[#D4C5A0] uppercase font-bold">
              17 · 18 LIVE PREVIEW &amp; SOURCE CODE
            </div>
            <div className="text-xs text-[#8A959E] mt-1 font-body">
              Active build live on Vercel with public development repository on GitHub.
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              id="jh-case-study-live"
              href="https://jai-hind-sports-zeta.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-[2px] border border-[#D4C5A0] bg-[#D4C5A0] px-4 py-2 text-xs font-bold tracking-[0.15em] uppercase text-[#05080B] hover:bg-white transition-all shadow-sm"
            >
              <span>LIVE PREVIEW →</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            <a
              id="jh-case-study-github"
              href="https://github.com/jeethujee78-afk/jai-hind-sports"
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
