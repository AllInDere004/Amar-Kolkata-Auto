import React, { useState } from 'react';
import { motion } from 'motion/react';
import { AppScreen } from '../types';
import RouteMap from "./RouteMap";
interface RoutePlannerRefinedProps {
  onNavigate: (screen: AppScreen, transition?: string) => void;
}

export default function RoutePlannerRefined({ onNavigate }: RoutePlannerRefinedProps) {
  const [commuteActive, setCommuteActive] = useState(false);
  

const routes = [

  {
    id: 1,

    start: "New Town Eco Park",

    destination: "Jagatpur",

    totalTime: "32",

    totalFare: "₹15",

    queue: "Short",

    routeType: "Direct Auto",

    routeName: "Route 94",

    arrivalTime: "3:18 PM",

    coordinates: [
      {
        lat: 22.6025,
        lng: 88.4682
      },
      {
        lat: 22.5989,
        lng: 88.4601
      },
      {
        lat: 22.5921,
        lng: 88.4512
      }
    ]
  },

  {
    id: 2,

    start: "Ultadanga",

    destination: "Sector V",

    totalTime: "18",

    totalFare: "₹18",

    queue: "Long",

    routeType: "Direct Auto",

    routeName: "Route 123",

    arrivalTime: "2:45 PM",

    coordinates: [
      {
        lat: 22.5958,
        lng: 88.4087
      },
      {
        lat: 22.5865,
        lng: 88.4172
      },
      {
        lat: 22.5791,
        lng: 88.4320
      }
    ]
  }

];




const routeData = routes[0];


  const selectedRoute = {

    start: "New Town Eco Park",

    destination: "Jagatpur",

    totalTime: "32",

    totalFare: "₹15",

    queue: "Short",

    routeType: "Direct Auto",

    routeName: "Route 94",

    arrivalTime: "3:18 PM",

    coordinates: [
      {
        lat: 22.6025,
        lng: 88.4682
      },
      {
        lat: 22.5989,
        lng: 88.4601
      },
      {
        lat: 22.5921,
        lng: 88.4512
      }
    ],


    steps: [ { type: "walk", title: `Walk to ${routeData.start} Stand`, subtitle: "2 min • 150m" }, { type: "auto", title: `${routeData.routeName}: ${routeData.destination}`, fare: routeData.totalFare, queue: routeData.queue, eta: "5 min" }, { type: "arrival", title: `Arrival at ${routeData.destination}` } ]


  };


  const handleStartCommute = () => {
    setCommuteActive(true);
    setTimeout(() => {
      setCommuteActive(false);
    }, 3000);
  };

  return (
    <div className="bg-[#131116] text-[#e4e1e6] min-h-screen font-sans pb-28 selection:bg-[#ffcc00]/30 overflow-x-hidden">
      {/* Top sticky app bar */}
      <header className="fixed top-0 w-full z-50 bg-[#131316]/80 backdrop-blur-xl border-b border-white/5 flex justify-between items-center px-4 h-16">
        <div className="flex items-center gap-2">
          <button className="material-symbols-outlined text-[#ffcc00] p-2 hover:bg-white/5 rounded-full transition-colors font-semibold">
            menu
          </button>
          <h1 className="font-sans text-lg font-bold text-[#ffcc00] tracking-tighter">AMAR KOLKATA</h1>
        </div>
        <div className="flex items-center gap-1">
          <button className="material-symbols-outlined text-[#d2c5ab] p-2">search</button>
          <button className="material-symbols-outlined text-[#ffcc00] p-2">notifications</button>
        </div>
      </header>

      {/* Main Container */}
      <main className="pt-20 px-4 space-y-6 max-w-lg mx-auto">
        {/* Location Inputs Block */}
        <section className="glass-panel p-4 rounded-2xl space-y-4 shadow-2xl">
          <div className="space-y-3 relative">
            <div className="absolute left-[19px] top-[24px] bottom-[24px] w-0.5 border-l-2 border-dotted border-[#4e4632]"></div>

            {/* Input 1 */}
            <div className="relative flex items-center group">
              <div className="w-10 h-10 flex items-center justify-center z-10">
                <span className="material-symbols-outlined text-[#84d999] text-[20px]">my_location</span>
              </div>
              <div className="flex-grow ml-1">
                <input
                  className="w-full bg-[#1b1b1e] border-none rounded-xl px-4 py-3 text-xs focus:ring-1 focus:ring-[#ffcc00] text-white placeholder-white/30"
                  placeholder="Your current location"
                  type="text"
                  defaultValue="Salt Lake Sector V"
                />
              </div>
            </div>

            {/* Input 2 */}
            <div className="relative flex items-center group">
              <div className="w-10 h-10 flex items-center justify-center z-10">
                <span className="material-symbols-outlined text-[#ffcc00] text-[20px]">location_on</span>
              </div>
              <div className="flex-grow ml-1">
                <input
                  className="w-full bg-[#1b1b1e] border-none rounded-xl px-4 py-3 text-xs focus:ring-1 focus:ring-[#ffcc00] text-white placeholder-white/30"
                  placeholder="Search destination"
                  type="text"
                  defaultValue="Howrah Station"
                />
              </div>
            </div>
          </div>

          {/* Shortcut Chips */}
          <div className="flex gap-2 overflow-x-auto pb-1 hide-scrollbar pt-1">
            <button className="flex-shrink-0 px-4 py-1.5 bg-[#2a2a2d] rounded-full border border-white/5 text-[11px] font-bold text-[#d2c5ab] hover:text-[#ffcc00] active:scale-95 transition-all">
              WORK
            </button>
            <button className="flex-shrink-0 px-4 py-1.5 bg-[#2a2a2d] rounded-full border border-white/5 text-[11px] font-bold text-[#d2c5ab] hover:text-[#ffcc00] active:scale-95 transition-all">
              HOME
            </button>
            <button className="flex-shrink-0 px-4 py-1.5 bg-[#2a2a2d] rounded-full border border-white/5 text-[11px] font-bold text-[#d2c5ab] hover:text-[#ffcc00] active:scale-95 transition-all">
              RECENT
            </button>
          </div>
        </section>

        {/* Header summary */}
        <div className="flex items-center justify-between px-1">
          <div>
            <h2 className="text-base font-bold text-white tracking-tight">Suggested Routes</h2>
            <p className="text-[10px] font-bold tracking-widest text-[#d2c5ab]/70 uppercase">FASTEST &amp; MOST COMFORTABLE</p>
          </div>
          <span className="flex items-center gap-1 px-3 py-1.5 bg-[#006532]/10 text-[#84d999] border border-[#006532]/20 rounded-full text-[10px] font-bold uppercase tracking-wider">
            <span className="material-symbols-outlined text-sm animate-pulse">auto_awesome</span>
            AI Optimized
          </span>
        </div>

        {/* Detailed Route Result Card */}
        <section className="glass-panel rounded-3xl overflow-hidden glow-primary border-white/10 shadow-2xl">
          {/* Header Summary Section */}
          <div className="p-5 bg-[#ffcc00]/5 border-b border-white/5 flex justify-between items-end">
            <div>
              <div className="flex items-center gap-1.5 mb-1.5">
                <span className="text-3xl font-black text-[#ffedc3]">{selectedRoute.totalTime}</span>
                <span className="text-[#ffe08b] font-bold text-sm">min</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1 px-2 py-0.5 bg-[#353438] rounded-md border border-white/5">
                  <span className="material-symbols-outlined text-[#ffcc00] text-sm">payments</span>
                  <span className="text-white font-bold text-xs">  {selectedRoute.totalFare}</span>
                </div>
                <span className="text-xs text-[#d2c5ab] font-medium">{selectedRoute.routeType}</span>
              </div>
            </div>

            <div className="flex flex-col items-end gap-1.5">
              <div className="flex -space-x-3">
                <div className="w-10 h-10 rounded-full border-4 border-[#1f1f22] bg-[#ffcc00] flex items-center justify-center shadow-lg">
                  <span className="material-symbols-outlined text-[#3d2f00] text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                    directions_bus
                  </span>
                </div>
                <div className="w-10 h-10 rounded-full border-4 border-[#1f1f22] bg-[#ffcc00] flex items-center justify-center shadow-lg">
                  <span className="material-symbols-outlined text-[#3d2f00] text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                    directions_bus
                  </span>
                </div>
              </div>
              <span className="text-[9px] font-black tracking-widest text-[#84d999] bg-[#006532]/20 px-2 py-0.5 rounded">
                FASTEST
              </span>
            </div>
          </div>


          {/* Dynamic Timeline Steps */}
          <div className="p-5 space-y-6 relative">

            {selectedRoute.steps.map((step, index) => (

              <div
                key={index}
                className="relative flex gap-5"
              >

                {/* Timeline Line */}
                {index !== selectedRoute.steps.length - 1 && (
                  <div className="timeline-line"></div>
                )}

                {/* ICON */}
                <div
                  className={`
        relative z-10
        w-12 h-12
        rounded-2xl
        flex items-center
        justify-center
        shrink-0

        ${step.type === "auto"
                      ? "bg-[#ffcc00]"
                      : step.type === "arrival"
                        ? "bg-white"
                        : "bg-[#2a2a2d]"
                    }
        `}
                >

                  <span
                    className={`
          material-symbols-outlined
          text-[22px]

          ${step.type === "auto"
                        ? "text-[#3d2f00]"
                        : step.type === "arrival"
                          ? "text-black"
                          : "text-[#d2c5ab]"
                      }
          `}
                  >

                    {
                      step.type === "walk"
                        ? "directions_walk"
                        : step.type === "auto"
                          ? "directions_bus"
                          : "check_circle"
                    }

                  </span>

                </div>

                {/* CONTENT */}
                <div className="flex-grow pt-1">

                  <h4 className="text-xs font-bold text-white">
                    {step.title}
                  </h4>

                  {step.subtitle && (
                    <p className="text-[10px] text-white/60 mt-1">
                      {step.subtitle}
                    </p>
                  )}

                  {step.fare && (
                    <div className="flex gap-2 mt-2">

                      <span className="px-2 py-1 bg-[#353438] rounded text-[9px] font-bold text-white">
                        {step.fare} FARE
                      </span>

                      <span className="px-2 py-1 bg-[#006532]/20 text-[#84d999] rounded text-[9px] font-bold uppercase">
                        {step.queue}
                      </span>

                    </div>
                  )}

                  {step.eta && (
                    <p className="text-[10px] text-[#84d999] mt-2 font-bold">
                      ~{step.eta} wait
                    </p>
                  )}

                </div>

              </div>

            ))}

          </div>



          {/* START COMMUTE button */}
          <div className="p-5 pt-1">
            <button
              onClick={handleStartCommute}
              className="w-full bg-[#ffcc00] hover:bg-[#ffe08b] text-[#3d2f00] font-bold py-4 rounded-2xl active:scale-[0.98] transition-all shadow-2xl shadow-[#ffcc00]/20 flex items-center justify-center gap-2 group relative overflow-hidden cursor-pointer"
            >
              {commuteActive ? (
                <>
                  <span className="material-symbols-outlined animate-spin text-lg">refresh</span>
                  <span className="tracking-widest text-xs uppercase font-extrabold">TRACKING ACTIVE</span>
                </>
              ) : (
                <>
                  <span className="material-symbols-outlined group-hover:translate-x-0.5 transition-transform text-lg">navigation</span>
                  <span className="tracking-widest text-xs uppercase font-extrabold">START JOURNEY</span>
                </>
              )}
            </button>
          </div>
        </section>


        {/* LIVE GOOGLE MAP SECTION */}
        <section className="relative h-56 rounded-3xl overflow-hidden glass-panel border-white/5 group shadow-2xl">

          <RouteMap coordinates={selectedRoute.coordinates} />

          <div className="absolute top-4 right-4 z-10 bg-[#131316]/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#84d999] pulse-secondary"></span>
            <span className="text-[9px] font-bold text-white uppercase tracking-wider">
              Live Flow
            </span>
          </div>

          <div className="absolute bottom-5 left-5 z-10">
            <h3 className="text-sm font-bold text-white drop-shadow-md">
              Live Route Tracking
            </h3>

            <p className="text-[10px] text-white/70 mt-0.5">
              Real-time Kolkata auto route map
            </p>
          </div>

        </section>


      </main>

      {/* Floating Bottom Nav - EXACT MATCHING element specs with anchors */}
      <nav className="fixed bottom-0 w-full z-50 rounded-t-[32px] bg-[#131316]/95 border-t border-white/5 shadow-[0_-10px_40px_rgba(0,0,0,0.5)] flex justify-around items-center h-22 pb-safe px-6 select-none">

        {/* Home Link */}
        <a
          id="nav-home-anchor"
          onClick={(e) => { e.preventDefault(); onNavigate(AppScreen.HOME_REFINED, 'none'); }}
          href="#"
          className="flex flex-col items-center justify-center text-white/50 hover:text-[#ffcc00] transition-colors p-2"
        >
          <span className="material-symbols-outlined text-[26px]">home</span>
          <span className="text-[10px] font-bold uppercase tracking-wider mt-1">Home</span>
        </a>

        {/* Routes Link */}
        <a
          id="nav-routes-anchor"
          onClick={(e) => { e.preventDefault(); onNavigate(AppScreen.ROUTE_PLANNER_REFINED, 'none'); }}
          href="#"
          className="flex flex-col items-center justify-center text-[#ffcc00] relative p-2"
        >
          <div className="absolute -top-1 w-1 h-1 bg-[#ffcc00] rounded-full"></div>
          <span className="material-symbols-outlined text-[26px]" style={{ fontVariationSettings: "'FILL' 1" }}>
            directions_bus
          </span>
          <span className="text-[10px] font-bold uppercase tracking-wider mt-1">Routes</span>
        </a>

        {/* Queue Link */}
        <a
          id="nav-queue-anchor"
          onClick={(e) => { e.preventDefault(); onNavigate(AppScreen.QUEUE, 'none'); }}
          href="#"
          className="flex flex-col items-center justify-center text-white/50 hover:text-[#ffcc00] transition-colors p-2"
        >
          <span className="material-symbols-outlined text-[26px]">format_list_numbered</span>
          <span className="text-[10px] font-bold uppercase tracking-wider mt-1">Queue</span>
        </a>

        {/* SOS Link */}
        <a
          id="nav-sos-anchor"
          onClick={(e) => { e.preventDefault(); onNavigate(AppScreen.SOS, 'none'); }}
          href="#"
          className="flex flex-col items-center justify-center text-white/50 hover:text-[#ffcc00] transition-colors p-2"
        >
          <span className="material-symbols-outlined text-[26px]">emergency</span>
          <span className="text-[10px] font-bold uppercase tracking-wider mt-1">SOS</span>
        </a>
      </nav>
    </div>
  );
}
