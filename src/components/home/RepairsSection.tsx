import React from 'react';
import { REPAIR_SERVICES } from '../../data/constants';

const RepairsSection: React.FC = () => {
  return (
    <section id="repairs" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-20 items-center relative z-10">
        <div className="space-y-8">
          <span className="bg-red-600 text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full italic">
            Certified Tech Center
          </span>
          <h3 className="text-4xl md:text-7xl font-black tracking-tighter italic uppercase">
            Repairs that <br /> <span className="text-red-600">Restore.</span>
          </h3>
          <p className="text-slate-400 text-lg leading-relaxed">
            Broken screen? Battery drain? Our in-house specialists use genuine parts for all major brands. Restoring your device while you wait.
          </p>
          <div className="grid sm:grid-cols-2 gap-8 pt-6">
            {REPAIR_SERVICES.map((service, index) => (
              <div key={index} className="group cursor-default">
                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-red-600 transition-colors">
                  <service.icon size={22} className="text-red-600 group-hover:text-white" />
                </div>
                <h6 className="font-black text-lg mb-1 uppercase italic tracking-tight">{service.title}</h6>
                <p className="text-xs text-slate-500 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white/5 p-10 rounded-[3rem] border border-white/10 backdrop-blur-2xl">
          <h5 className="text-xl font-black mb-6 uppercase italic">Quick Quote</h5>
          <div className="space-y-4">
            <div className="flex justify-between border-b border-white/5 pb-4">
              <span className="text-slate-400">Diagnostic</span>
              <span className="font-black text-red-500">KSh 0</span>
            </div>
            <div className="flex justify-between border-b border-white/5 pb-4">
              <span className="text-slate-400">Screen (Infinix/Tecno)</span>
              <span className="font-black">From 2,500</span>
            </div>
            <div className="flex justify-between border-b border-white/5 pb-4">
              <span className="text-slate-400">Screen (Samsung)</span>
              <span className="font-black">From 4,500</span>
            </div>
            <div className="flex justify-between border-b border-white/5 pb-4">
              <span className="text-slate-400">Charging Port</span>
              <span className="font-black">From 800</span>
            </div>
          </div>
          <button className="w-full mt-8 bg-red-600 text-white py-5 rounded-2xl font-black uppercase text-[10px] tracking-[0.2em] shadow-xl shadow-red-900/20 hover:bg-red-700 transition-colors">
            Chat with a Technician
          </button>
        </div>
      </div>
    </section>
  );
};

export default RepairsSection;