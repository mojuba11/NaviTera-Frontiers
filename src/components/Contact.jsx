import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

export default function Contact({ preselectedService }) {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: preselectedService || 'Security Escort Vessels',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setFormSubmitted(true);
    }
  };

  return (
    <section id="contact" className="bg-[#0A131B] text-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#C89D4B]">START A CONVERSATION</span>
            <h2 className="text-4xl sm:text-6xl font-light my-6">Your next <br /><span className="font-bold">operation</span> starts here.</h2>
            <p className="text-slate-300">operations@naviterra.com</p>
          </div>

          <div className="lg:col-span-7 bg-white text-[#0B1924] p-8 sm:p-12 shadow-2xl">
            {formSubmitted ? (
              <div className="py-12 text-center">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold">Enquiry Received</h3>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-[10px] font-bold uppercase text-stone-500 mb-2">YOUR NAME *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-stone-50 border-b-2 border-stone-300 px-4 py-3 text-sm text-[#0B1924] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase text-stone-500 mb-2">EMAIL ADDRESS *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-stone-50 border-b-2 border-stone-300 px-4 py-3 text-sm text-[#0B1924] outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-[#C89D4B] text-[#0B1924] font-bold px-8 py-4 text-xs uppercase tracking-widest flex items-center space-x-3"
                >
                  <span>Submit enquiry</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}