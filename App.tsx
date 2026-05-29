import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { AppScreen } from './types';

// Importing Screens
import Splash from './components/Splash';
import Login from './components/Login';
import HomeRefined from './components/HomeRefined';
import Home from './components/Home';
import RoutePlannerRefined from './components/RoutePlannerRefined';
import QueueTracker from './components/QueueTracker';
import EmergencySOS from './components/EmergencySOS';
import UserProfile from './components/UserProfile';
import AdminAnalytics from './components/AdminAnalytics';
import AdminAnalyticsRefined from './components/AdminAnalyticsRefined';
import AIChatbot from "./components/AIChatbot";


export default function App() {
  const [currentScreen, setCurrentScreen] = useState<AppScreen>(AppScreen.SPLASH);
  const [transition, setTransition] = useState<string>('none');

  const handleNavigate = (screen: AppScreen, transitionType: string = 'none') => {
    setTransition(transitionType);
    setCurrentScreen(screen);
  };

  // Define transition variations for motion
  const getVariants = () => {
    switch (transition) {
      case 'push':
        return {
          initial: { opacity: 0, x: 200 },
          animate: { opacity: 1, x: 0 },
          exit: { opacity: 0, x: -200 },
        };
      case 'push_back':
        return {
          initial: { opacity: 0, x: -200 },
          animate: { opacity: 1, x: 0 },
          exit: { opacity: 0, x: 200 },
        };
      case 'slide_up':
        return {
          initial: { opacity: 0, y: 300 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: -300 },
        };
      case 'none':
      default:
        return {
          initial: { opacity: 1 },
          animate: { opacity: 1 },
          exit: { opacity: 1 },
        };
    }
  };

  const variants = getVariants();

  return (
    <>
      <div className="relative min-h-screen bg-[#0F0F12] overflow-x-hidden selection:bg-[#ffcc00]/30 select-none">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentScreen}
            initial={variants.initial}
            animate={variants.animate}
            exit={variants.exit}
            transition={{ duration: transition === 'none' ? 0 : 0.4, ease: 'easeInOut' }}
            className="w-full min-h-screen"
          >
            {currentScreen === AppScreen.SPLASH && (
              <Splash onNavigate={handleNavigate} />
            )}
            {currentScreen === AppScreen.LOGIN && (
              <Login onNavigate={handleNavigate} />
            )}
            {currentScreen === AppScreen.HOME_REFINED && (
              <>
              <HomeRefined onNavigate={handleNavigate} />
              <AIChatbot />
              </>
            )}
            {currentScreen === AppScreen.HOME && (
              <>
              <Home onNavigate={handleNavigate} />
              <AIChatbot />
              </>
            )}
            {currentScreen === AppScreen.ROUTE_PLANNER_REFINED && (
              <>
              <RoutePlannerRefined onNavigate={handleNavigate} />
              <AIChatbot />
              </>
            )}
            {currentScreen === AppScreen.QUEUE && (
              <>
              <QueueTracker onNavigate={handleNavigate} />
              <AIChatbot />
              </>
            )}
            {currentScreen === AppScreen.SOS && (
              <>
              <EmergencySOS onNavigate={handleNavigate} />
              <AIChatbot />
              </>
            )}
            {currentScreen === AppScreen.PROFILE && (
              <UserProfile onNavigate={handleNavigate} />
            )}
            {currentScreen === AppScreen.ADMIN && (
              <AdminAnalytics onNavigate={handleNavigate} />
            )}
            {currentScreen === AppScreen.ADMIN_REFINED && (
              <AdminAnalyticsRefined onNavigate={handleNavigate} />
            )}
          </motion.div>
        </AnimatePresence>
      </div>
      
    </>
  );
}
