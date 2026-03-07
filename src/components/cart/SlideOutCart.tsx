import React from 'react';
import { X, Trash2, Plus, Minus, MessageCircle, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { sendWhatsApp } from '../../utils/whatsapp';

const SlideOutCart: React.FC = () => {
  const { isCartOpen, setIsCartOpen, cartItems, cartTotal, updateQuantity, removeFromCart } = useCart();

  const handleCheckout = () => {
    if (cartItems.length === 0) return;

    let message = "Hi Moniqs! I'd like to place an order:\n\n";
    cartItems.forEach((item) => {
      message += `• ${item.quantity}x ${item.name} (KSh ${item.price})\n`;
    });
    message += `\n*Total: KSh ${cartTotal.toLocaleString()}*\n\nPlease let me know how to proceed with payment and delivery.`;
    
    sendWhatsApp(message);
  };

  if (!isCartOpen) return null;

  return (
    <>
      {/* Dark Overlay */}
      <div 
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[200] transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Cart Panel sliding from right */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-white z-[201] shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-100">
          <h2 className="text-2xl font-black italic uppercase flex items-center gap-3">
            <ShoppingBag className="text-red-600" /> Your Cart
          </h2>
          <button 
            onClick={() => setIsCartOpen(false)} 
            className="p-2 bg-slate-100 rounded-full hover:bg-slate-200 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {cartItems.length === 0 ? (
            <div className="text-center text-slate-400 mt-20">
              <ShoppingBag size={64} className="mx-auto mb-4 opacity-20" />
              <p className="font-medium">Your cart is currently empty.</p>
            </div>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="flex gap-4 border-b border-slate-50 pb-6">
                <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-2xl border border-slate-100" />
                <div className="flex-1">
                  <h4 className="font-bold text-slate-900 leading-tight mb-1">{item.name}</h4>
                  <p className="text-sm font-black text-red-600 mb-3">KSh {item.price}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 bg-slate-100 rounded-full px-3 py-1">
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="text-slate-500 hover:text-slate-900"><Minus size={14} /></button>
                      <span className="text-sm font-bold w-4 text-center">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="text-slate-500 hover:text-slate-900"><Plus size={14} /></button>
                    </div>
                    <button onClick={() => removeFromCart(item.id)} className="text-slate-400 hover:text-red-500 transition-colors">
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer / Checkout */}
        {cartItems.length > 0 && (
          <div className="p-6 bg-slate-50 border-t border-slate-100">
            <div className="flex justify-between items-center mb-6">
              <span className="text-slate-500 font-bold uppercase tracking-widest text-xs">Total</span>
              <span className="text-2xl font-black text-slate-900">KSh {cartTotal.toLocaleString()}</span>
            </div>
            <button 
              onClick={handleCheckout}
              className="w-full bg-green-500 hover:bg-green-600 text-white py-4 rounded-2xl font-black text-sm uppercase tracking-widest flex items-center justify-center gap-3 transition-all shadow-lg shadow-green-500/30"
            >
              <MessageCircle size={20} /> Checkout via WhatsApp
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default SlideOutCart;