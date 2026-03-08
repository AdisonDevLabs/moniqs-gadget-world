import React from 'react';
import { Zap } from 'lucide-react';

const AnnouncementBar: React.FC = () => (
  <div className="bg-black text-white py-1 px-4 overflow-hidden relative border-b border-white/10">
    <div className="flex justify-center items-center gap-8 whitespace-nowrap animate-marquee">
      <span className="text-[10px] md:text-xs font-black uppercase tracking-widest flex items-center gap-2">
        <Zap size={14} className="text-yellow-400 fill-yellow-400" /> UPTO 40% OFF ACCESSORIES
      </span>
      <span className="text-[10px] md:text-xs font-black uppercase tracking-widest flex items-center gap-2 text-red-500">
         FREE DELIVERY NAKURU CBD
      </span>
      <span className="text-[10px] md:text-xs font-black uppercase tracking-widest flex items-center gap-2">
         GENUINE PHONES & QUALITY REPAIRS
      </span>
    </div>
  </div>
);

export default AnnouncementBar;