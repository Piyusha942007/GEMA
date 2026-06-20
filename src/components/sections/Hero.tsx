import React from 'react';
import { motion } from 'framer-motion';
import { WORKSHOP_DATA } from '../../data/workshop';

export const Hero: React.FC = () => {
  const scrollToForm = () => {
    const element = document.getElementById('enroll-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      const firstInput = document.getElementById('name');
      if (firstInput) {
        setTimeout(() => firstInput.focus(), 800);
      }
    }
  };

  return (
    <section id="overview" className="relative w-full mb-12 sm:mb-16">
      {/* Banner image wrapper with rounded bottom edges like Kidrove */}
      <div className="relative w-full h-[60vh] sm:h-[70vh] lg:h-[85vh] min-h-[500px] max-h-[800px] overflow-hidden rounded-b-[2rem] sm:rounded-b-[3.5rem] shadow-sm">
        <img
          src="/hero-banner-kidrove.png"
          alt="AI & Robotics Summer Workshop"
          className="w-full h-full object-cover object-bottom"
        />
        {/* Subtle dark gradient overlay to help text legibility without hiding the kids */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

        {/* Floating text overlay centered directly on the banner */}
        <div className="absolute inset-0 px-4 flex flex-col items-center justify-end pb-8 sm:pb-12 lg:pb-16 text-center z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="flex flex-col items-center w-full max-w-4xl"
          >
            {/* Urgency Pill */}
            <span className="inline-flex items-center gap-1.5 mb-4 px-3 py-1 bg-white/95 text-red-600 text-xs font-bold rounded-full uppercase tracking-wider shadow-md">
              <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
              {WORKSHOP_DATA.seats}
            </span>

            {/* Title */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight mb-3 drop-shadow-[0_4px_8px_rgba(0,0,0,0.6)]">
              AI &amp; Robotics <br className="sm:hidden" />
              <span className="text-yellow-400">Summer Workshop</span>
            </h1>

            {/* Description */}
            <p className="text-white/95 text-base sm:text-lg lg:text-xl font-semibold max-w-2xl mx-auto mb-6 lg:mb-8 leading-relaxed drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              {WORKSHOP_DATA.tagline}
            </p>

            {/* Button */}
            <button
              onClick={scrollToForm}
              className="px-8 sm:px-10 py-3.5 sm:py-4 bg-purple-500 text-white font-extrabold rounded-full hover:bg-purple-600 transition-all text-base sm:text-lg shadow-[0_8px_16px_-4px_rgba(0,0,0,0.4)] hover:shadow-[0_12px_24px_-4px_rgba(0,0,0,0.5)] hover:scale-[1.03] active:scale-[0.97]"
            >
              Enroll Now →
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
