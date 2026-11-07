import React, { useState } from 'react';
import { 
  Shield, 
  Search, 
  Ship, 
  TrendingUp, 
  ArrowUpRight, 
  CheckCircle2, 
  Compass, 
  Menu, 
  X,
  ChevronDown,
  ExternalLink
} from 'lucide-react';

// Custom SVG Emblem matching NaviTera logo
const NaviTeraLogoSvg = ({ className = "w-10 h-10" }) => (
  <svg viewBox="0 0 200 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="100" cy="100" r="65" stroke="#7E878C" strokeWidth="12" />
    <path d="M100 15 V35 M100 165 V185 M15 100 H35 M165 100 H185" stroke="#7E878C" strokeWidth="12" strokeLinecap="round"/>
    <path d="M40 40 L54 54 M146 146 L160 160 M40 160 L54 146 M146 54 L160 40" stroke="#7E878C" strokeWidth="12" strokeLinecap="round"/>
    <polygon points="100,5 112,32 100,26 88,32" fill="#8E979D" />
    <polygon points="100,195 112,168 100,174 88,168" fill="#8E979D" />
    <polygon points="5,100 32,88 26,100 32,112" fill="#8E979D" />
    <polygon points="195,100 168,88 174,100 168,112" fill="#8E979D" />
    <circle cx="100" cy="100" r="54" fill="#0E4875" />
    <circle cx="100" cy="100" r="54" stroke="#FFFFFF" strokeWidth="3" />
    <g fill="#A0A9B0">
      <path d="M68 62 H78 V138 H68 Z" />
      <path d="M122 62 H132 V138 H122 Z" />
      <path d="M78 62 L124 122 H132 L86 62 Z" />
      <path d="M84 62 H116 V72 H84 Z" />
      <path d="M95 72 H105 V122 L100 138 L95 122 Z" />
    </g>
  </svg>
);

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('all');
  const [selectedService, setSelectedService] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    service: 'Security Escort Vessels',
    message: ''
  });

  const services = [
    {
      id: '01',
      title: 'Security Escort Vessels',
      category: 'protection',
      description: 'Purpose-ready marine assets and trained teams for safe passage through high-risk waters and offshore zones.',
      detailedDesc: 'NaviTera provides armed and unarmed Security Escort Vessels (SEVs) fully compliant with international maritime security codes. Our crews are trained to maintain tactical perimeter defense, offering 24/7 protection for commercial tankers, FPSOs, and cargo ships operating in high-risk territorial waters.',
      image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80',
      badge: 'High Risk Zones'
    },
    {
      id: '02',
      title: 'Stowaway Search',
      category: 'security',
      description: 'Methodical, discreet vessel sweeps that protect your crew, cargo, schedule, and port compliance.',
      detailedDesc: 'Our specialized tactical search teams conduct exhaustive pre-departure stowaway sweeps across rudders, void spaces, engine rooms, and cargo holds. We deliver legal verification certificates to prevent costly port delays and heavy international penalties.',
      image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=80',
      badge: 'Port Compliance'
    },
    {
      id: '03',
      title: 'Vessel Leasing & Equipment',
      category: 'logistics',
      description: 'Flexible access to vetted marine vessels, operational equipment, and dependable offshore support.',
      detailedDesc: 'We maintain an extensive network of charter-ready maritime assets, including Platform Supply Vessels (PSVs), Anchor Handling Tug Supply (AHTS) vessels, fast crew supply boats, and heavy-duty deck gear custom-fitted to your specific offshore requirements.',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
      badge: 'Asset Management'
    },
    {
      id: '04',
      title: 'Crude Oil Trading Brokerage',
      category: 'commercial',
      description: 'Commercial introductions and transaction coordination built on market insight, diligence, and trust.',
      detailedDesc: 'Facilitating seamless energy trade logistics across the Gulf of Guinea. NaviTera connects vetted buyers and sellers of crude oil and refined petroleum products while mitigating counterparty risk and ensuring strict adherence to international maritime trade standards.',
      image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=80',
      badge: 'Energy Market'
    },
    {
      id: '05',
      title: 'Vessels & Offshore Protection',
      category: 'protection',
      description: 'Comprehensive static and dynamic security architectures tailored for FPSOs, rigs, and marine terminals.',
      detailedDesc: 'Delivering end-to-end maritime defense strategies, physical vessel hardening, remote surveillance integration, and fast-response escort boats to safeguard critical energy infrastructure and offshore drilling rigs against modern maritime threats.',
      image: 'https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?auto=format&fit=crop&w=1200&q=80',
      badge: 'Tactical Defense'
    }
  ];

  const filteredServices = activeTab === 'all' 
    ? services 
    : services.filter(s => s.category === activeTab);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', company: '', email: '', service: 'Security Escort Vessels', message: '' });
    }, 5000);
  };

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0B1924] text-slate-100 font-sans selection:bg-[#C89D4B] selection:text-[#0B1924]">
      
      {/* NAVBAR */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0B1924]/90 backdrop-blur-md border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <NaviTeraLogoSvg className="w-11 h-11 transition-transform hover:rotate-12" />
            <span className="text-xl sm:text-2xl font-bold tracking-tight text-white block leading-none">
              NaviTera
            </span>
          </div>

          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
            <button onClick={() => scrollToSection('about')} className="text-slate-300 hover:text-[#C89D4B] transition-colors">About</button>
            <button onClick={() => scrollToSection('services')} className="text-slate-300 hover:text-[#C89D4B] transition-colors">Services</button>
            <button onClick={() => scrollToSection('operations')} className="text-slate-300 hover:text-[#C89D4B] transition-colors">Operations</button>
            <button onClick={() => scrollToSection('contact')} className="text-slate-300 hover:text-[#C89D4B] transition-colors">Contact</button>
          </nav>

          <div className="hidden md:flex items-center">
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-white text-[#0B1924] hover:bg-[#C89D4B] hover:text-white px-5 py-2.5 text-sm font-semibold tracking-wide transition-all flex items-center space-x-2 shadow-lg"
            >
              <span>Request a service</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-slate-300 hover:text-white p-2">
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0A131B] border-b border-slate-800 px-4 pt-4 pb-6 space-y-4">
            <button onClick={() => scrollToSection('about')} className="block w-full text-left py-2 text-slate-200">About</button>
            <button onClick={() => scrollToSection('services')} className="block w-full text-left py-2 text-slate-200">Services</button>
            <button onClick={() => scrollToSection('operations')} className="block w-full text-left py-2 text-slate-200">Operations</button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left py-2 text-slate-200">Contact</button>
            <button onClick={() => scrollToSection('contact')} className="w-full mt-2 bg-[#C89D4B] text-white py-3 font-semibold text-center">Request a service</button>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="hero" className="relative min-h-screen pt-28 pb-20 flex items-center justify-center overflow-hidden bg-[#0B1924]">
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

      {/* STATS BAR */}
      <section className="bg-[#0A131B] border-y border-slate-800/80 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-800">
            <div className="pt-4 md:pt-0 md:px-8 flex items-baseline space-x-4">
              <span className="text-4xl sm:text-5xl font-light text-white font-mono">24/7</span>
              <div>
                <span className="block text-xs uppercase tracking-widest text-[#C89D4B] font-semibold">OPERATIONAL READINESS</span>
                <span className="text-xs text-slate-400 block mt-1">Continuous response & deployment</span>
              </div>
            </div>
            <div className="pt-6 md:pt-0 md:px-8 flex items-baseline space-x-4">
              <span className="text-4xl sm:text-5xl font-light text-white font-mono">4</span>
              <div>
                <span className="block text-xs uppercase tracking-widest text-[#C89D4B] font-semibold">CORE SERVICE AREAS</span>
                <span className="text-xs text-slate-400 block mt-1">Security, Search, Logistics & Energy Trading</span>
              </div>
            </div>
            <div className="pt-6 md:pt-0 md:px-8 flex items-baseline space-x-4">
              <span className="text-4xl sm:text-5xl font-light text-white font-mono">360°</span>
              <div>
                <span className="block text-xs uppercase tracking-widest text-[#C89D4B] font-semibold">MARINE SUPPORT</span>
                <span className="text-xs text-slate-400 block mt-1">End-to-end vessel & offshore protection</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-[#F4F1EA] text-[#0B1924] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-stone-300">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <span className="w-8 h-[2px] bg-[#C89D4B]"></span>
                <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#b0883d]">WHAT WE DO</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-light">Marine expertise. <br /><span className="font-bold">One trusted partner.</span></h2>
            </div>
            <p className="mt-6 md:mt-0 text-stone-600 max-w-md text-sm sm:text-base">
              From vessel security to energy trading support, our services ensure dependable execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                onClick={() => setSelectedService(service)}
                className="group relative bg-[#0B1924] text-white p-6 min-h-[400px] flex flex-col justify-between cursor-pointer shadow-xl overflow-hidden"
              >
                <div className="absolute inset-0 z-0">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1924] via-[#0B1924]/60 to-transparent" />
                </div>
                <div className="relative z-10 flex justify-between items-start">
                  <span className="text-xs font-mono font-bold text-[#C89D4B]">{service.id}</span>
                  <div className="w-10 h-10 rounded-full border border-white/20 bg-black/40 flex items-center justify-center text-white group-hover:bg-[#C89D4B] group-hover:text-[#0B1924] transition-all">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>
                <div className="relative z-10 pt-12">
                  <span className="inline-block px-2.5 py-1 text-[10px] uppercase font-semibold bg-[#C89D4B]/20 text-[#C89D4B] mb-3">{service.badge}</span>
                  <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-slate-300 text-sm font-light">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="bg-white text-[#0B1924] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 relative">
              <img
                src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1000&q=80"
                alt="NaviTera Operations"
                className="w-full h-[480px] object-cover shadow-2xl"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-[#C89D4B] text-[#0B1924] p-6">
                <span className="text-xs font-bold uppercase block mb-1">Built for</span>
                <span className="text-2xl font-black uppercase">CHALLENGING WATERS</span>
              </div>
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
                  <p className="text-xs text-stone-500 mt-1">Compliance with international ISM & ISPS codes.</p>
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#0B1924]">02 Vetted marine partners</h4>
                  <p className="text-xs text-stone-500 mt-1">Rigorous audits for all crews and equipment.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OPERATIONS */}
      <section id="operations" className="bg-[#0B1924] text-white py-24 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C89D4B]">OUR OPERATING STANDARD</span>
            <h2 className="text-3xl sm:text-5xl font-light mt-2">
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
                  <p className="text-slate-400 text-sm">{op.desc}</p>
                </div>
                <div className="mt-8 pt-4 border-t border-slate-800 flex justify-between text-xs text-slate-500">
                  <span>Phase {op.step}</span>
                  <CheckCircle2 className="w-4 h-4 text-[#C89D4B]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
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
                <form onSubmit={handleFormSubmit} className="space-y-6">
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

      {/* FOOTER */}
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

      {/* MODAL */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-[#0B1924] border border-slate-700 max-w-2xl w-full text-white p-8 relative">
            <button onClick={() => setSelectedService(null)} className="absolute top-4 right-4 text-slate-400 hover:text-white">
              <X className="w-6 h-6" />
            </button>
            <h3 className="text-2xl font-bold mb-4">{selectedService.title}</h3>
            <p className="text-slate-300 text-sm mb-6">{selectedService.detailedDesc}</p>
            <button
              onClick={() => {
                setSelectedService(null);
                scrollToSection('contact');
              }}
              className="bg-[#C89D4B] text-[#0B1924] px-6 py-3 text-xs font-bold uppercase tracking-wider flex items-center space-x-2"
            >
              <span>Request this service</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

    </div>
  );
}