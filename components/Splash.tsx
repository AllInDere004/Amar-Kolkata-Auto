import React from 'react';
import { motion } from 'motion/react';
import { Play } from 'lucide-react';
import { AppScreen } from '../types';

interface SplashProps {
  onNavigate: (screen: AppScreen, transition?: string) => void;
}

export default function Splash({ onNavigate }: SplashProps) {
  return (
    <div className="relative h-screen w-full flex flex-col justify-between items-center overflow-hidden bg-[#131316]">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <img
          alt="Kolkata Streetscape"
          className="w-full h-full object-cover brightness-50"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuArr-C2PvEzGEjwki1jyYFfP7lNkNmEuNSbaAo3RW9vR32214eKP0zwZuU7QL3SKmICKEYUATGGYKsMeZaJuhTPkdSecys1GqfZNELnecvi6faXFU9WBH6zqUWKc0EodBZne-peakrKZNQyj3fcdhpX4-6EjvR_iyH5slWfpj03v1cvA-EHgnHTZjyoJ2vKH3L-P03o-Tn3obNOrtEhPWRVrme7ors3NShEm5ymbrTAlBHRhp0nbak-7oy1fDPr3AuKjCTXNvUkTTiM"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/75 to-[#131316] backdrop-blur-[2px]"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 w-full pt-8 px-6 flex justify-center items-center">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center gap-1"
        >
          <div className="bg-[#1f1f22]/80 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10 flex items-center gap-2 badge-glow">
            <span className="material-symbols-outlined text-[#ffcc00] font-variation-fill">workspace_premium</span>
            <span className="font-sans text-[10px] tracking-widest text-[#e4e1e6] font-semibold uppercase">
              Government of West Bengal Initiative
            </span>
          </div>
        </motion.div>
      </header>

      {/* Main content */}
      <main className="relative z-10 w-full flex flex-col items-center px-6 text-center gap-6 max-w-md">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-center"
        >
          <div className="mb-6 rotate-3 hover:rotate-0 transition-transform duration-300">
            <div className="w-24 h-24 bg-[#ffcc00] rounded-2xl flex items-center justify-center shadow-2xl">
              <span className="material-symbols-outlined text-[#3d2f00] text-[64px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                directions_bus
              </span>
            </div>
          </div>
          <h1 className="font-sans text-[34px] font-extrabold text-[#ffedc3] tracking-tighter mb-1 select-none">
            AMAR KOLKATA
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-transparent via-[#ffcc00] to-transparent rounded-full mb-4"></div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="space-y-4"
        >
          <p className="font-sans text-base text-[#e4e1e6] leading-relaxed px-4">
            Your trusted companion for smart auto-rickshaw transit across the City of Joy.
          </p>
          <p className="font-sans text-lg text-[#f1c100] font-medium leading-relaxed">
            কলকাতার স্মার্ট অটো ট্রানজিটের জন্য আপনার বিশ্বস্ত সঙ্গী।
          </p>
        </motion.div>
      </main>

      {/* Footer / Actions */}
      <footer className="relative z-10 w-full pb-10 flex flex-col items-center gap-6 px-6">
        <div className="flex gap-2">
          <div className="h-1.5 w-1.5 bg-white/20 rounded-full"></div>
          <div className="h-1.5 w-8 bg-[#ffcc00] rounded-full"></div>
          <div className="h-1.5 w-1.5 bg-white/20 rounded-full"></div>
        </div>

        <motion.button 
          whileTap={{ scale: 0.95 }}
          onClick={() => onNavigate(AppScreen.LOGIN, 'push')}
          className="w-full max-w-xs h-14 bg-[#ffcc00] hover:bg-[#ffe08b] text-[#3d2f00] font-bold rounded-full flex items-center justify-center gap-2 transition-colors duration-300 shadow-lg shadow-[#ffcc00]/20"
        >
          <span className="font-sans text-sm tracking-widest uppercase font-bold">GET STARTED</span>
          <span className="material-symbols-outlined text-lg">arrow_forward</span>
        </motion.button>
      </footer>
    </div>
  );
}
