import React from 'react';

export default function About() {
  return (
    <section id="about" className="bg-white text-[#0B1924] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 relative">
            <img
              src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1000&q=80"
              alt="NaviTera Operations"
              className="w-full h-[480px] object-cover shadow-2xl"
            />
          </div>

          <div className="lg:col-span-7">
            <div className="flex items-center space-x-3 mb-4">
              <span className="w-8 h-[2px] bg-[#C89D4B]"></span>
              <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#b0883d]">ABOUT NAVITERRA</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-light text-[#0B1924] mb-6">
              Local intelligence. <br /><span className="font-bold">Global standards.</span>
            </h2>
            <p className="text-stone-600 leading-relaxed mb-6">
              NaviTera is a maritime services company built to solve complex offshore and commercial challenges with clarity, speed, and control.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-stone-200">
              <div>
                <h4 className="font-bold text-sm text-[#0B1924]">01 Safety-led execution</h4>
                <p className="text-xs text-stone-500 mt-1">Uncompromising compliance with ISM & ISPS codes.</p>
              </div>
              <div>
                <h4 className="font-bold text-sm text-[#0B1924]">02 Vetted marine partners</h4>
                <p className="text-xs text-stone-500 mt-1">Rigorous audit processes for all crews and assets.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}