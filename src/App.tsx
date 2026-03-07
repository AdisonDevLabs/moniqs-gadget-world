import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { X, ChevronRight, MessageCircle } from 'lucide-react';
import { sendWhatsApp } from './utils/whatsapp';

// Context
import { CartProvider } from './context/CartContext';

// Global Layout Components
import AnnouncementBar from './components/layout/AnnouncementBar';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import SlideOutCart from './components/cart/SlideOutCart';

// Pages (View Layers)
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';

const AppContent: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileMenu, setMobileMenu] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-red-100 flex flex-col">
        
        {/* Global Headers & Cart */}
        <AnnouncementBar />
        <Navbar isScrolled={isScrolled} onMenuOpen={() => setMobileMenu(true)} />
        <SlideOutCart />

        {/* Mobile Menu Overlay */}
        {mobileMenu && (
          <div className="fixed inset-0 z-[200] bg-white p-8 animate-in fade-in zoom-in duration-300">
            <div className="flex justify-between items-center mb-12">
              <h2 className="font-black text-xl italic uppercase">Menu</h2>
              <button onClick={() => setMobileMenu(false)} className="p-3 bg-slate-100 rounded-2xl">
                <X size={24} />
              </button>
            </div>
            <div className="flex flex-col gap-8 text-4xl font-black italic uppercase">
              {/* Note: Mobile links updated to use React Router <Link> */}
              <Link to="/" onClick={() => setMobileMenu(false)} className="hover:text-red-600 flex justify-between items-center tracking-tighter">Home <ChevronRight size={32} /></Link>
              <Link to="/shop" onClick={() => setMobileMenu(false)} className="hover:text-red-600 flex justify-between items-center tracking-tighter">Shop <ChevronRight size={32} /></Link>
              <a href="/#repairs" onClick={() => setMobileMenu(false)} className="hover:text-red-600 flex justify-between items-center tracking-tighter">Repairs <ChevronRight size={32} /></a>
              <a href="/#location" onClick={() => setMobileMenu(false)} className="hover:text-red-600 flex justify-between items-center tracking-tighter">Location <ChevronRight size={32} /></a>
            </div>
          </div>
        )}

        {/* Dynamic View Layer (The Pages) */}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:id" element={<ProductDetail />} />
          </Routes>
        </div>

        {/* Global Footer & FAB */}
        <Footer />
        <div className="fixed bottom-8 right-8 z-[100] group pointer-events-none">
          <button 
            onClick={() => sendWhatsApp("Hi Moniqs, I need help finding a product.")}
            className="bg-green-500 text-white w-16 h-16 rounded-full shadow-2xl flex items-center justify-center hover:bg-green-600 active:scale-95 transition-all pointer-events-auto shadow-green-200"
          >
            <MessageCircle size={32} />
          </button>
        </div>

      </div>
    </BrowserRouter>
  );
};

// Wrap everything in the CartProvider so the state is global
const App: React.FC = () => {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
};

export default App;