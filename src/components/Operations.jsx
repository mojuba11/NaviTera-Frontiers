import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function Operations() {
  return (
    <section id="operations" className="bg-[#0B1924] text-white py-24 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C89D4B]">OUR OPERATING STANDARD</span>
          <h2 className="text-3xl sm:text-5xl font-light text-white mt-2">
            Prepared before departure. <br /><span className="font-bold">Accountable throughout.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { step: '01', title: 'Assess', desc: 'Pre-deployment analysis of routes, timings, and risk profiles.' },
            { step: '02', title: 'Mobilize', desc: 'Tactical assets, verified crews, and legal compliance ready.' },
            { step: '03', title: 'Deliver', desc: 'Continuous tracking, clear command, and total follow-through.' }
          ].map((op, idx) => (
            <div key={idx} className="bg-[#0A131B] border border-slate-800 p-8 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-[#C89D4B] block mb-4">{op.step}</span>
                <h3 className="text-2xl font-bold mb-3">{op.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed font-light">{op.desc}</p>
              </div>
              <div className="mt-8 pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-500">
                <span>Phase {op.step}</span>
                <CheckCircle2 className="w-4 h-4 text-[#C89D4B]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}