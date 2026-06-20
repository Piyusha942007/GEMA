import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { WORKSHOP_DATA } from '../../data/workshop';

const outcomesData = WORKSHOP_DATA.learningOutcomes.map((item, idx) => {
  const images = [
    '/outcome-assemble.png',
    '/outcome-coding.png',
    '/outcome-ai.png',
    '/outcome-puzzle.png',
    '/outcome-demoday.png',
  ];
  return {
    ...item,
    img: images[idx % images.length],
    milestone: `Week ${idx + 1}`,
  };
});

export const LearningOutcomes: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { scrollLeft } = scrollContainerRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - 340 : scrollLeft + 340;
      scrollContainerRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section id="outcomes" className="py-20 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Navigation buttons */}
        <div className="flex items-end justify-between mb-10">
          <div className="max-w-xl text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-pink-500">
              The Journey
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-navy-950 mt-2">
              What they actually walk away with
            </h2>
            <p className="text-navy-600 text-sm sm:text-base mt-2">
              We don't just teach terms. We guide kids to build real, intelligent creations they'll be proud to show off.
            </p>
          </div>
          
          {/* Scroll Arrows */}
          <div className="hidden sm:flex gap-3">
            <button
              onClick={() => scroll('left')}
              className="w-12 h-12 rounded-full border border-slate-200 bg-white flex items-center justify-center text-navy-800 hover:bg-slate-50 transition-colors shadow-sm"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-12 h-12 rounded-full border border-slate-200 bg-white flex items-center justify-center text-navy-800 hover:bg-slate-50 transition-colors shadow-sm"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-8 scrollbar-hide snap-x snap-mandatory cursor-grab active:cursor-grabbing"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {outcomesData.map((outcome, idx) => (
            <motion.div
              key={outcome.id}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="w-[280px] sm:w-[320px] h-[420px] rounded-3xl overflow-hidden relative shadow-md hover:shadow-xl transition-all duration-300 flex-shrink-0 snap-start border border-slate-100 hover:-translate-y-1"
            >
              {/* Outcome Background Image */}
              <img
                src={outcome.img}
                alt={outcome.text}
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />

              {/* Floating Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end text-left">
                <span className="inline-block self-start px-3 py-1 bg-white/20 backdrop-blur-md text-white text-xs font-extrabold rounded-full mb-3 uppercase tracking-wider">
                  {outcome.milestone}
                </span>
                <p className="text-white text-sm sm:text-base font-bold leading-relaxed">
                  {outcome.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Mobile helper indicators */}
        <div className="flex justify-center gap-2 mt-4 sm:hidden">
          {outcomesData.map((_, idx) => (
            <div key={idx} className="w-2 h-2 rounded-full bg-slate-300" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningOutcomes;
