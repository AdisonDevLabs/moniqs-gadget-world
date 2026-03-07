import React from 'react';
import { Headphones, BatteryCharging, Shield, Smartphone, Speaker } from 'lucide-react';
import { Link } from 'react-router-dom';

const ACCESSORY_CATEGORIES = [
  { name: "Headphones & Pods", icon: Headphones, count: "24+ Items" },
  { name: "Chargers & Cables", icon: BatteryCharging, count: "15+ Items" },
  { name: "Screen Protectors", icon: Shield, count: "All Models" },
  { name: "Protective Casings", icon: Smartphone, count: "50+ Styles" },
  { name: "Handsfree Kits", icon: Speaker, count: "12+ Items" },
];

const AccessoriesSection: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="space-y-4">
            <span className="text-red-500 font-black text-xs uppercase tracking-[0.2em] italic">Original & Classy</span>
            <h3 className="text-4xl md:text-6xl font-black tracking-tighter uppercase italic">
              Premium <br /> Accessories.
            </h3>
          </div>
          <Link 
            to="/shop" 
            className="text-sm font-black uppercase tracking-widest border-b-2 border-slate-500 pb-1 hover:text-white hover:border-white transition-all text-slate-400"
          >
            View All Accessories
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {ACCESSORY_CATEGORIES.map((cat, i) => (
            <Link 
              key={i} 
              to="/shop" 
              className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 hover:bg-red-600 hover:border-red-500 transition-all duration-300 group text-center flex flex-col items-center justify-center gap-4"
            >
              <div className="bg-white/10 p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                <cat.icon size={32} className="text-red-500 group-hover:text-white transition-colors" />
              </div>
              <div>
                <h5 className="font-black text-sm uppercase tracking-tight mb-1">{cat.name}</h5>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest group-hover:text-red-200">{cat.count}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AccessoriesSection;