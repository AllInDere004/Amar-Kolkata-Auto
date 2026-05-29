import React from 'react';
import { motion } from 'motion/react';
import { AppScreen } from '../types';

interface UserProfileProps {
  onNavigate: (screen: AppScreen, transition?: string) => void;
}

export default function UserProfile({ onNavigate }: UserProfileProps) {
  return (
    <div className="bg-[#131316] text-[#e4e1e6] min-h-screen font-sans pb-28 selection:bg-[#ffcc00]/30 overflow-x-hidden">
      {/* Top sticky app bar */}
      <header className="fixed top-0 w-full z-50 bg-[#131316]/80 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-[#ffcc00]/5 flex justify-between items-center px-4 h-16">
        <div className="flex items-center gap-2">
          <button className="active:scale-95 transition-transform text-[#ffcc00] p-1 flex items-center justify-center">
            <span className="material-symbols-outlined text-[26px]">menu</span>
          </button>
          <h1 className="font-sans text-lg font-bold text-[#ffcc00] tracking-tighter">AMAR KOLKATA</h1>
        </div>
        <div className="flex items-center gap-2">
          <button className="active:scale-95 transition-transform text-[#d2c5ab] p-1 flex items-center justify-center">
            <span className="material-symbols-outlined text-[24px]">settings</span>
          </button>
          <button className="active:scale-95 transition-transform text-[#ffcc00] p-1 flex items-center justify-center">
            <span className="material-symbols-outlined text-[24px]">notifications</span>
          </button>
        </div>
      </header>

      {/* Main Container */}
      <main className="mt-16 px-4 flex flex-col gap-6 max-w-lg mx-auto">
        {/* Profile Header (Glassmorphic Hero) */}
        <section className="relative pt-6">
          <div className="glass-card rounded-[24px] p-6 flex flex-col items-center text-center relative overflow-hidden">
            {/* Ambient Glows */}
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#ffcc00]/10 blur-3xl rounded-full"></div>
            <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-[#84d999]/10 blur-3xl rounded-full"></div>

            {/* Avatar block */}
            <div className="relative mb-4">
              <div className="w-24 h-24 rounded-full border-4 border-[#ffcc00] p-1 shadow-2xl active-pulse select-none">
                <img
                  alt="Subhash Mukherjee"
                  className="w-full h-full rounded-full bg-[#1f1f22]"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4X1B8m6EM3KTLAuIs7Jtol5o75esLhBNeNcnr5I_r0gpu_utBxLWUiiXgNzJsq1K25oASY9vFCz8JG6MuHuR2wZ9HN-du1dY-V9wsgxhtv8c59Hzx4q-0yqKZagKBJ0ORDYZb4VS1R4kDSS75bxpsEzpbTcApoaDA9TutkUnrQSCX_Q68L_hNdclADNICIbJ-kafzPAbV7E0nxmdmq5x7ad_zStOIBQMdQljC6KgKebGyAzMYKtzI2Z8uak2Ys4HzE-BFovuY-eTm"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute bottom-0 right-0 bg-[#ffcc00] text-black font-extrabold text-[10px] px-2.5 py-0.5 rounded-full shadow-lg select-none">
                GOLD
              </div>
            </div>

            <h2 className="text-xl font-bold text-white tracking-tight">Subhash Mukherjee</h2>
            
            <div className="flex items-center gap-1 mt-1 justify-center">
              <span className="material-symbols-outlined text-[#ffcc00] text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>stars</span>
              <span className="font-sans text-[10px] font-black text-[#ffcc00] uppercase tracking-wider">Gold Contributor</span>
            </div>

            <p className="text-xs text-[#d2c5ab] mt-2 font-medium">Member since Jan 2024</p>

            <div className="flex gap-4 mt-6 w-full">
              <button 
                onClick={() => alert('Editing profile info...')}
                className="flex-1 h-11 bg-[#ffcc00] hover:bg-[#ffe08b] text-black rounded-full font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1 cursor-pointer"
              >
                <span className="material-symbols-outlined text-base">edit</span>
                Edit Profile
              </button>
              <button 
                onClick={() => alert('Generating share card...')}
                className="flex-grow flex-1 h-11 bg-white/5 hover:bg-white/10 text-white rounded-full font-bold text-xs uppercase border border-white/10 flex items-center justify-center gap-1 cursor-pointer"
              >
                <span className="material-symbols-outlined text-base">share</span>
                Share
              </button>
            </div>
          </div>
        </section>

        {/* Achievement Badges grid */}
        <section className="space-y-3">
          <h3 className="text-sm font-bold text-white tracking-tight leading-none ml-1">Achievements</h3>
          <div className="grid grid-cols-3 gap-3">
            <div className="glass-card p-4 rounded-xl flex flex-col items-center justify-center text-center gap-2 select-none h-24">
              <div className="w-10 h-10 rounded-full bg-[#ffcc00]/10 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[#ffcc00]" style={{ fontVariationSettings: "'FILL' 1" }}>rocket_launch</span>
              </div>
              <span className="font-sans text-[9px] font-bold text-[#e4e1e6] leading-tight">Early Adopter</span>
            </div>

            <div className="glass-card p-4 rounded-xl flex flex-col items-center justify-center text-center gap-2 border-[#ffcc00]/20 bg-[#ffcc00]/5 select-none h-24">
              <div className="w-10 h-10 rounded-full bg-[#ffcc00]/20 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[#ffcc00]" style={{ fontVariationSettings: "'FILL' 1" }}>workspace_premium</span>
              </div>
              <span className="font-sans text-[9px] font-bold text-[#e4e1e6] leading-tight">Top Contributor</span>
            </div>

            <div className="glass-card p-4 rounded-xl flex flex-col items-center justify-center text-center gap-2 select-none h-24">
              <div className="w-10 h-10 rounded-full bg-[#84d999]/10 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[#84d999]" style={{ fontVariationSettings: "'FILL' 1" }}>shield_with_heart</span>
              </div>
              <span className="font-sans text-[9px] font-bold text-[#e4e1e6] leading-tight">Safety Champion</span>
            </div>
          </div>
        </section>

        {/* Stats widgets */}
        <section className="grid grid-cols-2 gap-4">
          <div className="glass-card p-4 rounded-xl flex flex-col h-24 justify-center">
            <span className="text-[10px] font-bold text-[#d2c5ab] mb-1.5 tracking-wider uppercase">Reports Verified</span>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-black text-[#84d999]">45</span>
              <span className="material-symbols-outlined text-[#84d999] text-base font-semibold">verified</span>
            </div>
          </div>

          <div className="glass-card p-4 rounded-xl flex flex-col h-24 justify-center">
            <span className="text-[10px] font-bold text-[#d2c5ab] mb-1.5 tracking-wider uppercase">Queue Updates</span>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-black text-[#ffcc00]">12</span>
              <span className="material-symbols-outlined text-[#ffcc00] text-base font-semibold">update</span>
            </div>
          </div>
        </section>

        {/* Saved Routes list */}
        <section className="space-y-3">
          <div className="flex justify-between items-center ml-1">
            <h3 className="text-sm font-bold text-white tracking-tight leading-none">Saved Routes</h3>
            <button className="text-[#ffcc00] text-[10px] font-bold tracking-widest uppercase">View All</button>
          </div>

          <div className="flex flex-col gap-3">
            <div className="glass-card p-4 rounded-xl flex items-center justify-between border-l-4 border-l-[#ffcc00] shadow-md hover:bg-white/5 transition-colors cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#ffcc00]/10 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[#ffcc00] text-xl">directions_bus</span>
                </div>
                <div>
                  <p className="text-xs font-bold text-white flex items-center gap-1.5">
                    Howrah <span className="material-symbols-outlined text-[10px]">arrow_forward</span> Salt Lake
                  </p>
                  <p className="text-[10px] text-[#d2c5ab]/80 mt-1 font-medium">Daily Commute • S12 Route</p>
                </div>
              </div>
              <span className="material-symbols-outlined text-[#d2c5ab]">chevron_right</span>
            </div>

            <div className="glass-card p-4 rounded-xl flex items-center justify-between border-white/5 opacity-70 hover:opacity-100 transition-opacity cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[#d2c5ab] text-xl">history</span>
                </div>
                <div>
                  <p className="text-xs font-bold text-white flex items-center gap-1.5">
                    Sealdah <span className="material-symbols-outlined text-[10px]">arrow_forward</span> Park St
                  </p>
                  <p className="text-[10px] text-[#d2c5ab]/80 mt-1 font-medium">Recent Trip • Auto</p>
                </div>
              </div>
              <span className="material-symbols-outlined text-[#d2c5ab]">chevron_right</span>
            </div>
          </div>
        </section>

        {/* Support & Logout block */}
        <section className="mb-4">
          <div className="glass-card rounded-2xl divide-y divide-white/5 overflow-hidden">
            <button 
              onClick={() => alert('Launching help section...')}
              className="w-full flex items-center justify-between p-4 bg-transparent hover:bg-white/5 transition-colors select-none text-left cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[#d2c5ab] text-xl">help</span>
                <span className="text-xs font-semibold text-white">Help &amp; Support</span>
              </div>
              <span className="material-symbols-outlined text-[#d2c5ab] text-lg">chevron_right</span>
            </button>

            <button
              id="logout-button"
              onClick={() => onNavigate(AppScreen.LOGIN, 'push_back')}
              className="w-full flex items-center p-4 bg-transparent hover:bg-white/5 text-[#ffb4ab] transition-colors gap-3 cursor-pointer"
            >
              <span className="material-symbols-outlined text-xl">logout</span>
              <span className="text-xs font-bold uppercase tracking-wider">Log Out</span>
            </button>
          </div>
        </section>
      </main>

      {/* Floating Bottom Nav - EXACT MATCHING element specs with BUTTONS containing text */}
      <nav className="fixed bottom-0 w-full z-50 rounded-t-xl bg-[#131316]/95 border-t border-white/10 shadow-[0_-4px_20px_rgba(0,0,0,0.4)] flex justify-around items-center h-20 pb-safe px-4 select-none">
        
        {/* Home Button */}
        <button 
          onClick={() => onNavigate(AppScreen.HOME_REFINED, 'none')}
          className="flex flex-col items-center justify-center text-white/50 hover:text-[#ffcc00] transition-colors p-2 cursor-pointer bg-transparent border-none"
        >
          <span className="material-symbols-outlined text-xl">home</span>
          <span className="text-[10px] font-bold mt-1">Home</span>
        </button>

        {/* Routes Button */}
        <button 
          onClick={() => onNavigate(AppScreen.ROUTE_PLANNER_REFINED, 'none')}
          className="flex flex-col items-center justify-center text-white/50 hover:text-[#ffcc00] transition-colors p-2 cursor-pointer bg-transparent border-none"
        >
          <span className="material-symbols-outlined text-xl">directions_bus</span>
          <span className="text-[10px] font-bold mt-1">Routes</span>
        </button>

        {/* Queue Button */}
        <button 
          onClick={() => onNavigate(AppScreen.QUEUE, 'none')}
          className="flex flex-col items-center justify-center text-white/50 hover:text-[#ffcc00] transition-colors p-2 cursor-pointer bg-transparent border-none"
        >
          <span className="material-symbols-outlined text-xl">format_list_numbered</span>
          <span className="text-[10px] font-bold mt-1">Queue</span>
        </button>

        {/* SOS Button */}
        <button 
          onClick={() => onNavigate(AppScreen.SOS, 'none')}
          className="flex flex-col items-center justify-center text-white/50 hover:text-[#ffcc00] transition-colors p-2 cursor-pointer bg-transparent border-none"
        >
          <span className="material-symbols-outlined text-xl">emergency</span>
          <span className="text-[10px] font-bold mt-1">SOS</span>
        </button>

        {/* Profile Button - Active */}
        <button 
          onClick={() => onNavigate(AppScreen.PROFILE, 'none')}
          className="flex flex-col items-center justify-center text-[#ffcc00] relative p-1.5 px-4 bg-[#ffcc00]/15 rounded-full cursor-pointer bg-transparent border-none font-bold"
        >
          <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>person</span>
          <span className="text-[10px] font-bold mt-0.5">Profile</span>
        </button>
      </nav>
    </div>
  );
}
