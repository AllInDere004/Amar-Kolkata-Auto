import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { AppScreen } from '../types';

interface LoginProps {
  onNavigate: (screen: AppScreen, transition?: string) => void;
}

export default function Login({ onNavigate }: LoginProps) {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  const handleSocialLogin = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onNavigate(AppScreen.HOME_REFINED, 'push');
    }, 1500);
  };

  const nextStep = () => {
    setStep(2);
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(1);
    } else {
      onNavigate(AppScreen.SPLASH, 'push_back');
    }
  };

  return (
    <div className="relative h-screen w-full flex flex-col justify-between overflow-hidden bg-[#131316]">
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        <img
          alt="Kolkata Auto-Rickshaw Background"
          className="w-full h-full object-cover scale-110 filter blur-[3px] brightness-50"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBixos_8_Ns0M6rKBmAM0aT07tQZxuHErmpI0IfDgCz7zBQoN3wVEJeGeMcAff36QKMI4lerKwHkq0G7LmAdLhjK2EBjnQl263Erv9Gx3P8PhjmCcejA-dnUxYQQ_mopJbbDtYcthXqEVC836_FZtkaADtr6Z51jBw7sFrio9KB88esqZ3-fHueZco-sfK7UV3mKuSG_HhCUlLEYRGbo8qw2JCzuVEFiZ6cLQ8wdNimhqHOidQ2yNm1P7IcnwMw2GW03VJsX3JYejj8"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/80"></div>
      </div>

      {/* Step Indicators */}
      <div className="relative z-10 px-6 pt-12 flex gap-2">
        <div className={`h-1 flex-1 rounded-full ${step >= 1 ? 'bg-[#ffcc00]' : 'bg-white/20'}`}></div>
        <div className={`h-1 flex-1 rounded-full ${step >= 2 ? 'bg-[#ffcc00]' : 'bg-white/20'}`}></div>
        <div className="h-1 flex-1 rounded-full bg-white/20"></div>
        <div className="h-1 flex-1 rounded-full bg-white/20"></div>
      </div>

      {/* Main Content Area */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-6">
        <AnimatePresence mode="wait">
          {step === 1 ? (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="glass-card w-full max-w-md rounded-[32px] p-6 flex flex-col items-start gap-6"
            >
              <div className="flex items-start gap-4 w-full">
                {/* Icon Box */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#4A148C] to-[#1A237E] flex items-center justify-center shadow-lg shrink-0">
                  <span className="material-symbols-outlined text-white text-[32px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                    location_on
                  </span>
                </div>
                <div className="flex-1">
                  <h1 className="font-sans text-xl font-bold text-white mb-0.5 leading-tight">
                    Nearest Auto Stand
                  </h1>
                  <p className="font-sans text-base text-[#ffcc00] font-medium leading-normal">
                    নিকটতম অটো স্ট্যান্ড
                  </p>
                </div>
              </div>

              <p className="text-[#d2c5ab] text-sm leading-relaxed">
                Discover 125+ official auto stands across Kolkata with real-time availability based on government transport data.
              </p>

              <div className="flex flex-col gap-3 w-full">
                <div className="flex items-center gap-3 p-3.5 bg-white/5 rounded-xl border border-white/5">
                  <span className="material-symbols-outlined text-[#ffcc00] text-xl">gps_fixed</span>
                  <span className="text-xs font-medium text-white">GPS-based detection</span>
                </div>
                <div className="flex items-center gap-3 p-3.5 bg-white/5 rounded-xl border border-white/5">
                  <span className="material-symbols-outlined text-[#ffcc00] text-xl">straighten</span>
                  <span className="text-xs font-medium text-white">Real distance calculation</span>
                </div>
                <div className="flex items-center gap-3 p-3.5 bg-white/5 rounded-xl border border-white/5">
                  <span className="material-symbols-outlined text-[#ffcc00] text-xl">verified_user</span>
                  <span className="text-xs font-medium text-white">Official stand registry</span>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="glass-card w-full max-w-md rounded-[32px] p-6 flex flex-col items-center gap-6 text-center"
            >
              <div className="w-20 h-20 rounded-full bg-[#ffcc00] flex items-center justify-center mb-1 shadow-lg shadow-[#ffcc00]/20">
                <span className="material-symbols-outlined text-[#3d2f00] text-[40px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                  shield
                </span>
              </div>

              <div>
                <h2 className="font-sans text-2xl font-black text-white mb-1 tracking-tight">AMAR KOLKATA</h2>
                <p className="font-sans text-sm text-[#d2c5ab]">Your premium gateway to urban mobility.</p>
              </div>

              <div className="w-full flex flex-col gap-3">
                <button
                  onClick={handleSocialLogin}
                  className="w-full h-14 bg-white hover:bg-white/95 text-black rounded-full font-bold flex items-center justify-center gap-3 active:scale-95 transition-transform shadow-md"
                >
                  <img
                    alt="Google Logo"
                    className="w-5 h-5 pointer-events-none"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkOt4ohxYcCgLi0WfC3nHIJcyZzJHk7_JVGS83mnWqz7FjYccPa3TBrb8Dtjs08JLQmzBXJtbEQwCsrAoT05KJ5rCygGqPlJ_NVOt4ofE9WCyIrkbOwSUI-D8MQEmpBsmp1hY4EJAg8o3Sowh9k0hBCsTC4YREkbm_beu2iNURfsU0_Z-_2Mww8uU0KbLkM_c9x6deLaYu6PGkm2P57cN_EjHkX-Kwh1_D5dfKBxTns-taDfVk2ioE21NdXXrjh90C4BynbYj26N7z"
                    referrerPolicy="no-referrer"
                  />
                  Continue with Google
                </button>
                <button
                  onClick={handleSocialLogin}
                  className="w-full h-14 bg-white/10 hover:bg-white/15 text-white rounded-full font-bold border border-white/20 active:scale-95 transition-transform"
                >
                  Continue with Phone
                </button>
              </div>

              <p className="text-[11px] text-[#d2c5ab]/60 max-w-[280px] leading-relaxed">
                By signing in, you agree to our <span className="text-[#ffcc00] underline cursor-pointer">Terms of Service</span> and <span class="text-[#ffcc00] underline cursor-pointer">Privacy Policy</span>.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer Actions */}
      <footer className="relative z-10 px-6 pb-12 flex gap-4 w-full max-w-md mx-auto">
        <button
          onClick={prevStep}
          className="flex-1 h-14 glass-card hover:bg-white/5 rounded-2xl font-bold text-white flex items-center justify-center gap-1 active:scale-95 transition-transform"
        >
          <span className="material-symbols-outlined">chevron_left</span>
          Back
        </button>
        {step === 1 && (
          <button
            onClick={nextStep}
            className="flex-[1.5] h-14 bg-gradient-to-r from-[#4A148C] to-[#1A237E] hover:opacity-90 rounded-2xl font-bold text-white flex items-center justify-center gap-1 active:scale-95 transition-transform shadow-xl shadow-black/40"
          >
            Next
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        )}
      </footer>

      {/* Loading Overlay */}
      {loading && (
        <div className="fixed inset-0 bg-black/85 backdrop-blur-md z-50 flex flex-col items-center justify-center">
          <div className="w-16 h-16 border-4 border-[#ffcc00] border-t-transparent rounded-full animate-spin"></div>
          <p className="mt-6 font-semibold text-[#ffcc00] tracking-widest uppercase text-xs">
            Securing Connection...
          </p>
        </div>
      )}
    </div>
  );
}
