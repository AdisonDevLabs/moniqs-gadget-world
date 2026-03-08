import React from 'react';
import { Facebook, Instagram, Twitter, ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-20 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        
        {/* Brand Column */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 text-white">
            <div className="bg-white p-2 rounded-xl">
              <img
                src="/MGW.webp"
                alt="MGW Logo"
                className="w-8 h-8 object-cover rounded-lg" 
              />
            </div>
            <h1 className="text-xl font-black tracking-tighter">MONIQS GADGET</h1>
          </div>
          <p className="text-sm font-medium leading-relaxed">
            Nakuru's premier destination for high-end mobile tech. Genuine products, quality repairs, and fast delivery since 2018.
          </p>
          <div className="flex gap-3">
            {[Facebook, Instagram, Twitter].map((Icon, i) => (
              <button key={i} className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center hover:bg-red-600 hover:text-white transition-all">
                <Icon size={18} />
              </button>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h6 className="text-white font-black uppercase tracking-widest text-xs mb-6">Quick Links</h6>
          <ul className="space-y-4 text-sm font-medium">
            <li className="hover:text-red-500 cursor-pointer transition-colors">Shop iPhones</li>
            <li className="hover:text-red-500 cursor-pointer transition-colors">Shop Android</li>
            <li className="hover:text-red-500 cursor-pointer transition-colors">Book a Repair</li>
            <li className="hover:text-red-500 cursor-pointer transition-colors">Today's Deals</li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h6 className="text-white font-black uppercase tracking-widest text-xs mb-6">Support</h6>
          <ul className="space-y-4 text-sm font-medium">
            <li className="hover:text-red-500 cursor-pointer transition-colors">Contact Us</li>
            <li className="hover:text-red-500 cursor-pointer transition-colors">Warranty Policy</li>
            <li className="hover:text-red-500 cursor-pointer transition-colors">Delivery Info</li>
            <li className="hover:text-red-500 cursor-pointer transition-colors">FAQs</li>
          </ul>
        </div>

        {/* Newsletter (Adds massive professional credibility) */}
        <div className="space-y-6">
          <h6 className="text-white font-black uppercase tracking-widest text-xs">VIP Newsletter</h6>
          <p className="text-sm font-medium">Get notified about our 40% OFF flash sales before anyone else.</p>
          <div className="flex bg-white/5 p-1 rounded-2xl border border-white/10 focus-within:border-red-500 transition-colors">
            <input 
              type="email" 
              placeholder="Email address..." 
              className="bg-transparent border-none focus:ring-0 text-sm p-3 w-full text-white outline-none" 
            />
            <button className="bg-red-600 text-white p-3 rounded-xl hover:bg-red-700 transition-colors">
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium uppercase tracking-widest">
        <p>&copy; {new Date().getFullYear()} Moniqs Gadget World.</p>
        <div className="flex gap-6">
          <span className="hover:text-white cursor-pointer transition-colors">Privacy</span>
          <span className="hover:text-white cursor-pointer transition-colors">Terms</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;