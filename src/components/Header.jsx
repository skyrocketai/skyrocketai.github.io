import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

import logo from "../assets/skyrocket.png";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef();
  const buttonRef = useRef();
  const { language, toggleLanguage } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    setIsMenuOpen(false);
  };

  const handleNavClick = (id) => {
    setIsMenuOpen(false);
    // If we're not on the home page, first navigate to home then scroll
    if (!window.location.pathname.match(/^\/$/)) {
      // Store the target section ID in sessionStorage
      sessionStorage.setItem('scrollTarget', id);
      window.location.href = '/';
    } else {
      // If already on home page, just scroll to the section
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };
  useEffect(() => {
    // Check if there's a stored scroll target when component mounts
    const scrollTarget = sessionStorage.getItem('scrollTarget');
    if (scrollTarget) {
      // Clear the stored target
      sessionStorage.removeItem('scrollTarget');
      // Add a small delay to ensure the page has loaded
      setTimeout(() => {
        const element = document.getElementById(scrollTarget);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (isMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !buttonRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 shadow-lg z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0">
              <Link
                to="/"
                onClick={scrollToTop}
                className="text-xl font-bold hover:text-blue-600 transition-all duration-300 flex items-center group"
              >
                <img
                  src={logo}
                  alt="Logo"
                  className="w-16 h-16  object-contain transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300"
                />
                <span className="ml-2 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent font-extrabold">
                  skyrocket.ai
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-8">
              <Link
                to="/"
                onClick={scrollToTop}
                className="text-white text-md font-bold hover:text-blue-600 transition-colors duration-200 cursor-pointer"
              >
                Home
              </Link>
              <button
                onClick={() => handleNavClick('about')}
                className="text-white text-md font-bold hover:text-blue-600 transition-colors duration-200 cursor-pointer"
              >
                {language === 'en' ? 'About' : 'Über uns'}
              </button>

              <button
                onClick={() => handleNavClick('kontakt')}
                className="text-white text-md font-bold hover:text-blue-600 transition-colors duration-200 cursor-pointer"
              >
                {language === 'en' ? 'Contact' : 'Kontakt'}
              </button>
            </nav>

            {/* Language Buttons - Desktop */}
            <div className="hidden lg:flex space-x-2">
              <button
                onClick={() => language !== 'de' && toggleLanguage()}
                className={`px-3 py-1 text-sm rounded-lg transition-all duration-300 ${language === 'de'
                  ? 'bg-white/20 text-white'
                  : 'bg-white/10 hover:bg-white/20 text-white/70 hover:text-white'
                  }`}
              >
                Deutsch
              </button>
              <button
                onClick={() => language !== 'en' && toggleLanguage()}
                className={`px-3 py-1 text-sm rounded-lg transition-all duration-300 ${language === 'en'
                  ? 'bg-white/20 text-white'
                  : 'bg-white/10 hover:bg-white/20 text-white/70 hover:text-white'
                  }`}
              >
                English
              </button>
            </div>

            {/* Mobile/Tablet Controls */}
            <div className="lg:hidden flex items-center space-x-4">
              {/* Language Buttons - Mobile/Tablet */}
              <div className="flex space-x-2">
                <button
                  onClick={() => language !== 'de' && toggleLanguage()}
                  className={`px-2 py-1 text-sm rounded-lg transition-all duration-300 ${language === 'de'
                    ? 'bg-white/20 text-white'
                    : 'bg-white/10 hover:bg-white/20 text-white/70 hover:text-white'
                    }`}
                >
                  DE
                </button>
                <button
                  onClick={() => language !== 'en' && toggleLanguage()}
                  className={`px-2 py-1 text-sm rounded-lg transition-all duration-300 ${language === 'en'
                    ? 'bg-white/20 text-white'
                    : 'bg-white/10 hover:bg-white/20 text-white/70 hover:text-white'
                    }`}
                >
                  EN
                </button>
              </div>

              {/* Hamburger Button */}
              <button
                ref={buttonRef}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-blue-600 focus:outline-none p-2"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <div className="lg:hidden absolute w-full left-0 bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 shadow-md" ref={menuRef}>
              <div className="px-2 pt-2 pb-3 space-y-1">
                <Link
                  to="/"
                  onClick={scrollToTop}
                  className="block px-3 py-2 rounded-md text-white hover:text-blue-600 hover:bg-gray-50 transition-colors duration-200"
                >
                  Home
                </Link>

                <button
                  onClick={() => handleNavClick('about')}
                  className="block w-full text-left px-3 py-2 rounded-md text-white hover:text-blue-600 hover:bg-gray-900 transition-colors duration-200"
                >
                  {language === 'en' ? 'About' : 'Über uns'}
                </button>
                <button
                  onClick={() => handleNavClick('kontakt')}
                  className="block w-full text-left px-3 py-2 rounded-md text-white hover:text-blue-600 hover:bg-gray-900 transition-colors duration-200"
                >
                  {language === 'en' ? 'Contact' : 'Kontakt'}
                </button>
              </div>
            </div>
          )}
        </div>
      </header>
      {/* Spacer div to prevent content from hiding behind fixed header */}
      <div className="h-16"></div>
    </>
  );
}

export default Header
