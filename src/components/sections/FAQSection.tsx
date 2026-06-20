import React, { useState } from 'react';
import { motion } from 'framer-motion';
import AccordionItem from '../ui/AccordionItem';
import { WORKSHOP_DATA } from '../../data/workshop';

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  const handleToggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faqs" className="py-20 md:py-24 bg-orange-50/10 border-t border-orange-100/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-950 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-navy-600 text-base md:text-lg">
            Have questions about kits, timings, or prerequisites? We've got you covered.
          </p>
        </div>

        {/* Accordions */}
        <div className="flex flex-col gap-4">
          {WORKSHOP_DATA.faqs.map((faq, idx) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
            >
              <AccordionItem
                id={faq.id}
                question={faq.question}
                answer={faq.answer}
                isOpen={openId === faq.id}
                onToggle={() => handleToggle(faq.id)}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default FAQSection;
