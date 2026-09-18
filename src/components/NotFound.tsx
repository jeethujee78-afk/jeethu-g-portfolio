import React from 'react';
import { Home, Search, ArrowLeft, Terminal } from 'lucide-react';

interface NotFoundProps {
  onReturnHome: () => void;
  onOpenCommandPalette: () => void;
}

export function NotFound({ onReturnHome, onOpenCommandPalette }: NotFoundProps) {
  return (
    <div
      id="not-found-page"
      className="min-h-screen bg-[#05080B] text-[#EDEDE8] flex flex-col items-center justify-center p-6 relative overflow-hidden selection:bg-[#D4C5A0]/25 selection:text-white"
    >
      {/* Background Atmosphere */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-radial from-[#D4C5A0]/[0.04] via-transparent to-transparent blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-xl text-center">
        {/* Terminal Status */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[2px] border border-red-500/30 bg-red-500/10 text-red-400 font-mono text-[10px] tracking-[0.25em] uppercase mb-6">
          <Terminal className="h-3 w-3" />
          <span>HTTP 404 · SYSTEM NODE NOT FOUND</span>
        </div>

        {/* 404 Display */}
        <h1 className="text-7xl sm:text-9xl font-black tracking-tight text-[#EDEDE8] font-display mb-4">
          4<span className="text-[#D4C5A0]">0</span>4
        </h1>

        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#EDEDE8] font-display mb-4">
          ARCHITECTURAL COORDINATE UNREACHABLE
        </h2>

        <p className="text-sm text-[#8A959E] font-body leading-relaxed max-w-md mx-auto mb-8">
          The requested route or cloud node does not exist in this deployment cluster. Navigate back to mission control or use the system command palette.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={onReturnHome}
            className="inline-flex items-center gap-2 rounded-[2px] border border-[#D4C5A0] bg-[#D4C5A0] px-6 py-3 text-xs font-bold tracking-wider uppercase text-[#05080B] hover:bg-white hover:border-white transition-all shadow-[0_0_25px_rgba(212,197,160,0.3)] cursor-pointer"
          >
            <Home className="h-4 w-4" />
            <span>RETURN TO MISSION CONTROL</span>
          </button>

          <button
            onClick={onOpenCommandPalette}
            className="inline-flex items-center gap-2 rounded-[2px] border border-white/[0.15] bg-[#0A0F13] px-6 py-3 text-xs font-mono tracking-wider uppercase text-[#EDEDE8] hover:border-[#D4C5A0] hover:text-[#D4C5A0] transition-colors cursor-pointer"
          >
            <Search className="h-4 w-4 text-[#D4C5A0]" />
            <span>OPEN COMMAND PALETTE (CTRL + K)</span>
          </button>
        </div>

        <div className="mt-12 text-[10px] font-mono tracking-widest text-[#8A959E]/50 uppercase">
          JEETHU G · CLOUD ENGINEERING SPECIALIST · SYSTEM ROUTER
        </div>
      </div>
    </div>
  );
}
