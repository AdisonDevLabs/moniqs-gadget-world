import React from 'react';
import { Phone, Menu, ShoppingBag } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { sendWhatsApp } from '../../utils/whatsapp';

interface NavbarProps {
  isScrolled: boolean;
  onMenuOpen: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled, onMenuOpen }) => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const { cartCount, setIsCartOpen } = useCart();

  // If we are not on the home page, always keep the navbar solid white for readability
  const navBackground = isScrolled || !isHome 
    ? 'bg-white/95 backdrop-blur-xl shadow-lg py-3' 
    : 'bg-transparent py-6';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-200 ${navBackground}`}>
      <div className="max-w-7xl mx-auto px-4 pt-4 flex justify-between items-center">
        
        {/* 1. Logo Section (Routes to Home) */}
        <Link to="/" className="flex items-center gap-3 group cursor-pointer">
          <div className="group-hover:scale-110 transition-transform duration-300">
            <img
              src="/MGW.webp"
              alt="Moniqs Gadget World Logo"
              className="w-10 h-10 object-cover rounded-xl shadow-lg shadow-red-200"
            />
          </div>
          <div>
            <h1 className="text-xl font-black tracking-tighter leading-none">MONIQS GADGET</h1>
            <p className="text-[9px] font-bold text-red-600 uppercase tracking-widest">World Nakuru</p>
          </div>
        </Link>
        
        {/* 2. Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-10 text-[11px] font-black uppercase tracking-[0.2em] text-slate-500">
          <Link to="/" className="hover:text-red-600 transition-colors">Home</Link>
          <Link to="/shop" className="hover:text-red-600 transition-colors">Shop</Link>
          <a href="/#repairs" className="hover:text-red-600 transition-colors">Repairs</a>
          <a href="/#location" className="hover:text-red-600 transition-colors">Location</a>
        </div>
        
        {/* 3. Action Buttons */}
        <div className="flex items-center gap-4">
          
          {/* Quick Contact Button (Using the Green "Action Color") */}
          <button 
            onClick={() => sendWhatsApp("Hi Moniqs, I need help finding a device.")}
            className="hidden sm:flex bg-green-500 text-white px-5 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-green-600 hover:shadow-lg hover:shadow-green-200 transition-all items-center gap-2"
          >
            <Phone size={14} /> Contact
          </button>

          {/* Cart Button with Global State Badge */}
          <button 
            onClick={() => setIsCartOpen(true)}
            className="relative p-2 text-slate-900 hover:text-red-600 transition-colors"
          >
            <ShoppingBag size={24} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[10px] font-black w-5 h-5 flex items-center justify-center rounded-full border-2 border-white shadow-sm">
                {cartCount}
              </span>
            )}
          </button>
          
          {/* Mobile Menu Toggle */}
          <button className="lg:hidden p-2 bg-slate-100 rounded-xl" onClick={onMenuOpen}>
            <Menu size={20} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;