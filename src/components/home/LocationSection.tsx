import React from 'react';
import { MapPin, ArrowRight } from 'lucide-react';

const LocationSection: React.FC = () => {
  return (
    <section id="location" className="py-24 px-4 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-[3rem] shadow-xl border border-slate-100 overflow-hidden flex flex-col lg:flex-row">
          
          {/* Image Side */}
          <div className="lg:w-1/2 relative h-[400px] lg:h-auto">
            <img 
              src="https://images.unsplash.com/photo-1556656793-062ff9878273?auto=format&fit=crop&q=80&w=1000" 
              className="w-full h-full object-cover" 
              alt="Moniqs Storefront" 
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-end p-10">
              <div className="bg-white/20 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/30 text-white">
                <p className="font-black text-sm uppercase tracking-widest flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span> Open Now
                </p>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="lg:w-1/2 p-12 lg:p-20 flex flex-col justify-center">
            <h3 className="text-4xl md:text-5xl font-black tracking-tighter uppercase italic mb-6">
              Visit Our <br /> <span className="text-red-600">Showroom.</span>
            </h3>
            <p className="text-slate-500 font-medium mb-10 leading-relaxed">
              Experience our premium gadgets in person. Our tech experts are ready to assist you with device setups, trade-ins, and on-the-spot repairs.
            </p>
            
            <div className="space-y-6 mb-12">
              <div className="flex items-start gap-4">
                <div className="bg-red-50 p-3 rounded-xl text-red-600 shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h6 className="font-black text-lg text-slate-900">Lydia Arcade, Ground Floor</h6>
                  <p className="text-slate-500 text-sm mt-1">Shop No. G5, Opposite G-TANE Motors<br/>Kenyatta Avenue, Nakuru</p>
                </div>
              </div>
            </div>

            <button 
              onClick={() => window.open('https://www.google.com/maps', '_blank')}
              className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-xs flex items-center justify-center gap-3 hover:bg-red-600 transition-all w-full sm:w-auto shadow-lg shadow-slate-200"
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