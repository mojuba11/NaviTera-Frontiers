import React, { useState } from 'react';
import { ArrowUpRight, X } from 'lucide-react';

export default function Services({ scrollToSection, setSelectedServiceForContact }) {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
  {
      id: '01',
      title: 'BORDER-TO-BORDER MARITIME SECURITY ESCORT',
      category: 'protection',
      icon: <Shield className="w-6 h-6 text-[#C89D4B]" />,
      description: 'Provision and coordination of dedicated security escort vessels to support the safe movement of commercial vessels and maritime assets.',
      detailedDesc: 'NaviTera Frontiers Solutions provides coordinated maritime security escort services for merchant vessels, commercial shipping operations, offshore movements, and other designated maritime activities within authorised Nigerian territorial and offshore waters.',
      image: '/NaviTera Security Escort Vessel.png',
      badge: 'High Risk Zones',
      highlights: ['Security escort vessel services.', 'Vessel movement and security coordination.', 'Coordination with relevant maritime stakeholders.','Security communications and operational reporting.','Maritime security support for commercial shipping and offshore operations']
    },
    {
      id: '02',
      title: 'ADVANCED STOWAWAY DETECTION & MARITIME SECURITY SEARCH',
      category: 'security',
      icon: <Search className="w-6 h-6 text-[#C89D4B]" />,
      description: 'Professional stowaway search services designed to assist shipowners, ship managers, vessel operators, and other maritime stakeholders.',
      detailedDesc: 'NaviTera Frontiers Solutions specialises in stowaway detection and maritime security inspection services designed to assist shipowners, ship managers, vessel operators, and other maritime stakeholders in identifying unauthorised persons concealed onboard vessels',
      image: '/stowaway.jpeg',
      badge: 'Port Compliance',
      highlights: ['Pre-departure stowaway searches.', 'Incident escalation and coordination with appropriate authorities where necessary.', Search documentation and reporting', 'Systematic searches of designated vessel spaces.', 'Inspection of accessible compartments and other relevant locations.', 'Zero Port Delay Guarantee']
    },
    {
      id: '03',
      title: 'OFFSHORE PROTECTION & REAL-TIME MARITIME SURVEILLANCE',
      category: 'logistics',
      icon: <Ship className="w-6 h-6 text-[#C89D4B]" />,
      description: 'Integrated offshore security and maritime surveillance solutions',
      detailedDesc: 'NaviTera Frontiers Solutions  develops and provides integrated offshore security and maritime surveillance solutions designed to protect offshore installations, vessels, personnel, and critical maritime infrastructure. Our proposed security framework combines professional maritime security coordination, liaison with relevant government security agencies, authorised maritime security personnel, and technology-enabled surveillance systems to strengthen situational awareness and support effective threat management.',
      image: '/vessel protection.jpeg',
      badge: 'Security Coordination',
      highlights: ['', ]
    },
    {
      id: '03',
      title: 'Vessel Leasing & Equipment',
      description: 'Flexible access to vetted marine vessels, operational equipment, and dependable offshore support.',
      detailedDesc: 'We maintain an extensive network of charter-ready maritime assets including Platform Supply Vessels (PSVs) and AHTS vessels.',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
      badge: 'Asset Management'
    }
  ];

  return (
    <section id="services" className="bg-[#F4F1EA] text-[#0B1924] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-stone-300">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <span className="w-8 h-[2px] bg-[#C89D4B]"></span>
              <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#b0883d]">WHAT WE DO</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-light text-[#0B1924]">
              Marine expertise. <br /><span className="font-bold">One trusted partner.</span>
            </h2>
          </div>
          <p className="mt-6 md:mt-0 text-stone-600 max-w-md text-sm sm:text-base">
            From vessel security to energy trading support, our services ensure dependable execution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              onClick={() => setSelectedService(service)}
              className="group relative bg-[#0B1924] text-white p-6 min-h-[400px] flex flex-col justify-between cursor-pointer shadow-xl"
            >
              <div className="relative z-10 flex justify-between items-start">
                <span className="text-xs font-mono font-bold text-[#C89D4B]">{service.id}</span>
                <div className="w-10 h-10 rounded-full border border-white/20 bg-black/40 flex items-center justify-center text-white">
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

      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-[#0B1924] border border-slate-700 max-w-2xl w-full text-white p-8 relative">
            <button onClick={() => setSelectedService(null)} className="absolute top-4 right-4 text-slate-400 hover:text-white">
              <X className="w-6 h-6" />
            </button>
            <h3 className="text-2xl font-bold mb-4 text-white">{selectedService.title}</h3>
            <p className="text-slate-300 text-sm mb-6 font-light leading-relaxed">{selectedService.detailedDesc}</p>
            <button 
              onClick={() => {
                setSelectedServiceForContact(selectedService.title);
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
    </section>
  );
}
