import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { AppScreen } from '../types';

interface QueueTrackerProps {
  onNavigate: (screen: AppScreen, transition?: string) => void;
}

export default function QueueTracker({ onNavigate }: QueueTrackerProps) {
  const [commuterCount, setCommuterCount] = useState(23);

  // Simulating live count change
  useEffect(() => {
    const timer = setInterval(() => {
      setCommuterCount((prev) => {
        const change = Math.floor(Math.random() * 3) - 1; // -1, 0, or 1
        return Math.max(15, Math.min(35, prev + change));
      });
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-[#131316] text-[#e4e1e6] min-h-screen font-sans pb-28 selection:bg-[#ffcc00]/30 overflow-x-hidden">
      {/* Top sticky app bar */}
      <header className="fixed top-0 w-full z-50 bg-[#131316]/80 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-[#ffcc00]/5 flex justify-between items-center px-4 h-16">
        <div className="flex items-center gap-2">
          <button className="material-symbols-outlined text-[#ffcc00] p-2 hover:bg-white/5 rounded-full transition-colors font-semibold">
            menu
          </button>
          <h1 className="font-sans text-lg font-bold text-[#ffcc00] tracking-tighter">AMAR KOLKATA</h1>
        </div>
        <div className="flex items-center gap-1">
          <button className="material-symbols-outlined text-[#ffcc00] p-2">notifications</button>
        </div>
      </header>

      {/* Main Container */}
      <main className="pt-20 px-4 space-y-6 max-w-lg mx-auto">
        {/* Dropdown Selector */}
        <section className="space-y-2">
          <label className="text-[10px] font-bold text-[#d2c5ab] block ml-1 uppercase tracking-widest">
            SELECTED AUTO STAND
          </label>
          <div className="glass-panel rounded-xl p-4 flex items-center justify-between cursor-pointer hover:bg-white/5 transition-colors">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-[#ffcc00] text-xl">location_on</span>
              <span className="text-base font-bold text-white">Howrah Station</span>
            </div>
            <span className="material-symbols-outlined text-[#d2c5ab]">expand_more</span>
          </div>
        </section>

        {/* Live Queue Main Card Display */}
        <section className="glass-panel rounded-[24px] p-6 space-y-6 glow-primary relative overflow-hidden">
          <div className="absolute inset-0 shimmer opacity-20 pointer-events-none"></div>
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-lg font-extrabold text-white tracking-tight">Live Queue</h2>
              <p className="text-xs text-[#d2c5ab]">Real-time commuter count</p>
            </div>
            <div className="bg-[#006532]/20 text-[#8ae0a0] px-3 py-1 rounded-full flex items-center gap-1.5 border border-[#006532]/20">
              <span className="w-1.5 h-1.5 rounded-full bg-[#84d999] pulse-glow"></span>
              <span className="font-sans text-[10px] font-black uppercase tracking-wider">LIVE</span>
            </div>
          </div>

          <div className="flex items-center justify-center py-4">
            <div className="relative text-center">
              <div className="text-[64px] font-black leading-none text-[#ffcc00] tracking-tighter select-none">
                {commuterCount}
              </div>
              <div className="font-sans text-[9px] font-extrabold tracking-widest text-[#d2c5ab] mt-1 select-none">
                PEOPLE WAITING
              </div>
            </div>
          </div>

          {/* Queue progress slider levels */}
          <div className="space-y-2">
            <div className="flex justify-between font-sans text-[9px] font-black uppercase tracking-wider">
              <span className="text-[#84d999]">Low</span>
              <span className="text-[#ffcc00]">Moderate</span>
              <span className="text-[#ffb4ab]">Heavy</span>
            </div>
            <div className="h-2 w-full bg-[#353438] rounded-full overflow-hidden flex relative">
              <div className="h-full bg-[#84d999] w-1/4"></div>
              <div className="h-full bg-[#ffcc00] w-1/2 relative">
                {/* Pointer pointer level lines indicator representing 23 waiting count */}
                <div 
                  className="absolute top-0 w-1 h-full bg-white shadow-2xl transition-all duration-500" 
                  style={{ left: `${((commuterCount - 15) / 20) * 100}%` }}
                ></div>
              </div>
              <div className="h-full bg-[#ffb4ab] w-1/4"></div>
            </div>
          </div>
        </section>

        {/* Prediction Daily Flow Chart */}
        <section className="glass-panel rounded-2xl p-5 space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-sm font-bold text-white tracking-tight">Daily Flow</h3>
            <div className="flex items-center gap-1 text-[#d1bcff]">
              <span className="material-symbols-outlined text-base">auto_awesome</span>
              <span className="font-sans text-[9px] font-extrabold tracking-wider">AI PREDICTED</span>
            </div>
          </div>

          {/* Graphical columns representation */}
          <div className="h-32 flex items-end justify-between px-1 gap-1.5 pt-4">
            <div className="w-full bg-[#353438] rounded-t-sm h-[40%] hover:bg-[#ffcc00]/50 transition-colors"></div>
            <div className="w-full bg-[#353438] rounded-t-sm h-[60%] hover:bg-[#ffcc00]/50 transition-colors"></div>
            <div className="w-full bg-[#ffcc00]/30 rounded-t-sm h-[85%] relative hover:bg-[#ffcc00]/50 transition-colors">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[#131316] border border-white/5 px-1 py-0.5 rounded text-[8px] text-[#ffcc00] font-black">
                Peak
              </div>
            </div>
            <div className="w-full bg-[#353438] rounded-t-sm h-[70%] hover:bg-[#ffcc00]/50 transition-colors"></div>
            <div className="w-full bg-[#353438] rounded-t-sm h-[50%] hover:bg-[#ffcc00]/50 transition-colors"></div>
            <div className="w-full bg-[#353438] rounded-t-sm h-[30%] hover:bg-[#ffcc00]/50 transition-colors"></div>
            <div className="w-full bg-[#353438] rounded-t-sm h-[20%] hover:bg-[#ffcc00]/50 transition-colors"></div>
          </div>

          <div className="flex justify-between font-sans text-[9px] font-extrabold text-[#d2c5ab]/60 px-1 select-none">
            <span>08:00</span>
            <span>12:00</span>
            <span>16:00</span>
            <span>20:00</span>
          </div>
        </section>

        {/* Community Reports listing */}
        <section className="space-y-4 pb-4">
          <h3 className="text-sm font-bold text-white tracking-tight ml-1">Community Reports</h3>
          <div className="space-y-3">
            {/* Report 1 */}
            <div className="glass-panel p-4 rounded-2xl flex gap-4 items-start">
              <div className="w-10 h-10 rounded-full border border-white/10 overflow-hidden shrink-0 bg-[#353438]">
                <img
                  alt="Subhash M."
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDlRDPXEtym9c2k7v5pRMIK7m3y3GwLN0rkdM7Uw-TTnylF-1gETVNZ8QBgxO7DDaQT-ntDtrq_kvoGw8bxHBfd3PY0NMI4lRdfx1eGYNgB5yLHAwZPJV1-xRYqUFKSWd3-237db7WPdHDobmuwNeZxRdrRQh6v4ugraH2H9EsxaNHNiT3p9ipUOp0CKjH6YbZyxJNW_KS6TVETQ5LCfPR_kIcuDqAHBig7XhNlhm7vcBAGZqluk4f8Y17jlpQ8d9SXSeQXwGqSHZao"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex-grow space-y-1">
                <div className="flex justify-between items-center">
                  <span className="font-sans text-[10px] font-bold text-[#e4e1e6]">Subhash M.</span>
                  <span className="font-sans text-[8px] font-bold text-[#d2c5ab]/60">5 MIN AGO</span>
                </div>
                <p className="text-xs text-[#d2c5ab] leading-relaxed">
                  Queue moving fast near Platform 1, got auto in{' '}
                  <span className="text-[#84d999] font-bold">8 mins</span>.
                </p>
                <div className="flex items-center gap-1 pt-1 text-[#84d999]">
                  <span className="material-symbols-outlined text-[#84d999] text-xs">verified_user</span>
                  <span className="text-[9px] font-bold uppercase tracking-wider">VERIFIED COMMUTER</span>
                </div>
              </div>
            </div>

            {/* Report 2 */}
            <div className="glass-panel p-4 rounded-2xl flex gap-4 items-start">
              <div className="w-10 h-10 rounded-full border border-white/10 overflow-hidden shrink-0 bg-[#353438]">
                <img
                  alt="Ananya D."
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQQSCfN4p9WIhlH5qDgiBTYPhKapdtmTJHy0hdiSXdTgNBTKrx4PL3fA9skvGt4TkuDTdd2BXXd4dQHndWzAuANqTxApOeE0wkihMz8neP4FidhzXgXZfXrMtNqWs3m9_FQZnjigNKT56HY0QF7kncFytG5Cte1PreJP0kVLIPDsju_BYNjKZMr4jaN98fiU-af0TzrJLt4k9YrRH6b-ZY2HWWWTvkfaMddcDY23Kvb1VsfZyCSld1H5hs_x2Kr12zmq-QkgboB08h"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex-grow space-y-1">
                <div className="flex justify-between items-center">
                  <span className="font-sans text-[10px] font-bold text-[#e4e1e6]">Ananya D.</span>
                  <span className="font-sans text-[8px] font-bold text-[#d2c5ab]/60">12 MIN AGO</span>
                </div>
                <p className="text-xs text-[#d2c5ab] leading-relaxed">
                  Slight rush due to train arrival. Expected wait{' '}
                  <span className="text-[#ffcc00] font-bold">15 mins</span>.
                </p>
                <div className="flex items-center gap-1 pt-1 text-[#84d999]">
                  <span className="material-symbols-outlined text-[#84d999] text-xs">verified_user</span>
                  <span className="text-[9px] font-bold uppercase tracking-wider">VERIFIED COMMUTER</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Floating Bottom Nav - EXACT MATCHING xpath anchor structure */}
      <nav className="fixed bottom-0 w-full z-50 bg-[#131316]/95 border-t border-white/5 shadow-[0_-4px_20px_rgba(0,0,0,0.4)] rounded-t-xl flex justify-around items-center h-20 pb-safe px-4 select-none">
        
        {/* Home link */}
        <a 
          onClick={(e) => { e.preventDefault(); onNavigate(AppScreen.HOME_REFINED, 'none'); }}
          href="#"
          className="flex flex-col items-center justify-center text-white/50 hover:text-[#ffcc00] transition-colors p-2"
        >
          <span className="material-symbols-outlined">home</span>
          <span className="font-sans text-[10px] mt-1">Home</span>
        </a>

        {/* Routes link */}
        <a 
          onClick={(e) => { e.preventDefault(); onNavigate(AppScreen.ROUTE_PLANNER_REFINED, 'none'); }}
          href="#"
          className="flex flex-col items-center justify-center text-white/50 hover:text-[#ffcc00] transition-colors p-2"
        >
          <span className="material-symbols-outlined">directions_bus</span>
          <span className="font-sans text-[10px] mt-1">Routes</span>
        </a>

        {/* Queue active link */}
        <a 
          onClick={(e) => { e.preventDefault(); onNavigate(AppScreen.QUEUE, 'none'); }}
          href="#"
          className="flex flex-col items-center justify-center text-[#ffcc00] relative p-1.5 px-4 bg-[#ffcc00]/10 rounded-full"
        >
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
            format_list_numbered
          </span>
          <span className="font-sans text-[10px] mt-0.5">Queue</span>
        </a>

        {/* SOS link */}
        <a 
          onClick={(e) => { e.preventDefault(); onNavigate(AppScreen.SOS, 'none'); }}
          href="#"
          className="flex flex-col items-center justify-center text-white/50 hover:text-[#ffcc00] transition-colors p-2"
        >
          <span className="material-symbols-outlined">emergency</span>
          <span className="font-sans text-[10px] mt-1">SOS</span>
        </a>

        {/* Profile link */}
        <a 
          onClick={(e) => { e.preventDefault(); onNavigate(AppScreen.PROFILE, 'none'); }}
          href="#"
          className="flex flex-col items-center justify-center text-white/50 hover:text-[#ffcc00] transition-colors p-2"
        >
          <span className="material-symbols-outlined">person</span>
          <span className="font-sans text-[10px] mt-1">Profile</span>
        </a>
      </nav>
    </div>
  );
}
