import React from 'react';
import { ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Product } from '../../types';
import { useCart } from '../../context/CartContext';

interface ProductCardProps {
  item: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ item }) => {
  const { addToCart } = useCart();

  return (
    <div className="group relative">
      
      {/* 1. The Image Section (Clickable Link) */}
      <Link to={`/product/${item.id}`} className="block">
        <div className="relative aspect-[4/5] bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-sm transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-3">
          <img 
            src={item.image} 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
            alt={item.name} 
          />
          <div className="absolute top-6 left-6 flex flex-col gap-2 z-10">
            <span className="bg-white/90 backdrop-blur-md text-slate-900 text-[10px] font-black px-4 py-1.5 rounded-full shadow-sm italic">
              {item.tag}
            </span>
          </div>
          {/* Gradient overlay for hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-8 flex flex-col justify-end pointer-events-none"></div>
        </div>
      </Link>

      {/* 2. The Add To Cart Button (Isolated from the Link) 
          This is positioned absolutely over the image, but outside the <Link> tag 
      */}
      <div className="absolute bottom-32 left-8 right-8 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
        <button 
          onClick={(e) => {
            e.preventDefault(); // Prevents the browser from following any links
            e.stopPropagation(); // Stops the click from bubbling up
            addToCart(item);
          }}
          className="w-full bg-green-500 text-white py-4 rounded-2xl font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-green-600 transition-all shadow-lg shadow-green-500/30"
        >
          <ShoppingBag size={16} /> Add to Cart
        </button>
      </div>

      {/* 3. The Text Section (Clickable Link) */}
      <Link to={`/product/${item.id}`} className="block mt-6 space-y-1 px-2 group-hover:text-red-600 transition-colors">
        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest italic">{item.brand}</p>
        <h5 className="text-xl font-black text-slate-900 tracking-tight uppercase italic transition-colors">
          {item.name}
        </h5>
        <div className="flex items-center gap-3 pt-1">
          <span className="text-2xl font-black text-slate-900">KSh {item.price}</span>
          <span className="text-xs text-slate-400 line-through">KSh {item.oldPrice}</span>
        </div>
      </Link>
      
    </div>
  );
};

export default ProductCard;