import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { BentoGrid } from './components/BentoGrid';
import { FloatingElements } from './components/FloatingElements';
import { Timeline } from './components/Timeline';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import CookiePolicy from './pages/CookiePolicy';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function LandingPage() {
  return (
    <div className="relative z-10">
      <Navigation />
      <HeroSection />
      <BentoGrid />
      <Timeline />
      <CTASection />
      <Footer />
    </div>
  );
}

export default function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      {/* Animated mesh gradient background */}
      <motion.div 
        className="fixed inset-0 pointer-events-none z-0"
        style={{ y: backgroundY }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-teal-50/30 to-purple-50/20" />
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(14, 165, 233, 0.15), transparent 50%)`,
          }}
        />
        {/* Mesh gradient orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-teal-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-gradient-to-l from-teal-400/20 to-purple-400/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-br from-blue-300/10 to-teal-300/10 rounded-full blur-2xl" />
      </motion.div>

      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/cookies" element={<CookiePolicy />} />
      </Routes>
    </div>
  );
}