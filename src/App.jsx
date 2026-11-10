import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  CheckCircle2, 
  Menu, 
  X,
  Shield,
  Search,
  Ship,
  TrendingUp,
  Compass,
  Phone,
  Mail,
  MapPin,
  Clock,
  ChevronRight,
  Activity,
  Award,
  Layers
} from 'lucide-react';

// Custom inline SVG icons for reliable social media rendering without dependency errors
const FacebookIcon = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const InstagramIcon = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const LinkedinIcon = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeServiceTab, setActiveServiceTab] = useState('all');
  const [selectedService, setSelectedService] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [whatsappOpen, setWhatsappOpen] = useState(false);
  const [whatsappMessage, setWhatsappMessage] = useState('');
  
  // Contact Form State initialization (Prevents blank blue screen crash)
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: 'Security Escort Vessels',
    urgency: 'Standard (48 hrs)',
    message: ''
  });

  // ADD YOUR PHONE NUMBER HERE:
  // Format: Include country code, NO plus sign (+), NO leading zeros, NO spaces or dashes.
  const whatsappNumber = '2348153043160';

  const handleSendWhatsapp = (e) => {
    e.preventDefault();
    const text = whatsappMessage.trim() || 'Hello NaviTera, I have an inquiry regarding your maritime services.';
    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedText}`;
    window.open(whatsappUrl, '_blank');
    setWhatsappMessage('');
    setWhatsappOpen(false);
  };

  const services = [
    {
      id: '01',
      title: 'Maritime Security Escort Services',
      category: 'protection',
      icon: <Shield className="w-6 h-6 text-[#C89D4B]" />,
      description: 'Provision and coordination of dedicated security escort vessels to support the safe movement of commercial vessels and maritime assets.',
      detailedDesc: 'Provision and coordination of dedicated security escort vessels to support the safe movement of commercial vessels and maritime assets within applicable operational areas.

Our services may include:

* Security escort vessel services.
* Vessel movement and security coordination.
* Maritime security support for commercial shipping and offshore operations.
* Security communications and operational reporting.
* Coordination with relevant maritime stakeholders.',
      image: '/NaviTera Security Escort Vessel.png',
      badge: 'High Risk Zones',
      highlights: ['Armed & Unarmed Tactical Teams', '24/7 Radar & AIS Tracking', 'ISM & ISPS Compliant']
    },
    {
      id: '02',
      title: 'Stowaway Search',
      category: 'security',
      icon: <Search className="w-6 h-6 text-[#C89D4B]" />,
      description: 'Methodical, discreet vessel sweeps that protect your crew, cargo, schedule, and port compliance.',
      detailedDesc: 'Our specialized tactical search teams conduct exhaustive pre-departure stowaway sweeps across rudders, void spaces, engine rooms, and cargo holds. We deliver legal verification certificates to prevent costly port delays and heavy international penalties.',
      image: '/stowaway.jpeg',
      badge: 'Port Compliance',
      highlights: ['Exhaustive Void & Rudder Sweeps', 'Official Clearance Certification', 'Zero Port Delay Guarantee']
    },
    {
      id: '03',
      title: 'Vessel Leasing & Equipment',
      category: 'logistics',
      icon: <Ship className="w-6 h-6 text-[#C89D4B]" />,
      description: 'Flexible access to vetted marine vessels, operational equipment, and dependable offshore support.',
      detailedDesc: 'We maintain an extensive network of charter-ready maritime assets, including Platform Supply Vessels (PSVs), Anchor Handling Tug Supply (AHTS) vessels, fast crew supply boats, and heavy-duty deck gear custom-fitted to your specific offshore requirements.',
      image: '/Marine-Offshore-Equipment-Trading.jpg',
      badge: 'Asset Management',
      highlights: ['PSVs & AHTS Fleet Access', 'Custom Deck Equipment Outfitting', 'Fully Vetted Crews & Hulls']
    },
    {
      id: '04',
      title: 'Crude Oil Trading Brokerage',
      category: 'commercial',
      icon: <TrendingUp className="w-6 h-6 text-[#C89D4B]" />,
      description: 'Commercial introductions and transaction coordination built on market insight, diligence, and trust.',
      detailedDesc: 'Facilitating seamless energy trade logistics across the Gulf of Guinea. NaviTera connects vetted buyers and sellers of crude oil and refined petroleum products while mitigating counterparty risk and ensuring strict adherence to international maritime trade standards.',
      image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=80',
      badge: 'Energy Market',
      highlights: ['Vetted Buyer/Seller Introductions', 'Counterparty Risk Mitigation', 'Strict Regulatory Adherence']
    },
    {
      id: '05',
      title: 'Vessels & Offshore Protection',
      category: 'protection',
      icon: <Compass className="w-6 h-6 text-[#C89D4B]" />,
      description: 'Comprehensive static and dynamic security architectures tailored for FPSOs, rigs, and marine terminals.',
      detailedDesc: 'Delivering end-to-end maritime defense strategies, physical vessel hardening, remote surveillance integration, and fast-response escort boats to safeguard critical energy infrastructure and offshore drilling rigs against modern maritime threats.',
      image: '/vessel protection.jpeg',
      badge: 'Tactical Defense',
      highlights: ['FPSO & Rig Hardening', 'Remote Surveillance Integration', 'Rapid Intervention Craft']
    }
  ];

  const filteredServices = activeServiceTab === 'all' 
    ? services 
    : services.filter(s => s.category === activeServiceTab);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', company: '', email: '', phone: '', service: 'Security Escort Vessels', urgency: 'Standard (48 hrs)', message: '' });
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
            <img 
              src="/NaviTera-logo.jpg" 
              alt="NaviTera Logo" 
              className="h-12 w-auto object-contain rounded-md"
              onError={(e) => { e.target.src = 'https://placehold.co/120x40/0B1924/C89D4B?text=NaviTera'; }}
            />
            <span className="text-xl font-bold text-white tracking-tight">NaviTera</span>
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

      {/* HERO WITH BACKGROUND VIDEO */}
      <section id="hero" className="relative min-h-screen pt-28 pb-20 flex items-center justify-start overflow-hidden bg-[#0B1924]">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover opacity-40 scale-105"
          >
            <source src="/backgroundvideo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1924] via-[#0B1924]/75 to-[#0B1924]/90" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 text-left w-full">
          <div className="max-w-3xl">
            <div className="flex items-center space-x-3 mb-6">
              <span className="w-10 h-[2px] bg-[#C89D4B]"></span>
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#C89D4B]">
                NaviTera FRONTIERS SOLUTIONS
              </span>
            </div>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light text-white tracking-tight leading-[1.1] mb-8">
              Securing Frontiers, <br />
              <span className="font-semibold text-white">Connecting Opportunities</span> Around the world.
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 font-light leading-relaxed mb-10 max-w-2xl text-left">
              We deliver reliable, risk-informed maritime security and offshore support services that protect people, vessels, cargo, and critical assets.
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

      {/* REDESIGNED STATS BAR SECTION */}
      <section className="relative z-20 -mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-gradient-to-r from-[#0A131B] via-[#0E1F2E] to-[#0A131B] border border-[#C89D4B]/30 rounded-2xl shadow-2xl p-8 sm:p-10 backdrop-blur-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-800/80">
            
            {/* Stat Item 1 */}
            <div className="pt-4 md:pt-0 md:px-6 flex items-start space-x-4 group transition-transform hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-[#C89D4B]/10 border border-[#C89D4B]/30 flex items-center justify-center text-[#C89D4B] shrink-0 group-hover:bg-[#C89D4B] group-hover:text-[#0B1924] transition-all">
                <Activity className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-baseline space-x-2">
                  <span className="text-3xl sm:text-4xl font-extrabold text-white font-mono tracking-tight">24/7</span>
                  <span className="text-xs uppercase tracking-widest text-[#C89D4B] font-bold">Active</span>
                </div>
                <span className="block text-xs uppercase tracking-wider text-slate-300 font-semibold mt-1">Operational Readiness</span>
                <span className="text-xs text-slate-400 block mt-0.5 font-light">Continuous response & deployment</span>
              </div>
            </div>

            {/* Stat Item 2 */}
            <div className="pt-6 md:pt-0 md:px-6 flex items-start space-x-4 group transition-transform hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-[#C89D4B]/10 border border-[#C89D4B]/30 flex items-center justify-center text-[#C89D4B] shrink-0 group-hover:bg-[#C89D4B] group-hover:text-[#0B1924] transition-all">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-baseline space-x-2">
                  <span className="text-3xl sm:text-4xl font-extrabold text-white font-mono tracking-tight">5</span>
                  <span className="text-xs uppercase tracking-widest text-[#C89D4B] font-bold">Core</span>
                </div>
                <span className="block text-xs uppercase tracking-wider text-slate-300 font-semibold mt-1">Service Divisions</span>
                <span className="text-xs text-slate-400 block mt-0.5 font-light">Security, Search, Leasing & Energy</span>
              </div>
            </div>

            {/* Stat Item 3 */}
            <div className="pt-6 md:pt-0 md:px-6 flex items-start space-x-4 group transition-transform hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-[#C89D4B]/10 border border-[#C89D4B]/30 flex items-center justify-center text-[#C89D4B] shrink-0 group-hover:bg-[#C89D4B] group-hover:text-[#0B1924] transition-all">
                <Layers className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-baseline space-x-2">
                  <span className="text-3xl sm:text-4xl font-extrabold text-white font-mono tracking-tight">360°</span>
                  <span className="text-xs uppercase tracking-widest text-[#C89D4B] font-bold">Full</span>
                </div>
                <span className="block text-xs uppercase tracking-wider text-slate-300 font-semibold mt-1">Marine Support</span>
                <span className="text-xs text-slate-400 block mt-0.5 font-light">End-to-end vessel & offshore protection</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* REDESIGNED SERVICES SECTION */}
      <section id="services" className="bg-[#050D14] text-white py-28 relative overflow-hidden">
        {/* Subtle background glow effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C89D4B]/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Header */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 pb-8 border-b border-slate-800 text-left">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <span className="w-10 h-[2px] bg-[#C89D4B]"></span>
                <span className="text-xs uppercase tracking-[0.3em] font-bold text-[#C89D4B]">
                  OUR SERVICES
                </span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white">
                Marine expertise. <br />
                <span className="font-bold text-[#C89D4B]"></span>
              </h2>
            </div>
            <p className="mt-6 lg:mt-0 text-slate-400 max-w-md text-sm sm:text-base leading-relaxed text-left font-light">
             We are trusted regional and international provider of integrated maritime security, offshore protection, and marine support services, recognised for operational excellence, professional integrity, and innovative solutions.
            </p>
          </div>

          {/* Interactive Category Filter Tabs */}
          <div className="flex flex-wrap gap-3 mb-16">
            {[
              { id: 'all', label: 'All Capabilities' },
              { id: 'protection', label: 'Vessel Protection' },
              { id: 'security', label: 'Stowaway Sweeps' },
              { id: 'logistics', label: 'Leasing & Logistics' },
              { id: 'commercial', label: 'Energy Brokerage' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveServiceTab(tab.id)}
                className={`px-6 py-3 text-xs font-semibold uppercase tracking-widest transition-all duration-300 border ${
                  activeServiceTab === tab.id
                    ? 'bg-[#C89D4B] text-[#0B1924] border-[#C89D4B] shadow-xl scale-105'
                    : 'bg-[#0B1924] text-slate-300 border-slate-800 hover:border-slate-600 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Bento Grid / Modern Cards Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <div
                key={service.id}
                onClick={() => setSelectedService(service)}
                className={`group relative bg-[#0A131B] border border-slate-800 rounded-xl p-8 flex flex-col justify-between cursor-pointer overflow-hidden transition-all duration-500 hover:border-[#C89D4B]/60 hover:shadow-2xl hover:shadow-[#C89D4B]/10 hover:-translate-y-1.5 ${
                  index === 0 ? 'lg:col-span-2' : ''
                }`}
              >
                {/* Background Image with Cinematic Overlay */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover opacity-25 group-hover:scale-110 group-hover:opacity-35 transition-all duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A131B] via-[#0A131B]/90 to-[#0A131B]/40" />
                </div>

                {/* Card Top: ID & Badge */}
                <div className="relative z-10 flex justify-between items-center mb-12">
                  <span className="text-sm font-mono font-bold text-[#C89D4B] bg-[#C89D4B]/10 px-3 py-1 border border-[#C89D4B]/20 rounded-md">
                    DIV {service.id}
                  </span>
                  <span className="inline-block px-3 py-1 text-[10px] uppercase tracking-wider font-bold bg-slate-800/80 text-slate-300 border border-slate-700 rounded-md">
                    {service.badge}
                  </span>
                </div>

                {/* Card Middle: Title & Description */}
                <div className="relative z-10 text-left mb-8">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 group-hover:text-[#C89D4B] transition-colors leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Highlights Mini Chips */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {service.highlights.slice(0, 2).map((h, i) => (
                      <span key={i} className="text-[11px] font-medium bg-slate-900/80 text-slate-300 px-2.5 py-1 rounded border border-slate-800">
                        ✓ {h}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Bottom: Action Link */}
                <div className="relative z-10 pt-6 border-t border-slate-800/80 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#C89D4B]">
                  <span className="group-hover:translate-x-1 transition-transform flex items-center space-x-2">
                    <span>View full specifications</span>
                    <ChevronRight className="w-4 h-4" />
                  </span>
                  <div className="w-10 h-10 rounded-full border border-slate-700 bg-slate-900/80 flex items-center justify-center text-white group-hover:bg-[#C89D4B] group-hover:text-[#0B1924] group-hover:border-[#C89D4B] transition-all">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="bg-white text-[#0B1924] py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Visual Image Container with Click & Hover Zoom Effects */}
            <div className="lg:col-span-5 relative">
              <div className="relative z-10 bg-[#0B1924] p-2 shadow-2xl rounded-lg overflow-hidden group cursor-pointer">
                <img
                  src="/NaviTera Security Escort Vessel.png"
                  alt="NaviTera Security Escort Vessel"
                  className="w-full h-full max-h-[500px] object-contain rounded transition-transform duration-500 ease-out group-hover:scale-105 active:scale-95"
                />
              </div>
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-[#C89D4B] -z-0 hidden sm:block rounded-lg" />
            </div>

            {/* Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center space-x-3 mb-2">
                <span className="w-10 h-[2px] bg-[#C89D4B]"></span>
                <span className="text-xs uppercase tracking-[0.25em] font-extrabold text-[#b0883d]">
                  ABOUT NAVITERRA MARITIME
                </span>
              </div>
              
              <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0B1924] tracking-tight leading-tight">
                Global execution standards.
              </h2>
              
              <p className="text-stone-700 leading-relaxed text-base sm:text-lg font-light">
                NaviTera is a premier maritime services company engineered to resolve complex offshore, security, and commercial challenges across West African waters with absolute clarity, speed, and command control.
              </p>

              <p className="text-stone-600 leading-relaxed text-sm sm:text-base">
                Operating strictly within international maritime security protocols, ISM, and ISPS codes, we serve global shipping lines, energy majors, and offshore terminal operators with unwavering reliability.
              </p>

              {/* Grid Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-stone-200">
                <div className="p-4 bg-stone-50 border border-stone-200 rounded-lg space-y-1">
                  <h4 className="font-bold text-sm text-[#0B1924] flex items-center space-x-2">
                    <span className="w-2 h-2 bg-[#C89D4B] inline-block"></span>
                    <span>Safety-Led Execution</span>
                  </h4>
                  <p className="text-xs text-stone-500 pl-4">Strict compliance with international ISM & ISPS security codes.</p>
                </div>
                <div className="p-4 bg-stone-50 border border-stone-200 rounded-lg space-y-1">
                  <h4 className="font-bold text-sm text-[#0B1924] flex items-center space-x-2">
                    <span className="w-2 h-2 bg-[#C89D4B] inline-block"></span>
                    <span>Vetted Marine Assets</span>
                  </h4>
                  <p className="text-xs text-stone-500 pl-4">Rigorous audits for all crews, physical gear, and charter hulls.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* OPERATIONS */}
      <section id="operations" className="bg-[#0B1924] text-white py-24 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <div className="max-w-3xl mb-16">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C89D4B]">OUR OPERATING STANDARD</span>
            <h2 className="text-3xl sm:text-5xl font-light mt-2 tracking-tight">
              Prepared before departure. <br /><span className="font-bold">Accountable throughout.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: '01', title: 'Assess', desc: 'Pre-deployment analysis of routes, timings, risk profiles, and compliance requirements.' },
              { step: '02', title: 'Mobilize', desc: 'Tactical assets, verified crews, and certified operational gear positioned on schedule.' },
              { step: '03', title: 'Deliver', desc: 'Continuous tracking, clear command coordination, and total follow-through to port.' }
            ].map((op, idx) => (
              <div key={idx} className="bg-[#0A131B] border border-slate-800 p-8 flex flex-col justify-between hover:border-[#C89D4B]/50 transition-colors">
                <div>
                  <span className="text-xs font-mono font-bold text-[#C89D4B] block mb-4">{op.step}</span>
                  <h3 className="text-2xl font-bold mb-3">{op.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{op.desc}</p>
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

      {/* CONTACT & INQUIRY SECTION */}
      <section id="contact" className="bg-[#0A131B] text-white py-24 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#C89D4B]">START A CONVERSATION</span>
                <h2 className="text-4xl sm:text-6xl font-light my-4 tracking-tight">
                  Your next <br /><span className="font-bold">operation</span> <br />starts here.
                </h2>
                <p className="text-slate-300 text-base leading-relaxed">
                  Submit your operational requirements below or connect directly with our 24/7 active maritime command desk.
                </p>
              </div>

              <div className="space-y-6 pt-6 border-t border-slate-800">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-[#0B1924] border border-slate-700 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-[#C89D4B]" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-widest font-bold text-[#C89D4B] block">Direct Desk Email</span>
                    <a href="mailto:operations@naviterafrontiers.com" className="text-base font-mono text-white hover:text-[#C89D4B] transition-colors">
                      operations@naviterafrontiers.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-[#0B1924] border border-slate-700 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-[#C89D4B]" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-widest font-bold text-[#C89D4B] block">Command Operations Hotline</span>
                    <span className="text-base font-mono text-white">+234 (0) 123 456 7890</span>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-[#0B1924] border border-slate-700 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[#C89D4B]" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-widest font-bold text-[#C89D4B] block">Headquarters</span>
                    <span className="text-sm text-slate-300">Suite 10, Kingdom Plaza, Plot 784, Festac Link Bridge, Amuwo Odofin Lagos.</span>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-[#0B1924] border border-slate-700 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-[#C89D4B]" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-widest font-bold text-[#C89D4B] block">Response Commitment</span>
                    <span className="text-sm text-slate-300">Active coordination desk open 24 hours / 365 days</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 bg-white text-[#0B1924] p-8 sm:p-12 shadow-2xl">
              {formSubmitted ? (
                <div className="py-16 text-center animate-in fade-in duration-500">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#0B1924] mb-2">Enquiry Received</h3>
                  <p className="text-stone-600 text-sm max-w-md mx-auto leading-relaxed">
                    Thank you. Your request has been securely logged with our 24/7 command operations desk. A senior maritime coordinator will reach out shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-widest text-stone-500 mb-2">YOUR NAME *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Full name"
                        className="w-full bg-stone-50 border-b-2 border-stone-300 focus:border-[#C89D4B] px-4 py-3 text-sm text-[#0B1924] outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-widest text-stone-500 mb-2">COMPANY / AGENCY</label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Company name"
                        className="w-full bg-stone-50 border-b-2 border-stone-300 focus:border-[#C89D4B] px-4 py-3 text-sm text-[#0B1924] outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-widest text-stone-500 mb-2">EMAIL ADDRESS *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@company.com"
                        className="w-full bg-stone-50 border-b-2 border-stone-300 focus:border-[#C89D4B] px-4 py-3 text-sm text-[#0B1924] outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-widest text-stone-500 mb-2">PHONE NUMBER</label>
                      <input
                        type="text"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+234 806 711 1865, +234 803 110 5222"
                        className="w-full bg-stone-50 border-b-2 border-stone-300 focus:border-[#C89D4B] px-4 py-3 text-sm text-[#0B1924] outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-widest text-stone-500 mb-2">SERVICE DIVISION</label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full bg-stone-50 border-b-2 border-stone-300 focus:border-[#C89D4B] px-4 py-3 text-sm text-[#0B1924] outline-none cursor-pointer"
                      >
                        <option value="Security Escort Vessels">Security Escort Vessels</option>
                        <option value="Stowaway Search">Stowaway Search</option>
                        <option value="Vessel Leasing & Equipment">Vessel Leasing & Equipment</option>
                        <option value="Crude Oil Trading Brokerage">Crude Oil Trading Brokerage</option>
                        <option value="Vessels & Offshore Protection">Vessels & Offshore Protection</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-widest text-stone-500 mb-2">URGENCY / TIMELINE</label>
                      <select
                        value={formData.urgency}
                        onChange={(e) => setFormData({ ...formData, urgency: e.target.value })}
                        className="w-full bg-stone-50 border-b-2 border-stone-300 focus:border-[#C89D4B] px-4 py-3 text-sm text-[#0B1924] outline-none cursor-pointer"
                      >
                        <option value="Immediate (24 hrs)">Immediate (24 hrs)</option>
                        <option value="Standard (48 hrs)">Standard (48 hrs)</option>
                        <option value="Future Charter / Planning">Future Charter / Planning</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-stone-500 mb-2">OPERATION DETAILS & REQUIREMENTS</label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Specify vessel type, port location, timeline, or specific operational requirements..."
                      className="w-full bg-stone-50 border-b-2 border-stone-300 focus:border-[#C89D4B] px-4 py-3 text-sm text-[#0B1924] outline-none resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto bg-[#C89D4B] hover:bg-[#b0883d] text-[#0B1924] font-bold px-8 py-4 text-xs uppercase tracking-widest flex items-center justify-center space-x-3 transition-colors shadow-lg"
                  >
                    <span>Submit official enquiry</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#080F16] text-slate-400 py-20 border-t border-slate-800 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-slate-800">
            
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
              
              <div className="pt-2 flex items-center space-x-4">
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Facebook"
                  className="w-10 h-10 bg-[#0B1924] border border-slate-800 flex items-center justify-center text-slate-300 hover:text-[#C89D4B] hover:border-[#C89D4B] transition-all"
                >
                  <FacebookIcon className="w-4 h-4" />
                </a>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Instagram"
                  className="w-10 h-10 bg-[#0B1924] border border-slate-800 flex items-center justify-center text-slate-300 hover:text-[#C89D4B] hover:border-[#C89D4B] transition-all"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="LinkedIn"
                  className="w-10 h-10 bg-[#0B1924] border border-slate-800 flex items-center justify-center text-slate-300 hover:text-[#C89D4B] hover:border-[#C89D4B] transition-all"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="md:col-span-3 space-y-4">
              <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#C89D4B] block">
                NAVIGATION
              </span>
              <ul className="space-y-3 text-xs font-medium">
                <li>
                  <button onClick={() => scrollToSection('hero')} className="hover:text-white transition-colors flex items-center space-x-1">
                    <span>Home</span>
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('about')} className="hover:text-white transition-colors flex items-center space-x-1">
                    <span>About NaviTera</span>
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('services')} className="hover:text-white transition-colors flex items-center space-x-1">
                    <span>Marine Services</span>
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('operations')} className="hover:text-white transition-colors flex items-center space-x-1">
                    <span>Operating Standards</span>
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('contact')} className="hover:text-white transition-colors flex items-center space-x-1">
                    <span>Request Service / Contact</span>
                  </button>
                </li>
              </ul>
            </div>

            <div className="md:col-span-4 space-y-4">
              <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#C89D4B] block">
                24/7 COMMAND DESK
              </span>
              <div className="space-y-3 text-xs">
                <div className="flex items-start space-x-3">
                  <Mail className="w-4 h-4 text-[#C89D4B] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-500 block text-[10px] uppercase">Email Enquiries</span>
                    <a href="mailto:operations@naviterafrontiers.com" className="text-white font-mono hover:text-[#C89D4B] transition-colors">
                      operations@naviterafrontiers.com
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

      {/* DETAILED SERVICE MODAL */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="bg-[#0B1924] border border-slate-700 max-w-2xl w-full text-white overflow-hidden shadow-2xl relative rounded-xl">
            
            {/* Modal Header with Close Button */}
            <div className="flex items-center justify-between p-6 border-b border-slate-800 bg-[#0A131B]">
              <div className="flex items-center space-x-3">
                <span className="text-xs font-mono font-bold text-[#C89D4B]">DIV {selectedService.id}</span>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#C89D4B] px-2.5 py-0.5 border border-[#C89D4B]/30 bg-[#C89D4B]/10 rounded">
                  {selectedService.badge}
                </span>
              </div>
              <button 
                onClick={() => setSelectedService(null)} 
                className="text-slate-400 hover:text-white hover:bg-slate-800 p-2 rounded-full transition-colors"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-8 space-y-6 max-h-[80vh] overflow-y-auto">
              <div className="relative h-48 sm:h-64 overflow-hidden border border-slate-800 rounded">
                <img 
                  src={selectedService.image} 
                  alt={selectedService.title} 
                  className="w-full h-full object-cover" 
                />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-3">{selectedService.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-6 font-light">{selectedService.detailedDesc}</p>
                
                <h4 className="text-xs font-bold uppercase tracking-widest text-[#C89D4B] mb-3">Key Operational Highlights</h4>
                <ul className="space-y-2 mb-6">
                  {selectedService.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-[#C89D4B]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Modal Footer Controls */}
              <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <button
                  onClick={() => {
                    setFormData({ ...formData, service: selectedService.title });
                    setSelectedService(null);
                    scrollToSection('contact');
                  }}
                  className="w-full sm:w-auto bg-[#C89D4B] hover:bg-[#b0883d] text-[#0B1924] px-6 py-3 text-xs font-bold uppercase tracking-widest flex items-center justify-center space-x-2 transition-colors shadow-lg"
                >
                  <span>Request this service</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => setSelectedService(null)} 
                  className="w-full sm:w-auto text-xs text-slate-400 hover:text-white border border-slate-700 hover:border-slate-500 px-5 py-3 uppercase tracking-wider font-semibold transition-colors"
                >
                  Close overview
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* FLOATING WHATSAPP CHATBOT */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
        {/* WhatsApp Popup Window */}
        {whatsappOpen && (
          <div className="mb-4 w-80 sm:w-96 bg-[#0B1924] border border-slate-700 rounded-xl shadow-2xl overflow-hidden text-left animate-in fade-in slide-in-from-bottom-5 duration-300">
            {/* Header */}
            <div className="bg-[#0A131B] border-b border-slate-800 p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.14 4.162 4.195-1.101z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">NaviTera Command Desk</h4>
                  <span className="text-[11px] text-emerald-400 font-medium flex items-center space-x-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span>Typically replies instantly</span>
                  </span>
                </div>
              </div>
              <button 
                onClick={() => setWhatsappOpen(false)}
                className="text-slate-400 hover:text-white p-1"
                aria-label="Close chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Body */}
            <div className="p-4 bg-[#080F16] space-y-3">
              <div className="bg-slate-800/80 p-3 rounded-lg text-xs text-slate-200 font-light border border-slate-700 max-w-[85%]">
                Hello! Welcome to NaviTera. How can our maritime command desk assist you today?
              </div>

              <form onSubmit={handleSendWhatsapp} className="mt-3 space-y-3">
                <textarea
                  rows={3}
                  value={whatsappMessage}
                  onChange={(e) => setWhatsappMessage(e.target.value)}
                  placeholder="Type your message here..."
                  className="w-full bg-[#0B1924] border border-slate-700 rounded-lg p-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#C89D4B] resize-none"
                ></textarea>

                <button
                  type="submit"
                  className="w-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold uppercase tracking-wider py-2.5 rounded-lg flex items-center justify-center space-x-2 transition-colors shadow-lg"
                >
                  <span>Start WhatsApp Chat</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        )}

        {/* Floating Trigger Button */}
        <button
          onClick={() => setWhatsappOpen(!whatsappOpen)}
          className="bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-3.5 rounded-full shadow-2xl flex items-center space-x-3 transition-all duration-300 transform hover:scale-105 active:scale-95 border border-emerald-400/30"
          aria-label="Talk to us on WhatsApp"
        >
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.14 4.162 4.195-1.101z"/>
          </svg>
          <span className="text-xs font-bold uppercase tracking-wider">Talk to us</span>
        </button>
      </div>

    </div>
  );
}
