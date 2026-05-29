import React, { useState } from 'react';
import { motion } from 'motion/react';
import { AppScreen } from '../types';

interface EmergencySOSProps {
  onNavigate: (screen: AppScreen, transition?: string) => void;
}

export default function EmergencySOS({ onNavigate }: EmergencySOSProps) {
  const [sosSent, setSosSent] = useState(false);

  const triggerSos = () => {
    setSosSent(true);
    setTimeout(() => {
      alert('SOS Alert Sent successfully! Dispatched West Bengal city police and shared live GPS coordinate.');
      setSosSent(false);
    }, 1500);
  };

  return (
    <div className="bg-[#131316] text-[#e4e1e6] min-h-screen font-sans pb-28 selection:bg-[#ffb4ab]/30 overflow-x-hidden">
      {/* Top sticky app bar */}
      <header className="fixed top-0 w-full z-50 bg-[#131316]/80 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-[#ffcc00]/5 flex justify-between items-center px-4 h-16">
        <div className="flex items-center gap-2">
          <button className="material-symbols-outlined text-[#ffcc00] p-2 hover:bg-white/5 rounded-full transition-colors font-semibold">
            menu
          </button>
          <h1 className="font-sans text-lg font-bold text-[#ffcc00] tracking-tighter">AMAR KOLKATA</h1>
        </div>
        <button className="material-symbols-outlined text-[#ffcc00] p-2">notifications</button>
      </header>

      {/* Main Container */}
      <main className="pt-20 px-4 space-y-6 max-w-lg mx-auto">
        {/* SOS Heart Trigger Panel */}
        <section className="flex flex-col items-center py-6 space-y-6 text-center">
          <div className="relative w-48 h-48 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full border-4 border-[#ffcc00] animate-sos-ring opacity-20"></div>
            <div className="absolute inset-4 rounded-full border-2 border-[#ffcc00] animate-sos-ring opacity-40 animate-delay-1000"></div>
            
            <button
              onClick={triggerSos}
              className="relative w-36 h-36 rounded-full bg-[#ffcc00] hover:bg-[#ffe08b] text-[#3d2f00] flex flex-col items-center justify-center shadow-[0_0_40px_rgba(255,204,0,0.4)] animate-sos-dot active:scale-95 transition-transform"
            >
              <span className="font-sans text-[38px] font-black tracking-tighter leading-none">
                {sosSent ? 'SENT' : 'SOS'}
              </span>
              <span className="font-sans text-[9px] mt-1.5 font-bold tracking-widest uppercase opacity-80">
                {sosSent ? 'Dispatched' : 'Tap to Hold'}
              </span>
            </button>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-bold text-[#ffcc00] tracking-tight">Emergency SOS</h2>
            <p className="text-xs text-[#d2c5ab] max-w-xs mx-auto leading-relaxed">
              24×7 Emergency Assistance. Press for immediate help in Kolkata.
            </p>
          </div>

          {/* Alert state pill */}
          <div className="flex items-center gap-2 px-4 py-2 bg-[#93000a]/20 border border-[#93000a]/30 rounded-full select-none justify-center max-w-xs mx-auto">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ffb4ab] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#ffb4ab]"></span>
            </span>
            <p className="font-sans text-[10px] text-[#ffb4ab] font-bold">
              Alerting emergency services and sharing live location...
            </p>
          </div>
        </section>

        {/* Hotlines Grid */}
        <section className="space-y-3">
          <h3 className="font-sans text-[11px] font-bold text-[#d2c5ab]/60 uppercase tracking-widest ml-1">
            Direct Hotlines
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <a className="glass-panel p-4 rounded-xl flex flex-col items-center gap-2.5 active:scale-95 transition-transform group" href="tel:100">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[#ffcc00] group-hover:bg-[#ffcc00] group-hover:text-[#3d2f00] transition-colors">
                <span className="material-symbols-outlined text-[20px]">local_police</span>
              </div>
              <div className="text-center">
                <p className="text-sm font-bold text-white leading-none">100</p>
                <p className="font-sans text-[9px] text-[#d2c5ab]/60 font-bold mt-1 tracking-wider">POLICE</p>
              </div>
            </a>

            <a className="glass-panel p-4 rounded-xl flex flex-col items-center gap-2.5 active:scale-95 transition-transform group" href="tel:108">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[#84d999] group-hover:bg-[#84d999] group-hover:text-[#00391a] transition-colors">
                <span className="material-symbols-outlined text-[20px]">medical_services</span>
              </div>
              <div className="text-center">
                <p className="text-sm font-bold text-white leading-none">108</p>
                <p className="font-sans text-[9px] text-[#d2c5ab]/60 font-bold mt-1 tracking-wider">AMBULANCE</p>
              </div>
            </a>

            <a className="glass-panel p-4 rounded-xl flex flex-col items-center gap-2.5 active:scale-95 transition-transform group" href="tel:181">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[#ffe08b] group-hover:bg-[#ffe08b] group-hover:text-[#241a00] transition-colors">
                <span className="material-symbols-outlined text-[20px]">woman</span>
              </div>
              <div className="text-center">
                <p className="text-sm font-bold text-white leading-none">181</p>
                <p className="font-sans text-[9px] text-[#d2c5ab]/60 font-bold mt-1 tracking-wider">WOMEN HELPLINE</p>
              </div>
            </a>

            <a className="glass-panel p-4 rounded-xl flex flex-col items-center gap-2.5 active:scale-95 transition-transform group" href="tel:101">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[#ffb4ab] group-hover:bg-[#ffb4ab] group-hover:text-[#690005] transition-colors">
                <span className="material-symbols-outlined text-[20px]">fire_truck</span>
              </div>
              <div className="text-center">
                <p className="text-sm font-bold text-white leading-none">101</p>
                <p className="font-sans text-[9px] text-[#d2c5ab]/60 font-bold mt-1 tracking-wider">FIRE DEPT.</p>
              </div>
            </a>
          </div>
        </section>

        {/* Nearby Services with accurate cover assets */}
        <section className="space-y-3 pb-8">
          <div className="flex justify-between items-end ml-1">
            <h3 className="font-sans text-[11px] font-bold text-[#d2c5ab]/60 uppercase tracking-widest">
              Nearby Emergency Services
            </h3>
            <span className="font-sans text-[9px] font-extrabold text-[#ffcc00] tracking-widest">GPS: ACTIVE</span>
          </div>

          <div className="space-y-3">
            {/* Hospital Card */}
            <div className="glass-panel p-3.5 rounded-xl flex items-center justify-between border-l-4 border-l-[#84d999] shadow-md">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg overflow-hidden bg-[#353438] shrink-0">
                  <img
                    alt="SSKM Hospital"
                    className="w-full h-full object-cover opacity-60"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlQCS5jNy8A7eS2ZkXXN5gygdm2NVSOFrBj8XdTFzXZ1Ka92HqZTznrkr3uHGB8BPuLeTmKsReCDiecGVTmE7UuwoBFw7lMMdxw673AIzVGb_Uo-PAlzd90OuI9mssFY8xnPHyZv63Nx-nJ-0MoyO3eMFjhue_IY4G_fwmtveZ2qNSU9hpK5i6_NNHsyEWf9Bzqd0n8-4_ljCLVlra6fJZidGnmHKzavW96X0EF_BlOAPN2o2CoHPbgS3RJBWT7Vd6F_nZKDku5h_T"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <p className="text-xs font-bold text-white leading-tight">SSKM Hospital</p>
                  <p className="flex items-center gap-1 text-[10px] text-[#d2c5ab] mt-1 font-medium">
                    <span className="material-symbols-outlined text-xs">distance</span>
                    1.2 km away
                  </p>
                </div>
              </div>
              <button 
                onClick={() => alert('Calculating hospital emergency directions...')}
                className="bg-[#006532] hover:bg-[#84d999]/20 text-[#8ae0a0] px-4 py-1.5 rounded-full font-bold text-[11px] active:scale-95 transition-transform flex items-center gap-1 cursor-pointer"
              >
                <span className="material-symbols-outlined text-sm">directions</span>
                GO
              </button>
            </div>

            {/* Police Card */}
            <div className="glass-panel p-3.5 rounded-xl flex items-center justify-between border-l-4 border-l-[#ffcc00] shadow-md">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg overflow-hidden bg-[#353438] shrink-0">
                  <img
                    alt="Maidan Police Station"
                    className="w-full h-full object-cover opacity-60"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCN0Ts82RfsQAFHQsbwr1V6FphRmwAUvtUmDXH8sa-P0rOAsTlLH7ahZPLFfugXXeMvdHucWWg3VRxG33pMRUIlEtrASJs1p5Rwls9ENUIC0rWg6GzYC08UgagHRbJuQegaHmuSLfRqXv7dIZCuo75_IDsmT42EjE9X1JEW-ICIHt8pqxLtEOA4B6ujbYkPlQARlU-lr4Rx8vvlRlclksK1vfhoKDYkXGc4X464rrTsQADuFzvd9awJcfeLCM9PDC0F6rl-1qV6WzaD"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <p className="text-xs font-bold text-white leading-tight">Maidan Police Station</p>
                  <p className="flex items-center gap-1 text-[10px] text-[#d2c5ab] mt-1 font-medium">
                    <span className="material-symbols-outlined text-xs">distance</span>
                    0.8 km away
                  </p>
                </div>
              </div>
              <button
                onClick={() => alert('Calculating police station rescue coordinates...')}
                className="bg-[#6f5700]/30 hover:bg-[#ffcc00]/20 text-[#ffedc3] px-4 py-1.5 rounded-full font-bold text-[11px] active:scale-95 transition-transform flex items-center gap-1 cursor-pointer"
              >
                <span className="material-symbols-outlined text-sm">directions</span>
                GO
              </button>
            </div>

            {/* Pharmacy Card */}
            <div className="glass-panel p-3.5 rounded-xl flex items-center justify-between border-l-4 border-l-[#d1bcff] shadow-md">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg overflow-hidden bg-[#353438] shrink-0">
                  <img
                    alt="Frank Ross Pharmacy"
                    className="w-full h-full object-cover opacity-60"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBC0QeqFVdoF6SWUC8Aestp03QGSaGJVNc9p8jgVXYrDcNkrEPGbn8N7n-lkv_C5C6h2YKd1RPQ7Hjn5Mbsrp-GEGxYFzNpkcFiAVez4VO8NGCROH0OMKd-oDxyjZoepkKMgjPCn8okW1ZASDNQQLRa202aklU-vC754WnKVFe8VZRQCiMQBqkpmNGARRZ_mAX5G7ejpNtxAx8yAcCE0M_zSliLjln8RAUKi8NbTzL5NEVxOH4aI7o3O5B6nz1BsG2Gs1YPLLVvlGSb"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <p className="text-xs font-bold text-white leading-tight">Frank Ross Pharmacy</p>
                  <p className="flex items-center gap-1 text-[10px] text-[#d2c5ab] mt-1 font-medium">
                    <span className="material-symbols-outlined text-xs">distance</span>
                    0.4 km away
                  </p>
                </div>
              </div>
              <button
                onClick={() => alert('Calculating pharmacy path directions...')}
                className="bg-[#5700c9]/25 hover:bg-[#d1bcff]/20 text-[#tertiary-fixed-dim] px-4 py-1.5 rounded-full font-bold text-[11px] active:scale-95 transition-transform flex items-center gap-1 cursor-pointer"
              >
                <span className="material-symbols-outlined text-sm">directions</span>
                GO
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Floating Bottom Nav - EXACT MATCHING xpath anchor structure */}
      <nav className="fixed bottom-0 w-full z-50 bg-[#131316]/95 border-t border-white/5 shadow-[0_-4px_20px_rgba(0,0,0,0.4)] rounded-t-xl flex justify-around items-center h-20 pb-safe px-4 select-none">
        
        {/* Home Link */}
        <a 
          onClick={(e) => { e.preventDefault(); onNavigate(AppScreen.HOME_REFINED, 'none'); }}
          href="#"
          className="flex flex-col items-center justify-center text-white/50 hover:text-[#ffcc00] transition-colors p-2"
        >
          <span className="material-symbols-outlined">home</span>
          <span className="font-sans text-[10px] mt-1">Home</span>
        </a>

        {/* Routes Link */}
        <a 
          onClick={(e) => { e.preventDefault(); onNavigate(AppScreen.ROUTE_PLANNER_REFINED, 'none'); }}
          href="#"
          className="flex flex-col items-center justify-center text-white/50 hover:text-[#ffcc00] transition-colors p-2"
        >
          <span className="material-symbols-outlined">directions_bus</span>
          <span className="font-sans text-[10px] mt-1">Routes</span>
        </a>

        {/* Queue Link */}
        <a 
          onClick={(e) => { e.preventDefault(); onNavigate(AppScreen.QUEUE, 'none'); }}
          href="#"
          className="flex flex-col items-center justify-center text-white/50 hover:text-[#ffcc00] transition-colors p-2"
        >
          <span className="material-symbols-outlined">format_list_numbered</span>
          <span className="font-sans text-[10px] mt-1">Queue</span>
        </a>

        {/* SOS active Link */}
        <a 
          onClick={(e) => { e.preventDefault(); onNavigate(AppScreen.SOS, 'none'); }}
          href="#"
          className="flex flex-col items-center justify-center text-[#ffcc00] relative p-1.5 px-4 bg-[#ffcc00]/10 rounded-full"
        >
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
            emergency
          </span>
          <span className="font-sans text-[10px] mt-0.5">SOS</span>
        </a>

        {/* Profile Link */}
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
