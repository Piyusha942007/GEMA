import React from 'react';
import { motion } from 'framer-motion';

const details = [
  {
    id: 'age',
    label: 'Age Group',
    value: '8–14 Years',
    img: '/detail-age.png',
    bg: 'bg-pink-50',
    border: 'border-pink-200',
  },
  {
    id: 'duration',
    label: 'Duration',
    value: '4 Weeks',
    img: '/detail-duration.png',
    bg: 'bg-yellow-50',
    border: 'border-yellow-200',
  },
  {
    id: 'mode',
    label: 'Mode',
    value: '100% Online',
    img: '/detail-online.png',
    bg: 'bg-blue-50',
    border: 'border-blue-200',
  },
  {
    id: 'fee',
    label: 'Fee',
    value: '₹2,999',
    img: '/detail-fee.png',
    bg: 'bg-purple-50',
    border: 'border-purple-200',
  },
  {
    id: 'start',
    label: 'Start Date',
    value: '15 July 2026',
    img: '/detail-duration.png', // reuse calendar image
    bg: 'bg-teal-50',
    border: 'border-teal-200',
  },
];

export const WorkshopDetails: React.FC = () => {
  return (
    <section id="details" className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-2 text-center">
          Workshop Details
        </h2>
        <p className="text-center text-gray-500 mb-12 text-sm">Everything you need to know before enrolling</p>

        {/* Circular image grid — exact Kidrove pattern */}
        <div className="grid grid-cols-3 sm:grid-cols-5 gap-6 justify-items-center">
          {details.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              {/* Circular image */}
              <div className={`w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-4 ${item.border} ${item.bg} mb-3 shadow-sm flex items-center justify-center`}>
                <img
                  src={item.img}
                  alt={item.label}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider leading-none mb-1">
                {item.label}
              </span>
              <span className="text-sm font-extrabold text-gray-800 leading-snug">
                {item.value}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default WorkshopDetails;
