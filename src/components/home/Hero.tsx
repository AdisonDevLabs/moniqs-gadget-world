import React from 'react';
import { ArrowRight, Star, Tag } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Hero: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="pt-20 pb-6 lg:pt-22 lg:pb-6 px-4 overflow-hidden relative">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Column: Copy & CTAs */}
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
            Your One Stop Mobile Phones Sales, Repairs & Accessories Shop. We provide 100% genuine tech solutions, friendly pricing, and instant doorstep delivery.
          </p>
          
          <div className="flex flex-wrap gap-5 items-center">
            <button 
              onClick={() => navigate('/shop')}
              className="bg-slate-900 text-white px-10 py-5 rounded-3xl font-black text-xs uppercase tracking-widest shadow-2xl shadow-slate-900/20 hover:bg-red-600 hover:-translate-y-1 transition-all flex items-center gap-3"
            >
              Explore Shop <ArrowRight size={18} />
            </button>
            
            {/* Promo Badge injected from their WordPress site */}
            <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-5 py-4 rounded-2xl border border-red-100 font-black text-xs uppercase tracking-widest">
              <Tag size={18} /> Up to 40% OFF
            </div>
          </div>
          
          {/* Trust Elements with real WordPress testimonial */}
          <div className="flex items-center gap-4 pt-6 border-t border-slate-100 max-w-lg">
            <div className="text-left">
              <p className="text-xl font-black text-slate-900">2k+</p>
              <p className="text-[10px] font-bold text-slate-400 uppercase">Reviews</p>
            </div>
            <div className="flex gap-0.5 text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} className="fill-current" />
              ))}
            </div>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-relaxed border-l border-slate-200 pl-4 ml-2 italic">
              "Original, Professional & Classy." <br/> <span className="text-slate-900">— Alex, NKR</span>
            </p>
          </div>
        </div>

        {/* Right Column: Hero Image Teaser */}
        <div className="relative">
          <div 
            onClick={() => navigate('/product/1')}
            className="relative z-10 rounded-[3.5rem] overflow-hidden shadow-2xl border-[12px] border-white bg-slate-100 group cursor-pointer"
          >
            {/* Replaced Unsplash with their top flagship local product */}
            <img 
              src="/images/samsung-galaxy-s25-ultra.jpg" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              alt="Samsung Galaxy S25 Ultra" 
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80"></div>
            
            {/* Text Overlay on Image */}
            <div className="absolute bottom-8 left-8 right-8">
              <span className="bg-red-600 text-white text-[10px] font-black px-4 py-1.5 rounded-full shadow-lg italic mb-3 inline-block">
                Flagship Series
              </span>
              <h3 className="text-white text-3xl md:text-4xl font-black uppercase italic tracking-tight mb-1">
                Samsung S25 Ultra
              </h3>
              <p className="text-slate-300 text-xs font-bold uppercase tracking-widest">
                Available Now in Nakuru
              </p>
            </div>
          </div>

          {/* Abstract Glow Effects */}
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-red-600 rounded-full blur-3xl -z-10 opacity-10"></div>
          <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-slate-900 rounded-full blur-3xl -z-10 opacity-5"></div>
        </div>

      </div>
    </section>
  );
};

export default Hero;