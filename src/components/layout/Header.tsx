import React from 'react';
import { Search, Heart } from 'lucide-react';


export const Header: React.FC = () => {
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
    <header className="sticky top-0 z-40 w-full border-b border-slate-100 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <span className="font-display font-extrabold text-3xl tracking-tight">
            <span className="text-pink-500">K</span>
            <span className="text-yellow-500">i</span>
            <span className="text-blue-500">d</span>
            <span className="text-pink-500">r</span>
            <span className="text-blue-500">o</span>
            <span className="text-purple-500">v</span>
            <span className="text-pink-500">e</span>
          </span>
        </div>

        {/* Navigation Links - Desktop */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-bold text-navy-800">
          <a href="#overview" className="hover:text-pink-500 transition-colors">
            Find Activities
          </a>
          <a href="#blog" className="hover:text-pink-500 transition-colors">
            Blog
          </a>
          <a href="#kidrove-go" className="hover:text-pink-500 transition-colors">
            Kidrove Go
          </a>
          <a href="#faqs" className="hover:text-pink-500 transition-colors">
            FAQ
          </a>
          <a href="#contact" className="hover:text-pink-500 transition-colors">
            Get In Touch
          </a>
        </nav>

        {/* CTA and Icons */}
        <div className="flex items-center gap-5">
          <button className="text-navy-800 hover:text-pink-500 transition-colors hidden sm:block">
            <Search className="w-5 h-5" />
          </button>
          <button className="text-navy-800 hover:text-pink-500 transition-colors hidden sm:block">
            <Heart className="w-5 h-5" />
          </button>
          <button 
            onClick={scrollToForm} 
            className="items-center justify-center px-6 py-2 bg-purple-500 text-white font-bold rounded-full hover:bg-purple-600 transition-colors text-sm shadow-md"
          >
            Login
          </button>
        </div>
      </div>
    </header>
  );
};
export default Header;
