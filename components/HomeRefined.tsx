import React from 'react';
import { motion } from 'motion/react';
import { AppScreen } from '../types';

interface HomeRefinedProps {
  onNavigate: (screen: AppScreen, transition?: string) => void;
}

export default function HomeRefined({ onNavigate }: HomeRefinedProps) {
  return (
    <div className="relative min-h-screen text-[#e4e1e6] bg-[#0F0F12] overflow-x-hidden font-sans pb-24">
      {/* Immersive Background Backdrop */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none opacity-40">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-[#0F0F12]/60 to-[#0F0F12]"></div>
        <img
          alt="Cinematic Kolkata background"
          className="w-full h-full object-cover scale-110 filter blur-[1px]"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBixos_8_Ns0M6rKBmAM0aT07tQZxuHErmpI0IfDgCz7zBQoN3wVEJeGeMcAff36QKMI4lerKwHkq0G7LmAdLhjK2EBjnQl263Erv9Gx3P8PhjmCcejA-dnUxYQQ_mopJbbDtYcthXqEVC836_FZtkaADtr6Z51jBw7sFrio9KB88esqZ3-fHueZco-sfK7UV3mKuSG_HhCUlLEYRGbo8qw2JCzuVEFiZ6cLQ8wdNimhqHOidQ2yNm1P7IcnwMw2GW03VJsX3JYejj8"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Top Header */}
      <header className="fixed top-0 w-full z-50 bg-[#131316]/80 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-[#ffcc00]/5 flex justify-between items-center px-4 h-16">
        <div className="flex items-center gap-1.5">
          <button 
            id="admin-menu-btn"
            onClick={() => onNavigate(AppScreen.ADMIN, 'push')}
            className="p-1 active:scale-95 transition-transform hover:opacity-80 flex items-center justify-center cursor-pointer"
          >
            <span className="material-symbols-outlined text-[#ffcc00] text-[28px]">menu</span>
          </button>
          
          <h1 className="font-sans text-[22px] font-bold text-[#ffcc00] tracking-tighter select-none ml-1">
            AMAR KOLKATA
          </h1>
        </div>

        <div className="flex items-center gap-2">
          <button className="relative p-1 active:scale-95 transition-transform hover:opacity-80 flex items-center justify-center">
            <span className="material-symbols-outlined text-[#ffcc00] text-[28px]">notifications</span>
            <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-[#ffb4ab] rounded-full border-2 border-[#131316]"></span>
          </button>
        </div>
      </header>

      {/* Welcome & Main dashboard area */}
      <main className="relative z-10 pt-20 px-4 space-y-6 max-w-lg mx-auto">
        <section className="mt-2">
          <div className="flex flex-col gap-1">
            <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight drop-shadow-md">
              Good Morning, Joydeep
            </h2>
            <p className="text-xs md:text-sm text-[#d2c5ab] font-medium leading-normal">
              The city's moving fast today. Check your routes below.
            </p>
          </div>
        </section>

        {/* Stats metrics widgets block */}
        <section className="grid grid-cols-2 gap-4">
          <div className="glass-panel rounded-2xl p-4 flex flex-col justify-between h-32 relative overflow-hidden">
            <div className="absolute top-2 right-2 opacity-10 pointer-events-none">
              <span className="material-symbols-outlined text-[64px]" style={{ fontVariationSettings: "'FILL' 1" }}>groups</span>
            </div>
            <span className="font-sans text-[10px] tracking-wider text-[#d2c5ab] font-bold uppercase">ACTIVE NOW</span>
            <div className="flex flex-col">
              <span className="font-sans text-2xl font-bold text-[#ffcc00] leading-none">8,432</span>
              <span className="text-xs text-[#84d999] mt-2 flex items-center gap-1 font-medium select-none">
                <span className="material-symbols-outlined text-sm">trending_up</span> Live Commuters
              </span>
            </div>
          </div>

          <div className="glass-panel rounded-2xl p-4 flex flex-col justify-between h-32 relative overflow-hidden">
            <div className="absolute top-2 right-2 opacity-10 pointer-events-none">
              <span className="material-symbols-outlined text-[64px]" style={{ fontVariationSettings: "'FILL' 1" }}>timer</span>
            </div>
            <span className="font-sans text-[10px] tracking-wider text-[#d2c5ab] font-bold uppercase">AVG WAIT</span>
            <div className="flex flex-col">
              <span className="font-sans text-2xl font-bold text-[#ffcc00] leading-none">8 min</span>
              <span className="text-xs text-[#84d999] mt-2 flex items-center gap-1 font-medium select-none">
                <span className="material-symbols-outlined text-sm">check_circle</span> Optimized
              </span>
            </div>
          </div>
        </section>

        {/* Search Route box */}
        <section>
          <div className="glass-panel rounded-full h-14 flex items-center px-4 gap-3 shadow-2xl shadow-black/50 border-white/20">
            <span className="material-symbols-outlined text-[#d2c5ab] hover:text-[#ffcc00] transition-colors">search</span>
            <input
              className="bg-transparent border-none outline-none focus:outline-none focus:ring-0 text-sm text-white flex-grow placeholder-[#d2c5ab]/50"
              placeholder="Search routes, stands..."
              type="text"
            />
            <button className="active:scale-90 transition-transform">
              <span className="material-symbols-outlined text-[#ffcc00] hover:text-white transition-colors">mic</span>
            </button>
          </div>
        </section>

        {/* Horizontal scroll of Nearby Auto Stands */}
        <section>
          <div className="flex justify-between items-end mb-4">
            <h3 className="text-base font-bold text-white tracking-tight">Nearby Auto Stands</h3>
            <button 
              onClick={() => onNavigate(AppScreen.HOME, 'push')}
              className="font-sans text-[11px] tracking-widest text-[#ffcc00] hover:underline font-bold uppercase transition-colors"
            >
              VIEW ALL
            </button>
          </div>

          <div className="flex gap-4 overflow-x-auto hide-scrollbar pb-4 -mx-4 px-4 scroll-smooth">
            {/* Cards Stand 1 */}
            <div className="flex-shrink-0 w-72 glass-panel rounded-2xl p-4 relative flex flex-col justify-between group active:scale-[0.98] transition-all">
              <div className="flex justify-between items-start mb-4">
                <div className="flex flex-col">
                  <span className="text-base font-bold text-white leading-tight">Howrah Station</span>
                  <span className="text-xs text-[#d2c5ab] mt-0.5">Route: H-14</span>
                </div>
                <div className="bg-[#006532]/20 text-[#8ae0a0] px-2.5 py-1 rounded-full flex items-center gap-1 border border-[#006532]/20 shadow-sm">
                  <div className="w-1.5 h-1.5 bg-[#84d999] rounded-full pulse-glow"></div>
                  <span className="font-sans text-[9px] font-bold uppercase tracking-wide">Low Queue</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2.5 mb-4">
                <div className="bg-white/5 rounded-xl p-2.5 border border-white/5">
                  <span className="block text-[9px] font-bold text-[#d2c5ab] tracking-wider">DISTANCE</span>
                  <span className="text-sm font-bold text-white">0.8 km</span>
                </div>
                <div className="bg-white/5 rounded-xl p-2.5 border border-white/5">
                  <span className="block text-[9px] font-bold text-[#d2c5ab] tracking-wider">WAIT TIME</span>
                  <span className="text-sm font-bold text-white">5 min</span>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-xs text-[#d2c5ab]/80 font-medium">15-25 auto avail.</span>
                <button 
                  onClick={() => onNavigate(AppScreen.ROUTE_PLANNER_REFINED, 'push')}
                  className="bg-[#ffcc00] text-[#3d2f00] px-4 py-2 rounded-full font-bold text-xs shadow-lg shadow-[#ffcc00]/20 hover:bg-[#ffe08b] active:scale-95 transition-all"
                >
                  BOOK NOW
                </button>
              </div>
            </div>

            {/* Cards Stand 2 */}
            <div className="flex-shrink-0 w-72 glass-panel rounded-2xl p-4 relative flex flex-col justify-between group opacity-90 active:scale-[0.98] transition-all">
              <div className="flex justify-between items-start mb-4">
                <div className="flex flex-col">
                  <span className="text-base font-bold text-white leading-tight">Sealdah Station</span>
                  <span className="text-xs text-[#d2c5ab] mt-0.5">Route: S-02</span>
                </div>
                <div className="bg-[#93000a]/20 text-[#ffdad6] px-2.5 py-1 rounded-full flex items-center gap-1 border border-[#93000a]/20">
                  <div className="w-1.5 h-1.5 bg-[#ffb4ab] rounded-full"></div>
                  <span className="font-sans text-[9px] font-bold uppercase tracking-wide">High Spike</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2.5 mb-4">
                <div className="bg-white/5 rounded-xl p-2.5 border border-white/5">
                  <span className="block text-[9px] font-bold text-[#d2c5ab] tracking-wider">DISTANCE</span>
                  <span className="text-sm font-bold text-white">1.2 km</span>
                </div>
                <div className="bg-white/5 rounded-xl p-2.5 border border-white/5">
                  <span className="block text-[9px] font-bold text-[#d2c5ab] tracking-wider">WAIT TIME</span>
                  <span className="text-sm font-bold text-white">12 min</span>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-xs text-[#d2c5ab]/80 font-medium">5-8 auto avail.</span>
                <button className="bg-white/5 text-[#e4e1e6] border border-white/10 px-4 py-2 rounded-full font-bold text-xs hover:bg-white/10 active:scale-95 transition-all">
                  NOTIFY ME
                </button>
              </div>
            </div>

            {/* Cards Stand 3 */}
            <div className="flex-shrink-0 w-72 glass-panel rounded-2xl p-4 relative flex flex-col justify-between group active:scale-[0.98] transition-all">
              <div className="flex justify-between items-start mb-4">
                <div className="flex flex-col">
                  <span className="text-base font-bold text-white leading-tight">Gariahat Junction</span>
                  <span className="text-xs text-[#d2c5ab] mt-0.5">Route: G-22</span>
                </div>
                <div className="bg-[#006532]/20 text-[#8ae0a0] px-2.5 py-1 rounded-full flex items-center gap-1 border border-[#006532]/20">
                  <div className="w-1.5 h-1.5 bg-[#84d999] rounded-full pulse-glow"></div>
                  <span className="font-sans text-[9px] font-bold uppercase tracking-wide">Low Queue</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2.5 mb-4">
                <div className="bg-white/5 rounded-xl p-2.5 border border-white/5">
                  <span className="block text-[9px] font-bold text-[#d2c5ab] tracking-wider">DISTANCE</span>
                  <span className="text-sm font-bold text-white">2.4 km</span>
                </div>
                <div className="bg-white/5 rounded-xl p-2.5 border border-white/5">
                  <span className="block text-[9px] font-bold text-[#d2c5ab] tracking-wider">WAIT TIME</span>
                  <span className="text-sm font-bold text-white">3 min</span>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-xs text-[#d2c5ab]/80 font-medium">30+ auto avail.</span>
                <button 
                  onClick={() => onNavigate(AppScreen.ROUTE_PLANNER_REFINED, 'push')}
                  className="bg-[#ffcc00] text-[#3d2f00] px-3.5 py-2 rounded-full font-bold text-xs shadow-lg shadow-[#ffcc00]/20 hover:bg-[#ffe08b] active:scale-95 transition-all"
                >
                  BOOK NOW
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* SOS Panel */}
        <section id="sos-section" className="mt-4">
          <div className="glass-panel rounded-2xl p-4 flex items-center justify-between border-[#ffb4ab]/20 bg-[#ffb4ab]/5 shadow-xl">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#ffb4ab]/10 rounded-full flex items-center justify-center shadow-lg">
                <span className="material-symbols-outlined text-[#ffb4ab] text-[28px] pulse-glow">emergency</span>
              </div>
              <div className="flex flex-col">
                <span className="text-base font-bold text-white leading-none">Emergency SOS</span>
                <span className="text-xs text-[#d2c5ab] mt-1">Instant response from city police</span>
              </div>
            </div>
            
            {/* Specific route driver for slide_up transition */}
            <button
              id="sos-refined-trigger"
              onClick={() => onNavigate(AppScreen.SOS, 'slide_up')}
              className="w-12 h-12 bg-[#ffb4ab] text-[#690005] hover:opacity-90 rounded-full flex items-center justify-center shadow-lg shadow-[#ffb4ab]/40 active:scale-95 transition-transform cursor-pointer"
            >
              <span className="material-symbols-outlined text-[24px]">chevron_right</span>
            </button>
          </div>
        </section>
      </main>

      {/* Floating Action Button */}
      <button 
        onClick={() => onNavigate(AppScreen.ROUTE_PLANNER_REFINED, 'none')}
        className="fixed right-6 bottom-24 w-14 h-14 bg-[#ffcc00] hover:bg-[#ffe08b] text-[#3d2f00] rounded-full shadow-2xl shadow-[#ffcc00]/40 flex items-center justify-center z-40 active:scale-95 transition-transform"
      >
        <span className="material-symbols-outlined text-[28px]">add_location_alt</span>
      </button>

      {/* Bottom Floating Navigation Container */}
      <nav className="fixed bottom-0 w-full z-50 bg-[#131316]/95 border-t border-white/10 shadow-[0_-4px_20px_rgba(0,0,0,0.4)] flex justify-around items-center h-20 pb-safe px-4 select-none">
        
        {/* Home Item */}
        <div 
          onClick={() => onNavigate(AppScreen.HOME_REFINED, 'none')}
          className="flex flex-col items-center justify-center text-[#ffcc00] font-bold cursor-pointer transition-all scale-105"
        >
          <span className="material-symbols-outlined text-[24px]">home</span>
          <span className="font-sans text-[10px] mt-0.5">Home</span>
        </div>

        {/* Routes Item */}
        <div 
          id="nav-routes-div"
          onClick={() => onNavigate(AppScreen.ROUTE_PLANNER_REFINED, 'none')}
          className="flex flex-col items-center justify-center text-[#d2c5ab]/60 hover:text-[#ffcc00] font-bold cursor-pointer transition-all"
        >
          <span className="material-symbols-outlined text-[24px]">directions_bus</span>
          <span className="font-sans text-[10px] mt-0.5">Routes</span>
        </div>

        {/* Queue Item */}
        <div 
          id="nav-queue-div"
          onClick={() => onNavigate(AppScreen.QUEUE, 'none')}
          className="flex flex-col items-center justify-center text-[#d2c5ab]/60 hover:text-[#ffcc00] font-bold cursor-pointer transition-all"
        >
          <span className="material-symbols-outlined text-[24px]">format_list_numbered</span>
          <span className="font-sans text-[10px] mt-0.5">Queue</span>
        </div>

        {/* Profile Item */}
        <div 
          id="nav-profile-div"
          onClick={() => onNavigate(AppScreen.PROFILE, 'none')}
          className="flex flex-col items-center justify-center text-[#d2c5ab]/60 hover:text-[#ffcc00] font-bold cursor-pointer transition-all"
        >
          <span className="material-symbols-outlined text-[24px]">person</span>
          <span className="font-sans text-[10px] mt-0.5">Profile</span>
        </div>
      </nav>
    </div>
  );
}
