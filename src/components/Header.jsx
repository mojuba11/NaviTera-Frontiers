import React, { useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';

export default function Header({ scrollToSection }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (sectionId) => {
    setMobileMenuOpen(false);
    if (scrollToSection) {
      scrollToSection(sectionId);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0B1924]/90 backdrop-blur-md border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo Only */}
        <div 
          className="flex items-center cursor-pointer"
          onClick={() => handleNavClick('hero')}
        >
          <img 
            src="/NaviTera-logo.jpg" 
            alt="NaviTera Logo" 
            className="h-12 w-auto object-contain rounded-md"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
          <button onClick={() => handleNavClick('about')} className="text-slate-300 hover:text-[#C89D4B] transition-colors">
            About
          </button>
          <button onClick={() => handleNavClick('services')} className="text-slate-300 hover:text-[#C89D4B] transition-colors">
            Services
          </button>
          <button onClick={() => handleNavClick('operations')} className="text-slate-300 hover:text-[#C89D4B] transition-colors">
            Operations
          </button>
          <button onClick={() => handleNavClick('contact')} className="text-slate-300 hover:text-[#C89D4B] transition-colors">
            Contact
          </button>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center">
          <button 
            onClick={() => handleNavClick('contact')}
            className="bg-white text-[#0B1924] hover:bg-[#C89D4B] hover:text-white px-5 py-2.5 text-sm font-semibold flex items-center space-x-2 transition-all"
          >
            <span>Request a service</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-slate-300 hover:text-white p-2"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0A131B] border-b border-slate-800 px-4 pt-4 pb-6 space-y-4">
          <button 
            onClick={() => handleNavClick('about')}
            className="block w-full text-left text-slate-200 py-1"
          >
            About
          </button>
          <button 
            onClick={() => handleNavClick('services')}
            className="block w-full text-left text-slate-200 py-1"
          >
            Services
          </button>
          <button 
            onClick={() => handleNavClick('operations')}
            className="block w-full text-left text-slate-200 py-1"
          >
            Operations
          </button>
          <button 
            onClick={() => handleNavClick('contact')}
            className="block w-full text-left text-slate-200 py-1"
          >
            Contact
          </button>
        </div>
      )}
    </header>
  );
}
