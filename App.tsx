
import React, { useState, useEffect } from 'react';
import { Page } from './types';
import Navbar from './components/Navbar';
import Matrimonio from './pages/Matrimonio';
import RSVP from './pages/RSVP';
import DoveDormire from './pages/DoveDormire';
import ListaNozze from './pages/ListaNozze';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.Matrimonio);

  // Simple scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case Page.Matrimonio:
        return <Matrimonio onNext={() => setCurrentPage(Page.RSVP)} />;
      case Page.RSVP:
        return <RSVP />;
      case Page.DoveDormire:
        return <DoveDormire />;
      case Page.ListaNozze:
        return <ListaNozze />;
      default:
        return <Matrimonio onNext={() => setCurrentPage(Page.RSVP)} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar currentPage={currentPage} onPageChange={setCurrentPage} />
      <main className="flex-grow pt-24 pb-12">
        <div className="max-w-4xl mx-auto px-6">
          {renderPage()}
        </div>
      </main>
      <footer className="py-8 text-center border-t border-[#1b3022]/10 text-sm opacity-60">
        <p>&copy; 2025 • Creato con amore</p>
      </footer>
    </div>
  );
};

export default App;
