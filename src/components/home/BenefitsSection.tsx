import React from 'react';
import { BENEFITS } from '../../data/constants';

const BenefitsSection: React.FC = () => {
  return (
    <section className="py-12 px-4 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h3 className="text-3xl md:text-5xl font-black tracking-tighter text-slate-900 mb-4">
            More Than Just A Shop.
          </h3>
          <p className="text-slate-500 font-medium text-lg">
            Don't risk your money on untrusted vendors. Here is why thousands in Nakuru choose Moniqs Gadget World.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-12">
          {BENEFITS.map((item, i) => (
            <div key={i} className="text-center group">
              <div className="w-20 h-20 mx-auto bg-slate-50 rounded-3xl flex items-center justify-center mb-6 group-hover:-translate-y-2 transition-transform duration-300 shadow-sm border border-slate-100">
                <item.icon size={32} className="text-red-600" />
              </div>
              <h5 className="text-xl font-black text-slate-900 mb-3">{item.title}</h5>
              <p className="text-slate-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;