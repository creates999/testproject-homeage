
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { NAV_LINKS } from '../constants';
import Logo from './Logo';
import { NavLinkItem } from '../types';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const activeLinkClass = "text-white bg-brand-primary px-3 py-2 rounded-md";
  const inactiveLinkClass = "text-neutral-300 hover:bg-stone-700 hover:text-white px-3 py-2 rounded-md";

  return (
    <header className="bg-brand-primary-dark text-neutral-100 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex-shrink-0">
            <Logo />
          </Link>
          <nav className="hidden md:flex space-x-4">
            {NAV_LINKS.map((link: NavLinkItem) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `${isActive ? activeLinkClass : inactiveLinkClass} text-sm font-medium transition-colors duration-150`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-neutral-300 hover:text-white hover:bg-stone-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-label="Main menu"
              aria-expanded={isMobileMenuOpen}
            >
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden absolute w-full bg-brand-primary-dark shadow-lg z-40">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_LINKS.map((link: NavLinkItem) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `${isActive ? 'bg-brand-primary text-white' : 'text-neutral-300 hover:bg-stone-700 hover:text-white'} block px-3 py-2 rounded-md text-base font-medium transition-colors duration-150`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
