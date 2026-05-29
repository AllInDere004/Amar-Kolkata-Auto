import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { AppScreen } from '../types';

interface AdminAnalyticsRefinedProps {
  onNavigate: (screen: AppScreen, transition?: string) => void;
}

export default function AdminAnalyticsRefined({ onNavigate }: AdminAnalyticsRefinedProps) {
  const [commuterCount, setCommuterCount] = useState(42904);

  // Live updates simulator jitter
  useEffect(() => {
    const timer = setInterval(() => {
      setCommuterCount((prev) => prev + Math.floor(Math.random() * 6) - 3);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-[#0a0a0c] text-[#e4e1e6] min-h-screen font-sans pb-24 selection:bg-[#ffcc00]/30 cyber-grid overflow-y-auto">
      {/* Top Header */}
      <header className="fixed top-0 w-full z-50 bg-[#0e0e11]/90 backdrop-blur-md border-b border-white/5 h-16 flex justify-between items-center px-4 md:px-6">
        <div className="flex items-center gap-4">
          <div className="bg-[#f1c100] text-black w-9 h-9 rounded-md flex items-center justify-center font-bold text-xl skew-x-[-12deg] select-none">
            আক
          </div>
          <div>
            <h1 className="font-bold text-sm md:text-base tracking-tight text-white leading-none">MOBILITY INTEL</h1>
            <p className="text-[8px] md:text-[9px] text-[#f1c100]/70 font-bold uppercase tracking-[0.25em] mt-1 select-none">
              Kolkata Command &amp; Control
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5 bg-[#84d999]/10 border border-[#84d999]/20 px-3 py-1 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-[#84d999] shadow-[0_0_8px_#84d999]"></span>
            <span className="text-[10px] font-bold text-[#84d999] tracking-widest uppercase">Nodes Online</span>
          </div>
          <button className="material-symbols-outlined text-white/60 hover:text-[#ffcc00] transition-colors">notifications</button>
        </div>
      </header>

      {/* Main Grid Workspace */}
      <main className="pt-20 px-4 max-w-lg mx-auto space-y-6">
        
        {/* Quick overview metric units row block */}
        <section className="grid grid-cols-2 gap-3">
          {/* Card 1 */}
          <div className="glass-card p-3 rounded-xl border-l-2 border-l-[#f1c100] flex flex-col justify-between h-20 h-24">
            <div className="flex justify-between items-start">
              <p className="text-[9px] font-bold text-white/40 uppercase tracking-wider">Live Commuters</p>
              <span className="text-[#84d999] text-[9px] font-bold">+14%</span>
            </div>
            <div className="flex items-baseline gap-1.5">
              <h3 className="text-lg font-black text-white tabular-nums">{commuterCount.toLocaleString()}</h3>
              <div className="w-10 h-3 overflow-hidden select-none opacity-80">
                <svg className="w-full h-full" viewBox="0 0 100 40">
                  <path className="sparkline-path" d="M0,35 Q20,10 40,25 T80,5 T100,30" fill="none" stroke="#84d999" strokeWidth="3"></path>
                </svg>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="glass-card p-3 rounded-xl border-l-2 border-l-[#84d999] flex flex-col justify-between h-20 h-24">
            <div className="flex justify-between items-start">
              <p className="text-[9px] font-bold text-white/40 uppercase tracking-wider">Active Fleet</p>
              <span className="text-[#84d999] text-[9px] font-bold">98.2%</span>
            </div>
            <div className="flex items-baseline gap-1.5">
              <h3 className="text-lg font-black text-white">9,122</h3>
              <div className="w-10 h-3 overflow-hidden select-none opacity-80">
                <svg className="w-full h-full" viewBox="0 0 100 40">
                  <path className="sparkline-path" d="M0,20 L20,15 L40,30 L60,10 L80,25 L100,5" fill="none" stroke="#f1c100" strokeWidth="3"></path>
                </svg>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="glass-card p-3 rounded-xl border-l-2 border-l-[#ffb4ab] flex flex-col justify-between h-20 h-24">
            <div className="flex justify-between items-start">
              <p className="text-[9px] font-bold text-white/40 uppercase tracking-wider">Congestion Index</p>
              <span className="text-[#ffb4ab] text-[9px] font-bold">High</span>
            </div>
            <div className="flex items-baseline gap-1.5">
              <h3 className="text-lg font-black text-white">0.76</h3>
              <div className="w-10 h-3 overflow-hidden select-none opacity-80">
                <svg className="w-full h-full" viewBox="0 0 100 40">
                  <path className="sparkline-path" d="M0,35 L30,32 L60,15 L100,2" fill="none" stroke="#ffb4ab" strokeWidth="3"></path>
                </svg>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="glass-card p-3 rounded-xl border-l-2 border-l-white/20 flex flex-col justify-between h-20 h-24">
            <div className="flex justify-between items-start">
              <p className="text-[9px] font-bold text-white/40 uppercase tracking-wider">Avg Velocity</p>
              <span className="text-white/40 text-[9px] font-bold">-2km/h</span>
            </div>
            <div className="flex items-baseline gap-1.5">
              <h3 className="text-lg font-black text-white">18.40</h3>
              <span className="text-[9px] font-bold text-white/40">km/h</span>
            </div>
          </div>
        </section>

        {/* Heatmap block layout */}
        <section className="glass-card rounded-2xl overflow-hidden relative min-h-[340px] flex flex-col">
          <div className="p-4 border-b border-white/5 flex justify-between items-center bg-white/[0.02]">
            <div>
              <h2 className="text-xs font-black text-white flex items-center gap-1.5 select-none">
                <span className="material-symbols-outlined text-[#f1c100] text-sm">map</span>
                Digital Twin: Density Map
              </h2>
            </div>
            <span className="px-2 py-0.5 bg-[#f1c100] text-black text-[9px] font-bold uppercase tracking-wider rounded">FLOW</span>
          </div>

          <div className="flex-1 relative bg-black/50 overflow-hidden min-h-[220px]">
            <svg className="w-full h-full opacity-20 filter grayscale" viewBox="0 0 400 200">
              <path d="M20,50 L100,70 L150,40 L250,90 L320,50 L400,100" fill="none" stroke="white" strokeDasharray="4 4" strokeWidth="0.5"></path>
              <path d="M50,150 L180,130 L280,170 L350,140" fill="none" stroke="white" strokeDasharray="4 4" strokeWidth="0.5"></path>
            </svg>

            {/* Simulated Heat node spots */}
            <div className="absolute top-[35%] left-[45%] w-24 h-24 bg-[#ffb4ab]/40 rounded-full blur-md animate-pulse"></div>
            <div className="absolute top-[40%] left-[50%] w-12 h-12 bg-[#ffb4ab]/60 rounded-full blur-md"></div>
            <div className="absolute top-[25%] left-[25%] w-16 h-16 bg-[#f1c100]/30 rounded-full blur-md"></div>

            {/* Interactive pin */}
            <div className="absolute top-[40%] left-[50%] -translate-x-1/2 -translate-y-1/2 group/pin cursor-pointer">
              <div className="w-3.5 h-3.5 bg-[#ffb4ab] rounded-full border border-white shadow-[0_0_10px_#ffb4ab]"></div>
            </div>

            <div className="absolute bottom-4 left-4 flex gap-4 bg-black/60 backdrop-blur px-3 py-1 rounded-md border border-white/5 select-none">
              <div className="flex items-center gap-1">
                <div className="w-2.5 h-2.5 rounded-full bg-[#84d999]"></div>
                <span className="text-[8px] font-bold text-white/60 uppercase">Optimal</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-2.5 h-2.5 rounded-full bg-[#f1c100]"></div>
                <span className="text-[8px] font-bold text-white/60 uppercase">Moderate</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-2.5 h-2.5 rounded-full bg-[#ffb4ab] pulse-warning"></div>
                <span className="text-[8px] font-bold text-white/60 uppercase">Critical</span>
              </div>
            </div>
          </div>
        </section>

        {/* Stand operations statuses */}
        <section className="space-y-3">
          <h2 className="text-xs font-bold text-white">Stand Operations Status</h2>
          <div className="space-y-3">
            {/* Stand 1 */}
            <div className="glass-card p-3 rounded-lg border-t-2 border-t-[#84d999]">
              <div className="flex justify-between items-start mb-2">
                <span className="text-xs font-bold text-white">Salt Lake Sector V</span>
                <span className="px-1.5 py-0.5 rounded bg-[#84d999]/10 text-[#84d999] text-[8px] font-black uppercase">Operational</span>
              </div>
              <div className="space-y-2">
                <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-[#84d999] w-[42%]"></div>
                </div>
                <div className="flex justify-between items-center text-[10px] text-[#d2c5ab]">
                  <span>Clear Flow</span>
                  <span>Load: 42%</span>
                </div>
              </div>
            </div>

            {/* Stand 2 */}
            <div className="glass-card p-3 rounded-lg border-t-2 border-t-[#ffb4ab]">
              <div className="flex justify-between items-start mb-2">
                <span className="text-xs font-bold text-white">Gariahat Junction</span>
                <span className="px-1.5 py-0.5 rounded bg-[#93000a]/30 text-[#ffb4ab] text-[8px] font-black uppercase">At Capacity</span>
              </div>
              <div className="space-y-2">
                <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-[#ffb4ab] w-[96%]"></div>
                </div>
                <div className="flex justify-between items-center text-[10px] text-[#ffb4ab] font-bold animate-pulse">
                  <span>Spike Detected</span>
                  <span>Load: 96%</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Live warnings alert center block */}
        <section className="glass-card rounded-xl p-4 space-y-4 shadow-xl">
          <div className="border-b border-white/5 pb-2 flex items-center justify-between">
            <h3 className="text-xs font-extrabold text-white uppercase tracking-wider">Alert Center</h3>
            <span className="bg-[#93000a] text-[#ffb4ab] text-[8px] font-black px-1.5 py-0.5 rounded-sm">08 LIVE</span>
          </div>

          <div className="p-3 bg-[#93000a]/10 border border-[#93000a]/20 rounded-lg space-y-2.5">
            <div className="flex items-start gap-2">
              <span className="material-symbols-outlined text-[#ffb4ab] text-lg pulse-warning">report</span>
              <div className="flex-grow">
                <div className="flex justify-between items-center">
                  <span className="text-[9px] font-bold text-[#ffb4ab] uppercase">Safety Emergency</span>
                  <span className="text-[8px] text-white/40">2m ago</span>
                </div>
                <p className="text-[11px] text-white font-medium mt-1 leading-relaxed">
                  SOS signal detected from Vehicle WB-02-AL-4432 on AJC Bose Road.
                </p>
                <button
                  onClick={() => alert('West Bengal police dispatch units mobilized!')}
                  className="mt-3 w-full py-1.5 bg-[#ffb4ab] text-black font-extrabold text-[9px] rounded hover:opacity-95 transition-all uppercase tracking-wider cursor-pointer"
                >
                  DISPATCH UNIT
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Futuristic bottom navigation tabs including matching xpath button logic: button has span inside nav */}
      <nav className="fixed bottom-0 w-full z-50 bg-[#0e0e11]/95 border-t border-white/5 h-16 flex justify-center items-center px-4 select-none">
        <div className="flex w-full max-w-sm justify-around">
          
          {/* Dashboard INTEL trigger button */}
          <button 
            onClick={() => onNavigate(AppScreen.ADMIN, 'none')}
            className="flex flex-col items-center gap-1 text-[#f1c100] active:scale-95 transition-transform bg-transparent border-none cursor-pointer"
          >
            <span className="material-symbols-outlined text-xl">dashboard</span>
            <span className="text-[9px] font-bold uppercase tracking-wider">INTEL</span>
          </button>

          {/* Dummy visual tabs to support authentic style but map back gracefully */}
          <button 
            onClick={() => onNavigate(AppScreen.HOME_REFINED, 'push_back')}
            className="flex flex-col items-center gap-1 text-white/40 hover:text-[#ffcc00] active:scale-95 transition-all bg-transparent border-none cursor-pointer"
          >
            <span className="material-symbols-outlined text-xl">home</span>
            <span className="text-[9px] font-bold uppercase tracking-wider">HOME</span>
          </button>

          <button 
            onClick={() => onNavigate(AppScreen.ROUTE_PLANNER_REFINED, 'none')}
            className="flex flex-col items-center gap-1 text-white/40 hover:text-[#ffcc00] active:scale-95 transition-all bg-transparent border-none cursor-pointer"
          >
            <span className="material-symbols-outlined text-xl">map</span>
            <span className="text-[9px] font-bold uppercase tracking-wider">MAP</span>
          </button>
        </div>
      </nav>
    </div>
  );
}
