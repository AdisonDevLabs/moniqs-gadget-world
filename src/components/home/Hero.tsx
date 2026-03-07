import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="pt-32 pb-20 lg:pt-48 lg:pb-32 px-4 overflow-hidden relative">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative z-10 space-y-8">
          <div className="inline-flex items-center gap-3 bg-white px-4 py-2 rounded-full border border-slate-100 shadow-sm">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-[11px] font-black uppercase tracking-tighter text-slate-500 italic">
              Lydia Arcade, Ground Floor - Nakuru
            </span>
          </div>
          <h2 className="text-5xl md:text-8xl font-black leading-[0.9] tracking-tighter text-slate-900 uppercase italic">
            Premium <br /> <span className="text-red-600">Gadgets</span> <br /> Only.
          </h2>
          <p className="text-lg text-slate-500 max-w-lg leading-relaxed font-medium">
            Join thousands of happy customers in Nakuru. We don't just sell phones; we provide 100% genuine tech solutions with doorstep delivery.
          </p>
          <div className="flex flex-wrap gap-5">
            <button 
              onClick={() => document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-green-500 text-white px-10 py-5 rounded-3xl font-black text-xs uppercase tracking-widest shadow-2xl shadow-green-200 hover:bg-green-600 hover:-translate-y-1 transition-all flex items-center gap-3">
              Explore Shop <ArrowRight size={18} />
            </button>
            <div className="flex items-center gap-4 px-6 border-l border-slate-200">
              <div className="text-left">
                <p className="text-xl font-black text-slate-900">2k+</p>
                <p className="text-[10px] font-bold text-slate-400 uppercase">Reviews</p>
              </div>
              <div className="flex gap-0.5 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} className="fill-current" />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="relative z-10 rounded-[3.5rem] overflow-hidden shadow-2xl border-[12px] border-white bg-slate-100 aspect-[4/5]">
            <img 
              src="https://images.unsplash.com/photo-1605236453023-496538360300?auto=format&fit=crop&q=80&w=800" 
              className="w-full h-full object-cover" 
              alt="Hero Presentation" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-red-600/30 to-transparent"></div>
          </div>
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-red-100 rounded-full blur-3xl -z-10 opacity-50"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;