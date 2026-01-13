import React, { useState, useEffect } from 'react';
import { Page } from './types';
import Navbar from './components/Navbar';
import Matrimonio from './pages/Matrimonio';
import RSVP from './pages/RSVP';
import DoveDormire from './pages/DoveDormire';
import ListaNozze from './pages/ListaNozze';
import './App.css';

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
    <div className="app-container">
      <Navbar currentPage={currentPage} onPageChange={setCurrentPage} />
      <main className="app-main">
        <div className="app-content">
          {renderPage()}
        </div>
      </main>
    </div>
  );
};

export default App;
