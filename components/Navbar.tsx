import React, { useState } from 'react';
import { Page } from '../types';
import './Navbar.css';

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
    <nav className="navbar">
      <div className="navbar-container serif-font">
        {/* Desktop Menu - Spanning full width */}
        <div className="navbar-desktop">
          {menuItems.map((item) => (
            <button
              key={item}
              onClick={() => onPageChange(item)}
              className={`navbar-item ${currentPage === item ? 'active' : 'inactive'}`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Mobile View - Just the hamburger on the right */}
        <div className="navbar-mobile">
          <button
            className="navbar-hamburger"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Apri menu"
          >
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8h16M4 16h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Pop-over Menu */}
      {isMenuOpen && (
        <div className="navbar-mobile-menu">
          <button
            className="navbar-close-button"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Chiudi menu"
          >
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="navbar-mobile-items">
            {menuItems.map((item) => (
              <button
                key={item}
                onClick={() => handleNavClick(item)}
                className={`navbar-mobile-item ${currentPage === item ? 'active' : 'inactive'}`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;