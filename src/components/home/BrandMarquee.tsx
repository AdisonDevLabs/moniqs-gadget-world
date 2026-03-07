import React from 'react';
import { BRANDS } from '../../data/constants';

const BrandMarquee: React.FC = () => {
  return (
    <section className="bg-white py-14 border-y border-slate-100 overflow-hidden">
      {/* Note: For the marquee animation to work, ensure you added the keyframes 
        to your index.css or tailwind.config.js 
      */}
      <div className="flex whitespace-nowrap gap-16 animate-[marquee_40s_linear_infinite]">
        {/* Render the brands twice for a seamless infinite scroll effect */}
        {[...BRANDS, ...BRANDS].map((brand, i) => (
          <span 
            key={i} 
            className="text-4xl font-black text-slate-200 uppercase tracking-tighter hover:text-red-600 transition-colors cursor-default select-none"
          >
            {brand}
          </span>
        ))}
      </div>
    </section>
  );
};

export default BrandMarquee;