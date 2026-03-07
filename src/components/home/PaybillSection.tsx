import React from 'react';

const PaybillSection: React.FC = () => {
  return (
    <section id="paybill" className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h3 className="text-4xl md:text-6xl font-black tracking-tighter uppercase italic mb-16">Safe Payment.</h3>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-slate-50 p-12 rounded-[3.5rem] border border-slate-100 text-left hover:border-blue-500 transition-colors">
            <div className="w-16 h-16 bg-blue-600 text-white rounded-3xl flex items-center justify-center mb-8 font-black text-2xl shadow-xl shadow-blue-100">KCB</div>
            <p className="text-[10px] font-black uppercase text-blue-600 mb-2 italic">Paybill No.</p>
            <h5 className="text-4xl font-black mb-4 tracking-tighter">522533</h5>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Account: 7626864</p>
          </div>
          <div className="bg-slate-50 p-12 rounded-[3.5rem] border border-slate-100 text-left hover:border-red-600 transition-colors">
            <div className="w-16 h-16 bg-red-600 text-white rounded-3xl flex items-center justify-center mb-8 font-black text-2xl italic shadow-xl shadow-red-100">NCBA</div>
            <p className="text-[10px] font-black uppercase text-red-600 mb-2 italic">Paybill No.</p>
            <h5 className="text-4xl font-black mb-4 tracking-tighter">880100</h5>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Account: 044110</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaybillSection;