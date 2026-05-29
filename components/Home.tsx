import React from 'react';
import { motion } from 'motion/react';
import { AppScreen } from '../types';

interface HomeProps {
  onNavigate: (screen: AppScreen, transition?: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  return (
    <div className="relative min-h-screen text-[#e4e1e6] bg-[#0c0c0e] overflow-x-hidden font-sans pb-24">
      {/* Immersive Background */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-[#131316]/40 to-[#131316] z-10"></div>
        <img
          alt="Kolkata Streetscape"
          className="w-full h-full object-cover scale-110 blur-[2px]"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuA28bexz7Bj5SCfn5VQuPsfqOtJ5-ADLDsO4S8MmkABLTXk_l2p9Oz_4KFwlwX8wAQgMh0lUbLEWYS5QSBa4vAKrpxb4IeJkYQXQRs6iRiNmuYRHqykhF7ZWLjpb0a9BqrV1g1kYcQu5xng-37LqfH6v4T_CVtRhnykXgDxhOuC1TuXpHj4xP6GJAsR9aFzRVdja8aRlFKaTR4Jkynt_eQwY1mUAMVXbwuFestiIM5nLBlMnPvzMQxtgOwvq1cFt6JbT-Kz9Z4IaeJd"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Floating Header */}
      <header className="fixed top-0 w-full z-50 bg-[#131316]/60 backdrop-blur-2xl border-b border-white/5 flex justify-between items-center px-6 h-14">
        <div className="flex items-center gap-2">
          <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 active:bg-white/10 transition-colors">
            <span className="material-symbols-outlined text-[#ffcc00] text-[24px]">menu</span>
          </button>
          <h1 className="font-sans text-[22px] font-extrabold text-[#ffcc00] tracking-tight">AMAR KOLKATA</h1>
        </div>
        <div className="flex items-center">
          <button className="relative w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 active:bg-white/10 transition-colors">
            <span className="material-symbols-outlined text-[#ffcc00] text-[24px]">notifications</span>
            <span className="absolute top-2.5 right-2/2.5 w-2 h-2 bg-[#ffb4ab] rounded-full border-2 border-[#131316]"></span>
          </button>
        </div>
      </header>

      {/* Welcome Banner */}
      <main className="relative z-10 pt-16 pb-24 px-4 space-y-6 max-w-lg mx-auto">
        <section className="mb-2 mt-2">
          <div className="flex flex-col">
            <h2 className="text-xl font-bold text-white tracking-tight">Shu-probhat, Joydeep</h2>
            <p className="text-xs text-[#d2c5ab]/85 mt-0.5">City transit is running smoothly today.</p>
          </div>
        </section>

        {/* Compact stats widgets */}
        <section className="grid grid-cols-2 gap-3">
          <div className="glass-panel rounded-xl p-3 flex items-center gap-3 shadow-lg border-white/5">
            <div className="w-10 h-10 rounded-lg bg-[#ffcc00]/10 flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[#ffcc00] text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>groups</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-bold text-[#d2c5ab] tracking-wider uppercase">ACTIVE</span>
              <span className="text-lg font-bold text-white leading-none mt-1">8,432</span>
            </div>
          </div>

          <div className="glass-panel rounded-xl p-3 flex items-center gap-3 shadow-lg border-white/5">
            <div className="w-10 h-10 rounded-lg bg-[#84d999]/10 flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[#84d999] text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>timer</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-bold text-[#d2c5ab] tracking-wider uppercase">WAIT</span>
              <span className="text-lg font-bold text-white leading-none mt-1">8 min</span>
            </div>
          </div>
        </section>

        {/* Search tool block */}
        <section>
          <div className="glass-search rounded-full h-11 flex items-center px-4 gap-2.5 shadow-xl border-white/10">
            <span className="material-symbols-outlined text-[#d2c5ab] text-[20px]">search</span>
            <input
              className="bg-transparent border-none outline-none focus:outline-none focus:ring-0 text-xs text-[#e4e1e6] flex-grow placeholder-[#d2c5ab]/40"
              placeholder="Search routes or stands..."
              type="text"
            />
            <button className="w-8 h-8 flex items-center justify-center text-[#ffcc00] active:scale-90 transition-transform">
              <span className="material-symbols-outlined text-[20px]">mic</span>
            </button>
          </div>
        </section>

        {/* Standard Nearby Auto Stands slider layout */}
        <section>
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-base font-bold text-white tracking-tight">Nearby Auto Stands</h3>
            <button 
              onClick={() => onNavigate(AppScreen.HOME_REFINED, 'push')}
              className="text-[11px] font-bold text-[#ffcc00] tracking-widest uppercase hover:opacity-75 transition-opacity"
            >
              VIEW ALL
            </button>
          </div>

          <div className="flex gap-4 overflow-x-auto hide-scrollbar pb-4 -mx-4 px-4 scroll-smooth">
            {/* Card 1 */}
            <div className="flex-shrink-0 w-72 glass-panel rounded-2xl overflow-hidden shadow-xl border-white/5 flex flex-col justify-between">
              <div className="relative h-28">
                <img
                  alt="Howrah"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfdZpUSaNK5DWIb6XtM8CCJL7jaqDt39bqCIiFiWsJhoPXXyWQl0wp9KDIDPl1YB7Zj-xA0Fodo9gSWPjsfeLcOCXy5NzaULZwURNjW4Hz3JcnQoCBOHmuUYbOqxF5oQRjKpveCa-1Rpz1dX-mGAyhyUx6ppblzSsyYKgPMrDFtIDXf-STt36Pm40HKW-jF51ThgHfJk4XwhLTsEcmY6S5j_qLrOPRzF1YGQfyrxIckb5Yg_hLgdLGsJcUTKLqrVX6g1kHUHpMGidZ"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute top-3 left-3 flex gap-2">
                  <span className="bg-[#84d999]/95 text-[#00391a] text-[10px] px-2 py-0.5 rounded-full font-bold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-white rounded-full pulse-glow"></span> LOW QUEUE
                  </span>
                </div>
                <div className="absolute bottom-3 left-3">
                  <h4 className="text-base font-bold text-white leading-tight">Howrah Station</h4>
                  <span className="text-[11px] text-[#ffcc00]/80 font-medium">Route: H-14 • West Bengal</span>
                </div>
              </div>

              <div className="p-3">
                <div className="grid grid-cols-2 gap-2 mb-3">
                  <div className="bg-white/5 rounded-lg p-2 border border-white/5">
                    <span className="block text-[9px] font-bold text-[#d2c5ab] tracking-wider">DISTANCE</span>
                    <span className="text-xs font-bold text-white">0.8 km</span>
                  </div>
                  <div className="bg-white/5 rounded-lg p-2 border border-white/5">
                    <span className="block text-[9px] font-bold text-[#d2c5ab] tracking-wider">AVG WAIT</span>
                    <span className="text-xs font-bold text-white">5 min</span>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-2.5">
                  <span className="text-[11px] text-[#d2c5ab]/80 font-medium whitespace-nowrap">15+ Autos Available</span>
                  <button
                    onClick={() => onNavigate(AppScreen.ROUTE_PLANNER_REFINED, 'push')}
                    className="bg-[#ffcc00] hover:bg-[#ffe08b] text-[#3d2f00] px-3.5 py-1.5 rounded-full text-xs font-extrabold tracking-tight active:scale-95 transition-all shadow-lg shadow-[#ffcc00]/20"
                  >
                    BOOK NOW
                  </button>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex-shrink-0 w-72 glass-panel rounded-2xl overflow-hidden shadow-xl border-white/5 opacity-90 flex flex-col justify-between">
              <div className="relative h-28">
                <img
                  alt="Sealdah"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBezT0jlicrNUzlxsHfnQWVvyFDahoVyPWTG0eBaOKBu5N35fRyVhm_6zRCgsQnmkbaK79RgBGFQeozKRWxbA70eAeIkhMdGhaKqg-uyMDoaNvRmGiSbciY_JrIpWocs8oTBDPulbuPyKKSC_LsfKclKchuqDi0OtYN08pd532BhuuSeMlIdfXoQ_XUZGWBaBEA_zl36xeMYfwvKPyX8TMHWVojceuAxfaRQEBD374qTkOypuT2wW5BwE76L5fJ8tffuKc1IBUlms87"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute top-3 left-3 flex gap-2">
                  <span className="bg-[#ffb4ab]/90 text-[#690005] text-[10px] px-2 py-0.5 rounded-full font-bold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-white/50 rounded-full"></span> HEAVY SPIKE
                  </span>
                </div>
                <div className="absolute bottom-3 left-3">
                  <h4 className="text-base font-bold text-white leading-tight">Sealdah Station</h4>
                  <span className="text-[11px] text-[#ffcc00]/80 font-medium">Route: S-02 • East Gate</span>
                </div>
              </div>

              <div className="p-3">
                <div className="grid grid-cols-2 gap-2 mb-3">
                  <div className="bg-white/5 rounded-lg p-2 border border-white/5">
                    <span className="block text-[9px] font-bold text-[#d2c5ab] tracking-wider">DISTANCE</span>
                    <span className="text-xs font-bold text-white">1.2 km</span>
                  </div>
                  <div className="bg-white/5 rounded-lg p-2 border border-white/5">
                    <span className="block text-[9px] font-bold text-[#d2c5ab] tracking-wider">AVG WAIT</span>
                    <span className="text-xs font-bold text-white">12 min</span>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-2.5">
                  <span className="text-[11px] text-[#d2c5ab]/80 font-medium whitespace-nowrap">Limited Availability</span>
                  <button className="bg-white/5 text-white/70 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-tight border border-white/5">
                    NOTIFY ME
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SOS Panel */}
        <section className="mt-2">
          <div className="glass-panel rounded-2xl p-4 flex items-center justify-between border-[#ffb4ab]/20 bg-[#ffb4ab]/5 shadow-xl">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#ffb4ab]/20 rounded-full flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[#ffb4ab] text-[28px]" style={{ fontVariationSettings: "'FILL' 1" }}>emergency</span>
              </div>
              <div className="flex flex-col">
                <span className="text-base font-bold text-white leading-tight">Emergency SOS</span>
                <span className="text-xs text-[#d2c5ab] mt-1">Instant City Police Response</span>
              </div>
            </div>
            <button 
              onClick={() => onNavigate(AppScreen.SOS, 'none')}
              className="w-10 h-10 bg-[#ffb4ab] text-[#690005] hover:opacity-90 rounded-full flex items-center justify-center shadow-lg active:scale-90 transition-transform cursor-pointer"
            >
              <span className="material-symbols-outlined text-[20px]">chevron_right</span>
            </button>
          </div>
        </section>
      </main>

      {/* Floating Action Selector */}
      <button 
        onClick={() => onNavigate(AppScreen.ROUTE_PLANNER_REFINED, 'none')}
        className="fixed right-6 bottom-20 w-12 h-12 bg-[#ffcc00] hover:bg-[#ffe08b] text-[#3d2f00] rounded-full shadow-2xl shadow-[#ffcc00]/40 flex items-center justify-center z-40 active:scale-90 transition-all cursor-pointer"
      >
        <span className="material-symbols-outlined text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>add_location_alt</span>
      </button>

      {/* Navigation bar with specific matching xpath structure: span text & parent div */}
      <nav className="fixed bottom-0 w-full z-50 bg-[#131316]/90 backdrop-blur-3xl border-t border-white/5 flex justify-around items-center h-16 pb-safe px-4 shadow-2xl">
        {/* Home Item */}
        <div 
          onClick={() => onNavigate(AppScreen.HOME_REFINED, 'none')}
          className="flex flex-col items-center justify-center text-[#ffcc00] font-semibold cursor-pointer"
        >
          <span className="material-symbols-outlined text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>home</span>
          <span className="text-[10px] font-bold mt-0.5">Home</span>
        </div>

        {/* Routes Item */}
        <div 
          onClick={() => onNavigate(AppScreen.ROUTE_PLANNER_REFINED, 'none')}
          className="flex flex-col items-center justify-center text-white/60 hover:text-[#ffcc00] font-semibold cursor-pointer"
        >
          <span className="material-symbols-outlined text-[24px]">directions_bus</span>
          <span className="text-[10px] font-bold mt-0.5">Routes</span>
        </div>

        {/* SOS Item */}
        <div 
          onClick={() => onNavigate(AppScreen.SOS, 'none')}
          className="flex flex-col items-center justify-center text-white/60 hover:text-[#ffcc00] font-semibold cursor-pointer"
        >
          <span className="material-symbols-outlined text-[24px]">emergency</span>
          <span className="text-[10px] font-bold mt-0.5">SOS</span>
        </div>

        {/* Profile Item */}
        <div 
          onClick={() => onNavigate(AppScreen.PROFILE, 'none')}
          className="flex flex-col items-center justify-center text-white/60 hover:text-[#ffcc00] font-semibold cursor-pointer"
        >
          <span className="material-symbols-outlined text-[24px]">person</span>
          <span className="text-[10px] font-bold mt-0.5">Profile</span>
        </div>
      </nav>
    </div>
  );
}
