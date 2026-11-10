import React from 'react';
import { Linkedin, Twitter, Instagram, Youtube, ArrowUpRight, Mail, MapPin } from 'lucide-react';

export default function Footer({ scrollToSection }) {
  const handleNav = (id) => {
    if (scrollToSection) {
      scrollToSection(id);
    }
  };

  return (
    <footer className="bg-[#080F16] text-slate-400 py-20 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-slate-800">
          
          {/* Brand & Mission Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/NaviTera-logo.jpg" 
                alt="NaviTera Logo" 
                className="h-10 w-auto object-contain rounded-md"
                onError={(e) => { e.target.src = 'https://placehold.co/100x40/0B1924/C89D4B?text=NaviTera'; }}
              />
              <span className="text-xl font-bold text-white tracking-tight">NaviTera</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm font-light">
              Integrated maritime services engineered for safety, compliance, and swift operational deployment across West African waters and international shipping lanes.
            </p>
            
            {/* Social Media Links */}
            <div className="pt-2 flex items-center space-x-4">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-none bg-[#0B1924] border border-slate-800 flex items-center justify-center text-slate-300 hover:text-[#C89D4B] hover:border-[#C89D4B] transition-all"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Twitter"
                className="w-10 h-10 rounded-none bg-[#0B1924] border border-slate-800 flex items-center justify-center text-slate-300 hover:text-[#C89D4B] hover:border-[#C89D4B] transition-all"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Instagram"
                className="w-10 h-10 rounded-none bg-[#0B1924] border border-slate-800 flex items-center justify-center text-slate-300 hover:text-[#C89D4B] hover:border-[#C89D4B] transition-all"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="YouTube"
                className="w-10 h-10 rounded-none bg-[#0B1924] border border-slate-800 flex items-center justify-center text-slate-300 hover:text-[#C89D4B] hover:border-[#C89D4B] transition-all"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Column */}
          <div className="md:col-span-3 space-y-4">
            <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#C89D4B] block">
              NAVIGATION
            </span>
            <ul className="space-y-3 text-xs font-medium">
              <li>
                <button onClick={() => handleNav('hero')} className="hover:text-white transition-colors flex items-center space-x-1">
                  <span>Home</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('about')} className="hover:text-white transition-colors flex items-center space-x-1">
                  <span>About NaviTera</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services')} className="hover:text-white transition-colors flex items-center space-x-1">
                  <span>Marine Services</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('operations')} className="hover:text-white transition-colors flex items-center space-x-1">
                  <span>Operating Standards</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('contact')} className="hover:text-white transition-colors flex items-center space-x-1">
                  <span>Request Service / Contact</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Direct Operations Desk Column */}
          <div className="md:col-span-4 space-y-4">
            <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#C89D4B] block">
              24/7 COMMAND DESK
            </span>
            <div className="space-y-3 text-xs">
              <div className="flex items-start space-x-3">
                <Mail className="w-4 h-4 text-[#C89D4B] shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-500 block text-[10px] uppercase">Email Enquiries</span>
                  <a href="mailto:operations@naviterra.com" className="text-white font-mono hover:text-[#C89D4B] transition-colors">
                    operations@naviterra.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-[#C89D4B] shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-500 block text-[10px] uppercase">Headquarters</span>
                  <span className="text-slate-300">Suite 10, Kingdom Plaza, Plot 784, Festac Link Bridge, Amuwo Odofin Lagos</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Legal Links */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 space-y-4 sm:space-y-0">
          <p>© {new Date().getFullYear()} NaviTera. All rights reserved.</p>
          <div className="flex space-x-6">
            <span className="hover:text-slate-400 cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-slate-400 cursor-pointer transition-colors">Terms of Service</span>
            <span className="hover:text-slate-400 cursor-pointer transition-colors">ISM / ISPS Compliance</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
