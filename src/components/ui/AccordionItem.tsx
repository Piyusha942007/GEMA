import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface AccordionItemProps {
  id: string;
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({
  id,
  question,
  answer,
  isOpen,
  onToggle,
}) => {
  return (
    <div className="border border-orange-100/70 rounded-2xl bg-white overflow-hidden shadow-sm shadow-orange-950/2 hover:border-orange-200 transition-colors duration-200">
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls={`accordion-content-${id}`}
        id={`accordion-button-${id}`}
        onClick={onToggle}
        className="w-full flex items-center justify-between p-5 text-left font-display font-bold text-navy-800 hover:text-brand-600 transition-colors gap-4 focus-visible:bg-orange-50/50"
      >
        <span className="text-base md:text-lg leading-snug">{question}</span>
        <ChevronDown
          className={`w-5 h-5 text-navy-400 shrink-0 transition-transform duration-300 ${
            isOpen ? 'rotate-180 text-brand-500' : ''
          }`}
        />
      </button>
      
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`accordion-content-${id}`}
            role="region"
            aria-labelledby={`accordion-button-${id}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <div className="px-5 pb-5 text-navy-600 text-sm md:text-base leading-relaxed border-t border-orange-50/50 pt-3 bg-orange-50/10">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
export default AccordionItem;
