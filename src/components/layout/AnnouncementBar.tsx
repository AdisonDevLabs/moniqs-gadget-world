import React from 'react';
import { Zap } from 'lucide-react';

const AnnouncementBar: React.FC = () => {
  // We extract the content so we can easily duplicate it for a seamless loop
  const AnnouncementText = () => (
    <div className="flex items-center gap-8 px-4">
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
  );

  return (
    <div className="bg-black text-white py-2 overflow-hidden relative border-b border-white/10 flex">
      {/* The container must be wide enough (w-max) to hold all duplicates.
        When it animates -50% to the left, it perfectly loops back to the start!
      */}
      <div className="flex whitespace-nowrap animate-marquee w-max hover:[animation-play-state:paused] cursor-default">
        <AnnouncementText />
        <AnnouncementText />
        <AnnouncementText />
        <AnnouncementText />
      </div>
    </div>
  );
};

export default AnnouncementBar;