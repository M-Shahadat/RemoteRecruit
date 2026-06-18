import { useState, useEffect } from 'react';
import { useScrollReveal } from './hooks/useScrollReveal';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import SignUpAd from './components/SignUpAd';
import FAQ from './components/FAQ';
import PricingFooter from './components/PricingFooter';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`fixed bottom-8 right-8 p-3 bg-[#52B4DA] text-white rounded-full shadow-lg hover:bg-[#43A4CA] transition-all duration-300 z-50 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
      aria-label="Scroll to top"
    >
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    </button>
  );
};

function App() {
  useScrollReveal();

  return (
    <div className="min-h-screen bg-white font-sans overflow-x-hidden">
      <Navbar />

      <main>
        <Hero />
        <Features />
        <SignUpAd />
        <FAQ />
        <PricingFooter />
      </main>

      <ScrollToTop />
    </div>
  );
}

export default App;