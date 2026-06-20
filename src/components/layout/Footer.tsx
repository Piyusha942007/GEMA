import React from 'react';
import { Cpu, Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-950 text-navy-200 border-t border-navy-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div className="md:col-span-2 flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="bg-brand-500 flex items-center justify-center w-10 h-10 rounded-2xl">
                <Cpu className="w-5 h-5 text-white" />
              </div>
              <span className="font-display font-extrabold text-2xl tracking-tight text-white">
                kid<span className="text-brand-400">rove</span>
              </span>
            </div>
            <p className="text-navy-400 text-sm leading-relaxed max-w-sm">
              Empowering the next generation of creators, innovators, and thinkers. Providing high-quality live instruction in STEM fields to help kids build real, tangible technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-white text-base mb-4">Workshop</h4>
            <ul className="flex flex-col gap-3 text-sm text-navy-400">
              <li>
                <a href="#overview" className="hover:text-brand-400 transition-colors">
                  Details
                </a>
              </li>
              <li>
                <a href="#why-choose" className="hover:text-brand-400 transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#outcomes" className="hover:text-brand-400 transition-colors">
                  Curriculum
                </a>
              </li>
              <li>
                <a href="#faqs" className="hover:text-brand-400 transition-colors">
                  Frequently Asked Questions
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-display font-bold text-white text-base mb-4">Contact Us</h4>
            <ul className="flex flex-col gap-3.5 text-sm text-navy-400">
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-400 shrink-0" />
                <a href="mailto:support@kidrove.com" className="hover:text-brand-400 transition-colors">
                  support@kidrove.com
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-400 shrink-0" />
                <a href="tel:+919876543210" className="hover:text-brand-400 transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" />
                <span>
                  Bengaluru, Karnataka, India
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-navy-900 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-navy-500">
          <p>© {new Date().getFullYear()} Kidrove. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-brand-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-brand-400 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
