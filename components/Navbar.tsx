import React, { useState } from 'react';
import { Page } from '../types';

interface NavbarProps {
  currentPage: Page;
  onPageChange: (page: Page) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, onPageChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = Object.values(Page);

  const handleNavClick = (page: Page) => {
    onPageChange(page);
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#fcfaf2]/90 backdrop-blur-md z-50 border-b border-[#1b3022]/10">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Desktop Menu - Spanning full width */}
        <div className="hidden md:flex flex-1 justify-around items-center">
          {menuItems.map((item) => (
            <button
              key={item}
              onClick={() => onPageChange(item)}
              className={`text-sm uppercase tracking-[0.3em] hover:opacity-100 transition-all px-4 py-2 ${
                currentPage === item ? 'opacity-100 font-medium' : 'opacity-60'
              }`}
            >
              {item}
              {currentPage === item && (
                <div className="h-[1px] bg-[#1b3022] mt-1 animate-in slide-in-from-left-1/2 duration-500"></div>
              )}
            </button>
          ))}
        </div>

        {/* Mobile View - Just the hamburger on the right */}
        <div className="md:hidden flex-1 flex justify-end">
          <button 
            className="p-2"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Apri menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8h16M4 16h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Pop-over Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-[#fcfaf2] z-[60] flex flex-col items-center justify-center animate-in fade-in duration-300">
          <button 
            className="absolute top-6 right-6 p-4"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Chiudi menu"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <div className="flex flex-col space-y-8 items-center">
            {menuItems.map((item) => (
              <button
                key={item}
                onClick={() => handleNavClick(item)}
                className={`text-2xl serif-font tracking-widest transition-all ${
                  currentPage === item ? 'opacity-100 border-b-2 border-[#1b3022]' : 'opacity-60'
                }`}
              >
                {item}
              </button>
            ))}
          </div>
          
          <div className="mt-20 opacity-30 italic serif-font">Gulia & Marco</div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;