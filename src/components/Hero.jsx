import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function Hero({ scrollToSection }) {
  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-20 flex items-center justify-center overflow-hidden bg-[#0B1924]">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=2000&q=80" 
          alt="Maritime Patrol Vessel" 
          className="w-full h-full object-cover opacity-30 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1924] via-[#0B1924]/75 to-[#0B1924]/90" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="max-w-3xl">
          <div className="flex items-center space-x-3 mb-6">
            <span className="w-10 h-[2px] bg-[#C89D4B]"></span>
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#C89D4B]">
              INTEGRATED MARITIME SERVICES
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light text-white tracking-tight leading-[1.1] mb-8">
            Certainty at sea. <br />
            <span className="font-semibold text-white">Strength in every</span> operation.
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 font-light leading-relaxed mb-10 max-w-2xl">
            Delivering secure, reliable, and commercially sound marine solutions across the Gulf of Guinea and beyond.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-5">
            <button 
              onClick={() => scrollToSection('services')}
              className="bg-[#C89D4B] hover:bg-[#b0883d] text-[#0B1924] font-semibold px-7 py-4 text-sm tracking-wider uppercase transition-all flex items-center justify-center space-x-3 shadow-xl"
            >
              <span>Explore our services</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <button 
              onClick={() => scrollToSection('about')}
              className="border border-slate-600 hover:border-slate-300 text-white font-medium px-7 py-4 text-sm tracking-wider uppercase transition-all text-center"
            >
              Discover NaviTera
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}