import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ShoppingBag, ShieldCheck, Truck, ArrowLeft, Star, CheckCircle, Info } from 'lucide-react';
import { ALL_PRODUCTS } from '../data/constants';
import { useCart } from '../context/CartContext';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const product = ALL_PRODUCTS.find(p => p.id === Number(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <main className="pt-40 pb-24 px-4 max-w-7xl mx-auto min-h-screen text-center flex flex-col items-center justify-center">
        <ShoppingBag size={64} className="text-slate-200 mb-6" />
        <h1 className="text-4xl font-black mb-4 tracking-tighter uppercase italic">Product Not Found</h1>
        <p className="text-slate-500 mb-8">The device you are looking for might have been removed or is out of stock.</p>
        <button 
          onClick={() => navigate('/shop')} 
          className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-red-600 transition-all shadow-xl"
        >
          Return to Shop
        </button>
      </main>
    );
  }

  return (
    <main className="pt-32 pb-24 px-4 max-w-7xl mx-auto min-h-screen">
      <Link to="/shop" className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-red-600 mb-8 transition-colors">
        <ArrowLeft size={16} /> Back to Shop
      </Link>

      {/* --- HERO SECTION --- */}
      <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
        
        {/* Left Column: Image Gallery (Made sticky so it stays visible as you scroll specs) */}
        <div className="bg-white rounded-[3rem] p-8 border border-slate-100 shadow-xl relative h-fit sticky top-32">
          {product.tag && (
            <span className="absolute top-8 left-8 bg-red-600 text-white text-[10px] font-black px-4 py-1.5 rounded-full shadow-lg italic z-10">
              {product.tag}
            </span>
          )}
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-auto object-cover rounded-2xl hover:scale-105 transition-transform duration-500" 
          />
        </div>

        {/* Right Column: Buying Logic */}
        <div className="space-y-8 py-4">
          
          <div>
            <span className="text-xs font-black uppercase tracking-widest text-red-600">{product.brand}</span>
            <h1 className="text-4xl md:text-5xl font-black tracking-tighter uppercase italic mt-2">{product.name}</h1>
            <div className="flex items-center gap-2 mt-4">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} className="fill-current" />)}
              </div>
              <span className="text-sm font-bold text-slate-400">
                ({product.reviews ? product.reviews.length : '128'} Reviews)
              </span>
            </div>
          </div>
          
          <div className="flex items-end gap-4">
            <span className="text-5xl font-black text-slate-900 tracking-tighter">KSh {product.price}</span>
            <span className="text-xl text-slate-400 line-through font-medium mb-1">KSh {product.oldPrice}</span>
          </div>

          <div className="flex items-center gap-2 text-sm font-bold text-green-600 bg-green-50 px-4 py-2 rounded-xl inline-flex border border-green-100">
            <CheckCircle size={16} /> In Stock at Lydia Arcade
          </div>

          <p className="text-slate-500 leading-relaxed font-medium text-lg">
            {product.description}
          </p>

          <div className="pt-6">
            <button 
              onClick={() => addToCart(product)}
              className="w-full bg-green-500 text-white py-5 rounded-2xl font-black text-sm uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-green-600 active:scale-95 transition-all shadow-xl shadow-green-500/30"
            >
              <ShoppingBag size={20} /> Add to Cart
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-8 border-t border-slate-100">
            <div className="flex gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-100">
              <ShieldCheck className="text-red-600 shrink-0" size={24} />
              <div>
                <p className="text-sm font-black text-slate-900">1 Year Warranty</p>
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Official Guarantee</p>
              </div>
            </div>
            <div className="flex gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-100">
              <Truck className="text-red-600 shrink-0" size={24} />
              <div>
                <p className="text-sm font-black text-slate-900">Free Delivery</p>
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Within Nakuru CBD</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* --- GSMARENA-STYLE TECHNICAL SPECIFICATIONS --- */}
      {product.detailedSpecs && (
        <div className="mt-24 pt-16 border-t border-slate-200">
          <h3 className="text-3xl md:text-4xl font-black uppercase italic mb-10 tracking-tighter">Detailed Specs</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {product.detailedSpecs.map((specGroup, idx) => (
              <div key={idx} className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-black uppercase tracking-widest text-sm text-red-600 mb-6 flex items-center gap-2">
                  <Info size={16} /> {specGroup.category}
                </h4>
                <ul className="space-y-4">
                  {specGroup.items.map((item, i) => (
                    <li key={i} className="flex flex-col sm:flex-row sm:justify-between gap-1 border-b border-slate-50 pb-4 last:border-0 last:pb-0">
                      <span className="text-slate-500 text-sm font-bold min-w-[120px]">{item.name}</span>
                      <span className="text-slate-900 text-sm font-medium sm:text-right">{item.value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* --- CUSTOMER REVIEWS --- */}
      {product.reviews && (
        <div className="mt-24 pt-16 border-t border-slate-200">
          <h3 className="text-3xl md:text-4xl font-black uppercase italic mb-10 tracking-tighter">Customer Reviews</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {product.reviews.map((rev, idx) => (
              <div key={idx} className="bg-slate-50 rounded-3xl p-8 border border-slate-100">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h5 className="font-black text-slate-900 uppercase tracking-widest text-sm">{rev.user}</h5>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">{rev.date}</p>
                  </div>
                  <div className="flex text-yellow-400">
                    {[...Array(rev.rating)].map((_, i) => <Star key={i} size={14} className="fill-current" />)}
                  </div>
                </div>
                <p className="text-slate-600 font-medium leading-relaxed italic">"{rev.comment}"</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* --- PRICING DISCLAIMER --- */}
      <div className="mt-16 bg-red-50 border border-red-100 p-6 rounded-2xl text-center">
        <p className="text-xs font-black text-red-600 uppercase tracking-widest">
          Disclaimer: Prices & Stock Availability Subject to Change Without Notice!
        </p>
      </div>

    </main>
  );
};

export default ProductDetail;