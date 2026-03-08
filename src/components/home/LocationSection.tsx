import React from 'react';
import { MapPin, ArrowRight, PhoneCall, Mail } from 'lucide-react';

const LocationSection: React.FC = () => {
  return (
    <section id="location" className="py-20 px-4 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-[3rem] shadow-xl border border-slate-100 overflow-hidden flex flex-col lg:flex-row">
          
          {/* Image Side - Ready for their actual storefront photo */}
          <div className="lg:w-1/2 relative h-[300px] lg:h-[742px] group overflow-hidden">
            <img 
              src="/storefront.jpg" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              alt="Moniqs Storefront at Lydia Arcade" 
              onError={(e) => {
                // Fallback just in case you haven't downloaded a storefront picture yet
                e.currentTarget.src = "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?auto=format&fit=crop&q=80&w=1000";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/40 to-transparent flex items-end p-10">
              <div className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/20 text-white shadow-xl">
                <p className="font-black text-sm uppercase tracking-widest flex items-center gap-3">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                  </span>
                  Open For Business
                </p>
              </div>
            </div>
          </div>

          {/* Content Side - Injected with their real WP Contact Data */}
          <div className="lg:w-1/2 p-10 lg:p-20 flex flex-col justify-center">
            <h3 className="text-4xl md:text-5xl font-black tracking-tighter uppercase italic mb-6">
              Visit Our <br /> <span className="text-red-600">Showroom.</span>
            </h3>
            <p className="text-slate-500 font-medium mb-10 leading-relaxed text-lg">
              Experience our premium gadgets in person. Our tech experts are ready to assist you with device setups, trade-ins, and on-the-spot repairs.
            </p>
            
            <div className="space-y-6 mb-12">
              {/* Address */}
              <div className="flex items-start gap-5">
                <div className="bg-red-50 p-4 rounded-2xl text-red-600 shrink-0 shadow-sm border border-red-100">
                  <MapPin size={24} />
                </div>
                <div>
                  <h6 className="font-black text-lg text-slate-900 tracking-tight uppercase italic">Lydia Arcade, Ground Floor</h6>
                  <p className="text-slate-500 font-medium mt-1">Nakuru CBD</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-5">
                <div className="bg-slate-50 p-4 rounded-2xl text-slate-900 shrink-0 shadow-sm border border-slate-100">
                  <PhoneCall size={24} />
                </div>
                <div>
                  <h6 className="font-black text-lg text-slate-900 tracking-tight uppercase italic">Call / WhatsApp</h6>
                  <p className="text-slate-500 font-medium mt-1">(+254) 703 994 759</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-5">
                <div className="bg-slate-50 p-4 rounded-2xl text-slate-900 shrink-0 shadow-sm border border-slate-100">
                  <Mail size={24} />
                </div>
                <div>
                  <h6 className="font-black text-lg text-slate-900 tracking-tight uppercase italic">Email Us</h6>
                  <p className="text-slate-500 font-medium mt-1">gadgetworld.nakuru@gmail.com</p>
                </div>
              </div>
            </div>

            {/* Fixed Google Maps Routing */}
            <button 
              onClick={() => window.open('https://www.google.com/maps/search/Gadgets+World,+Nakuru', '_blank')}
              className="bg-slate-900 text-white px-8 py-5 rounded-2xl font-black uppercase tracking-widest text-xs flex items-center justify-center gap-3 hover:bg-red-600 transition-all w-full sm:w-auto shadow-xl shadow-slate-900/20 active:scale-95"
            >
              Get Maps Directions <ArrowRight size={18} />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default LocationSection;