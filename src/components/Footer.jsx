import React from 'react';

export default function Footer({ scrollToSection }) {
  return (
    <footer className="bg-[#080F16] text-slate-400 py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center pb-8 border-b border-slate-800">
          <span className="text-xl font-bold text-white mb-4 md:mb-0">NaviTera</span>
          <div className="flex space-x-6 text-xs font-medium">
            <button onClick={() => scrollToSection('about')} className="hover:text-white">About</button>
            <button onClick={() => scrollToSection('services')} className="hover:text-white">Services</button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-white">Contact</button>
          </div>
        </div>
        <p className="text-xs text-center text-slate-600 mt-8">© {new Date().getFullYear()} NaviTera. All rights reserved.</p>
      </div>
    </footer>
  );
}