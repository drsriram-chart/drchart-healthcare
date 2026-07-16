/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, ShieldCheck, HelpCircle } from 'lucide-react';
import Logo from './Logo';
import { PageRoute } from '../types';

interface HeaderProps {
  currentPage: PageRoute;
  setCurrentPage: (page: PageRoute) => void;
}

export default function Header({ currentPage, setCurrentPage }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'how-it-works', label: 'How It Works' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'security', label: 'HIPAA & Security' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    window.location.hash = `#/${id}`;
    setCurrentPage(id as PageRoute);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-md border-b border-slate-200/50 shadow-sm py-3'
          : 'bg-transparent py-5'
      }`}
      id="main-header"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#/"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('home');
            }}
            className="flex-shrink-0 cursor-pointer"
          >
            <Logo height={56} variant="dark" className="transition-transform duration-300 hover:scale-[1.02]" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition ${
                    isActive
                      ? 'bg-teal-50 text-teal-700'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50/50'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Action Button */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://calendly.com/drcharthealthcare/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold py-2.5 px-4 rounded-xl transition shadow-sm"
            >
              <Calendar className="w-3.5 h-3.5" />
              Book Consult
            </a>
            <button
              onClick={() => handleNavClick('contact')}
              className="bg-teal-600 hover:bg-teal-500 text-white text-xs font-semibold py-2.5 px-4 rounded-xl transition shadow-md shadow-teal-500/10"
            >
              Start Free Trial
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl hover:bg-slate-100 text-slate-700 focus:outline-none transition"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-200/80 shadow-xl px-4 pt-4 pb-6 space-y-2 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="space-y-1">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center w-full px-4 py-3 rounded-xl text-sm font-semibold transition ${
                    isActive
                      ? 'bg-teal-50 text-teal-700 border-l-4 border-teal-600'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
          <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-100">
            <a
              href="https://calendly.com/drcharthealthcare/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold py-3 px-4 rounded-xl transition text-center"
            >
              <Calendar className="w-4 h-4 text-teal-600" />
              Book Consult
            </a>
            <button
              onClick={() => handleNavClick('contact')}
              className="bg-teal-600 hover:bg-teal-500 text-white text-xs font-semibold py-3 px-4 rounded-xl transition shadow-md shadow-teal-500/10"
            >
              Start Free Trial
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
