import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { AppScreen } from '../types';

interface AdminAnalyticsProps {
  onNavigate: (screen: AppScreen, transition?: string) => void;
}

export default function AdminAnalytics({ onNavigate }: AdminAnalyticsProps) {
  const [activeUsers, setActiveUsers] = useState(12847);
  const [speed1, setSpeed1] = useState(25);
  const [speed2, setSpeed2] = useState(0);

  // Simple live telemetry changes simulation
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveUsers((prev) => prev + Math.floor(Math.random() * 5) - 2);
      setSpeed1((prev) => Math.max(15, Math.min(35, prev + Math.floor(Math.random() * 3) - 1)));
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-[#131116] text-[#e4e1e6] min-h-screen font-sans pb-28 selection:bg-[#ffcc00]/30 overflow-x-hidden">
      {/* Top App Bar containing precise precede-sibling button matching */}
      <header className="fixed top-0 w-full z-50 bg-[#131316]/85 backdrop-blur-xl border-b border-white/10 shadow-lg h-16 flex justify-between items-center px-4">
        <div className="flex items-center gap-3">
          {/* Preceding sibling button to direct parent div hosting AMAR KOLKATA */}
          <button 
            onClick={() => onNavigate(AppScreen.ADMIN_REFINED, 'push')}
            className="material-symbols-outlined text-[#ffcc00] p-2 hover:bg-white/5 rounded-full transition-all cursor-pointer font-bold shrink-0"
          >
            analytics
          </button>

          {/* Ancestor div containing AMAR KOLKATA h1 */}
          <div className="flex items-center gap-2">
            <h1 className="font-sans text-base md:text-lg font-black text-[#ffcc00] tracking-tight leading-none">
              AMAR KOLKATA
            </h1>
            <span className="hidden md:inline-block bg-[#1f1f22] border border-white/5 text-[9px] font-bold tracking-widest text-[#d2c5ab] px-2 py-0.5 rounded-md uppercase">
              Transit Admin Terminal
            </span>
          </div>
        </div>

        {/* Live status indicators */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 bg-[#84d999]/15 border border-[#84d999]/20 px-3 py-1 rounded-full text-[10px] font-bold text-[#84d999]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#84d999] animate-pulse"></span>
            LIVE SYSTEMS
          </div>

          <div className="w-8 h-8 rounded-full border border-white/20 overflow-hidden bg-[#353438] shrink-0 select-none">
            <img
              alt="Admin"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvfnc9Q3jkEN0UGXUcQNTRGXxTf-YwOkVfh5OIiIiM0QtFrbsorgtqZqGS2tqH1VQE_-GLW1qGF2i2Tsr9zuT1gweWQGr-iJpxxD1YKtmhm9TaCmXjcyOmQicjsV7-YWAY27SK2HQXakaXVBn3l9uuvdBQbhA_-yOngaE4rEAI260bv8RNoT3AcLOT77ZXhiiuXns9xIOD1zgwsLW56nWtAZuPw6rwof6GkyB17swLnWHT5EHdGXjhcW83ammqxAqPVZ0RDFD9Lqkr"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </header>

      {/* Main Dashboard body */}
      <main className="pt-20 px-4 space-y-6 max-w-lg mx-auto">
        <section className="mb-2 mt-2">
          <div className="flex justify-between items-end">
            <div>
              <div className="flex items-center gap-2 text-[#ffcc00] mb-1">
                <span className="material-symbols-outlined text-sm">dashboard</span>
                <span className="text-[10px] font-bold tracking-widest uppercase">Admin Analytics</span>
              </div>
              <h2 className="text-xl font-bold text-white tracking-tight">System Control</h2>
            </div>
            
            <button 
              onClick={() => alert('Exporting live city summary report...')}
              className="bg-[#ffcc00] hover:bg-[#ffe08b] text-black px-3.5 py-1.5 rounded-full text-[10px] font-extrabold flex items-center gap-1 cursor-pointer"
            >
              <span className="material-symbols-outlined text-sm">download</span>
              REPORT
            </button>
          </div>
        </section>

        {/* KPI stats Grid */}
        <section className="grid grid-cols-2 gap-4">
          {/* Users metric */}
          <div className="glass-card rounded-xl p-4 relative overflow-hidden flex flex-col justify-between h-28">
            <span className="text-[9px] font-bold text-[#d2c5ab] tracking-wider">ACTIVE USERS</span>
            <div className="flex flex-col">
              <span className="text-xl font-black text-white">{activeUsers.toLocaleString()}</span>
              <span className="text-[9px] text-[#84d999] mt-1 font-semibold flex items-center gap-0.5">
                +12% Today
              </span>
            </div>
          </div>

          {/* Total autos metric */}
          <div className="glass-card rounded-xl p-4 flex flex-col justify-between h-28">
            <span className="text-[9px] font-bold text-[#d2c5ab] tracking-wider">TOTAL AUTOS</span>
            <div className="flex flex-col">
              <span className="text-xl font-black text-white">9,379</span>
              <span className="text-[9px] text-white/50 mt-1 font-medium">125 Routes</span>
            </div>
          </div>

          {/* Active routes */}
          <div className="glass-card rounded-xl p-4 flex flex-col justify-between h-28">
            <span className="text-[9px] font-bold text-[#d2c5ab] tracking-wider">ACTIVE ROUTES</span>
            <div className="flex flex-col">
              <span className="text-xl font-black text-white">125</span>
              <span className="text-[9px] text-[#84d999] mt-1 font-bold">100% Operational</span>
            </div>
          </div>

          {/* Alerts count */}
          <div className="glass-card rounded-xl p-1.5 border-[#93000a] bg-[#93000a]/5 flex flex-col justify-between h-28 p-4">
            <span className="text-[9px] font-bold text-[#ffb4ab] tracking-wider">CONGESTION ALERTS</span>
            <div className="flex flex-col">
              <span className="text-xl font-black text-[#ffb4ab]">1,256</span>
              <span className="text-[9px] text-[#ffb4ab] mt-1 font-semibold animate-pulse uppercase">
                Spikes detected
              </span>
            </div>
          </div>
        </section>

        {/* Simulated Queue map preview */}
        <section className="glass-card p-4 rounded-xl space-y-3">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-xs font-black text-white tracking-tight">Queue Heatmap</h3>
              <p className="text-[9px] text-[#d2c5ab]/75 mt-0.5 font-semibold">Real-time metropolitan commuter density</p>
            </div>
            
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#84d999]"></span>
              <span className="text-[8px] text-[#d2c5ab]/60 font-bold uppercase">LOW</span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#ffcc00]"></span>
              <span className="text-[8px] text-[#d2c5ab]/60 font-bold uppercase">MED</span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#ffb4ab] pulse-glow"></span>
              <span className="text-[8px] text-[#d2c5ab]/60 font-bold uppercase">HIGH</span>
            </div>
          </div>

          <div className="relative h-44 rounded-lg overflow-hidden border border-white/5 bg-black/40">
            <img
              alt="heat map overview"
              className="w-full h-full object-cover opacity-20 filter grayscale select-none"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-iLyIZaT5mRcTiQlp0aKw84QfBVzosJo0iKuFk8jEHiyybfjQljgWYsx56-OUHU4QxiWcD6xF7keRt7xMxY5jgQPdMw4Jez8558gCgPC4CjTYfmZ0Za0xYYwh81x1nqKGZTZd1553kzH32_3OnvylsooXBdSeAead0ym9UY5ag6BAphx20XjtawNO13-cFod0CkKzIna0YWEKQt6YR4dtYEtdAiw8wRtzArudjvJ-oXin4xbiZILrFQLb-EZlOQ_c50Al5pBrdYQj"
              referrerPolicy="no-referrer"
            />
            {/* Pulsing pointers */}
            <div className="absolute top-[35%] left-[30%] group">
              <div className="w-6 h-6 rounded-full bg-[#ffb4ab]/40 animate-ping absolute"></div>
              <div className="w-6 h-6 rounded-full bg-[#ffb4ab] border border-white flex items-center justify-center cursor-pointer text-[8px] text-black font-extrabold shadow-md">
                84
              </div>
            </div>

            <div className="absolute bottom-[35%] right-[35%] group">
              <div className="w-5 h-5 rounded-full bg-[#ffcc00]/40 animate-ping absolute"></div>
              <div className="w-5 h-5 rounded-full bg-[#ffcc00] border border-white flex items-center justify-center cursor-pointer text-[8px] text-black font-extrabold shadow-md">
                42
              </div>
            </div>
          </div>
        </section>

        {/* AI Control Insights recommendations */}
        <section className="glass-card p-4 rounded-xl space-y-4">
          <div className="flex justify-between items-center border-b border-white/5 pb-2.5">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#ffcc00]">psychology</span>
              <h4 className="text-xs font-extrabold text-white tracking-tight leading-none">AI Insights</h4>
            </div>
          </div>

          <div className="space-y-3">
            <div className="p-3 rounded-lg bg-white/5 border-l-4 border-l-[#ffb4ab]">
              <p className="text-[10px] font-bold text-[#ffb4ab] uppercase tracking-wider mb-1">Queue Spike Detected</p>
              <p className="text-xs text-white/90 leading-relaxed font-semibold">
                Shantinagar to Ruby route seeing abnormal commuter build-up.
              </p>
            </div>

            <div className="p-3 rounded-lg bg-white/5 border-l-4 border-l-[#ffcc00]">
              <p className="text-[10px] font-bold text-[#ffcc00] uppercase tracking-wider mb-1">Low Availability</p>
              <p className="text-xs text-white/90 leading-relaxed font-semibold">
                Sector V Stand: 15% drop in available autos compared to Tuesday average benchmark.
              </p>
            </div>
          </div>
        </section>

        {/* Live database Table */}
        <section className="glass-card rounded-xl overflow-hidden pb-2.5">
          <div className="p-4 border-b border-white/5 flex items-center justify-between">
            <h4 className="text-xs font-extrabold text-white">Live Operations</h4>
            <span className="text-[9px] font-bold text-[#ffcc00] uppercase">Live</span>
          </div>

          <div className="divide-y divide-white/5">
            {/* Row 1 */}
            <div className="p-3.5 hover:bg-white/5 transition-colors flex items-center justify-between">
              <div>
                <p className="text-xs font-extrabold text-white">WB-02-AL-4432</p>
                <p className="text-[10px] text-[#d2c5ab] mt-1 font-semibold">Garia - Golpark</p>
              </div>
              <div className="text-right">
                <span className="text-[10px] font-bold text-[#84d999]">ON ROUTE</span>
                <p className="text-[10px] text-white/50 mt-1 font-bold">{speed1} km/h</p>
              </div>
            </div>

            {/* Row 2 */}
            <div className="p-3.5 hover:bg-white/5 transition-colors flex items-center justify-between">
              <div>
                <p className="text-xs font-extrabold text-[#ffb4ab]">WB-04-AK-1288</p>
                <p className="text-[10px] text-[#ffb4ab] mt-1 font-semibold">Tollygunge - Hazra</p>
              </div>
              <div className="text-right">
                <span className="text-[10px] font-bold text-[#ffb4ab] animate-pulse">STALLED</span>
                <p className="text-[10px] text-white/50 mt-1 font-bold">0 km/h</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Floating Bottom Nav - EXACT MATCHING anchor name requirements for back navigation mapping */}
      <nav className="fixed bottom-0 w-full z-50 bg-[#131316]/95 border-t border-white/5 shadow-[0_-4px_20px_rgba(0,0,0,0.4)] rounded-t-xl flex justify-around items-center h-20 pb-safe px-4 select-none">
        {/* Specific anchor for Home to match and trigger push_back transition */}
        <a 
          id="admin-nav-home-anchor"
          onClick={(e) => { e.preventDefault(); onNavigate(AppScreen.HOME_REFINED, 'push_back'); }}
          href="#"
          className="flex flex-col items-center justify-center text-white/50 hover:text-[#ffcc00] transition-colors p-2 cursor-pointer"
        >
          <span className="material-symbols-outlined">home</span>
          <span className="font-sans text-[10px] mt-1">Home</span>
        </a>

        <a 
          onClick={(e) => { e.preventDefault(); onNavigate(AppScreen.ROUTE_PLANNER_REFINED, 'none'); }}
          href="#"
          className="flex flex-col items-center justify-center text-white/50 hover:text-[#ffcc00] transition-colors p-2 cursor-pointer"
        >
          <span className="material-symbols-outlined">directions_bus</span>
          <span className="font-sans text-[10px] mt-1">Routes</span>
        </a>

        <a 
          onClick={(e) => { e.preventDefault(); onNavigate(AppScreen.QUEUE, 'none'); }}
          href="#"
          className="flex flex-col items-center justify-center text-white/50 hover:text-[#ffcc00] transition-colors p-2 cursor-pointer"
        >
          <span className="material-symbols-outlined">format_list_numbered</span>
          <span className="font-sans text-[10px] mt-1">Queue</span>
        </a>
      </nav>
    </div>
  );
}
