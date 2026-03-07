import React from 'react';
import { MessageCircle } from 'lucide-react';
import { sendWhatsApp } from '../../utils/whatsapp';

const FinalCTA: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto bg-slate-900 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
        <div className="relative z-10 space-y-8">
          <h3 className="text-4xl md:text-6xl font-black tracking-tighter text-white uppercase italic">
            Ready to <span className="text-red-500">Upgrade?</span>
          </h3>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Chat with our team directly on WhatsApp to confirm stock, ask for a discount, or arrange your delivery.
          </p>
          {/* Note the strict adherence to the "Action Color" rule here */}
          <button 
            onClick={() => sendWhatsApp("Hi Moniqs! I'm ready to buy a new device.")}
            className="bg-green-500 hover:bg-green-600 text-white px-10 py-5 rounded-full font-black text-sm uppercase tracking-widest transition-all hover:scale-105 active:scale-95 shadow-xl shadow-green-500/30 flex items-center gap-3 mx-auto"
          >
            <MessageCircle size={20} /> Chat with us Now
          </button>
        </div>
        {/* Decorative Background */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(220,38,38,0.2),transparent_50%)]"></div>
      </div>
    </section>
  );
};

export default FinalCTA;