import React from 'react';
import { Toaster } from 'sonner';
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import WorkshopDetails from './components/sections/WorkshopDetails';

import LearningOutcomes from './components/sections/LearningOutcomes';
import FAQSection from './components/sections/FAQSection';
import RegistrationForm from './components/sections/RegistrationForm';
import Footer from './components/layout/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Toast Notifications */}
      <Toaster position="top-right" richColors closeButton />

      {/* Header Layout */}
      <Header />

      {/* Main Sections */}
      <main className="flex-grow">
        <Hero />
        <WorkshopDetails />

        <LearningOutcomes />
        <FAQSection />
        <RegistrationForm />
      </main>

      {/* Footer Layout */}
      <Footer />
    </div>
  );
};

export default App;
