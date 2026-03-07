import React from 'react';
import { Star } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-24 bg-red-600 text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 text-center space-y-8 relative z-10">
        <div className="flex justify-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={28} className="fill-white text-white" />
          ))}
        </div>
        <h4 className="text-3xl md:text-5xl font-black italic tracking-tighter max-w-4xl mx-auto leading-tight">
          “Moniqs Gadget world offers Genuine, High quality, friendly pricing and top notch customer care!”
        </h4>
        <div className="pt-4">
          <p className="text-xl font-black uppercase tracking-[0.2em]">Alex, NKR</p>
          <p className="text-red-200 text-sm font-bold uppercase tracking-widest mt-1">Verified Local Guide</p>
        </div>
      </div>
      {/* Background Graphic */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle,rgba(255,255,255,0.1)_0%,transparent_60%)] pointer-events-none"></div>
    </section>
  );
};

export default TestimonialsSection;